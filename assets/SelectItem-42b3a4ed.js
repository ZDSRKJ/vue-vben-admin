import{h as i,_ as l}from"./index.js";import{b as r}from"./index-7054c012.js";import{d as p,c as m,a7 as d,Z as c,_ as u,$ as f,a0 as _,l as g,ac as b,a1 as C}from"./vue-ea98dac5.js";import{r as h}from"./antd-168c158e.js";import"./uniq-e2f49495.js";import"./isBoolean-e59585aa.js";import"./index-16a69a03.js";import"./useContentViewHeight-6fc1b870.js";import"./useWindowSizeFn-9a9a25b4.js";import"./uniqBy-989d5baf.js";import"./get-921f7259.js";import"./useSortable-3cb9ef53.js";import"./index-8c1d35df.js";import"./isNumber-6e063d5c.js";import"./lock-5abd8579.js";const y=p({name:"SelectItem",components:{Select:h},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=i("setting-select-item"),a=m(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});return{prefixCls:t,handleChange:n=>{e.event&&r(e.event,n)},getBindValue:a}}});function S(e,t,a,s,n,v){const o=d("Select");return c(),u("div",{class:C(e.prefixCls)},[f("span",null,_(e.title),1),g(o,b(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}const w=l(y,[["render",S],["__scopeId","data-v-5dab0529"]]);export{w as default};
