var j=Object.defineProperty;var C=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var _=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,I=(e,t)=>{for(var n in t||(t={}))$.call(t,n)&&_(e,n,t[n]);if(C)for(var n of C(t))O.call(t,n)&&_(e,n,t[n]);return e};import{J as D,b7 as N}from"./index.js";import{d as b,E as S}from"./antd-168c158e.js";import{d as P,f as g,c as A,o as F,x as H,b as k,u as v,l as c,i as R,F as V,I as W,g as z}from"./vue-ea98dac5.js";function B(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!R(e)}const h="context-menu",J={width:{type:Number,default:156},customEvent:{type:Object,default:null},styles:{type:Object},showIcon:{type:Boolean,default:!0},axis:{type:Object,default(){return{x:0,y:0}}},items:{type:Array,default(){return[]}}},w=e=>{const{item:t}=e;return c("span",{style:"display: inline-block; width: 100%; ",class:"px-4",onClick:e.handler.bind(null,t)},[e.showIcon&&t.icon&&c(D,{class:"mr-2",icon:t.icon},null),c("span",null,[t.label])])},T=P({name:"ContextMenu",props:J,setup(e){const t=g(null),n=g(!1),r=A(()=>{const{axis:o,items:s,styles:l,width:i}=e,{x:a,y:d}=o||{x:0,y:0},y=(s||[]).length*40,p=i,x=document.body,E=x.clientWidth<a+p?a-p:a,L=x.clientHeight<d+y?d-y:d;return I({position:"absolute",width:`${i}px`,left:`${E+1}px`,top:`${L+1}px`,zIndex:9999},l)});F(()=>{H(()=>n.value=!0)}),k(()=>{const o=v(t);o&&document.body.removeChild(o)});function m(o,s){const{handler:l,disabled:i}=o;i||(n.value=!1,s==null||s.stopPropagation(),s==null||s.preventDefault(),l==null||l())}function u(o){return o.filter(l=>!l.hidden).map(l=>{const{disabled:i,label:a,children:d,divider:y=!1}=l,p={item:l,handler:m,showIcon:e.showIcon};return!d||d.length===0?c(V,null,[c(b.Item,{disabled:i,class:`${h}__item`,key:a},{default:()=>[c(w,p,null)]}),y?c(S,{key:`d-${a}`},null):null]):v(n)?c(b.SubMenu,{key:a,disabled:i,popupClassName:`${h}__popup`},{title:()=>c(w,p,null),default:()=>u(d)}):null})}return()=>{let o;if(!v(n))return null;const{items:s}=e;return c(b,{inlineIndent:12,mode:"vertical",class:h,ref:t,style:v(r)},B(o=u(s))?o:{default:()=>[o]})}}});const f={domList:[],resolve:()=>{}},U=function(e){const{event:t}=e||{};if(t&&(t==null||t.preventDefault()),!!N)return new Promise(n=>{const r=document.body,m=document.createElement("div"),u={};e.styles&&(u.styles=e.styles),e.items&&(u.items=e.items),e.event&&(u.customEvent=t,u.axis={x:t.clientX,y:t.clientY});const o=c(T,u);W(o,m);const s=function(){f.resolve("")};f.domList.push(m);const l=function(){f.domList.forEach(i=>{try{i&&r.removeChild(i)}catch(a){}}),r.removeEventListener("click",s),r.removeEventListener("scroll",s)};f.resolve=function(i){l(),n(i)},l(),r.appendChild(m),r.addEventListener("click",s),r.addEventListener("scroll",s)})},M=function(){f&&(f.resolve(""),f.domList=[])};function K(e=!0){return z()&&e&&k(()=>{M()}),[U,M]}export{K as u};
