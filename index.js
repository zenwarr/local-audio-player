(()=>{function k(){}function Y(t){return t()}function tt(){return Object.create(null)}function x(t){t.forEach(Y)}function nt(t){return typeof t=="function"}function it(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}var I;function Q(t,e){return I||(I=document.createElement("a")),I.href=e,t===I.href}function rt(t){return Object.keys(t).length===0}var Ft=typeof window<"u";var ot=Ft?t=>requestAnimationFrame(t):k;var st=!1;function vt(){st=!0}function kt(){st=!1}function u(t,e){t.appendChild(e)}function G(t,e,n){t.insertBefore(e,n||null)}function j(t){t.parentNode.removeChild(t)}function F(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function R(){return w(" ")}function A(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function M(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t){return Array.from(t.childNodes)}function N(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}var V;function O(t){V=t}var D=[];var K=[],z=[],et=[],xt=Promise.resolve(),W=!1;function St(){W||(W=!0,xt.then(lt))}function P(t){z.push(t)}var U=new Set,B=0;function lt(){let t=V;do{for(;B<D.length;){let e=D[B];B++,O(e),Et(e.$$)}for(O(null),D.length=0,B=0;K.length;)K.pop()();for(let e=0;e<z.length;e+=1){let n=z[e];U.has(n)||(U.add(n),n())}z.length=0}while(D.length);for(;et.length;)et.pop()();W=!1,U.clear(),O(t)}function Et(t){if(t.fragment!==null){t.update(),x(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}var At=new Set;function Mt(t,e){t&&t.i&&(At.delete(t),t.i(e))}var ct=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ct(t,e,n,i){let{fragment:o,on_mount:h,on_destroy:a,after_update:b}=t.$$;o&&o.m(e,n),i||P(()=>{let l=h.map(Y).filter(nt);a?a.push(...l):x(l),t.$$.on_mount=[]}),b.forEach(P)}function ut(t,e){let n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Dt(t,e){t.$$.dirty[0]===-1&&(D.push(t),St(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function at(t,e,n,i,o,h,a,b=[-1]){let l=V;O(t);let c=t.$$={fragment:null,ctx:null,props:h,update:k,not_equal:o,bound:tt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:tt(),dirty:b,skip_bound:!1,root:e.target||l.$$.root};a&&a(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(s,g,...p)=>{let m=p.length?p[0]:g;return c.ctx&&o(c.ctx[s],c.ctx[s]=m)&&(!c.skip_bound&&c.bound[s]&&c.bound[s](m),f&&Dt(t,s)),g}):[],c.update(),f=!0,x(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){vt();let s=$t(e.target);c.fragment&&c.fragment.l(s),s.forEach(j)}else c.fragment&&c.fragment.c();e.intro&&Mt(t.$$.fragment),Ct(t,e.target,e.anchor,e.customElement),kt(),lt()}O(l)}var Ot;typeof HTMLElement=="function"&&(Ot=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(Y).filter(nt);for(let e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){x(this.$$.on_disconnect)}$destroy(){ut(this,1),this.$destroy=k}$on(t,e){let n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{let i=n.indexOf(e);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!rt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});var H=class{$destroy(){ut(this,1),this.$destroy=k}$on(e,n){let i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{let o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!rt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};function Pt(){var t=!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent);if(!t||!indexedDB.databases)return Promise.resolve();var e;return new Promise(function(n){var i=function(){return indexedDB.databases().finally(n)};e=setInterval(i,100),i()}).finally(function(){return clearInterval(e)})}var ft=Pt;function J(t){return new Promise((e,n)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>n(t.error)})}function jt(t,e){let n=ft().then(()=>{let i=indexedDB.open(t);return i.onupgradeneeded=()=>i.result.createObjectStore(e),J(i)});return(i,o)=>n.then(h=>o(h.transaction(e,i).objectStore(e)))}var X;function dt(){return X||(X=jt("keyval-store","keyval")),X}function _t(t,e=dt()){return e("readonly",n=>J(n.get(t)))}function ht(t,e,n=dt()){return n("readwrite",i=>(i.put(e,t),J(i.transaction)))}function T(t){if(!t)return"--:--:--";let e=Math.round(t),n=Math.floor(e/60),i=Math.floor(n/60),o=(e%60).toString().padStart(2,"0"),h=(n%60).toString().padStart(2,"0");return`${i.toString().padStart(2,"0")}:${h}:${o}`}var{isNaN:Nt,window:Tt}=ct;function pt(t){let e,n,i;return{c(){e=F("button"),e.textContent="Open previous file",M(e,"class","svelte-1k7m0i8")},m(o,h){G(o,e,h),n||(i=A(e,"click",t[9]),n=!0)},p:k,d(o){o&&j(e),n=!1,i()}}}function mt(t){let e,n,i,o,h,a,b=T(t[8])+"",l,c,f,s=T(t[7])+"",g;return{c(){e=F("p"),n=w("Now playing: "),i=F("strong"),o=w(t[5]),h=w(`,
      `),a=F("strong"),l=w(b),c=w(` /
      `),f=F("strong"),g=w(s)},m(p,m){G(p,e,m),u(e,n),u(e,i),u(i,o),u(e,h),u(e,a),u(a,l),u(e,c),u(e,f),u(f,g)},p(p,m){m&32&&N(o,p[5]),m&256&&b!==(b=T(p[8])+"")&&N(l,b),m&128&&s!==(s=T(p[7])+"")&&N(g,s)},d(p){p&&j(e)}}}function Lt(t){let e,n,i,o,h,a,b,l,c,f,s,g,p,m,d,S,E=!1,L,C,q,y=t[6]&&pt(t),r=t[5]&&mt(t);function v(){cancelAnimationFrame(L),d.paused||(L=ot(v),E=!0),t[14].call(d)}return{c(){e=F("div"),n=F("button"),n.textContent="Open local file",i=R(),y&&y.c(),o=R(),r&&r.c(),h=R(),a=F("p"),b=w("Playback rate: "),l=w(t[0]),c=w(". Press "),f=F("strong"),f.textContent="E",s=w(" to increase, "),g=F("strong"),g.textContent="Q",p=w(" to decrease."),m=R(),d=F("audio"),M(n,"class","svelte-1k7m0i8"),Q(d.src,S=t[4])||M(d,"src",S),d.controls=!0,d.autoplay=!0,M(d,"class","svelte-1k7m0i8"),t[3]===void 0&&P(()=>t[15].call(d))},m(_,$){G(_,e,$),u(e,n),u(e,i),y&&y.m(e,null),u(e,o),r&&r.m(e,null),u(e,h),u(e,a),u(a,b),u(a,l),u(a,c),u(a,f),u(a,s),u(a,g),u(a,p),u(e,m),u(e,d),t[13](d),C||(q=[A(Tt,"keydown",t[11],!0),A(n,"click",t[10]),A(d,"timeupdate",v),A(d,"durationchange",t[15])],C=!0)},p(_,[$]){_[6]?y?y.p(_,$):(y=pt(_),y.c(),y.m(e,o)):y&&(y.d(1),y=null),_[5]?r?r.p(_,$):(r=mt(_),r.c(),r.m(e,h)):r&&(r.d(1),r=null),$&1&&N(l,_[0]),$&16&&!Q(d.src,S=_[4])&&M(d,"src",S),!E&&$&4&&!Nt(_[2])&&(d.currentTime=_[2]),E=!1},i:k,o:k,d(_){_&&j(e),y&&y.d(),r&&r.d(),t[13](null),C=!1,x(q)}}}var gt=.5,bt=4;function qt(){let t=localStorage.getItem("playbackRate");return isNaN(+t)||+t<gt||+t>bt?1:+t}function yt(t,e){return t?Math.round(t/e):0}function It(t,e,n){let i,o;async function h(){let r=await _t("lastFile");if(r&&r instanceof FileSystemHandle){let v=await r.queryPermission({mode:"read"});v==="prompt"?(n(6,d=!0),m=r):v==="granted"&&n(12,l=r)}}async function a(){await m.requestPermission({mode:"read"})==="granted"&&n(12,l=m),n(6,d=!1),m=void 0}let b,l,c,f=qt(),s,g=0,p=0,m,d=!1;h();async function S(){n(12,[l]=await window.showOpenFilePicker({multiple:!1}),l)}function E(r){n(0,f=Math.max(gt,Math.min(bt,f+r))),n(0,f=Math.round(f*10)/10)}function L(r){let v=r.key.toLowerCase(),_=!1;return v==="e"?(E(.1),_=!0):v==="q"?(E(-.1),_=!0):v===" "&&s&&(s.paused?s.play():s.pause(),_=!0),_?(r.preventDefault(),r.stopPropagation(),!1):!0}function C(r){K[r?"unshift":"push"](()=>{s=r,n(1,s),n(0,f)})}function q(){g=this.currentTime,n(2,g)}function y(){p=this.duration,n(3,p)}return t.$$.update=()=>{if(t.$$.dirty&5){t:n(8,i=yt(g,f))}if(t.$$.dirty&9){t:n(7,o=yt(p,f))}if(t.$$.dirty&1){t:localStorage.setItem("playbackRate",f)}if(t.$$.dirty&3){t:s&&n(1,s.playbackRate=f,s)}if(t.$$.dirty&4096){t:l&&ht("lastFile",l)}if(t.$$.dirty&4096){t:(async()=>{if(l){let r=await l.getFile();n(5,c=l.name),n(4,b=URL.createObjectURL(r))}})()}},[f,s,g,p,b,c,d,o,i,a,S,L,l,C,q,y]}var Z=class extends H{constructor(e){super(),at(this,e,It,Lt,it,{})}},wt=Z;var Bt=new wt({target:document.body}),te=Bt;})();
