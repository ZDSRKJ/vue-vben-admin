var g=Object.defineProperty;var u=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var _=(t,o,e)=>o in t?g(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,v=(t,o)=>{for(var e in o||(o={}))h.call(o,e)&&_(t,e,o[e]);if(u)for(var e of u(o))x.call(o,e)&&_(t,e,o[e]);return t};var C=(t,o,e)=>new Promise((s,i)=>{var m=a=>{try{r(e.next(a))}catch(n){i(n)}},f=a=>{try{r(e.throw(a))}catch(n){i(n)}},r=a=>a.done?s(a.value):Promise.resolve(a.value).then(m,f);r((e=e.apply(t,o)).next())});import{B as k}from"./BasicForm-1efdd4a7.js";import"./componentMap-c31055d0.js";import{u as w}from"./useForm-eae86464.js";import"./RadioButtonGroup-63152489.js";import b from"./JsonModal-ed144736.js";import{M as y}from"./antd-168c158e.js";import{d as B,f as F,r as j,c as O,Z as R,a8 as T,a9 as D,l as M,u as p,ac as G}from"./vue-ea98dac5.js";const E=B({__name:"useForm",setup(t,{expose:o}){const e=F(null),s=j({formModel:{},formConfig:{},visible:!1}),i=O(()=>v({},s.formConfig)),m=c=>{s.formConfig=c,s.visible=!0},[f,{validate:r}]=w(),a=()=>{s.visible=!1},n=()=>C(this,null,function*(){var l,d;let c=yield r();(d=(l=e.value)==null?void 0:l.showModal)==null||d.call(l,c)});return o({showModal:m}),(c,l)=>(R(),T(p(y),{title:"预览(不支持布局)",open:s.visible,onOk:n,onCancel:a,okText:"获取数据",cancelText:"关闭",style:{top:"20px"},destroyOnClose:!0,width:900},{default:D(()=>[M(p(k),G(i.value,{onRegister:p(f)}),null,16,["onRegister"]),M(b,{ref_key:"jsonModal",ref:e},null,512)]),_:1},8,["open"]))}});export{E as _};
