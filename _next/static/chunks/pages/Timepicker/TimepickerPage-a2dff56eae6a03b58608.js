_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[55],{"26TO":function(e,n,t){"use strict";t.r(n);var r=t("lebv"),a=t("ERkP"),i=t.n(a),l=t("GsAr"),o=t("cxan"),u=t("Fhg5"),c=t("nFRM"),s=i.a.createElement,d=[{name:"onTimeChange",types:"(value: string) => void",required:!0,description:"Callback called with value of selected time."},{name:"label",types:["string","FormControlLabel"],description:"Adds a label to the field."},{name:"locale",types:"string",defaultValue:"en-US",description:s(i.a.Fragment,null,"Locale used to format the the date and calendar. See"," ",s(u.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat",target:"_blank"},"DateTimeFormat"))},{name:"value",types:"string",description:"The time that should be used as the input value."}],m=function(e){return s(c.a,Object(o.a)({title:"Timepicker",propList:d},e))},p=i.a.createElement;n.default=function(){return p(i.a.Fragment,null,p(r.a,null,"Timepicker"),p(r.m,null,"Timepicker is used to select a time in specific hours and minutes."),p(l.a,null,'function Example() {\n  const [time, setTime] = useState<string>();\n\n  return (\n    <Form>\n      <FormGroup>\n        <Timepicker locale="en-US" value={time} onTimeChange={(value) => setTime(value)} />\n      </FormGroup>\n    </Form>\n  );\n}'),p(m,null))}},AEYd:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Timepicker/TimepickerPage",function(){return t("26TO")}])},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var r=t("lebv"),a=t("XPf/"),i=t("BtTX"),l=t("ERkP"),o=t.n(l),u=t("ZUh6"),c=t("j/s1"),s=Object(c.e)(u.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),d=o.a.createElement,m=function(e){var n=e.children,t=e.title,o=Object(l.useState)(!0),u=o[0],c=o[1],m=function(){return c(!u)};return d("div",null,d(s,{marginBottom:"xLarge",alignItems:"center",onClick:m,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||m()},tabIndex:0},u?d(a.a,{title:"Expand"}):d(i.a,{title:"Collapse"}),d(r.m,null,t)),!u&&n)}},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("ERkP"),a=t.n(r),i=t("j/s1"),l=i.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,r=e.theme;return n&&!t&&Object(i.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(i.d)(["color:",";"],t.colors.primary70)})),o=a.a.createElement,u=function(e){return o(l,e)};u.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t("yGqs"),a=t("lebv"),i=t("Fhg5"),l=t("ERkP"),o=t.n(l),u=t("lIm4"),c=t("c2K2"),s=o.a.createElement,d=function(e){var n=e.collapsible,t=e.id,i=e.propList,l=e.title,d=function(){return s(r.b,{marginBottom:"xLarge"},s(r.a,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return s(o.a.Fragment,null,s(u.a,{primary:!0},n),t?s("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return s(m,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return s(u.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return s(a.m,null,n)}}],items:i}),s(a.g,{marginTop:"xSmall"},"Props ending with * are required"))};return n?s(c.a,{title:"".concat(l," Props")},d()):s(o.a.Fragment,null,s(a.c,{id:t},l),d())},m=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return s(o.a.Fragment,{key:e},e.type===i.a?s(u.a,{highlight:!1},e):s(u.a,null,e),t<n.length-1?" | ":null)})):n.type===i.a?s(u.a,{highlight:!1},n):s(u.a,null,n)}}},[["AEYd",0,1,4,7,10,8,9,3,2,6,5,11]]]);