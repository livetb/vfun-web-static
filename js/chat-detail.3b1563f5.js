(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chat-detail"],{1055:function(t,a,n){"use strict";var e=n("57f3"),i=n.n(e);i.a},"123b":function(t,a,n){},"198f":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAABMklEQVQoU33RQSuEURTG8f9zJsViRFnZm/IRlKUVZWFS7GwGn0BKNpJ8hVmbaZKtjZTNiIWYBTbWFiQbSjbvObqad3pjuKvbub9zzr3nCiAiBNQiYk1SBfgAToEdSQ/JqIuaETEmaRPoAGVgOSK2JS1JOk9wFagCs5KylJ2viJgCWsCk3P1aUk3STRHle3c/knSYKr4Dw5KiH4yIDWAwwWdgQtLbH3APeEmwAbQl1X/CiBgA7oGFBCsRcSZpUdJl4SEJ1d3dSqXSSppfmuM00IiIK0kddy+bWdXdL8xsXdLnN+ziIWAO2AJOUqKku/w8tZ4HRgoJqcIx8Fi4c1tZlu2a2WghOOPuHTN7LcRavdZ5MMuyppntS7otTuEXjIgDIME0lt7qB8eBJ0n+L+z3Oyn2Bd3Vi9FEVZ7OAAAAAElFTkSuQmCC"},2924:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"back-btn-wrap",on:{click:t.back}},[n("van-icon",{attrs:{name:"arrow-left",size:"12"}})],1)},i=[],o={methods:{back:function(){this.$router.back()}}},s=o,r=(n("1055"),n("2877")),c=Object(r["a"])(s,e,i,!1,null,null,null);a["a"]=c.exports},"57f3":function(t,a,n){},"85f7":function(t,a,n){"use strict";var e=n("aaf9"),i=n.n(e);i.a},"869b":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.info?e("div",{staticClass:"detail-page-wrap"},[e("back-button"),e("follow-button"),e("div",{staticClass:"main"},[e("div",{staticClass:"img-wrap"},[e("van-image",{attrs:{src:t.info.avatar,"lazy-load":"",width:"100%"}})],1),e("div",{staticClass:"info-wrap"},[e("div",{staticClass:"name-wrap"},[e("div",{staticClass:"name"},[t._v(t._s(t.info.nickname))]),0===t.info.chatStatus?e("div",{staticClass:"status offline"},[t._v("Offline")]):t._e(),1===t.info.chatStatus?e("div",{staticClass:"status online"},[t._v("Online")]):t._e(),2===t.info.chatStatus?e("div",{staticClass:"status busy"},[t._v("Busy")]):t._e()]),e("div",{staticClass:"detail-wrap"},[e("div",{staticStyle:{"font-size":"0"}},[e("div",{staticClass:"price"},[t._v(" "+t._s(t.info.preMinuteDiamond)+" "),e("van-icon",{attrs:{name:n("d788")}}),t._v("/min ")],1),e("div",{staticClass:"age"},[e("van-icon",{attrs:{name:n("198f")}}),t._v(" "+t._s(t.info.age)+" ")],1)]),t.info.followerNum?e("div",{staticClass:"follower"},[e("div",[t._v(t._s(t.info.followerNum))]),e("div",[t._v("Followers")])]):t._e()]),e("div",{staticClass:"desc-wrap"})])]),e("div",{staticClass:"footer"},[e("van-button",{attrs:{icon:n("6b2b"),color:"#6B7DFC"},on:{click:t.connect}},[t._v("Video Chat")]),e("van-button",{attrs:{icon:"comment",color:"#F45D82"},on:{click:t.goChatRoom}})],1),t.show?e("Connect",{attrs:{uid:t.uid,poster:t.info.avatar},on:{close:function(a){t.show=!1}}}):t._e()],1):t._e()},i=[],o=(n("a4d3"),n("4de4"),n("4160"),n("1d1c"),n("7a82"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("96cf"),n("89ba")),s=n("2fa7"),r=n("2924"),c=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"follow-btn-wrap"},[t._v("Follow")])},u=[],l={},f=l,A=(n("f16c"),n("2877")),b=Object(A["a"])(f,c,u,!1,null,null,null),d=b.exports,p=n("f38b"),v=n("2f62"),h=n("af82");function m(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function w(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?m(n,!0).forEach((function(a){Object(s["a"])(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}var O={name:"chat-detail",components:{BackButton:r["a"],FollowButton:d,Connect:p["a"]},data:function(){return{show:!1,info:null,uid:this.$route.params.uid}},computed:w({},Object(v["d"])(["currChat"])),methods:{connect:function(){this.show=!0},loadDetail:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var a,n,e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h["n"](this.uid);case 2:a=t.sent,n=a.status,e=a.data,0===n&&(this.info=e);case 6:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),goChatRoom:function(){this.$router.push("/message-detail/".concat(this.info.uid))}},mounted:function(){this.loadDetail()}},g=O,C=(n("85f7"),Object(A["a"])(g,e,i,!1,null,null,null));a["default"]=C.exports},aaf9:function(t,a,n){},d788:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAE5klEQVRIS52UW2xUVRSG/33uZzplCtOZXugUobRULipGSCoSbIxEReODWMTwYCJCTIzRRI0SjE1MvIUH45sIJIpPjfXFRJpoiImCFy7SYKW2FUovM2XaubUzZ86Zc/ZeZoa20NIG9STnZe+11rfW+vdaDAt8T3fnV8Kx6/2MhTQSYeKitsCpem2lFqouV9hv4xQvuN4YIxGViMYNVcRrferQ680VV+aHY/MPDnSP30uy71RQgjFlc6QtF8m8hzzneLjewN1BGb/GBcayAqkCIeMS4q7AxrBiLzfFllfXhs7fHHMOoCMe958alM9MedS8oVxBKs+RLkIcgfuqNQiSsGaphsmCiwtxF0mbI+VwRG2BlhoVkNXeMtPb1L4unJ2BzAEcHUge/mlUvJABYesytQRI5jmal0rICw2aLNBUoWFoSsDxCuhJuCVAzBZ4KKLhSpZBmOrh45sr9t8CONST2KmAdXSPe2zII+yo0kuAkE4wNR0ph2DIAo0BDYNThHSBI2U7GEy7mHAFttcbuJQS6M4T1QT0thNbKr4qQkoVfN4Tre9zfOeHMk7QrwJnpgR215mQBUedX8NYnsHyBExZoCGg4eoU4Vqew+Ic0UkHGdfD1uUmepIc1zghaKoTj4Zp457G4AjrIJIn+jLf9U54rVGLI00CkiLhldVlUJjAqKXAcgVynoBPFlg1DYjnOWKWB4cRCo6Ne8ImEg7HtRzhb4ujKSid/GxzeDv7Znj8nYFJtT2WdRHLC6Q44Y31AbRUavgl7iFmubBcQs6jUgWrAgqGihXYAjGLY8QhRMoJa8qAkSwwbouS6FEOtK1QDrKu6NizA5b/i7RDsiOAJaqMnXUalpsSziWKr0SAphUrV4GpgoOYVdSAkHAIyQLAZQZNl2ELwKbrvyzLvFFz95Q06LyafOsvy3gv5woUCNAlhgeCEibtWZlKiIAGWNxDLCeQLoiS8MU50EwVDhjy08E9JmG17h04tGHJ+7PP9Pjg5JG+rPK8zQUKAvAIuKuMYDB5dm4qNICYQPQmgAsGT1XgEEoAh0lYadLRj9aW7Z2T3rf9/foQqzpxOSe3OoJK5YZUjjrlBmCpxqCrNAsotklSFWSJTQMYagzxQ0Qfe+TlxkZnbv0Avh4ZCV7OBU4PW6ypmJFHhHWaAEgqVbFMZwgYmAUUBENOut77YvbLDPQ3KJP3719TO7HgJBcPO4bjq3tz/tOjlggVHesUDp+43slKnaHazzA63SJIMiYEK7W0zJQnIshueenOUN+iu2jm4lj/+LZLjr8rbnOjOAt1JOAJhkqDYVVAKgE0iSHOGRIuoKqSs0K2HnuxufLkbbfpjMEnfanneiztWNolFpFccBsImRLWV8oYzgpEyhRczBGyglGDXti3t7HiyEKr/5Z1fbPRB72Zdy9a6kGNPBiWh0pDwqYqBWOWQI4kJLiEetP7cF/DkjcXCn6LyPON2tvbJW/Xa1/25NjuKteGjzE8WKsh5xL6bAk1Bu+sONe1q62tjf8vQNHp07NR3x964Pu07bX4HA+P1+tIeQx50Nkmv9XaGr6x+/9zi2YcPr6crfozK/0sW/mVz6wwMOxiOMCSLU9EIqOLZb7oM13M4e0LiXWqYfz4VLWsDKQntz15R/j32wW/rQbzA3SOZHZsDkhGpLy8898EL9r8A3hijpY31kVXAAAAAElFTkSuQmCC"},f16c:function(t,a,n){"use strict";var e=n("123b"),i=n.n(e);i.a}}]);
//# sourceMappingURL=chat-detail.3b1563f5.js.map