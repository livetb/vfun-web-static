(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f78bd94"],{"019d":function(t,e,i){},"02de":function(t,e,i){"use strict";function n(t){return"none"===window.getComputedStyle(t).display||null===t.offsetParent}i.d(e,"a",(function(){return n}))},"04fa":function(t,e,i){},"07b4":function(t,e,i){},"0db1":function(t,e,i){},"0f26":function(t,e,i){},"2b0c":function(t,e,i){},"2bdd":function(t,e,i){"use strict";var n=i("d282"),s=i("02de"),r=i("5fbe"),a=i("a8c1"),o=i("543e"),c=Object(n["a"])("list"),l=c[0],h=c[1],u=c[2];e["a"]=l({mixins:[Object(r["a"])((function(t){this.scroller||(this.scroller=Object(a["c"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:Number,default:300},direction:{type:String,default:"down"}},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.loading||t.finished||t.error)){var e,i=t.$el,n=t.scroller,r=t.offset,a=t.direction;e=n.getBoundingClientRect?n.getBoundingClientRect():{top:0,bottom:n.innerHeight};var o=e.bottom-e.top;if(!o||Object(s["a"])(i))return!1;var c=!1,l=t.$refs.placeholder.getBoundingClientRect();c="up"===a?l.top-e.top<=r:l.bottom-e.bottom<=r,c&&(t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",class:h("placeholder")});return t("div",{class:h(),attrs:{role:"feed","aria-busy":this.loading}},["down"===this.direction?this.slots():e,this.loading&&t("div",{class:h("loading"),key:"loading"},[this.slots("loading")||t(o["a"],{attrs:{size:"16"}},[this.loadingText||u("loading")])]),this.finished&&this.finishedText&&t("div",{class:h("finished-text")},[this.finishedText]),this.error&&this.errorText&&t("div",{on:{click:this.clickErrorText},class:h("error-text")},[this.errorText]),"up"===this.direction?this.slots():e])}})},"33ef":function(t,e,i){},"37ff":function(t,e,i){},4391:function(t,e,i){"use strict";i("3cd0"),i("dc22")},4598:function(t,e,i){"use strict";(function(t){i.d(e,"c",(function(){return l})),i.d(e,"b",(function(){return h})),i.d(e,"a",(function(){return u}));var n=i("a142"),s=Date.now();function r(t){var e=Date.now(),i=Math.max(0,16-(e-s)),n=setTimeout(t,i);return s=e+i,n}var a=n["d"]?t:window,o=a.requestAnimationFrame||r,c=a.cancelAnimationFrame||a.clearTimeout;function l(t){return o.call(a,t)}function h(t){l((function(){l(t)}))}function u(t){c.call(a,t)}}).call(this,i("c8ba"))},"54a3":function(t,e,i){"use strict";var n=i("0db1"),s=i.n(n);s.a},"58e6":function(t,e,i){"use strict";var n=i("d282"),s=i("1325"),r=i("3875"),a=i("a8c1"),o=i("543e"),c=Object(n["a"])("pull-refresh"),l=c[0],h=c[1],u=c[2],d=["pulling","loosing","success"];e["a"]=l({mixins:[r["a"]],props:{disabled:Boolean,successText:String,pullingText:String,loosingText:String,loadingText:String,value:{type:Boolean,required:!0},successDuration:{type:Number,default:500},animationDuration:{type:Number,default:300},headHeight:{type:Number,default:50}},data:function(){return{status:"normal",distance:0,duration:0}},computed:{untouchable:function(){return"loading"===this.status||"success"===this.status||this.disabled}},watch:{value:function(t){var e=this;this.duration=this.animationDuration,!t&&this.successText?(this.status="success",setTimeout((function(){e.setStatus(0)}),this.successDuration)):this.setStatus(t?this.headHeight:0,t)}},mounted:function(){this.scrollEl=Object(a["c"])(this.$el)},methods:{onTouchStart:function(t){!this.untouchable&&this.getCeiling()&&(this.duration=0,this.touchStart(t))},onTouchMove:function(t){this.untouchable||(this.touchMove(t),!this.ceiling&&this.getCeiling()&&(this.duration=0,this.startY=t.touches[0].clientY,this.deltaY=0),this.ceiling&&this.deltaY>=0&&"vertical"===this.direction&&(this.setStatus(this.ease(this.deltaY)),Object(s["c"])(t)))},onTouchEnd:function(){var t=this;!this.untouchable&&this.ceiling&&this.deltaY&&(this.duration=this.animationDuration,"loosing"===this.status?(this.setStatus(this.headHeight,!0),this.$emit("input",!0),this.$nextTick((function(){t.$emit("refresh")}))):this.setStatus(0))},getCeiling:function(){return this.ceiling=0===Object(a["d"])(this.scrollEl),this.ceiling},ease:function(t){var e=this.headHeight;return Math.round(t<e?t:t<2*e?e+(t-e)/2:1.5*e+(t-2*e)/4)},setStatus:function(t,e){this.distance=t;var i=e?"loading":0===t?"normal":t<this.headHeight?"pulling":"loosing";i!==this.status&&(this.status=i)}},render:function(){var t=arguments[0],e=this.status,i=this.distance,n=this[e+"Text"]||u(e),s={transitionDuration:this.duration+"ms",transform:this.distance?"translate3d(0,"+this.distance+"px, 0)":""},r=this.slots(e,{distance:i})||[-1!==d.indexOf(e)&&t("div",{class:h("text")},[n]),"loading"===e&&t(o["a"],{attrs:{size:"16"}},[n])];return t("div",{class:h()},[t("div",{class:h("track"),style:s,on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[t("div",{class:h("head")},[r]),this.slots()])])}})},7348:function(t,e,i){"use strict";var n=i("04fa"),s=i.n(n);s.a},"8e2a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-tabs",{attrs:{border:!1},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("van-tab",{attrs:{title:"Message"}},[i("message-list")],1),i("van-tab",{attrs:{title:"Notification"}},[i("notice-list")],1)],1)],1)},s=[],r=(i("3cd0"),i("0f26"),i("c31d")),a=i("d282"),o=i("9884"),c=i("48f4"),l=Object(a["a"])("tab"),h=l[0],u=l[1],d=h({mixins:[Object(o["a"])("vanTabs")],props:Object(r["a"])({},c["c"],{name:[Number,String],title:String,disabled:Boolean}),data:function(){return{inited:!1}},computed:{computedName:function(){return this.name||this.index},isActive:function(){return this.computedName===this.parent.currentName}},watch:{"parent.currentIndex":function(){this.inited=this.inited||this.isActive},title:function(){this.parent.setLine()}},mounted:function(){this.slots("title")&&this.parent.renderTitle(this.$refs.title,this.index)},render:function(t){var e=this.slots,i=this.isActive,n=this.inited||!this.parent.lazyRender,s=[n?e():t()];return e("title")&&s.push(t("div",{ref:"title"},[e("title")])),this.parent.animated?t("div",{attrs:{role:"tabpanel","aria-hidden":!i},class:u("pane-wrapper",{inactive:!i})},[t("div",{class:u("pane")},[s])]):t("div",{directives:[{name:"show",value:i}],attrs:{role:"tabpanel"},class:u("pane")},[s])}}),f=(i("07b4"),i("2b0c"),i("a142")),v=i("ea8e"),p=i("4598");function m(t,e,i){var n=0,s=t.scrollLeft,r=0===i?1:Math.round(1e3*i/16);function a(){t.scrollLeft+=(e-s)/r,++n<r&&Object(p["c"])(a)}a()}var g=i("02de"),b=i("5fbe"),x=i("b1d2"),y=i("a8c1"),T=Object(a["a"])("tab")[1],C={props:{type:String,color:String,title:String,isActive:Boolean,ellipsis:Boolean,disabled:Boolean,scrollable:Boolean,activeColor:String,inactiveColor:String,swipeThreshold:Number},computed:{style:function(){var t={},e=this.color,i=this.isActive,n="card"===this.type;e&&n&&(t.borderColor=e,this.disabled||(i?t.backgroundColor=e:t.color=e));var s=i?this.activeColor:this.inactiveColor;return s&&(t.color=s),this.scrollable&&this.ellipsis&&(t.flexBasis=88/this.swipeThreshold+"%"),t}},methods:{onClick:function(){this.$emit("click")},renderTitle:function(t){var e=this.$refs.title;e.innerHTML="",e.appendChild(t)}},render:function(){var t=arguments[0];return t("div",{attrs:{role:"tab","aria-selected":this.isActive},class:T({active:this.isActive,disabled:this.disabled,complete:!this.ellipsis}),style:this.style,on:{click:this.onClick}},[t("span",{ref:"title",class:{"van-ellipsis":this.ellipsis}},[this.title])])}},k=i("3875"),w=Object(a["a"])("tabs"),$=w[0],S=w[1],O=50,j=$({mixins:[k["a"]],props:{count:Number,duration:Number,animated:Boolean,swipeable:Boolean,currentIndex:Number},computed:{style:function(){if(this.animated)return{transform:"translate3d("+-1*this.currentIndex*100+"%, 0, 0)",transitionDuration:this.duration+"s"}},listeners:function(){if(this.swipeable)return{touchstart:this.touchStart,touchmove:this.touchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}}},methods:{onTouchEnd:function(){var t=this.direction,e=this.deltaX,i=this.currentIndex;"horizontal"===t&&this.offsetX>=O&&(e>0&&0!==i?this.$emit("change",i-1):e<0&&i!==this.count-1&&this.$emit("change",i+1))},renderChildren:function(){var t=this.$createElement;return this.animated?t("div",{class:S("track"),style:this.style},[this.slots()]):this.slots()}},render:function(){var t=arguments[0];return t("div",{class:S("content",{animated:this.animated}),on:Object(r["a"])({},this.listeners)},[this.renderChildren()])}}),I=Object(a["a"])("sticky"),N=I[0],B=I[1],_=N({mixins:[Object(b["a"])((function(t){this.scroller||(this.scroller=Object(y["c"])(this.$el)),t(this.scroller,"scroll",this.onScroll,!0),this.onScroll()}))],props:{zIndex:Number,container:null,offsetTop:{type:Number,default:0}},data:function(){return{fixed:!1,height:0,transform:0}},computed:{style:function(){if(this.fixed){var t={};return Object(f["b"])(this.zIndex)&&(t.zIndex=this.zIndex),this.offsetTop&&this.fixed&&(t.top=this.offsetTop+"px"),this.transform&&(t.transform="translate3d(0, "+this.transform+"px, 0)"),t}}},methods:{onScroll:function(){var t=this;this.height=this.$el.offsetHeight;var e=this.container,i=this.offsetTop,n=Object(y["d"])(window),s=Object(y["a"])(this.$el),r=function(){t.$emit("scroll",{scrollTop:n,isFixed:t.fixed})};if(e){var a=s+e.offsetHeight;if(n+i+this.height>a){var o=this.height+n-a;return o<this.height?(this.fixed=!0,this.transform=-(o+i)):this.fixed=!1,void r()}}n+i>s?(this.fixed=!0,this.transform=0):this.fixed=!1,r()}},render:function(){var t=arguments[0],e=this.fixed,i={height:e?this.height+"px":null};return t("div",{style:i},[t("div",{class:B({fixed:e}),style:this.style},[this.slots()])])}}),L=Object(a["a"])("tabs"),M=L[0],R=L[1],E=M({mixins:[Object(o["b"])("vanTabs"),Object(b["a"])((function(t){t(window,"resize",this.setLine,!0)}))],model:{prop:"active"},props:{color:String,sticky:Boolean,animated:Boolean,swipeable:Boolean,background:String,lineWidth:[Number,String],lineHeight:[Number,String],titleActiveColor:String,titleInactiveColor:String,type:{type:String,default:"line"},active:{type:[Number,String],default:0},border:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},duration:{type:Number,default:.3},offsetTop:{type:Number,default:0},lazyRender:{type:Boolean,default:!0},swipeThreshold:{type:Number,default:4}},data:function(){return{position:"",currentIndex:null,lineStyle:{backgroundColor:this.color}}},computed:{scrollable:function(){return this.children.length>this.swipeThreshold||!this.ellipsis},navStyle:function(){return{borderColor:this.color,background:this.background}},currentName:function(){var t=this.children[this.currentIndex];if(t)return t.computedName}},watch:{color:"setLine",active:function(t){t!==this.currentName&&this.setCurrentIndexByName(t)},children:function(){var t=this;this.setCurrentIndexByName(this.currentName||this.active),this.setLine(),this.$nextTick((function(){t.scrollIntoView(!0)}))},currentIndex:function(){this.scrollIntoView(),this.setLine(),this.stickyFixed&&Object(y["e"])(Math.ceil(Object(y["a"])(this.$el)-this.offsetTop))}},mounted:function(){this.onShow()},activated:function(){this.onShow(),this.setLine()},methods:{onShow:function(){var t=this;this.$nextTick((function(){t.inited=!0,t.scrollIntoView(!0)}))},setLine:function(){var t=this,e=this.inited;this.$nextTick((function(){var i=t.$refs.titles;if(i&&i[t.currentIndex]&&"line"===t.type&&!Object(g["a"])(t.$el)){var n=i[t.currentIndex].$el,s=t.lineWidth,r=t.lineHeight,a=Object(f["b"])(s)?s:n.offsetWidth/2,o=n.offsetLeft+n.offsetWidth/2,c={width:Object(v["a"])(a),backgroundColor:t.color,transform:"translateX("+o+"px) translateX(-50%)"};if(e&&(c.transitionDuration=t.duration+"s"),Object(f["b"])(r)){var l=Object(v["a"])(r);c.height=l,c.borderRadius=l}t.lineStyle=c}}))},setCurrentIndexByName:function(t){var e=this.children.filter((function(e){return e.computedName===t})),i=(this.children[0]||{}).index||0;this.setCurrentIndex(e.length?e[0].index:i)},setCurrentIndex:function(t){if(t=this.findAvailableTab(t),Object(f["b"])(t)&&t!==this.currentIndex){var e=null!==this.currentIndex;this.currentIndex=t,this.$emit("input",this.currentName),e&&this.$emit("change",this.currentName,this.children[t].title)}},findAvailableTab:function(t){var e=t<this.currentIndex?-1:1;while(t>=0&&t<this.children.length){if(!this.children[t].disabled)return t;t+=e}},onClick:function(t){var e=this.children[t],i=e.title,n=e.disabled,s=e.computedName;n?this.$emit("disabled",s,i):(this.setCurrentIndex(t),this.$emit("click",s,i))},scrollIntoView:function(t){var e=this.$refs.titles;if(this.scrollable&&e&&e[this.currentIndex]){var i=this.$refs.nav,n=e[this.currentIndex].$el,s=n.offsetLeft-(i.offsetWidth-n.offsetWidth)/2;m(i,s,t?0:this.duration)}},renderTitle:function(t,e){var i=this;this.$nextTick((function(){i.$refs.titles[e].renderTitle(t)}))},onScroll:function(t){this.stickyFixed=t.isFixed,this.$emit("scroll",t)}},render:function(){var t,e=this,i=arguments[0],n=this.type,s=this.ellipsis,r=this.animated,a=this.scrollable,o=this.children.map((function(t,r){return i(C,{ref:"titles",refInFor:!0,attrs:{type:n,title:t.title,color:e.color,isActive:r===e.currentIndex,ellipsis:s,disabled:t.disabled,scrollable:a,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,swipeThreshold:e.swipeThreshold},on:{click:function(){e.onClick(r),Object(c["b"])(t.$router,t)}}})})),l=i("div",{ref:"wrap",class:[R("wrap",{scrollable:a}),(t={},t[x["d"]]="line"===n&&this.border,t)]},[i("div",{ref:"nav",attrs:{role:"tablist"},class:R("nav",[n]),style:this.navStyle},[this.slots("nav-left"),o,"line"===n&&i("div",{class:R("line"),style:this.lineStyle}),this.slots("nav-right")])]);return i("div",{class:R([n])},[this.sticky?i(_,{attrs:{container:this.$el,offsetTop:this.offsetTop},on:{scroll:this.onScroll}},[l]):l,i(j,{attrs:{count:this.children.length,animated:r,duration:this.duration,swipeable:this.swipeable,currentIndex:this.currentIndex},on:{change:this.setCurrentIndex}},[this.slots()])])}}),A=i("8bbf"),D=i.n(A),H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list-root"},[i("van-pull-refresh",{attrs:{"pulling-text":"Pull down to refresh...","loosing-text":"Release to refresh...","loading-text":"Loading..."},on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[i("van-list",{attrs:{"loading-text":"Loading...","finished-text":"No more",finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.messages,(function(e,n){return i("div",{key:n,staticClass:"message-wrap",on:{click:function(i){return t.goMessageDetail(e)}}},[i("message-card",{attrs:{message:e}})],1)})),0)],1)],1)},z=[],F=(i("99af"),i("96cf"),i("89ba")),Y=(i("93b0"),i("2bdd")),W=(i("4391"),i("58e6")),V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"message-root"},[i("van-image",{attrs:{round:"",width:"54",height:"54",src:t.message.avatar}}),i("div",{staticClass:"messgae-content"},[i("div",{staticClass:"message-title"},[i("div",{staticClass:"name"},[t._v(t._s(t.message.nickname))]),i("div",{staticClass:"date"},[t._v(t._s(t.message.createdTime))])]),i("div",{staticClass:"message-info-warp"},[i("div",{staticClass:"info"},[t._v(t._s(t.message.lastMessage))]),t.message.unReadCount?i("div",{staticClass:"bage"},[t._v(" "+t._s(t.message.unReadCount)+" ")]):t._e()])])],1)},X=[],P={props:{message:{type:Object,default:function(){return{}}}}},q=P,J=(i("54a3"),i("2877")),K=Object(J["a"])(q,V,X,!1,null,null,null),U=K.exports,G=i("af82");D.a.use(Y["a"]).use(W["a"]);var Q={components:{MessageCard:U},data:function(){return{refreshing:!1,loading:!1,finished:!0,page:1,messages:[]}},methods:{onRefresh:function(){this.page=1,this.loadMessages()},onLoad:function(){this.page+=1,this.loadMessages()},loadMessages:function(){var t=Object(F["a"])(regeneratorRuntime.mark((function t(){var e,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,G["i"](this.page);case 2:e=t.sent,i=e.status,n=e.data,this.refreshing=!1,this.loading=!1,0===i&&(1===this.page?this.messages=n:this.messages=this.messages.concat(n||[]),n.length>0?this.finished=!1:this.finished=!0);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),goMessageDetail:function(t){this.$router.push("/message-detail/".concat(t.relateUid))}},mounted:function(){this.loadMessages()}},Z=Q,tt=(i("7348"),Object(J["a"])(Z,H,z,!1,null,null,null)),et=tt.exports,it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list-root"},[i("van-pull-refresh",{attrs:{"pulling-text":"Pull down to refresh...","loosing-text":"Release to refresh...","loading-text":"Loading..."},on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[i("van-list",{attrs:{"loading-text":"Loading...",finished:t.finished,"finished-text":"No more"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("notice-card")],1)],1)],1)},nt=[],st=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"notice-card-root"},[i("div",{staticClass:"title"},[t._v("😁😁You have unfinished tasks!")]),i("div",{staticClass:"content"},[t._v(" Hey, you have not finished your task. Make sure you finish all the steps to get the coins! ")]),i("div",{staticClass:"date"},[t._v("2019-10-06 11:06:02")])])}],at={},ot=at,ct=(i("dfa7"),Object(J["a"])(ot,st,rt,!1,null,null,null)),lt=ct.exports;D.a.use(Y["a"]).use(W["a"]);var ht={components:{NoticeCard:lt},data:function(){return{refreshing:!1,loading:!1,finished:!0}},methods:{onRefresh:function(){var t=this;setTimeout((function(){t.refreshing=!1}),1e3)},onLoad:function(){var t=this;setTimeout((function(){t.loading=!1,t.finished=!0}),1e3)}}},ut=ht,dt=(i("a2a5"),Object(J["a"])(ut,it,nt,!1,null,null,null)),ft=dt.exports;D.a.use(d).use(E);var vt={components:{MessageList:et,NoticeList:ft},data:function(){return{active:0}}},pt=vt,mt=Object(J["a"])(pt,n,s,!1,null,null,null);e["default"]=mt.exports},"93b0":function(t,e,i){"use strict";i("3cd0"),i("37ff")},9884:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return o}));var n=i("8bbf"),s=i.n(n);function r(t){var e=[];function i(t){t.forEach((function(t){e.push(t),t.children&&i(t.children)}))}return i(t),e}function a(t,e){var i,n;void 0===e&&(e={});var a=e.indexKey||"index";return s.a.extend({inject:(i={},i[t]={default:null},i),computed:(n={parent:function(){return this.disableBindRelation?null:this[t]}},n[a]=function(){return this.bindRelation(),this.parent.children.indexOf(this)},n),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(e){return e!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]),e=r(this.parent.slots());t.sort((function(t,i){return e.indexOf(t.$vnode)-e.indexOf(i.$vnode)})),this.parent.children=t}}}})}function o(t){return{provide:function(){var e;return e={},e[t]=this,e},data:function(){return{children:[]}}}}},a2a5:function(t,e,i){"use strict";var n=i("019d"),s=i.n(n);s.a},dc22:function(t,e,i){},dfa7:function(t,e,i){"use strict";var n=i("33ef"),s=i.n(n);s.a}}]);
//# sourceMappingURL=chunk-6f78bd94.262c78b8.js.map