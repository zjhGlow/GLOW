(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-497f14f2"],{"6b80":function(t,i,a){"use strict";a("6f3e")},"6f3e":function(t,i,a){},"8a6b":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"bar"},[a("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:t.chartId}})])},r=[],o=a("313e"),s={props:{chartId:String,xData:Array,seriesData:Array,seriesData2:Array,unit:String},data:function(){return{chart:null,option:{title:{text:this.unit||"kVA",x:"1%",y:"-3%",textStyle:{fontSize:"12",fontFamily:"Source Han Sans CN",color:"rgba(230,243,253, 0.7)"}},xAxis:{type:"category",data:this.xData,axisLine:{lineStyle:{color:"#0D94FF"}},axisLabel:{color:"rgba(230,243,253, 0.7)"},axisTick:{show:!1}},tooltip:{trigger:"item",backgroundColor:"rgba(0, 10, 26, 0.8)",borderRadius:8,borderWidth:0,shadowColor:"rgba(13, 148, 255, 0.8)",axisPointer:{type:"line"},textStyle:{color:"#fff"}},yAxis:{type:"value",axisLine:{show:!1,lineStyle:{color:"rgba(230,243,253, 0.7)"}},splitLine:{show:!1}},series:[{data:this.seriesData,type:"bar",barWidth:"20",animation:!0,itemStyle:{normal:{barBorderRadius:!1,color:"#0D94FF",label:{show:!1,position:"top",textStyle:{color:"aqua",fontSize:15}}},emphasis:{color:new o["a"].LinearGradient(0,0,0,1,[{offset:0,color:"rgba(13, 148, 255, 1)"},{offset:1,color:"rgba(13, 148, 255, 0)"}])}}}],grid:{left:"3%",right:"3%",bottom:"0%",top:"12%",containLabel:!0}}}},mounted:function(){this.seriesData2&&(this.option.series=[{data:this.seriesData,type:"bar",barWidth:"10",itemStyle:{normal:{barBorderRadius:!1,color:"#0D94FF"}}},{data:this.seriesData2,type:"bar",barWidth:"10",itemStyle:{normal:{barBorderRadius:!1,color:"#5AD8A6"}}}]),this.initChart();var t=this;window.addEventListener("resize",(function(){t.chart.resize()}))},methods:{initChart:function(){var t=document.getElementById(this.chartId);this.chart=o["b"](t),this.chart.clear(),this.chart.setOption(this.option,!0)}},watch:{seriesData:function(t){console.log(t),this.option.series[0].data=t,this.chart.clear(),this.initChart()}},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)}},n=s,l=(a("6b80"),a("2877")),c=Object(l["a"])(n,e,r,!1,null,"333fbf72",null);i["default"]=c.exports}}]);
//# sourceMappingURL=chunk-497f14f2.192fbf2d.js.map