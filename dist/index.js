!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){},function(e,t,n){"use strict";window.onload=function(){const e=function(e,t){let n=e-.5+Math.random()*(t-e+1);return n=Math.round(n)},t=function(){const n=document.querySelector(".container__modal__start"),o=(document.querySelector(".container__modal__end"),document.querySelector(".modal_bg")),r=document.querySelectorAll(".color-item"),u=["Красный","Синий","Фиолетовый","Розовый","Черный","Оранжевый","Зеленый"],c=["#f44336","#2196F3","#9C27B0","#E91E63","#000","#FF9800","#4CAF50"],l=function(e){e.classList.add("hidden")};l(n),l(o),function(){for(let t=0;t<r.length;t++){let n=e(0,u.length-1);r[t].innerText=u[n]}}(),function(){for(let t=0;t<c.length;t++){let n=e(0,c.length-1);r[t].style.color=c[n]}}(),this.removeEventListener("click",t)};document.querySelector("#modal_start").addEventListener("click",t)}},function(e,t,n){n(1),e.exports=n(0)}]);
//# sourceMappingURL=index.js.map