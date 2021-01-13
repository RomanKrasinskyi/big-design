_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{GGUH:function(e,t,n){"use strict";n.r(t);var r=n("mVVF"),i=n("lebv"),a=n("Fhg5"),o=n("ERkP"),d=n.n(o),s=n("GsAr"),l=n("lIm4"),p=n("cxan"),g=n("nFRM"),m=d.a.createElement,c=[{name:"gridAreas",types:"string",description:m(d.a.Fragment,null,"Defines a grid template by referencing the names of the grid areas which are specified with the grid-area property of a grid item. Same as the ",m(l.a,{highlight:!1},"grid-template-areas")," CSS property.")},{name:"gridAutoColumns",types:"string",description:m(d.a.Fragment,null,"Specifies the size of any auto-generated column grid tracks. Same as the"," ",m(l.a,{highlight:!1},"grid-auto-columns")," CSS property.")},{name:"gridAutoFlow",types:["row","column","dense","row dense","column dense","inherit","initial","unset"],description:m(d.a.Fragment,null,"Controls how auto placement of grid items work. Same as the ",m(l.a,{highlight:!1},"grid-auto-flow")," CSS property.")},{name:"gridAutoRows",types:"string",description:m(d.a.Fragment,null,"Specifies the size of any auto-generated row grid tracks. Same as the"," ",m(l.a,{highlight:!1},"grid-auto-rows")," CSS property.")},{name:"gridColumns",types:"string",description:m(d.a.Fragment,null,"Defines the columns of the grid with a space-separated list of values. Same as the"," ",m(l.a,{highlight:!1},"grid-template-columns")," CSS property.")},{name:"gridGap",types:"string",description:m(d.a.Fragment,null,"Controls the spacing between grid items. Same as the ",m(l.a,{highlight:!1},"grid-gap")," CSS property.")},{name:"gridRows",types:"string",description:m(d.a.Fragment,null,"Defines the rows of the grid with a space-separated list of values. Same as the"," ",m(l.a,{highlight:!1},"grid-template-rows")," CSS property.")},{name:"gridTemplate",types:"string",description:m(d.a.Fragment,null,"Shorthand for ",m(l.a,{highlight:!1},"grid-template-columns"),","," ",m(l.a,{highlight:!1},"grid-template-rows"),", and ",m(l.a,{highlight:!1},"grid-template-areas"),". Same as the ",m(l.a,{highlight:!1},"grid-template")," CSS property.")}],u=function(e){return m(g.a,Object(p.a)({title:"Grid",propList:c},e))},h=[{name:"gridArea",types:"string",description:m(d.a.Fragment,null,"Gives a grid item and area defined via ",m(l.a,{highlight:!1},"grid-template-areas"),". Same as the"," ",m(l.a,{highlight:!1},"grid-area")," CSS property.")},{name:"gridColumn",types:"string",description:m(d.a.Fragment,null,"Shorthand for ",m(l.a,{highlight:!1},"grid-column-start")," and"," ",m(l.a,{highlight:!1},"grid-column-end"),". Same as the ",m(l.a,{highlight:!1},"grid-column")," CSS property.")},{name:"gridColumnEnd",types:"string",description:m(d.a.Fragment,null,"Determines a grid item's location within the grid by referring to specific grid lines. Same as the"," ",m(l.a,{highlight:!1},"grid-column-end")," CSS property.")},{name:"gridColumnStart",types:"string",description:m(d.a.Fragment,null,"Determines a grid item's location within the grid by referring to specific grid lines. Same as the"," ",m(l.a,{highlight:!1},"grid-column-start")," CSS property.")},{name:"gridRow",types:"string",description:m(d.a.Fragment,null,"Shorthand for ",m(l.a,{highlight:!1},"grid-row-start")," and ",m(l.a,{highlight:!1},"grid-row-end"),". Same as the ",m(l.a,{highlight:!1},"grid-row")," CSS property.")},{name:"gridRowEnd",types:"string",description:m(d.a.Fragment,null,"Determines a grid item's location within the grid by referring to specific grid lines. Same as the"," ",m(l.a,{highlight:!1},"grid-row-end")," CSS property.")},{name:"gridRowStart",types:"string",description:m(d.a.Fragment,null,"Determines a grid item's location within the grid by referring to specific grid lines. Same as the"," ",m(l.a,{highlight:!1},"grid-row-start")," CSS property.")}],f=function(e){return m(g.a,Object(p.a)({title:"GridItem",propList:h},e))},y=n("osqn"),b=n("tGwT"),x=n("akZe"),E=n("aw6n"),v=d.a.createElement,S=function(e){var t=e.children;return v(r.a,{backgroundColor:"secondary20",border:"box",padding:"small",style:{height:"100%"}},t)};t.default=function(){return v(d.a.Fragment,null,v(i.a,null,"Grid"),v(i.m,null,"The Grid component is useful for creating intrinsicly responsive layouts."," ",v(a.a,{href:"https://design.bigcommerce.com/components/grid",target:"_blank"},"Grid Design Guidelines"),"."),v(s.a,{scope:{ExampleBox:S}},"<Grid>\n  <GridItem>\n    <ExampleBox>Item 1</ExampleBox>\n  </GridItem>\n  <GridItem>\n    <ExampleBox>Item 2</ExampleBox>\n  </GridItem>\n  <GridItem>\n    <ExampleBox>Item 3</ExampleBox>\n  </GridItem>\n  <GridItem>\n    <ExampleBox>Item 4</ExampleBox>\n  </GridItem>\n</Grid>"),v(i.b,null,"API"),v(u,null),v(f,null),v(i.c,null,"Inherited Props"),v(y.a,{collapsible:!0}),v(b.a,{collapsible:!0}),v(x.a,{collapsible:!0}),v(E.a,{collapsible:!0}),v(i.b,null,"Examples"),v(i.m,null,"Grid allows you to create custom layouts using combinations of ",v(l.a,null,"gridTemplate")," and ",v(l.a,null,"gridArea")," ","props."),v(s.a,{scope:{ExampleBox:S}},'function Example() {\n  const template = `\n    "head head" 80px\n    "nav  main" 200px\n    "foot  foot" 50px\n    / 1fr 5fr;\n  `;\n\n  return (\n    <Grid gridTemplate={template}>\n      <GridItem gridArea="head">\n        <ExampleBox>Header</ExampleBox>\n      </GridItem>\n      <GridItem gridArea="nav">\n        <ExampleBox>Sidebar</ExampleBox>\n      </GridItem>\n      <GridItem gridArea="main">\n        <ExampleBox>Content</ExampleBox>\n      </GridItem>\n      <GridItem gridArea="foot">\n        <ExampleBox>Footer</ExampleBox>\n      </GridItem>\n    </Grid>\n  );\n}'),v(i.m,null,"You can use the ",v(l.a,null,"gridColumns")," prop to create columned layouts."),v(s.a,{scope:{ExampleBox:S}},'<Grid gridColumns="repeat(3, 1fr)">\n  <GridItem>\n    <ExampleBox>\n      Reprehenderit ullamco et elit eu duis non reprehenderit eiusmod pariatur ea deserunt irure. Reprehenderit et\n      incididunt sit aute sint proident eu eiusmod pariatur Lorem nulla labore irure nisi. Adipisicing do duis\n      occaecat ipsum dolor ea. Qui consectetur sint eu nulla duis et commodo anim commodo. Ullamco consectetur\n      elit ullamco aliquip do id consectetur anim laborum.\n    </ExampleBox>\n  </GridItem>\n\n  <GridItem>\n    <ExampleBox>\n      In sit dolore culpa reprehenderit tempor laborum. Sit anim voluptate pariatur irure amet mollit. Est mollit\n      ad pariatur esse eu reprehenderit ut veniam. Aliquip anim mollit aliquip quis officia minim esse laboris\n      proident fugiat cillum. Eiusmod culpa eu ea eiusmod nostrud.\n    </ExampleBox>\n  </GridItem>\n\n  <GridItem>\n    <ExampleBox>\n      Ipsum adipisicing pariatur magna quis incididunt amet pariatur. Aliqua voluptate consequat ut elit ea dolore\n      officia reprehenderit exercitation dolore eiusmod cupidatat quis. Ullamco ipsum do deserunt sunt ad deserunt\n      ut. Elit non velit dolore ad est eu.\n    </ExampleBox>\n  </GridItem>\n</Grid>'))}},"Gte+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Grid/GridPage",function(){return n("GGUH")}])},KeDb:function(e,t,n){"use strict";var r=n("x3oR"),i=n("pONU");t.__esModule=!0,t.default=void 0;var a,o=i(n("ERkP")),d=n("L9lV"),s=n("7xIC"),l=new Map,p=window.IntersectionObserver,g={};var m=function(e,t){var n=a||(p?a=new p((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function c(e,t,n,r){(0,d.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),g[t+"%"+n]=!0)}var u=function(e){var t=!1!==e.prefetch,n=o.default.useState(),i=r(n,2),a=i[0],l=i[1],u=(0,s.useRouter)(),h=u&&u.pathname||"/",f=o.default.useMemo((function(){var t=(0,d.resolveHref)(h,e.href,!0),n=r(t,2),i=n[0],a=n[1];return{href:i,as:e.as?(0,d.resolveHref)(h,e.as):a||i}}),[h,e.href,e.as]),y=f.href,b=f.as;o.default.useEffect((function(){if(t&&p&&a&&a.tagName&&(0,d.isLocalURL)(y)&&!g[y+"%"+b])return m(a,(function(){c(u,y,b)}))}),[t,a,y,b,u]);var x=e.children,E=e.replace,v=e.shallow,S=e.scroll;"string"===typeof x&&(x=o.default.createElement("a",null,x));var w=o.Children.only(x),P={ref:function(e){e&&l(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,a,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,d.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[i?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,u,y,b,E,v,S)}};return t&&(P.onMouseEnter=function(e){(0,d.isLocalURL)(y)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),c(u,y,b,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(P.href=(0,d.addBasePath)(b)),o.default.cloneElement(w,P)};t.default=u},R5dR:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("Fhg5"),i=n("jvFD"),a=n.n(i),o=n("ERkP"),d=n.n(o).a.createElement;function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var t="/big-design";return t+e}}var l=function(e){var t=e.as,n=e.children,i=e.href;return d(a.a,{href:i,as:s(t),passHref:!0},"string"===typeof n?d(r.a,null,n):n)}},akZe:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("cxan"),i=n("ERkP"),a=n.n(i),o=n("R5dR"),d=n("nFRM"),s=a.a.createElement,l=[{name:"margin",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the margin to be applied."},{name:"marginTop",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top margin to be applied."},{name:"marginRight",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the right margin to be applied."},{name:"marginBottom",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the bottom margin to be applied."},{name:"marginLeft",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left margin to be applied."},{name:"marginVertical",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top and bottom margin to be applied."},{name:"marginHorizontal",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left and right margin to be applied."}],p=function(e){return s(d.a,Object(r.a)({title:"Margin",propList:l},e))}},aw6n:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("cxan"),i=n("ERkP"),a=n.n(i),o=n("R5dR"),d=n("nFRM"),s=a.a.createElement,l=[{name:"padding",types:s(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the padding to be applied."},{name:"paddingTop",types:s(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the top padding to be applied."},{name:"paddingRight",types:s(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the right padding to be applied."},{name:"paddingBottom",types:s(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the bottom padding to be applied."},{name:"paddingLeft",types:s(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the left padding to be applied."},{name:"paddingVertical",types:s(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the top and bottom padding to be applied."},{name:"paddingHorizontal",types:s(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the left and right padding to be applied."}],p=function(e){return s(d.a,Object(r.a)({title:"Padding",propList:l},e))}},c2K2:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("lebv"),i=n("XPf/"),a=n("BtTX"),o=n("ERkP"),d=n.n(o),s=n("ZUh6"),l=n("j/s1"),p=Object(l.e)(s.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),g=d.a.createElement,m=function(e){var t=e.children,n=e.title,d=Object(o.useState)(!0),s=d[0],l=d[1],m=function(){return l(!s)};return g("div",null,g(p,{marginBottom:"xLarge",alignItems:"center",onClick:m,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||m()},tabIndex:0},s?g(i.a,{title:"Expand"}):g(a.a,{title:"Collapse"}),g(r.m,null,n)),!s&&t)}},jvFD:function(e,t,n){e.exports=n("KeDb")},lIm4:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("ERkP"),i=n.n(r),a=n("j/s1"),o=a.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var t=e.highlight,n=e.primary,r=e.theme;return t&&!n&&Object(a.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var t=e.primary,n=e.theme;return t&&Object(a.d)(["color:",";"],n.colors.primary70)})),d=i.a.createElement,s=function(e){return d(o,e)};s.defaultProps={highlight:!0}},nFRM:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n("yGqs"),i=n("lebv"),a=n("Fhg5"),o=n("ERkP"),d=n.n(o),s=n("lIm4"),l=n("c2K2"),p=d.a.createElement,g=function(e){var t=e.collapsible,n=e.id,a=e.propList,o=e.title,g=function(){return p(r.b,{marginBottom:"xLarge"},p(r.a,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var t=e.name,n=e.required;return p(d.a.Fragment,null,p(s.a,{primary:!0},t),n?p("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var t=e.types;return p(m,{types:t})}},{header:"Default",hash:"default",render:function(e){var t=e.defaultValue;return p(s.a,{highlight:!1},t)}},{header:"Description",hash:"description",width:"50%",render:function(e){var t=e.description;return p(i.m,null,t)}}],items:a}),p(i.g,{marginTop:"xSmall"},"Props ending with * are required"))};return t?p(l.a,{title:"".concat(o," Props")},g()):p(d.a.Fragment,null,p(i.c,{id:n},o),g())},m=function(e){var t=e.types;return Array.isArray(t)?t.map((function(e,n){return p(d.a.Fragment,{key:e},e.type===a.a?p(s.a,{highlight:!1},e):p(s.a,null,e),n<t.length-1?" | ":null)})):t.type===a.a?p(s.a,{highlight:!1},t):p(s.a,null,t)}},osqn:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n("cxan"),i=n("lebv"),a=n("ERkP"),o=n.n(a),d=n("R5dR"),s=n("nFRM"),l=o.a.createElement,p=[{name:"as",types:["string","React.ComponentType<any>"],description:"Use a different HTML tag or a different custom component"},{name:"backgroundColor",types:l(d.a,{href:"/Colors/ColorsPage",as:"/colors"},"Color"),description:l(o.a.Fragment,null,"Sets the background color given a color name from our"," ",l(d.a,{href:"/Colors/ColorsPage",as:"/colors"},"palette"),".")},{name:"shadow",types:["floating","raised"],description:"Determines the type of shadow to be applied."},{name:"border",types:["box","boxError","none"],description:"Determines type of border to be applied."},{name:"borderBottom",types:["box","boxError","none"],description:"Determines type of bottom border to be applied."},{name:"borderLeft",types:["box","boxError","none"],description:"Determines type of left border to be applied."},{name:"borderRight",types:["box","boxError","none"],description:"Determines type of right border to be applied."},{name:"borderTop",types:["box","boxError","none"],description:"Determines type of top border to be applied."},{name:"borderRadius",types:["normal","circle","none"],description:"Determines type of border radius to be applied."},{name:"clearfix",types:["boolean"],description:"Adds a clearfix for floating internal elements."},{name:"zIndex",types:["sticky","fixed","modalBackdrop","modal","tooltip","popover"],description:l(o.a.Fragment,null,l(i.m,null,"Determines type of z-index to be applied."),l(i.g,null,"Types are in order (sticky is low, popover is high)."))}],g=function(e){return l(s.a,Object(r.a)({title:"Box",propList:p},e))}},tGwT:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("cxan"),i=n("ERkP"),a=n.n(i),o=n("nFRM"),d=a.a.createElement,s=[{name:"display",types:["block","inline-block","inline","inline-flex","flex","grid","inline-grid","none"],description:"Sets the CSS display property of a component."}],l=function(e){return d(o.a,Object(r.a)({title:"Display",propList:s},e))}}},[["Gte+",0,1,4,7,10,8,9,3,2,6,5,11,12]]]);