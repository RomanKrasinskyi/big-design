_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[56],{AyO2:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Tooltip/TooltipPage",function(){return e("dpPe")}])},c2K2:function(t,n,e){"use strict";e.d(n,"a",(function(){return m}));var o=e("lebv"),r=e("XPf/"),i=e("BtTX"),l=e("ERkP"),a=e.n(l),u=e("ZUh6"),p=e("j/s1"),c=Object(p.e)(u.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),s=a.a.createElement,m=function(t){var n=t.children,e=t.title,a=Object(l.useState)(!0),u=a[0],p=a[1],m=function(){return p(!u)};return s("div",null,s(c,{marginBottom:"xLarge",alignItems:"center",onClick:m,onKeyPress:function(t){"Enter"!==t.key&&" "!==t.key||m()},tabIndex:0},u?s(r.a,{title:"Expand"}):s(i.a,{title:"Collapse"}),s(o.m,null,e)),!u&&n)}},dpPe:function(t,n,e){"use strict";e.r(n);var o=e("lebv"),r=e("Fhg5"),i=e("ERkP"),l=e.n(i),a=e("GsAr"),u=e("lIm4"),p=e("cxan"),c=e("nFRM"),s=l.a.createElement,m=[{name:"trigger",types:"ReactNode",required:!0,description:"React Node that triggers the tooltip on hover."},{name:"placement",defaultValue:"top",types:["auto","auto-end","auto-start","bottom","bottom-end","bottom-start","left","left-end","left-start","right","right-end","right-start","top","top-end","top-start"],description:"Sets the position of the Tooltip."}],d=function(t){return s(c.a,Object(p.a)({title:"Tooltip",propList:m},t))},g=l.a.createElement;n.default=function(){return g(l.a.Fragment,null,g(o.a,null,"Tooltips"),g(o.m,null,"Tooltips contain information to help users understand actions or page elements. They are short, and triggered by a user hovering with their keyboard or mouse over a UI element."," ",g(r.a,{href:"https://design.bigcommerce.com/components/tooltips",target:"_blank"},"Tooltips Design Guidelines"),"."),g(a.a,null,'<Tooltip trigger={<Button>Hover</Button>} placement="right">\n  Tooltip Content\n</Tooltip>'),g(o.b,null,"API"),g(d,null),g(o.b,null,"Examples"),g(o.c,null,"Anchor"),g(o.m,null,"Tooltips can wrap any ",g(u.a,null,"Element"),". Tooltip will show on hover."),g(a.a,null,'<Flex alignItems="center">\n  <Box marginRight="medium">\n    <Tooltip trigger={<Button>Button</Button>} placement="right">\n      Tooltip Content\n    </Tooltip>\n  </Box>\n\n  <Box marginRight="medium">\n    <Tooltip trigger={<WarningIcon />} placement="right">\n      Tooltip Content\n    </Tooltip>\n  </Box>\n  <Box marginRight="medium">\n    <Tooltip trigger={<span>Span</span>} placement="right">\n      Tooltip Content\n    </Tooltip>\n  </Box>\n</Flex>'),g(o.c,null,"Placement"),g(o.m,null,"Tooltip can be anchored in different directions with the ",g(u.a,{primary:!0},"placement")," property. It will automatically find a position if there's not enough space in the chosen direction."),g(a.a,null,'<Grid gridColumns="repeat(4, min-content)">\n  <Tooltip trigger={<Button>Right</Button>} placement="right">\n    Tooltip Content\n  </Tooltip>\n  <Tooltip trigger={<Button>Top</Button>} placement="top">\n    Tooltip Content\n  </Tooltip>\n  <Tooltip trigger={<Button>Left</Button>} placement="left">\n    Tooltip Content\n  </Tooltip>\n  <Tooltip trigger={<Button>Bottom</Button>} placement="bottom">\n    Tooltip Content\n  </Tooltip>\n</Grid>\n'))}},lIm4:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var o=e("ERkP"),r=e.n(o),i=e("j/s1"),l=i.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(t){return t.theme.colors.secondary70}),(function(t){var n=t.highlight,e=t.primary,o=t.theme;return n&&!e&&Object(i.d)(["background-color:",";padding:",";"],o.colors.warning10,o.spacing.xxSmall)}),(function(t){var n=t.primary,e=t.theme;return n&&Object(i.d)(["color:",";"],e.colors.primary70)})),a=r.a.createElement,u=function(t){return a(l,t)};u.defaultProps={highlight:!0}},nFRM:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var o=e("yGqs"),r=e("lebv"),i=e("Fhg5"),l=e("ERkP"),a=e.n(l),u=e("lIm4"),p=e("c2K2"),c=a.a.createElement,s=function(t){var n=t.collapsible,e=t.id,i=t.propList,l=t.title,s=function(){return c(o.b,{marginBottom:"xLarge"},c(o.a,{columns:[{header:"Prop Name",hash:"propName",render:function(t){var n=t.name,e=t.required;return c(a.a.Fragment,null,c(u.a,{primary:!0},n),e?c("b",null," *"):null)}},{header:"Type",hash:"type",render:function(t){var n=t.types;return c(m,{types:n})}},{header:"Default",hash:"default",render:function(t){var n=t.defaultValue;return c(u.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(t){var n=t.description;return c(r.m,null,n)}}],items:i}),c(r.g,{marginTop:"xSmall"},"Props ending with * are required"))};return n?c(p.a,{title:"".concat(l," Props")},s()):c(a.a.Fragment,null,c(r.c,{id:e},l),s())},m=function(t){var n=t.types;return Array.isArray(n)?n.map((function(t,e){return c(a.a.Fragment,{key:t},t.type===i.a?c(u.a,{highlight:!1},t):c(u.a,null,t),e<n.length-1?" | ":null)})):n.type===i.a?c(u.a,{highlight:!1},n):c(u.a,null,n)}}},[["AyO2",0,1,4,7,10,8,9,3,2,6,5,11]]]);