"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=s(function(v,n){
var A=require('@stdlib/assert-is-string/dist').isPrimitive;function P(e){return A(e)&&e.length>0&&e.charCodeAt(0)===47}n.exports=P
});var a=s(function(x,o){
var l=require('@stdlib/assert-is-string/dist').isPrimitive;function d(e){var r,i;return!l(e)||(i=e.length,i===0)?!1:(r=e.charCodeAt(0),r===47||r===92||(r>=65&&r<=90||r>=97&&r<=122)&&i>2&&e.charCodeAt(1)===58&&(r=e.charCodeAt(2),r===47||r===92))}o.exports=d
});var f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=require('@stdlib/assert-is-windows/dist'),h=u(),c=a(),t;q?t=c:t=h;f(t,"posix",h);f(t,"win32",c);module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
