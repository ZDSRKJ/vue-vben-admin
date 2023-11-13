var c=(e,a,o)=>new Promise((p,n)=>{var l=t=>{try{s(o.next(t))}catch(i){n(i)}},u=t=>{try{s(o.throw(t))}catch(i){n(i)}},s=t=>t.done?p(t.value):Promise.resolve(t.value).then(l,u);s((o=o.apply(e,a)).next())});import{B as d}from"./BasicForm-1efdd4a7.js";import"./componentMap-c31055d0.js";import{u as b}from"./useForm-eae86464.js";import"./RadioButtonGroup-63152489.js";import{b as f,_}from"./index.js";import{P}from"./index-46052efd.js";import{d as g,a7 as m,Z as F,a8 as h,a9 as C,l as B}from"./vue-ea98dac5.js";import"./FormItem.vue_vue_type_script_lang-737a45d5.js";import"./isNumber-6e063d5c.js";import"./isBoolean-e59585aa.js";import"./antd-168c158e.js";import"./get-921f7259.js";import"./uniqBy-989d5baf.js";import"./index-567227c5.js";import"./useWindowSizeFn-9a9a25b4.js";import"./useFormItem-1ece48e0.js";import"./uuid-31b8b5a4.js";import"./useSortable-3cb9ef53.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-3f191529.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-5c6b45a1.js";import"./copyTextToClipboard-38cd3bdb.js";import"./index-1608b1f9.js";import"./useContentViewHeight-6fc1b870.js";import"./onMountedOrActivated-3eb95ecd.js";const r={span:8},v=[{field:"title",component:"Input",label:"标题",colProps:r,componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",colProps:r,required:!0},{field:"client",component:"Input",colProps:r,label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"weights",component:"InputNumber",label:"权重",colProps:r,subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"target",component:"InputTextArea",label:"目标描述",colProps:r,componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",colProps:r,componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"inviteer",component:"Input",label:"邀评人",colProps:{span:8},subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",colProps:{span:16},itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosure",component:"Select",label:" ",colProps:{span:8},show:({model:e})=>e.disclosure==="2",componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}],x=g({name:"FormBasicPage",components:{BasicForm:d,PageWrapper:P},setup(){const{createMessage:e}=f(),[a,{validate:o,setProps:p}]=b({labelCol:{span:8},wrapperCol:{span:15},schemas:v,actionColOptions:{offset:8,span:23},submitButtonOptions:{text:"提交"},submitFunc:n});function n(){return c(this,null,function*(){try{yield o(),p({submitButtonOptions:{loading:!0}}),setTimeout(()=>{p({submitButtonOptions:{loading:!1}}),e.success("提交成功！")},2e3)}catch(l){}})}return{register:a}}});function w(e,a,o,p,n,l){const u=m("BasicForm"),s=m("PageWrapper");return F(),h(s,{title:"基础表单",contentBackground:"",content:" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",contentClass:"p-4"},{default:C(()=>[B(u,{onRegister:e.register},null,8,["onRegister"])]),_:1})}const Y=_(x,[["render",w],["__scopeId","data-v-391920c8"]]);export{Y as default};
