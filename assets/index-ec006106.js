var Q=Object.defineProperty;var y=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var E=(o,t,n)=>t in o?Q(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,A=(o,t)=>{for(var n in t||(t={}))L.call(t,n)&&E(o,n,t[n]);if(y)for(var n of y(t))$.call(t,n)&&E(o,n,t[n]);return o};var j=(o,t)=>{var n={};for(var r in o)L.call(o,r)&&t.indexOf(r)<0&&(n[r]=o[r]);if(o!=null&&y)for(var r of y(o))t.indexOf(r)<0&&$.call(o,r)&&(n[r]=o[r]);return n};var P=(o,t,n)=>new Promise((r,F)=>{var d=a=>{try{c(n.next(a))}catch(i){F(i)}},g=a=>{try{c(n.throw(a))}catch(i){F(i)}},c=a=>a.done?r(a.value):Promise.resolve(a.value).then(d,g);c((n=n.apply(o,t)).next())});import T from"./FormRender-38764781.js";import{y as G,R as B,q as U}from"./antd-168c158e.js";import{bx as X,ah as Y,al as x,c as D,n as O,by as I,o as oo,_ as eo}from"./index.js";import{g as to,H as no,d as so,f as ro,c as w,p as H,u as ao,a7 as R,Z as k,_ as q,l as z,a9 as V,F as io,aa as mo,a8 as lo,ad as fo,N as co,ai as uo,aj as po,ac as Fo}from"./vue-ea98dac5.js";import{b as go,f as W}from"./index-1b93578f.js";import"./index-33c52626.js";import"./formItemConfig-6b5c003d.js";import"./componentMap-c31055d0.js";import"./useFormItem-1ece48e0.js";import"./get-921f7259.js";import"./RadioButtonGroup-63152489.js";import"./index-567227c5.js";import"./useWindowSizeFn-9a9a25b4.js";import"./isBoolean-e59585aa.js";import"./uuid-31b8b5a4.js";import"./useSortable-3cb9ef53.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-3f191529.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-5c6b45a1.js";import"./copyTextToClipboard-38cd3bdb.js";import"./index-1608b1f9.js";import"./useFormDesignState-2b7717e9.js";import"./isNumber-6e063d5c.js";function ho(o,t){return o&&X(o,t,Y)}function Co(o){return typeof o=="function"?o:x}function Z(o,t){return o&&ho(o,Co(t))}function Mo(o,t,n,r){(()=>{const u=to(),h=u==null?void 0:u.parent;h&&o.formConfig.schemas.forEach(m=>{Z(m.componentProps,(M,e)=>{O(M)&&(m.componentProps[e]=M.bind(h))}),Z(m.on,(M,e)=>{O(M)&&(m.componentProps[e]=M.bind(h))})})})();const{emit:d}=n,g=G.useForm,{resetFields:c,validate:a,clearValidate:i,validateField:C}=g(t,[]);return{validate:a,validateField:C,resetFields:c,clearValidate:i,submit:()=>P(this,null,function*(){var h,m;const u=D(no(t.value));return d==null||d("submit",u),(m=(h=o.formConfig).submit)==null||m.call(h,u),u})}}function bo(o,t,n,r){const F=e=>go(o.formConfig.schemas,s=>s.field===e),d=(e,s,l)=>{const f=F(e);f&&(f[s]=l)},g=(e,s,l)=>{const f=F(e);f!=null&&f.componentProps&&(["options","treeData"].includes(s)&&c(e,void 0),f.componentProps[s]=l)},c=(e,s)=>{var l;typeof e=="string"?(o.formModel[e]=s,(l=n.value)==null||l.validateField(e,s,[])):Object.keys(e).forEach(p=>{var b;o.formModel[p]=e[p],(b=n.value)==null||b.validateField(p,e[p],[])})},a=(e,s)=>{o.formConfig[e]=s},i=e=>D(o.formModel)[e],C=()=>P(this,null,function*(){return D(o.formModel)}),v=e=>{d(e,"hidden",!0)},u=e=>{typeof e=="string"?g(e,"disabled",!0):a("disabled",e!==!1)},h=e=>{d(e,"hidden",!1)},m={};return(e=>{W(e,s=>{W(e,l=>{var f;m[l.field]||(m[l.field]=new Set),(f=s.link)!=null&&f.includes(l.field)&&O(s.update)&&m[l.field].add(s)}),m[s.field].add(s)})})(o.formConfig.schemas),A({linkOn:m,setValue:c,getValue:i,hidden:v,show:h,set:d,get:F,setProps:g,getData:C,disable:u},r)}const vo=so({name:"VFormCreate",components:{FormRender:T,Form:G,Row:B},props:{fApi:{type:Object},formModel:{type:Object,default:()=>({})},formConfig:{type:Object,required:!0}},emits:["submit","change","update:fApi","update:formModel"],setup(o,t){const n=o.formConfig.layout=="vertical"?U:B,{emit:r}=t,F=ro(null),d=w({get:()=>o.formModel,set:p=>r("update:formModel",p)}),g=w(()=>o.formConfig.schemas&&o.formConfig.schemas.filter(p=>p.hidden!==!0)),c=I(o,"fApi",r),{submit:a,validate:i,clearValidate:C,resetFields:v,validateField:u}=Mo(o,d,t),f=bo({formConfig:o.formConfig,formData:o.formModel},t,F,{submit:a,validate:i,validateField:u,resetFields:v,clearValidate:C}),{linkOn:h}=f,m=j(f,["linkOn"]);c.value=m;const M=p=>{var S;const{schema:b,value:J}=p,{field:K}=ao(b);(S=h[K])==null||S.forEach(_=>{var N;(N=_.update)==null||N.call(_,J,_,c.value)})},e=w(()=>oo(o.formConfig,["disabled","labelWidth","schemas"])),s=()=>{a()};H("formModel",d);const l=(p,b)=>{d.value[p]=b};return H("setFormModelMethod",l),{eFormModel:F,submit:a,validate:i,validateField:u,resetFields:v,clearValidate:C,handleChange:M,formModelProps:e,handleSubmit:s,setFormModel:l,formModelNew:d,wrapperComp:n,noHiddenList:g}}});const _o={class:"v-form-container"};function yo(o,t,n,r,F,d){const g=R("FormRender"),c=R("Row"),a=R("Form");return k(),q("div",_o,[z(a,Fo({class:"v-form-model",ref:"eFormModel",model:o.formModel},o.formModelProps),{default:V(()=>[z(c,null,{default:V(()=>[(k(!0),q(io,null,mo(o.noHiddenList,(i,C)=>(k(),lo(g,{key:C,schema:i,formConfig:o.formConfig,formData:o.formModelNew,onChange:o.handleChange,setFormModel:o.setFormModel,onSubmit:o.handleSubmit,onReset:o.resetFields},fo({_:2},[i&&i.componentProps?{name:"schema.componentProps!.slotName",fn:V(()=>[co(o.$slots,i.componentProps.slotName,uo(po({formModel:o.formModel,field:i.field,schema:i})),void 0,!0)]),key:"0"}:void 0]),1032,["schema","formConfig","formData","onChange","setFormModel","onSubmit","onReset"]))),128))]),_:3})]),_:3},16,["model"])])}const Uo=eo(vo,[["render",yo],["__scopeId","data-v-06441f85"]]);export{Uo as default};
