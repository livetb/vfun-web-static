(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ba28904"],{"02de":function(t,e,i){"use strict";function n(t){return"none"===window.getComputedStyle(t).display||null===t.offsetParent}i.d(e,"a",(function(){return n}))},1114:function(t,e,i){},"198f":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAABMklEQVQoU33RQSuEURTG8f9zJsViRFnZm/IRlKUVZWFS7GwGn0BKNpJ8hVmbaZKtjZTNiIWYBTbWFiQbSjbvObqad3pjuKvbub9zzr3nCiAiBNQiYk1SBfgAToEdSQ/JqIuaETEmaRPoAGVgOSK2JS1JOk9wFagCs5KylJ2viJgCWsCk3P1aUk3STRHle3c/knSYKr4Dw5KiH4yIDWAwwWdgQtLbH3APeEmwAbQl1X/CiBgA7oGFBCsRcSZpUdJl4SEJ1d3dSqXSSppfmuM00IiIK0kddy+bWdXdL8xsXdLnN+ziIWAO2AJOUqKku/w8tZ4HRgoJqcIx8Fi4c1tZlu2a2WghOOPuHTN7LcRavdZ5MMuyppntS7otTuEXjIgDIME0lt7qB8eBJ0n+L+z3Oyn2Bd3Vi9FEVZ7OAAAAAElFTkSuQmCC"},"1c1e":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-home-root"},[n("img",{staticClass:"list-banner",attrs:{src:i("ec24")}}),n("van-pull-refresh",{attrs:{"pulling-text":"Pull down to refresh...","loosing-text":"Release to refresh...","loading-text":"Loading..."},on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[n("van-list",{staticClass:"card-list",attrs:{"loading-text":"Loading...","finished-text":"Loading...",finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.chats,(function(e,i){return n("div",{key:i,staticClass:"chat-card-wrap",on:{click:function(i){return t.goChatDetail(e)}}},[n("ChatCard",{attrs:{chat:e,userdiamond:t.profile.diamond}})],1)})),0)],1)],1)},a=[],s=(i("99af"),i("96cf"),i("89ba")),r=(i("4391"),i("58e6")),o=(i("93b0"),i("2bdd")),c=(i("da02"),i("6b41")),l=i("8bbf"),u=i.n(l),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-card-root"},[n("van-image",{attrs:{src:t.chat.avatar,width:"100%",height:"100%","lazy-load":"",fit:"cover"}}),0===t.chat.chatStatus?n("div",{staticClass:"chat-card-status offline"},[t._v(" Offline ")]):t._e(),1===t.chat.chatStatus?n("div",{staticClass:"chat-card-status online"},[t._v(" Online ")]):t._e(),2===t.chat.chatStatus?n("div",{staticClass:"chat-card-status busy"},[t._v("Busy")]):t._e(),n("div",{staticClass:"chat-card-bottom"},[n("div",{staticClass:"info"},[n("div",{staticClass:"name"},[t._v(t._s(t.chat.nickname))]),n("div",{staticClass:"price"},[t._v(" "+t._s(t.chat.preMinuteDiamond)+" "),n("van-icon",{attrs:{name:i("d788")}}),t._v("/min ")],1),n("div",{staticClass:"age"},[n("van-icon",{attrs:{name:i("198f"),color:"#fff",size:"12"}}),t._v(" "+t._s(t.chat.age)+" ")],1)]),n("div",{staticClass:"video-call"},[n("img",{staticClass:"video-button",attrs:{src:i("c4e3")},on:{click:function(e){return t.connect(t.chat)}}})])]),t.connectShow?n("Connect",{attrs:{uid:t.curHost.uid,poster:t.curHost.avatar},on:{close:function(e){t.connectShow=!1}}}):t._e()],1)},d=[],f=(i("a4d3"),i("4de4"),i("4160"),i("1d1c"),i("7a82"),i("e439"),i("dbb4"),i("b64b"),i("159b"),i("2fa7")),g=(i("6e75"),i("343b")),p=(i("bf24"),i("44bf")),b=i("f38b"),m=i("af82"),v=i("5880");function A(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function x(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?A(i,!0).forEach((function(e){Object(f["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):A(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}u.a.use(g["a"]).use(p["a"]);var S={name:"chat-card",components:{Connect:b["a"]},data:function(){return{curHost:null,connectShow:!1}},props:{chat:{type:Object,default:function(){return{}}}},computed:x({},Object(v["mapState"])(["profile"])),methods:x({},Object(v["mapMutations"])(["updateProfile"]),{loadProfile:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m["m"]();case 2:if(e=t.sent,i=e.data,n=e.status,0===n){t.next=8;break}return console.log("LoadProfile Failed => ",i),t.abrupt("return");case 8:this.updateProfile(i),localStorage.setItem("profile",JSON.stringify(i));case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),connect:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=window.location.href,/inTest/gi.test(i)&&(e.uid=0xbbaca5f2c1a6c),console.log("Connect => ",e.uid," => ",e),t.next=5,this.loadProfile();case 5:if(console.log("Connect loadProfile => ",this.profile),this.profile.diamond&&!(this.profile.diamond<100)){t.next=10;break}return this.$toast("The balance is insufficient, please recharge"),this.$router.push("/recharge"),t.abrupt("return");case 10:this.curHost=e,this.connectShow=!0;case 12:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()})},O=S,C=(i("46be"),i("2877")),w=Object(C["a"])(O,h,d,!1,null,null,null),k=w.exports;u.a.use(r["a"]).use(o["a"]).use(c["a"]);var j={components:{ChatCard:k},data:function(){return{page:1,chats:[],refreshing:!1,loading:!1,finished:!0,profile:{}}},created:function(){console.log("Home Created")},methods:{moreToPersonal:function(){this.$router.push("/recharge")},loadData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,i,n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m["e"](this.page);case 2:e=t.sent,i=e.data,n=e.status,this.refreshing=!1,this.loading=!1,0===n&&(a=i.records,s=i.total,1===this.page?this.chats=a||[]:this.chats=this.chats.concat(a||[]),this.chats.length>=s?this.finished=!0:this.finished=!1);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onLoad:function(){this.page=this.page+1,this.loadData()},onRefresh:function(){this.page=1,this.loadData()},goChatDetail:function(t){console.log("chat detail => ",t)}},mounted:function(){this.loadData()}},y=j,T=(i("a415"),Object(C["a"])(y,n,a,!1,null,null,null));e["default"]=T.exports},"2bdd":function(t,e,i){"use strict";var n=i("d282"),a=i("02de"),s=i("5fbe"),r=i("a8c1"),o=i("543e"),c=Object(n["a"])("list"),l=c[0],u=c[1],h=c[2];e["a"]=l({mixins:[Object(s["a"])((function(t){this.scroller||(this.scroller=Object(r["c"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:Number,default:300},direction:{type:String,default:"down"}},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.loading||t.finished||t.error)){var e,i=t.$el,n=t.scroller,s=t.offset,r=t.direction;e=n.getBoundingClientRect?n.getBoundingClientRect():{top:0,bottom:n.innerHeight};var o=e.bottom-e.top;if(!o||Object(a["a"])(i))return!1;var c=!1,l=t.$refs.placeholder.getBoundingClientRect();c="up"===r?l.top-e.top<=s:l.bottom-e.bottom<=s,c&&(t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",class:u("placeholder")});return t("div",{class:u(),attrs:{role:"feed","aria-busy":this.loading}},["down"===this.direction?this.slots():e,this.loading&&t("div",{class:u("loading"),key:"loading"},[this.slots("loading")||t(o["a"],{attrs:{size:"16"}},[this.loadingText||h("loading")])]),this.finished&&this.finishedText&&t("div",{class:u("finished-text")},[this.finishedText]),this.error&&this.errorText&&t("div",{on:{click:this.clickErrorText},class:u("error-text")},[this.errorText]),"up"===this.direction?this.slots():e])}})},"37ff":function(t,e,i){},4391:function(t,e,i){"use strict";i("3cd0"),i("dc22")},"46be":function(t,e,i){"use strict";var n=i("83dd"),a=i.n(n);a.a},"58e6":function(t,e,i){"use strict";var n=i("d282"),a=i("1325"),s=i("3875"),r=i("a8c1"),o=i("543e"),c=Object(n["a"])("pull-refresh"),l=c[0],u=c[1],h=c[2],d=["pulling","loosing","success"];e["a"]=l({mixins:[s["a"]],props:{disabled:Boolean,successText:String,pullingText:String,loosingText:String,loadingText:String,value:{type:Boolean,required:!0},successDuration:{type:Number,default:500},animationDuration:{type:Number,default:300},headHeight:{type:Number,default:50}},data:function(){return{status:"normal",distance:0,duration:0}},computed:{untouchable:function(){return"loading"===this.status||"success"===this.status||this.disabled}},watch:{value:function(t){var e=this;this.duration=this.animationDuration,!t&&this.successText?(this.status="success",setTimeout((function(){e.setStatus(0)}),this.successDuration)):this.setStatus(t?this.headHeight:0,t)}},mounted:function(){this.scrollEl=Object(r["c"])(this.$el)},methods:{onTouchStart:function(t){!this.untouchable&&this.getCeiling()&&(this.duration=0,this.touchStart(t))},onTouchMove:function(t){this.untouchable||(this.touchMove(t),!this.ceiling&&this.getCeiling()&&(this.duration=0,this.startY=t.touches[0].clientY,this.deltaY=0),this.ceiling&&this.deltaY>=0&&"vertical"===this.direction&&(this.setStatus(this.ease(this.deltaY)),Object(a["c"])(t)))},onTouchEnd:function(){var t=this;!this.untouchable&&this.ceiling&&this.deltaY&&(this.duration=this.animationDuration,"loosing"===this.status?(this.setStatus(this.headHeight,!0),this.$emit("input",!0),this.$nextTick((function(){t.$emit("refresh")}))):this.setStatus(0))},getCeiling:function(){return this.ceiling=0===Object(r["d"])(this.scrollEl),this.ceiling},ease:function(t){var e=this.headHeight;return Math.round(t<e?t:t<2*e?e+(t-e)/2:1.5*e+(t-2*e)/4)},setStatus:function(t,e){this.distance=t;var i=e?"loading":0===t?"normal":t<this.headHeight?"pulling":"loosing";i!==this.status&&(this.status=i)}},render:function(){var t=arguments[0],e=this.status,i=this.distance,n=this[e+"Text"]||h(e),a={transitionDuration:this.duration+"ms",transform:this.distance?"translate3d(0,"+this.distance+"px, 0)":""},s=this.slots(e,{distance:i})||[-1!==d.indexOf(e)&&t("div",{class:u("text")},[n]),"loading"===e&&t(o["a"],{attrs:{size:"16"}},[n])];return t("div",{class:u()},[t("div",{class:u("track"),style:a,on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[t("div",{class:u("head")},[s]),this.slots()])])}})},"6b41":function(t,e,i){"use strict";var n=i("2638"),a=i.n(n),s=i("d282"),r=i("a142"),o=i("ba31"),c=i("b1d2"),l=i("ad06"),u=Object(s["a"])("nav-bar"),h=u[0],d=u[1];function f(t,e,i,n){var s;return t("div",a()([{class:[d({fixed:e.fixed}),(s={},s[c["a"]]=e.border,s)],style:{zIndex:e.zIndex}},Object(o["b"])(n)]),[t("div",{class:d("left"),on:{click:n.listeners["click-left"]||r["e"]}},[i.left?i.left():[e.leftArrow&&t(l["a"],{class:d("arrow"),attrs:{name:"arrow-left"}}),e.leftText&&t("span",{class:d("text")},[e.leftText])]]),t("div",{class:[d("title"),"van-ellipsis"]},[i.title?i.title():e.title]),t("div",{class:d("right"),on:{click:n.listeners["click-right"]||r["e"]}},[i.right?i.right():e.rightText&&t("span",{class:d("text")},[e.rightText])])])}f.props={title:String,fixed:Boolean,leftText:String,rightText:String,leftArrow:Boolean,border:{type:Boolean,default:!0},zIndex:{type:Number,default:1}},e["a"]=h(f)},"83dd":function(t,e,i){},"93b0":function(t,e,i){"use strict";i("3cd0"),i("37ff")},"99af":function(t,e,i){"use strict";var n=i("23e7"),a=i("d039"),s=i("e8b5"),r=i("861d"),o=i("7b0b"),c=i("50c4"),l=i("8418"),u=i("65f0"),h=i("1dde"),d=i("b622"),f=i("60ae"),g=d("isConcatSpreadable"),p=9007199254740991,b="Maximum allowed index exceeded",m=f>=51||!a((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),v=h("concat"),A=function(t){if(!r(t))return!1;var e=t[g];return void 0!==e?!!e:s(t)},x=!m||!v;n({target:"Array",proto:!0,forced:x},{concat:function(t){var e,i,n,a,s,r=o(this),h=u(r,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(s=-1===e?r:arguments[e],A(s)){if(a=c(s.length),d+a>p)throw TypeError(b);for(i=0;i<a;i++,d++)i in s&&l(h,d,s[i])}else{if(d>=p)throw TypeError(b);l(h,d++,s)}return h.length=d,h}})},a415:function(t,e,i){"use strict";var n=i("c1a7"),a=i.n(n);a.a},c1a7:function(t,e,i){},c4e3:function(t,e,i){t.exports=i.p+"img/video-button.6fb07b13.png"},d788:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAE5klEQVRIS52UW2xUVRSG/33uZzplCtOZXugUobRULipGSCoSbIxEReODWMTwYCJCTIzRRI0SjE1MvIUH45sIJIpPjfXFRJpoiImCFy7SYKW2FUovM2XaubUzZ86Zc/ZeZoa20NIG9STnZe+11rfW+vdaDAt8T3fnV8Kx6/2MhTQSYeKitsCpem2lFqouV9hv4xQvuN4YIxGViMYNVcRrferQ680VV+aHY/MPDnSP30uy71RQgjFlc6QtF8m8hzzneLjewN1BGb/GBcayAqkCIeMS4q7AxrBiLzfFllfXhs7fHHMOoCMe958alM9MedS8oVxBKs+RLkIcgfuqNQiSsGaphsmCiwtxF0mbI+VwRG2BlhoVkNXeMtPb1L4unJ2BzAEcHUge/mlUvJABYesytQRI5jmal0rICw2aLNBUoWFoSsDxCuhJuCVAzBZ4KKLhSpZBmOrh45sr9t8CONST2KmAdXSPe2zII+yo0kuAkE4wNR0ph2DIAo0BDYNThHSBI2U7GEy7mHAFttcbuJQS6M4T1QT0thNbKr4qQkoVfN4Tre9zfOeHMk7QrwJnpgR215mQBUedX8NYnsHyBExZoCGg4eoU4Vqew+Ic0UkHGdfD1uUmepIc1zghaKoTj4Zp457G4AjrIJIn+jLf9U54rVGLI00CkiLhldVlUJjAqKXAcgVynoBPFlg1DYjnOWKWB4cRCo6Ne8ImEg7HtRzhb4ujKSid/GxzeDv7Znj8nYFJtT2WdRHLC6Q44Y31AbRUavgl7iFmubBcQs6jUgWrAgqGihXYAjGLY8QhRMoJa8qAkSwwbouS6FEOtK1QDrKu6NizA5b/i7RDsiOAJaqMnXUalpsSziWKr0SAphUrV4GpgoOYVdSAkHAIyQLAZQZNl2ELwKbrvyzLvFFz95Q06LyafOsvy3gv5woUCNAlhgeCEibtWZlKiIAGWNxDLCeQLoiS8MU50EwVDhjy08E9JmG17h04tGHJ+7PP9Pjg5JG+rPK8zQUKAvAIuKuMYDB5dm4qNICYQPQmgAsGT1XgEEoAh0lYadLRj9aW7Z2T3rf9/foQqzpxOSe3OoJK5YZUjjrlBmCpxqCrNAsotklSFWSJTQMYagzxQ0Qfe+TlxkZnbv0Avh4ZCV7OBU4PW6ypmJFHhHWaAEgqVbFMZwgYmAUUBENOut77YvbLDPQ3KJP3719TO7HgJBcPO4bjq3tz/tOjlggVHesUDp+43slKnaHazzA63SJIMiYEK7W0zJQnIshueenOUN+iu2jm4lj/+LZLjr8rbnOjOAt1JOAJhkqDYVVAKgE0iSHOGRIuoKqSs0K2HnuxufLkbbfpjMEnfanneiztWNolFpFccBsImRLWV8oYzgpEyhRczBGyglGDXti3t7HiyEKr/5Z1fbPRB72Zdy9a6kGNPBiWh0pDwqYqBWOWQI4kJLiEetP7cF/DkjcXCn6LyPON2tvbJW/Xa1/25NjuKteGjzE8WKsh5xL6bAk1Bu+sONe1q62tjf8vQNHp07NR3x964Pu07bX4HA+P1+tIeQx50Nkmv9XaGr6x+/9zi2YcPr6crfozK/0sW/mVz6wwMOxiOMCSLU9EIqOLZb7oM13M4e0LiXWqYfz4VLWsDKQntz15R/j32wW/rQbzA3SOZHZsDkhGpLy8898EL9r8A3hijpY31kVXAAAAAElFTkSuQmCC"},da02:function(t,e,i){"use strict";i("3cd0"),i("5cc2"),i("1114")},dc22:function(t,e,i){},ec24:function(t,e,i){t.exports=i.p+"img/banner.c5678a91.png"}}]);
//# sourceMappingURL=chunk-5ba28904.8cba57c8.js.map