import{g as h,h as x,o as D,c as w,a as c,w as i,b as l,H as T,d as k,T as F}from"./entry.aaddfbfc.js";import{_ as H}from"./HeaderSmall.4a857192.js";import{_ as M}from"./EventWall.a3ec4df2.js";import{r,t as d,d as S,f as u,g as B}from"./getEvents.064288c6.js";import"./brand-full.c2fcbd20.js";import"./_plugin-vue_export-helper.a1a6add7.js";function _(e){return r(1,arguments),d(e).getDay()===0}function E(e){return r(1,arguments),d(e).getDay()===6}function N(e){r(1,arguments);var t=d(e),n=t.getDay();return n}function V(e){return r(1,arguments),d(e).getDay()===5}function m(e,t){r(2,arguments);var n=t-N(e);return n<=0&&(n+=7),S(e,n)}function A(e){return r(1,arguments),m(e,5)}function C(e){return r(1,arguments),m(e,0)}const W={class:"container-fluid"},b=l("h1",{class:"filter-header"},"This weekend:",-1),L={__name:"weekend",async setup(e){let t,n;const a=new Date;var s,o;V(a)||E(a)||_(a)?s=a:s=A(a),_(a)?o=a:o=C(a),s=u(s,"MM-dd-yyyy"),o=u(o,"MM-dd-yyyy");const f=h(([t,n]=x(()=>B(s,o)),t=await t,n(),t));return(q,$)=>{const y=F,p=T,g=H,v=M;return D(),w("div",null,[c(p,null,{default:i(()=>[c(y,null,{default:i(()=>[k("This Weekend")]),_:1})]),_:1}),c(g),l("div",W,[b,c(v,{eventFeed:f.value},null,8,["eventFeed"])])])}}};export{L as default};