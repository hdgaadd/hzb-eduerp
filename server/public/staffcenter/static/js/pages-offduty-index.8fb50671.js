(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-offduty-index"],{5721:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-title text-orange "}),t._v("请假记录")],1)],1),a("v-uni-view",{staticClass:"cu-list menu sm-border",staticStyle:{"padding-bottom":"200upx"}},[t._l(t.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content padding-sm"},[a("v-uni-view",{staticClass:"text-black text-df"},[t._v("请假周期: "+t._s(e.start_date)+" ~ "+t._s(e.end_date))]),a("v-uni-view",{staticClass:"text-black text-df"},[t._v("["+t._s(e.type.name)+"] "+t._s(e.reason))]),a("v-uni-view",{staticClass:"text-gray text-df"},[t._v("申请时间: "+t._s(e.add_time))]),a("v-uni-view",{staticClass:"text-gray text-df"},[t._v("审核结果: "+t._s(e.verify_remark)+" "+t._s(e.verify_time))]),a("v-uni-view",{staticClass:"text-gray text-df"},[a("v-uni-view",t._l(e.images,(function(i,s){return a("v-uni-image",{key:i,staticClass:"margin-xs",staticStyle:{width:"160upx",height:"160upx",display:"inline-block",border:"1px solid #ddd"},attrs:{src:i,mode:"scaleToFill"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.previewImg(e.images,s)}}})})),1)],1)],1),a("v-uni-view",{staticClass:"action text-right"},[a("v-uni-view",[t._v(t._s(e.status_text))])],1)],1)})),0==t.list.length?a("v-uni-view",{staticClass:"text-center padding text-gray"},[t._v("暂无记录")]):t._e()],2)],1)},n=[]},"89e8":function(t,e,a){"use strict";a.r(e);var i=a("5721"),s=a("d5b4");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);var u,c=a("f0c5"),o=Object(c["a"])(s["default"],i["b"],i["c"],!1,null,"fdd910b8",null,!1,i["a"],u);e["default"]=o.exports},aed1:function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("b215")),n={data:function(){return{pageData:{page:1,lastPage:1}}},onReachBottom:function(){this.handleReachBottom()},methods:{foo:function(){console.log("foo")},handleReachBottom:function(){this.pageData.lastPage!=this.pageData.page&&(this.pageData.lastPage>this.pageData.page?(this.pageData.page++,this.handleReq()):s.default.showError("没有更多数据"))}}};e.default=n},d5b4:function(t,e,a){"use strict";a.r(e);var i=a("dee1"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},dee1:function(t,e,a){"use strict";var i=a("4ea4"),s=a("dbce");a("99af"),a("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(a("b215")),u=s(a("69ec")),c=i(a("aed1")),o={mixins:[c.default],data:function(){return{mobile:"",list:[]}},onLoad:function(){this.handleReq()},methods:{handleReq:function(){var t=this;u.get("staff/offdutyHistory",{page:this.pageData.page,mobile:this.mobile},(function(e){"success"==e.result?(t.list=t.list.concat(e.data.data),t.pageData.page=parseInt(e.data.current_page),t.pageData.lastPage=parseInt(e.data.last_page)):n.showError(e.msg)}))},handleSearch:function(){this.pageData.page=1,this.list=[],this.handleReq()},previewImg:function(t,e){uni.previewImage({urls:t,current:t[e],longPressActions:{itemList:["发送给朋友","保存图片","收藏"]}})}}};e.default=o}}]);