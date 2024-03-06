import te,{resolveComponent as rt,openBlock as _e,createElementBlock as ot,createVNode as st,withCtx as ct,createBlock as it,resolveDynamicComponent as at,shallowRef as lt,unref as Q,shallowReactive as ut,nextTick as ft,defineComponent as ze,reactive as ht,inject as Y,computed as L,h as qe,provide as le,ref as pt,watch as dt,createApp as mt}from"./8d48302d.js";import{Portal as gt,PortalTarget as vt}from"./1b9a398b.js";import{BootstrapVue as yt,IconsPlugin as Rt}from"./c2c83d05.js";import{_ as Et}from"./index-6dc8ed11.js";function Pt(e,t){const n=rt("router-view");return _e(),ot("div",null,[st(n,null,{default:ct(({Component:r})=>[(_e(),it(at(r)))]),_:1})])}const wt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},St={},_t=wt(St,[["render",Pt]]);/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const V=typeof document<"u";function kt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const S=Object.assign;function ue(e,t){const n={};for(const r in t){const o=t[r];n[r]=T(o)?o.map(e):e(o)}return n}const W=()=>{},T=Array.isArray,Ge=/#/g,Ct=/&/g,bt=/\//g,At=/=/g,Ot=/\?/g,De=/\+/g,xt=/%5B/g,Mt=/%5D/g,Ke=/%5E/g,Tt=/%60/g,Ue=/%7B/g,Lt=/%7C/g,Qe=/%7D/g,Nt=/%20/g;function ge(e){return encodeURI(""+e).replace(Lt,"|").replace(xt,"[").replace(Mt,"]")}function $t(e){return ge(e).replace(Ue,"{").replace(Qe,"}").replace(Ke,"^")}function pe(e){return ge(e).replace(De,"%2B").replace(Nt,"+").replace(Ge,"%23").replace(Ct,"%26").replace(Tt,"`").replace(Ue,"{").replace(Qe,"}").replace(Ke,"^")}function Bt(e){return pe(e).replace(At,"%3D")}function It(e){return ge(e).replace(Ge,"%23").replace(Ot,"%3F")}function jt(e){return e==null?"":It(e).replace(bt,"%2F")}function X(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Ht=/\/$/,Vt=e=>e.replace(Ht,"");function fe(e,t,n="/"){let r,o={},u="",p="";const g=t.indexOf("#");let i=t.indexOf("?");return g<i&&g>=0&&(i=-1),i>-1&&(r=t.slice(0,i),u=t.slice(i+1,g>-1?g:t.length),o=e(u)),g>-1&&(r=r||t.slice(0,g),p=t.slice(g,t.length)),r=Dt(r??t,n),{fullPath:r+(u&&"?")+u+p,path:r,query:o,hash:X(p)}}function zt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ke(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function qt(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&z(t.matched[r],n.matched[o])&&We(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function We(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Gt(e[n],t[n]))return!1;return!0}function Gt(e,t){return T(e)?Ce(e,t):T(t)?Ce(t,e):e===t}function Ce(e,t){return T(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Dt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let u=n.length-1,p,g;for(p=0;p<r.length;p++)if(g=r[p],g!==".")if(g==="..")u>1&&u--;else break;return n.slice(0,u).join("/")+"/"+r.slice(p).join("/")}var Z;(function(e){e.pop="pop",e.push="push"})(Z||(Z={}));var F;(function(e){e.back="back",e.forward="forward",e.unknown=""})(F||(F={}));function Kt(e){if(!e)if(V){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Vt(e)}const Ut=/^[^#]+#/;function Qt(e,t){return e.replace(Ut,"#")+t}function Wt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ne=()=>({left:window.scrollX,top:window.scrollY});function Ft(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Wt(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function be(e,t){return(history.state?history.state.position-t:-1)+e}const de=new Map;function Yt(e,t){de.set(e,t)}function Xt(e){const t=de.get(e);return de.delete(e),t}let Zt=()=>location.protocol+"//"+location.host;function Fe(e,t){const{pathname:n,search:r,hash:o}=t,u=e.indexOf("#");if(u>-1){let g=o.includes(e.slice(u))?e.slice(u).length:1,i=o.slice(g);return i[0]!=="/"&&(i="/"+i),ke(i,"")}return ke(n,e)+r+o}function Jt(e,t,n,r){let o=[],u=[],p=null;const g=({state:a})=>{const m=Fe(e,location),R=n.value,C=t.value;let k=0;if(a){if(n.value=m,t.value=a,p&&p===R){p=null;return}k=C?a.position-C.position:0}else r(m);o.forEach(E=>{E(n.value,R,{delta:k,type:Z.pop,direction:k?k>0?F.forward:F.back:F.unknown})})};function i(){p=n.value}function f(a){o.push(a);const m=()=>{const R=o.indexOf(a);R>-1&&o.splice(R,1)};return u.push(m),m}function s(){const{history:a}=window;a.state&&a.replaceState(S({},a.state,{scroll:ne()}),"")}function l(){for(const a of u)a();u=[],window.removeEventListener("popstate",g),window.removeEventListener("beforeunload",s)}return window.addEventListener("popstate",g),window.addEventListener("beforeunload",s,{passive:!0}),{pauseListeners:i,listen:f,destroy:l}}function Ae(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?ne():null}}function en(e){const{history:t,location:n}=window,r={value:Fe(e,n)},o={value:t.state};o.value||u(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function u(i,f,s){const l=e.indexOf("#"),a=l>-1?(n.host&&document.querySelector("base")?e:e.slice(l))+i:Zt()+e+i;try{t[s?"replaceState":"pushState"](f,"",a),o.value=f}catch(m){console.error(m),n[s?"replace":"assign"](a)}}function p(i,f){const s=S({},t.state,Ae(o.value.back,i,o.value.forward,!0),f,{position:o.value.position});u(i,s,!0),r.value=i}function g(i,f){const s=S({},o.value,t.state,{forward:i,scroll:ne()});u(s.current,s,!0);const l=S({},Ae(r.value,i,null),{position:s.position+1},f);u(i,l,!1),r.value=i}return{location:r,state:o,push:g,replace:p}}function tn(e){e=Kt(e);const t=en(e),n=Jt(e,t.state,t.location,t.replace);function r(u,p=!0){p||n.pauseListeners(),history.go(u)}const o=S({location:"",base:e,go:r,createHref:Qt.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function nn(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),tn(e)}function rn(e){return typeof e=="string"||e&&typeof e=="object"}function Ye(e){return typeof e=="string"||typeof e=="symbol"}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xe=Symbol("");var Oe;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Oe||(Oe={}));function q(e,t){return S(new Error,{type:e,[Xe]:!0},t)}function $(e,t){return e instanceof Error&&Xe in e&&(t==null||!!(e.type&t))}const xe="[^/]+?",on={sensitive:!1,strict:!1,start:!0,end:!0},sn=/[.+*?^${}()[\]/\\]/g;function cn(e,t){const n=S({},on,t),r=[];let o=n.start?"^":"";const u=[];for(const f of e){const s=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let l=0;l<f.length;l++){const a=f[l];let m=40+(n.sensitive?.25:0);if(a.type===0)l||(o+="/"),o+=a.value.replace(sn,"\\$&"),m+=40;else if(a.type===1){const{value:R,repeatable:C,optional:k,regexp:E}=a;u.push({name:R,repeatable:C,optional:k});const P=E||xe;if(P!==xe){m+=10;try{new RegExp(`(${P})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${R}" (${P}): `+M.message)}}let O=C?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;l||(O=k&&f.length<2?`(?:/${O})`:"/"+O),k&&(O+="?"),o+=O,m+=20,k&&(m+=-8),C&&(m+=-20),P===".*"&&(m+=-50)}s.push(m)}r.push(s)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const p=new RegExp(o,n.sensitive?"":"i");function g(f){const s=f.match(p),l={};if(!s)return null;for(let a=1;a<s.length;a++){const m=s[a]||"",R=u[a-1];l[R.name]=m&&R.repeatable?m.split("/"):m}return l}function i(f){let s="",l=!1;for(const a of e){(!l||!s.endsWith("/"))&&(s+="/"),l=!1;for(const m of a)if(m.type===0)s+=m.value;else if(m.type===1){const{value:R,repeatable:C,optional:k}=m,E=R in f?f[R]:"";if(T(E)&&!C)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const P=T(E)?E.join("/"):E;if(!P)if(k)a.length<2&&(s.endsWith("/")?s=s.slice(0,-1):l=!0);else throw new Error(`Missing required param "${R}"`);s+=P}}return s||"/"}return{re:p,score:r,keys:u,parse:g,stringify:i}}function an(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function ln(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const u=an(r[n],o[n]);if(u)return u;n++}if(Math.abs(o.length-r.length)===1){if(Me(r))return 1;if(Me(o))return-1}return o.length-r.length}function Me(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const un={type:0,value:""},fn=/[a-zA-Z0-9_]/;function hn(e){if(!e)return[[]];if(e==="/")return[[un]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${f}": ${m}`)}let n=0,r=n;const o=[];let u;function p(){u&&o.push(u),u=[]}let g=0,i,f="",s="";function l(){f&&(n===0?u.push({type:0,value:f}):n===1||n===2||n===3?(u.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),u.push({type:1,value:f,regexp:s,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),f="")}function a(){f+=i}for(;g<e.length;){if(i=e[g++],i==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:i==="/"?(f&&l(),p()):i===":"?(l(),n=1):a();break;case 4:a(),n=r;break;case 1:i==="("?n=2:fn.test(i)?a():(l(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&g--);break;case 2:i===")"?s[s.length-1]=="\\"?s=s.slice(0,-1)+i:n=3:s+=i;break;case 3:l(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&g--,s="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),l(),p(),o}function pn(e,t,n){const r=cn(hn(e.path),n),o=S(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function dn(e,t){const n=[],r=new Map;t=Ne({strict:!1,end:!0,sensitive:!1},t);function o(s){return r.get(s)}function u(s,l,a){const m=!a,R=mn(s);R.aliasOf=a&&a.record;const C=Ne(t,s),k=[R];if("alias"in s){const O=typeof s.alias=="string"?[s.alias]:s.alias;for(const M of O)k.push(S({},R,{components:a?a.record.components:R.components,path:M,aliasOf:a?a.record:R}))}let E,P;for(const O of k){const{path:M}=O;if(l&&M[0]!=="/"){const j=l.record.path,N=j[j.length-1]==="/"?"":"/";O.path=l.record.path+(M&&N+M)}if(E=pn(O,l,C),a?a.alias.push(E):(P=P||E,P!==E&&P.alias.push(E),m&&s.name&&!Le(E)&&p(s.name)),R.children){const j=R.children;for(let N=0;N<j.length;N++)u(j[N],E,a&&a.children[N])}a=a||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&i(E)}return P?()=>{p(P)}:W}function p(s){if(Ye(s)){const l=r.get(s);l&&(r.delete(s),n.splice(n.indexOf(l),1),l.children.forEach(p),l.alias.forEach(p))}else{const l=n.indexOf(s);l>-1&&(n.splice(l,1),s.record.name&&r.delete(s.record.name),s.children.forEach(p),s.alias.forEach(p))}}function g(){return n}function i(s){let l=0;for(;l<n.length&&ln(s,n[l])>=0&&(s.record.path!==n[l].record.path||!Ze(s,n[l]));)l++;n.splice(l,0,s),s.record.name&&!Le(s)&&r.set(s.record.name,s)}function f(s,l){let a,m={},R,C;if("name"in s&&s.name){if(a=r.get(s.name),!a)throw q(1,{location:s});C=a.record.name,m=S(Te(l.params,a.keys.filter(P=>!P.optional).concat(a.parent?a.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),s.params&&Te(s.params,a.keys.map(P=>P.name))),R=a.stringify(m)}else if(s.path!=null)R=s.path,a=n.find(P=>P.re.test(R)),a&&(m=a.parse(R),C=a.record.name);else{if(a=l.name?r.get(l.name):n.find(P=>P.re.test(l.path)),!a)throw q(1,{location:s,currentLocation:l});C=a.record.name,m=S({},l.params,s.params),R=a.stringify(m)}const k=[];let E=a;for(;E;)k.unshift(E.record),E=E.parent;return{name:C,path:R,params:m,matched:k,meta:vn(k)}}return e.forEach(s=>u(s)),{addRoute:u,resolve:f,removeRoute:p,getRoutes:g,getRecordMatcher:o}}function Te(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function mn(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:gn(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function gn(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Le(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function vn(e){return e.reduce((t,n)=>S(t,n.meta),{})}function Ne(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ze(e,t){return t.children.some(n=>n===e||Ze(e,n))}function yn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const u=r[o].replace(De," "),p=u.indexOf("="),g=X(p<0?u:u.slice(0,p)),i=p<0?null:X(u.slice(p+1));if(g in t){let f=t[g];T(f)||(f=t[g]=[f]),f.push(i)}else t[g]=i}return t}function $e(e){let t="";for(let n in e){const r=e[n];if(n=Bt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(T(r)?r.map(u=>u&&pe(u)):[r&&pe(r)]).forEach(u=>{u!==void 0&&(t+=(t.length?"&":"")+n,u!=null&&(t+="="+u))})}return t}function Rn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=T(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const En=Symbol(""),Be=Symbol(""),ve=Symbol(""),Je=Symbol(""),me=Symbol("");function U(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function I(e,t,n,r,o,u=p=>p()){const p=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((g,i)=>{const f=a=>{a===!1?i(q(4,{from:n,to:t})):a instanceof Error?i(a):rn(a)?i(q(2,{from:t,to:a})):(p&&r.enterCallbacks[o]===p&&typeof a=="function"&&p.push(a),g())},s=u(()=>e.call(r&&r.instances[o],t,n,f));let l=Promise.resolve(s);e.length<3&&(l=l.then(f)),l.catch(a=>i(a))})}function he(e,t,n,r,o=u=>u()){const u=[];for(const p of e)for(const g in p.components){let i=p.components[g];if(!(t!=="beforeRouteEnter"&&!p.instances[g]))if(Pn(i)){const s=(i.__vccOpts||i)[t];s&&u.push(I(s,n,r,p,g,o))}else{let f=i();u.push(()=>f.then(s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${g}" at "${p.path}"`));const l=kt(s)?s.default:s;p.components[g]=l;const m=(l.__vccOpts||l)[t];return m&&I(m,n,r,p,g,o)()}))}}return u}function Pn(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ie(e){const t=Y(ve),n=Y(Je),r=L(()=>t.resolve(Q(e.to))),o=L(()=>{const{matched:i}=r.value,{length:f}=i,s=i[f-1],l=n.matched;if(!s||!l.length)return-1;const a=l.findIndex(z.bind(null,s));if(a>-1)return a;const m=je(i[f-2]);return f>1&&je(s)===m&&l[l.length-1].path!==m?l.findIndex(z.bind(null,i[f-2])):a}),u=L(()=>o.value>-1&&kn(n.params,r.value.params)),p=L(()=>o.value>-1&&o.value===n.matched.length-1&&We(n.params,r.value.params));function g(i={}){return _n(i)?t[Q(e.replace)?"replace":"push"](Q(e.to)).catch(W):Promise.resolve()}return{route:r,href:L(()=>r.value.href),isActive:u,isExactActive:p,navigate:g}}const wn=ze({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ie,setup(e,{slots:t}){const n=ht(Ie(e)),{options:r}=Y(ve),o=L(()=>({[He(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[He(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const u=t.default&&t.default(n);return e.custom?u:qe("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},u)}}}),Sn=wn;function _n(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function kn(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!T(o)||o.length!==r.length||r.some((u,p)=>u!==o[p]))return!1}return!0}function je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const He=(e,t,n)=>e??t??n,Cn=ze({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Y(me),o=L(()=>e.route||r.value),u=Y(Be,0),p=L(()=>{let f=Q(u);const{matched:s}=o.value;let l;for(;(l=s[f])&&!l.components;)f++;return f}),g=L(()=>o.value.matched[p.value]);le(Be,L(()=>p.value+1)),le(En,g),le(me,o);const i=pt();return dt(()=>[i.value,g.value,e.name],([f,s,l],[a,m,R])=>{s&&(s.instances[l]=f,m&&m!==s&&f&&f===a&&(s.leaveGuards.size||(s.leaveGuards=m.leaveGuards),s.updateGuards.size||(s.updateGuards=m.updateGuards))),f&&s&&(!m||!z(s,m)||!a)&&(s.enterCallbacks[l]||[]).forEach(C=>C(f))},{flush:"post"}),()=>{const f=o.value,s=e.name,l=g.value,a=l&&l.components[s];if(!a)return Ve(n.default,{Component:a,route:f});const m=l.props[s],R=m?m===!0?f.params:typeof m=="function"?m(f):m:null,k=qe(a,S({},R,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(l.instances[s]=null)},ref:i}));return Ve(n.default,{Component:k,route:f})||k}}});function Ve(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const bn=Cn;function An(e){const t=dn(e.routes,e),n=e.parseQuery||yn,r=e.stringifyQuery||$e,o=e.history,u=U(),p=U(),g=U(),i=lt(B);let f=B;V&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const s=ue.bind(null,c=>""+c),l=ue.bind(null,jt),a=ue.bind(null,X);function m(c,d){let h,v;return Ye(c)?(h=t.getRecordMatcher(c),v=d):v=c,t.addRoute(v,h)}function R(c){const d=t.getRecordMatcher(c);d&&t.removeRoute(d)}function C(){return t.getRoutes().map(c=>c.record)}function k(c){return!!t.getRecordMatcher(c)}function E(c,d){if(d=S({},d||i.value),typeof c=="string"){const y=fe(n,c,d.path),A=t.resolve({path:y.path},d),K=o.createHref(y.fullPath);return S(y,A,{params:a(A.params),hash:X(y.hash),redirectedFrom:void 0,href:K})}let h;if(c.path!=null)h=S({},c,{path:fe(n,c.path,d.path).path});else{const y=S({},c.params);for(const A in y)y[A]==null&&delete y[A];h=S({},c,{params:l(y)}),d.params=l(d.params)}const v=t.resolve(h,d),_=c.hash||"";v.params=s(a(v.params));const b=zt(r,S({},c,{hash:$t(_),path:v.path})),w=o.createHref(b);return S({fullPath:b,hash:_,query:r===$e?Rn(c.query):c.query||{}},v,{redirectedFrom:void 0,href:w})}function P(c){return typeof c=="string"?fe(n,c,i.value.path):S({},c)}function O(c,d){if(f!==c)return q(8,{from:d,to:c})}function M(c){return G(c)}function j(c){return M(S(P(c),{replace:!0}))}function N(c){const d=c.matched[c.matched.length-1];if(d&&d.redirect){const{redirect:h}=d;let v=typeof h=="function"?h(c):h;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=P(v):{path:v},v.params={}),S({query:c.query,hash:c.hash,params:v.path!=null?{}:c.params},v)}}function G(c,d){const h=f=E(c),v=i.value,_=c.state,b=c.force,w=c.replace===!0,y=N(h);if(y)return G(S(P(y),{state:typeof y=="object"?S({},_,y.state):_,force:b,replace:w}),d||h);const A=h;A.redirectedFrom=d;let K;return!b&&qt(r,v,h)&&(K=q(16,{to:A,from:v}),we(v,v,!0,!1)),(K?Promise.resolve(K):ye(A,v)).catch(x=>$(x)?$(x,2)?x:ce(x):se(x,A,v)).then(x=>{if(x){if($(x,2))return G(S({replace:w},P(x.to),{state:typeof x.to=="object"?S({},_,x.to.state):_,force:b}),d||A)}else x=Ee(A,v,!0,w,_);return Re(A,v,x),x})}function et(c,d){const h=O(c,d);return h?Promise.reject(h):Promise.resolve()}function re(c){const d=ee.values().next().value;return d&&typeof d.runWithContext=="function"?d.runWithContext(c):c()}function ye(c,d){let h;const[v,_,b]=On(c,d);h=he(v.reverse(),"beforeRouteLeave",c,d);for(const y of v)y.leaveGuards.forEach(A=>{h.push(I(A,c,d))});const w=et.bind(null,c,d);return h.push(w),H(h).then(()=>{h=[];for(const y of u.list())h.push(I(y,c,d));return h.push(w),H(h)}).then(()=>{h=he(_,"beforeRouteUpdate",c,d);for(const y of _)y.updateGuards.forEach(A=>{h.push(I(A,c,d))});return h.push(w),H(h)}).then(()=>{h=[];for(const y of b)if(y.beforeEnter)if(T(y.beforeEnter))for(const A of y.beforeEnter)h.push(I(A,c,d));else h.push(I(y.beforeEnter,c,d));return h.push(w),H(h)}).then(()=>(c.matched.forEach(y=>y.enterCallbacks={}),h=he(b,"beforeRouteEnter",c,d,re),h.push(w),H(h))).then(()=>{h=[];for(const y of p.list())h.push(I(y,c,d));return h.push(w),H(h)}).catch(y=>$(y,8)?y:Promise.reject(y))}function Re(c,d,h){g.list().forEach(v=>re(()=>v(c,d,h)))}function Ee(c,d,h,v,_){const b=O(c,d);if(b)return b;const w=d===B,y=V?history.state:{};h&&(v||w?o.replace(c.fullPath,S({scroll:w&&y&&y.scroll},_)):o.push(c.fullPath,_)),i.value=c,we(c,d,h,w),ce()}let D;function tt(){D||(D=o.listen((c,d,h)=>{if(!Se.listening)return;const v=E(c),_=N(v);if(_){G(S(_,{replace:!0}),v).catch(W);return}f=v;const b=i.value;V&&Yt(be(b.fullPath,h.delta),ne()),ye(v,b).catch(w=>$(w,12)?w:$(w,2)?(G(w.to,v).then(y=>{$(y,20)&&!h.delta&&h.type===Z.pop&&o.go(-1,!1)}).catch(W),Promise.reject()):(h.delta&&o.go(-h.delta,!1),se(w,v,b))).then(w=>{w=w||Ee(v,b,!1),w&&(h.delta&&!$(w,8)?o.go(-h.delta,!1):h.type===Z.pop&&$(w,20)&&o.go(-1,!1)),Re(v,b,w)}).catch(W)}))}let oe=U(),Pe=U(),J;function se(c,d,h){ce(c);const v=Pe.list();return v.length?v.forEach(_=>_(c,d,h)):console.error(c),Promise.reject(c)}function nt(){return J&&i.value!==B?Promise.resolve():new Promise((c,d)=>{oe.add([c,d])})}function ce(c){return J||(J=!c,tt(),oe.list().forEach(([d,h])=>c?h(c):d()),oe.reset()),c}function we(c,d,h,v){const{scrollBehavior:_}=e;if(!V||!_)return Promise.resolve();const b=!h&&Xt(be(c.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return ft().then(()=>_(c,d,b)).then(w=>w&&Ft(w)).catch(w=>se(w,c,d))}const ie=c=>o.go(c);let ae;const ee=new Set,Se={currentRoute:i,listening:!0,addRoute:m,removeRoute:R,hasRoute:k,getRoutes:C,resolve:E,options:e,push:M,replace:j,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:u.add,beforeResolve:p.add,afterEach:g.add,onError:Pe.add,isReady:nt,install(c){const d=this;c.component("RouterLink",Sn),c.component("RouterView",bn),c.config.globalProperties.$router=d,Object.defineProperty(c.config.globalProperties,"$route",{enumerable:!0,get:()=>Q(i)}),V&&!ae&&i.value===B&&(ae=!0,M(o.location).catch(_=>{}));const h={};for(const _ in B)Object.defineProperty(h,_,{get:()=>i.value[_],enumerable:!0});c.provide(ve,d),c.provide(Je,ut(h)),c.provide(me,i);const v=c.unmount;ee.add(c),c.unmount=function(){ee.delete(c),ee.size<1&&(f=B,D&&D(),D=null,i.value=B,ae=!1,J=!1),v()}}};function H(c){return c.reduce((d,h)=>d.then(()=>re(h)),Promise.resolve())}return Se}function On(e,t){const n=[],r=[],o=[],u=Math.max(t.matched.length,e.matched.length);for(let p=0;p<u;p++){const g=t.matched[p];g&&(e.matched.find(f=>z(f,g))?r.push(g):n.push(g));const i=e.matched[p];i&&(t.matched.find(f=>z(f,i))||o.push(i))}return[n,r,o]}const xn=[{name:"home",path:"/",component:()=>Et(()=>import("./ab51a605.js"),["./ab51a605.js","./8d48302d.js","./1b9a398b.js","./c2c83d05.js","./index-6dc8ed11.js","./index-b6806a91.css"],import.meta.url)}];function Mn(){return An({history:nn(),base:"/",linkActiveClass:"active",scrollBehavior(t,n,r){return r||{x:0,y:0}},routes:xn})}function Tn(){const e=Mn(),t=mt({..._t});return t.use(e),t}te.component("Portal",gt);te.component("PortalTarget",vt);te.use(yt);te.use(Rt);const Ln=window.app=Tn();Ln.mount("#app");const jn=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{wt as _,jn as s};
