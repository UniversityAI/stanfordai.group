webpackJsonp([221374088121123],{

/***/ "./node_modules/object-assign/index.js":
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),

/***/ "./src/layouts/images/logo.svg":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/logo.35d93fe0.svg";

/***/ }),

/***/ "./src/pages/index.scss":
/***/ (function(module, exports) {

	// empty (null-loader)

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/asl/Desktop/saig-dev/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\"]}!./node_modules/ts-loader/index.js?{\"compilerOptions\":{\"target\":\"esnext\",\"experimentalDecorators\":true,\"jsx\":\"react\",\"module\":\"commonjs\"},\"transpileOnly\":true}!./src/pages/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/gatsby-plugin-react-next/node_modules/react/index.js");
	__webpack_require__("./src/pages/index.scss");
	const Logo = __webpack_require__("./src/layouts/images/logo.svg");
	const IndexPage = () => {
	    return React.createElement("div", { className: "page" }, React.createElement("div", { className: "messages__container" }, React.createElement("div", { className: "messages__avatar-title" }, "Junwon Park  \u00B7  President of SAIG"), React.createElement("div", { className: "messages__avatar" }), React.createElement("div", { className: "messages__message messages__message-1" }, React.createElement("p", null, React.createElement("strong", null, "SAIG"), " is a student group which wants to be a part of shaping the future of artificial intelligence. We care about the tech ", React.createElement("span", { className: "italics" }, "and"), " the ethics involved.")), React.createElement("a", { href: "https://www.surveymonkey.com/r/stanfordai", className: "messages__message messages__message-survey messages__message-2", rel: "noopener noreferrer", target: "_blank" }, React.createElement("h3", null, "Join us today"), React.createElement("p", null, "Sign up for our mailing list! \uD83D\uDC4B")), React.createElement("a", { href: "https://www.facebook.com/groups/stanfordaigroup/", className: "messages__message messages__message-facebook messages__message-3", rel: "noopener noreferrer", target: "_blank" }, React.createElement("h3", null, "Join us on Facebook"), React.createElement("p", null, "Our group doesn't bite."))), React.createElement("div", { className: "content__container" }, React.createElement("div", { className: "bullets__container" }, React.createElement("div", { className: "bullets__bullet bullets__bullet-projects" }, React.createElement("div", { className: "bullets__bullet-icon" }), React.createElement("div", { className: "bullets__bullet-content" }, React.createElement("h3", null, "AI Projects"), React.createElement("p", null, "From chatbots to cutting-edge work in AI to machine learning\u2014we\u2019re interested in it all."))), React.createElement("div", { className: "bullets__bullet bullets__bullet-speakers" }, React.createElement("div", { className: "bullets__bullet-icon" }), React.createElement("div", { className: "bullets__bullet-content" }, React.createElement("h3", null, "World Class Speakers"), React.createElement("p", null, "We invite the world\u2019s experts to share their work."))), React.createElement("div", { className: "bullets__bullet bullets__bullet-tutorials" }, React.createElement("div", { className: "bullets__bullet-icon" }), React.createElement("div", { className: "bullets__bullet-content" }, React.createElement("h3", null, "Technical Tutorials"), React.createElement("p", null, "We host lectures and workshops for novices and experts alike."))))));
	};
	exports.default = IndexPage;

/***/ })

});
//# sourceMappingURL=component---src-pages-index-tsx-a8797658c9892387bf66.js.map