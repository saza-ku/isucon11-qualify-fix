var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,r=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,i=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&r(e,a,t[a]);if(n)for(var a of n(t))l.call(t,a)&&r(e,a,t[a]);return e},c=(e,n)=>t(e,a(n));import{r as o,R as m,a as u,M as d,L as p,I as E,T as f,b as x,c as g,d as v,u as h,e as y,f as b,B as w,F as N,A as _,g as C,h as S,i as k,j,t as D,k as $,_ as I,l as T,m as z,S as O,n as P,o as q,p as U}from"./vendor.46946e6f.js";const L={me:null},M=o.exports.createContext(L),A=o.exports.createContext(null),V=(e,t)=>{switch(t.type){case"login":return c(i({},e),{me:t.user});case"logout":return c(i({},e),{me:null});default:throw new Error("invalid action")}},B=({children:e})=>{const[t,a]=o.exports.useReducer(V,L);return m.createElement(M.Provider,{value:t},m.createElement(A.Provider,{value:a},e))},F=()=>{const e=o.exports.useContext(M);if(!e)throw new Error("require wrapped by stateContext");return e},R=()=>{const e=o.exports.useContext(A);if(!e)throw new Error("require wrapped by stateContext");return e},J=({children:e})=>m.createElement("div",{className:"text-white font-bold"},e),X=()=>new Date,Y=e=>Math.floor(e.getTime()/1e3),G=e=>new Date(1e3*e),H=e=>`${e.getFullYear()}/${K(e.getMonth()+1)}/${K(e.getDate())} ${K(e.getHours())}:${K(e.getMinutes())}:${K(e.getSeconds())}`,K=e=>("0"+e).slice(-2);const W=new class{async postAuth(e,t){await u.post("/api/auth",{},i({headers:{Authorization:`Bearer ${e}`}},t))}async postSignout(e){await u.post("/api/signout",e)}async getUserMe(e){const{data:t}=await u.get("/api/user/me",e);return t}async getIsus(e){const{data:t}=await u.get("/api/isu",e),a=[];for(const n of t)a.push(c(i({},n),{latest_isu_condition:n.latest_isu_condition?c(i({},n.latest_isu_condition),{date:G(n.latest_isu_condition.timestamp)}):null}));return a}async postIsu(e,t){const a=new FormData;a.append("jia_isu_uuid",e.jia_isu_uuid),a.append("isu_name",e.isu_name),e.image&&a.append("image",e.image,e.image.name),await u.post("/api/isu",a,i({headers:{"content-type":"multipart/form-data"}},t))}async getIsu(e,t){const{data:a}=await u.get(`/api/isu/${e}`,t);return a}async deleteIsu(e,t){await u.delete(`/api/isu/${e}`,t)}async getIsuGraphs(e,t,a){const n={datetime:Y(t.date)},{data:s}=await u.get(`/api/isu/${e}/graph`,i({params:n},a)),l=[];return s.forEach((e=>{l.push(c(i({},e),{start_at:G(e.start_at),end_at:G(e.end_at)}))})),l}async getIsuConditions(e,t,a){const n=c(i({},t),{start_time:t.start_time?Y(t.start_time):void 0,end_time:Y(t.end_time)}),{data:s}=await u.get(`/api/condition/${e}`,i({params:n},a)),l=[];return s.forEach((e=>{l.push(c(i({},e),{date:G(e.timestamp)}))})),l}async getTrend(e){const{data:t}=await u.get("/api/trend",i({},e)),a=[];return t.forEach((e=>{const t=[],n=[],s=[];e.info.forEach((e=>{t.push(c(i({},e),{date:G(e.timestamp)}))})),e.warning.forEach((e=>{n.push(c(i({},e),{date:G(e.timestamp)}))})),e.critical.forEach((e=>{s.push(c(i({},e),{date:G(e.timestamp)}))})),a.push(c(i({},e),{info:t,warning:n,critical:s}))})),a}},Q=e=>{const t=R();return m.createElement(d,{isOpen:e.isOpen,onRequestClose:e.toggle,className:"top-18 bg-gray-50 absolute right-0 flex justify-items-center px-6 py-3 border rounded",overlayClassName:"fixed inset-0",shouldCloseOnOverlayClick:!0},m.createElement(p,{to:"/",onClick:async()=>{await W.postSignout(),t({type:"logout"})},className:"text-primary flex items-center"},m.createElement(E,{className:"mr-1",size:16}),m.createElement("div",null,"logout")))},Z=e=>m.createElement(J,null,m.createElement(p,{to:e.to,className:"flex items-center"},e.icon,m.createElement("div",{className:"ml-1"},e.label))),ee=()=>{const[e,t]=o.exports.useState(!1),a=()=>{t(!e)},n=F().me;return n?m.createElement("div",{className:"w-52 flex items-center justify-between ml-auto"},m.createElement(Z,{to:"/register",label:"ISUの登録",icon:m.createElement(f,null)}),m.createElement("div",{className:"border-l-1 pl-4 border-white"},m.createElement(J,null,m.createElement("div",{className:"flex items-center cursor-pointer",onClick:a},m.createElement(x,null),m.createElement("div",{className:"ml-1"},n.jia_user_id)))),m.createElement(Q,{isOpen:e,toggle:a})):m.createElement(m.Fragment,null)};const te=()=>m.createElement("header",{className:"h-18 bg-accent-primary flex items-center pl-6 pr-8"},m.createElement(p,{to:"/"},m.createElement("img",{src:"/assets/logo_white.98008342.svg",alt:"isucondition",className:"h-11 cursor-pointer"})),m.createElement(ee,null)),ae=e=>{var t=e,{label:a,children:r,customClass:c}=t,o=((e,t)=>{var a={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&n)for(var r of n(e))t.indexOf(r)<0&&l.call(e,r)&&(a[r]=e[r]);return a})(t,["label","children","customClass"]);return m.createElement("button",i({className:"flex items-center justify-center focus:outline-none disabled:opacity-40 disabled:cursor-default "+c},o),r||a)},ne=({children:e})=>m.createElement("div",{className:"bg-secondary drop-shadow-lg min-w-min px-16 py-12 w-full max-w-4xl h-full border rounded"},e);const se=()=>m.createElement(ne,null,m.createElement("div",{className:"flex flex-col items-center w-full"},m.createElement("img",{src:"/assets/logo_orange.974bf3e6.svg",alt:"isucondition",className:"my-2 max-w-sm"}),m.createElement("div",{className:"mt-4 text-lg"},"ISUとつくる新しい明日"),m.createElement("div",{className:"mt-16 w-full border-b"}),m.createElement(ae,{label:"JIAのアカウントでログイン",customClass:"mt-10 px-5 py-2 h-12 text-white font-bold bg-button rounded-3xl",onClick:async()=>{location.href=`http://${document.domain}:5000?callback=${location.protocol}//${location.host}`}}))),le=({isu:e,customClass:t})=>m.createElement("img",{src:`/api/isu/${e.jia_isu_uuid}/icon`,className:"rounded object-cover "+t,key:e.jia_isu_uuid}),re=({variant:e})=>{const t=`h-6 rounded-2xl px-4 font-medium text-center ${(()=>{switch(e){case"info":return"bg-status-info text-status-info";case"warning":return"bg-status-warning text-status-warning";case"sitting":return"bg-status-sitting text-status-sitting";case"critical":return"bg-status-critical text-status-critical"}})()}`;return m.createElement("div",{className:t},e)},ie=()=>{const[e,t]=o.exports.useState([]);return o.exports.useEffect((()=>{(async()=>{t(await W.getIsus())})()}),[t]),m.createElement("div",null,m.createElement("h2",{className:"mb-6 text-2xl font-bold"},"あなたのISU"),m.createElement("div",{className:"grid-cols-list grid gap-8 w-full"},e.map((e=>m.createElement(p,{key:e.jia_isu_uuid,to:`/isu/${e.jia_isu_uuid}`,className:"hover:bg-primary flex flex-col items-center p-4 rounded"},m.createElement(le,{isu:e,customClass:"h-48 w-48"}),m.createElement("h3",{className:"text-primary mb-3 mt-2 font-medium"},e.name),e.latest_isu_condition?m.createElement("div",null,m.createElement(re,{variant:e.latest_isu_condition.condition_level}),m.createElement("div",{className:"text-secondary mt-1"},H(e.latest_isu_condition.date))):null)))))},ce=({top:e})=>{const t="bg-accent-primary opacity-80 w-4 h-35 m-2 rounded-md inline-block";return m.createElement("div",{className:"bg-opacity-40 absolute top-0 flex justify-center w-full h-full bg-white "+(e?"pt-12":"items-center")},m.createElement("span",null,m.createElement("span",{className:t+" animate-loader0"}),m.createElement("span",{className:t+" animate-loader1"}),m.createElement("span",{className:t+" animate-loader2"}),m.createElement("span",{className:t+" animate-loader3"}),m.createElement("span",{className:t+" animate-loader4"})))},oe=(e,t)=>`${Math.round(e/t*100)}%`,me=({trend:e,maxConditionCount:t})=>m.createElement("div",{className:"flex items-center w-full h-4"},m.createElement("div",{className:"bg-status-info h-full",style:{width:oe(e.info.length,t)}}),m.createElement("div",{className:"bg-status-warning h-full",style:{width:oe(e.warning.length,t)}}),m.createElement("div",{className:"bg-status-critical h-full",style:{width:oe(e.critical.length,t)}})),ue=({trend:e,maxConditionCount:t})=>m.createElement("div",{className:"grid-cols-trend grid p-2"},m.createElement("div",{className:"flex flex-col"},m.createElement("div",null,e.character),m.createElement("div",{className:"text-secondary"},(e=>{let t=null;for(const a of[e.info,e.warning,e.critical].flat())(!t||t<a.date)&&(t=a.date);return t?H(t):"no data"})(e))),m.createElement("div",{className:"flex items-center"},m.createElement(me,{trend:e,maxConditionCount:t}))),de=()=>m.createElement("div",{className:"grid-cols-trend grid p-2"},m.createElement("div",{className:"flex flex-col justify-center"},m.createElement("div",{className:"font-bold"},"せいかく"),m.createElement("div",{className:"text-secondary"},"Last Updated")),m.createElement("div",{className:"flex gap-8 items-center justify-center"},m.createElement(re,{variant:"info"}),m.createElement(re,{variant:"warning"}),m.createElement(re,{variant:"critical"}))),pe=e=>e.info.length+e.warning.length+e.critical.length,Ee=()=>{const[e,t]=o.exports.useState([]),[a,n]=o.exports.useState(0);return o.exports.useEffect((()=>{(async()=>{const e=await W.getTrend();e.sort(((e,t)=>pe(t)-pe(e))),t(e);let a=0;e.forEach((e=>{const t=pe(e);t>a&&(a=t)})),n(a)})()}),[]),m.createElement("div",{className:"relative"},m.createElement("h2",{className:"mb-8 text-2xl font-bold"},"みんなのISU"),m.createElement("div",{className:"mb-2"},m.createElement(de,null)),e.map((e=>m.createElement(ue,{key:e.character,trend:e,maxConditionCount:a}))),0===e.length?m.createElement(ce,null):null)},fe=()=>F().me?m.createElement(ge,null):m.createElement(xe,null),xe=()=>m.createElement("div",{className:"flex flex-col gap-10 items-center p-10 min-h-full"},m.createElement(se,null),m.createElement(ne,null,m.createElement(Ee,null))),ge=()=>m.createElement("div",{className:"absolute flex items-center justify-center p-10 min-w-full h-full"},m.createElement(ne,null,m.createElement(ie,null))),ve=e=>{const{isTryLogin:t,login:a,state:n}=(()=>{const e=F(),t=R(),[a,n]=o.exports.useState(!0),s=o.exports.useCallback((e=>{t({type:"login",user:e}),n(!1)}),[t]);return{isTryLogin:a,login:o.exports.useCallback((async t=>{if(e.me)n(!1);else try{n(!0);try{const e=await W.getUserMe({cancelToken:t});s(e)}catch{const e=new URL(location.href),a=e.searchParams.get("jwt");if(!a)return void n(!1);e.searchParams.delete("jwt"),history.replaceState(null,"",e.href),await W.postAuth(a,{cancelToken:t});const l=await W.getUserMe({cancelToken:t});s(l)}}catch{n(!1)}}),[e.me,s]),state:e}})();return o.exports.useEffect((()=>{const e=u.CancelToken.source();return a(e.token),()=>e.cancel()}),[a]),t?m.createElement(ce,null):n.me?m.createElement(v,i({},e)):"/login"===e.path?m.createElement(g,{to:"/login"}):"/"===e.path?m.createElement(v,i({},e)):m.createElement(g,{to:"/"})},he=({id:e})=>m.createElement("div",{className:"w-max flex"},m.createElement(ye,{to:`/isu/${e}`,label:"詳細"}),m.createElement(ye,{to:`/isu/${e}/condition`,label:"状態"}),m.createElement(ye,{to:`/isu/${e}/graph`,label:"グラフ"})),ye=({to:e,label:t})=>{const{pathname:a}=h(),n=a===e;return m.createElement("div",{className:"w-20  pb-1 flex justify-center "+(n?"border-b-2 text-accent-primary border-accent-primary font-bold":"text-secondary")},m.createElement(p,{to:e},t))},be=({isu:e})=>m.createElement("header",{className:"bg-secondary pl-16 pt-8"},m.createElement("h2",{className:"mb-8 ml-4 text-2xl font-bold"},e.name),m.createElement(he,{id:e.jia_isu_uuid})),we=({conditions:e,next:t,prev:a,page:n})=>{const s=20===e.length,l=n>1;return m.createElement("div",{className:"flex gap-4"},m.createElement(ae,{label:"Prev",disabled:!l,onClick:a},m.createElement(y,{size:24})),m.createElement("div",{className:"align-middle text-xl"},n),m.createElement(ae,{label:"Next",disabled:!s,onClick:t},m.createElement(b,{size:24})))},Ne=({name:e,status:t})=>m.createElement("div",null,m.createElement("div",{"data-tip":e,"data-place":"top",className:"flex items-center text-primary "+(t||" opacity-30")},(()=>{switch(e){case"is_dirty":return m.createElement(_,{size:24});case"is_overweight":return m.createElement(N,{size:18});case"is_broken":return m.createElement(w,{size:20})}})())),_e=({conditionCSV:e})=>{const t=e.split(","),a=[];return t.forEach((e=>{const t=e.split("=");if(2!==t.length)return;const n="true"===t[1];a.push([t[0],n])})),m.createElement("div",{className:"flex gap-3 items-center"},a.map((e=>m.createElement(Ne,{key:e[0],name:e[0],status:e[1]}))))},Ce=({condition_level:e,size:t})=>m.createElement("div",{"data-tip":(()=>{switch(e){case"info":return"Info";case"warning":return"Warning";case"critical":return"Critical"}})(),"data-place":"left",className:"flex items-center bg-white pt-2 z-1 pb-2 "+(()=>{switch(e){case"info":return"text-green-500";case"warning":return"text-yellow-500";case"critical":return"text-red-500"}})()},(()=>{switch(e){case"info":return m.createElement(k,{size:t});case"warning":return m.createElement(S,{size:t});case"critical":return m.createElement(C,{size:t})}})()),Se=({condition:e})=>m.createElement("div",{className:"relative px-4 w-full"},m.createElement("div",{className:"grid-cols-[min-content,1fr,min-content,5rem,6rem] grid gap-4 items-center"},m.createElement("div",{className:"flex flex-wrap justify-center h-full"},m.createElement("div",{className:"flex items-center h-full"},m.createElement(Ce,{condition_level:e.condition_level,size:28})),m.createElement("div",{className:"w-1px bg-line -translate-x-0.5px h-full transform -translate-y-full"})),m.createElement("div",{className:"text-primary break-words overflow-hidden"},e.message),m.createElement(j,null),m.createElement(_e,{conditionCSV:e.condition}),e.is_sitting?m.createElement(re,{variant:"sitting"}):m.createElement("div",null),m.createElement("div",{className:"text-secondary my-4"},H(e.date)))),ke=({conditions:e})=>m.createElement("div",{className:"border-primary min-h-64 flex flex-col items-center w-full border-b border-t"},e.map(((e,t)=>m.createElement(Se,{key:t,condition:e})))),je=({label:e,value:t,setValue:a,customClass:n,inputProps:s})=>m.createElement("label",{className:"flex flex-col "+n},e,m.createElement("input",c(i({type:"text"},s),{className:"border-primary focus:border-primary px-2 py-1 h-8 border-solid rounded focus:outline-none shadow-none",value:t,onChange:e=>a(e.target.value)}))),De=({start_time:e,end_time:t,setStartTime:a,setEndTime:n})=>m.createElement("label",{className:"flex flex-col"},"時間指定",m.createElement("div",{className:"flex items-center"},m.createElement("input",{className:"w-50 border-primary px-2 py-1 h-8 border border-solid rounded",value:e||"",onChange:e=>a(e.target.value),placeholder:"2020/09/12 11:22:33"}),m.createElement("div",{className:"m-0.5 text-xl"},"~"),m.createElement("input",{className:"w-50 border-primary px-2 py-1 h-8 border border-solid rounded",value:t||"",onChange:e=>n(e.target.value),placeholder:"2021/08/21 11:22:33"}))),$e=({query:e,search:t})=>{const[a,n]=o.exports.useState(e.condition_level),[s,l]=o.exports.useState(""),[r,i]=o.exports.useState("");return m.createElement("div",{className:"flex flex-wrap gap-6 items-end"},m.createElement(je,{label:"検索条件",value:a,setValue:n,customClass:"flex-1"}),m.createElement(De,{start_time:s,end_time:r,setStartTime:l,setEndTime:i}),m.createElement(ae,{customClass:"px-3 py-1 h-8 leading-4 border border-primary rounded",label:"検索",disabled:!a,onClick:()=>{if(!a.split(",").every((e=>["critical","warning","info"].includes(e))))return void D.error("検索条件には critical,warning,info のいずれか一つ以上をカンマ区切りで入力してください");const e=new Date(s);if(s&&isNaN(e.getTime()))return void D.error("時間指定（start_time〜）が不正です");const n=new Date(r);r&&isNaN(n.getTime())?D.error("時間指定（〜end_time）が不正です"):t({condition_level:a,start_time:s?e:void 0,end_time:r?n:X()})}}))},Ie=({isu:e})=>{var t;const[a,n]=o.exports.useState(!0),s=o.exports.useCallback((async t=>{n(!0);const a=await W.getIsuConditions(e.jia_isu_uuid,t);return n(!1),a}),[e]),l=h().search.substring(1).split("&").reduce(((e,t)=>(e[t.split("=")[0]]=t.split("=")[1],e)),{}),r=null!=(t=l.condition_level)?t:"critical,warning,info";let i,c=X();const u=Number(l.start_time);!isNaN(u)&&u>0&&(i=G(u));const d=Number(l.end_time);!isNaN(d)&&d>(u||0)&&(c=G(d));const{conditions:p,query:E,search:f,next:x,prev:g,page:v}=((e,t)=>{const[a,n]=o.exports.useState(t),[s,l]=o.exports.useState(1),[r,i]=o.exports.useState([]),[c,m]=o.exports.useState([]);o.exports.useEffect((()=>{(async()=>{const t=await e(a);i(t)})()}),[e,i,a]);const u=()=>{const e=a.start_time,t=r[19].date;return{condition_level:a.condition_level,start_time:e,end_time:t}},d=$(),p=h(),E=e=>{const t=`${p.pathname}?condition_level=${e.condition_level}${isNaN(e.end_time.getTime())?"":"&end_time="+Y(e.end_time)}${e.start_time&&!isNaN(e.start_time.getTime())?"&start_time="+Y(e.start_time):""}`;d.replace(t)};return{conditions:r,query:a,search:async e=>{E(e),n(e),l(1),m([{query:e,conditions:[]},{query:e,conditions:r}])},page:s,next:async()=>{const e=u();E(e),n(e),l(s+1),c[s]||(c[s]={query:a,conditions:r},m(c))},prev:async()=>{E(c[s-1].query),i(c[s-1].conditions),l(s-1)}}})(s,{condition_level:r,start_time:i,end_time:c});return m.createElement("div",{className:"flex flex-col gap-8"},m.createElement($e,{query:E,search:f}),m.createElement("div",{className:"relative flex flex-col gap-4 items-center"},m.createElement(ke,{conditions:p}),a?m.createElement(ce,{top:!0}):null,m.createElement(we,{conditions:p,page:v,next:x,prev:g})))},Te=({isu:e})=>m.createElement("div",{className:"flex flex-wrap gap-16"},m.createElement(le,{isu:e,customClass:"h-64 w-64"}),m.createElement("div",{className:"flex flex-col flex-grow"},m.createElement("div",{className:"mb-4 text-xl font-bold"},e.name),m.createElement("div",{className:"grid-cols-[max-content,max-content,max-content] grid gap-2"},m.createElement("div",null,"せいかく"),m.createElement("div",null,"---"),m.createElement("div",null,e.character)))),ze=({transitionData:e,timeCategories:t,tooltipData:a})=>{const n={chart:{toolbar:{show:!1},zoom:{enabled:!1}},grid:{yaxis:{lines:{show:!1}}},colors:[T.blue[500]],series:[{type:"line",data:e}],xaxis:{categories:t,offsetY:8,labels:{rotateAlways:!0}},yaxis:{min:0,max:100,labels:{offsetX:-16}},tooltip:{custom:({dataPointIndex:e})=>Oe(a[e])}};return m.createElement("div",null,m.createElement(I,{type:"line",options:n,series:n.series}))},Oe=e=>`\n  <div class="flex flex-col px-3 py-1 text-primary">\n    <div class="flex flex-row">\n      <div class="w-25">score</div>\n      <div>${e.score}</div>\n    </div>\n    <div class="flex flex-row">\n      <div class="w-25">is_dirty</div>\n      <div>${e.is_dirty}</div>\n    </div>\n    <div class="flex flex-row">\n      <div class="w-25">is_overweight</div>\n      <div>${e.is_overweight}</div>\n    </div>\n    <div class="flex flex-row">\n      <div class="w-25">is_broken</div>\n      <div>${e.is_broken}</div>\n    </div>\n  </div>`,Pe=({sittingData:e,timeCategories:t})=>{const a={chart:{toolbar:{show:!1}},colors:["#ff6433"],series:[{type:"heatmap",data:e,name:""}],xaxis:{categories:t,labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},plotOptions:{heatmap:{colorScale:{ranges:[{from:0,to:20,color:"#ffe6df"},{from:20,to:40,color:"#ffb199"}]}}}};return m.createElement("div",{style:{transform:"translateX(13px) translateY(-32px) scaleX(1.04)"}},m.createElement(I,{type:"heatmap",options:a,series:a.series}))},qe=(e,t)=>{const[a,n]=o.exports.useState({transitionData:[],sittingData:[],timeCategories:[],day:"",conditions:[]}),[s,l]=o.exports.useState(t),r=$(),m=h();o.exports.useEffect((()=>{(async()=>{const t=await e({date:s}),a=Ue(t);n((e=>c(i({},e),{transitionData:a.transitionData,sittingData:a.sittingData,timeCategories:a.timeCategories,day:s.toLocaleDateString(),conditions:a.tooltipData})))})()}),[e,n,s,r,m.pathname]);const u=()=>r.replace(m.pathname+"?datetime="+Y(s));return c(i({},a),{specify:async e=>{const t=new Date(e);isNaN(t.getTime())?D.error("日時の指定が不正です"):(u(),l(t))},prev:async()=>{u(),l((e=>new Date(e.setDate(e.getDate()-1)))(s))},next:async()=>{u(),l((e=>new Date(e.setDate(e.getDate()+1)))(s))}})},Ue=e=>{const t=[],a=[],n=[],s=[];return e.forEach((e=>{e.data?(t.push(e.data.score),a.push(e.data.percentage.sitting),s.push({score:e.data.score,count:e.condition_timestamps.length,is_dirty:`${e.data.percentage.is_dirty}%`,is_overweight:`${e.data.percentage.is_overweight}%`,is_broken:`${e.data.percentage.is_broken}%`})):(t.push(0),a.push(0),s.push({score:0,count:0,is_dirty:"-",is_overweight:"-",is_broken:"-"})),n.push(e.start_at.toLocaleTimeString("ja-JP",{hour:"2-digit",minute:"2-digit"}))})),{transitionData:t,sittingData:a,timeCategories:n,tooltipData:s}},Le=({day:e,setDay:t})=>{const[a,n]=o.exports.useState(e);return o.exports.useEffect((()=>{n(e)}),[e,n]),m.createElement("input",{className:"border-primary focus:border-primary w-30 px-2 py-1 h-8 text-center border border-solid rounded focus:outline-none shadow-none",value:a,onChange:e=>n(e.target.value),onKeyPress:e=>{"Enter"===e.key&&(e.preventDefault(),t(a))}})},Me=({next:e,prev:t,specify:a,day:n})=>m.createElement("div",{className:"flex gap-8"},m.createElement(ae,{label:"Prev",onClick:t},m.createElement(y,{size:24})),m.createElement(Le,{day:n,setDay:a}),m.createElement(ae,{label:"Next",onClick:e},m.createElement(b,{size:24}))),Ae=({isu:e})=>{const[t,a]=o.exports.useState(!0),n=o.exports.useCallback((async t=>{a(!0);const n=await W.getIsuGraphs(e.jia_isu_uuid,t);return a(!1),n}),[e.jia_isu_uuid]),s=h().search.substring(1).split("&").reduce(((e,t)=>(e[t.split("=")[0]]=t.split("=")[1],e)),{});let l=X();const r=Number(s.datetime);!isNaN(r)&&r>0&&(l=G(r));const{transitionData:i,sittingData:c,timeCategories:u,day:d,conditions:p,specify:E,prev:f,next:x}=qe(n,l);return m.createElement("div",{className:"flex flex-col gap-12"},m.createElement("div",{className:"flex justify-center w-full"},m.createElement(Me,{prev:f,next:x,specify:E,day:d})),m.createElement("div",{className:"relative flex flex-col gap-8"},m.createElement("div",{className:"z-10"},m.createElement(ze,{transitionData:i,timeCategories:u,tooltipData:p})),m.createElement("div",{className:"absolute top-0 w-full"},m.createElement(Pe,{sittingData:c,timeCategories:u})),t?m.createElement(ce,null):null))},Ve=()=>{const[e,t]=o.exports.useState(null),{id:a}=z(),[n,s]=o.exports.useState(!1);return o.exports.useEffect((()=>{(async()=>{try{t(await W.getIsu(a))}catch(e){404===e.response.status&&s(!0)}})()}),[a,s]),e?m.createElement("div",null,m.createElement(be,{isu:e}),m.createElement("div",{className:"flex flex-col gap-10 items-center p-10"},m.createElement(ne,null,m.createElement(Be,{isu:e})))):n?m.createElement(g,{to:"/"}):m.createElement(ce,null)},Be=({isu:e})=>m.createElement(O,null,m.createElement(ve,{path:"/isu/:id",exact:!0},m.createElement(Te,{isu:e})),m.createElement(ve,{path:"/isu/:id/condition",exact:!0},m.createElement(Ie,{isu:e})),m.createElement(ve,{path:"/isu/:id/graph",exact:!0},m.createElement(Ae,{isu:e}))),Fe=({putIsuIcon:e})=>{const{startSelect:t,destroy:a}=(e=>{const t=document.createElement("input");t.type="file",t.accept="image/jpeg";const a=()=>{t.files&&t.files[0]&&e(t.files[0])};return t.addEventListener("change",a),{startSelect:()=>{t.click()},destroy:()=>{t.removeEventListener("change",a)}}})(e);return o.exports.useEffect((()=>a)),m.createElement(ae,{customClass:"px-3 py-1 h-8 leading-4 border rounded",label:"画像をアップロード",onClick:t})},Re=()=>{const[e,t]=o.exports.useState(""),[a,n]=o.exports.useState(""),[s,l]=o.exports.useState(null),r=$();return m.createElement("div",{className:"flex justify-center p-10"},m.createElement("div",{className:"flex justify-center w-full max-w-2xl"},m.createElement(ne,null,m.createElement("div",{className:"w-full"},m.createElement("h2",{className:"mb-8 text-xl font-bold"},"ISUを登録"),m.createElement("div",{className:"flex flex-col gap-4"},m.createElement(je,{label:"JIAのIsuID",value:e,setValue:t}),m.createElement(je,{label:"ISUの名前",value:a,setValue:n}),m.createElement("div",{className:"flex flex-col gap-8 items-center mt-6"},m.createElement(Fe,{putIsuIcon:l}),m.createElement(ae,{label:"登録",onClick:async()=>{try{const t={jia_isu_uuid:e,isu_name:a};s&&(t.image=s),await W.postIsu(t),r.push(`/isu/${e}`)}catch(t){409===t.response.status?r.push(`/isu/${e}`):D.error(t.response.data)}},customClass:"px-4 py-1 h-8 text-white font-bold bg-button rounded-2xl",disabled:!e||!a})))))))},Je=()=>m.createElement("div",{className:"text-primary flex flex-col min-h-full"},m.createElement(P,{position:"bottom-left"}),m.createElement(q,null,m.createElement(te,null),m.createElement("div",{className:"bg-primary relative flex-grow"},m.createElement(O,null,m.createElement(ve,{path:"/",exact:!0},m.createElement(fe,null)),m.createElement(ve,{path:"/isu/:id"},m.createElement(Ve,null)),m.createElement(ve,{path:"/register",exact:!0},m.createElement(Re,null)),m.createElement(v,null,m.createElement(g,{to:"/"}))))));U.render(m.createElement(o.exports.StrictMode,null,m.createElement(B,null,m.createElement(Je,null))),document.getElementById("root")),d.setAppElement("#root");
