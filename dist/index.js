"use strict";var s=function(t,a){return function(){try{return a||t((a={exports:{}}).exports,a),a.exports}catch(x){throw (a=0, x)}};};var O=s(function(N,E){
var G=require('@stdlib/ndarray-base-assert-is-row-major/dist'),I=require('@stdlib/strided-base-reinterpret-complex128/dist');function H(t,a,x,l,u,g,p,w,y,R,v,q){var i,j,h,z,e,b,n,o,f,r,m;if(t<=0||a<=0)return-1;if(i=I(x,0),j=I(p,0),l*=2,u*=2,g*=2,w*=2,y*=2,G([l,u])){for(e=a,b=t,m=b-1;m>=0;m--){for(n=g+m*l+(e-1)*u,f=y+(e-1)*w,r=e-1;r>=0&&!(i[n]!==j[f]||i[n+1]!==j[f+1]);r--)n-=u,f-=w;if(r===-1)return m}return-1}for(e=t,b=a,h=-l,z=e*l-u,o=q,r=0;r<e;r++)R[o]=1,o+=v;for(n=g+(e-1)*l+(b-1)*u,f=y+(b-1)*w,m=b-1;m>=0;m--){for(o=q+(e-1)*v,r=e-1;r>=0;r--)(i[n]!==j[f]||i[n+1]!==j[f+1])&&(R[o]=0),n+=h,o-=v;n+=z,f-=w}for(o=q+(e-1)*v,r=e-1;r>=0&&R[o]!==1;r--)o-=v;return r}E.exports=H
});var _=s(function(W,V){
var J=require('@stdlib/blas-base-layout-resolve-str/dist'),K=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),F=require('@stdlib/strided-base-stride2offset/dist'),P=require('@stdlib/math-base-special-fast-max/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),Q=O();function U(t,a,x,l,u,g,p,w,y){var R,v,q,i;if(i=J(t),i===null)throw new TypeError(S('2izFx',t));if(K(i)?(q=x,R=u,v=1):(q=a,R=1,v=u),u<P(1,q))throw new RangeError(S('2izIR',q,u));return Q(a,x,l,R,v,0,g,p,F(x,p),w,y,F(a,y))}V.exports=U
});var B=s(function(X,k){
var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=_(),Z=O();Y(T,"ndarray",Z);k.exports=T
});var $=require("path").join,L=require('@stdlib/utils-try-require/dist'),M=require('@stdlib/assert-is-error/dist'),d=B(),c,C=L($(__dirname,"./native.js"));M(C)?c=d:c=C;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
