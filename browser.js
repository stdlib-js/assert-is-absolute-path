// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isAbsolutePath=t()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__;var l=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,l){var c,f,s,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(u.call(e,t)||a.call(e,t)?(c=e.__proto__,e.__proto__=r,delete e[t],e[t]=l.value,e.__proto__=c):e[t]=l.value),s="get"in l,p="set"in l,f&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&o&&o.call(e,t,l.get),p&&i&&i.call(e,t,l.set),e};function c(e,t,r){l(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){if(this instanceof e){var r=[null];r.push.apply(r,arguments);var n=Function.bind.apply(t,r);return new n}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var s="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function p(){throw new Error("setTimeout has not been defined")}function y(){throw new Error("clearTimeout has not been defined")}var d=p,m=y;function h(e){if(d===setTimeout)return setTimeout(e,0);if((d===p||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(t){try{return d.call(null,e,0)}catch(t){return d.call(this,e,0)}}}"function"==typeof s.setTimeout&&(d=setTimeout),"function"==typeof s.clearTimeout&&(m=clearTimeout);var v,b=[],g=!1,w=-1;function _(){g&&v&&(g=!1,v.length?b=v.concat(b):w=-1,b.length&&T())}function T(){if(!g){var e=h(_);g=!0;for(var t=b.length;t;){for(v=b,b=[];++w<t;)v&&v[w].run();w=-1,t=b.length}v=null,g=!1,function(e){if(m===clearTimeout)return clearTimeout(e);if((m===y||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(e);try{m(e)}catch(t){try{return m.call(null,e)}catch(t){return m.call(this,e)}}}(e)}}function j(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];b.push(new O(e,t)),1!==b.length||g||h(T)}function O(e,t){this.fun=e,this.array=t}O.prototype.run=function(){this.fun.apply(null,this.array)};var S="browser",A="browser",P={},k=[],E={},x={},L={};function C(){}var D=C,M=C,N=C,z=C,F=C,G=C,V=C;function q(e){throw new Error("process.binding is not supported")}function B(){return"/"}function H(e){throw new Error("process.chdir is not supported")}function I(){return 0}var J=s.performance||{},K=J.now||J.mozNow||J.msNow||J.oNow||J.webkitNow||function(){return(new Date).getTime()};function Q(e){var t=.001*K.call(J),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]}var R=new Date;function U(){return(new Date-R)/1e3}var W={nextTick:j,title:S,browser:true,env:P,argv:k,version:"",versions:E,on:D,addListener:M,once:N,off:z,removeListener:F,removeAllListeners:G,emit:V,binding:q,cwd:B,chdir:H,umask:I,hrtime:Q,platform:A,release:x,config:L,uptime:U},X="win32"===f(Object.freeze({__proto__:null,addListener:M,argv:k,binding:q,browser:true,chdir:H,config:L,cwd:B,default:W,emit:V,env:P,hrtime:Q,nextTick:j,off:z,on:D,once:N,platform:A,release:x,removeAllListeners:G,removeListener:F,title:S,umask:I,uptime:U,version:"",versions:E})).platform;function Y(e){return"string"==typeof e}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function $(){return Z&&"symbol"==typeof Symbol.toStringTag}var ee=Object.prototype.toString;var te=Object.prototype.hasOwnProperty;var re="function"==typeof Symbol?Symbol.toStringTag:"";var ne=$()?function(e){var t,r,n,o,i;if(null==e)return ee.call(e);r=e[re],i=re,t=null!=(o=e)&&te.call(o,i);try{e[re]=void 0}catch(t){return ee.call(e)}return n=ee.call(e),t?e[re]=r:delete e[re],n}:function(e){return ee.call(e)},oe=String.prototype.valueOf;var ie,ue=$();function ae(e){return"object"==typeof e&&(e instanceof String||(ue?function(e){try{return oe.call(e),!0}catch(e){return!1}}(e):"[object String]"===ne(e)))}function le(e){return Y(e)||ae(e)}function ce(e){return Y(e)&&e.length>0&&47===e.charCodeAt(0)}function fe(e){var t,r;return!!Y(e)&&(0!==(r=e.length)&&(47===(t=e.charCodeAt(0))||92===t||(t>=65&&t<=90||t>=97&&t<=122)&&r>2&&58===e.charCodeAt(1)&&(47===(t=e.charCodeAt(2))||92===t)))}return c(le,"isPrimitive",Y),c(le,"isObject",ae),c(ie=X?fe:ce,"posix",ce),c(ie,"win32",fe),ie}));
//# sourceMappingURL=browser.js.map
