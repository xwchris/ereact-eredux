!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.EreactEredux=t():e.EreactEredux=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){(function(e){var n,o,r;function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(u,c){"object"==i(t)&&"object"==i(e)?e.exports=c():(o=[],void 0===(r="function"==typeof(n=c)?n.apply(t,o):n)||(e.exports=r))}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==i(e)&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.idiff=void 0;var o="function"==typeof Symbol&&"symbol"==i(Symbol.iterator)?function(e){return i(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":i(e)},r=n(1),u=n(2),c=t.idiff=function(e,t,n){var o=e;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&e.parentNode&&3===e.nodeType?e.nodeValue!==t&&(e.nodeValue=t):(o=document.createTextNode(t),e&&e.parentNode&&e.parentNode.replaceChild(o,e)),o;if("function"==typeof t.type)return(0,r.buildComponentFromVNode)(e,t,n);if((!e||e.nodeName.toLowerCase()!==t.type)&&(o=document.createElement(t.type),e)){for(;e.firstChild;)o.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(o,e)}return a(o,t.children,n),l(o,t.attributes),o},l=function(e,t){var n=e[u.ATTR_KEY]||{};for(name in n)t&&null!=t[name]||null==n[name]||f(e,name,void 0);for(name in t)name in n&&t[name]===("value"===name||"checked"===name?e[name]:n[name])||f(e,name,t[name])},a=function(e,t,n){for(var o=e.childNodes,r=t.length,i=0;i<r;i++){var u=o[i],l=t[i],a=c(u,l,n);u!==a&&(null==u?e.appendChild(a):e.replaceChild(a,u))}if(o.length>r)for(var f=o.length-1;f>=r;f--)e.removeChild(o[f])},f=function(e,t,n){if(e[u.ATTR_KEY]=e[u.ATTR_KEY]||{},null!=n&&(e[u.ATTR_KEY][t]=n),"className"===t&&(t="class"),"htmlFor"===t&&(t="for"),"key"===t||"children"===t||"innerHTML"===t);else if("ref"===t&&null!=n)"function"==typeof n?n(e):console.error("ref should be an function");else if("style"===t){if("object"===(void 0===n?"undefined":o(n)))for(var r in n)e.style[r]="number"==typeof n[r]?n[r]+"px":n[r];"string"!=typeof n&&null!=n||(e.style=n)}else if("dangerouslySetInnerHTML"===t)"object"===(void 0===n?"undefined":o(n))&&(e.innerHTML=n.__html);else if(t.startsWith("on")){var i=t.endsWith("Capture"),c=t.toLowerCase().substring(2);n?e.addEventListener(c,p,i):e.removeEventListener(c,p,i),(e._listener||(e._listener={}))[c]=n}else e.setAttribute(t,n)};function p(e){return this._listener[e.type]()}t.default=function(e,t,n,o){var r=c(e,t,o);return n&&r.parentNode!==n&&n.appendChild(r),r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Component=t.buildComponentFromVNode=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),r=n(2),i=n(6),u=[];function c(e,t){this._dirty=!1,this.props=e,this.state=this.state||{},this.context=t||{},this._renderCallbacks=[]}Object.assign(c.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=Object.assign({},this.state,e),t&&this._renderCallbacks.push(t),a(this,r.ASYNC_RENDER)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),a(this,r.FORCE_RENDER)},render:function(){}});var l=function(e,t,n){e.base?e.componentWillReceiveProps&&e.componentWillReceiveProps(t):e.componentWillMount&&e.componentWillMount(),e.prevProps||(e.prevProps=e.props),e.prevContext||(e.prevContext=e.context),e.props=t,a(e,r.SYNC_RENDER,n)},a=function e(t,n,c){var l=t.props,a=t.state,f=t.prevProps||l,p=t.prevState||a,s=t.prevContext||c,d=!!t.base,y=n===r.FORCE_RENDER,b=!1;if(n!==r.ASYNC_RENDER){if(t._dirty=!1,d&&(t.props=f,t.state=p,t.context=s,!y&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(l,a)?b=!0:t.componentWillUpdate&&t.componentWillUpdate(l,a),t.props=l,t.state=a,t.context=c),t.prevProps=t.prevState=t.prevContext=null,!b){var m=t.render();t.getChildContext&&(c=Object.assign({},c,t.getChildContext()));var v=(0,o.default)(t.base,m,null,c);t.base=v,!d&&t.componentDidMount?t.componentDidMount():d&&t.componentDidUpdate&&t.componentDidUpdate(f,p),v._component=t}for(;t._renderCallbacks.length;)t._renderCallbacks.pop().call(t)}else t._dirty||1!==u.push(t)||(t._dirty=!0,(0,i.defer)(function(){var t=u.pop();t._dirty&&e(t,r.SYNC_RENDER,c)}))};t.buildComponentFromVNode=function(e,t,n){var o=t.attributes,r=void 0;return null==e||null==e._component||e._component.constructor!==t.type?(r=function(e,t,n){var o=void 0;return e.prototype&&e.prototype.render?(o=new e(t,n),c.call(o,t,n)):(o=new c(t,n)).render=function(){return e(t,n)},o.constructor=e,o}(t.type,o,n),e&&e._component&&e._component.componentWillUnmount&&e._component.componentWillUnmount()):r=e._component,l(r,o,n),r.base},t.Component=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ATTR_KEY="@react/__attr_key__",t.SYNC_RENDER="@react/render_sync",t.ASYNC_RENDER="@react/render_async",t.FORCE_RENDER="@react/force_update"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Component=t.render=t.createElement=void 0;var o=u(n(4)),r=u(n(5)),i=n(1);function u(e){return e&&e.__esModule?e:{default:e}}t.createElement=o.default,t.render=r.default,t.Component=i.Component,t.default={createElement:o.default,render:r.default,Component:i.Component}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var n=arguments.length,o=Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];var i,u=Object.assign({},t),c=(i=[]).concat.apply(i,o),l=new function(){};return u.children=c,l.type=e,l.attributes=u,l.children=c,l}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(n(0));t.default=function(e,t){(0,o.default)(null,e,t,{})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=function(e){return e.slice().reverse().filter(function(t,n){return e.lastIndexOf(t)===n}).reverse()},t.defer=function(e){"function"==typeof Promise?Promise.resolve().then(e):setTimeout(e)}}])})}).call(this,n(2)(e))},function(e,t,n){"use strict";n.r(t),n.d(t,"Provider",function(){return y}),n.d(t,"connect",function(){return m});var o=n(0);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d="store",y=function(e){function t(e){var n;return u(this,t),(n=a(this,f(t).call(this,e)))[d]=n.props[d],n}return p(t,o["Component"]),l(t,[{key:"getChildContext",value:function(){return i({},d,this[d])}},{key:"render",value:function(){return this.props.children}}]),t}();function b(e){var t=e.mapStateToProps,n=e.mapDispatchToProps;return function(e){var c=e.displayName||e.name||"Component",s="Connect(".concat(c,")"),y=function(c){function s(e,t){var n;return u(this,s),(n=a(this,f(s).call(this,e,t)))[d]=n.context.store,n}return p(s,o["Component"]),l(s,[{key:"componentDidMount",value:function(){var e=this,n=this[d];"function"==typeof t&&n.subscribe(function(){e.forceUpdate()})}},{key:"getExtraProps",value:function(){var e=this[d],o={};if("function"==typeof t){var i=t(e.getState());"object"===r(i)&&null!==i&&(o=Object.assign({},o,i))}if("function"==typeof n){var u=n(e.dispatch);"object"===r(u)&&null!==u&&(o=Object.assign({},o,u))}return o}},{key:"render",value:function(){var t=this.props,n=this.getExtraProps();return Object(o.createElement)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){i(e,t,n[t])})}return e}({},t,n))}}]),s}();return y.displayName=s,y.WrappedComponent=e,y}}function m(e,t){return b({mapStateToProps:e,mapDispatchToProps:t})}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}])});