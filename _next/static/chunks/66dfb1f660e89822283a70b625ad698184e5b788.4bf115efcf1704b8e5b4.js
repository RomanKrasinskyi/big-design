(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"+EJm":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o}));var r={ID:e.env.GTM_ID||"",AUTH:e.env.GTM_AUTH||"",PREVIEW:e.env.GTM_PREVIEW||"",COOKIES_WIN:e.env.GTM_COOKIES_WIN||""},o=(["https://www.googletagmanager.com/gtm.js?id=".concat(r.ID),r.AUTH&&"gtm_auth=".concat(r.AUTH),r.PREVIEW&&"gtm_preview=".concat(r.PREVIEW),r.COOKIES_WIN&&"gtm_cookies_win=".concat(r.COOKIES_WIN)].filter(Boolean).join("&"),function(e){"function"===typeof window.gtag&&window.gtag("config",r.ID,{page_path:e})})}).call(this,n("F63i"))},"0iIO":function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,s=t.optimizeForSpeed,u=void 0===s?r:s,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;a(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",a("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,i,s,u=e.prototype;return u.setOptimizeForSpeed=function(e){a("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(a(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(s){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];a(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,n){t&&a(o(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,i),s&&n(t,s),e}();function a(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,n("F63i"))},"8K1b":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("XcBm");function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(r.a)(e,t)}},"9fIP":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},DSo7:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},HaU7:function(e,t,n){"use strict";var r=n("IebI"),o=n("zQIG"),i=n("8mBC"),a=n("I/kN"),s=n("cMav"),u=n("pSQP"),c=n("4mCN");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}var f=n("Y3ZS");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=y,t.default=void 0;var p=f(n("ERkP")),d=n("fvxO");function h(e){return m.apply(this,arguments)}function m(){return(m=c(r.mark((function e(t){var n,o,i;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,o=t.ctx,e.next=3,(0,d.loadGetInitialProps)(n,o);case 3:return i=e.sent,e.abrupt("return",{pageProps:i});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=d.AppInitialProps,t.NextWebVitalsMetric=d.NextWebVitalsMetric;var g=function(e){a(n,e);var t=l(n);function n(){return o(this,n),t.apply(this,arguments)}return i(n,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=e.__N_SSG,i=e.__N_SSP;return p.default.createElement(n,Object.assign({},r,o||i?{}:{url:y(t)}))}}]),n}(p.default.Component);function y(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=g,g.origGetInitialProps=h,g.getInitialProps=h},"I/kN":function(e,t,n){var r=n("w7mb");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},J9Yr:function(e,t,n){"use strict";var r=n("iN+R"),o=n("zQIG"),i=n("8mBC"),a=(n("N7I1"),n("I/kN")),s=n("cMav"),u=n("pSQP");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("ERkP"),f=function(e){a(n,e);var t=c(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},"K/z8":function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return i}));var o=n("pWxA");function i(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}},KeDb:function(e,t,n){"use strict";var r=n("x3oR"),o=n("pONU");t.__esModule=!0,t.default=void 0;var i,a=o(n("ERkP")),s=n("L9lV"),u=n("7xIC"),c=new Map,l=window.IntersectionObserver,f={};var p=function(e,t){var n=i||(l?i=new l((function(e){e.forEach((function(e){if(c.has(e.target)){var t=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),c.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),c.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}c.delete(e)}):function(){}};function d(e,t,n,r){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=a.default.useState(),o=r(n,2),i=o[0],c=o[1],h=(0,u.useRouter)(),m=h&&h.pathname||"/",g=a.default.useMemo((function(){var t=(0,s.resolveHref)(m,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,s.resolveHref)(m,e.as):i||o}}),[m,e.href,e.as]),y=g.href,v=g.as;a.default.useEffect((function(){if(t&&l&&i&&i.tagName&&(0,s.isLocalURL)(y)&&!f[y+"%"+v])return p(i,(function(){d(h,y,v)}))}),[t,i,y,v,h]);var b=e.children,_=e.replace,S=e.shallow,x=e.scroll;"string"===typeof b&&(b=a.default.createElement("a",null,b));var w=a.Children.only(b),P={ref:function(e){e&&c(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,y,v,_,S,x)}};return t&&(P.onMouseEnter=function(e){(0,s.isLocalURL)(y)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),d(h,y,v,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(P.href=(0,s.addBasePath)(v)),a.default.cloneElement(w,P)};t.default=h},"Khd+":function(e,t,n){e.exports=n("HaU7")},MMYH:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},N7I1:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},O5Wi:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},R5dR:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("Fhg5"),o=n("jvFD"),i=n.n(o),a=n("ERkP"),s=n.n(a).a.createElement;function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var t="/big-design";return t+e}}var c=function(e){var t=e.as,n=e.children,o=e.href;return s(i.a,{href:o,as:u(t),passHref:!0},"string"===typeof n?s(r.a,null,n):n)}},TBv3:function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},TZT2:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("ERkP"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},bOkD:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},cMav:function(e,t,n){var r=n("i2RQ"),o=n("N7I1");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cha2:function(e,t,n){"use strict";n.r(t),n.d(t,"alertsManager",(function(){return xe})),n.d(t,"default",(function(){return Ce}));var r=n("cxan"),o=n("9fIP"),i=n("MMYH"),a=n("8K1b"),s=n("K/z8"),u=n("sRHE"),c=n("yFcC"),l=n.n(c),f=n("llb3"),p=n("BUZ/"),d=n("XUMl"),h=n("Y/ny"),m=n("Y92o"),g=n("S9M8"),y=n("Khd+"),v=n.n(y),b=n("ysqo"),_=n.n(b),S=n("7xIC"),x=n.n(S),w=n("ERkP"),P=n.n(w),C=n("kOvT"),k=function(e,t){return(k=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var j=function(e,t,n){var r=t+e;return String(n?n(r):r)},O=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={quartz:t.props.idSource||C.a,prefix:Object(C.d)(t.props.idSource),id:Object(C.c)(t.props.idSource||C.a)},t.uid=function(e){return j(t.state.id+"-"+t.state.quartz.uid(e),t.state.prefix,t.props.name)},t}return function(e,t){function n(){this.constructor=e}k(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.name,r=this.state,o=r.id,i=r.prefix;return t(j(o,i,n),this.uid)},t}(w.Component),R=function(e){var t=e.children,n=e.prefix,r=void 0===n?"":n;return w.createElement(C.e.Provider,{value:Object(C.b)(r)},t)},I=function(e){var t=e.children,n=e.prefix,r=void 0===n?"":n;return w.createElement(M,null,(function(e){return w.createElement(C.e.Provider,{value:Object(C.b)(e+"-"+r)},t)}))},M=function(e){var t=e.name,n=e.children;return w.createElement(C.e.Consumer,null,(function(e){return w.createElement(O,{name:t,idSource:e,children:n})}))},E=n("j/s1"),T=n("NGm3"),F=n("ZUh6"),z=n("HbGN"),N=n("46a0"),B=P.a.createElement,A=Object(w.memo)((function(e){var t=e.title,n=(e.theme,Object(z.a)(e,["title","theme"]));return B("svg",Object(r.a)({fill:"currentColor",stroke:"currentColor",strokeWidth:"0",viewBox:"0 0 20 20"},n),B("title",null,t),B("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 0C4.475 0 0 4.475 0 10a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0020 10c0-5.525-4.475-10-10-10z"}))})),D=Object(N.a)(A),H=P.a.createElement,L=Object(w.memo)((function(e){var t=e.title,n=(e.theme,Object(z.a)(e,["title","theme"]));return H("svg",Object(r.a)({viewBox:"0 0 60 60",stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n),H("title",null,t),H("path",{d:"M15.6 55c.1 0 .1 0 0 0h37.9c.8 0 1.4-.6 1.4-1.4v-38c0-.1 0-.1-.1-.2v-.1c0-.1-.1-.1-.1-.2l-.2-.2v-.1l-9.4-9.4s-.1-.1-.2-.1l-.1-.1c-.1 0-.1-.1-.2-.1s-.2-.1-.3-.1h-.6c-.1 0-.2.1-.3.1h-.1c-.1.1-.2.1-.3.2L5.4 43.1c-.1.1-.1.2-.2.3v.1c-.1.1-.2.2-.2.3v.4c0 .1 0 .3.1.4 0 .1.1.1.1.2v.1c0 .1.1.1.1.2l.1.1 9.4 9.4.2.2c.1 0 .1.1.2.1h.1c.2 0 .2 0 .3.1zm30.5-44.5l5.2 5.2c.1.1.1.4 0 .5L45.5 22V10.8c0-.4.4-.5.6-.3zM45.5 26l6-6c.2-.2.6-.1.6.3v29c0 .3-.4.5-.6.3l-5.8-5.8c-.1-.1-.2-.3-.2-.5V26zm-1.8 19.7l5.8 5.8c.2.2.1.6-.3.6h-29c-.3 0-.5-.4-.3-.6l6-6h17.2c.3 0 .5.1.6.2zm-14.8-3.1l13.8-13.8v13c0 .4-.3.7-.7.7H28.9zm13.7-31.8v14.1L24.8 42.6h-14c-.3 0-.5-.4-.3-.6L42 10.5c.2-.2.6-.1.6.3zM10.8 45.5H22l-5.8 5.8c-.1.1-.4.1-.5 0l-5.2-5.2c-.2-.2-.1-.6.3-.6z"}))})),G=Object(N.a)(L),W=n("plWM"),U=n("mVVF"),K=n("lebv"),q=P.a.createElement,V=Object(E.e)(W.a).withConfig({displayName:"SideNavGroup__StyledList",componentId:"sc-8isajj-0"})(["margin:",";padding:",";"],(function(e){return e.theme.spacing.none}),(function(e){return e.theme.spacing.none})),Y=function(e){return q(U.a,{marginTop:{mobile:"xxSmall",tablet:"xLarge"},marginHorizontal:{mobile:"medium",tablet:"none"}},q(K.e,null,e.title),q(V,{bulleted:!1},e.children))},Q=n("Fhg5"),J=n("R5dR"),Z=P.a.createElement,X=Object(E.e)(Q.a).withConfig({displayName:"SideNavLink__StyledLink",componentId:"sc-1q92wt9-0"})(["display:block;line-height:",";","{display:inline-block;line-height:",";}"],(function(e){return e.theme.lineHeight.large}),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.lineHeight.medium})),$=function(e){return Z(W.a.Item,null,Z(J.a,{href:e.href,as:e.as},Z(X,{href:""},e.children)))},ee=n("jvFD"),te=n.n(ee),ne=E.e.div.withConfig({displayName:"styled__StyledLogo",componentId:"sc-1lvlvrr-0"})(["cursor:pointer;img{margin:0 auto;max-width:100%;}p{text-align:right;}"]),re=P.a.createElement,oe=function(){return re(te.a,{href:"/GettingStarted/GettingStartedPage",as:"/"},re(ne,null,re("img",{src:"".concat("/big-design","/logo-with-text.svg"),alt:"BigDesign Logo"}),re(K.g,null,"v","0.27.0")))},ie=n("/Sei"),ae=n("l7XK"),se=Object(E.e)(T.a).withConfig({displayName:"styled__StyledMenu",componentId:"sc-1o91m27-0"})(["","{display:none;}"],(function(e){return e.theme.breakpoints.tablet})),ue=Object(E.e)(T.a).withConfig({displayName:"styled__StyledNavigation",componentId:"sc-1o91m27-1"})(["",";background-color:",";border-bottom:",";border-radius:0;border-top:",";display:",";height:16rem;left:0;overflow:auto;position:absolute;top:100%;width:100%;z-index:",";","{border:0;box-shadow:none;display:block;height:auto;position:static;background-color:transparent;}"],(function(e){return e.theme.shadow.floating}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.border.box}),(function(e){return e.theme.border.box}),(function(e){return e.isExpanded?"block":"none"}),(function(e){return e.theme.zIndex.sticky}),(function(e){return e.theme.breakpoints.tablet})),ce=P.a.createElement,le=function(e){var t=Object(w.useState)(!1),n=t[0],r=t[1];return x.a.events.on("routeChangeComplete",(function(){return r(!1)})),ce(T.a,{style:{display:"flex",alignItems:"center"}},ce(F.a,null,ce(se,null,ce(ie.a,{variant:"subtle",onClick:function(){return r(!n)},iconOnly:ce(ae.a,{color:"secondary70"})})),ce(ue,{isExpanded:n,borderBottom:"box",borderTop:"box",shadow:"floating"},e.children)))},fe=Object(E.e)(F.a).withConfig({displayName:"styled__StyledFlex",componentId:"jbe0oq-0"})([""," background-color:",";border-radius:0;position:fixed;top:0;width:100%;z-index:",";","{bottom:0;box-shadow:none;display:block;height:100vh;overflow:auto;position:sticky;}"],(function(e){return e.theme.shadow.raised}),(function(e){return e.theme.colors.secondary10}),(function(e){return e.theme.zIndex.sticky}),(function(e){return e.theme.breakpoints.tablet})),pe=P.a.createElement,de=function(){return pe(fe,{flexDirection:{mobile:"row",tablet:"column"},alignContent:{mobile:"center",tablet:"stretch"},justifyContent:{mobile:"space-between",tablet:"flex-start"},padding:"medium",paddingBottom:{mobile:"medium",tablet:"xxxLarge"}},pe(T.a,null,pe(oe,null)),pe(le,null,pe(Y,{title:"Introduction"},pe($,{href:"/GettingStarted/GettingStartedPage",as:"/"},"Getting Started"),pe(he,{url:"https://codesandbox.io/s/github/bigcommerce/big-design/tree/%40bigcommerce/examples%400.14.0/packages/examples",title:"CodeSandbox Example"})),pe(Y,{title:"Foundations"},pe($,{href:"/Colors/ColorsPage",as:"/colors"},"Colors"),pe($,{href:"/Icons/IconsPage",as:"/icons"},"Icons"),pe($,{href:"/Spacing/SpacingPage",as:"/spacing"},"Spacing"),pe($,{href:"/Typography/TypographyPage",as:"/typography"},"Typography")),pe(Y,{title:"Layout"},pe($,{href:"/Collapse/CollapsePage",as:"/collapse"},"Collapse"),pe($,{href:"/Modal/ModalPage",as:"/modal"},"Modal"),pe($,{href:"/Pagination/PaginationPage",as:"/pagination"},"Pagination"),pe($,{href:"/Panel/PanelPage",as:"/panel"},"Panel"),pe($,{href:"/Table/TablePage",as:"/table"},"Table"),pe($,{href:"/StatefulTable/StatefulTablePage",as:"/statefulTable"},"StatefulTable"),pe($,{href:"/StatefulTree/StatefulTreePage",as:"/statefulTree"},"StatefulTree"),pe($,{href:"/Tabs/TabsPage",as:"/tabs"},"Tabs")),pe(Y,{title:"Actions & Inputs"},pe($,{href:"/Button/ButtonPage",as:"/button"},"Button"),pe($,{href:"/Checkbox/CheckboxPage",as:"/checkbox"},"Checkbox"),pe($,{href:"/Counter/CounterPage",as:"/counter"},"Counter"),pe($,{href:"/Datepicker/DatepickerPage",as:"/datepicker"},"Datepicker"),pe($,{href:"/Dropdown/DropdownPage",as:"/dropdown"},"Dropdown"),pe($,{href:"/Form/FormPage",as:"/form"},"Form"),pe($,{href:"/Input/InputPage",as:"/input"},"Input"),pe($,{href:"/Link/LinkPage",as:"/link"},"Link"),pe($,{href:"/Radio/RadioPage",as:"/radio"},"Radio"),pe($,{href:"/Select/SelectPage",as:"/select"},"Select"),pe($,{href:"/MultiSelect/MultiSelectPage",as:"/multi-select"},"MultiSelect"),pe($,{href:"/Switch/SwitchPage",as:"/switch"},"Switch"),pe($,{href:"/Textarea/TextareaPage",as:"/textarea"},"Textarea"),pe($,{href:"/Timepicker/TimepickerPage",as:"/timepicker"},"Timepicker")),pe(Y,{title:"Status & Feedback"},pe($,{href:"/Alert/AlertPage",as:"/alert"},"Alert"),pe($,{href:"/Badge/BadgePage",as:"/badge"},"Badge"),pe($,{href:"/InlineMessage/InlineMessagePage",as:"/inline-alert"},"Inline Message"),pe($,{href:"/Message/MessagePage",as:"/message"},"Message"),pe($,{href:"/Progress/ProgressBarPage",as:"/progress-bar"},"Progress Bar"),pe($,{href:"/Progress/ProgressCirclePage",as:"/progress-circle"},"Progress Circle"),pe($,{href:"/Tooltip/TooltipPage",as:"/tooltip"},"Tooltip")),pe(Y,{title:"Utilities"},pe($,{href:"/Box/BoxPage",as:"/box"},"Box"),pe($,{href:"/Breakpoints/BreakpointsPage",as:"/breakpoints"},"Breakpoints"),pe($,{href:"/Display/DisplayPage",as:"/display"},"Display"),pe($,{href:"/Flex/FlexPage",as:"/flex"},"Flex"),pe($,{href:"/Grid/GridPage",as:"/grid"},"Grid"),pe($,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),pe($,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),pe($,{href:"/Popover/PopoverPage",as:"/popover"},"Popover")),pe(Y,{title:"Helpful Links"},pe(he,{url:"https://github.com/bigcommerce/big-design",icon:pe(D,{title:"Github Logo"}),title:"Github"}),pe(he,{url:"https://design.bigcommerce.com/components",icon:pe(G,{title:"BigDesign Logo"}),title:"Design Guidelines"}))))},he=function(e){var t=e.url,n=e.icon,r=e.title;return pe(W.a.Item,null,pe(X,{href:t,target:"_blank"},n?pe(F.a,{alignItems:"center"},n," ",pe(T.a,{marginLeft:"xSmall"},r)):r))},me=n("Bhrl"),ge=E.e.div.withConfig({displayName:"styled__StyledRibbon",componentId:"vjx7ce-0"})(["display:none;","{background-color:",";color:",";display:block;font-weight:",";line-height:",";position:fixed;right:",";text-align:center;text-transform:uppercase;top:",";transform:rotate(45deg);width:",";z-index:",";}"],(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.typography.fontWeight.semiBold}),(function(e){return e.theme.lineHeight.xxLarge}),(function(e){return e.theme.helpers.remCalc(-48)}),(function(e){return e.theme.helpers.remCalc(24)}),(function(e){return e.theme.helpers.remCalc(192)}),(function(e){return e.theme.zIndex.fixed-1})),ye=P.a.createElement,ve=function(){return ye(ge,null,"Beta")},be=n("+EJm"),_e=P.a.createElement;function Se(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}x.a.events.on("routeChangeComplete",(function(e){return Object(be.a)(e)}));var xe=Object(f.a)(),we=Object(g.a)(),Pe={mobile:'\n    "nav" 80px\n    "main" min-content\n    / 100%;\n  ',tablet:'\n    ". nav main ." 1fr\n    / 1fr 210px minmax(min-content, 1050px) 1fr;\n  '},Ce=function(e){Object(a.a)(n,e);var t=Se(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps,o=e.router;return _e(P.a.Fragment,null,_e(_.a,null,_e("link",{rel:"icon",type:"image/png",href:"".concat("/big-design","/favicon.png"),className:"jsx-4280788493"}),_e("title",{className:"jsx-4280788493"},"BigDesign"),_e("meta",{property:"og:image",content:"".concat("/big-design","/og-image.png"),className:"jsx-4280788493"})),_e(l.a,{id:"4280788493"},["@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600');","html,body,#__next{height:100%;}"]),_e(R,null,_e(I,null,_e(E.b,{theme:we},_e(P.a.Fragment,null,_e(p.a,null),_e(d.a,{manager:xe}),o.query.noNav?_e(t,Object(r.a)({},n,{className:"jsx-4280788493 "+(n&&null!=n.className&&n.className||"")})):_e(P.a.Fragment,null,_e(h.a,{gridTemplate:Pe,backgroundColor:"secondary10",gridGap:"0",style:{minHeight:"100%"}},_e(m.a,{gridArea:"nav"},_e(de,null)),_e(m.a,{gridArea:"main",marginVertical:"medium",marginHorizontal:{mobile:"none",tablet:"xxLarge"},style:{maxWidth:"100%"}},_e(me.b,null,_e(t,Object(r.a)({},n,{className:"jsx-4280788493 "+(n&&null!=n.className&&n.className||"")}))))),_e(ve,null)))))))}}]),n}(v.a)},dq4L:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("ERkP"))&&r.__esModule?r:{default:r},i=n("TZT2");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},i2RQ:function(e,t){function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},iKkk:function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var r,o=n("ERkP");var i=new(((r=n("icap"))&&r.__esModule?r:{default:r}).default),a=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return i.computeId(t,n)})).join(" ")};var o=r.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){i.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},r}(o.Component);t.default=a},"iN+R":function(e,t,n){var r=n("bOkD"),o=n("DSo7"),i=n("uYlf");e.exports=function(e){return r(e)||o(e)||i()}},icap:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=i(n("TBv3")),o=i(n("0iIO"));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,a=void 0!==i&&i,s=t.isBrowser,u=void 0===s?"undefined"!==typeof window:s;this._sheet=r||new o.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),r&&"boolean"===typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var o=String(n),i=t+o;return e[i]||(e[i]="jsx-"+(0,r.default)(t+"-"+o)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var o=n+r;return t[o]||(t[o]=r.replace(e,n)),t[o]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,o=e.id;if(r){var i=this.computeId(o,r);return{styleId:i,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,n)]}}return{styleId:this.computeId(o),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=a},jvFD:function(e,t,n){e.exports=n("KeDb")},"op+c":function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("ERkP"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},pSQP:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},plWM:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("9fIP"),o=n("MMYH"),i=n("8K1b"),a=n("K/z8"),s=n("sRHE"),u=n("zjfJ"),c=n("ERkP"),l=n.n(c),f=n("cxan"),p=l.a.createElement,d=n("j/s1"),h=Object(d.d)(["color:",";font-size:",";font-weight:",";line-height:",";padding-left:",";","{column-count:",";column-gap:",";}"],(function(e){return e.theme.colors.secondary70}),(function(e){return e.theme.typography.fontSize.medium}),(function(e){return e.theme.typography.fontWeight.regular}),(function(e){return e.theme.lineHeight.medium}),(function(e){return e.theme.spacing.xLarge}),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.columnCount}),(function(e){return e.columnGap})),m=d.e.ol.withConfig({displayName:"styled__StyledOrderedList",componentId:"un4gt8-0"})(["",";list-style-type:",";"],h,(function(e){var t=e.bulleted;return"".concat(t?"decimal":"none")})),g=d.e.ul.withConfig({displayName:"styled__StyledUnorderedList",componentId:"un4gt8-1"})([""," list-style-type:",""],h,(function(e){var t=e.bulleted;return"".concat(t?"disc":"none")})),y=l.a.createElement;function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}var b=function(e){Object(i.a)(n,e);var t=v(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.ordered;return y(n?m:g,this.props,t)}}]),n}(c.PureComponent);Object(u.a)(b,"defaultProps",{columnCount:1,columnGap:"normal",ordered:!1,bulleted:!0}),Object(u.a)(b,"Item",(function(e){var t=Object(f.a)({},e);return p("li",t)}))},uYlf:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},yFcC:function(e,t,n){e.exports=n("iKkk")},ysqo:function(e,t,n){"use strict";n("O5Wi");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("ERkP")),i=(r=n("J9Yr"))&&r.__esModule?r:{default:r},a=n("TZT2"),s=n("op+c"),u=n("dq4L");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var s=0,u=p.length;s<u;s++){var c=p[s];if(o.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?i=!1:n.add(c);else{var l=o.props[c],f=r[c]||new Set;f.has(l)?i=!1:(f.add(l),r[c]=f)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m}}]);