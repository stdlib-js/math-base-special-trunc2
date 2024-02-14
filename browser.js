// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n=Number.POSITIVE_INFINITY,t=Number,e=t.NEGATIVE_INFINITY;function i(r){return r===n||r===e}var o=Math.floor;function a(r){return o(r)===r}function u(r){return a(r/2)}function f(r){return u(r>0?r-1:r+1)}var c=Math.sqrt;function y(r){return Math.abs(r)}var p="function"==typeof Object.defineProperty?Object.defineProperty:null,l=Object.defineProperty;function s(r){return"number"==typeof r}function v(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function d(r,n,t){var e=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+v(i):v(i)+r,e&&(r="-"+r)),r}var w=String.prototype.toLowerCase,g=String.prototype.toUpperCase;function A(r){var n,t,e;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,e=parseInt(t,10),!isFinite(e)){if(!s(t))throw new Error("invalid integer. Value: "+t);e=0}return e<0&&("u"===r.specifier||10!==n)&&(e=4294967295+e+1),e<0?(t=(-e).toString(n),r.precision&&(t=d(t,r.precision,r.padRight)),t="-"+t):(t=e.toString(n),e||r.precision?r.precision&&(t=d(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===g.call(r.specifier)?g.call(t):w.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function h(r){return"string"==typeof r}var U=Math.abs,b=String.prototype.toLowerCase,m=String.prototype.toUpperCase,E=String.prototype.replace,I=/e\+(\d)$/,_=/e-(\d)$/,j=/^(\d+)$/,N=/^(\d+)e/,S=/\.0$/,T=/\.0*e/,F=/(\..*[^0])0*e/;function x(r){var n,t,e=parseFloat(r.arg);if(!isFinite(e)){if(!s(r.arg))throw new Error("invalid floating-point number. Value: "+t);e=r.arg}switch(r.specifier){case"e":case"E":t=e.toExponential(r.precision);break;case"f":case"F":t=e.toFixed(r.precision);break;case"g":case"G":U(e)<1e-4?((n=r.precision)>0&&(n-=1),t=e.toExponential(n)):t=e.toPrecision(r.precision),r.alternate||(t=E.call(t,F,"$1e"),t=E.call(t,T,"e"),t=E.call(t,S,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=E.call(t,I,"e+0$1"),t=E.call(t,_,"e-0$1"),r.alternate&&(t=E.call(t,j,"$1."),t=E.call(t,N,"$1.e")),e>=0&&r.sign&&(t=r.sign+t),t=r.specifier===m.call(r.specifier)?m.call(t):b.call(t)}function k(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function O(r,n,t){var e=n-r.length;return e<0?r:r=t?r+k(e):k(e)+r}var V=String.fromCharCode,G=isNaN,H=Array.isArray;function W(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function $(r){var n,t,e,i,o,a,u,f,c;if(!H(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(h(e=r[f]))a+=e;else{if(n=void 0!==e.precision,!(e=W(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),t=e.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,G(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,G(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=A(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!G(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=G(o)?String(e.arg):V(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=x(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=d(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=O(e.arg,e.width,e.padRight)),a+=e.arg||"",u+=1}return a}var L=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function C(r){var n,t,e,i;for(t=[],i=0,e=L.exec(r);e;)(n=r.slice(i,L.lastIndex-e[0].length)).length&&t.push(n),t.push(P(e)),i=L.lastIndex,e=L.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function R(r){return"string"==typeof r}function Y(r){var n,t;if(!R(r))throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[C(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return $.apply(null,n)}var Z=Object.prototype,M=Z.toString,X=Z.__defineGetter__,q=Z.__defineSetter__,z=Z.__lookupGetter__,B=Z.__lookupSetter__,D=function(){try{return p({},"x",{}),!0}catch(r){return!1}}()?l:function(r,n,t){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===M.call(r))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(z.call(r,n)||B.call(r,n)?(e=r.__proto__,r.__proto__=Z,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&X&&X.call(r,n,t.get),a&&q&&q.call(r,n,t.set),r};function J(r,n,t){D(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var K,Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),rr=Object.prototype.toString,nr=Object.prototype.hasOwnProperty,tr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof tr?tr.toStringTag:"",ir=Q&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,i,o;if(null==r)return rr.call(r);t=r[er],o=er,n=null!=(i=r)&&nr.call(i,o);try{r[er]=void 0}catch(n){return rr.call(r)}return e=rr.call(r),n?r[er]=t:delete r[er],e}:function(r){return rr.call(r)},or="function"==typeof Uint32Array,ar="function"==typeof Uint32Array?Uint32Array:null,ur="function"==typeof Uint32Array?Uint32Array:void 0;K=function(){var r,n,t;if("function"!=typeof ar)return!1;try{n=new ar(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(or&&t instanceof Uint32Array||"[object Uint32Array]"===ir(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr,cr=K,yr="function"==typeof Float64Array,pr="function"==typeof Float64Array?Float64Array:null,lr="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,n,t;if("function"!=typeof pr)return!1;try{n=new pr([1,3.14,-3.14,NaN]),t=n,r=(yr&&t instanceof Float64Array||"[object Float64Array]"===ir(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var sr,vr=fr,dr="function"==typeof Uint8Array,wr="function"==typeof Uint8Array?Uint8Array:null,gr="function"==typeof Uint8Array?Uint8Array:void 0;sr=function(){var r,n,t;if("function"!=typeof wr)return!1;try{n=new wr(n=[1,3.14,-3.14,256,257]),t=n,r=(dr&&t instanceof Uint8Array||"[object Uint8Array]"===ir(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var Ar,hr=sr,Ur="function"==typeof Uint16Array,br="function"==typeof Uint16Array?Uint16Array:null,mr="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,n,t;if("function"!=typeof br)return!1;try{n=new br(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Ur&&t instanceof Uint16Array||"[object Uint16Array]"===ir(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Er,Ir={uint16:Ar,uint8:hr};(Er=new Ir.uint16(1))[0]=4660;var _r,jr,Nr=52===new Ir.uint8(Er.buffer)[0];!0===Nr?(_r=1,jr=0):(_r=0,jr=1);var Sr={HIGH:_r,LOW:jr},Tr=new vr(1),Fr=new cr(Tr.buffer),xr=Sr.HIGH,kr=Sr.LOW;function Or(r,n,t,e){return Tr[0]=r,n[e]=Fr[xr],n[e+t]=Fr[kr],n}function Vr(r){return Or(r,[0,0],1,0)}J(Vr,"assign",Or);var Gr,Hr="function"==typeof Uint32Array,Wr="function"==typeof Uint32Array?Uint32Array:null,$r="function"==typeof Uint32Array?Uint32Array:void 0;Gr=function(){var r,n,t;if("function"!=typeof Wr)return!1;try{n=new Wr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(Hr&&t instanceof Uint32Array||"[object Uint32Array]"===ir(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Lr,Pr=Gr,Cr="function"==typeof Uint8Array,Rr="function"==typeof Uint8Array?Uint8Array:null,Yr="function"==typeof Uint8Array?Uint8Array:void 0;Lr=function(){var r,n,t;if("function"!=typeof Rr)return!1;try{n=new Rr(n=[1,3.14,-3.14,256,257]),t=n,r=(Cr&&t instanceof Uint8Array||"[object Uint8Array]"===ir(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var Zr,Mr=Lr,Xr="function"==typeof Uint16Array,qr="function"==typeof Uint16Array?Uint16Array:null,zr="function"==typeof Uint16Array?Uint16Array:void 0;Zr=function(){var r,n,t;if("function"!=typeof qr)return!1;try{n=new qr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Xr&&t instanceof Uint16Array||"[object Uint16Array]"===ir(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?zr:function(){throw new Error("not implemented")};var Br,Dr={uint16:Zr,uint8:Mr};Br=function(){var r;return(r=new Dr.uint16(1))[0]=4660,52===new Dr.uint8(r.buffer)[0]}();var Jr=!0===Br?0:1,Kr=new vr(1),Qr=new Pr(Kr.buffer);function rn(r,n){return Kr[0]=r,Qr[Jr]=n>>>0,Kr[0]}function nn(r){return 0|r}var tn,en,on=t.NEGATIVE_INFINITY,an=Number.POSITIVE_INFINITY,un=2147483647,fn=!0===Nr?1:0,cn=new vr(1),yn=new cr(cn.buffer);function pn(r){return cn[0]=r,yn[fn]}!0===Nr?(tn=1,en=0):(tn=0,en=1);var ln={HIGH:tn,LOW:en},sn=new vr(1),vn=new cr(sn.buffer),dn=ln.HIGH,wn=ln.LOW;function gn(r,n){return vn[dn]=r,vn[wn]=n,sn[0]}var An=[0,0];function hn(r,n){var t,e;return Vr.assign(r,An,1,0),t=An[0],t&=un,e=pn(n),gn(t|=e&=2147483648,An[1])}var Un,bn="function"==typeof Uint32Array,mn="function"==typeof Uint32Array?Uint32Array:null,En="function"==typeof Uint32Array?Uint32Array:void 0;Un=function(){var r,n,t;if("function"!=typeof mn)return!1;try{n=new mn(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(bn&&t instanceof Uint32Array||"[object Uint32Array]"===ir(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?En:function(){throw new Error("not implemented")};var In,_n=Un,jn="function"==typeof Uint8Array,Nn="function"==typeof Uint8Array?Uint8Array:null,Sn="function"==typeof Uint8Array?Uint8Array:void 0;In=function(){var r,n,t;if("function"!=typeof Nn)return!1;try{n=new Nn(n=[1,3.14,-3.14,256,257]),t=n,r=(jn&&t instanceof Uint8Array||"[object Uint8Array]"===ir(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Sn:function(){throw new Error("not implemented")};var Tn,Fn=In,xn="function"==typeof Uint16Array,kn="function"==typeof Uint16Array?Uint16Array:null,On="function"==typeof Uint16Array?Uint16Array:void 0;Tn=function(){var r,n,t;if("function"!=typeof kn)return!1;try{n=new kn(n=[1,3.14,-3.14,65536,65537]),t=n,r=(xn&&t instanceof Uint16Array||"[object Uint16Array]"===ir(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?On:function(){throw new Error("not implemented")};var Vn,Gn={uint16:Tn,uint8:Fn};Vn=function(){var r;return(r=new Gn.uint16(1))[0]=4660,52===new Gn.uint8(r.buffer)[0]}();var Hn=!0===Vn?1:0,Wn=new vr(1),$n=new _n(Wn.buffer);function Ln(r,n){return Wn[0]=r,$n[Hn]=n>>>0,Wn[0]}var Pn=1023,Cn=1048576,Rn=[1,1.5],Yn=[0,.5849624872207642],Zn=[0,1.350039202129749e-8];function Mn(n,t,e,o){return r(n)||i(n)?(t[o]=n,t[o+e]=0,t):0!==n&&y(n)<22250738585072014e-324?(t[o]=4503599627370496*n,t[o+e]=-52,t):(t[o]=n,t[o+e]=0,t)}J((function(r){return Mn(r,[0,0],1,0)}),"assign",Mn);var Xn=[0,0],qn=[0,0];function zn(n,t){var e,o;return 0===t||0===n||r(n)||i(n)?n:(Mn(n,Xn,1,0),t+=Xn[1],t+=function(r){var n=pn(r);return(n=(2146435072&n)>>>20)-Pn|0}(n=Xn[0]),t<-1074?hn(0,n):t>1023?n<0?on:an:(t<=-1023?(t+=52,o=2220446049250313e-31):o=1,Vr.assign(n,qn,1,0),e=qn[0],e&=2148532223,o*gn(e|=t+Pn<<20,qn[1])))}var Bn=1048575,Dn=1048576,Jn=1083179008,Kn=1e300,Qn=1e-300,rt=[0,0],nt=[0,0];function tt(n,t){var e,o,u,p,l,s,v,d,w,g,A,h,U,b;if(r(n)||r(t))return NaN;if(Vr.assign(t,rt,1,0),l=rt[0],0===rt[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return c(n);if(-.5===t)return 1/c(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(i(t))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:y(r)<1==(n===an)?0:an}(n,t)}if(Vr.assign(n,rt,1,0),p=rt[0],0===rt[1]){if(0===p)return function(r,n){return n===on?an:n===an?0:n>0?f(n)?r:0:f(n)?hn(an,r):an}(n,t);if(1===n)return 1;if(-1===n&&f(t))return-1;if(i(n))return n===on?tt(-0,-t):t<0?0:an}if(n<0&&!1===a(t))return(n-n)/(n-n);if(u=y(n),e=p&un|0,o=l&un|0,v=l>>>31|0,s=(s=p>>>31|0)&&f(t)?-1:1,o>1105199104){if(o>1139802112)return function(r,n){return(pn(r)&un)<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,t);if(e<1072693247)return 1===v?s*Kn*Kn:s*Qn*Qn;if(e>1072693248)return 0===v?s*Kn*Kn:s*Qn*Qn;A=function(r,n){var t,e,i,o,a,u;return t=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=rn(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=t,r}(nt,u)}else A=function(r,n,t){var e,i,o,a,u,f,c,y,p,l,s,v,d,w,g,A,h,U,b,m,E;return U=0,t<Cn&&(U-=53,t=pn(n*=9007199254740992)),U+=(t>>20)-Pn|0,t=1072693248|(b=1048575&t|0),b<=235662?m=0:b<767610?m=1:(m=0,U+=1,t-=Cn),a=rn(i=(A=(n=Ln(n,t))-(c=Rn[m]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),f=Ln(0,e+=m<<18),g=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=rn(f=3+(o=a*a)+(g+=(u=h*(A-a*f-a*(n-(f-c))))*(a+i)),0),d=(s=-7.028461650952758e-9*(p=rn(p=(A=a*f)+(h=u*f+(g-(f-3-o))*i),0))+.9617966939259756*(h-(p-A))+Zn[m])-((v=rn(v=(l=.9617967009544373*p)+s+(y=Yn[m])+(w=U),0))-w-y-l),r[0]=v,r[1]=d,r}(nt,u,e);if(h=(g=(t-(d=rn(t,0)))*A[0]+t*A[1])+(w=d*A[0]),Vr.assign(h,rt,1,0),U=nn(rt[0]),b=nn(rt[1]),U>=Jn){if(0!=(U-Jn|b))return s*Kn*Kn;if(g+8008566259537294e-32>h-w)return s*Kn*Kn}else if((U&un)>=1083231232){if(0!=(U-3230714880|b))return s*Qn*Qn;if(g<=h-w)return s*Qn*Qn}return h=function(r,n,t){var e,i,o,a,u,f,c,y,p,l;return p=((y=r&un|0)>>20)-Pn|0,c=0,y>1071644672&&(i=Ln(0,((c=r+(Dn>>p+1)>>>0)&~(Bn>>(p=((c&un)>>20)-Pn|0)))>>>0),c=(c&Bn|Dn)>>20-p>>>0,r<0&&(c=-c),n-=i),r=nn(r=pn(f=1-((f=(o=.6931471824645996*(i=rn(i=t+n,0)))+(a=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?zn(f,c):Ln(f,r)}(U,w,g),s*h}var et,it="function"==typeof Uint32Array,ot="function"==typeof Uint32Array?Uint32Array:null,at="function"==typeof Uint32Array?Uint32Array:void 0;et=function(){var r,n,t;if("function"!=typeof ot)return!1;try{n=new ot(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(it&&t instanceof Uint32Array||"[object Uint32Array]"===ir(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?at:function(){throw new Error("not implemented")};var ut,ft=et,ct="function"==typeof Uint8Array,yt="function"==typeof Uint8Array?Uint8Array:null,pt="function"==typeof Uint8Array?Uint8Array:void 0;ut=function(){var r,n,t;if("function"!=typeof yt)return!1;try{n=new yt(n=[1,3.14,-3.14,256,257]),t=n,r=(ct&&t instanceof Uint8Array||"[object Uint8Array]"===ir(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?pt:function(){throw new Error("not implemented")};var lt,st=ut,vt="function"==typeof Uint16Array,dt="function"==typeof Uint16Array?Uint16Array:null,wt="function"==typeof Uint16Array?Uint16Array:void 0;lt=function(){var r,n,t;if("function"!=typeof dt)return!1;try{n=new dt(n=[1,3.14,-3.14,65536,65537]),t=n,r=(vt&&t instanceof Uint16Array||"[object Uint16Array]"===ir(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?wt:function(){throw new Error("not implemented")};var gt,At={uint16:lt,uint8:st};gt=function(){var r;return(r=new At.uint16(1))[0]=4660,52===new At.uint8(r.buffer)[0]}();var ht,Ut,bt=gt,mt=!0===bt?1:0,Et=new vr(1),It=new ft(Et.buffer);function _t(r){return Et[0]=r,It[mt]}!0===bt?(ht=1,Ut=0):(ht=0,Ut=1);var jt={HIGH:ht,LOW:Ut},Nt=new vr(1),St=new ft(Nt.buffer),Tt=jt.HIGH,Ft=jt.LOW;function xt(r,n,t,e){return Nt[0]=r,n[e]=St[Tt],n[e+t]=St[Ft],n}function kt(r){return xt(r,[0,0],1,0)}J(kt,"assign",xt);var Ot=t.NEGATIVE_INFINITY,Vt=1048575,Gt=1.4426950407214463,Ht=[0,0];function Wt(n){var t,e,i,o,a;if(r(n)||n<0)return NaN;if(kt.assign(n,Ht,1,0),a=0,(e=Ht[0])<1048576){if(0==(2147483647&e|Ht[1]))return Ot;a-=54,e=_t(n*=0x40000000000000)}return e>=2146435072?n+n:(a+=(e>>20)-1023|0,a+=(o=614244+(e&=Bn)&1048576|0)>>20|0,i=function(r){var n,t,e,i,o,a,u,f,c,y,p;return i=_t(r),o=r-1,(Vt&2+i)<3?0===o?0:o*o*(.3333333333333333*o-.5):(y=(i&=Vt)-398458|0,p=440401-i|0,t=(c=(u=(a=o/(2+o))*a)*u)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=u*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),f=e+t,(y|=p)>0?a*((n=.5*o*o)+f)-n:a*(f-o))}(n=Ln(n,e|1072693248^o)),1.6751713164886512e-10*((n-=1)+i)+(n-(t=rn(n,0))+i)*Gt+t*Gt+a)}return function(n){var t;return r(n)||i(n)||0===n?n:(n<0?(n=-n,t=-1):t=1,t*tt(2,o(Wt(n))))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).trunc2=n();
//# sourceMappingURL=browser.js.map
