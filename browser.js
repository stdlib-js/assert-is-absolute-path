// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isAbsolutePath=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var s=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function y(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,m,"$1e"),n=f.call(n,v,"e"),n=f.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,d,"e-0$1"),e.alternate&&(n=f.call(n,g,"$1."),n=f.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===u.call(e.specifier)?u.call(n):l.call(n)}function b(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,T=Array.isArray;function k(e){return e!=e}function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function E(e){var r,t,n,o,a,s,l,u,f,p,d,g,h;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,u=0;u<e.length;u++)if(n=e[u],"string"==typeof n)s+=n;else{if(r=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,k(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!k(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=y(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,d=n.width,g=n.padRight,h=void 0,(h=d-p.length)<0?p:p=g?p+b(h):b(h)+p)),s+=n.arg||"",l+=1}return s}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function O(e){var r,t,n,i;for(t=[],i=0,n=x.exec(e);n;)(r=e.slice(i,x.lastIndex-n[0].length)).length&&t.push(r),t.push(j(n)),i=x.lastIndex,n=x.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function A(e){var r,t;if("string"!=typeof e)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[O(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return E.apply(null,r)}var C=Object.prototype,P=C.toString,V=C.__defineGetter__,$=C.__defineSetter__,F=C.__lookupGetter__,L=C.__lookupSetter__;var I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(F.call(e,r)||L.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&V&&V.call(e,r,t.get),a&&$&&$.call(e,r,t.set),e};function R(e,r,t){I(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function M(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var Z="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function D(){throw new Error("setTimeout has not been defined")}function G(){throw new Error("clearTimeout has not been defined")}var N=D,W=G;function z(e){if(N===setTimeout)return setTimeout(e,0);if((N===D||!N)&&setTimeout)return N=setTimeout,setTimeout(e,0);try{return N(e,0)}catch(r){try{return N.call(null,e,0)}catch(r){return N.call(this,e,0)}}}"function"==typeof Z.setTimeout&&(N=setTimeout),"function"==typeof Z.clearTimeout&&(W=clearTimeout);var U,X=[],q=!1,B=-1;function H(){q&&U&&(q=!1,U.length?X=U.concat(X):B=-1,X.length&&J())}function J(){if(!q){var e=z(H);q=!0;for(var r=X.length;r;){for(U=X,X=[];++B<r;)U&&U[B].run();B=-1,r=X.length}U=null,q=!1,function(e){if(W===clearTimeout)return clearTimeout(e);if((W===G||!W)&&clearTimeout)return W=clearTimeout,clearTimeout(e);try{return W(e)}catch(r){try{return W.call(null,e)}catch(r){return W.call(this,e)}}}(e)}}function K(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];X.push(new Q(e,r)),1!==X.length||q||z(J)}function Q(e,r){this.fun=e,this.array=r}Q.prototype.run=function(){this.fun.apply(null,this.array)};var Y="browser",ee="browser",re={},te=[],ne={},ie={},oe={};function ae(){}var ce=ae,se=ae,le=ae,ue=ae,fe=ae,pe=ae,de=ae;function ge(e){throw new Error("process.binding is not supported")}function he(){return"/"}function we(e){throw new Error("process.chdir is not supported")}function ve(){return 0}var me=Z.performance||{},ye=me.now||me.mozNow||me.msNow||me.oNow||me.webkitNow||function(){return(new Date).getTime()};function be(e){var r=.001*ye.call(me),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var _e=new Date;function Te(){return(new Date-_e)/1e3}var ke={nextTick:K,title:Y,browser:true,env:re,argv:te,version:"",versions:ne,on:ce,addListener:se,once:le,off:ue,removeListener:fe,removeAllListeners:pe,emit:de,binding:ge,cwd:he,chdir:we,umask:ve,hrtime:be,platform:ee,release:ie,config:oe,uptime:Te},Se="win32"===M(Object.freeze({__proto__:null,addListener:se,argv:te,binding:ge,browser:true,chdir:we,config:oe,cwd:he,default:ke,emit:de,env:re,hrtime:be,nextTick:K,off:ue,on:ce,once:le,platform:ee,release:ie,removeAllListeners:pe,removeListener:fe,title:Y,umask:ve,uptime:Te,version:"",versions:ne})).platform;function Ee(e){return"string"==typeof e}var xe="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function je(){return xe&&"symbol"==typeof Symbol.toStringTag}var Oe=Object.prototype.toString;var Ae=Object.prototype.hasOwnProperty;var Ce="function"==typeof Symbol?Symbol:void 0,Pe="function"==typeof Ce?Ce.toStringTag:"";var Ve=je()?function(e){var r,t,n,i,o;if(null==e)return Oe.call(e);t=e[Pe],o=Pe,r=null!=(i=e)&&Ae.call(i,o);try{e[Pe]=void 0}catch(r){return Oe.call(e)}return n=Oe.call(e),r?e[Pe]=t:delete e[Pe],n}:function(e){return Oe.call(e)},$e=String.prototype.valueOf;var Fe,Le=je();function Ie(e){return"object"==typeof e&&(e instanceof String||(Le?function(e){try{return $e.call(e),!0}catch(e){return!1}}(e):"[object String]"===Ve(e)))}function Re(e){return Ee(e)||Ie(e)}function Me(e){return Ee(e)&&e.length>0&&47===e.charCodeAt(0)}function Ze(e){var r,t;return!!Ee(e)&&(0!==(t=e.length)&&(47===(r=e.charCodeAt(0))||92===r||(r>=65&&r<=90||r>=97&&r<=122)&&t>2&&58===e.charCodeAt(1)&&(47===(r=e.charCodeAt(2))||92===r)))}return R(Re,"isPrimitive",Ee),R(Re,"isObject",Ie),R(Fe=Se?Ze:Me,"posix",Me),R(Fe,"win32",Ze),Fe}));
//# sourceMappingURL=browser.js.map
