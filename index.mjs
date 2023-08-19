// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";function r(s){return e(s)&&s.length>0&&47===s.charCodeAt(0)}function n(s){var t,r;return!!e(s)&&(0!==(r=s.length)&&(47===(t=s.charCodeAt(0))||92===t||(t>=65&&t<=90||t>=97&&t<=122)&&r>2&&58===s.charCodeAt(1)&&(47===(t=s.charCodeAt(2))||92===t)))}var i;s(i=t?n:r,"posix",r),s(i,"win32",n);var d=i;export{d as default,r as posix,n as win32};
//# sourceMappingURL=index.mjs.map
