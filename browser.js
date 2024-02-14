// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isAbsolutePath=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function s(e){return"string"==typeof e}var l=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,d=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,v=/^(\d+)e/,w=/\.0$/,y=/\.0*e/,b=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,y,"e"),n=p.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,d,"e+0$1"),n=p.call(n,g,"e-0$1"),e.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,v,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):u.call(n)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function T(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_(n):_(n)+e}var k=String.fromCharCode,E=isNaN,S=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,t,n,o,a,l,u,f,p;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",u=1,f=0;f<e.length;f++)if(s(n=e[f]))l+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,E(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):k(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=T(n.arg,n.width,n.padRight)),l+=n.arg||"",u+=1}return l}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function C(e){var r,t,n,i;for(t=[],i=0,n=O.exec(e);n;)(r=e.slice(i,O.lastIndex-n[0].length)).length&&t.push(r),t.push(A(n)),i=O.lastIndex,n=O.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function P(e){return"string"==typeof e}function V(e){var r,t;if(!P(e))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[C(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return j.apply(null,r)}var F=Object.prototype,$=F.toString,L=F.__defineGetter__,I=F.__defineSetter__,N=F.__lookupGetter__,R=F.__lookupSetter__;var M=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===$.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(N.call(e,r)||R.call(e,r)?(n=e.__proto__,e.__proto__=F,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&L&&L.call(e,r,t.get),a&&I&&I.call(e,r,t.set),e};function Z(e,r,t){M(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function D(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var G="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function W(){throw new Error("setTimeout has not been defined")}function z(){throw new Error("clearTimeout has not been defined")}var U=W,X=z;function q(e){if(U===setTimeout)return setTimeout(e,0);if((U===W||!U)&&setTimeout)return U=setTimeout,setTimeout(e,0);try{return U(e,0)}catch(r){try{return U.call(null,e,0)}catch(r){return U.call(this,e,0)}}}"function"==typeof G.setTimeout&&(U=setTimeout),"function"==typeof G.clearTimeout&&(X=clearTimeout);var B,H=[],J=!1,K=-1;function Q(){J&&B&&(J=!1,B.length?H=B.concat(H):K=-1,H.length&&Y())}function Y(){if(!J){var e=q(Q);J=!0;for(var r=H.length;r;){for(B=H,H=[];++K<r;)B&&B[K].run();K=-1,r=H.length}B=null,J=!1,function(e){if(X===clearTimeout)return clearTimeout(e);if((X===z||!X)&&clearTimeout)return X=clearTimeout,clearTimeout(e);try{X(e)}catch(r){try{return X.call(null,e)}catch(r){return X.call(this,e)}}}(e)}}function ee(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];H.push(new re(e,r)),1!==H.length||J||q(Y)}function re(e,r){this.fun=e,this.array=r}re.prototype.run=function(){this.fun.apply(null,this.array)};var te="browser",ne="browser",ie={},oe=[],ae={},ce={},se={};function le(){}var ue=le,fe=le,pe=le,de=le,ge=le,he=le,ve=le;function we(e){throw new Error("process.binding is not supported")}function ye(){return"/"}function be(e){throw new Error("process.chdir is not supported")}function me(){return 0}var _e=G.performance||{},Te=_e.now||_e.mozNow||_e.msNow||_e.oNow||_e.webkitNow||function(){return(new Date).getTime()};function ke(e){var r=.001*Te.call(_e),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var Ee=new Date;function Se(){return(new Date-Ee)/1e3}var xe={nextTick:ee,title:te,browser:true,env:ie,argv:oe,version:"",versions:ae,on:ue,addListener:fe,once:pe,off:de,removeListener:ge,removeAllListeners:he,emit:ve,binding:we,cwd:ye,chdir:be,umask:me,hrtime:ke,platform:ne,release:ce,config:se,uptime:Se},je="win32"===D(Object.freeze({__proto__:null,addListener:fe,argv:oe,binding:we,browser:true,chdir:be,config:se,cwd:ye,default:xe,emit:ve,env:ie,hrtime:ke,nextTick:ee,off:de,on:ue,once:pe,platform:ne,release:ce,removeAllListeners:he,removeListener:ge,title:te,umask:me,uptime:Se,version:"",versions:ae})).platform;function Oe(e){return"string"==typeof e}var Ae="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Ce(){return Ae&&"symbol"==typeof Symbol.toStringTag}var Pe=Object.prototype.toString;var Ve=Object.prototype.hasOwnProperty;var Fe="function"==typeof Symbol?Symbol:void 0,$e="function"==typeof Fe?Fe.toStringTag:"";var Le=Ce()?function(e){var r,t,n,i,o;if(null==e)return Pe.call(e);t=e[$e],o=$e,r=null!=(i=e)&&Ve.call(i,o);try{e[$e]=void 0}catch(r){return Pe.call(e)}return n=Pe.call(e),r?e[$e]=t:delete e[$e],n}:function(e){return Pe.call(e)},Ie=String.prototype.valueOf;var Ne,Re=Ce();function Me(e){return"object"==typeof e&&(e instanceof String||(Re?function(e){try{return Ie.call(e),!0}catch(e){return!1}}(e):"[object String]"===Le(e)))}function Ze(e){return Oe(e)||Me(e)}function De(e){return Oe(e)&&e.length>0&&47===e.charCodeAt(0)}function Ge(e){var r,t;return!!Oe(e)&&(0!==(t=e.length)&&(47===(r=e.charCodeAt(0))||92===r||(r>=65&&r<=90||r>=97&&r<=122)&&t>2&&58===e.charCodeAt(1)&&(47===(r=e.charCodeAt(2))||92===r)))}return Z(Ze,"isPrimitive",Oe),Z(Ze,"isObject",Me),Z(Ne=je?Ge:De,"posix",De),Z(Ne,"win32",Ge),Ne}));
//# sourceMappingURL=browser.js.map
