var h=Object.defineProperty,w=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var M=(t,o,e)=>o in t?h(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,C=(t,o)=>{for(var e in o||(o={}))V.call(o,e)&&M(t,e,o[e]);if(c)for(var e of c(o))g.call(o,e)&&M(t,e,o[e]);return t},v=(t,o)=>w(t,A(o));var F=(t,o,e)=>new Promise((l,i)=>{var u=n=>{try{r(e.next(n))}catch(m){i(m)}},p=n=>{try{r(e.throw(n))}catch(m){i(m)}},r=n=>n.done?l(n.value):Promise.resolve(n.value).then(u,p);r((e=e.apply(t,o)).next())});import k from"./index-ec006106.js";import{a as D}from"./index-1b93578f.js";import S from"./JsonModal-ed144736.js";import{M as U}from"./antd-168c158e.js";import{d as $,f as y,r as B,G as E,a7 as f,Z as G,a8 as J,a9 as b,l as d}from"./vue-ea98dac5.js";import{_ as O}from"./index.js";import"./FormRender-38764781.js";import"./index-33c52626.js";import"./formItemConfig-6b5c003d.js";import"./componentMap-c31055d0.js";import"./useFormItem-1ece48e0.js";import"./get-921f7259.js";import"./RadioButtonGroup-63152489.js";import"./index-567227c5.js";import"./useWindowSizeFn-9a9a25b4.js";import"./isBoolean-e59585aa.js";import"./uuid-31b8b5a4.js";import"./useSortable-3cb9ef53.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-3f191529.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-5c6b45a1.js";import"./copyTextToClipboard-38cd3bdb.js";import"./index-1608b1f9.js";import"./useFormDesignState-2b7717e9.js";import"./isNumber-6e063d5c.js";import"./PreviewCode-251aa303.js";import"./index-c9aa626a.js";const N=$({name:"VFormPreview",components:{JsonModal:S,VFormCreate:k,Modal:U},setup(){const t=y(null),o=B({formModel:{},formConfig:{},visible:!1,fApi:{}}),e=r=>{D(r.schemas),o.formConfig=r,o.visible=!0},l=()=>{o.visible=!1,o.formModel={}},i=()=>F(this,null,function*(){var n,m,a,s;const r=yield(m=(n=o.fApi).submit)==null?void 0:m.call(n);(s=(a=t.value)==null?void 0:a.showModal)==null||s.call(a,r)}),u=r=>{},p=()=>{o.formModel={}};return v(C({handleGetData:i,handleCancel:l},E(o)),{showModal:e,jsonModal:t,onSubmit:u,onCancel:p})}});function P(t,o,e,l,i,u){const p=f("a-input"),r=f("VFormCreate"),n=f("JsonModal"),m=f("Modal");return G(),J(m,{title:"预览(支持布局)",open:t.visible,onOk:t.handleGetData,onCancel:t.handleCancel,okText:"获取数据",cancelText:"关闭",style:{top:"20px"},destroyOnClose:!0,width:900},{default:b(()=>[d(r,{"form-config":t.formConfig,fApi:t.fApi,"onUpdate:fApi":o[0]||(o[0]=a=>t.fApi=a),formModel:t.formModel,"onUpdate:formModel":o[1]||(o[1]=a=>t.formModel=a),onSubmit:t.onSubmit},{slotName:b(({formModel:a,field:s})=>[d(p,{value:a[s],"onUpdate:value":_=>a[s]=_,placeholder:"我是插槽传递的输入框"},null,8,["value","onUpdate:value"])]),_:1},8,["form-config","fApi","formModel","onSubmit"]),d(n,{ref:"jsonModal"},null,512)]),_:1},8,["open","onOk","onCancel"])}const Mo=O(N,[["render",P]]);export{Mo as default};
