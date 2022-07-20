"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),k=r,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||l;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={id:"PriceScaleOptions",title:"Interface: PriceScaleOptions",sidebar_label:"PriceScaleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},i=void 0,o={unversionedId:"api/interfaces/PriceScaleOptions",id:"api/interfaces/PriceScaleOptions",title:"Interface: PriceScaleOptions",description:"Structure that describes price scale options",source:"@site/docs/api/interfaces/PriceScaleOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/PriceScaleOptions",permalink:"/lightweight-charts/docs/next/api/interfaces/PriceScaleOptions",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PriceScaleOptions",title:"Interface: PriceScaleOptions",sidebar_label:"PriceScaleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Properties",id:"properties",level:2},{value:"autoScale",id:"autoscale",level:3},{value:"mode",id:"mode",level:3},{value:"invertScale",id:"invertscale",level:3},{value:"alignLabels",id:"alignlabels",level:3},{value:"scaleMargins",id:"scalemargins",level:3},{value:"borderVisible",id:"bordervisible",level:3},{value:"borderColor",id:"bordercolor",level:3},{value:"textColor",id:"textcolor",level:3},{value:"entireTextOnly",id:"entiretextonly",level:3},{value:"visible",id:"visible",level:3},{value:"ticksVisible",id:"ticksvisible",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Structure that describes price scale options"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"autoscale"},"autoScale"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"autoScale"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Autoscaling is a feature that automatically adjusts a price scale to fit the visible range of data.\nNote that overlay price scales are always auto-scaled."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"mode"},"mode"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"mode"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/enums/PriceScaleMode"},(0,r.kt)("inlineCode",{parentName:"a"},"PriceScaleMode"))),(0,r.kt)("p",null,"Price scale mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/enums/PriceScaleMode#normal"},"PriceScaleMode.Normal")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"invertscale"},"invertScale"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"invertScale"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Invert the price scale, so that a upwards trend is shown as a downwards trend and vice versa.\nAffects both the price scale and the data on the chart."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"alignlabels"},"alignLabels"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"alignLabels"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Align price scale labels to prevent them from overlapping."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"scalemargins"},"scaleMargins"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"scaleMargins"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/PriceScaleMargins"},(0,r.kt)("inlineCode",{parentName:"a"},"PriceScaleMargins"))),(0,r.kt)("p",null,"Price scale margins."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"{ bottom: 0.1, top: 0.2 }")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"chart.priceScale('right').applyOptions({\n    scaleMargins: {\n        top: 0.8,\n        bottom: 0,\n    },\n});\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"bordervisible"},"borderVisible"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"borderVisible"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Set true to draw a border between the price scale and the chart area."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"bordercolor"},"borderColor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"borderColor"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Price scale border color."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"'#2B2B43'")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"textcolor"},"textColor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"textColor"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Price scale text color.\nIf not provided ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LayoutOptions#textcolor"},"LayoutOptions.textColor")," is used."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"entiretextonly"},"entireTextOnly"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"entireTextOnly"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Show top and bottom corner labels only if entire text is visible."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"visible"},"visible"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"visible"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Indicates if this price scale visible. Ignored by overlay price scales."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," for the right price scale and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," for the left"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ticksvisible"},"ticksVisible"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"ticksVisible"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Draw small horizontal line on price axis labels."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"false")))}u.isMDXComponent=!0}}]);