webpackJsonp([35783957827783],{"./node_modules/hoist-non-react-statics/index.js":function(e,t){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l=Object.defineProperty,N=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,n=Object.getOwnPropertyDescriptor,r=Object.getPrototypeOf,M=r&&r(Object);e.exports=function e(t,o,u){if("string"!=typeof o){if(M){var i=r(o);i&&i!==M&&e(t,i,u)}var D=N(o);c&&(D=D.concat(c(o)));for(var g=0;g<D.length;++g){var j=D[g];if(!(a[j]||s[j]||u&&u[j])){var d=n(o,j);try{l(t,j,d)}catch(e){}}}return t}return t}},"./node_modules/object-assign/index.js":function(e,t){"use strict";function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function s(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;var s=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==s.join(""))return!1;var l={};return"abcdefghijklmnopqrst".split("").forEach(function(e){l[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},l)).join("")}catch(e){return!1}}var l=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;e.exports=s()?Object.assign:function(e,t){for(var s,n,r=a(e),M=1;M<arguments.length;M++){s=Object(arguments[M]);for(var o in s)N.call(s,o)&&(r[o]=s[o]);if(l){n=l(s);for(var u=0;u<n.length;u++)c.call(s,n[u])&&(r[n[u]]=s[n[u]])}}return r}},"./src/layouts/images/logo-end.svg":function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSI0NHB4IiB2aWV3Qm94PSIwIDAgMjEgNDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ2LjIgKDQ0NDk2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZSBDb3B5IDQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4zMDAwMDAwMTIiPgogICAgICAgIDxnIGlkPSJGb290ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NC4wMDAwMDAsIC0zMy4wMDAwMDApIiBmaWxsPSIjNDMyNjQ4Ij4KICAgICAgICAgICAgPHBhdGggZD0iTTg1LDMzIEw4NSwzNC43MjU1MDUyIEw3Ny41NTMxOTc3LDM0LjcyNTUwNTIgQzc5Ljg2MTM1MTUsMzMuNzUxNDc1NiA4Mi4zNjk1NDE0LDMzLjE1MDcwNDIgODUsMzMgWiBNNzQuMjAxMTQyMiwzNi40ODg1MDQ4IEw4NSwzNi40ODg1MDQ4IEw4NSwzOC4yNTE1MDQzIEw3MS44MTA0NTQ5LDM4LjI1MTUwNDMgQzcyLjU2NTM2OTMsMzcuNjEzMjU3MyA3My4zNjM5NDM1LDM3LjAyMzkzMyA3NC4yMDExNDIyLDM2LjQ4ODUwNDggWiBNNjkuOTUyNTcwOSw0MC4wMTQ1MDM5IEw4NSw0MC4wMTQ1MDM5IEw4NSw0MS43Nzc1MDM0IEw2OC40NjA4NjU5LDQxLjc3NzUwMzQgQzY4LjkyNzI1ODQsNDEuMTY0MjM0NSA2OS40MjUyOTEzLDQwLjU3NTc3OTkgNjkuOTUyNTcwOSw0MC4wMTQ1MDM5IFogTTY3LjI1MDEzNjgsNDMuNTQwNTAzIEw4NSw0My41NDA1MDMgTDg1LDQ1LjMwMzUwMjUgTDY2LjI3MDMzNDgsNDUuMzAzNTAyNSBDNjYuNTcwMzE5Myw0NC42OTk3ODAyIDY2Ljg5NzQ0MzcsNDQuMTExNTk2NCA2Ny4yNTAxMzY4LDQzLjU0MDUwMyBaIE02NS40ODk1NjIxLDQ3LjA2NjUwMjEgTDg1LDQ3LjA2NjUwMjEgTDg1LDQ4LjgyOTUwMTYgTDY0Ljg4NjQ1ODcsNDguODI5NTAxNiBDNjUuMDYyODc0NSw0OC4yMzA5MTk2IDY1LjI2NDMwNjQsNDcuNjQyODYwNSA2NS40ODk1NjIxLDQ3LjA2NjUwMjEgWiBNNjQuNDQ2MzMwOCw1MC41OTI1MDExIEw4NSw1MC41OTI1MDExIEw4NSw1Mi4zNTU1MDA3IEw2NC4xNTg5OTg4LDUyLjM1NTUwMDcgQzY0LjIzMTA3ODIsNTEuNzYwMjE5IDY0LjMyNzE4NCw1MS4xNzIyMjgyIDY0LjQ0NjMzMDgsNTAuNTkyNTAxMSBaIE02NC4wMTc1MjM4LDU0LjExODUwMDIgTDg1LDU0LjExODUwMDIgTDg1LDU1Ljg4MTQ5OTggTDY0LjAxNzUyMzgsNTUuODgxNDk5OCBDNjQuMDA1ODc3OCw1NS41ODkwOTg5IDY0LDU1LjI5NTIyNzQgNjQsNTUgQzY0LDU0LjcwNDc3MjYgNjQuMDA1ODc3OCw1NC40MTA5MDExIDY0LjAxNzUyNCw1NC4xMTg0OTM0IFogTTY0LjE1ODk5ODgsNTcuNjQ0NDk5MyBMODUsNTcuNjQ0NDk5MyBMODUsNTkuNDA3NDk4OSBMNjQuNDQ2MzMwOCw1OS40MDc0OTg5IEM2NC4zMjcxODQsNTguODI3NzcxOCA2NC4yMzEwNzgyLDU4LjIzOTc4MSA2NC4xNTg5OTg4LDU3LjY0NDQ5OTMgWiBNNjQuODg2NDU4Nyw2MS4xNzA0OTg0IEw4NSw2MS4xNzA0OTg0IEw4NSw2Mi45MzM0OTc5IEw2NS40ODk1NjIxLDYyLjkzMzQ5NzkgQzY1LjI2NDMwNjQsNjIuMzU3MTM5NSA2NS4wNjI4NzQ1LDYxLjc2OTA4MDQgNjQuODg2NDU4Nyw2MS4xNzA0OTg0IFogTTY2LjI3MDMzNDgsNjQuNjk2NDk3NSBMODUsNjQuNjk2NDk3NSBMODUsNjYuNDU5NDk3IEw2Ny4yNTAxMzY4LDY2LjQ1OTQ5NyBDNjYuODk3NDQzNyw2NS44ODg0MDM2IDY2LjU3MDMxOTMsNjUuMzAwMjE5OCA2Ni4yNzAzMzQ4LDY0LjY5NjQ5NzUgWiBNNjguNDYwODY1OSw2OC4yMjI0OTY2IEw4NSw2OC4yMjI0OTY2IEw4NSw2OS45ODU0OTYxIEw2OS45NTI1NzA5LDY5Ljk4NTQ5NjEgQzY5LjQyNTI5MTMsNjkuNDI0MjIwMSA2OC45MjcyNTg0LDY4LjgzNTc2NTUgNjguNDYwODY1OSw2OC4yMjI0OTY2IFogTTcxLjgxMDQ1NDksNzEuNzQ4NDk1NyBMODUsNzEuNzQ4NDk1NyBMODUsNzMuNTExNDk1MiBMNzQuMjAxMTQyMiw3My41MTE0OTUyIEM3My4zNjM5NDM1LDcyLjk3NjA2NyA3Mi41NjUzNjkzLDcyLjM4Njc0MjcgNzEuODEwNDU0OSw3MS43NDg0OTU3IFogTTc3LjU1MzE5NzcsNzUuMjc0NDk0OCBMODUsNzUuMjc0NDk0OCBMODUsNzcgQzgyLjM2OTU0MTQsNzYuODQ5Mjk1OCA3OS44NjEzNTE1LDc2LjI0ODUyNDQgNzcuNTUzMTk3Nyw3NS4yNzQ0OTQ4IFoiIGlkPSJDb21iaW5lZC1TaGFwZS1Db3B5LTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc0LjUwMDAwMCwgNTUuMDAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC03NC41MDAwMDAsIC01NS4wMDAwMDApICI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},"./src/layouts/images/logo.svg":function(e,t,a){e.exports=a.p+"static/logo.35d93fe0.svg"},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/asl/Desktop/saig/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/asl/Desktop/saig/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/asl/Desktop/saig/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/asl/Desktop/saig/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/asl/Desktop/saig/node_modules/babel-preset-stage-0/lib/index.js","/Users/asl/Desktop/saig/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js':function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a("./node_modules/gatsby-plugin-react-next/node_modules/react/index.js"),N=s(l),c=a("./node_modules/gatsby-link/index.js"),n=s(c),r=a("./src/layouts/images/logo.svg"),M=s(r),o=a("./src/layouts/images/logo-end.svg"),u=s(o);a("./src/pages/index.scss");var i=function(){return N.default.createElement("div",{className:"page"},N.default.createElement("header",{className:"header__container"},N.default.createElement("div",{className:"header_dashes"}),N.default.createElement("div",{className:"header__top"},N.default.createElement(n.default,{className:"header__logo-link",to:"/"},N.default.createElement("img",{className:"header__logo",src:M.default,alt:"Stanford AI Group"}))),N.default.createElement("hr",{className:"header__divider"}),N.default.createElement("h1",{className:"header__hero"},"A community to engage with artificial intelligence, ",N.default.createElement("span",{className:"italics"},"right now"),".")),N.default.createElement("div",{className:"messages__container"},N.default.createElement("div",{className:"messages__avatar-title"},"Junwon Park  ·  President of SAIG"),N.default.createElement("div",{className:"messages__avatar"}),N.default.createElement("div",{className:"messages__message messages__message-1"},N.default.createElement("p",null,N.default.createElement("strong",null,"SAIG")," is a student group which wants to be a part of shaping the future of artificial intelligence. We care about the tech and the ethics involved.")),N.default.createElement("a",{href:"https://join.slack.com/t/stanfordaigroup/shared_invite/enQtMTkyNDIyNjkzMzQ5LTMxMzJlYjY5MGJlOTA5OGNjOWQ5NDMyMGUzNGQ5NmE3MzdmYWYzMDU4YTViMjZkODlhNmI0MGRmNGM5YmMwMDg",className:"messages__message messages__message-slack"},N.default.createElement("h3",null,"Join us on Slack"),N.default.createElement("p",null,"Open to all."))),N.default.createElement("div",{className:"content__container"},N.default.createElement("div",{className:"bullets__container"},N.default.createElement("div",{className:"bullets__bullet bullets__bullet-projects"},N.default.createElement("div",{className:"bullets__bullet-icon"}),N.default.createElement("div",{className:"bullets__bullet-content"},N.default.createElement("h3",null,"AI Projects"),N.default.createElement("p",null,"From chatbots to cutting-edge work in AI to machine learning—we’re interested in it all."))),N.default.createElement("div",{className:"bullets__bullet bullets__bullet-speakers"},N.default.createElement("div",{className:"bullets__bullet-icon"}),N.default.createElement("div",{className:"bullets__bullet-content"},N.default.createElement("h3",null,"World Class Speakers"),N.default.createElement("p",null,"We host technical lectures for novices and experts alike."))),N.default.createElement("div",{className:"bullets__bullet bullets__bullet-tutorials"},N.default.createElement("div",{className:"bullets__bullet-icon"}),N.default.createElement("div",{className:"bullets__bullet-content"},N.default.createElement("h3",null,"Technical Tutorials"),N.default.createElement("p",null,"We host lectures and workshops for novices and experts alike."))))),N.default.createElement("footer",{className:"footer__container"},N.default.createElement("div",{className:"footer"},N.default.createElement("img",{className:"footer__logo-end",src:u.default}),N.default.createElement("h3",{className:"footer__copyright"},"© SAIG 2017."),N.default.createElement("p",{className:"footer__text"},"Student AI Group is a student organization at Stanford University."))))};t.default=i,e.exports=t.default},"./src/pages/index.scss":function(e,t){}});
//# sourceMappingURL=component---src-pages-index-js-81ce13ede6e79eb838b4.js.map