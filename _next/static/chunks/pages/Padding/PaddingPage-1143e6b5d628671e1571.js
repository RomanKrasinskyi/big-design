_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[40],{"/Q+Z":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Padding/PaddingPage",function(){return t("x6/8")}])},KeDb:function(e,n,t){"use strict";var a=t("x3oR"),r=t("pONU");n.__esModule=!0,n.default=void 0;var i,o=r(t("ERkP")),d=t("L9lV"),l=t("7xIC"),s=new Map,c=window.IntersectionObserver,p={};var u=function(e,n){var t=i||(c?i=new c((function(e){e.forEach((function(e){if(s.has(e.target)){var n=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),s.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),s.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}s.delete(e)}):function(){}};function f(e,n,t,a){(0,d.isLocalURL)(n)&&(e.prefetch(n,t,a).catch((function(e){0})),p[n+"%"+t]=!0)}var g=function(e){var n=!1!==e.prefetch,t=o.default.useState(),r=a(t,2),i=r[0],s=r[1],g=(0,l.useRouter)(),h=g&&g.pathname||"/",m=o.default.useMemo((function(){var n=(0,d.resolveHref)(h,e.href,!0),t=a(n,2),r=t[0],i=t[1];return{href:r,as:e.as?(0,d.resolveHref)(h,e.as):i||r}}),[h,e.href,e.as]),y=m.href,v=m.as;o.default.useEffect((function(){if(n&&c&&i&&i.tagName&&(0,d.isLocalURL)(y)&&!p[y+"%"+v])return u(i,(function(){f(g,y,v)}))}),[n,i,y,v,g]);var P=e.children,b=e.replace,w=e.shallow,E=e.scroll;"string"===typeof P&&(P=o.default.createElement("a",null,P));var x=o.Children.only(P),k={ref:function(e){e&&s(e),x&&"object"===typeof x&&x.ref&&("function"===typeof x.ref?x.ref(e):"object"===typeof x.ref&&(x.ref.current=e))},onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,n,t,a,r,i,o){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,d.isLocalURL)(t))&&(e.preventDefault(),null==o&&(o=a.indexOf("#")<0),n[r?"replace":"push"](t,a,{shallow:i}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,g,y,v,b,w,E)}};return n&&(k.onMouseEnter=function(e){(0,d.isLocalURL)(y)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),f(g,y,v,{priority:!0}))}),(e.passHref||"a"===x.type&&!("href"in x.props))&&(k.href=(0,d.addBasePath)(v)),o.default.cloneElement(x,k)};n.default=g},R5dR:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t("Fhg5"),r=t("jvFD"),i=t.n(r),o=t("ERkP"),d=t.n(o).a.createElement;function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var n="/big-design";return n+e}}var s=function(e){var n=e.as,t=e.children,r=e.href;return d(i.a,{href:r,as:l(n),passHref:!0},"string"===typeof t?d(a.a,null,t):t)}},aw6n:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t("cxan"),r=t("ERkP"),i=t.n(r),o=t("R5dR"),d=t("nFRM"),l=i.a.createElement,s=[{name:"padding",types:l(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the padding to be applied."},{name:"paddingTop",types:l(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the top padding to be applied."},{name:"paddingRight",types:l(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the right padding to be applied."},{name:"paddingBottom",types:l(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the bottom padding to be applied."},{name:"paddingLeft",types:l(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the left padding to be applied."},{name:"paddingVertical",types:l(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the top and bottom padding to be applied."},{name:"paddingHorizontal",types:l(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the left and right padding to be applied."}],c=function(e){return l(d.a,Object(a.a)({title:"Padding",propList:s},e))}},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t("lebv"),r=t("XPf/"),i=t("BtTX"),o=t("ERkP"),d=t.n(o),l=t("ZUh6"),s=t("j/s1"),c=Object(s.e)(l.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),p=d.a.createElement,u=function(e){var n=e.children,t=e.title,d=Object(o.useState)(!0),l=d[0],s=d[1],u=function(){return s(!l)};return p("div",null,p(c,{marginBottom:"xLarge",alignItems:"center",onClick:u,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||u()},tabIndex:0},l?p(r.a,{title:"Expand"}):p(i.a,{title:"Collapse"}),p(a.m,null,t)),!l&&n)}},jvFD:function(e,n,t){e.exports=t("KeDb")},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t("ERkP"),r=t.n(a),i=t("j/s1"),o=i.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,a=e.theme;return n&&!t&&Object(i.d)(["background-color:",";padding:",";"],a.colors.warning10,a.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(i.d)(["color:",";"],t.colors.primary70)})),d=r.a.createElement,l=function(e){return d(o,e)};l.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t("yGqs"),r=t("lebv"),i=t("Fhg5"),o=t("ERkP"),d=t.n(o),l=t("lIm4"),s=t("c2K2"),c=d.a.createElement,p=function(e){var n=e.collapsible,t=e.id,i=e.propList,o=e.title,p=function(){return c(a.b,{marginBottom:"xLarge"},c(a.a,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return c(d.a.Fragment,null,c(l.a,{primary:!0},n),t?c("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return c(u,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return c(l.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return c(r.m,null,n)}}],items:i}),c(r.g,{marginTop:"xSmall"},"Props ending with * are required"))};return n?c(s.a,{title:"".concat(o," Props")},p()):c(d.a.Fragment,null,c(r.c,{id:t},o),p())},u=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return c(d.a.Fragment,{key:e},e.type===i.a?c(l.a,{highlight:!1},e):c(l.a,null,e),t<n.length-1?" | ":null)})):n.type===i.a?c(l.a,{highlight:!1},n):c(l.a,null,n)}},"x6/8":function(e,n,t){"use strict";t.r(n);var a=t("lebv"),r=t("ERkP"),i=t.n(r),o=t("R5dR"),d=t("GsAr"),l=t("aw6n"),s=i.a.createElement;n.default=function(){return s(i.a.Fragment,null,s(a.a,null,"Padding"),s(a.m,null,"Some of our components expose a simple way to modify their padding. The following example showcases the simples way to use the padding prop by giving it a"," ",s(o.a,{href:"/Spacing/SpacingPage",as:"/spacing"},"Spacing")," ","value."),s(d.a,null,'<Box padding="medium" backgroundColor="secondary20">\n  Example\n</Box>'),s(a.m,null,"You can also specify paddings with an object to handle different paddings with different"," ",s(o.a,{href:"/Breakpoints/BreakpointsPage",as:"/breakpoints"},"breakpoints"),". All values must be of"," ",s(o.a,{href:"/Spacing/SpacingPage",as:"/spacing"},"Spacing")," ","type."),s(d.a,null,"<Box padding={{ mobile: 'none', tablet: 'medium', desktop: 'xLarge' }} backgroundColor=\"secondary20\">\n  Example\n</Box>"),s(a.b,null,"API"),s(l.a,null))}}},[["/Q+Z",0,1,4,7,10,8,9,3,2,6,5,11,12]]]);