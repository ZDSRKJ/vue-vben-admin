import{h as p,_ as l}from"./index.js";import{b as c}from"./index-7054c012.js";import{d,a7 as f,Z as r,_ as o,F as u,aa as _,a1 as a,af as C,l as k}from"./vue-ea98dac5.js";import{am as h}from"./antd-168c158e.js";import"./uniq-e2f49495.js";import"./isBoolean-e59585aa.js";import"./index-16a69a03.js";import"./useContentViewHeight-6fc1b870.js";import"./useWindowSizeFn-9a9a25b4.js";import"./uniqBy-989d5baf.js";import"./get-921f7259.js";import"./useSortable-3cb9ef53.js";import"./index-8c1d35df.js";import"./isNumber-6e063d5c.js";import"./lock-5abd8579.js";const v=d({name:"ThemeColorPicker",components:{CheckOutlined:h},props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:n}=p("setting-theme-picker");function s(i){e.event&&c(e.event,i)}return{prefixCls:n,handleClick:s}}});const y=["onClick"];function $(e,n,s,i,g,b){const m=f("CheckOutlined");return r(),o("div",{class:a(e.prefixCls)},[(r(!0),o(u,null,_(e.colorList||[],t=>(r(),o("span",{key:t,onClick:L=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:C({background:t})},[k(m)],14,y))),128))],2)}const j=l(v,[["render",$]]);export{j as default};
