!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=5)}([function(e,n){},function(e,n,t){"use strict";var r=Object.prototype.hasOwnProperty;function o(e,n){return Array.isArray(e)?function(e,n){for(var t,r="",i="",l=Array.isArray(n),a=0;a<e.length;a++)(t=o(e[a]))&&(l&&n[a]&&(t=c(t)),r=r+i+t,i=" ");return r}(e,n):e&&"object"==typeof e?function(e){var n="",t="";for(var o in e)o&&e[o]&&r.call(e,o)&&(n=n+t+o,t=" ");return n}(e):e||""}function i(e){if(!e)return"";if("object"==typeof e){var n="";for(var t in e)r.call(e,t)&&(n=n+t+":"+e[t]+";");return n}return e+""}function l(e,n,t,r){return!1!==n&&null!=n&&(n||"class"!==e&&"style"!==e)?!0===n?" "+(r?e:e+'="'+e+'"'):("function"==typeof n.toJSON&&(n=n.toJSON()),"string"==typeof n||(n=JSON.stringify(n),t||-1===n.indexOf('"'))?(t&&(n=c(n))," "+e+'="'+n+'"'):" "+e+"='"+n.replace(/'/g,"&#39;")+"'"):""}n.merge=function e(n,t){if(1===arguments.length){for(var r=n[0],o=1;o<n.length;o++)r=e(r,n[o]);return r}for(var l in t)if("class"===l){var a=n[l]||[];n[l]=(Array.isArray(a)?a:[a]).concat(t[l]||[])}else if("style"===l){var a=i(n[l]);a=a&&";"!==a[a.length-1]?a+";":a;var c=i(t[l]);c=c&&";"!==c[c.length-1]?c+";":c,n[l]=a+c}else n[l]=t[l];return n},n.classes=o,n.style=i,n.attr=l,n.attrs=function(e,n){var t="";for(var a in e)if(r.call(e,a)){var c=e[a];if("class"===a){c=o(c),t=l(a,c,!1,n)+t;continue}"style"===a&&(c=i(c)),t+=l(a,c,!1,n)}return t};var a=/["&<>]/;function c(e){var n=""+e,t=a.exec(n);if(!t)return e;var r,o,i,l="";for(r=t.index,o=0;r<n.length;r++){switch(n.charCodeAt(r)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue}o!==r&&(l+=n.substring(o,r)),o=r+1,l+=i}return o!==r?l+n.substring(o,r):l}n.escape=c,n.rethrow=function e(n,r,o,i){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&r||i))throw n.message+=" on line "+o,n;try{i=i||t(0).readFileSync(r,"utf8")}catch(t){e(n,null,o)}var l=3,a=i.split("\n"),c=Math.max(o-l,0),u=Math.min(a.length,o+l);var l=a.slice(c,u).map(function(e,n){var t=n+c+1;return(t==o?"  > ":"    ")+t+"| "+e}).join("\n");n.path=r;n.message=(r||"Pug")+":"+o+"\n"+l+"\n\n"+n.message;throw n}},function(e,n,t){t(1);e.exports=function(e){var n="";return n+='<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,400,500,700,900" rel="stylesheet">\n    <script src="index.js"><\/script>\n    <link href="css/index.css" rel="stylesheet">\n    <meta name="viewport" content="initial-scale=1.0, width=device-width">\n    <title>Webpack Шаблон</title>\n  </head>\n  <body>\n    <h1>Webpack Шаблон</h1>\n    <ul>\n      <li>Pug</li>\n      <li>Sass</li>\n      <li>Babel</li>\n    </ul>\n  </body>\n</html>'}},function(e,n){},function(e,n,t){"use strict";window.onload=function(){const e=function(e,n){let t=e-.5+Math.random()*(n-e+1);return t=Math.round(t)},n=function(e,n,t){let r=document.createElement("div");r.classList.add(n),r.innerHTML=e,t.appendChild(r)},t=function(){let e=document.querySelector(".score");+this.textContent===c?r(e):o(e),this.removeEventListener("click",t),l()},r=function(e){s++,function(e){f+=100,e.innerHTML="Score: "+f}(e),i()},o=function(e){s>1&&s--,function(e){f>=100?f-=100:f=0,e.innerHTML="Score: "+f}(e),i()},i=function(){!function(e,n){n<4?(e.countColumns=3,e.countLines=2):n<6?(e.countColumns=4,e.countLines=3):(e.countColumns=4,e.countLines=4)}(m,s),function(n,t){for(let r=t.countLines*t.countColumns-1;r>=0;r--)n[r]=s<=2?e(10,99):s<=4?e(100,999):e(1e3,9999)}(u,m),c=u[Math.round(Math.random()*(m.countColumns*m.countLines-1))],function(e,t,r){document.querySelector(".container__work__inner").innerHTML="",function(e){document.querySelector(".current_num").innerHTML=e}(r);let o=0;for(let r=0;r<e.countLines;r++){let r=document.getElementsByClassName("container__work__inner"),i=document.createElement("div");i.classList.add("item__row"),r[0].appendChild(i);for(let r=0;r<e.countColumns;r++)n(t[o++],"item__num",i)}}(m,u,c);let t=document.querySelectorAll(".item__num");t.forEach(function(e,n,t){s<=3?(e.style.fontSize="40px",e.style.padding="10px 0"):4===s?(e.style.fontSize="30px",e.style.padding="12px 0"):5===s?(e.style.fontSize="30px",e.style.padding="15px 0"):(e.style.fontSize="26px",e.style.padding="12px 0")}),function(){const n=["scale_element .5s infinite alternate ease-in-out","color_element_blue .5s infinite alternate ease-in-out","color_element_purple .5s infinite alternate ease-in-out","color_element_green .5s infinite alternate ease-in-out","color_element_black .5s infinite alternate ease-in-out","scale_element .5s infinite alternate ease-in-out","scale_element .5s infinite alternate ease-in-out","scale_element .5s infinite alternate ease-in-out","scale_element .5s infinite alternate ease-in-out","rotate_element .25s infinite alternate ease-in-out"],t=["#2196F3","#009688","#673AB7","#333"];document.querySelectorAll(".item__num").forEach(function(r,o,i){switch(e(1,7)){case 1:r.style.animation=n[0];break;case 2:{let t=e(1,4);r.style.animation=n[t];break}case 3:{let o=e(5,8);r.style.animation=n[o];let i=e(0,3);r.style.background=t[i],r.style.color="#fff";break}case 4:{r.style.animation=n[9];let o=e(0,3);r.style.background=t[o],r.style.color="#fff";break}}})}()},l=function(){let e=document.getElementsByClassName("item__num");for(let n=0;n<e.length;n++)e[n].addEventListener("click",t)},a=function(){f=0,document.querySelector(".score").innerHTML="Score: "+f,s=1,m.countColumns=0,m.countLines=0};let c,u=[],s=1,f=0,m={countColumns:0,countLines:0};i(),l(),function(){let e=function(e){let n=void 0===typeof e?0:e;return function(t){return 0===n&&((t||function(){})(),n=e),--n}}(45),n=document.querySelector(".timer");setInterval(function(){n.innerHTML="Timer: "+e(a)},1e3)}()}},function(e,n,t){t(4),t(3),e.exports=t(2)}]);
//# sourceMappingURL=index.js.map