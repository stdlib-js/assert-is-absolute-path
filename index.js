// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isAbsolutePath=t()}(this,(function(){"use strict";function e(e){var t=e.default;if("function"==typeof t){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return t({},"x",{}),!0}catch(e){return!1}},n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,a=o.__defineSetter__,c=o.__lookupGetter__,l=o.__lookupSetter__;var f=n,s=function(e,t,r){var n,f,s,p;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(c.call(e,t)||l.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),s="get"in r,p="set"in r,f&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(e,t,r.get),p&&a&&a.call(e,t,r.set),e},p=r()?f:s;var y=function(e,t,r){p(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})},d="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function v(){throw new Error("setTimeout has not been defined")}function m(){throw new Error("clearTimeout has not been defined")}var h=v,b=m;function g(e){if(h===setTimeout)return setTimeout(e,0);if((h===v||!h)&&setTimeout)return h=setTimeout,setTimeout(e,0);try{return h(e,0)}catch(t){try{return h.call(null,e,0)}catch(t){return h.call(this,e,0)}}}"function"==typeof d.setTimeout&&(h=setTimeout),"function"==typeof d.clearTimeout&&(b=clearTimeout);var w,_=[],T=!1,j=-1;function O(){T&&w&&(T=!1,w.length?_=w.concat(_):j=-1,_.length&&S())}function S(){if(!T){var e=g(O);T=!0;for(var t=_.length;t;){for(w=_,_=[];++j<t;)w&&w[j].run();j=-1,t=_.length}w=null,T=!1,function(e){if(b===clearTimeout)return clearTimeout(e);if((b===m||!b)&&clearTimeout)return b=clearTimeout,clearTimeout(e);try{b(e)}catch(t){try{return b.call(null,e)}catch(t){return b.call(this,e)}}}(e)}}function P(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];_.push(new A(e,t)),1!==_.length||T||g(S)}function A(e,t){this.fun=e,this.array=t}A.prototype.run=function(){this.fun.apply(null,this.array)};var k="browser",E="browser",x={},L=[],C={},D={},N={};function M(){}var z=M,G=M,V=M,F=M,q=M,B=M,H=M;function I(e){throw new Error("process.binding is not supported")}function J(){return"/"}function K(e){throw new Error("process.chdir is not supported")}function Q(){return 0}var R=d.performance||{},U=R.now||R.mozNow||R.msNow||R.oNow||R.webkitNow||function(){return(new Date).getTime()};function W(e){var t=.001*U.call(R),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]}var X=new Date;function Y(){return(new Date-X)/1e3}var Z={nextTick:P,title:k,browser:true,env:x,argv:L,version:"",versions:C,on:z,addListener:G,once:V,off:F,removeListener:q,removeAllListeners:B,emit:H,binding:I,cwd:J,chdir:K,umask:Q,hrtime:W,platform:E,release:D,config:N,uptime:Y},$="win32"===e(Object.freeze({__proto__:null,addListener:G,argv:L,binding:I,browser:true,chdir:K,config:N,cwd:J,default:Z,emit:H,env:x,hrtime:W,nextTick:P,off:F,on:z,once:V,platform:E,release:D,removeAllListeners:B,removeListener:q,title:k,umask:Q,uptime:Y,version:"",versions:C})).platform;var ee=function(e){return"string"==typeof e};var te=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var re=function(){return te&&"symbol"==typeof Symbol.toStringTag},ne=Object.prototype.toString,oe=ne;var ie=function(e){return oe.call(e)},ue=Object.prototype.hasOwnProperty;var ae=function(e,t){return null!=e&&ue.call(e,t)},ce="function"==typeof Symbol?Symbol.toStringTag:"",le=ae,fe=ce,se=ne;var pe=ie,ye=function(e){var t,r,n;if(null==e)return se.call(e);r=e[fe],t=le(e,fe);try{e[fe]=void 0}catch(t){return se.call(e)}return n=se.call(e),t?e[fe]=r:delete e[fe],n},de=re()?ye:pe,ve=String.prototype.valueOf;var me=de,he=function(e){try{return ve.call(e),!0}catch(e){return!1}},be=re();var ge=function(e){return"object"==typeof e&&(e instanceof String||(be?he(e):"[object String]"===me(e)))},we=ee,_e=ge;var Te=y,je=function(e){return we(e)||_e(e)},Oe=ge;Te(je,"isPrimitive",ee),Te(je,"isObject",Oe);var Se,Pe=je;function Ae(e){return Pe.isPrimitive(e)&&e.length>0&&47===e.charCodeAt(0)}function ke(e){var t,r;return!!Pe.isPrimitive(e)&&(0!==(r=e.length)&&(47===(t=e.charCodeAt(0))||92===t||(t>=65&&t<=90||t>=97&&t<=122)&&r>2&&58===e.charCodeAt(1)&&(47===(t=e.charCodeAt(2))||92===t)))}return y(Se=$?ke:Ae,"posix",Ae),y(Se,"win32",ke),Se}));
//# sourceMappingURL=index.js.map
