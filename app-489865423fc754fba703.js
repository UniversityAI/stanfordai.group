webpackJsonp([0xd2a57dc1d883],{"./.cache/api-runner-browser.js":function(e,n,t){"use strict";function o(e,n,t){var o=s.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function a(e,n,t){return s.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=a;var s=[{plugin:t("./node_modules/gatsby-plugin-react-next/gatsby-browser.js"),options:{plugins:[]}},{plugin:t("./node_modules/gatsby-plugin-catch-links/gatsby-browser.js"),options:{plugins:[]}}]},"./.cache/async-requires.js":function(e,n,t){"use strict";var o;n.components={"component---src-templates-permalink-page-tsx":t("./node_modules/gatsby-module-loader/index.js?name=component---src-templates-permalink-page-tsx!./src/templates/PermalinkPage.tsx"),"component---src-pages-404-tsx":t("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-tsx!./src/pages/404.tsx"),"component---src-pages-index-tsx":t("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-tsx!./src/pages/index.tsx")},n.json=(o={"layout-index.json":t("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),"about.json":t("./node_modules/gatsby-module-loader/index.js?name=path---about!./.cache/json/about.json")},o["layout-index.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),o["constitution.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---constitution!./.cache/json/constitution.json"),o["layout-index.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),o["404.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json"),o["layout-index.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),o["index.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),o["layout-index.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),o["404-html.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json"),o),n.layouts={"component---src-layouts-index-tsx":t("./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-tsx!./.cache/layouts/index.js")}},"./.cache/component-renderer.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function s(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i=t("./node_modules/gatsby-plugin-react-next/node_modules/react/index.js"),c=o(i),l=t("./node_modules/prop-types/index.js"),d=o(l),p=t("./.cache/loader.js"),m=o(p),f=t("./.cache/emitter.js"),h=o(f),g=function(e){var n=e.children;return c.default.createElement("div",null,n())},j=function(e){function n(t){a(this,n);var o=s(this,e.call(this));return o.state={location:t.location,pageResources:m.default.getResourcesForPathname(t.location.pathname)},o}return r(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=m.default.getResourcesForPathname(e.location.pathname);t?this.setState({location:e.location,pageResources:t}):m.default.getResourcesForPathname(e.location.pathname,function(t){n.setState({location:e.location,pageResources:t})})}},n.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(n){n.page.path===m.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path))))},n.prototype.render=function(){return this.props.page?this.state.pageResources?(0,i.createElement)(this.state.pageResources.component,u({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:g,u({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(c.default.Component);j.propTypes={page:d.default.bool,layout:d.default.bool,location:d.default.object},n.default=j,e.exports=n.default},"./.cache/emitter.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t("./node_modules/mitt/dist/mitt.js"),s=o(a),r=(0,s.default)();e.exports=r},"./.cache/find-page.js":function(e,n,t){"use strict";var o=t("./node_modules/react-router-dom/index.js"),a={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var s=t.slice(n.length);if(s.split("#").length>1&&(s=s.split("#").slice(0,-1).join("")),s.split("?").length>1&&(s=s.split("?").slice(0,-1).join("")),a[s])return a[s];var r=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(s,{path:e.path})||(0,o.matchPath)(s,{path:e.matchPath}))return r=e,a[s]=e,!0}else if((0,o.matchPath)(s,{path:e.path,exact:!0}))return r=e,a[s]=e,!0;return!1}),r}}},"./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0xa2868bfb69fc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0xe70826b53c04,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---about!./.cache/json/about.json":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0xf927f8900006,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/about.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---constitution!./.cache/json/constitution.json":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(30168729005121,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/constitution.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/layout-index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-tsx!./.cache/layouts/index.js":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(22676092666560,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/asl/Desktop/saig-dev/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/asl/Desktop/saig-dev/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/asl/Desktop/saig-dev/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/asl/Desktop/saig-dev/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/asl/Desktop/saig-dev/node_modules/babel-preset-stage-0/lib/index.js","/Users/asl/Desktop/saig-dev/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js')})})}},"./.cache/loader.js":function(e,n,t){(function(n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t("./node_modules/gatsby-plugin-react-next/node_modules/react/index.js"),s=(o(a),t("./.cache/find-page.js")),r=o(s),u=t("./.cache/emitter.js"),i=o(u),c=void 0,l={},d={},p={},m={},f={},h=[],g=[],j={},y=[],x={},b=function(e){return e&&e.default||e},_=void 0,v=!0;_=t("./.cache/prefetcher.js")({getNextQueuedResources:function(){return y.slice(-1)[0]},createResourceDownload:function(e){P(e,function(){y=y.filter(function(n){return n!==e}),_.onResourcedFinished(e)})}}),i.default.on("onPreLoadPageResources",function(e){_.onPreLoadPageResources(e)}),i.default.on("onPostLoadPageResources",function(e){_.onPostLoadPageResources(e)});var R=function(e,n){return x[e]>x[n]?1:x[e]<x[n]?-1:0},w=function(e,n){return j[e]>j[n]?1:j[e]<j[n]?-1:0},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(m[e])n.nextTick(function(){t(null,m[e])});else{var o="component---"===e.slice(0,12)?d.components[e]||d.layouts[e]:d.json[e];o(function(n,o){m[e]=o,t(n,o)})}},k=function(e,t){f[e]?n.nextTick(function(){t(null,f[e])}):P(e,function(n,o){if(n)t(n);else{var a=b(o());f[e]=a,t(n,a)}})},E=1,O={empty:function(){g=[],j={},x={},y=[],h=[]},addPagesArray:function(e){h=e;var n="";n="",c=(0,r.default)(e,n)},addDevRequires:function(e){l=e},addProdRequires:function(e){d=e},dequeue:function(e){return g.pop()},enqueue:function(e){if(!h.some(function(n){return n.path===e}))return!1;var n=1/E;E+=1,j[e]?j[e]+=1:j[e]=1,O.has(e)||g.unshift(e),g.sort(w);var t=c(e);return t.jsonName&&(x[t.jsonName]?x[t.jsonName]+=1+n:x[t.jsonName]=1+n,y.indexOf(t.jsonName)!==-1||m[t.jsonName]||y.unshift(t.jsonName)),t.componentChunkName&&(x[t.componentChunkName]?x[t.componentChunkName]+=1+n:x[t.componentChunkName]=1+n,y.indexOf(t.componentChunkName)!==-1||m[t.jsonName]||y.unshift(t.componentChunkName)),y.sort(R),_.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:y,resourcesCount:x}},getPages:function(){return{pathArray:g,pathCount:j}},getPage:function(e){return c(e)},has:function(e){return g.some(function(n){return n===e})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};v&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var a;if(t){if(o>=n.length)break;a=n[o++]}else{if(o=n.next(),o.done)break;a=o.value}var s=a;s.unregister()}window.location.reload()})),v=!1;var o=c(e);if(!o)return void console.log("A page wasn't found for \""+e+'"');if(e=o.path,p[e])return n.nextTick(function(){t(p[e]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:p[e]})}),p[e];i.default.emit("onPreLoadPageResources",{path:e});var a=void 0,s=void 0,r=void 0,u=function(){if(a&&s&&(!o.layoutComponentChunkName||r)){p[e]={component:a,json:s,layout:r};var n={component:a,json:s,layout:r};t(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return k(o.componentChunkName,function(e,n){e&&console.log("Loading the component for "+o.path+" failed"),a=n,u()}),k(o.jsonName,function(e,n){e&&console.log("Loading the JSON for "+o.path+" failed"),s=n,u()}),void(o.layoutComponentChunkName&&k(o.layoutComponentChunkName,function(e,n){e&&console.log("Loading the Layout for "+o.path+" failed"),r=n,u()}))},peek:function(e){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(e){return g.length-g.indexOf(e)-1}};e.exports=O}).call(n,t("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,n){e.exports=[{componentChunkName:"component---src-templates-permalink-page-tsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"about.json",path:"/about"},{componentChunkName:"component---src-templates-permalink-page-tsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"constitution.json",path:"/constitution"},{componentChunkName:"component---src-pages-404-tsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-tsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-tsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],a=[],s=function(){var e=n();e&&(a.push(e),t(e))},r=function(e){switch(e.type){case"RESOURCE_FINISHED":a=a.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===o.length&&s()},0)};return{onResourcedFinished:function(e){r({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:a}},empty:function(){o=[],a=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t("./.cache/api-runner-browser.js"),r=t("./node_modules/gatsby-plugin-react-next/node_modules/react/index.js"),u=o(r),i=t("./node_modules/gatsby-plugin-react-next/node_modules/react-dom/index.js"),c=o(i),l=t("./node_modules/react-router-dom/index.js"),d=t("./node_modules/gatsby-react-router-scroll/index.js"),p=t("./node_modules/history/createBrowserHistory.js"),m=o(p),f=t("./node_modules/domready/ready.js"),h=o(f),g=t("./.cache/emitter.js"),j=o(g),y=t("./.cache/pages.json"),x=o(y),b=t("./.cache/redirects.json"),_=o(b),v=t("./.cache/component-renderer.js"),R=o(v),w=t("./.cache/async-requires.js"),P=o(w),k=t("./.cache/loader.js"),E=o(k);t("./node_modules/core-js/modules/es6.promise.js"),window.___emitter=j.default,E.default.addPagesArray(x.default),E.default.addProdRequires(P.default),window.asyncRequires=P.default,window.___loader=E.default,window.matchPath=l.matchPath;var O=(0,m.default)(),N=_.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),C=function(e){var n=N[e];if(null!=n){var t=E.default.getResourcesForPathname(e);return null!=t&&console.error('The route "'+e+'" matches both a page and a redirect; this is probably not intentional.'),O.replace(n.toPath),!0}return!1};C(window.location.pathname),(0,s.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,n){C(e.pathname)||(0,s.apiRunner)("onRouteUpdate",{location:e,action:n})}))}function n(e,n){var t=n.location.pathname,o=(0,s.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var a=e.location.pathname;if(a===t)return!1}return!0}(0,s.apiRunner)("registerServiceWorker").length>0&&t("./.cache/register-service-worker.js");var o=function(e){function n(o){o.page.path===E.default.getPage(e).path&&(j.default.off("onPostLoadPageResources",n),clearTimeout(t),window.___history.push(e))}if(window.location.pathname!==e){var t=setTimeout(function(){j.default.off("onPostLoadPageResources",n),j.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);E.default.getResourcesForPathname(e)?(clearTimeout(t),window.___history.push(e)):j.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,s.apiRunner)("onRouteUpdate",{location:O.location,action:O.action});var i=(0,s.apiRunner)("replaceRouterComponent",{history:O})[0],p=function(e){var n=e.children;return u.default.createElement(l.Router,{history:O},n)};E.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,r.createElement)(i?i:p,null,(0,r.createElement)(d.ScrollContext,{shouldUpdateScroll:n},(0,r.createElement)((0,l.withRouter)(R.default),{layout:!0,children:function(n){return(0,r.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return E.default.getPage(o.location.pathname)?(0,r.createElement)(R.default,a({page:!0},o)):(0,r.createElement)(R.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},o=(0,s.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,h.default)(function(){return c.default.render(u.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,s.apiRunner)("onInitialClientRender")})})})})},"./.cache/redirects.json":function(e,n){e.exports=[]},"./.cache/register-service-worker.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t("./.cache/emitter.js"),s=o(a),r="/";r="/","serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),s.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/domready/ready.js":function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,a="DOMContentLoaded",s=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return s||t.addEventListener(a,e=function(){for(t.removeEventListener(a,e),s=1;e=n.shift();)e()}),function(e){s?setTimeout(e,0):n.push(e)}})},"./node_modules/gatsby-module-loader/patch.js":function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),a=t.e,s=t.s;t.e=function(o,r){var u=!1,i=!0,c=function(e){r&&(r(t,e),r=null)};return!s&&n&&n[o]?void c(!0):(a(o,function(){u||(u=!0,i?setTimeout(function(){c()}):c())}),void(u||(i=!1,e(function(){u||(u=!0,s?s[o]=void 0:(n||(n={}),n[o]=!0),c(!0))}))))}}o()},"./node_modules/gatsby-plugin-catch-links/catch-links.js":function(e,n){"use strict";e.exports=function(e,n){e.addEventListener("click",function(e){if(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)return!0;for(var t=null,o=e.target;o.parentNode;o=o.parentNode)if("A"===o.nodeName){t=o;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.target.hash)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var a=document.createElement("a");a.href=t.href;var s=document.createElement("a");return s.href=window.location.href,a.host!==s.host||(e.preventDefault(),n(t.getAttribute("href")),!1)})}},"./node_modules/gatsby-plugin-catch-links/gatsby-browser.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t("./node_modules/gatsby-link/index.js"),s=t("./node_modules/gatsby-plugin-catch-links/catch-links.js"),r=o(s);(0,r.default)(window,function(e){(0,a.navigateTo)(e)})},"./node_modules/gatsby-plugin-react-next/gatsby-browser.js":function(e,n,t){"use strict";t("./node_modules/core-js/es6/map.js"),t("./node_modules/core-js/es6/set.js")},"./node_modules/hoist-non-react-statics/index.js":function(e,n){"use strict";var t={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,s=Object.getOwnPropertyNames,r=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,c=i&&i(Object);e.exports=function e(n,l,d){if("string"!=typeof l){if(c){var p=i(l);p&&p!==c&&e(n,p,d)}var m=s(l);r&&(m=m.concat(r(l)));for(var f=0;f<m.length;++f){var h=m[f];if(!(t[h]||o[h]||d&&d[h])){var g=u(l,h);try{a(n,h,g)}catch(e){}}}return n}return n}},"./node_modules/mitt/dist/mitt.js":function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).map(function(e){e(t)}),(e["*"]||[]).map(function(e){e(n,t)})}}}e.exports=t},"./node_modules/process/browser.js":function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function s(e){if(d===clearTimeout)return clearTimeout(e);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(n){try{return d.call(null,e)}catch(n){return d.call(this,e)}}}function r(){h&&m&&(h=!1,m.length?f=m.concat(f):g=-1,f.length&&u())}function u(){if(!h){var e=a(r);h=!0;for(var n=f.length;n;){for(m=f,f=[];++g<n;)m&&m[g].run();g=-1,n=f.length}m=null,h=!1,s(e)}}function i(e,n){this.fun=e,this.array=n}function c(){}var l,d,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(e){d=o}}();var m,f=[],h=!1,g=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];f.push(new i(e,n)),1!==f.length||h||a(u)},i.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-tsx!./src/pages/404.tsx":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0xa25129398ba8,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/asl/Desktop/saig-dev/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js"]}!./node_modules/ts-loader/index.js?{"compilerOptions":{"target":"esnext","experimentalDecorators":true,"jsx":"react","module":"commonjs"},"transpileOnly":true}!./src/pages/404.tsx')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-tsx!./src/pages/index.tsx":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0xc956abe28b23,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/asl/Desktop/saig-dev/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js"]}!./node_modules/ts-loader/index.js?{"compilerOptions":{"target":"esnext","experimentalDecorators":true,"jsx":"react","module":"commonjs"},"transpileOnly":true}!./src/pages/index.tsx')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-templates-permalink-page-tsx!./src/templates/PermalinkPage.tsx":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0x5c507accfa2c,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/asl/Desktop/saig-dev/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js"]}!./node_modules/ts-loader/index.js?{"compilerOptions":{"target":"esnext","experimentalDecorators":true,"jsx":"react","module":"commonjs"},"transpileOnly":true}!./src/templates/PermalinkPage.tsx')})})}}});
//# sourceMappingURL=app-489865423fc754fba703.js.map