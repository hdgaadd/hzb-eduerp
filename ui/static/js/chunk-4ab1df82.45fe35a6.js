(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ab1df82"],{2017:function(t,e,n){"use strict";n("cafe")},"301c7":function(t,e,n){t.exports=n.p+"static/img/banner.4bcdc46c.jpg"},"70e0":function(t,e,n){"use strict";n("ef5b")},"9ed6":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("bg-stars",[n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,autocomplete:"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[t.logo?n("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:t.logo,width:"50"}}):t._e(),t._v(" "+t._s(t.title))]),n("div",{staticStyle:{color:"#fff","text-align":"center","margin-bottom":"20px","font-size":"12px"}},[t._v(" "+t._s(t.subject))])]),n("el-image",{staticStyle:{width:"100%","border-radius":"5px","margin-bottom":"10px"},attrs:{src:t.banner,fit:"contain"}}),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),n("el-input",{ref:"username",attrs:{placeholder:"请输入账号",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),n("el-tooltip",{attrs:{content:"键盘开启大写",placement:"right",manual:""},model:{value:t.capsTooltip,callback:function(e){t.capsTooltip=e},expression:"capsTooltip"}},[n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),n("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:"请输入密码",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(e){t.capsTooltip=!1}},nativeOn:{keyup:[function(e){return t.checkCapslock.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin.apply(null,arguments)}]},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),n("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1)],1),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px","font-size":"110%","font-weight":"bold"},attrs:{loading:t.loading,type:"primary",size:"large"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin.apply(null,arguments)}}},[t._v("欢迎登录")]),n("div",{staticStyle:{position:"relative","text-align":"center","line-height":"150%"}},[n("div",{staticClass:"tips",staticStyle:{"margin-bottom":"10px"}},[n("span",[t._v("演示账号 : admin 密码 : 123 ")]),n("div",[t._v("联系我们 (微信)：15666323771 "),n("span",[t._v("版本: "+t._s(t.version))])])]),n("div",{staticClass:"tips",staticStyle:{"margin-bottom":"10px","font-size":"12px"}},[t._v(" 适用浏览器：QQ浏览器极速、360极速、FireFox、Chrome、Safari、搜狗 ")]),n("div",[n("el-button",{staticClass:"thirdparty-button",staticStyle:{width:"40%",padding:"15px"},attrs:{type:"primary"}},[n("vue-qr",{attrs:{size:80,margin:0,"auto-color":!0,"dot-scale":1,text:t.teacherEnd}}),n("div",{staticStyle:{padding:"5px"}},[t._v("老师端")])],1),n("el-button",{staticClass:"thirdparty-button",staticStyle:{width:"40%",padding:"15px"},attrs:{type:"primary"}},[n("vue-qr",{attrs:{size:80,margin:0,"auto-color":!0,"dot-scale":1,text:t.studentEnd}}),n("div",{staticStyle:{padding:"5px"}},[t._v("家长端")])],1)],1)])],1),n("el-dialog",{attrs:{title:"使用微信登录",visible:t.showDialog},on:{"update:visible":function(e){t.showDialog=e}}},[n("br"),n("social-sign")],1),n("div",{staticStyle:{position:"fixed",bottom:"10px",left:"10px"}},[n("a",{attrs:{href:"http://hzb-it.com",target:"_blank"}},[n("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"http://hzb-it.com/logo-full-w.png",height:"20"}})])])],1)])},s=[],a=n("1da1"),o=(n("b64b"),n("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social-signup-container"},[n("div",{staticClass:"sign-btn",on:{click:function(e){return t.wechatHandleClick("wechat")}}},[n("span",{staticClass:"wx-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),t._v(" WeChat ")]),n("div",{staticClass:"sign-btn",on:{click:function(e){return t.tencentHandleClick("tencent")}}},[n("span",{staticClass:"qq-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),t._v(" QQ ")])])}),r=[],c={name:"SocialSignin",methods:{wechatHandleClick:function(t){alert("ok")},tencentHandleClick:function(t){alert("ok")}}},l=c,u=(n("d9fb"),n("2877")),d=Object(u["a"])(l,o,r,!1,null,"7309fbbb",null),p=d.exports,g=n("cf45"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-container"},[n("div",{attrs:{id:"stars"}}),n("div",{attrs:{id:"stars2"}}),n("div",{attrs:{id:"content"}},[t._t("default")],2)])},h=[],m={name:"Login",data:function(){return{}}},v=m,w=(n("70e0"),Object(u["a"])(v,f,h,!1,null,null,null)),b=w.exports,y=n("301c7"),x=n.n(y),k=n("658f5"),C=n.n(k),_={name:"Login",components:{SocialSign:p,BgStars:b,VueQr:C.a},data:function(){var t=function(t,e,n){e?n():n(new Error("请输入账号"))},e=function(t,e,n){n()};return{banner:x.a,logo:window.appLogo||this.$store.state.settings.logo,title:window.appTitle||this.$store.state.settings.title,subject:this.$store.state.settings.subject,teacherEnd:window.location.protocol+"//"+window.location.host+"/t",studentEnd:window.location.protocol+"//"+window.location.host+"/s",loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:t}],password:[{required:!0,trigger:"blur",validator:e}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{},version:this.$store.state.settings.version}},watch:{$route:{handler:function(t){var e=t.query;e&&(this.redirect=e.redirect,this.otherQuery=this.getOtherQuery(e))},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{checkCapslock:function(t){var e=t.key;this.capsTooltip=e&&1===e.length&&e>="A"&&e<="Z"},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;this.$refs.loginForm.validate(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n){e.next=5;break}t.loading=!0,t.$store.dispatch("user/login",t.loginForm).then((function(){Object(g["g"])(),t.$router.push({path:t.redirect||"/",query:t.otherQuery}),t.loading=!1})).catch((function(){t.loading=!1})),e.next=7;break;case 5:return t.loading=!1,e.abrupt("return",!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},getOtherQuery:function(t){return Object.keys(t).reduce((function(e,n){return"redirect"!==n&&(e[n]=t[n]),e}),{})}}},S=_,$=(n("2017"),Object(u["a"])(S,i,s,!1,null,null,null));e["default"]=$.exports},a9b3:function(t,e,n){},cafe:function(t,e,n){},d9fb:function(t,e,n){"use strict";n("a9b3")},ef5b:function(t,e,n){}}]);