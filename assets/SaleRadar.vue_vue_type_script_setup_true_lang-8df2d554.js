import{du as i}from"./useECharts-f3b1739d.js";import{p as r}from"./antd-168c158e.js";import{d as s,f as n,w as l,Z as d,a8 as m,a9 as f,$ as c,af as h,u}from"./vue-ea98dac5.js";const b=s({__name:"SaleRadar",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(e){const a=e,t=n(null),{setOptions:o}=i(t);return l(()=>a.loading,()=>{a.loading||o({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"2017"},{name:"2017"},{name:"2018"},{name:"2019"},{name:"2020"},{name:"2021"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#67e0e3"}}]}]})},{immediate:!0}),(p,g)=>(d(),m(u(r),{title:"销售统计",loading:e.loading},{default:f(()=>[c("div",{ref_key:"chartRef",ref:t,style:h({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{b as _};
