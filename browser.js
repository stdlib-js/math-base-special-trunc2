// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n,r=function(n){return n!=n},t=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY,u=t,i=e,f=function(n){return n===u||n===i},o=Math.floor,c=o,a=function(n){return c(n)===n},y=a,l=function(n){return y(n/2)},p=function(n){return l(n>0?n-1:n+1)},A=Math.sqrt,b=function(n){return Math.abs(n)},v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),w=Object.prototype.toString,U=w,d=function(n){return U.call(n)},m=Object.prototype.hasOwnProperty,s=function(n,r){return null!=n&&m.call(n,r)},h="function"==typeof Symbol?Symbol.toStringTag:"",I=s,N=h,g=w,F=d,S=function(n){var r,t,e;if(null==n)return g.call(n);t=n[N],r=I(n,N);try{n[N]=void 0}catch(r){return g.call(n)}return e=g.call(n),r?n[N]=t:delete n[N],e},H=v&&"symbol"==typeof Symbol.toStringTag?S:F,O=H,T="function"==typeof Uint32Array,j="function"==typeof Uint32Array?Uint32Array:null,E=function(n){return T&&n instanceof Uint32Array||"[object Uint32Array]"===O(n)},G=j,L=function(){var n,r;if("function"!=typeof G)return!1;try{r=new G(r=[1,3.14,-3.14,4294967296,4294967297]),n=E(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},W="function"==typeof Uint32Array?Uint32Array:void 0,x=function(){throw new Error("not implemented")},M=L()?W:x,P=H,V="function"==typeof Float64Array,Y="function"==typeof Float64Array?Float64Array:null,_=function(n){return V&&n instanceof Float64Array||"[object Float64Array]"===P(n)},q=Y,k=function(){var n,r;if("function"!=typeof q)return!1;try{r=new q([1,3.14,-3.14,NaN]),n=_(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n},z="function"==typeof Float64Array?Float64Array:void 0,B=function(){throw new Error("not implemented")},C=k()?z:B,D=H,J="function"==typeof Uint8Array,K="function"==typeof Uint8Array?Uint8Array:null,Q=function(n){return J&&n instanceof Uint8Array||"[object Uint8Array]"===D(n)},R=K,X=function(){var n,r;if("function"!=typeof R)return!1;try{r=new R(r=[1,3.14,-3.14,256,257]),n=Q(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},Z="function"==typeof Uint8Array?Uint8Array:void 0,$=function(){throw new Error("not implemented")},nn=X()?Z:$,rn=H,tn="function"==typeof Uint16Array,en="function"==typeof Uint16Array?Uint16Array:null,un=function(n){return tn&&n instanceof Uint16Array||"[object Uint16Array]"===rn(n)},fn=en,on=function(){var n,r;if("function"!=typeof fn)return!1;try{r=new fn(r=[1,3.14,-3.14,65536,65537]),n=un(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},cn="function"==typeof Uint16Array?Uint16Array:void 0,an=function(){throw new Error("not implemented")},yn={uint16:on()?cn:an,uint8:nn};(n=new yn.uint16(1))[0]=4660;var ln,pn,An=52===new yn.uint8(n.buffer)[0];!0===An?(ln=1,pn=0):(ln=0,pn=1);var bn,vn,wn=M,Un={HIGH:ln,LOW:pn},dn=new C(1),mn=new wn(dn.buffer),sn=Un.HIGH,hn=Un.LOW,In=function(n,r){return dn[0]=r,n[0]=mn[sn],n[1]=mn[hn],n},Nn=function(n,r){return 1===arguments.length?In([0,0],n):In(n,r)},gn=Nn,Fn=M,Sn=!0===An?0:1,Hn=new C(1),On=new Fn(Hn.buffer),Tn=function(n,r){return Hn[0]=n,On[Sn]=r>>>0,Hn[0]},jn=Tn,En=function(n){return 0|n},Gn=M,Ln=!0===An?1:0,Wn=new C(1),xn=new Gn(Wn.buffer),Mn=function(n){return Wn[0]=n,xn[Ln]};!0===An?(bn=1,vn=0):(bn=0,vn=1);var Pn=M,Vn={HIGH:bn,LOW:vn},Yn=new C(1),_n=new Pn(Yn.buffer),qn=Vn.HIGH,kn=Vn.LOW,zn=function(n,r){return _n[qn]=n,_n[kn]=r,Yn[0]},Bn=zn,Cn=gn,Dn=Mn,Jn=Bn,Kn=[0,0],Qn=function(n,r){var t,e;return Cn(Kn,n),t=Kn[0],t&=2147483647,e=Dn(r),Jn(t|=e&=2147483648,Kn[1])},Rn=p,Xn=Qn,Zn=e,$n=t,nr=function(n,r){return r===Zn?$n:r===$n?0:r>0?Rn(r)?n:0:Rn(r)?Xn($n,n):$n},rr=Mn,tr=function(n,r){return(2147483647&rr(n))<=1072693247?r<0?1/0:0:r>0?1/0:0},er=b,ur=t,ir=function(n,r){return-1===n?(n-n)/(n-n):1===n?1:er(n)<1==(r===ur)?0:ur},fr=M,or=!0===An?1:0,cr=new C(1),ar=new fr(cr.buffer),yr=function(n,r){return cr[0]=n,ar[or]=r>>>0,cr[0]},lr=Mn,pr=jn,Ar=yr,br=function(n){return 0===n?.5999999999999946:.5999999999999946+n*(.4285714285785502+n*(.33333332981837743+n*(.272728123808534+n*(.23066074577556175+.20697501780033842*n))))},vr=1048576,wr=[1,1.5],Ur=[0,.5849624872207642],dr=[0,1.350039202129749e-8],mr=jn,sr=function(n){return 0===n?.5:.5+n*(.25*n-.3333333333333333)},hr=f,Ir=r,Nr=b,gr=function(n,r){return Ir(r)||hr(r)?(n[0]=r,n[1]=0,n):0!==r&&Nr(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)},Fr=function(n,r){return 1===arguments.length?gr([0,0],n):gr(n,r)},Sr=Mn,Hr=function(n){var r=Sr(n);return(r=(2146435072&r)>>>20)-1023|0},Or=t,Tr=e,jr=r,Er=f,Gr=Qn,Lr=Fr,Wr=Hr,xr=gn,Mr=Bn,Pr=[0,0],Vr=[0,0],Yr=function(n,r){var t,e;return 0===r||0===n||jr(n)||Er(n)?n:(Lr(Pr,n),r+=Pr[1],(r+=Wr(n=Pr[0]))<-1074?Gr(0,n):r>1023?n<0?Tr:Or:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,xr(Vr,n),t=Vr[0],t&=2148532223,e*Mr(t|=r+1023<<20,Vr[1])))},_r=Mn,qr=yr,kr=jn,zr=En,Br=Yr,Cr=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},Dr=2147483647,Jr=1048575,Kr=1048576,Qr=r,Rr=p,Xr=f,Zr=a,$r=A,nt=b,rt=gn,tt=jn,et=En,ut=e,it=t,ft=nr,ot=tr,ct=ir,at=function(n,r,t){var e,u,i,f,o,c,a,y,l,p,A,b,v,w,U,d,m,s,h,I;return s=0,t<vr&&(s-=53,t=lr(r*=9007199254740992)),s+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?I=0:h<767610?I=1:(I=0,s+=1,t-=vr),e=524288+(t>>1|536870912),o=(m=1/((r=Ar(r,t))+(a=wr[I])))*((d=r-a)-(f=pr(u=d*m,0))*(c=Ar(0,e+=I<<18))-f*(r-(c-a))),U=(i=u*u)*i*br(i),c=pr(c=3+(i=f*f)+(U+=o*(f+u)),0),v=(A=-7.028461650952758e-9*(l=pr(l=(d=f*c)+(m=o*c+(U-(c-3-i))*u),0))+.9617966939259756*(m-(l-d))+dr[I])-((b=pr(b=(p=.9617967009544373*l)+A+(y=Ur[I])+(w=s),0))-w-y-p),n[0]=b,n[1]=v,n},yt=function(n,r){var t,e,u,i,f;return t=(f=1.9259629911266175e-8*(u=r-1)-u*u*sr(u)*1.4426950408889634)-((e=mr(e=(i=1.4426950216293335*u)+f,0))-i),n[0]=e,n[1]=t,n},lt=function(n,r,t){var e,u,i,f,o,c,a,y,l;return l=((y=n&Dr|0)>>20)-1023|0,a=0,y>1071644672&&(u=qr(0,((a=n+(Kr>>l+1)>>>0)&~(Jr>>(l=((a&Dr)>>20)-1023|0)))>>>0),a=(a&Jr|Kr)>>20-l>>>0,n<0&&(a=-a),r-=u),o=(f=.6931471805599453*(t-((u=kr(u=t+r,0))-r))+-1.904654299957768e-9*u)-((c=(i=.6931471824645996*u)+f)-i),e=c-(u=c*c)*Cr(u),n=_r(c=1-(c*e/(e-2)-(o+c*o)-c)),n=zr(n),c=(n+=a<<20>>>0)>>20<=0?Br(c,a):qr(c,n)},pt=2147483647,At=1083179008,bt=1e300,vt=1e-300,wt=[0,0],Ut=[0,0],dt=function n(r,t){var e,u,i,f,o,c,a,y,l,p,A,b,v,w;if(Qr(r)||Qr(t))return NaN;if(rt(wt,t),o=wt[0],0===wt[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return $r(r);if(-.5===t)return 1/$r(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Xr(t))return ct(r,t)}if(rt(wt,r),f=wt[0],0===wt[1]){if(0===f)return ft(r,t);if(1===r)return 1;if(-1===r&&Rr(t))return-1;if(Xr(r))return r===ut?n(-0,-t):t<0?0:it}if(r<0&&!1===Zr(t))return(r-r)/(r-r);if(i=nt(r),e=f&pt|0,u=o&pt|0,a=o>>>31|0,c=(c=f>>>31|0)&&Rr(t)?-1:1,u>1105199104){if(u>1139802112)return ot(r,t);if(e<1072693247)return 1===a?c*bt*bt:c*vt*vt;if(e>1072693248)return 0===a?c*bt*bt:c*vt*vt;A=yt(Ut,i)}else A=at(Ut,i,e);if(p=(t-(y=tt(t,0)))*A[0]+t*A[1],l=y*A[0],rt(wt,b=p+l),v=et(wt[0]),w=et(wt[1]),v>=At){if(0!=(v-At|w))return c*bt*bt;if(p+8008566259537294e-32>b-l)return c*bt*bt}else if((v&pt)>=1083231232){if(0!=(v-3230714880|w))return c*vt*vt;if(p<=b-l)return c*vt*vt}return c*(b=lt(v,l,p))},mt=dt,st=Mn,ht=function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)},It=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))},Nt=1048575,gt=Mn,Ft=yr,St=jn,Ht=gn,Ot=r,Tt=e,jt=function(n){var r,t,e,u,i,f,o,c,a,y;return e=st(n),u=n-1,(Nt&2+e)<3?0===u?0:u*u*(.3333333333333333*u-.5):(a=(e&=Nt)-398458|0,y=440401-e|0,t=(c=(f=(i=u/(2+u))*i)*f)*ht(c),o=f*It(c)+t,(a|=y)>0?i*((r=.5*u*u)+o)-r:i*(o-u))},Et=1.4426950407214463,Gt=[0,0],Lt=function(n){var r,t,e,u,i;if(Ot(n)||n<0)return NaN;if(Ht(Gt,n),i=0,(t=Gt[0])<1048576){if(0==(2147483647&t|Gt[1]))return Tt;i-=54,t=gt(n*=0x40000000000000)}return t>=2146435072?n+n:(i+=(t>>20)-1023|0,n=Ft(n,(t&=1048575)|1072693248^(u=t+614244&1048576|0)),i+=u>>20|0,e=jt(n),1.6751713164886512e-10*((n-=1)+e)+(n-(r=St(n,0))+e)*Et+r*Et+i)};return function(n){var t;return r(n)||f(n)||0===n?n:(n<0?(n=-n,t=-1):t=1,t*mt(2,o(Lt(n))))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).trunc2=r();
//# sourceMappingURL=browser.js.map
