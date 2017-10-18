webpackJsonp([221374088121123],{

/***/ "./node_modules/human-date/humandate.js":
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function () {
	  var humandate = {
	    months: [
	      'January',
	      'February',
	      'March',
	      'April',
	      'May',
	      'June',
	      'July',
	      'August',
	      'September',
	      'October',
	      'November',
	      'December'
	    ],
	    toUTC: function toUTC(input) {
	      var date = input ? new Date(input) : new Date();
	      date = new Date(
	        date.getUTCFullYear(),
	        date.getUTCMonth(),
	        date.getUTCDate(),
	        date.getUTCHours(),
	        date.getUTCMinutes(),
	        date.getUTCSeconds()
	      );
	      return date;
	    },
	    monthName: function monthName(index) {
	      var monthNumber, date;
	      if (typeof index === 'number') {
	        monthNumber = index;
	      } else {
	        date = new Date(index);
	        monthNumber = date.getMonth() + 1;
	      }
	      return humandate.months[monthNumber - 1];
	    },
	    relativeTime: function relativeTime(input, options) {
	      var seconds, time, suffix, then, date, now, isPast, showNext;
	      var output = [];
	      if (typeof input === 'number') {
	        seconds = input;
	      } else {
	        date = new Date(input);
	        then = date.getTime();
	        now = new Date().getTime();
	        seconds = (now - then) / 1000 * -1;
	      }
	      if (!options) {
	        options = {};
	      }
	      if (!options.futureSuffix) {
	        options.futureSuffix = 'from now';
	      }
	      if (!options.pastSuffix) {
	        options.pastSuffix = 'ago';
	      }
	      if (!options.presentText) {
	        options.presentText = 'now';
	      }
	      if (!options.returnObject) {
	        options.returnObject = false;
	      }
	      isPast = seconds < 0 ? true : false;
	      seconds = Math.abs(seconds);
	      time = {
	        seconds: Math.floor(seconds % 31536000 % 86400 % 3600 % 60),
	        minutes: Math.floor(seconds % 31536000 % 86400 % 3600 / 60),
	        hours: Math.floor(seconds % 31536000 % 86400 / 3600),
	        days: Math.floor(seconds % 31536000 / 86400),
	        years: Math.floor(seconds / 31536000),
	        past: isPast
	      };
	      if (options.returnObject) {
	        return time;
	      }
	      if(seconds === 0) {
	        return options.presentText;
	      }
	      suffix = time.past ? options.pastSuffix : options.futureSuffix;
	      showNext = true;
	      function append(amount, string) {
	        if (showNext) {
	          showNext = options.allUnits;
	          output.push(amount + ' ' + string + (amount > 1 ? 's' : ''));
	        }
	      }
	      if (time.years) {
	        append(time.years, 'year');
	      }
	      if (time.days) {
	        append(time.days, 'day');
	      }
	      if (time.hours) {
	        append(time.hours, 'hour');
	      }
	      if (time.minutes) {
	        append(time.minutes, 'minute');
	      }
	      if (time.seconds) {
	        append(time.seconds, 'second');
	      }
	      return output.join(', ') + ' ' + suffix;
	    },
	    prettyPrint: function prettyPrint(input, options) {
	      var date, hdate, day, humanDate, year, month, tstr, hours, minutes, ampm;
	
	      if (!input) {
	        input = new Date();
	      } else if (typeof input === 'number') {
	        input = new Date().setSeconds(input);
	      }
	
	      if (!options) {
	        options = {};
	      }
	
	      if (!options.showTime) {
	        options.showTime = false;
	      }
	
	      date = new Date(input);
	      day = date.getDate();
	
	      if (day > 3 && day < 21) {
	        humanDate = day + 'th';
	      } else if (day % 10 === 1) {
	        humanDate = day + 'st';
	      } else if (day % 10 === 2) {
	        humanDate = day + 'nd';
	      } else if (day % 10 === 3) {
	        humanDate = day + 'rd';
	      } else {
	        humanDate = day + 'th';
	      }
	
	      year = date.getFullYear();
	      month = this.monthName(date.getMonth() + 1);
	      hdate = month + ' ' + humanDate + ', ' + year;
	
	      hours = date.getHours();
	      minutes = date.getMinutes();
	      ampm = hours >= 12 ? 'pm' : 'am';
	      hours = (hours % 12) ? hours % 12 : 12;
	      minutes = minutes < 10 ? '0' + minutes : minutes;
	      tstr = hours + ':' + minutes + ' ' + ampm;
	      return options.showTime ? hdate + " at " + tstr : hdate;
	    }
	  };
	
	  /* istanbul ignore next: code loaders */
	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = humandate;
	  } else if (true) {
	    return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return humandate;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    this.humandate = humandate;
	  }
	}());


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
	const hdate = __webpack_require__("./node_modules/human-date/humandate.js");
	__webpack_require__("./src/pages/index.scss");
	const Logo = __webpack_require__("./src/layouts/images/logo.svg");
	const MS_PER_DAY = 1000 * 60 * 60 * 24;
	function dateDiffInDays(a, b) {
	    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
	    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
	    return Math.floor((utc2 - utc1) / MS_PER_DAY);
	}
	function filterEvents(events) {
	    return events.filter(event => {
	        const eventDate = new Date(event.start.date || event.start.dateTime);
	        const daysAwayCount = dateDiffInDays(new Date(), eventDate);
	        if (daysAwayCount >= 0 && daysAwayCount <= 7) {
	            return true;
	        }
	        return false;
	    });
	}
	const IndexPage = props => {
	    // Parse the event data
	    const events = props.data.allGoogleCalendarEvent.edges.map(event => event.node);
	    const upcomingEvents = filterEvents(events).map(event => {
	        const parenthesisRegex = /\((.*)\)/;
	        ;
	        let title = event.summary;
	        let subtitleArray = title.match(parenthesisRegex);
	        let subtitle = '';
	        if (subtitleArray) {
	            subtitle = subtitleArray[1];
	            title = title.slice(event.summary.indexOf(subtitle) + subtitle.length + 1);
	        }
	        return Object.assign(event, {
	            humanDate: hdate.relativeTime(event.start.date || event.start.dateTime),
	            date: hdate.prettyPrint(event.start.date || event.start.dateTime, {
	                showTime: true
	            }),
	            title: title,
	            subtitle: subtitle,
	            parsedData: event.description ? JSON.parse(event.description) : null
	        });
	    });
	    return React.createElement("div", { className: "page" }, React.createElement("div", { className: "messages__container" }, React.createElement("div", { className: "messages__avatar-title" }, "Junwon Park  \u00B7  President of SAIG"), React.createElement("div", { className: "messages__avatar" }), React.createElement("div", { className: "messages__message messages__message-1" }, React.createElement("p", null, React.createElement("strong", null, "SAIG"), " is a student group which wants to be a part of shaping the future of artificial intelligence. We care about the tech ", React.createElement("span", { className: "italics" }, "and"), " the ethics involved.")), React.createElement("a", { href: "https://www.surveymonkey.com/r/stanfordai", className: "messages__message messages__message-survey messages__message-2", rel: "noopener noreferrer", target: "_blank" }, React.createElement("h3", null, "Join us today"), React.createElement("p", null, "Sign up for our mailing list! \uD83D\uDC4B")), React.createElement("a", { href: "https://www.facebook.com/groups/stanfordaigroup/", className: "messages__message messages__message-facebook messages__message-3", rel: "noopener noreferrer", target: "_blank" }, React.createElement("h3", null, "Join us on Facebook"), React.createElement("p", null, "Our group doesn't bite."))), React.createElement("div", { className: "content__container" }, React.createElement("div", { className: "bullets__container" }, React.createElement("div", { className: "bullets__bullet bullets__bullet-projects" }, React.createElement("div", { className: "bullets__bullet-icon" }), React.createElement("div", { className: "bullets__bullet-content" }, React.createElement("h3", null, "AI Projects"), React.createElement("p", null, "From chatbots to cutting-edge work in AI to machine learning\u2014we\u2019re interested in it all."))), React.createElement("div", { className: "bullets__bullet bullets__bullet-speakers" }, React.createElement("div", { className: "bullets__bullet-icon" }), React.createElement("div", { className: "bullets__bullet-content" }, React.createElement("h3", null, "World Class Speakers"), React.createElement("p", null, "We invite the world\u2019s experts to share their work."))), React.createElement("div", { className: "bullets__bullet bullets__bullet-tutorials" }, React.createElement("div", { className: "bullets__bullet-icon" }), React.createElement("div", { className: "bullets__bullet-content" }, React.createElement("h3", null, "Technical Tutorials"), React.createElement("p", null, "We host lectures and workshops for novices and experts alike.")))), React.createElement("hr", { className: "content__divider" }), React.createElement("div", { className: "upcomingEvents__container" }, React.createElement("div", { className: "upcomingEvents__list" }, upcomingEvents.map(event => {
	        const link = event.parsedData.link;
	        return React.createElement("a", { href: link, className: "upcomingEvents__event", key: event.id, rel: "noopener noreferrer", target: "_blank" }, React.createElement("h3", { className: "upcomingEvents__event-subtitle" }, event.subtitle), React.createElement("h2", { className: "upcomingEvents__event-title" }, event.title), React.createElement("h4", null, event.date), React.createElement("h4", null, event.location));
	    })))));
	};
	exports.query = "** extracted graphql fragment **";
	exports.default = IndexPage;

/***/ })

});
//# sourceMappingURL=component---src-pages-index-tsx-670a8889430cd6dcf3ec.js.map