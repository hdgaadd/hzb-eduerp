(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-zone-publish"],{"0670":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".audio[data-v-e1a11574]{background:#f4f4f4;padding:%?20?%}.icon[data-v-e1a11574]{font-size:%?54?%}",""]),e.exports=t},1408:function(e,t,n){var i=n("fc1f");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("8d8cb0f0",i,!0,{sourceMap:!1,shadowMode:!1})},"1b8e":function(e,t,n){"use strict";n("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{url:String,activeColor:{type:String,default:"#0E7EFC"}},data:function(){return{innerAudioContext:null,context:null,currentTime:0,duration:100,status:!1}},beforeDestroy:function(){this.innerAudioContext.stop()},created:function(){this.innerAudioContext=uni.createInnerAudioContext()},methods:{start:function(){console.log(this.url),this.innerAudioContext.src=this.url,this.onTimeUpdate(),this.onCanplay(),this.onEnded(),this.status?this.innerAudioContext.pause():this.innerAudioContext.play(),this.status=!this.status},onCanplay:function(){var e=this;this.innerAudioContext.onCanplay((function(){e.innerAudioContext.duration,setTimeout((function(){e.duration=e.innerAudioContext.duration}),1e3)}))},onTimeUpdate:function(){var e=this;this.innerAudioContext.onTimeUpdate((function(){e.currentTime=e.innerAudioContext.currentTime}))},onEnded:function(){var e=this;this.innerAudioContext.onEnded((function(){e.status=!1,e.currentTime=0}))},changeAudio:function(e){this.innerAudioContext.seek(e.detail.value)},getTime:function(e){var t=parseInt(e/60),n=e%60;return this.towNum(t)+":"+this.towNum(n)},towNum:function(e){return e>=10?e:"0"+e}}};t.default=i},"2bed":function(e,t,n){var i;n("c975"),n("ac1f"),n("466d"),n("5319"),n("1276");var o=n("9523");!function(o,a){i=function(){return a(o)}.call(t,n,t,e),void 0===i||(e.exports=i)}(window,(function(e,t){if(!e.jWeixin){var n,i,a={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},s=function(){var e={};for(var t in a)e[a[t]]=t;return e}(),r=e.document,c=r.title,u=navigator.userAgent.toLowerCase(),d=navigator.platform.toLowerCase(),l=!(!d.match("mac")&&!d.match("win")),f=-1!=u.indexOf("wxdebugger"),p=-1!=u.indexOf("micromessenger"),m=-1!=u.indexOf("android"),v=-1!=u.indexOf("iphone")||-1!=u.indexOf("ipad"),g=(i=u.match(/micromessenger\/(\d+\.\d+\.\d+)/)||u.match(/micromessenger\/(\d+\.\d+)/))?i[1]:"",h={initStartTime:R(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},w={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:v?1:m?2:-1,clientVersion:g,url:encodeURIComponent(location.href)},y={},x={_completes:[]},I={state:0,data:{}};B((function(){h.initEndTime=R()}));var C=!1,_=[],b=(n={config:function(t){P("config",y=t);var n=!1!==y.check;B((function(){if(n)T(a.config,{verifyJsApiList:V(y.jsApiList),verifyOpenTagList:V(y.openTagList)},function(){x._complete=function(e){h.preVerifyEndTime=R(),I.state=1,I.data=e},x.success=function(e){w.isPreVerifyOk=0},x.fail=function(e){x._fail?x._fail(e):I.state=-1};var e=x._completes;return e.push((function(){!function(){if(!(l||f||y.debug||g<"6.0.2"||w.systemType<0)){var e=new Image;w.appId=y.appId,w.initTime=h.initEndTime-h.initStartTime,w.preVerifyTime=h.preVerifyEndTime-h.preVerifyStartTime,b.getNetworkType({isInnerInvoke:!0,success:function(t){w.networkType=t.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+w.version+"&o="+w.isPreVerifyOk+"&s="+w.systemType+"&c="+w.clientVersion+"&a="+w.appId+"&n="+w.networkType+"&i="+w.initTime+"&p="+w.preVerifyTime+"&u="+w.url;e.src=n}})}}()})),x.complete=function(t){for(var n=0,i=e.length;n<i;++n)e[n]();x._completes=[]},x}()),h.preVerifyStartTime=R();else{I.state=1;for(var e=x._completes,t=0,i=e.length;t<i;++t)e[t]();x._completes=[]}})),b.invoke||(b.invoke=function(t,n,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,E(n),i)},b.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})},ready:function(e){0!=I.state?e():(x._completes.push(e),!p&&y.debug&&e())},error:function(e){g<"6.0.2"||(-1==I.state?e(I.data):x._fail=e)},checkJsApi:function(e){T("checkJsApi",{jsApiList:V(e.jsApiList)},(e._complete=function(e){if(m){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var n in t){var i=s[n];i&&(t[i]=t[n],delete t[n])}return e}(e)},e))},onMenuShareTimeline:function(e){M(a.onMenuShareTimeline,{complete:function(){T("shareTimeline",{title:e.title||c,desc:e.title||c,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){M(a.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?T("sendAppMessage",{title:e.title||c,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):T("sendAppMessage",{title:e.title||c,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){M(a.onMenuShareQQ,{complete:function(){T("shareQQ",{title:e.title||c,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){M(a.onMenuShareWeibo,{complete:function(){T("shareWeiboApp",{title:e.title||c,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){M(a.onMenuShareQZone,{complete:function(){T("shareQZone",{title:e.title||c,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){T("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){T("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){T("startRecord",{},e)},stopRecord:function(e){T("stopRecord",{},e)},onVoiceRecordEnd:function(e){M("onVoiceRecordEnd",e)},playVoice:function(e){T("playVoice",{localId:e.localId},e)},pauseVoice:function(e){T("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){T("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){M("onVoicePlayEnd",e)},uploadVoice:function(e){T("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){T("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){T("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){T("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(m){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){T(a.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){T("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){T("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===C?(C=!0,T("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(C=!1,0<_.length){var t=_.shift();wx.getLocalImgData(t)}},e))):_.push(e)},getNetworkType:function(e){T("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var i=t.indexOf(":"),o=t.substring(i+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){T("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},o(n,"getLocation",(function(e){T(a.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),o(n,"hideOptionMenu",(function(e){T("hideOptionMenu",{},e)})),o(n,"showOptionMenu",(function(e){T("showOptionMenu",{},e)})),o(n,"closeWindow",(function(e){T("closeWindow",{},e=e||{})})),o(n,"hideMenuItems",(function(e){T("hideMenuItems",{menuList:e.menuList},e)})),o(n,"showMenuItems",(function(e){T("showMenuItems",{menuList:e.menuList},e)})),o(n,"hideAllNonBaseMenuItem",(function(e){T("hideAllNonBaseMenuItem",{},e)})),o(n,"showAllNonBaseMenuItem",(function(e){T("showAllNonBaseMenuItem",{},e)})),o(n,"scanQRCode",(function(e){T("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(v){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e))})),o(n,"openAddress",(function(e){T(a.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))})),o(n,"openProductSpecificView",(function(e){T(a.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),o(n,"addCard",(function(e){for(var t=e.cardList,n=[],i=0,o=t.length;i<o;++i){var s=t[i],r={card_id:s.cardId,card_ext:s.cardExt};n.push(r)}T(a.addCard,{card_list:n},(e._complete=function(e){var t=e.card_list;if(t){for(var n=0,i=(t=JSON.parse(t)).length;n<i;++n){var o=t[n];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=t,delete e.card_list}},e))})),o(n,"chooseCard",(function(e){T("chooseCard",{app_id:y.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),o(n,"openCard",(function(e){for(var t=e.cardList,n=[],i=0,o=t.length;i<o;++i){var s=t[i],r={card_id:s.cardId,code:s.code};n.push(r)}T(a.openCard,{card_list:n},e)})),o(n,"consumeAndShareCard",(function(e){T(a.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),o(n,"chooseWXPay",(function(e){T(a.chooseWXPay,A(e),e)})),o(n,"openEnterpriseRedPacket",(function(e){T(a.openEnterpriseRedPacket,A(e),e)})),o(n,"startSearchBeacons",(function(e){T(a.startSearchBeacons,{ticket:e.ticket},e)})),o(n,"stopSearchBeacons",(function(e){T(a.stopSearchBeacons,{},e)})),o(n,"onSearchBeacons",(function(e){M(a.onSearchBeacons,e)})),o(n,"openEnterpriseChat",(function(e){T("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),o(n,"launchMiniProgram",(function(e){T("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],n=e.split("?")[1];return t+=".html",void 0!==n?t+"?"+n:t}}(e.path),envVersion:e.envVersion},e)})),o(n,"openBusinessView",(function(e){T("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(m){var t=e.extraData;if(t)try{e.extraData=JSON.parse(t)}catch(t){e.extraData={}}}},e))})),o(n,"miniProgram",{navigateBack:function(e){e=e||{},B((function(){T("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){B((function(){T("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){B((function(){T("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){B((function(){T("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){B((function(){T("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){B((function(){T("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(t){B((function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),n),S=1,k={};return r.addEventListener("error",(function(e){if(!m){var t=e.target,n=t.tagName,i=t.src;if(("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=t["wx-id"];if(o||(o=S++,t["wx-id"]=o),k[o])return;k[o]=!0,wx.ready((function(){wx.getLocalImgData({localId:i,success:function(e){t.src=e.localData}})}))}}}),!0),r.addEventListener("load",(function(e){if(!m){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var i=t["wx-id"];i&&(k[i]=!1)}}}),!0),t&&(e.wx=e.jWeixin=b),b}function T(t,n,i){e.WeixinJSBridge?WeixinJSBridge.invoke(t,E(n),(function(e){L(t,e,i)})):P(t,i)}function M(t,n,i){e.WeixinJSBridge?WeixinJSBridge.on(t,(function(e){i&&i.trigger&&i.trigger(e),L(t,e,n)})):P(t,i||n)}function E(e){return(e=e||{}).appId=y.appId,e.verifyAppId=y.appId,e.verifySignType="sha1",e.verifyTimestamp=y.timestamp+"",e.verifyNonceStr=y.nonceStr,e.verifySignature=y.signature,e}function A(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function L(e,t,n){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var i=t.errMsg;i||(i=t.err_msg,delete t.err_msg,i=function(e,t){var n=e,i=s[n];i&&(n=i);var o="ok";if(t){var a=t.indexOf(":");"confirm"==(o=t.substring(a+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==n&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return n+":"+o}(e,i),t.errMsg=i),(n=n||{})._complete&&(n._complete(t),delete n._complete),i=t.errMsg||"",y.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var o=i.indexOf(":");switch(i.substring(o+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function V(e){if(e){for(var t=0,n=e.length;t<n;++t){var i=e[t],o=a[i];o&&(e[t]=o)}return e}}function P(e,t){if(!(!y.debug||t&&t.isInnerInvoke)){var n=s[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function R(){return(new Date).getTime()}function B(t){p&&(e.WeixinJSBridge?t():r.addEventListener&&r.addEventListener("WeixinJSBridgeReady",t,!1))}}))},3522:function(e,t,n){"use strict";n.r(t);var i=n("e0d2"),o=n("795e");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("9d09");var s,r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"0ddbdfb0",null,!1,i["a"],s);t["default"]=c.exports},"38b9":function(e,t,n){var i=n("0670");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("1a83eb1d",i,!0,{sourceMap:!1,shadowMode:!1})},"3c41":function(e,t,n){"use strict";n.r(t);var i=n("b4f1"),o=n("77f4");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);var s,r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"a8403f5a",null,!1,i["a"],s);t["default"]=c.exports},"69d9":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("79cd")),a={data:function(){return{pageData:{page:1,lastPage:1}}},onReachBottom:function(){this.handleReachBottom()},methods:{foo:function(){console.log("foo")},handleReachBottom:function(){this.pageData.lastPage!=this.pageData.page&&(this.pageData.lastPage>this.pageData.page?(this.pageData.page++,this.handleReq()):o.default.showError("没有更多数据"))}}};t.default=a},"77f4":function(e,t,n){"use strict";n.r(t);var i=n("d1a2"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},"795e":function(e,t,n){"use strict";n.r(t);var i=n("7c57"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},"7c57":function(e,t,n){"use strict";var i=n("dbce"),o=n("4ea4");n("a434"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("b85c")),s=i(n("79cd")),r=i(n("149b")),c=o(n("a8fc")),u=o(n("3c41")),d=o(n("de84")),l=o(n("69d9")),f=n("d90e"),p={mixins:[l.default],components:{imgUpload:u.default,audioPlayer:d.default},data:function(){return{recordText:"录音",taskId:"",content:"",info:{},list:[],showCommentModal:!1,commentContent:"",commentId:0,commentIndex:0,audioContext:null,recordIng:!1,recordStart:!1,serviceId:null,showTools:!1,imgList:[],mediaList:[],timeIntval:0}},onShow:function(){},onLoad:function(e){this.taskId=e.id,this.handleReq(e.id),this.reqList(e.id)},methods:{handleRecord:function(){this.recordIng=!this.recordIng},InputFocus:function(e){this.InputBottom=e.detail.height},InputBlur:function(e){this.InputBottom=0},textareaInput:function(e){this.commentContent=e.detail.value},handleComment:function(e,t){this.commentContent="",this.commentIndex=t,this.showCommentModal=!0,this.commentId=e},handleDelComment:function(e,t){var n=this;r.post("student/zoneCommentDel",{id:e},(function(e){s.showError(e.msg),n.list[t].comments=e.data.list}))},publishComment:function(){var e=this;this.showCommentModal=!1,r.post("student/zoneComment",{id:this.commentId,content:this.commentContent},(function(t){s.showError(t.msg),e.list[e.commentIndex].comments=t.data.list}))},fixImgUrlFunc:function(e){return(0,f.fixImgUrl)(e)},handleReq:function(e){var t=this;r.get("student/section",{id:e},(function(e){"success"==e.result?t.info=e.data:s.showError(e.msg)}))},reqList:function(e){var t=this;r.get("student/zoneList",{task_id:this.taskId},(function(e){"success"==e.result?t.list=e.data.data:s.showError(e.msg)}))},handleSubmit:function(){var e=this;if(""!=this.content||0!=this.mediaList.length){var t={task_id:this.taskId,content:this.content,media_list:this.mediaList};r.post("student/zonePublish",t,(function(t){"success"==t.result?s.showSuccess(t.msg,(function(){e.reqList(e.taskId),e.mediaList=[],e.content="",e.showTools=!1})):s.showError(t.msg)}))}else s.showError("请设置发送内容")},handleLike:function(e,t){var n=this;r.get("student/zoneLike",{id:e},(function(e){s.showError(e.msg),n.list[t].likes_count=e.data.count}))},previewImg:function(e,t){var n,i=[],o=(0,a.default)(e);try{for(o.s();!(n=o.n()).done;){var s=n.value;i.push(this.fixImgUrlFunc(s))}}catch(r){o.e(r)}finally{o.f()}uni.previewImage({urls:i,current:i[t],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(e){console.log("选中了第"+(e.tapIndex+1)+"个按钮,第"+(e.index+1)+"张图片")},fail:function(e){console.log(e)}}})},previewImg2:function(e){uni.previewImage({urls:[e],current:this.fixImgUrlFunc(e),longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(e){},fail:function(e){}}})},startRecord:function(){var e=this;if(this.recordStart)this.recordText="录音",clearInterval(this.timeIntval),c.default.stopRecord((function(t){e.recordId=t,e.uploadVoice(t),e.recordText="已录制"}));else{var t=60;this.recordText="点击停止("+t+")",this.timeIntval=setInterval((function(){t--,e.recordText="点击停止("+t+")",0==t&&(e.recordStart=!0,e.startRecord())}),1e3),c.default.startRecord((function(t){e.recordId=t}))}this.recordStart=!this.recordStart},playRecord:function(){this.playing?(this.playing=!1,c.default.stopVoice(this.recordId)):(this.playing=!0,c.default.playVoice(this.recordId))},uploadVoice:function(){var e=this;c.default.uploadVoice(this.recordId,(function(t){e.mediaList.push({type:"voice",voice:t})}))},delMedia:function(e){this.mediaList.splice(e,1)},chooseImage:function(){var e=this;r.uploadFiles((function(t){e.mediaList.push({type:"img",url:(0,f.fixImgUrl)(t.data.url)})}))}}};t.default=p},9523:function(e,t){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.exports=n},"9d09":function(e,t,n){"use strict";var i=n("1408"),o=n.n(i);o.a},a8fc:function(e,t,n){"use strict";var i=n("dbce");n("ac1f"),n("466d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("149b")),a=n("2bed"),s={isWechat:function(){var e=window.navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/micromessenger/i)},initJssdk:function(e,t){o.post("wxJsSdkConfig",{url:t},(function(t){var n=t.data;"success"==t.result&&(a.config({debug:!1,appId:n.appId,timestamp:n.timestamp,nonceStr:n.nonceStr,signature:n.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","scanQRCode","startRecord","stopRecord","onVoiceRecordEnd","playVoice","pauseVoice","stopVoice","onVoicePlayEnd","uploadVoice","downloadVoice"]}),e&&e(n))}),!1,!1)},share:function(e,t){t=t||window.location.href,this.isWechat()&&this.initJssdk((function(n){a.ready((function(){var i={title:e&&e.title?e.title:n.site_name,desc:e&&e.desc?e.desc:n.site_description,link:t,imgUrl:e&&e.img?e.img:n.site_logo,success:function(e){},cancel:function(e){}};a.onMenuShareAppMessage(i),a.onMenuShareTimeline(i)}))}),t)},scanQRCode:function(e){var t=window.location.href;this.isWechat()&&this.initJssdk((function(t){a.ready((function(){a.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(t){var n=t.resultStr;e&&e(n)}})}))}),t)},startRecord:function(e){var t=t||window.location.href;this.isWechat()&&this.initJssdk((function(t){a.ready((function(){a.startRecord(),a.onVoiceRecordEnd({complete:function(t){e(t.localId)}})}))}),t)},stopRecord:function(e){var t=t||window.location.href;this.isWechat()&&this.initJssdk((function(t){a.ready((function(){a.stopRecord({success:function(t){e(t.localId)}})}))}),t)},playVoice:function(e){var t=t||window.location.href;this.isWechat()&&this.initJssdk((function(t){a.ready((function(){a.playVoice({localId:e})}))}),t)},stopVoice:function(e){var t=t||window.location.href;this.isWechat()&&this.initJssdk((function(t){a.ready((function(){a.stopVoice({localId:e})}))}),t)},uploadVoice:function(e,t){var n=n||window.location.href;this.isWechat()&&this.initJssdk((function(n){a.ready((function(){a.uploadVoice({localId:e,isShowProgressTips:1,success:function(e){t(e.serverId)}})}))}),n)}};t.default=s},b4f1:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"cu-form-group padding-top-sm"},[n("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[e._l(e.imgList,(function(t,i){return n("v-uni-view",{key:i,staticClass:"bg-img",attrs:{"data-url":e.imgList[i]},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.ViewImage.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:e.imgList[i],mode:"aspectFill"}}),n("v-uni-view",{staticClass:"cu-tag bg-red",attrs:{"data-index":i},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.DelImg.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)})),e.imgList.length<e.max?n("v-uni-view",{staticClass:"solids",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.ChooseImage.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-cameraadd"})],1):e._e()],2)],1)},a=[]},d1a2:function(e,t,n){"use strict";var i=n("dbce");n("a434"),n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("149b")),a=n("d90e"),s={props:{max:{type:Number,default:9},list:{type:Array,default:function(){return[]}}},data:function(){return{imgList:[]}},created:function(){this.list.length>0&&(this.imgList=this.list)},methods:{ViewImage:function(e){uni.previewImage({urls:this.imgList,current:e.currentTarget.dataset.url})},DelImg:function(e){var t=this;uni.showModal({title:"删除确认",content:"确定要删除?",success:function(n){n.confirm&&t.imgList.splice(e.currentTarget.dataset.index,1)}})},ChooseImage:function(){var e=this;o.uploadFiles((function(t){e.imgList.push((0,a.fixImgUrl)(t.data.url)),uni.$emit("choosedImg",t.data.url)}))}}};t.default=s},d366:function(e,t,n){"use strict";n.r(t);var i=n("1b8e"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},d90e:function(e,t,n){"use strict";n("a15b"),n("d81d"),n("fb6a"),n("b680"),n("d3b7"),n("acd8"),n("e25e"),n("ac1f"),n("25f0"),n("5319"),n("841c"),n("1276");var i=n("5d40");function o(e){if("number"!==typeof e||e<0)return e;var t=parseInt(e/3600);e%=3600;var n=parseInt(e/60);e%=60;var i=e;return[t,n,i].map((function(e){return e=e.toString(),e[1]?e:"0"+e})).join(":")}function a(e,t){return"string"===typeof e&&"string"===typeof t&&(e=parseFloat(e),t=parseFloat(t)),e=e.toFixed(2),t=t.toFixed(2),{longitude:e.toString().split("."),latitude:t.toString().split(".")}}var s={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(e){var t="";for(var n in this.UNITS)if(e>=this.UNITS[n]){t=Math.floor(e/this.UNITS[n])+n+"前";break}return t||"刚刚"},format:function(e){var t=this.parse(e),n=Date.now()-t.getTime();if(n<this.UNITS["天"])return this.humanize(n);var i=function(e){return e<10?"0"+e:e};return t.getFullYear()+"/"+i(t.getMonth()+1)+"/"+i(t.getDate())+"-"+i(t.getHours())+":"+i(t.getMinutes())},parse:function(e){var t=e.split(/[^0-9]/);return new Date(t[0],t[1]-1,t[2],t[3],t[4],t[5])}};function r(e){return e&&-1==e.search("http")?("/"==e.slice(0,1)&&(e=e.substr(1)),i.baseUrl+e.replace("\\","/")):e}e.exports={formatTime:o,formatLocation:a,dateUtils:s,fixImgUrl:r}},dac6:function(e,t,n){"use strict";var i=n("38b9"),o=n.n(i);o.a},de84:function(e,t,n){"use strict";n.r(t);var i=n("fd45"),o=n("d366");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("dac6");var s,r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"e1a11574",null,!1,i["a"],s);t["default"]=c.exports},e0d2:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"padding",domProps:{innerHTML:e._s(e.info.content)}}),n("v-uni-view",{staticClass:"padding-lr text-sm text-gray margin-bottom-xs"},[e._v("提交记录:")]),e._l(e.list,(function(t,i){return n("v-uni-view",{key:i,staticClass:"cu-card dynamic no-card margin-bottom-sm"},[n("v-uni-view",{staticClass:"cu-item shadow"},[n("v-uni-view",{staticClass:"cu-list menu-avatar"},[n("v-uni-view",{staticClass:"cu-item ",staticStyle:{height:"100rpx"}},[n("v-uni-view",{staticClass:"cu-avatar round",style:{"background-image":"url("+t.student_avatar+")"}}),n("v-uni-view",{staticClass:"content flex-sub flex justify-between"},[n("v-uni-view",[e._v(e._s(t.student_name))]),n("v-uni-view",{staticClass:"text-gray text-xs "},[e._v(e._s(t.add_time))])],1)],1)],1),t.content?n("v-uni-view",{staticClass:"text-content margin-top-sm"},[e._v(e._s(t.content))]):e._e(),t.attach.length>0?n("v-uni-view",{staticClass:" grid flex-sub padding-lr col-3 grid-square margin-top-sm"},e._l(t.attach,(function(i,o){return n("v-uni-view",{key:o,staticClass:"bg-img",style:{backgroundImage:"url("+e.fixImgUrlFunc(i)+")"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.previewImg(t.attach,o)}}})})),1):e._e(),t.voice?n("v-uni-view",{staticClass:"margin-sm"},[n("audioPlayer",{attrs:{url:e.fixImgUrlFunc(t.voice)}})],1):e._e(),n("v-uni-view",{staticClass:"text-gray text-right padding-sm"},[n("v-uni-view",{staticClass:"inline-block",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleLike(t.id,i)}}},[n("v-uni-text",{staticClass:"cuIcon-appreciatefill margin-lr-xs"}),e._v(e._s(t.likes_count))],1),n("v-uni-view",{staticClass:"inline-block margin-left",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleComment(t.id,i)}}},[n("v-uni-text",{staticClass:"cuIcon-messagefill margin-lr-xs"}),e._v(e._s(t.comments.length))],1)],1),t.verify_content?n("v-uni-view",{staticClass:"cu-list menu-avatar comment"},[n("v-uni-view",{staticClass:"cu-item padding-left"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"text-grey flex justify-between "},[n("v-uni-view",{staticClass:"text-sm"},[e._v(e._s(t.verifier_name)+" 点评:")]),n("v-uni-view",{staticClass:"text-xs "},[e._v(e._s(t.add_time))])],1),n("v-uni-view",{staticClass:"radius margin-top-sm"},[n("v-uni-view",{staticClass:"flex"},[n("v-uni-view",{staticClass:"flex-sub"},[e._v(e._s(t.verify_content))]),n("v-uni-view",{staticClass:"margin-left text-lg text-orange"},[e._v(e._s(t.verify_score)+"分")])],1)],1)],1)],1)],1):e._e(),n("v-uni-view",{staticClass:"padding-lr padding-bottom-sm "},e._l(t.comments,(function(t,o){return n("v-uni-view",{key:o,staticClass:"bg-gray padding-xs radius margin-top-sm"},[1==t.is_my?n("v-uni-text",{staticClass:"text-sm margin-left text-blue cuIcon-delete",staticStyle:{float:"right"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleDelComment(t.id,i)}}}):e._e(),n("v-uni-text",{staticClass:"text-sm"},[e._v(e._s(t.publisher?t.publisher.name:"评论人")+"："+e._s(t.content))])],1)})),1)],1)],1)})),0==e.list.length?n("v-uni-view",{staticClass:"text-center padding text-gray"},[e._v("暂无提交记录")]):e._e(),n("v-uni-view",{staticStyle:{height:"200rpx"}}),n("v-uni-view",{staticClass:"cu-modal",class:e.showCommentModal?"show":""},[n("v-uni-view",{staticClass:"cu-dialog"},[n("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[n("v-uni-view",{staticClass:"content"},[e._v("发布评论")]),n("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showCommentModal=!1}}},[n("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),n("v-uni-view",{},[n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-textarea",{staticClass:"text-left",staticStyle:{height:"300upx"},attrs:{maxlength:"-1",value:e.commentContent,placeholder:"请输入评论..."},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.textareaInput.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[n("v-uni-view",{staticClass:"action"},[n("v-uni-button",{staticClass:"cu-btn line-green text-green",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showCommentModal=!1}}},[e._v("取消")]),n("v-uni-button",{staticClass:"cu-btn bg-green margin-left",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.publishComment.apply(void 0,arguments)}}},[e._v("确定")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"foot-tool"},[n("v-uni-view",{staticClass:"media-list margin-bottom-xs"},e._l(e.mediaList,(function(t,i){return n("v-uni-view",{key:i,staticClass:"item"},["img"==t.type?n("v-uni-image",{attrs:{src:t.url,mode:"aspectFill"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.previewImg2(t.url)}}}):e._e(),"voice"==t.type?n("v-uni-view",{staticClass:"voice",attrs:{src:t.voice}},[n("v-uni-text",{staticClass:"cuIcon-playfill"})],1):e._e(),n("v-uni-view",{staticClass:"act cuIcon-roundclose",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delMedia(i)}}})],1)})),1),n("v-uni-view",{staticClass:"flex bg-white padding-sm",staticStyle:{"border-top":"1px solid #ddd","background-color":"#ededed"}},[n("v-uni-textarea",{staticClass:"solid-bottom margin-left-sm",staticStyle:{flex:"1",height:"60rpx","background-color":"white","border-radius":"6rpx",padding:"6rpx 4rpx 6rpx 0"},attrs:{"adjust-position":!0,focus:!1,maxlength:"300"},on:{focus:function(t){arguments[0]=t=e.$handleEvent(t),e.InputFocus.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.InputBlur.apply(void 0,arguments)}},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),n("v-uni-view",{staticStyle:{width:"90rpx","text-align":"center"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showTools=!e.showTools}}},[n("v-uni-view",{staticClass:"cuIcon-roundadd",staticStyle:{"font-size":"60rpx"}})],1),n("v-uni-view",{staticStyle:{width:"130rpx"}},[n("v-uni-button",{staticClass:"cu-btn bg-green round shadow-blur",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleSubmit.apply(void 0,arguments)}}},[e._v("发送")])],1)],1),e.showTools?n("v-uni-view",{staticClass:"padding-sm",staticStyle:{"background-color":"#ededed","padding-top":"0"}},[n("v-uni-view",{staticClass:"cu-list grid col-2 no-border"},[n("v-uni-view",{staticClass:"cu-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cuIcon-pic"}),n("v-uni-text",[e._v("图片")])],1),n("v-uni-view",{staticClass:"cu-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.startRecord.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cuIcon-sound"}),n("v-uni-text",[e._v(e._s(e.recordText))])],1)],1)],1):e._e()],1)],2)},a=[]},fc1f:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".foot-tool[data-v-0ddbdfb0]{position:fixed;width:100%;bottom:0;z-index:100}.media-list[data-v-0ddbdfb0]{overflow-x:scroll;padding-left:%?20?%;width:100%}.media-list .item[data-v-0ddbdfb0]{width:%?140?%;height:%?140?%;display:inline-block;margin-right:%?20?%;background-color:#efefef;position:relative;border-radius:%?10?%}.media-list .item .act[data-v-0ddbdfb0]{position:absolute;top:%?-5?%;right:%?-10?%;font-size:%?40?%;background-color:#fff;border-radius:50%;color:red}.media-list .item uni-image[data-v-0ddbdfb0]{width:%?140?%;height:%?140?%}.media-list .item .voice[data-v-0ddbdfb0]{width:%?140?%;height:%?140?%;font-size:%?50?%;text-align:center;line-height:%?140?%;overflow:hidden}",""]),e.exports=t},fd45:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.url?n("v-uni-view",{staticClass:"flex justify-between align-center audio round padding-sm"},[n("v-uni-view",{staticClass:"mr-3 margin-lr",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.start.apply(void 0,arguments)}}},[n("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:!e.status,expression:"!status"}],staticClass:"cuIcon-playfill icon"}),n("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:e.status,expression:"status"}],staticClass:"cuIcon-stop icon"})],1),n("v-uni-view",{staticStyle:{flex:"1"}},[n("v-uni-slider",{attrs:{activeColor:e.activeColor,min:0,max:e.duration.toFixed(0),value:e.currentTime.toFixed(0),step:.1},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeAudio.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"ml-3 text-sm margin-right text-gray"},[e._v(e._s(e.getTime(Math.round(e.currentTime))))])],1):e._e()},a=[]}}]);