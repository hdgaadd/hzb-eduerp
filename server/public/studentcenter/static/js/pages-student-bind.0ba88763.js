(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-student-bind"],{"31b5":function(t,e,a){"use strict";a.r(e);var i=a("7b82"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},"7b82":function(t,e,a){"use strict";var i=a("dbce"),s=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(a("ade3")),l=i(a("79cd")),c=i(a("149b")),d=(i(a("564d")),{data:function(){return{updating:!1,address:"",birthday:"",id_card:"",name:"",password:"",mobile:"",code:"",sendBtnDisabled:!1,sendSec:0,typeIndex:0,types:["学生","家长"],clazzList:[],clazzIndex:0,className:""}},onLoad:function(t){this.updating=1==t.upd,this.fetchUserInfo(),this.loadClazz(),uni.setNavigationBarTitle({title:"个人信息"})},methods:{fetchUserInfo:function(){var t=this;c.get("student/studentinfo",{},(function(e){if("success"==e.result){if(e.data.id&&(t.name=e.data.name,t.id_card=e.data.id_card,t.mobile=e.data.mobile,t.address=e.data.address,t.birthday=e.data.birthday,t.className=e.data.clazz_name,t.typeIndex=e.data.type-1,t.className))for(var a in t.clazzList)if(console.log(t.clazzList[a],t.className),t.clazzList[a]==t.className){t.clazzIndex=a;break}}else l.modelShow("错误",e.msg)}))},loadClazz:function(){var t=this;c.get("student/clazzList",{},(function(e){if("success"==e.result){if(t.clazzList=e.data.clazz,t.className)for(var a in t.clazzList)if(console.log(t.clazzList[a],t.className),t.clazzList[a]==t.className){t.clazzIndex=a;break}t.types=e.data.role}else l.showError(e.msg)}))},pickerChange:function(t){this.typeIndex=t.detail.value},clazzChange:function(t){this.clazzIndex=t.detail.value},handleLogin:function(){var t;""!=this.mobile?""!=this.name?0!=this.updating||""!=this.password?c.post("student/bind",(t={mobile:this.mobile,name:this.name,id_card:this.id_card},(0,n.default)(t,"mobile",this.mobile),(0,n.default)(t,"address",this.address),(0,n.default)(t,"birthday",this.birthday),(0,n.default)(t,"clazz",this.clazzList[this.clazzIndex]),(0,n.default)(t,"password",this.password),(0,n.default)(t,"updating",this.updating?1:0),(0,n.default)(t,"type",this.typeIndex+1),t),(function(t){"success"==t.result?(l.showSuccess(t.msg),uni.navigateTo({url:"/pages/index/index",animationDuration:200})):l.modelShow("错误提示",t.msg)})):l.showError("请输入绑定密码"):l.showError("请输入学生姓名"):l.showError("请输入账号")},sendSms:function(){var t=this;if(0!=l.isPhoneNumber(this.mobile)){this.sendBtnDisabled=!0,this.sendSec=30;var e=setInterval((function(){0==t.sendSec?(t.sendBtnDisabled=!1,clearInterval(e)):(t.sendBtnDisabled=!0,t.sendSec--)}),1e3);this.handleSent()}else l.showError("无效手机号")},handleSent:function(){var t=this;c.post("sendsmscode",{mob:this.mobile},(function(e){"success"==e.result?l.showSuccess(e.msg):(e.data>0&&(t.sendSec=e.data),l.showError(e.msg))}))}}});e.default=d},"88ba":function(t,e,a){"use strict";a.r(e);var i=a("a8b3"),s=a("31b5");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);var l,c=a("f0c5"),d=Object(c["a"])(s["default"],i["b"],i["c"],!1,null,"443bff30",null,!1,i["a"],l);e["default"]=d.exports},a8b3:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",[a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("用户身份")]),a("v-uni-picker",{attrs:{value:t.typeIndex,range:t.types},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.types[t.typeIndex]))])],1)],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("选择班级")]),a("v-uni-picker",{attrs:{value:t.clazzIndex,range:t.clazzList},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.clazzChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.clazzList[t.clazzIndex]))])],1)],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("学生姓名")]),a("v-uni-input",{attrs:{placeholder:"请输入",name:"input",type:"text"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),0==t.updating?a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("班级密码")]),a("v-uni-input",{attrs:{placeholder:"请联系负责老师获取密码",name:"input",type:"text"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1):t._e(),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("联系电话")]),a("v-uni-input",{attrs:{placeholder:"选填",name:"input",type:"text"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("出生年月")]),a("v-uni-input",{attrs:{placeholder:"选填",name:"input",type:"text"},model:{value:t.birthday,callback:function(e){t.birthday=e},expression:"birthday"}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("联系地址")]),a("v-uni-input",{attrs:{placeholder:"选填",name:"input",type:"text"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("身份证号")]),a("v-uni-input",{attrs:{placeholder:"选填",name:"input",type:"text"},model:{value:t.id_card,callback:function(e){t.id_card=e},expression:"id_card"}})],1),a("v-uni-view",{staticClass:"padding flex flex-direction",staticStyle:{width:"100%"}},[a("v-uni-button",{staticClass:"cu-btn bg-green margin-tb-sm lg shadow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleLogin.apply(void 0,arguments)}}},[t._v(t._s(t.updating?"保存":"立即绑定"))])],1)],1)],1)},n=[]}}]);