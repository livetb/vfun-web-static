(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chat-detail"],{1055:function(t,n,a){"use strict";var e=a("57f3"),i=a.n(e);i.a},"123b":function(t,n,a){},2924:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"back-btn-wrap",on:{click:t.back}},[a("van-icon",{attrs:{name:"arrow-left",size:"12"}})],1)},i=[],s={methods:{back:function(){this.$router.back()}}},o=s,c=(a("1055"),a("2877")),r=Object(c["a"])(o,e,i,!1,null,null,null);n["a"]=r.exports},"57f3":function(t,n,a){},"85f7":function(t,n,a){"use strict";var e=a("aaf9"),i=a.n(e);i.a},"869b":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.info?e("div",{staticClass:"detail-page-wrap"},[e("back-button"),e("follow-button"),e("div",{staticClass:"main"},[e("div",{staticClass:"img-wrap"},[e("van-image",{attrs:{src:t.info.avatar,"lazy-load":"",width:"100%"}})],1),e("div",{staticClass:"info-wrap"},[e("div",{staticClass:"name-wrap"},[e("div",{staticClass:"name"},[t._v(t._s(t.info.nickname))]),0===t.info.chatStatus?e("div",{staticClass:"status offline"},[t._v("Offline")]):t._e(),1===t.info.chatStatus?e("div",{staticClass:"status online"},[t._v("Online")]):t._e(),2===t.info.chatStatus?e("div",{staticClass:"status busy"},[t._v("Busy")]):t._e()]),e("div",{staticClass:"detail-wrap"},[e("div",{staticStyle:{"font-size":"0"}},[e("div",{staticClass:"price"},[t._v(" "+t._s(t.info.preMinuteDiamond)+" "),e("van-icon",{attrs:{name:a("d788")}}),t._v("/min ")],1),e("div",{staticClass:"age"},[e("van-icon",{attrs:{name:a("198f")}}),t._v(" "+t._s(t.info.age)+" ")],1)]),t.info.followerNum?e("div",{staticClass:"follower"},[e("div",[t._v(t._s(t.info.followerNum))]),e("div",[t._v("Followers")])]):t._e()]),e("div",{staticClass:"desc-wrap"})])]),e("div",{staticClass:"footer"},[e("van-button",{attrs:{icon:a("6b2b"),color:"#6B7DFC"},on:{click:t.connect}},[t._v("Video Chat")]),e("van-button",{attrs:{icon:"comment",color:"#F45D82"},on:{click:t.goChatRoom}})],1),t.show?e("Connect",{attrs:{uid:t.uid,poster:t.info.avatar},on:{close:function(n){t.show=!1}}}):t._e()],1):t._e()},i=[],s=(a("a4d3"),a("4de4"),a("4160"),a("1d1c"),a("7a82"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("96cf"),a("89ba")),o=a("2fa7"),c=a("2924"),r=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"follow-btn-wrap"},[t._v("Follow")])},l=[],u={},f=u,d=(a("f16c"),a("2877")),v=Object(d["a"])(f,r,l,!1,null,null,null),b=v.exports,p=a("f38b"),h=a("2f62"),w=a("af82");function m(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function _(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?m(a,!0).forEach((function(n){Object(o["a"])(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(a).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}var C={name:"chat-detail",components:{BackButton:c["a"],FollowButton:b,Connect:p["a"]},data:function(){return{show:!1,info:null,uid:this.$route.params.uid}},computed:_({},Object(h["d"])(["currChat"])),methods:{connect:function(){this.show=!0},loadDetail:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a,e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w["o"](this.uid);case 2:n=t.sent,a=n.status,e=n.data,0===a&&(this.info=e);case 6:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),goChatRoom:function(){this.$router.push("/message-detail/".concat(this.info.uid))}},mounted:function(){this.loadDetail()}},O=C,g=(a("85f7"),Object(d["a"])(O,e,i,!1,null,null,null));n["default"]=g.exports},aaf9:function(t,n,a){},f16c:function(t,n,a){"use strict";var e=a("123b"),i=a.n(e);i.a}}]);
//# sourceMappingURL=chat-detail.6d504125.js.map