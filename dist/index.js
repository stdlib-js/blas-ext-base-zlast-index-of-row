"use strict";var p=function(i,a){return function(){return a||i((a={exports:{}}).exports,a),a.exports}};var O=p(function(W,E){
var G=require('@stdlib/ndarray-base-assert-is-row-major/dist'),I=require('@stdlib/strided-base-reinterpret-complex128/dist');function H(i,a,s,t,u,y,j,m,w,x,v,q){var b,g,h,z,e,R,n,o,f,r,l;if(i<=0||a<=0)return-1;if(b=I(s,0),g=I(j,0),t*=2,u*=2,y*=2,m*=2,w*=2,G([t,u])){for(e=a,R=i,l=R-1;l>=0;l--){for(n=y+l*t+(e-1)*u,f=w+(e-1)*m,r=e-1;r>=0&&!(b[n]!==g[f]||b[n+1]!==g[f+1]);r--)n-=u,f-=m;if(r===-1)return l}return-1}for(e=i,R=a,h=-t,z=e*t-u,o=q,r=0;r<e;r++)x[o]=1,o+=v;for(n=y+(e-1)*t+(R-1)*u,f=w+(R-1)*m,l=R-1;l>=0;l--){for(o=q+(e-1)*v,r=e-1;r>=0;r--)(b[n]!==g[f]||b[n+1]!==g[f+1])&&(x[o]=0),n+=h,o-=v;n+=z,f-=m}for(o=q+(e-1)*v,r=e-1;r>=0&&x[o]!==1;r--)o-=v;return r}E.exports=H
});var _=p(function(X,V){
var J=require('@stdlib/blas-base-assert-is-layout/dist'),K=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),P=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),F=require('@stdlib/strided-base-stride2offset/dist'),Q=require('@stdlib/math-base-special-fast-max/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),U=O();function Y(i,a,s,t,u,y,j,m,w){var x,v,q;if(!J(i))throw new TypeError(S('nullFx',i));if(K(i)?q=s:q=a,u<Q(1,q))throw new RangeError(S('nullIR',q,u));return P(i)?(x=1,v=u):(x=u,v=1),U(a,s,t,x,v,0,y,j,F(s,j),m,w,F(a,w))}V.exports=Y
});var k=p(function(A,T){
var Z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=_(),$=O();Z(C,"ndarray",$);T.exports=C
});var M=require("path").join,L=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),N=k(),c,B=L(M(__dirname,"./native.js"));D(B)?c=N:c=B;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
