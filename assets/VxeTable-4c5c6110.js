var _=Object.defineProperty;var u=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var f=(r,o,e)=>o in r?_(r,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[o]=e,b=(r,o)=>{for(var e in o||(o={}))C.call(o,e)&&f(r,e,o[e]);if(u)for(var e of u(o))k.call(o,e)&&f(r,e,o[e]);return r};var c=(r,o,e)=>new Promise((p,m)=>{var t=a=>{try{i(e.next(a))}catch(s){m(s)}},n=a=>{try{i(e.throw(a))}catch(s){m(s)}},i=a=>a.done?p(a.value):Promise.resolve(a.value).then(t,n);i((e=e.apply(r,o)).next())});import"./TableImg.vue_vue_type_style_index_0_lang-775e4a5e.js";import{T as v}from"./componentMap-c31055d0.js";import{P as y}from"./index-46052efd.js";import{b as T}from"./index.js";import{vxeTableColumns as h,vxeTableFormSchema as A}from"./tableData-ec9d2d1d.js";import{V}from"./index-fa1bafe3.js";import{d as g}from"./table-e1e44be4.js";import{d as B,f as S,r as w,Z as P,a8 as R,a9 as d,l as x,u as l,ac as q}from"./vue-ea98dac5.js";import"./BasicForm-1efdd4a7.js";import"./FormItem.vue_vue_type_script_lang-737a45d5.js";import"./isNumber-6e063d5c.js";import"./isBoolean-e59585aa.js";import"./antd-168c158e.js";import"./get-921f7259.js";import"./uniqBy-989d5baf.js";import"./index-567227c5.js";import"./useWindowSizeFn-9a9a25b4.js";import"./useForm-eae86464.js";import"./RadioButtonGroup-63152489.js";import"./useFormItem-1ece48e0.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";import"./useSortable-3cb9ef53.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-3f191529.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-5c6b45a1.js";import"./copyTextToClipboard-38cd3bdb.js";import"./index-1608b1f9.js";import"./useContentViewHeight-6fc1b870.js";import"./select-9b85ab56.js";const ue=B({__name:"VxeTable",setup(r){const{createMessage:o}=T(),e=S(),p=w({id:"VxeTable",keepSource:!0,editConfig:{trigger:"click",mode:"cell",showStatus:!0},columns:h,toolbarConfig:{buttons:[{content:"在第一行新增",buttonRender:{name:"AButton",props:{type:"primary",preIcon:"mdi:page-next-outline"},events:{click:()=>{var t;(t=e.value)==null||t.insert({name:"新增的"}),o.success("新增成功")}}}},{content:"在最后一行新增",buttonRender:{name:"AButton",props:{type:"warning"},events:{click:()=>{var t;(t=e.value)==null||t.insertAt({name:"新增的"},-1)}}}}]},formConfig:{enabled:!0,items:A},height:"auto",proxyConfig:{ajax:{query:i=>c(this,[i],function*({page:t,form:n}){return g(b({page:t.currentPage,pageSize:t.pageSize},n))}),queryAll:n=>c(this,[n],function*({form:t}){return yield g(t)})}}}),m=t=>[{label:"详情",onClick:()=>{}},{label:"编辑",onClick:()=>{}},{label:"删除",color:"error",popConfirm:{title:"是否确认删除",confirm:()=>{var i;(i=e.value)==null||i.remove(t)}}}];return(t,n)=>(P(),R(l(y),{title:"VxeTable表格",content:"只展示部分操作，详细功能请查看VxeTable官网事例",contentFullHeight:"",fixedHeight:""},{default:d(()=>[x(l(V),q({ref_key:"tableRef",ref:e},p),{action:d(({row:i})=>[x(l(v),{outside:"",actions:m(i)},null,8,["actions"])]),_:1},16)]),_:1}))}});export{ue as default};
