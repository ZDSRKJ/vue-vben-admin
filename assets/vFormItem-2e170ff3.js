var u=Object.defineProperty;var s=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var a=(r,e,o)=>e in r?u(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,t=(r,e)=>{for(var o in e||(e={}))d.call(e,o)&&a(r,o,e[o]);if(s)for(var o of s(e))h.call(e,o)&&a(r,o,e[o]);return r};import{_}from"./FormItem.vue_vue_type_script_lang-737a45d5.js";import{d as l,c as p,u as n,a7 as $,Z as P,a8 as g,ad as j,aa as C,a9 as F,N as I,ai as b,aj as y}from"./vue-ea98dac5.js";import{_ as O}from"./index.js";import"./componentMap-c31055d0.js";import"./useFormItem-1ece48e0.js";import"./antd-168c158e.js";import"./get-921f7259.js";import"./RadioButtonGroup-63152489.js";import"./index-567227c5.js";import"./useWindowSizeFn-9a9a25b4.js";import"./isBoolean-e59585aa.js";import"./uuid-31b8b5a4.js";import"./useSortable-3cb9ef53.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-3f191529.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-5c6b45a1.js";import"./copyTextToClipboard-38cd3bdb.js";import"./index-1608b1f9.js";import"./isNumber-6e063d5c.js";const k=l({name:"VFormItem",components:{FormItem:_},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,required:!0},formConfig:{type:Object,required:!0}},setup(r){const e=p(()=>t({},n(r.schema))),o=p(()=>t({},n(r.formConfig)));return{schemaNew:e,getProps:o}}});function v(r,e,o,i,w,N){const c=$("FormItem");return P(),g(c,{schema:r.schemaNew,formProps:r.getProps},j({_:2},[C(Object.keys(r.$slots),m=>({name:m,fn:F(f=>[I(r.$slots,m,b(y(f||{})))])}))]),1032,["schema","formProps"])}const X=O(k,[["render",v]]);export{X as default};
