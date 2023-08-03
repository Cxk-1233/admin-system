import{at as G,x as se,z as oe,B as p,aG as y,P as q,$ as ie,Q as ce,r as de,R as me,I as pe,H as V,aH as P,a1 as be,aI as fe,L as ve,D as Ne,aw as Ie,o as v,c as K,w as H,b as t,U as L,aJ as A,d as O,e as W,a3 as F,aK as Ve,aL as he,aM as J,a4 as Q,aN as ye,aO as Ee,aP as T,X as we,N as ge,Y as _e,O as X,a7 as Se}from"./index-f6fe3374.js";import{C as Z,I as k,U as h,E as Pe}from"./el-input-77ecaa04.js";const Ae=100,Fe=600,j={beforeMount(l,N){const i=N.value,{interval:a=Ae,delay:E=Fe}=G(i)?{}:i;let c,m;const u=()=>G(i)?i():i.handler(),b=()=>{m&&(clearTimeout(m),m=void 0),c&&(clearInterval(c),c=void 0)};l.addEventListener("mousedown",w=>{w.button===0&&(b(),u(),document.addEventListener("mouseup",()=>b(),{once:!0}),m=setTimeout(()=>{c=setInterval(()=>{u()},a)},E))})}},Te=se({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:oe,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:l=>l===null||p(l)||["min","max"].includes(l),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:l=>l>=0&&l===Number.parseInt(`${l}`,10)},validateEvent:{type:Boolean,default:!0}}),ke={[Z]:(l,N)=>N!==l,blur:l=>l instanceof FocusEvent,focus:l=>l instanceof FocusEvent,[k]:l=>p(l)||y(l),[h]:l=>p(l)||y(l)},xe=["aria-label","onKeydown"],Ce=["aria-label","onKeydown"],Be=q({name:"ElInputNumber"}),De=q({...Be,props:Te,emits:ke,setup(l,{expose:N,emit:i}){const a=l,{t:E}=ie(),c=ce("input-number"),m=de(),u=me({currentValue:a.modelValue,userInput:null}),{formItem:b}=pe(),w=V(()=>p(a.modelValue)&&a.modelValue<=a.min),R=V(()=>p(a.modelValue)&&a.modelValue>=a.max),ee=V(()=>{const e=Y(a.step);return P(a.precision)?Math.max(Y(a.modelValue),e):(e>a.precision,a.precision)}),x=V(()=>a.controls&&a.controlsPosition==="right"),U=be(),I=fe(),C=V(()=>{if(u.userInput!==null)return u.userInput;let e=u.currentValue;if(y(e))return"";if(p(e)){if(Number.isNaN(e))return"";P(a.precision)||(e=e.toFixed(a.precision))}return e}),B=(e,n)=>{if(P(n)&&(n=ee.value),n===0)return Math.round(e);let r=String(e);const s=r.indexOf(".");if(s===-1||!r.replace(".","").split("")[s+n])return e;const _=r.length;return r.charAt(_-1)==="5"&&(r=`${r.slice(0,Math.max(0,_-1))}6`),Number.parseFloat(Number(r).toFixed(n))},Y=e=>{if(y(e))return 0;const n=e.toString(),r=n.indexOf(".");let s=0;return r!==-1&&(s=n.length-r-1),s},$=(e,n=1)=>p(e)?B(e+a.step*n):u.currentValue,D=()=>{if(a.readonly||I.value||R.value)return;const e=Number(C.value)||0,n=$(e);g(n),i(k,u.currentValue)},M=()=>{if(a.readonly||I.value||w.value)return;const e=Number(C.value)||0,n=$(e,-1);g(n),i(k,u.currentValue)},z=(e,n)=>{const{max:r,min:s,step:o,precision:f,stepStrictly:_,valueOnClear:S}=a;r<s&&ge("InputNumber","min should not be greater than max.");let d=Number(e);if(y(e)||Number.isNaN(d))return null;if(e===""){if(S===null)return null;d=_e(S)?{min:s,max:r}[S]:S}return _&&(d=B(Math.round(d/o)*o,f)),P(f)||(d=B(d,f)),(d>r||d<s)&&(d=d>r?r:s,n&&i(h,d)),d},g=(e,n=!0)=>{var r;const s=u.currentValue,o=z(e);if(!n){i(h,o);return}s!==o&&(u.userInput=null,i(h,o),i(Z,o,s),a.validateEvent&&((r=b==null?void 0:b.validate)==null||r.call(b,"change").catch(f=>X())),u.currentValue=o)},ne=e=>{u.userInput=e;const n=e===""?null:Number(e);i(k,n),g(n,!1)},te=e=>{const n=e!==""?Number(e):"";(p(n)&&!Number.isNaN(n)||e==="")&&g(n),u.userInput=null},ae=()=>{var e,n;(n=(e=m.value)==null?void 0:e.focus)==null||n.call(e)},re=()=>{var e,n;(n=(e=m.value)==null?void 0:e.blur)==null||n.call(e)},le=e=>{i("focus",e)},ue=e=>{var n;i("blur",e),a.validateEvent&&((n=b==null?void 0:b.validate)==null||n.call(b,"blur").catch(r=>X()))};return ve(()=>a.modelValue,e=>{const n=z(u.userInput),r=z(e,!0);!p(n)&&(!n||n!==r)&&(u.currentValue=r,u.userInput=null)},{immediate:!0}),Ne(()=>{var e;const{min:n,max:r,modelValue:s}=a,o=(e=m.value)==null?void 0:e.input;if(o.setAttribute("role","spinbutton"),Number.isFinite(r)?o.setAttribute("aria-valuemax",String(r)):o.removeAttribute("aria-valuemax"),Number.isFinite(n)?o.setAttribute("aria-valuemin",String(n)):o.removeAttribute("aria-valuemin"),o.setAttribute("aria-valuenow",String(u.currentValue)),o.setAttribute("aria-disabled",String(I.value)),!p(s)&&s!=null){let f=Number(s);Number.isNaN(f)&&(f=null),i(h,f)}}),Ie(()=>{var e;const n=(e=m.value)==null?void 0:e.input;n==null||n.setAttribute("aria-valuenow",`${u.currentValue}`)}),N({focus:ae,blur:re}),(e,n)=>(v(),K("div",{class:L([t(c).b(),t(c).m(t(U)),t(c).is("disabled",t(I)),t(c).is("without-controls",!e.controls),t(c).is("controls-right",t(x))]),onDragstart:n[1]||(n[1]=T(()=>{},["prevent"]))},[e.controls?H((v(),K("span",{key:0,role:"button","aria-label":t(E)("el.inputNumber.decrease"),class:L([t(c).e("decrease"),t(c).is("disabled",t(w))]),onKeydown:A(M,["enter"])},[O(t(J),null,{default:W(()=>[t(x)?(v(),F(t(Ve),{key:0})):(v(),F(t(he),{key:1}))]),_:1})],42,xe)),[[t(j),M]]):Q("v-if",!0),e.controls?H((v(),K("span",{key:1,role:"button","aria-label":t(E)("el.inputNumber.increase"),class:L([t(c).e("increase"),t(c).is("disabled",t(R))]),onKeydown:A(D,["enter"])},[O(t(J),null,{default:W(()=>[t(x)?(v(),F(t(ye),{key:0})):(v(),F(t(Ee),{key:1}))]),_:1})],42,Ce)),[[t(j),D]]):Q("v-if",!0),O(t(Pe),{id:e.id,ref_key:"input",ref:m,type:"number",step:e.step,"model-value":t(C),placeholder:e.placeholder,readonly:e.readonly,disabled:t(I),size:t(U),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:n[0]||(n[0]=T(()=>{},["prevent"])),onKeydown:[A(T(D,["prevent"]),["up"]),A(T(M,["prevent"]),["down"])],onBlur:ue,onFocus:le,onInput:ne,onChange:te},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});var Me=we(De,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const Le=Se(Me);export{Le as E};
