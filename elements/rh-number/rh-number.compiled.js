!function(e,t){if("function"==typeof define&&define.amd)define(["../rhelement/rhelement.compiled.js","../../numeral/min/numeral.min.js"],t);else if("undefined"!=typeof exports)t(require("../rhelement/rhelement.compiled.js"),require("../../numeral/min/numeral.min.js"));else{t(e.rhelementCompiled,e.numeralMin),e.rhNumber={}}}(this,function(e){"use strict";var t,n=(t=e)&&t.__esModule?t:{default:t};var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=document.createElement("template");o.innerHTML="\n<style>:host {\n  display: inline;\n  white-space: nowrap; }</style>\n<span></span>\n";var i={abbrev:"0a",ordinal:"0o",percent:"0%",bytes:"0[.][00] ib",e:"0[.00]e+0",thousands:"0,0[.00]"};numeral.locales.en.delimiters.thousands=" ";var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"rh-number",o))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),r(t,null,[{key:"observedAttributes",get:function(){return["number"]}}]),r(t,[{key:"connectedCallback",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var u=o.get;return void 0!==u?u.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this._determineFormat(),this._setInitialNumber()}},{key:"attributeChangedCallback",value:function(e,t,n){this["_"+e+"AttrUpdate"](t,n)}},{key:"_setInitialNumber",value:function(){var e=void 0===this.number?this.textContent:this.number;this.setAttribute("number",e)}},{key:"_determineFormat",value:function(){var e=this.getAttribute("type");e&&i[e]?this.setAttribute("format",i[e]):this.setAttribute("format",this.getAttribute("format")||"0")}},{key:"_numberAttrUpdate",value:function(e,t){this.shadowRoot.querySelector("span").textContent=numeral(t).format(this.getAttribute("format"))}}]),t}();window.customElements.define("rh-number",u)});