(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e2f3098"],{"2a53":function(e,t,a){"use strict";a("3cd0")},"34e9":function(e,t,a){"use strict";var n=a("2638"),r=a.n(n),l=a("d282"),i=a("ba31"),o=a("b1d2"),c=Object(l["a"])("cell-group"),s=c[0],u=c[1];function A(e,t,a,n){var l,c=e("div",r()([{class:[u(),(l={},l[o["d"]]=t.border,l)]},Object(i["b"])(n,!0)]),[a.default&&a.default()]);return t.title||a.title?e("div",[e("div",{class:u("title")},[a.title?a.title():t.title]),c]):c}A.props={title:String,border:{type:Boolean,default:!0}},t["a"]=s(A)},"3ec1":function(e,t,a){"use strict";a("3cd0"),a("5cc2")},"5bca":function(e,t,a){},6104:function(e,t,a){"use strict";var n=a("5bca"),r=a.n(n);r.a},7744:function(e,t,a){"use strict";var n=a("c31d"),r=a("2638"),l=a.n(r),i=a("d282"),o=a("a142"),c=a("dfaf"),s=a("ba31"),u=a("48f4"),A=a("ad06"),b=Object(i["a"])("cell"),d=b[0],f=b[1];function p(e,t,a,n){var r=t.icon,i=t.size,c=t.title,b=t.label,d=t.value,p=t.isLink,g=t.arrowDirection,S=a.title||Object(o["b"])(c),v=a.default||Object(o["b"])(d),O=a.label||Object(o["b"])(b),m=O&&e("div",{class:[f("label"),t.labelClass]},[a.label?a.label():b]),k=S&&e("div",{class:[f("title"),t.titleClass],style:t.titleStyle},[a.title?a.title():e("span",[c]),m]),h=v&&e("div",{class:[f("value",{alone:!a.title&&!c}),t.valueClass]},[a.default?a.default():e("span",[d])]),y=a.icon?a.icon():r&&e(A["a"],{class:f("left-icon"),attrs:{name:r}}),J=a["right-icon"],j=J?J():p&&e(A["a"],{class:f("right-icon"),attrs:{name:g?"arrow-"+g:"arrow"}});function I(e){Object(s["a"])(n,"click",e),Object(u["a"])(n)}var C=p||t.clickable,E={clickable:C,center:t.center,required:t.required,borderless:!t.border};return i&&(E[i]=i),e("div",l()([{class:f(E),attrs:{role:C?"button":null,tabindex:C?0:null},on:{click:I}},Object(s["b"])(n)]),[y,k,h,j,a.extra&&a.extra()])}p.props=Object(n["a"])({},c["a"],{},u["c"]),t["a"]=d(p)},"90ab":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"personal-page"},[e.profile?n("div",{staticClass:"main"},[n("van-cell",{attrs:{size:"large",border:!1,center:"",to:"/personal-edit","is-link":""}},[n("van-image",{attrs:{slot:"icon",width:"56",height:"56","lazy-load":"",round:"",src:e.profile.avatar},slot:"icon"}),n("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[n("div",{staticClass:"name"},[e._v(e._s(e.profile.nickname))]),n("div",{staticClass:"tips"},[e._v("Edit Profile")])])],1),n("van-cell",{staticClass:"balance",attrs:{border:!1,"is-link":"",center:""},on:{click:e.goRecharge}},[n("van-icon",{attrs:{slot:"icon",size:"46",name:a("d3ad")},slot:"icon"}),n("div",{staticClass:"balance-value",attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(e.profile.diamond)+" "),n("van-icon",{attrs:{name:a("d788")}})],1)],1),n("van-cell-group",{attrs:{border:!1}},[n("van-cell",{attrs:{title:"Contact Us",value:"Hello@mixfun.world",border:!1,"is-link":""}}),n("van-cell",{attrs:{title:"Follow Us",value:"Facebook",border:!1,"is-link":""}}),n("van-cell",{attrs:{title:"FAQ",value:"",border:!1,"is-link":""}})],1)],1):e._e(),n("div",{staticClass:"footer"},[n("van-button",{staticClass:"logout-btn",on:{click:e.logoutHandler}},[e._v("Logout")])],1)])},r=[],l=(a("a4d3"),a("4de4"),a("4160"),a("1d1c"),a("7a82"),a("e439"),a("dbb4"),a("b64b"),a("ac1f"),a("5319"),a("159b"),a("96cf"),a("89ba")),i=a("2fa7"),o=(a("3ec1"),a("7744")),c=(a("2a53"),a("34e9")),s=(a("b342"),a("ad06")),u=(a("c625"),a("b650")),A=(a("3cd0"),a("5cc2"),a("44bf")),b=a("8bbf"),d=a.n(b),f=a("af82"),p=a("5880");function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}d.a.use(o["a"]).use(c["a"]).use(s["a"]).use(u["a"]).use(A["a"]);var v={name:"personal",data:function(){return{}},computed:S({},Object(p["mapState"])(["profile"])),methods:S({},Object(p["mapMutations"])(["updateProfile"]),{},Object(p["mapActions"])(["logout"]),{loadUserInfo:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f["n"]();case 2:t=e.sent,a=t.status,n=t.data,0===a&&(this.updateProfile(n),localStorage.setItem("profile",JSON.stringify(n)));case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),goRecharge:function(){this.$router.push("/recharge")},logoutHandler:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.logout();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log(e.t0);case 8:this.$router.replace("/login");case 9:case"end":return e.stop()}}),e,this,[[0,5]])})));function t(){return e.apply(this,arguments)}return t}()}),mounted:function(){this.loadUserInfo()}},O=v,m=(a("6104"),a("2877")),k=Object(m["a"])(O,n,r,!1,null,null,null);t["default"]=k.exports},d3ad:function(e,t){e.exports="data:image/png;base64,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"},d788:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAE5klEQVRIS52UW2xUVRSG/33uZzplCtOZXugUobRULipGSCoSbIxEReODWMTwYCJCTIzRRI0SjE1MvIUH45sIJIpPjfXFRJpoiImCFy7SYKW2FUovM2XaubUzZ86Zc/ZeZoa20NIG9STnZe+11rfW+vdaDAt8T3fnV8Kx6/2MhTQSYeKitsCpem2lFqouV9hv4xQvuN4YIxGViMYNVcRrferQ680VV+aHY/MPDnSP30uy71RQgjFlc6QtF8m8hzzneLjewN1BGb/GBcayAqkCIeMS4q7AxrBiLzfFllfXhs7fHHMOoCMe958alM9MedS8oVxBKs+RLkIcgfuqNQiSsGaphsmCiwtxF0mbI+VwRG2BlhoVkNXeMtPb1L4unJ2BzAEcHUge/mlUvJABYesytQRI5jmal0rICw2aLNBUoWFoSsDxCuhJuCVAzBZ4KKLhSpZBmOrh45sr9t8CONST2KmAdXSPe2zII+yo0kuAkE4wNR0ph2DIAo0BDYNThHSBI2U7GEy7mHAFttcbuJQS6M4T1QT0thNbKr4qQkoVfN4Tre9zfOeHMk7QrwJnpgR215mQBUedX8NYnsHyBExZoCGg4eoU4Vqew+Ic0UkHGdfD1uUmepIc1zghaKoTj4Zp457G4AjrIJIn+jLf9U54rVGLI00CkiLhldVlUJjAqKXAcgVynoBPFlg1DYjnOWKWB4cRCo6Ne8ImEg7HtRzhb4ujKSid/GxzeDv7Znj8nYFJtT2WdRHLC6Q44Y31AbRUavgl7iFmubBcQs6jUgWrAgqGihXYAjGLY8QhRMoJa8qAkSwwbouS6FEOtK1QDrKu6NizA5b/i7RDsiOAJaqMnXUalpsSziWKr0SAphUrV4GpgoOYVdSAkHAIyQLAZQZNl2ELwKbrvyzLvFFz95Q06LyafOsvy3gv5woUCNAlhgeCEibtWZlKiIAGWNxDLCeQLoiS8MU50EwVDhjy08E9JmG17h04tGHJ+7PP9Pjg5JG+rPK8zQUKAvAIuKuMYDB5dm4qNICYQPQmgAsGT1XgEEoAh0lYadLRj9aW7Z2T3rf9/foQqzpxOSe3OoJK5YZUjjrlBmCpxqCrNAsotklSFWSJTQMYagzxQ0Qfe+TlxkZnbv0Avh4ZCV7OBU4PW6ypmJFHhHWaAEgqVbFMZwgYmAUUBENOut77YvbLDPQ3KJP3719TO7HgJBcPO4bjq3tz/tOjlggVHesUDp+43slKnaHazzA63SJIMiYEK7W0zJQnIshueenOUN+iu2jm4lj/+LZLjr8rbnOjOAt1JOAJhkqDYVVAKgE0iSHOGRIuoKqSs0K2HnuxufLkbbfpjMEnfanneiztWNolFpFccBsImRLWV8oYzgpEyhRczBGyglGDXti3t7HiyEKr/5Z1fbPRB72Zdy9a6kGNPBiWh0pDwqYqBWOWQI4kJLiEetP7cF/DkjcXCn6LyPON2tvbJW/Xa1/25NjuKteGjzE8WKsh5xL6bAk1Bu+sONe1q62tjf8vQNHp07NR3x964Pu07bX4HA+P1+tIeQx50Nkmv9XaGr6x+/9zi2YcPr6crfozK/0sW/mVz6wwMOxiOMCSLU9EIqOLZb7oM13M4e0LiXWqYfz4VLWsDKQntz15R/j32wW/rQbzA3SOZHZsDkhGpLy8898EL9r8A3hijpY31kVXAAAAAElFTkSuQmCC"},dfaf:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}}}]);
//# sourceMappingURL=chunk-6e2f3098.d63d41f9.js.map