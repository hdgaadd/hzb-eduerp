package com.hzb.erp.security;

import com.hzb.erp.common.configuration.SystemConfig;
import com.hzb.erp.security.handler.JwtTokenFilter;
import com.hzb.erp.security.handler.MyLogoutSuccessHandler;
import com.hzb.erp.security.provider.StaffAuthenticationProvider;
import com.hzb.erp.security.provider.UserAuthenticationProvider;
import com.hzb.erp.security.provider.staff.StaffAuthenticationFilter;
import com.hzb.erp.security.provider.user.UserAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.access.AccessDecisionManager;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.ObjectPostProcessor;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.access.intercept.FilterInvocationSecurityMetadataSource;
import org.springframework.security.web.access.intercept.FilterSecurityInterceptor;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * description :  Spring Security ?????????
 */
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SpringWebSecurityConfig extends WebSecurityConfigurerAdapter {

    private static final String STAFF_LOGIN_URL = "/common/login";
    private static final String STUDENT_LOGIN_URL = "/student/login";
    private static final String LOGOUT_URL = "/common/logout";

    @Autowired
    private AuthenticationFailureHandler authenticationFailureHandler;
    @Autowired
    private AuthenticationSuccessHandler authenticationSuccessHandler;
    @Autowired
    private AccessDeniedHandler accessDeniedHandler;
    @Autowired
    private AuthenticationEntryPoint authenticationEntryPoint;
    @Autowired
    private FilterInvocationSecurityMetadataSource filterInvocationSecurityMetadataSource;
    @Autowired
    private AccessDecisionManager accessDecisionManager;
    @Autowired
    @Qualifier("authenticationManagerBean")
    private AuthenticationManager authenticationManager;
    @Autowired
    private StaffAuthenticationProvider staffAuthenticationProvider;
    @Autowired
    private UserAuthenticationProvider userAuthenticationProvider;
    @Autowired
    private SystemConfig systemConfig;
    @Override
    protected void configure(HttpSecurity http) throws Exception {

        JwtTokenFilter jwtTokenFilter = new JwtTokenFilter();

        // ??????????????????
        http.authorizeRequests()
                // ???????????? springboot?????????????????????
                .withObjectPostProcessor(new ObjectPostProcessor<FilterSecurityInterceptor>() {
                    @Override
                    public <O extends FilterSecurityInterceptor> O postProcess(O object) {
                        object.setSecurityMetadataSource(filterInvocationSecurityMetadataSource);
                        object.setAccessDecisionManager(accessDecisionManager);
                        return object;
                    }
                })
                .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .and()
                .logout()
                .logoutUrl(LOGOUT_URL)
                .logoutSuccessHandler(new MyLogoutSuccessHandler())
                .permitAll();

        // ??????session
        http.sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().cors()
                .and().csrf().disable();

        // ??????????????????
        http.addFilterAt(staffAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)
                .addFilterAt(userAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)
                .addFilterAfter(jwtTokenFilter, UsernamePasswordAuthenticationFilter.class);

        // ??????????????????
        http.exceptionHandling()
                // ???????????????????????????????????????????????????????????????
                .accessDeniedHandler(accessDeniedHandler)
                // ?????????????????????????????????????????????????????????
                .authenticationEntryPoint(authenticationEntryPoint);


    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(staffAuthenticationProvider);
        auth.authenticationProvider(userAuthenticationProvider);
//        auth.authenticationProvider(wechatAuthenticationProvider);
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    // ?????????????????????
    @Bean
    public StaffAuthenticationFilter staffAuthenticationFilter() {
        StaffAuthenticationFilter filter = new StaffAuthenticationFilter();
        filter.setAuthenticationManager(authenticationManager);
        filter.setAuthenticationSuccessHandler(authenticationSuccessHandler);
        filter.setAuthenticationFailureHandler(authenticationFailureHandler);
        filter.setFilterProcessesUrl(STAFF_LOGIN_URL);
        return filter;
    }

    // ?????????????????????
    @Bean
    public UserAuthenticationFilter userAuthenticationFilter() {
        UserAuthenticationFilter filter = new UserAuthenticationFilter();
        filter.setAuthenticationManager(authenticationManager);
        filter.setAuthenticationSuccessHandler(authenticationSuccessHandler);
        filter.setAuthenticationFailureHandler(authenticationFailureHandler);
        filter.setFilterProcessesUrl(STUDENT_LOGIN_URL);
        return filter;
    }

    /**
     * ????????????
     *
     * @param web
     * @throws Exception
     */
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers(systemConfig.getSecurityIgnoringMatchers().toArray(new String[0]));
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
