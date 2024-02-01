"use strict";(self["webpackChunknccoss_frontend"]=self["webpackChunknccoss_frontend"]||[]).push([[66],{1066:function(l,e,t){t.r(e),t.d(e,{default:function(){return ol}});var s=t(3396),a=t(9242),n=t(7139);const o=l=>((0,s.dD)("data-v-306f76de"),l=l(),(0,s.Cn)(),l),c={class:"inner"},i=o((()=>(0,s._)("h1",{class:"tit"},"강의 목록",-1))),_={class:"board-box board-list tc"},d={id:"search",name:"search",action:"",method:""},u={class:"search-box flex__e__m"},r=o((()=>(0,s._)("option",{value:"title",selected:""},"제목",-1))),m=o((()=>(0,s._)("option",{value:"date"},"등록일",-1))),h=o((()=>(0,s._)("option",{value:"school"},"학교",-1))),p=[r,m,h],w={class:"item-date fl"},b=o((()=>(0,s._)("div",{class:"fl"},[(0,s._)("input",{type:"text",placeholder:"검색어를 입력해주세요.",title:"검색 내용 입력"})],-1))),f=o((()=>(0,s._)("button",{class:"mgl10 inline-t fr"},[(0,s._)("span",{class:"material-symbols-outlined inline-m"},"search")],-1))),k=o((()=>(0,s._)("div",{class:"search-txt tl mgt10"},[(0,s.Uk)("총 "),(0,s._)("strong",{class:"cl1"},"10"),(0,s.Uk)("개의 게시글이 있습니다.")],-1))),y={key:0},v=o((()=>(0,s._)("col",{style:{width:"6%"}},null,-1))),g=o((()=>(0,s._)("col",{style:{width:"18%"}},null,-1))),x=o((()=>(0,s._)("col",{style:{width:"18%"}},null,-1))),D=o((()=>(0,s._)("col",{style:{width:"18%"}},null,-1))),W=o((()=>(0,s._)("col",{style:{width:"18%"}},null,-1))),U=o((()=>(0,s._)("col",{style:{width:"12%"}},null,-1))),V=o((()=>(0,s._)("col",{style:{width:"10%"}},null,-1))),M=[v,g,x,D,W,U,V],C={key:1},P=o((()=>(0,s._)("col",{style:{width:"25%"}},null,-1))),T=o((()=>(0,s._)("col",{style:{width:"25%"}},null,-1))),q=o((()=>(0,s._)("col",{style:{width:"25%"}},null,-1))),Z=o((()=>(0,s._)("col",{style:{width:"25%"}},null,-1))),$=[P,T,q,Z],F=o((()=>(0,s._)("tr",null,[(0,s._)("th",{class:"m-non t-m-non"},"번호"),(0,s._)("th",null,"학기"),(0,s._)("th",null,"표준과목명"),(0,s._)("th",null,"개설과목명"),(0,s._)("th",null,"개설대학"),(0,s._)("th",{class:"m-non t-m-non"},"총 수강 시간"),(0,s._)("th",{class:"m-non t-m-non"},"난이도")],-1))),H=o((()=>(0,s._)("td",{class:"num m-non t-m-non"},"1",-1))),I=o((()=>(0,s._)("td",null,"2023 동계 계절학기",-1))),N=o((()=>(0,s._)("td",null,"생체 의공학의 원리",-1))),j=o((()=>(0,s._)("td",null,"생체 의공학의 원리",-1))),z=o((()=>(0,s._)("td",null,"국민대학교",-1))),A=o((()=>(0,s._)("td",{class:"m-non t-m-non"},"1,000분",-1))),B=o((()=>(0,s._)("td",{class:"m-non t-m-non"},"초급",-1))),E=[H,I,N,j,z,A,B],G={class:"pagination"},J={class:"flex__m__c"},K={class:"ar"},L=o((()=>(0,s._)("span",{class:"material-symbols-outlined"},"keyboard_double_arrow_left",-1))),O={class:"ar"},Q=o((()=>(0,s._)("span",{class:"material-symbols-outlined"},"chevron_left",-1))),R={class:"ar"},S=o((()=>(0,s._)("span",{class:"material-symbols-outlined"},"navigate_next",-1))),X={class:"ar"},Y=o((()=>(0,s._)("span",{class:"material-symbols-outlined"},"keyboard_double_arrow_right",-1)));function ll(l,e,t,o,r,m){const h=(0,s.up)("vue-date-picker"),v=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("section",null,[(0,s._)("div",c,[i,(0,s._)("div",_,[(0,s._)("form",d,[(0,s._)("div",u,[(0,s.wy)((0,s._)("select",{name:"",id:"","onUpdate:modelValue":e[0]||(e[0]=l=>r.selectedValue=l),class:"m-non"},p,512),[[a.bM,r.selectedValue]]),(0,s._)("div",{class:(0,n.C_)([{"option-show":"date"===r.selectedValue},"search-type inline mgl10 clear"])},[(0,s._)("div",w,[(0,s.Wm)(h,{modelValue:o.date,"onUpdate:modelValue":e[1]||(e[1]=l=>o.date=l),range:"",locale:"ko",format:"yyyy-MM-dd","enable-time-picker":!1,cancelText:"취소",selectText:"확인",class:"vue-datapicker"},null,8,["modelValue"])]),b,f],2)])]),k,(0,s._)("table",null,[o.isMobile?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("colgroup",y,M)),o.isMobile?((0,s.wg)(),(0,s.iD)("colgroup",C,$)):(0,s.kq)("",!0),F,(0,s._)("tr",{onClick:e[2]||(e[2]=l=>m.goToPage("/lms/list/view")),class:"link-box"},E)]),(0,s._)("div",G,[(0,s._)("ul",J,[(0,s._)("li",K,[(0,s.Wm)(v,{to:"",class:"block"},{default:(0,s.w5)((()=>[L])),_:1})]),(0,s._)("li",O,[(0,s.Wm)(v,{to:"",class:"block"},{default:(0,s.w5)((()=>[Q])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(v,{to:"",class:"on"},{default:(0,s.w5)((()=>[(0,s.Uk)("1")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(v,{to:""},{default:(0,s.w5)((()=>[(0,s.Uk)("2")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(v,{to:""},{default:(0,s.w5)((()=>[(0,s.Uk)("3")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(v,{to:""},{default:(0,s.w5)((()=>[(0,s.Uk)("4")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(v,{to:""},{default:(0,s.w5)((()=>[(0,s.Uk)("5")])),_:1})]),(0,s._)("li",R,[(0,s.Wm)(v,{to:"",class:"block"},{default:(0,s.w5)((()=>[S])),_:1})]),(0,s._)("li",X,[(0,s.Wm)(v,{to:"",class:"block"},{default:(0,s.w5)((()=>[Y])),_:1})])])])])])])}t(560);var el=t(4870),tl=t(3960),sl={components:{VueDatePicker:tl.Z},setup(){const{useMobile:l}=(0,s.FN)().appContext.config.globalProperties.$common,{isMobile:e}=l(),t=(0,el.iH)([]);return(0,s.bv)((()=>{const l=new Date,e=new Date((new Date).setDate(l.getDate()+7));t.value=[l,e]})),{date:t,isMobile:e}},data(){return{selectedValue:"title"}},methods:{goToPage(l){this.$router.push(l)}}},al=t(89);const nl=(0,al.Z)(sl,[["render",ll],["__scopeId","data-v-306f76de"]]);var ol=nl}}]);
//# sourceMappingURL=66.01547d33.js.map