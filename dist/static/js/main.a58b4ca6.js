!function(){"use strict";var t,e={1275:function(t,e,r){var n,o=r(758),i=r(9576);r(9208),r(2944),r(2078),r(9433),r(5191),r(767),r(5803),r(2980),r(1034),r(7246),r(6389),r(7020),r(353),r(1413),r(6527),r(866),r(4010),r(7278),r(5328);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,a(n.key),n)}}function a(t){var e=function(t,e){if("object"!=u(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==u(e)?e:e+""}function c(t,e,r){return e=s(e),function(t,e){if(e&&("object"==u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,f()?Reflect.construct(e,r||[],s(t).constructor):e.apply(t,r))}function f(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(f=function(){return!!t})()}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}var b,m=(b=n=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(e,t),r=e,(n=[{key:"render",value:function(){return o.createElement("h2",null,"我是类组件---",this.age)}}])&&l(r.prototype,n),i&&l(r,i),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n,i}(o.PureComponent),void(b.prototype.age=111)||n),v=m,y=r.p+"static/images/22kb.342c2fa0.png";var h=function(){return o.createElement("h3",null,"我是Demo1组件")};function w(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,l=[],a=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(l.push(n.value),l.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return d(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var T=function(){var t=w((0,o.useState)(""),2),e=t[0],r=t[1];return o.createElement(o.Fragment,null,o.createElement("h2",null,"webpack5-react-ts修改1111"),o.createElement(v,null),o.createElement("img",{src:"data:image/png;base64,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",alt:"小于10kb的图片"}),o.createElement("img",{src:y,alt:"大于于10kb的图片"}),o.createElement("div",{className:"smallImg"})," ",o.createElement("div",{className:"bigImg"})," ",o.createElement("h2",null,"组件"),o.createElement("p",null,"受控组件"),o.createElement("input",{type:"text",value:e,onChange:function(t){r(t.target.value)}}),o.createElement("br",null),o.createElement("p",null,"非受控组件"),o.createElement("input",{type:"text"}),o.createElement(h,null))},j=document.getElementById("root");j&&(0,i.H)(j).render(o.createElement(T,null))}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t].call(i.exports,i,i.exports,n),i.exports}n.m=e,t=[],n.O=function(e,r,o,i){if(!r){var u=1/0;for(f=0;f<t.length;f++){r=t[f][0],o=t[f][1],i=t[f][2];for(var l=!0,a=0;a<r.length;a++)(!1&i||u>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[a])}))?r.splice(a--,1):(l=!1,i<u&&(u=i));if(l){t.splice(f--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[r,o,i]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",function(){var t={792:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,u=r[0],l=r[1],a=r[2],c=0;if(u.some((function(e){return 0!==t[e]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(a)var f=a(n)}for(e&&e(r);c<u.length;c++)i=u[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(f)},r=self.webpackChunksub_webpack_react_micro_app=self.webpackChunksub_webpack_react_micro_app||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var o=n.O(void 0,[96],(function(){return n(1275)}));o=n.O(o)}();