_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{KeDb:function(e,n,t){"use strict";var r=t("x3oR"),a=t("pONU");n.__esModule=!0,n.default=void 0;var i,o=a(t("ERkP")),d=t("L9lV"),s=t("7xIC"),l=new Map,p=window.IntersectionObserver,c={};var u=function(e,n){var t=i||(p?i=new p((function(e){e.forEach((function(e){if(l.has(e.target)){var n=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),l.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),l.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}l.delete(e)}):function(){}};function g(e,n,t,r){(0,d.isLocalURL)(n)&&(e.prefetch(n,t,r).catch((function(e){0})),c[n+"%"+t]=!0)}var f=function(e){var n=!1!==e.prefetch,t=o.default.useState(),a=r(t,2),i=a[0],l=a[1],f=(0,s.useRouter)(),m=f&&f.pathname||"/",h=o.default.useMemo((function(){var n=(0,d.resolveHref)(m,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?(0,d.resolveHref)(m,e.as):i||a}}),[m,e.href,e.as]),b=h.href,y=h.as;o.default.useEffect((function(){if(n&&p&&i&&i.tagName&&(0,d.isLocalURL)(b)&&!c[b+"%"+y])return u(i,(function(){g(f,b,y)}))}),[n,i,b,y,f]);var x=e.children,P=e.replace,v=e.shallow,E=e.scroll;"string"===typeof x&&(x=o.default.createElement("a",null,x));var w=o.Children.only(x),R={ref:function(e){e&&l(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,i,o){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,d.isLocalURL)(t))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),n[a?"replace":"push"](t,r,{shallow:i}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,f,b,y,P,v,E)}};return n&&(R.onMouseEnter=function(e){(0,d.isLocalURL)(b)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),g(f,b,y,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(R.href=(0,d.addBasePath)(y)),o.default.cloneElement(w,R)};n.default=f},L7Pd:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Box/BoxPage",function(){return t("guxS")}])},R5dR:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("Fhg5"),a=t("jvFD"),i=t.n(a),o=t("ERkP"),d=t.n(o).a.createElement;function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var n="/big-design";return n+e}}var l=function(e){var n=e.as,t=e.children,a=e.href;return d(i.a,{href:a,as:s(n),passHref:!0},"string"===typeof t?d(r.a,null,t):t)}},akZe:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t("cxan"),a=t("ERkP"),i=t.n(a),o=t("R5dR"),d=t("nFRM"),s=i.a.createElement,l=[{name:"margin",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the margin to be applied."},{name:"marginTop",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top margin to be applied."},{name:"marginRight",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the right margin to be applied."},{name:"marginBottom",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the bottom margin to be applied."},{name:"marginLeft",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left margin to be applied."},{name:"marginVertical",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top and bottom margin to be applied."},{name:"marginHorizontal",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left and right margin to be applied."}],p=function(e){return s(d.a,Object(r.a)({title:"Margin",propList:l},e))}},aw6n:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t("cxan"),a=t("ERkP"),i=t.n(a),o=t("R5dR"),d=t("nFRM"),s=i.a.createElement,l=[{name:"padding",types:s(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the padding to be applied."},{name:"paddingTop",types:s(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the top padding to be applied."},{name:"paddingRight",types:s(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the right padding to be applied."},{name:"paddingBottom",types:s(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the bottom padding to be applied."},{name:"paddingLeft",types:s(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the left padding to be applied."},{name:"paddingVertical",types:s(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the top and bottom padding to be applied."},{name:"paddingHorizontal",types:s(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the left and right padding to be applied."}],p=function(e){return s(d.a,Object(r.a)({title:"Padding",propList:l},e))}},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("lebv"),a=t("XPf/"),i=t("BtTX"),o=t("ERkP"),d=t.n(o),s=t("ZUh6"),l=t("j/s1"),p=Object(l.e)(s.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),c=d.a.createElement,u=function(e){var n=e.children,t=e.title,d=Object(o.useState)(!0),s=d[0],l=d[1],u=function(){return l(!s)};return c("div",null,c(p,{marginBottom:"xLarge",alignItems:"center",onClick:u,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||u()},tabIndex:0},s?c(a.a,{title:"Expand"}):c(i.a,{title:"Collapse"}),c(r.m,null,t)),!s&&n)}},guxS:function(e,n,t){"use strict";t.r(n);var r=t("lebv"),a=t("mVVF"),i=t("ERkP"),o=t.n(i),d=t("GsAr"),s=t("osqn"),l=t("tGwT"),p=t("akZe"),c=t("aw6n"),u=o.a.createElement;n.default=function(){return u(o.a.Fragment,null,u(r.a,null,"Box"),u(r.m,null,"Mostly used as a simple container or as a base to build other components."),u(d.a,null,'<Box backgroundColor="secondary20" border="box" borderRadius="normal" padding="medium">\n  Boxed content\n</Box>'),u(r.b,null,"API"),u(s.a,null),u(r.c,null,"Inherited Props"),u(l.a,{collapsible:!0}),u(p.a,{collapsible:!0}),u(c.a,{collapsible:!0}),u(r.b,null,"Examples"),u(a.a,null,u(r.m,null,"Box also supports multiple shadows, here is an example of how they look like:"),u(d.a,null,'<Flex justifyContent="space-around">\n  <Box backgroundColor="secondary10" padding="xxLarge" shadow="floating">\n    Floating\n  </Box>\n  <Box backgroundColor="secondary10" padding="xxLarge" shadow="raised">\n    Raised\n  </Box>\n</Flex>')),u(a.a,{marginTop:"xxLarge"},u(r.m,null,"Box is extendable, here is an example on how to create an Avatar component extending from Box with a couple of extra styles:"),u(d.a,null,'function Avatar() {\n  const StyledBox = styled(Box)`\n    box-sizing: content-box;\n    height: ${({ theme }) => theme.spacing.large};\n    width: ${({ theme }) => theme.spacing.large};\n  `;\n\n  return (\n    <StyledBox backgroundColor="secondary20" border="box" borderRadius="circle" padding="medium">\n      BC\n    </StyledBox>\n  );\n}')))}},jvFD:function(e,n,t){e.exports=t("KeDb")},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("ERkP"),a=t.n(r),i=t("j/s1"),o=i.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,r=e.theme;return n&&!t&&Object(i.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(i.d)(["color:",";"],t.colors.primary70)})),d=a.a.createElement,s=function(e){return d(o,e)};s.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("yGqs"),a=t("lebv"),i=t("Fhg5"),o=t("ERkP"),d=t.n(o),s=t("lIm4"),l=t("c2K2"),p=d.a.createElement,c=function(e){var n=e.collapsible,t=e.id,i=e.propList,o=e.title,c=function(){return p(r.b,{marginBottom:"xLarge"},p(r.a,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return p(d.a.Fragment,null,p(s.a,{primary:!0},n),t?p("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return p(u,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return p(s.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return p(a.m,null,n)}}],items:i}),p(a.g,{marginTop:"xSmall"},"Props ending with * are required"))};return n?p(l.a,{title:"".concat(o," Props")},c()):p(d.a.Fragment,null,p(a.c,{id:t},o),c())},u=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return p(d.a.Fragment,{key:e},e.type===i.a?p(s.a,{highlight:!1},e):p(s.a,null,e),t<n.length-1?" | ":null)})):n.type===i.a?p(s.a,{highlight:!1},n):p(s.a,null,n)}},osqn:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("cxan"),a=t("lebv"),i=t("ERkP"),o=t.n(i),d=t("R5dR"),s=t("nFRM"),l=o.a.createElement,p=[{name:"as",types:["string","React.ComponentType<any>"],description:"Use a different HTML tag or a different custom component"},{name:"backgroundColor",types:l(d.a,{href:"/Colors/ColorsPage",as:"/colors"},"Color"),description:l(o.a.Fragment,null,"Sets the background color given a color name from our"," ",l(d.a,{href:"/Colors/ColorsPage",as:"/colors"},"palette"),".")},{name:"shadow",types:["floating","raised"],description:"Determines the type of shadow to be applied."},{name:"border",types:["box","boxError","none"],description:"Determines type of border to be applied."},{name:"borderBottom",types:["box","boxError","none"],description:"Determines type of bottom border to be applied."},{name:"borderLeft",types:["box","boxError","none"],description:"Determines type of left border to be applied."},{name:"borderRight",types:["box","boxError","none"],description:"Determines type of right border to be applied."},{name:"borderTop",types:["box","boxError","none"],description:"Determines type of top border to be applied."},{name:"borderRadius",types:["normal","circle","none"],description:"Determines type of border radius to be applied."},{name:"clearfix",types:["boolean"],description:"Adds a clearfix for floating internal elements."},{name:"zIndex",types:["sticky","fixed","modalBackdrop","modal","tooltip","popover"],description:l(o.a.Fragment,null,l(a.m,null,"Determines type of z-index to be applied."),l(a.g,null,"Types are in order (sticky is low, popover is high)."))}],c=function(e){return l(s.a,Object(r.a)({title:"Box",propList:p},e))}},tGwT:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("cxan"),a=t("ERkP"),i=t.n(a),o=t("nFRM"),d=i.a.createElement,s=[{name:"display",types:["block","inline-block","inline","inline-flex","flex","grid","inline-grid","none"],description:"Sets the CSS display property of a component."}],l=function(e){return d(o.a,Object(r.a)({title:"Display",propList:s},e))}}},[["L7Pd",0,1,4,7,10,8,9,3,2,6,5,11,12]]]);