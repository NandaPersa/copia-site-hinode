/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var bind = __webpack_require__(6);
    var isBuffer = __webpack_require__(15);
    
    /*global toString:true*/
    
    // utils is a library of generic helper functions non-specific to axios
    
    var toString = Object.prototype.toString;
    
    /**
     * Determine if a value is an Array
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an Array, otherwise false
     */
    function isArray(val) {
      return toString.call(val) === '[object Array]';
    }
    
    /**
     * Determine if a value is an ArrayBuffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an ArrayBuffer, otherwise false
     */
    function isArrayBuffer(val) {
      return toString.call(val) === '[object ArrayBuffer]';
    }
    
    /**
     * Determine if a value is a FormData
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an FormData, otherwise false
     */
    function isFormData(val) {
      return (typeof FormData !== 'undefined') && (val instanceof FormData);
    }
    
    /**
     * Determine if a value is a view on an ArrayBuffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
     */
    function isArrayBufferView(val) {
      var result;
      if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
        result = ArrayBuffer.isView(val);
      } else {
        result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
      }
      return result;
    }
    
    /**
     * Determine if a value is a String
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a String, otherwise false
     */
    function isString(val) {
      return typeof val === 'string';
    }
    
    /**
     * Determine if a value is a Number
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Number, otherwise false
     */
    function isNumber(val) {
      return typeof val === 'number';
    }
    
    /**
     * Determine if a value is undefined
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if the value is undefined, otherwise false
     */
    function isUndefined(val) {
      return typeof val === 'undefined';
    }
    
    /**
     * Determine if a value is an Object
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an Object, otherwise false
     */
    function isObject(val) {
      return val !== null && typeof val === 'object';
    }
    
    /**
     * Determine if a value is a Date
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Date, otherwise false
     */
    function isDate(val) {
      return toString.call(val) === '[object Date]';
    }
    
    /**
     * Determine if a value is a File
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a File, otherwise false
     */
    function isFile(val) {
      return toString.call(val) === '[object File]';
    }
    
    /**
     * Determine if a value is a Blob
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Blob, otherwise false
     */
    function isBlob(val) {
      return toString.call(val) === '[object Blob]';
    }
    
    /**
     * Determine if a value is a Function
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Function, otherwise false
     */
    function isFunction(val) {
      return toString.call(val) === '[object Function]';
    }
    
    /**
     * Determine if a value is a Stream
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Stream, otherwise false
     */
    function isStream(val) {
      return isObject(val) && isFunction(val.pipe);
    }
    
    /**
     * Determine if a value is a URLSearchParams object
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a URLSearchParams object, otherwise false
     */
    function isURLSearchParams(val) {
      return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
    }
    
    /**
     * Trim excess whitespace off the beginning and end of a string
     *
     * @param {String} str The String to trim
     * @returns {String} The String freed of excess whitespace
     */
    function trim(str) {
      return str.replace(/^\s*/, '').replace(/\s*$/, '');
    }
    
    /**
     * Determine if we're running in a standard browser environment
     *
     * This allows axios to run in a web worker, and react-native.
     * Both environments support XMLHttpRequest, but not fully standard globals.
     *
     * web workers:
     *  typeof window -> undefined
     *  typeof document -> undefined
     *
     * react-native:
     *  navigator.product -> 'ReactNative'
     */
    function isStandardBrowserEnv() {
      if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
        return false;
      }
      return (
        typeof window !== 'undefined' &&
        typeof document !== 'undefined'
      );
    }
    
    /**
     * Iterate over an Array or an Object invoking a function for each item.
     *
     * If `obj` is an Array callback will be called passing
     * the value, index, and complete array for each item.
     *
     * If 'obj' is an Object callback will be called passing
     * the value, key, and complete object for each property.
     *
     * @param {Object|Array} obj The object to iterate
     * @param {Function} fn The callback to invoke for each item
     */
    function forEach(obj, fn) {
      // Don't bother if no value provided
      if (obj === null || typeof obj === 'undefined') {
        return;
      }
    
      // Force an array if not already something iterable
      if (typeof obj !== 'object') {
        /*eslint no-param-reassign:0*/
        obj = [obj];
      }
    
      if (isArray(obj)) {
        // Iterate over array values
        for (var i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        // Iterate over object keys
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }
    
    /**
     * Accepts varargs expecting each argument to be an object, then
     * immutably merges the properties of each object and returns result.
     *
     * When multiple objects contain the same key the later object in
     * the arguments list will take precedence.
     *
     * Example:
     *
     * ```js
     * var result = merge({foo: 123}, {foo: 456});
     * console.log(result.foo); // outputs 456
     * ```
     *
     * @param {Object} obj1 Object to merge
     * @returns {Object} Result of all merge properties
     */
    function merge(/* obj1, obj2, obj3, ... */) {
      var result = {};
      function assignValue(val, key) {
        if (typeof result[key] === 'object' && typeof val === 'object') {
          result[key] = merge(result[key], val);
        } else {
          result[key] = val;
        }
      }
    
      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
      }
      return result;
    }
    
    /**
     * Extends object a by mutably adding to it the properties of object b.
     *
     * @param {Object} a The object to be extended
     * @param {Object} b The object to copy properties from
     * @param {Object} thisArg The object to bind function to
     * @return {Object} The resulting value of object a
     */
    function extend(a, b, thisArg) {
      forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === 'function') {
          a[key] = bind(val, thisArg);
        } else {
          a[key] = val;
        }
      });
      return a;
    }
    
    module.exports = {
      isArray: isArray,
      isArrayBuffer: isArrayBuffer,
      isBuffer: isBuffer,
      isFormData: isFormData,
      isArrayBufferView: isArrayBufferView,
      isString: isString,
      isNumber: isNumber,
      isObject: isObject,
      isUndefined: isUndefined,
      isDate: isDate,
      isFile: isFile,
      isBlob: isBlob,
      isFunction: isFunction,
      isStream: isStream,
      isURLSearchParams: isURLSearchParams,
      isStandardBrowserEnv: isStandardBrowserEnv,
      forEach: forEach,
      merge: merge,
      extend: extend,
      trim: trim
    };
    
    
    /***/ }),
    /* 1 */
    /***/ (function(module, exports) {
    
    /* globals __VUE_SSR_CONTEXT__ */
    
    // IMPORTANT: Do NOT use ES2015 features in this file.
    // This module is a runtime utility for cleaner component module output and will
    // be included in the final webpack user bundle.
    
    module.exports = function normalizeComponent (
      rawScriptExports,
      compiledTemplate,
      functionalTemplate,
      injectStyles,
      scopeId,
      moduleIdentifier /* server only */
    ) {
      var esModule
      var scriptExports = rawScriptExports = rawScriptExports || {}
    
      // ES6 modules interop
      var type = typeof rawScriptExports.default
      if (type === 'object' || type === 'function') {
        esModule = rawScriptExports
        scriptExports = rawScriptExports.default
      }
    
      // Vue.extend constructor export interop
      var options = typeof scriptExports === 'function'
        ? scriptExports.options
        : scriptExports
    
      // render functions
      if (compiledTemplate) {
        options.render = compiledTemplate.render
        options.staticRenderFns = compiledTemplate.staticRenderFns
        options._compiled = true
      }
    
      // functional template
      if (functionalTemplate) {
        options.functional = true
      }
    
      // scopedId
      if (scopeId) {
        options._scopeId = scopeId
      }
    
      var hook
      if (moduleIdentifier) { // server build
        hook = function (context) {
          // 2.3 injection
          context =
            context || // cached call
            (this.$vnode && this.$vnode.ssrContext) || // stateful
            (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
          // 2.2 with runInNewContext: true
          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__
          }
          // inject component styles
          if (injectStyles) {
            injectStyles.call(this, context)
          }
          // register component module identifier for async chunk inferrence
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier)
          }
        }
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook
      } else if (injectStyles) {
        hook = injectStyles
      }
    
      if (hook) {
        var functional = options.functional
        var existing = functional
          ? options.render
          : options.beforeCreate
    
        if (!functional) {
          // inject component registration as beforeCreate hook
          options.beforeCreate = existing
            ? [].concat(existing, hook)
            : [hook]
        } else {
          // for template-only hot-reload because in that case the render fn doesn't
          // go through the normalizer
          options._injectStyles = hook
          // register for functioal component in vue file
          options.render = function renderWithStyleInjection (h, context) {
            hook.call(context)
            return existing(h, context)
          }
        }
      }
    
      return {
        esModule: esModule,
        exports: scriptExports,
        options: options
      }
    }
    
    
    /***/ }),
    /* 2 */
    /***/ (function(module, exports, __webpack_require__) {
    
    var apply = Function.prototype.apply;
    
    // DOM APIs, for completeness
    
    exports.setTimeout = function() {
      return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
    };
    exports.setInterval = function() {
      return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
    };
    exports.clearTimeout =
    exports.clearInterval = function(timeout) {
      if (timeout) {
        timeout.close();
      }
    };
    
    function Timeout(id, clearFn) {
      this._id = id;
      this._clearFn = clearFn;
    }
    Timeout.prototype.unref = Timeout.prototype.ref = function() {};
    Timeout.prototype.close = function() {
      this._clearFn.call(window, this._id);
    };
    
    // Does not start the time, just sets up the members needed.
    exports.enroll = function(item, msecs) {
      clearTimeout(item._idleTimeoutId);
      item._idleTimeout = msecs;
    };
    
    exports.unenroll = function(item) {
      clearTimeout(item._idleTimeoutId);
      item._idleTimeout = -1;
    };
    
    exports._unrefActive = exports.active = function(item) {
      clearTimeout(item._idleTimeoutId);
    
      var msecs = item._idleTimeout;
      if (msecs >= 0) {
        item._idleTimeoutId = setTimeout(function onTimeout() {
          if (item._onTimeout)
            item._onTimeout();
        }, msecs);
      }
    };
    
    // setimmediate attaches itself to the global object
    __webpack_require__(13);
    exports.setImmediate = setImmediate;
    exports.clearImmediate = clearImmediate;
    
    
    /***/ }),
    /* 3 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    /* WEBPACK VAR INJECTION */(function(process) {
    
    var utils = __webpack_require__(0);
    var normalizeHeaderName = __webpack_require__(17);
    
    var DEFAULT_CONTENT_TYPE = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    
    function setContentTypeIfUnset(headers, value) {
      if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
        headers['Content-Type'] = value;
      }
    }
    
    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== 'undefined') {
        // For browsers use XHR adapter
        adapter = __webpack_require__(7);
      } else if (typeof process !== 'undefined') {
        // For node use HTTP adapter
        adapter = __webpack_require__(7);
      }
      return adapter;
    }
    
    var defaults = {
      adapter: getDefaultAdapter(),
    
      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, 'Content-Type');
        if (utils.isFormData(data) ||
          utils.isArrayBuffer(data) ||
          utils.isBuffer(data) ||
          utils.isStream(data) ||
          utils.isFile(data) ||
          utils.isBlob(data)
        ) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
          return data.toString();
        }
        if (utils.isObject(data)) {
          setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
          return JSON.stringify(data);
        }
        return data;
      }],
    
      transformResponse: [function transformResponse(data) {
        /*eslint no-param-reassign:0*/
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data);
          } catch (e) { /* Ignore */ }
        }
        return data;
      }],
    
      timeout: 0,
    
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
    
      maxContentLength: -1,
    
      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      }
    };
    
    defaults.headers = {
      common: {
        'Accept': 'application/json, text/plain, */*'
      }
    };
    
    utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });
    
    utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });
    
    module.exports = defaults;
    
    /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))
    
    /***/ }),
    /* 4 */
    /***/ (function(module, exports) {
    
    var g;
    
    // This works in non-strict mode
    g = (function() {
        return this;
    })();
    
    try {
        // This works if eval is allowed (see CSP)
        g = g || Function("return this")() || (1,eval)("this");
    } catch(e) {
        // This works if the window reference is available
        if(typeof window === "object")
            g = window;
    }
    
    // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}
    
    module.exports = g;
    
    
    /***/ }),
    /* 5 */
    /***/ (function(module, exports) {
    
    // shim for using process in browser
    var process = module.exports = {};
    
    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.
    
    var cachedSetTimeout;
    var cachedClearTimeout;
    
    function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout () {
        throw new Error('clearTimeout has not been defined');
    }
    (function () {
        try {
            if (typeof setTimeout === 'function') {
                cachedSetTimeout = setTimeout;
            } else {
                cachedSetTimeout = defaultSetTimout;
            }
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            if (typeof clearTimeout === 'function') {
                cachedClearTimeout = clearTimeout;
            } else {
                cachedClearTimeout = defaultClearTimeout;
            }
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
        }
    } ())
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
        } catch(e){
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
            } catch(e){
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
            }
        }
    
    
    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
        } catch (e){
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
            } catch (e){
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
            }
        }
    
    
    
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    
    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }
    
    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
    
        var len = queue.length;
        while(len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }
    
    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    };
    
    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};
    
    function noop() {}
    
    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;
    
    process.listeners = function (name) { return [] }
    
    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };
    
    process.cwd = function () { return '/' };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function() { return 0; };
    
    
    /***/ }),
    /* 6 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    module.exports = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
      };
    };
    
    
    /***/ }),
    /* 7 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    var utils = __webpack_require__(0);
    var settle = __webpack_require__(18);
    var buildURL = __webpack_require__(20);
    var parseHeaders = __webpack_require__(21);
    var isURLSameOrigin = __webpack_require__(22);
    var createError = __webpack_require__(8);
    var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(23);
    
    module.exports = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
    
        if (utils.isFormData(requestData)) {
          delete requestHeaders['Content-Type']; // Let the browser set it
        }
    
        var request = new XMLHttpRequest();
        var loadEvent = 'onreadystatechange';
        var xDomain = false;
    
        // For IE 8/9 CORS support
        // Only supports POST and GET calls and doesn't returns the response headers.
        // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
        if ("development" !== 'test' &&
            typeof window !== 'undefined' &&
            window.XDomainRequest && !('withCredentials' in request) &&
            !isURLSameOrigin(config.url)) {
          request = new window.XDomainRequest();
          loadEvent = 'onload';
          xDomain = true;
          request.onprogress = function handleProgress() {};
          request.ontimeout = function handleTimeout() {};
        }
    
        // HTTP basic authentication
        if (config.auth) {
          var username = config.auth.username || '';
          var password = config.auth.password || '';
          requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
        }
    
        request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
    
        // Set the request timeout in MS
        request.timeout = config.timeout;
    
        // Listen for ready state
        request[loadEvent] = function handleLoad() {
          if (!request || (request.readyState !== 4 && !xDomain)) {
            return;
          }
    
          // The request errored out and we didn't get a response, this will be
          // handled by onerror instead
          // With one exception: request that using file: protocol, most browsers
          // will return status as 0 even though it's a successful request
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
            return;
          }
    
          // Prepare the response
          var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
          var response = {
            data: responseData,
            // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
            status: request.status === 1223 ? 204 : request.status,
            statusText: request.status === 1223 ? 'No Content' : request.statusText,
            headers: responseHeaders,
            config: config,
            request: request
          };
    
          settle(resolve, reject, response);
    
          // Clean up request
          request = null;
        };
    
        // Handle low level network errors
        request.onerror = function handleError() {
          // Real errors are hidden from us by the browser
          // onerror should only fire if it's a network error
          reject(createError('Network Error', config, null, request));
    
          // Clean up request
          request = null;
        };
    
        // Handle timeout
        request.ontimeout = function handleTimeout() {
          reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
            request));
    
          // Clean up request
          request = null;
        };
    
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils.isStandardBrowserEnv()) {
          var cookies = __webpack_require__(24);
    
          // Add xsrf header
          var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
              cookies.read(config.xsrfCookieName) :
              undefined;
    
          if (xsrfValue) {
            requestHeaders[config.xsrfHeaderName] = xsrfValue;
          }
        }
    
        // Add headers to the request
        if ('setRequestHeader' in request) {
          utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
              // Remove Content-Type if data is undefined
              delete requestHeaders[key];
            } else {
              // Otherwise add header to the request
              request.setRequestHeader(key, val);
            }
          });
        }
    
        // Add withCredentials to request if needed
        if (config.withCredentials) {
          request.withCredentials = true;
        }
    
        // Add responseType to request if needed
        if (config.responseType) {
          try {
            request.responseType = config.responseType;
          } catch (e) {
            // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
            // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
            if (config.responseType !== 'json') {
              throw e;
            }
          }
        }
    
        // Handle progress if needed
        if (typeof config.onDownloadProgress === 'function') {
          request.addEventListener('progress', config.onDownloadProgress);
        }
    
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === 'function' && request.upload) {
          request.upload.addEventListener('progress', config.onUploadProgress);
        }
    
        if (config.cancelToken) {
          // Handle cancellation
          config.cancelToken.promise.then(function onCanceled(cancel) {
            if (!request) {
              return;
            }
    
            request.abort();
            reject(cancel);
            // Clean up request
            request = null;
          });
        }
    
        if (requestData === undefined) {
          requestData = null;
        }
    
        // Send the request
        request.send(requestData);
      });
    };
    
    
    /***/ }),
    /* 8 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    var enhanceError = __webpack_require__(19);
    
    /**
     * Create an Error with the specified message, config, error code, request and response.
     *
     * @param {string} message The error message.
     * @param {Object} config The config.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     * @param {Object} [request] The request.
     * @param {Object} [response] The response.
     * @returns {Error} The created error.
     */
    module.exports = function createError(message, config, code, request, response) {
      var error = new Error(message);
      return enhanceError(error, config, code, request, response);
    };
    
    
    /***/ }),
    /* 9 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    module.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };
    
    
    /***/ }),
    /* 10 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    /**
     * A `Cancel` is an object that is thrown when an operation is canceled.
     *
     * @class
     * @param {string=} message The message.
     */
    function Cancel(message) {
      this.message = message;
    }
    
    Cancel.prototype.toString = function toString() {
      return 'Cancel' + (this.message ? ': ' + this.message : '');
    };
    
    Cancel.prototype.__CANCEL__ = true;
    
    module.exports = Cancel;
    
    
    /***/ }),
    /* 11 */
    /***/ (function(module, exports, __webpack_require__) {
    
    module.exports = __webpack_require__(14);
    
    /***/ }),
    /* 12 */
    /***/ (function(module, exports, __webpack_require__) {
    
    /* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.swal=e():t.swal=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(25));var r=n(26);e.overlayMarkup=r.default,o(n(27)),o(n(28)),o(n(29));var i=n(0),a=i.default.MODAL_TITLE,s=i.default.MODAL_TEXT,c=i.default.ICON,l=i.default.FOOTER;e.iconMarkup='\n  <div class="'+c+'"></div>',e.titleMarkup='\n  <div class="'+a+'"></div>\n',e.textMarkup='\n  <div class="'+s+'"></div>',e.footerMarkup='\n  <div class="'+l+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},i=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),a=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:i,confirm:a};var s=function(t){switch(t){case e.CONFIRM_KEY:return a;case e.CANCEL_KEY:return i;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},r,{text:n,value:t})}},c=function(t,e){var n=s(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):o.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},l=function(t){for(var e={},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],a=t[r],s=c(r,a);e[r]=s}return e.cancel||(e.cancel=i),e},u=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},i,{visible:!1});break;case 2:n[e.CANCEL_KEY]=c(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t):Array.isArray(t)?n=u(t):o.isPlainObject(t)?n=l(t):!0===t?n=u([!0,!0]):!1===t?n=u([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=n(0),a=i.default.MODAL,s=i.default.OVERLAY,c=n(30),l=n(31),u=n(32),f=n(33);e.injectElIntoModal=function(t){var e=o.getNode(a),n=o.stringToNode(t);return e.appendChild(n),n};var d=function(t){t.className=a,t.textContent=""},p=function(t,e){d(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=o.getNode(a);p(e,t),c.default(t.icon),l.initTitle(t.title),l.initText(t.text),f.default(t.content),u.default(t.buttons,t.dangerMode)};var m=function(){var t=o.getNode(s),e=o.stringToNode(r.modalMarkup);t.appendChild(e)};e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},i=Object.assign({},r);e.resetState=function(){i=Object.assign({},r)},e.setActionValue=function(t){if("string"==typeof t)return a(o.CONFIRM_KEY,t);for(var e in t)a(e,t[e])};var a=function(t,e){i.actions[t]||(i.actions[t]={}),Object.assign(i.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,o=void 0===n||n;Object.assign(i.actions[t],{closeModal:o})},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(0),a=i.default.OVERLAY,s=i.default.SHOW_MODAL,c=i.default.BUTTON,l=i.default.BUTTON_LOADING,u=n(5);e.openModal=function(){o.getNode(a).classList.add(s),u.default.isOpen=!0};var f=function(){o.getNode(a).classList.remove(s),u.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=r.CANCEL_KEY);var e=u.default.actions[t],n=e.value;if(!1===e.closeModal){var i=c+"--"+t;o.getNode(i).classList.add(l)}else f();u.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},u.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+c),e=0;e<t.length;e++){t[e].classList.remove(l)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11),n(16);var o=n(23).default;t.exports=o},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;n(14)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button[not:disabled]:hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel[not:disabled]:hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger[not:disabled]:hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=h++;n=g||(g=s(e)),o=f.bind(null,n,l,!1),r=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function f(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,h=0,w=[],y=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){var o=n(17);"undefined"==typeof window||window.Promise||(window.Promise=o),n(21),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;for(var r=0|e,i=Math.max(r>=0?r:o-Math.abs(r),0);i<o;){if(function(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}(n[i],t))return!0;i++}return!1}}),"undefined"!=typeof window&&function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,e,n){(function(e){!function(n){function o(){}function r(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?s:c)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void c(e.promise,t)}s(e.promise,o)})}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new u(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(i,t)},n)}e[i]=a,0==--r&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){d(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(18).setImmediate)},function(t,e,n){function o(t,e){this._id=t,this._clearFn=e}var r=Function.prototype.apply;e.setTimeout=function(){return new o(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[c]=o,s(c),c++}function r(t){delete l[t]}function i(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(u)setTimeout(a,0,t);else{var e=l[t];if(e){u=!0;try{i(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var s,c=1,l={},u=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=o,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(7),n(20))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){b&&p&&(b=!1,p.length?m=p.concat(m):v=-1,m.length&&s())}function s(){if(!b){var t=r(a);b=!0;for(var e=m.length;e;){for(p=m,m=[];++v<e;)p&&p[v].run();v=-1,e=m.length}p=null,b=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,f,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var p,m=[],b=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||b||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";n(22).polyfill()},function(t,e,n){"use strict";function o(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,s=i.length;a<s;a++){var c=i[a],l=Object.getOwnPropertyDescriptor(r,c);void 0!==l&&l.enumerable&&(n[c]=r[c])}}return n}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),r=n(6),i=n(5),a=n(36),s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=a.getOpts.apply(void 0,t);return new Promise(function(t,e){i.default.promise={resolve:t,reject:e},o.default(n),setTimeout(function(){r.openModal()})})}};s.close=r.onAction,s.getState=r.getState,s.setActionValue=i.setActionValue,s.stopLoading=r.stopLoading,s.setDefaults=a.setDefaults,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=r.default.MODAL,a=n(4),s=n(34),c=n(35),l=n(1);e.init=function(t){o.getNode(i)||(document.body||l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),s.default(),a.default()),a.initModalContent(t),c.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.MODAL;e.modalMarkup='\n  <div class="'+r+'" role="dialog" aria-modal="true"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.OVERLAY,i='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>';e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.ICON;e.errorIconMarkup=function(){var t=r+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=r+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=r+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.CONTENT;e.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.BUTTON_CONTAINER,i=o.default.BUTTON,a=o.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+r+'">\n\n    <button\n      class="'+i+'"\n    ></button>\n\n    <div class="'+a+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(2),i=n(0),a=i.default.ICON,s=i.default.ICON_CUSTOM,c=["error","warning","success","info"],l={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},u=function(t,e){var n=a+"--"+t;e.classList.add(n);var o=l[t];o&&(e.innerHTML=o)},f=function(t,e){e.classList.add(s);var n=document.createElement("img");n.src=t,e.appendChild(n)},d=function(t){if(t){var e=o.injectElIntoModal(r.iconMarkup);c.includes(t)?u(t,e):f(t,e)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(4),i=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=r.injectElIntoModal(o.titleMarkup);e.textContent=t,i(e)}},e.initText=function(t){if(t){var e=document.createDocumentFragment();t.split("\n").forEach(function(t,n,o){e.appendChild(document.createTextNode(t)),n<o.length-1&&e.appendChild(document.createElement("br"))});var n=r.injectElIntoModal(o.textMarkup);n.appendChild(e),i(n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),i=n(0),a=i.default.BUTTON,s=i.default.DANGER_BUTTON,c=n(3),l=n(2),u=n(6),f=n(5),d=function(t,e,n){var r=e.text,i=e.value,d=e.className,p=e.closeModal,m=o.stringToNode(l.buttonMarkup),b=m.querySelector("."+a),v=a+"--"+t;if(b.classList.add(v),d){(Array.isArray(d)?d:d.split(" ")).filter(function(t){return t.length>0}).forEach(function(t){b.classList.add(t)})}n&&t===c.CONFIRM_KEY&&b.classList.add(s),b.textContent=r;var g={};return g[t]=i,f.setActionValue(g),f.setActionOptionsFor(t,{closeModal:p}),b.addEventListener("click",function(){return u.onAction(t)}),m},p=function(t,e){var n=r.injectElIntoModal(l.footerMarkup);for(var o in t){var i=t[o],a=d(o,i,e);i.visible&&n.appendChild(a)}0===n.children.length&&n.remove()};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),i=n(2),a=n(5),s=n(6),c=n(0),l=c.default.CONTENT,u=function(t){t.addEventListener("input",function(t){var e=t.target,n=e.value;a.setActionValue(n)}),t.addEventListener("keyup",function(t){if("Enter"===t.key)return s.onAction(o.CONFIRM_KEY)}),setTimeout(function(){t.focus(),a.setActionValue("")},0)},f=function(t,e,n){var o=document.createElement(e),r=l+"__"+e;o.classList.add(r);for(var i in n){var a=n[i];o[i]=a}"input"===e&&u(o),t.appendChild(o)},d=function(t){if(t){var e=r.injectElIntoModal(i.contentMarkup),n=t.element,o=t.attributes;"string"==typeof n?f(e,n,o):e.appendChild(n)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=function(){var t=o.stringToNode(r.overlayMarkup);document.body.appendChild(t)};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(6),i=n(1),a=n(3),s=n(0),c=s.default.MODAL,l=s.default.BUTTON,u=s.default.OVERLAY,f=function(t){t.preventDefault(),v()},d=function(t){t.preventDefault(),g()},p=function(t){if(o.default.isOpen)switch(t.key){case"Escape":return r.onAction(a.CANCEL_KEY)}},m=function(t){if(o.default.isOpen)switch(t.key){case"Tab":return f(t)}},b=function(t){if(o.default.isOpen)return"Tab"===t.key&&t.shiftKey?d(t):void 0},v=function(){var t=i.getNode(l);t&&(t.tabIndex=0,t.focus())},g=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l),n=e.length-1,o=e[n];o&&o.focus()},h=function(t){t[t.length-1].addEventListener("keydown",m)},w=function(t){t[0].addEventListener("keydown",b)},y=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l);e.length&&(h(e),w(e))},x=function(t){if(i.getNode(u)===t.target)return r.onAction(a.CANCEL_KEY)},_=function(t){var e=i.getNode(u);e.removeEventListener("click",x),t&&e.addEventListener("click",x)},k=function(t){o.default.timer&&clearTimeout(o.default.timer),t&&(o.default.timer=window.setTimeout(function(){return r.onAction(a.CANCEL_KEY)},t))},O=function(t){t.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),t.dangerMode?v():g(),y(),_(t.closeOnClickOutside),k(t.timer)};e.default=O},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(37),a=n(38),s={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},s);e.setDefaults=function(t){c=Object.assign({},s,t)};var l=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},u=function(t){return o.ordinalSuffixOf(t+1)},f=function(t,e){o.throwErr(u(e)+" argument ('"+t+"') is invalid")},d=function(t,e){var n=t+1,r=e[n];o.isPlainObject(r)||void 0===r||o.throwErr("Expected "+u(n)+" argument ('"+r+"') to be a plain object")},p=function(t,e){var n=t+1,r=e[n];void 0!==r&&o.throwErr("Unexpected "+u(n)+" argument ("+r+")")},m=function(t,e,n,r){var i=typeof e,a="string"===i,s=e instanceof Element;if(a){if(0===n)return{text:e};if(1===n)return{text:e,title:r[0]};if(2===n)return d(n,r),{icon:e};f(e,n)}else{if(s&&0===n)return d(n,r),{content:e};if(o.isPlainObject(e))return p(n,r),e;f(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach(function(e,o){var r=m(0,e,o,t);Object.assign(n,r)});var o=l(n);n.buttons=r.getButtonListOpts(o),delete n.button,n.content=i.getContentOpts(n.content);var u=Object.assign({},s,c,n);return Object.keys(u).forEach(function(t){a.DEPRECATED_OPTS[t]&&a.logDeprecation(t)}),u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return o.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?r:null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var n=e.DEPRECATED_OPTS[t],o=n.onlyRename,r=n.replacement,i=n.subOption,a=n.link,s=o?"renamed":"deprecated",c='SweetAlert warning: "'+t+'" option has been '+s+".";if(r){c+=" Please use"+(i?' "'+i+'" in ':" ")+'"'+r+'" instead.'}var l="https://sweetalert.js.org";c+=a?" More details: "+l+a:" More details: "+l+"/guides/#upgrading-from-1x",console.warn(c)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])});
    /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).setImmediate, __webpack_require__(2).clearImmediate))
    
    /***/ }),
    /* 13 */
    /***/ (function(module, exports, __webpack_require__) {
    
    /* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
        "use strict";
    
        if (global.setImmediate) {
            return;
        }
    
        var nextHandle = 1; // Spec says greater than zero
        var tasksByHandle = {};
        var currentlyRunningATask = false;
        var doc = global.document;
        var registerImmediate;
    
        function setImmediate(callback) {
          // Callback can either be a function or a string
          if (typeof callback !== "function") {
            callback = new Function("" + callback);
          }
          // Copy function arguments
          var args = new Array(arguments.length - 1);
          for (var i = 0; i < args.length; i++) {
              args[i] = arguments[i + 1];
          }
          // Store and register the task
          var task = { callback: callback, args: args };
          tasksByHandle[nextHandle] = task;
          registerImmediate(nextHandle);
          return nextHandle++;
        }
    
        function clearImmediate(handle) {
            delete tasksByHandle[handle];
        }
    
        function run(task) {
            var callback = task.callback;
            var args = task.args;
            switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
            }
        }
    
        function runIfPresent(handle) {
            // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
            // So if we're currently running a task, we'll need to delay this invocation.
            if (currentlyRunningATask) {
                // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
                // "too much recursion" error.
                setTimeout(runIfPresent, 0, handle);
            } else {
                var task = tasksByHandle[handle];
                if (task) {
                    currentlyRunningATask = true;
                    try {
                        run(task);
                    } finally {
                        clearImmediate(handle);
                        currentlyRunningATask = false;
                    }
                }
            }
        }
    
        function installNextTickImplementation() {
            registerImmediate = function(handle) {
                process.nextTick(function () { runIfPresent(handle); });
            };
        }
    
        function canUsePostMessage() {
            // The test against `importScripts` prevents this implementation from being installed inside a web worker,
            // where `global.postMessage` means something completely different and can't be used for this purpose.
            if (global.postMessage && !global.importScripts) {
                var postMessageIsAsynchronous = true;
                var oldOnMessage = global.onmessage;
                global.onmessage = function() {
                    postMessageIsAsynchronous = false;
                };
                global.postMessage("", "*");
                global.onmessage = oldOnMessage;
                return postMessageIsAsynchronous;
            }
        }
    
        function installPostMessageImplementation() {
            // Installs an event handler on `global` for the `message` event: see
            // * https://developer.mozilla.org/en/DOM/window.postMessage
            // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    
            var messagePrefix = "setImmediate$" + Math.random() + "$";
            var onGlobalMessage = function(event) {
                if (event.source === global &&
                    typeof event.data === "string" &&
                    event.data.indexOf(messagePrefix) === 0) {
                    runIfPresent(+event.data.slice(messagePrefix.length));
                }
            };
    
            if (global.addEventListener) {
                global.addEventListener("message", onGlobalMessage, false);
            } else {
                global.attachEvent("onmessage", onGlobalMessage);
            }
    
            registerImmediate = function(handle) {
                global.postMessage(messagePrefix + handle, "*");
            };
        }
    
        function installMessageChannelImplementation() {
            var channel = new MessageChannel();
            channel.port1.onmessage = function(event) {
                var handle = event.data;
                runIfPresent(handle);
            };
    
            registerImmediate = function(handle) {
                channel.port2.postMessage(handle);
            };
        }
    
        function installReadyStateChangeImplementation() {
            var html = doc.documentElement;
            registerImmediate = function(handle) {
                // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                var script = doc.createElement("script");
                script.onreadystatechange = function () {
                    runIfPresent(handle);
                    script.onreadystatechange = null;
                    html.removeChild(script);
                    script = null;
                };
                html.appendChild(script);
            };
        }
    
        function installSetTimeoutImplementation() {
            registerImmediate = function(handle) {
                setTimeout(runIfPresent, 0, handle);
            };
        }
    
        // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
        var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
        attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
    
        // Don't get fooled by e.g. browserify environments.
        if ({}.toString.call(global.process) === "[object process]") {
            // For Node.js before 0.9
            installNextTickImplementation();
    
        } else if (canUsePostMessage()) {
            // For non-IE10 modern browsers
            installPostMessageImplementation();
    
        } else if (global.MessageChannel) {
            // For web workers, where supported
            installMessageChannelImplementation();
    
        } else if (doc && "onreadystatechange" in doc.createElement("script")) {
            // For IE 6â€“8
            installReadyStateChangeImplementation();
    
        } else {
            // For older browsers
            installSetTimeoutImplementation();
        }
    
        attachTo.setImmediate = setImmediate;
        attachTo.clearImmediate = clearImmediate;
    }(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));
    
    /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(5)))
    
    /***/ }),
    /* 14 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    var utils = __webpack_require__(0);
    var bind = __webpack_require__(6);
    var Axios = __webpack_require__(16);
    var defaults = __webpack_require__(3);
    
    /**
     * Create an instance of Axios
     *
     * @param {Object} defaultConfig The default config for the instance
     * @return {Axios} A new instance of Axios
     */
    function createInstance(defaultConfig) {
      var context = new Axios(defaultConfig);
      var instance = bind(Axios.prototype.request, context);
    
      // Copy axios.prototype to instance
      utils.extend(instance, Axios.prototype, context);
    
      // Copy context to instance
      utils.extend(instance, context);
    
      return instance;
    }
    
    // Create the default instance to be exported
    var axios = createInstance(defaults);
    
    // Expose Axios class to allow class inheritance
    axios.Axios = Axios;
    
    // Factory for creating new instances
    axios.create = function create(instanceConfig) {
      return createInstance(utils.merge(defaults, instanceConfig));
    };
    
    // Expose Cancel & CancelToken
    axios.Cancel = __webpack_require__(10);
    axios.CancelToken = __webpack_require__(30);
    axios.isCancel = __webpack_require__(9);
    
    // Expose all/spread
    axios.all = function all(promises) {
      return Promise.all(promises);
    };
    axios.spread = __webpack_require__(31);
    
    module.exports = axios;
    
    // Allow use of default import syntax in TypeScript
    module.exports.default = axios;
    
    
    /***/ }),
    /* 15 */
    /***/ (function(module, exports) {
    
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    
    // The _isBuffer check is for Safari 5-7 support, because it's missing
    // Object.prototype.constructor. Remove this eventually
    module.exports = function (obj) {
      return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
    }
    
    function isBuffer (obj) {
      return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
    }
    
    // For Node v0.10 support. Remove this eventually.
    function isSlowBuffer (obj) {
      return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
    }
    
    
    /***/ }),
    /* 16 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    var defaults = __webpack_require__(3);
    var utils = __webpack_require__(0);
    var InterceptorManager = __webpack_require__(25);
    var dispatchRequest = __webpack_require__(26);
    
    /**
     * Create a new instance of Axios
     *
     * @param {Object} instanceConfig The default config for the instance
     */
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    
    /**
     * Dispatch a request
     *
     * @param {Object} config The config specific for this request (merged with this.defaults)
     */
    Axios.prototype.request = function request(config) {
      /*eslint no-param-reassign:0*/
      // Allow for axios('example/url'[, config]) a la fetch API
      if (typeof config === 'string') {
        config = utils.merge({
          url: arguments[0]
        }, arguments[1]);
      }
    
      config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
      config.method = config.method.toLowerCase();
    
      // Hook up interceptors middleware
      var chain = [dispatchRequest, undefined];
      var promise = Promise.resolve(config);
    
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
    
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });
    
      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }
    
      return promise;
    };
    
    // Provide aliases for supported request methods
    utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
      /*eslint func-names:0*/
      Axios.prototype[method] = function(url, config) {
        return this.request(utils.merge(config || {}, {
          method: method,
          url: url
        }));
      };
    });
    
    utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
      /*eslint func-names:0*/
      Axios.prototype[method] = function(url, data, config) {
        return this.request(utils.merge(config || {}, {
          method: method,
          url: url,
          data: data
        }));
      };
    });
    
    module.exports = Axios;
    
    
    /***/ }),
    /* 17 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    var utils = __webpack_require__(0);
    
    module.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };
    
    
    /***/ }),
    /* 18 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    var createError = __webpack_require__(8);
    
    /**
     * Resolve or reject a Promise based on response status.
     *
     * @param {Function} resolve A function that resolves the promise.
     * @param {Function} reject A function that rejects the promise.
     * @param {object} response The response.
     */
    module.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      // Note: status is not exposed by XDomainRequest
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(createError(
          'Request failed with status code ' + response.status,
          response.config,
          null,
          response.request,
          response
        ));
      }
    };
    
    
    /***/ }),
    /* 19 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    /**
     * Update an Error with the specified config, error code, and response.
     *
     * @param {Error} error The error to update.
     * @param {Object} config The config.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     * @param {Object} [request] The request.
     * @param {Object} [response] The response.
     * @returns {Error} The error.
     */
    module.exports = function enhanceError(error, config, code, request, response) {
      error.config = config;
      if (code) {
        error.code = code;
      }
      error.request = request;
      error.response = response;
      return error;
    };
    
    
    /***/ }),
    /* 20 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    var utils = __webpack_require__(0);
    
    function encode(val) {
      return encodeURIComponent(val).
        replace(/%40/gi, '@').
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, '+').
        replace(/%5B/gi, '[').
        replace(/%5D/gi, ']');
    }
    
    /**
     * Build a URL by appending params to the end
     *
     * @param {string} url The base of the url (e.g., http://www.google.com)
     * @param {object} [params] The params to be appended
     * @returns {string} The formatted url
     */
    module.exports = function buildURL(url, params, paramsSerializer) {
      /*eslint no-param-reassign:0*/
      if (!params) {
        return url;
      }
    
      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];
    
        utils.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === 'undefined') {
            return;
          }
    
          if (utils.isArray(val)) {
            key = key + '[]';
          }
    
          if (!utils.isArray(val)) {
            val = [val];
          }
    
          utils.forEach(val, function parseValue(v) {
            if (utils.isDate(v)) {
              v = v.toISOString();
            } else if (utils.isObject(v)) {
              v = JSON.stringify(v);
            }
            parts.push(encode(key) + '=' + encode(v));
          });
        });
    
        serializedParams = parts.join('&');
      }
    
      if (serializedParams) {
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
      }
    
      return url;
    };
    
    
    /***/ }),
    /* 21 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    var utils = __webpack_require__(0);
    
    // Headers whose duplicates are ignored by node
    // c.f. https://nodejs.org/api/http.html#http_message_headers
    var ignoreDuplicateOf = [
      'age', 'authorization', 'content-length', 'content-type', 'etag',
      'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
      'last-modified', 'location', 'max-forwards', 'proxy-authorization',
      'referer', 'retry-after', 'user-agent'
    ];
    
    /**
     * Parse headers into an object
     *
     * ```
     * Date: Wed, 27 Aug 2014 08:58:49 GMT
     * Content-Type: application/json
     * Connection: keep-alive
     * Transfer-Encoding: chunked
     * ```
     *
     * @param {String} headers Headers needing to be parsed
     * @returns {Object} Headers parsed into an object
     */
    module.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;
    
      if (!headers) { return parsed; }
    
      utils.forEach(headers.split('\n'), function parser(line) {
        i = line.indexOf(':');
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
    
        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === 'set-cookie') {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
          }
        }
      });
    
      return parsed;
    };
    
    
    /***/ }),
    /* 22 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    var utils = __webpack_require__(0);
    
    module.exports = (
      utils.isStandardBrowserEnv() ?
    
      // Standard browser envs have full support of the APIs needed to test
      // whether the request URL is of the same origin as current location.
      (function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement('a');
        var originURL;
    
        /**
        * Parse a URL to discover it's components
        *
        * @param {String} url The URL to be parsed
        * @returns {Object}
        */
        function resolveURL(url) {
          var href = url;
    
          if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
          }
    
          urlParsingNode.setAttribute('href', href);
    
          // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                      urlParsingNode.pathname :
                      '/' + urlParsingNode.pathname
          };
        }
    
        originURL = resolveURL(window.location.href);
    
        /**
        * Determine if a URL shares the same origin as the current location
        *
        * @param {String} requestURL The URL to test
        * @returns {boolean} True if URL shares the same origin, otherwise false
        */
        return function isURLSameOrigin(requestURL) {
          var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
          return (parsed.protocol === originURL.protocol &&
                parsed.host === originURL.host);
        };
      })() :
    
      // Non standard browser envs (web workers, react-native) lack needed support.
      (function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      })()
    );
    
    
    /***/ }),
    /* 23 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    // btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
    
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    
    function E() {
      this.message = 'String contains an invalid character';
    }
    E.prototype = new Error;
    E.prototype.code = 5;
    E.prototype.name = 'InvalidCharacterError';
    
    function btoa(input) {
      var str = String(input);
      var output = '';
      for (
        // initialize result and counter
        var block, charCode, idx = 0, map = chars;
        // if the next str index does not exist:
        //   change the mapping table to "="
        //   check if d has no fractional digits
        str.charAt(idx | 0) || (map = '=', idx % 1);
        // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
        output += map.charAt(63 & block >> 8 - idx % 1 * 8)
      ) {
        charCode = str.charCodeAt(idx += 3 / 4);
        if (charCode > 0xFF) {
          throw new E();
        }
        block = block << 8 | charCode;
      }
      return output;
    }
    
    module.exports = btoa;
    
    
    /***/ }),
    /* 24 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    var utils = __webpack_require__(0);
    
    module.exports = (
      utils.isStandardBrowserEnv() ?
    
      // Standard browser envs support document.cookie
      (function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));
    
            if (utils.isNumber(expires)) {
              cookie.push('expires=' + new Date(expires).toGMTString());
            }
    
            if (utils.isString(path)) {
              cookie.push('path=' + path);
            }
    
            if (utils.isString(domain)) {
              cookie.push('domain=' + domain);
            }
    
            if (secure === true) {
              cookie.push('secure');
            }
    
            document.cookie = cookie.join('; ');
          },
    
          read: function read(name) {
            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return (match ? decodeURIComponent(match[3]) : null);
          },
    
          remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
          }
        };
      })() :
    
      // Non standard browser env (web workers, react-native) lack needed support.
      (function nonStandardBrowserEnv() {
        return {
          write: function write() {},
          read: function read() { return null; },
          remove: function remove() {}
        };
      })()
    );
    
    
    /***/ }),
    /* 25 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    var utils = __webpack_require__(0);
    
    function InterceptorManager() {
      this.handlers = [];
    }
    
    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    InterceptorManager.prototype.use = function use(fulfilled, rejected) {
      this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected
      });
      return this.handlers.length - 1;
    };
    
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     */
    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };
    
    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     */
    InterceptorManager.prototype.forEach = function forEach(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    };
    
    module.exports = InterceptorManager;
    
    
    /***/ }),
    /* 26 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    var utils = __webpack_require__(0);
    var transformData = __webpack_require__(27);
    var isCancel = __webpack_require__(9);
    var defaults = __webpack_require__(3);
    var isAbsoluteURL = __webpack_require__(28);
    var combineURLs = __webpack_require__(29);
    
    /**
     * Throws a `Cancel` if cancellation has been requested.
     */
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }
    }
    
    /**
     * Dispatch a request to the server using the configured adapter.
     *
     * @param {object} config The config that is to be used for the request
     * @returns {Promise} The Promise to be fulfilled
     */
    module.exports = function dispatchRequest(config) {
      throwIfCancellationRequested(config);
    
      // Support baseURL config
      if (config.baseURL && !isAbsoluteURL(config.url)) {
        config.url = combineURLs(config.baseURL, config.url);
      }
    
      // Ensure headers exist
      config.headers = config.headers || {};
    
      // Transform request data
      config.data = transformData(
        config.data,
        config.headers,
        config.transformRequest
      );
    
      // Flatten headers
      config.headers = utils.merge(
        config.headers.common || {},
        config.headers[config.method] || {},
        config.headers || {}
      );
    
      utils.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        function cleanHeaderConfig(method) {
          delete config.headers[method];
        }
      );
    
      var adapter = config.adapter || defaults.adapter;
    
      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
    
        // Transform response data
        response.data = transformData(
          response.data,
          response.headers,
          config.transformResponse
        );
    
        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);
    
          // Transform response data
          if (reason && reason.response) {
            reason.response.data = transformData(
              reason.response.data,
              reason.response.headers,
              config.transformResponse
            );
          }
        }
    
        return Promise.reject(reason);
      });
    };
    
    
    /***/ }),
    /* 27 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    var utils = __webpack_require__(0);
    
    /**
     * Transform the data for a request or a response
     *
     * @param {Object|String} data The data to be transformed
     * @param {Array} headers The headers for the request or response
     * @param {Array|Function} fns A single function or Array of functions
     * @returns {*} The resulting transformed data
     */
    module.exports = function transformData(data, headers, fns) {
      /*eslint no-param-reassign:0*/
      utils.forEach(fns, function transform(fn) {
        data = fn(data, headers);
      });
    
      return data;
    };
    
    
    /***/ }),
    /* 28 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    /**
     * Determines whether the specified URL is absolute
     *
     * @param {string} url The URL to test
     * @returns {boolean} True if the specified URL is absolute, otherwise false
     */
    module.exports = function isAbsoluteURL(url) {
      // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
      // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
      // by any combination of letters, digits, plus, period, or hyphen.
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };
    
    
    /***/ }),
    /* 29 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    /**
     * Creates a new URL by combining the specified URLs
     *
     * @param {string} baseURL The base URL
     * @param {string} relativeURL The relative URL
     * @returns {string} The combined URL
     */
    module.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL
        ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
        : baseURL;
    };
    
    
    /***/ }),
    /* 30 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    var Cancel = __webpack_require__(10);
    
    /**
     * A `CancelToken` is an object that can be used to request cancellation of an operation.
     *
     * @class
     * @param {Function} executor The executor function.
     */
    function CancelToken(executor) {
      if (typeof executor !== 'function') {
        throw new TypeError('executor must be a function.');
      }
    
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
    
      var token = this;
      executor(function cancel(message) {
        if (token.reason) {
          // Cancellation has already been requested
          return;
        }
    
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
      });
    }
    
    /**
     * Throws a `Cancel` if cancellation has been requested.
     */
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };
    
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token: token,
        cancel: cancel
      };
    };
    
    module.exports = CancelToken;
    
    
    /***/ }),
    /* 31 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    /**
     * Syntactic sugar for invoking a function and expanding an array for arguments.
     *
     * Common use case would be to use `Function.prototype.apply`.
     *
     *  ```js
     *  function f(x, y, z) {}
     *  var args = [1, 2, 3];
     *  f.apply(null, args);
     *  ```
     *
     * With `spread` this example can be re-written.
     *
     *  ```js
     *  spread(function(x, y, z) {})([1, 2, 3]);
     *  ```
     *
     * @param {Function} callback
     * @returns {Function}
     */
    module.exports = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };
    
    
    /***/ }),
    /* 32 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    /* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
     * Vue.js v2.5.11
     * (c) 2014-2017 Evan You
     * Released under the MIT License.
     */
    
    
    /*  */
    
    var emptyObject = Object.freeze({});
    
    // these helpers produces better vm code in JS engines due to their
    // explicitness and function inlining
    function isUndef (v) {
      return v === undefined || v === null
    }
    
    function isDef (v) {
      return v !== undefined && v !== null
    }
    
    function isTrue (v) {
      return v === true
    }
    
    function isFalse (v) {
      return v === false
    }
    
    /**
     * Check if value is primitive
     */
    function isPrimitive (value) {
      return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean'
      )
    }
    
    /**
     * Quick object check - this is primarily used to tell
     * Objects from primitive values when we know the value
     * is a JSON-compliant type.
     */
    function isObject (obj) {
      return obj !== null && typeof obj === 'object'
    }
    
    /**
     * Get the raw type string of a value e.g. [object Object]
     */
    var _toString = Object.prototype.toString;
    
    function toRawType (value) {
      return _toString.call(value).slice(8, -1)
    }
    
    /**
     * Strict object type check. Only returns true
     * for plain JavaScript objects.
     */
    function isPlainObject (obj) {
      return _toString.call(obj) === '[object Object]'
    }
    
    function isRegExp (v) {
      return _toString.call(v) === '[object RegExp]'
    }
    
    /**
     * Check if val is a valid array index.
     */
    function isValidArrayIndex (val) {
      var n = parseFloat(String(val));
      return n >= 0 && Math.floor(n) === n && isFinite(val)
    }
    
    /**
     * Convert a value to a string that is actually rendered.
     */
    function toString (val) {
      return val == null
        ? ''
        : typeof val === 'object'
          ? JSON.stringify(val, null, 2)
          : String(val)
    }
    
    /**
     * Convert a input value to a number for persistence.
     * If the conversion fails, return original string.
     */
    function toNumber (val) {
      var n = parseFloat(val);
      return isNaN(n) ? val : n
    }
    
    /**
     * Make a map and return a function for checking if a key
     * is in that map.
     */
    function makeMap (
      str,
      expectsLowerCase
    ) {
      var map = Object.create(null);
      var list = str.split(',');
      for (var i = 0; i < list.length; i++) {
        map[list[i]] = true;
      }
      return expectsLowerCase
        ? function (val) { return map[val.toLowerCase()]; }
        : function (val) { return map[val]; }
    }
    
    /**
     * Check if a tag is a built-in tag.
     */
    var isBuiltInTag = makeMap('slot,component', true);
    
    /**
     * Check if a attribute is a reserved attribute.
     */
    var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
    
    /**
     * Remove an item from an array
     */
    function remove (arr, item) {
      if (arr.length) {
        var index = arr.indexOf(item);
        if (index > -1) {
          return arr.splice(index, 1)
        }
      }
    }
    
    /**
     * Check whether the object has the property.
     */
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function hasOwn (obj, key) {
      return hasOwnProperty.call(obj, key)
    }
    
    /**
     * Create a cached version of a pure function.
     */
    function cached (fn) {
      var cache = Object.create(null);
      return (function cachedFn (str) {
        var hit = cache[str];
        return hit || (cache[str] = fn(str))
      })
    }
    
    /**
     * Camelize a hyphen-delimited string.
     */
    var camelizeRE = /-(\w)/g;
    var camelize = cached(function (str) {
      return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
    });
    
    /**
     * Capitalize a string.
     */
    var capitalize = cached(function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    });
    
    /**
     * Hyphenate a camelCase string.
     */
    var hyphenateRE = /\B([A-Z])/g;
    var hyphenate = cached(function (str) {
      return str.replace(hyphenateRE, '-$1').toLowerCase()
    });
    
    /**
     * Simple bind, faster than native
     */
    function bind (fn, ctx) {
      function boundFn (a) {
        var l = arguments.length;
        return l
          ? l > 1
            ? fn.apply(ctx, arguments)
            : fn.call(ctx, a)
          : fn.call(ctx)
      }
      // record original fn length
      boundFn._length = fn.length;
      return boundFn
    }
    
    /**
     * Convert an Array-like object to a real Array.
     */
    function toArray (list, start) {
      start = start || 0;
      var i = list.length - start;
      var ret = new Array(i);
      while (i--) {
        ret[i] = list[i + start];
      }
      return ret
    }
    
    /**
     * Mix properties into target object.
     */
    function extend (to, _from) {
      for (var key in _from) {
        to[key] = _from[key];
      }
      return to
    }
    
    /**
     * Merge an Array of Objects into a single Object.
     */
    function toObject (arr) {
      var res = {};
      for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
          extend(res, arr[i]);
        }
      }
      return res
    }
    
    /**
     * Perform no operation.
     * Stubbing args to make Flow happy without leaving useless transpiled code
     * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
     */
    function noop (a, b, c) {}
    
    /**
     * Always return false.
     */
    var no = function (a, b, c) { return false; };
    
    /**
     * Return same value
     */
    var identity = function (_) { return _; };
    
    /**
     * Generate a static keys string from compiler modules.
     */
    function genStaticKeys (modules) {
      return modules.reduce(function (keys, m) {
        return keys.concat(m.staticKeys || [])
      }, []).join(',')
    }
    
    /**
     * Check if two values are loosely equal - that is,
     * if they are plain objects, do they have the same shape?
     */
    function looseEqual (a, b) {
      if (a === b) { return true }
      var isObjectA = isObject(a);
      var isObjectB = isObject(b);
      if (isObjectA && isObjectB) {
        try {
          var isArrayA = Array.isArray(a);
          var isArrayB = Array.isArray(b);
          if (isArrayA && isArrayB) {
            return a.length === b.length && a.every(function (e, i) {
              return looseEqual(e, b[i])
            })
          } else if (!isArrayA && !isArrayB) {
            var keysA = Object.keys(a);
            var keysB = Object.keys(b);
            return keysA.length === keysB.length && keysA.every(function (key) {
              return looseEqual(a[key], b[key])
            })
          } else {
            /* istanbul ignore next */
            return false
          }
        } catch (e) {
          /* istanbul ignore next */
          return false
        }
      } else if (!isObjectA && !isObjectB) {
        return String(a) === String(b)
      } else {
        return false
      }
    }
    
    function looseIndexOf (arr, val) {
      for (var i = 0; i < arr.length; i++) {
        if (looseEqual(arr[i], val)) { return i }
      }
      return -1
    }
    
    /**
     * Ensure a function is called only once.
     */
    function once (fn) {
      var called = false;
      return function () {
        if (!called) {
          called = true;
          fn.apply(this, arguments);
        }
      }
    }
    
    var SSR_ATTR = 'data-server-rendered';
    
    var ASSET_TYPES = [
      'component',
      'directive',
      'filter'
    ];
    
    var LIFECYCLE_HOOKS = [
      'beforeCreate',
      'created',
      'beforeMount',
      'mounted',
      'beforeUpdate',
      'updated',
      'beforeDestroy',
      'destroyed',
      'activated',
      'deactivated',
      'errorCaptured'
    ];
    
    /*  */
    
    var config = ({
      /**
       * Option merge strategies (used in core/util/options)
       */
      // $flow-disable-line
      optionMergeStrategies: Object.create(null),
    
      /**
       * Whether to suppress warnings.
       */
      silent: false,
    
      /**
       * Show production mode tip message on boot?
       */
      productionTip: "development" !== 'production',
    
      /**
       * Whether to enable devtools
       */
      devtools: "development" !== 'production',
    
      /**
       * Whether to record perf
       */
      performance: false,
    
      /**
       * Error handler for watcher errors
       */
      errorHandler: null,
    
      /**
       * Warn handler for watcher warns
       */
      warnHandler: null,
    
      /**
       * Ignore certain custom elements
       */
      ignoredElements: [],
    
      /**
       * Custom user key aliases for v-on
       */
      // $flow-disable-line
      keyCodes: Object.create(null),
    
      /**
       * Check if a tag is reserved so that it cannot be registered as a
       * component. This is platform-dependent and may be overwritten.
       */
      isReservedTag: no,
    
      /**
       * Check if an attribute is reserved so that it cannot be used as a component
       * prop. This is platform-dependent and may be overwritten.
       */
      isReservedAttr: no,
    
      /**
       * Check if a tag is an unknown element.
       * Platform-dependent.
       */
      isUnknownElement: no,
    
      /**
       * Get the namespace of an element
       */
      getTagNamespace: noop,
    
      /**
       * Parse the real tag name for the specific platform.
       */
      parsePlatformTagName: identity,
    
      /**
       * Check if an attribute must be bound using property, e.g. value
       * Platform-dependent.
       */
      mustUseProp: no,
    
      /**
       * Exposed for legacy reasons
       */
      _lifecycleHooks: LIFECYCLE_HOOKS
    });
    
    /*  */
    
    /**
     * Check if a string starts with $ or _
     */
    function isReserved (str) {
      var c = (str + '').charCodeAt(0);
      return c === 0x24 || c === 0x5F
    }
    
    /**
     * Define a property.
     */
    function def (obj, key, val, enumerable) {
      Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
      });
    }
    
    /**
     * Parse simple path.
     */
    var bailRE = /[^\w.$]/;
    function parsePath (path) {
      if (bailRE.test(path)) {
        return
      }
      var segments = path.split('.');
      return function (obj) {
        for (var i = 0; i < segments.length; i++) {
          if (!obj) { return }
          obj = obj[segments[i]];
        }
        return obj
      }
    }
    
    /*  */
    
    
    // can we use __proto__?
    var hasProto = '__proto__' in {};
    
    // Browser environment sniffing
    var inBrowser = typeof window !== 'undefined';
    var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
    var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
    var UA = inBrowser && window.navigator.userAgent.toLowerCase();
    var isIE = UA && /msie|trident/.test(UA);
    var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
    var isEdge = UA && UA.indexOf('edge/') > 0;
    var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
    var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
    var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
    
    // Firefox has a "watch" function on Object.prototype...
    var nativeWatch = ({}).watch;
    
    var supportsPassive = false;
    if (inBrowser) {
      try {
        var opts = {};
        Object.defineProperty(opts, 'passive', ({
          get: function get () {
            /* istanbul ignore next */
            supportsPassive = true;
          }
        })); // https://github.com/facebook/flow/issues/285
        window.addEventListener('test-passive', null, opts);
      } catch (e) {}
    }
    
    // this needs to be lazy-evaled because vue may be required before
    // vue-server-renderer can set VUE_ENV
    var _isServer;
    var isServerRendering = function () {
      if (_isServer === undefined) {
        /* istanbul ignore if */
        if (!inBrowser && typeof global !== 'undefined') {
          // detect presence of vue-server-renderer and avoid
          // Webpack shimming the process
          _isServer = global['process'].env.VUE_ENV === 'server';
        } else {
          _isServer = false;
        }
      }
      return _isServer
    };
    
    // detect devtools
    var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
    
    /* istanbul ignore next */
    function isNative (Ctor) {
      return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
    }
    
    var hasSymbol =
      typeof Symbol !== 'undefined' && isNative(Symbol) &&
      typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);
    
    var _Set;
    /* istanbul ignore if */ // $flow-disable-line
    if (typeof Set !== 'undefined' && isNative(Set)) {
      // use native Set when available.
      _Set = Set;
    } else {
      // a non-standard Set polyfill that only works with primitive keys.
      _Set = (function () {
        function Set () {
          this.set = Object.create(null);
        }
        Set.prototype.has = function has (key) {
          return this.set[key] === true
        };
        Set.prototype.add = function add (key) {
          this.set[key] = true;
        };
        Set.prototype.clear = function clear () {
          this.set = Object.create(null);
        };
    
        return Set;
      }());
    }
    
    /*  */
    
    var warn = noop;
    var tip = noop;
    var generateComponentTrace = (noop); // work around flow check
    var formatComponentName = (noop);
    
    if (true) {
      var hasConsole = typeof console !== 'undefined';
      var classifyRE = /(?:^|[-_])(\w)/g;
      var classify = function (str) { return str
        .replace(classifyRE, function (c) { return c.toUpperCase(); })
        .replace(/[-_]/g, ''); };
    
      warn = function (msg, vm) {
        var trace = vm ? generateComponentTrace(vm) : '';
    
        if (config.warnHandler) {
          config.warnHandler.call(null, msg, vm, trace);
        } else if (hasConsole && (!config.silent)) {
          console.error(("[Vue warn]: " + msg + trace));
        }
      };
    
      tip = function (msg, vm) {
        if (hasConsole && (!config.silent)) {
          console.warn("[Vue tip]: " + msg + (
            vm ? generateComponentTrace(vm) : ''
          ));
        }
      };
    
      formatComponentName = function (vm, includeFile) {
        if (vm.$root === vm) {
          return '<Root>'
        }
        var options = typeof vm === 'function' && vm.cid != null
          ? vm.options
          : vm._isVue
            ? vm.$options || vm.constructor.options
            : vm || {};
        var name = options.name || options._componentTag;
        var file = options.__file;
        if (!name && file) {
          var match = file.match(/([^/\\]+)\.vue$/);
          name = match && match[1];
        }
    
        return (
          (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
          (file && includeFile !== false ? (" at " + file) : '')
        )
      };
    
      var repeat = function (str, n) {
        var res = '';
        while (n) {
          if (n % 2 === 1) { res += str; }
          if (n > 1) { str += str; }
          n >>= 1;
        }
        return res
      };
    
      generateComponentTrace = function (vm) {
        if (vm._isVue && vm.$parent) {
          var tree = [];
          var currentRecursiveSequence = 0;
          while (vm) {
            if (tree.length > 0) {
              var last = tree[tree.length - 1];
              if (last.constructor === vm.constructor) {
                currentRecursiveSequence++;
                vm = vm.$parent;
                continue
              } else if (currentRecursiveSequence > 0) {
                tree[tree.length - 1] = [last, currentRecursiveSequence];
                currentRecursiveSequence = 0;
              }
            }
            tree.push(vm);
            vm = vm.$parent;
          }
          return '\n\nfound in\n\n' + tree
            .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
                ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
                : formatComponentName(vm))); })
            .join('\n')
        } else {
          return ("\n\n(found in " + (formatComponentName(vm)) + ")")
        }
      };
    }
    
    /*  */
    
    
    var uid = 0;
    
    /**
     * A dep is an observable that can have multiple
     * directives subscribing to it.
     */
    var Dep = function Dep () {
      this.id = uid++;
      this.subs = [];
    };
    
    Dep.prototype.addSub = function addSub (sub) {
      this.subs.push(sub);
    };
    
    Dep.prototype.removeSub = function removeSub (sub) {
      remove(this.subs, sub);
    };
    
    Dep.prototype.depend = function depend () {
      if (Dep.target) {
        Dep.target.addDep(this);
      }
    };
    
    Dep.prototype.notify = function notify () {
      // stabilize the subscriber list first
      var subs = this.subs.slice();
      for (var i = 0, l = subs.length; i < l; i++) {
        subs[i].update();
      }
    };
    
    // the current target watcher being evaluated.
    // this is globally unique because there could be only one
    // watcher being evaluated at any time.
    Dep.target = null;
    var targetStack = [];
    
    function pushTarget (_target) {
      if (Dep.target) { targetStack.push(Dep.target); }
      Dep.target = _target;
    }
    
    function popTarget () {
      Dep.target = targetStack.pop();
    }
    
    /*  */
    
    var VNode = function VNode (
      tag,
      data,
      children,
      text,
      elm,
      context,
      componentOptions,
      asyncFactory
    ) {
      this.tag = tag;
      this.data = data;
      this.children = children;
      this.text = text;
      this.elm = elm;
      this.ns = undefined;
      this.context = context;
      this.fnContext = undefined;
      this.fnOptions = undefined;
      this.fnScopeId = undefined;
      this.key = data && data.key;
      this.componentOptions = componentOptions;
      this.componentInstance = undefined;
      this.parent = undefined;
      this.raw = false;
      this.isStatic = false;
      this.isRootInsert = true;
      this.isComment = false;
      this.isCloned = false;
      this.isOnce = false;
      this.asyncFactory = asyncFactory;
      this.asyncMeta = undefined;
      this.isAsyncPlaceholder = false;
    };
    
    var prototypeAccessors = { child: { configurable: true } };
    
    // DEPRECATED: alias for componentInstance for backwards compat.
    /* istanbul ignore next */
    prototypeAccessors.child.get = function () {
      return this.componentInstance
    };
    
    Object.defineProperties( VNode.prototype, prototypeAccessors );
    
    var createEmptyVNode = function (text) {
      if ( text === void 0 ) text = '';
    
      var node = new VNode();
      node.text = text;
      node.isComment = true;
      return node
    };
    
    function createTextVNode (val) {
      return new VNode(undefined, undefined, undefined, String(val))
    }
    
    // optimized shallow clone
    // used for static nodes and slot nodes because they may be reused across
    // multiple renders, cloning them avoids errors when DOM manipulations rely
    // on their elm reference.
    function cloneVNode (vnode, deep) {
      var componentOptions = vnode.componentOptions;
      var cloned = new VNode(
        vnode.tag,
        vnode.data,
        vnode.children,
        vnode.text,
        vnode.elm,
        vnode.context,
        componentOptions,
        vnode.asyncFactory
      );
      cloned.ns = vnode.ns;
      cloned.isStatic = vnode.isStatic;
      cloned.key = vnode.key;
      cloned.isComment = vnode.isComment;
      cloned.fnContext = vnode.fnContext;
      cloned.fnOptions = vnode.fnOptions;
      cloned.fnScopeId = vnode.fnScopeId;
      cloned.isCloned = true;
      if (deep) {
        if (vnode.children) {
          cloned.children = cloneVNodes(vnode.children, true);
        }
        if (componentOptions && componentOptions.children) {
          componentOptions.children = cloneVNodes(componentOptions.children, true);
        }
      }
      return cloned
    }
    
    function cloneVNodes (vnodes, deep) {
      var len = vnodes.length;
      var res = new Array(len);
      for (var i = 0; i < len; i++) {
        res[i] = cloneVNode(vnodes[i], deep);
      }
      return res
    }
    
    /*
     * not type checking this file because flow doesn't play well with
     * dynamically accessing methods on Array prototype
     */
    
    var arrayProto = Array.prototype;
    var arrayMethods = Object.create(arrayProto);[
      'push',
      'pop',
      'shift',
      'unshift',
      'splice',
      'sort',
      'reverse'
    ].forEach(function (method) {
      // cache original method
      var original = arrayProto[method];
      def(arrayMethods, method, function mutator () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
    
        var result = original.apply(this, args);
        var ob = this.__ob__;
        var inserted;
        switch (method) {
          case 'push':
          case 'unshift':
            inserted = args;
            break
          case 'splice':
            inserted = args.slice(2);
            break
        }
        if (inserted) { ob.observeArray(inserted); }
        // notify change
        ob.dep.notify();
        return result
      });
    });
    
    /*  */
    
    var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
    
    /**
     * By default, when a reactive property is set, the new value is
     * also converted to become reactive. However when passing down props,
     * we don't want to force conversion because the value may be a nested value
     * under a frozen data structure. Converting it would defeat the optimization.
     */
    var observerState = {
      shouldConvert: true
    };
    
    /**
     * Observer class that are attached to each observed
     * object. Once attached, the observer converts target
     * object's property keys into getter/setters that
     * collect dependencies and dispatches updates.
     */
    var Observer = function Observer (value) {
      this.value = value;
      this.dep = new Dep();
      this.vmCount = 0;
      def(value, '__ob__', this);
      if (Array.isArray(value)) {
        var augment = hasProto
          ? protoAugment
          : copyAugment;
        augment(value, arrayMethods, arrayKeys);
        this.observeArray(value);
      } else {
        this.walk(value);
      }
    };
    
    /**
     * Walk through each property and convert them into
     * getter/setters. This method should only be called when
     * value type is Object.
     */
    Observer.prototype.walk = function walk (obj) {
      var keys = Object.keys(obj);
      for (var i = 0; i < keys.length; i++) {
        defineReactive(obj, keys[i], obj[keys[i]]);
      }
    };
    
    /**
     * Observe a list of Array items.
     */
    Observer.prototype.observeArray = function observeArray (items) {
      for (var i = 0, l = items.length; i < l; i++) {
        observe(items[i]);
      }
    };
    
    // helpers
    
    /**
     * Augment an target Object or Array by intercepting
     * the prototype chain using __proto__
     */
    function protoAugment (target, src, keys) {
      /* eslint-disable no-proto */
      target.__proto__ = src;
      /* eslint-enable no-proto */
    }
    
    /**
     * Augment an target Object or Array by defining
     * hidden properties.
     */
    /* istanbul ignore next */
    function copyAugment (target, src, keys) {
      for (var i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];
        def(target, key, src[key]);
      }
    }
    
    /**
     * Attempt to create an observer instance for a value,
     * returns the new observer if successfully observed,
     * or the existing observer if the value already has one.
     */
    function observe (value, asRootData) {
      if (!isObject(value) || value instanceof VNode) {
        return
      }
      var ob;
      if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
        ob = value.__ob__;
      } else if (
        observerState.shouldConvert &&
        !isServerRendering() &&
        (Array.isArray(value) || isPlainObject(value)) &&
        Object.isExtensible(value) &&
        !value._isVue
      ) {
        ob = new Observer(value);
      }
      if (asRootData && ob) {
        ob.vmCount++;
      }
      return ob
    }
    
    /**
     * Define a reactive property on an Object.
     */
    function defineReactive (
      obj,
      key,
      val,
      customSetter,
      shallow
    ) {
      var dep = new Dep();
    
      var property = Object.getOwnPropertyDescriptor(obj, key);
      if (property && property.configurable === false) {
        return
      }
    
      // cater for pre-defined getter/setters
      var getter = property && property.get;
      var setter = property && property.set;
    
      var childOb = !shallow && observe(val);
      Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter () {
          var value = getter ? getter.call(obj) : val;
          if (Dep.target) {
            dep.depend();
            if (childOb) {
              childOb.dep.depend();
              if (Array.isArray(value)) {
                dependArray(value);
              }
            }
          }
          return value
        },
        set: function reactiveSetter (newVal) {
          var value = getter ? getter.call(obj) : val;
          /* eslint-disable no-self-compare */
          if (newVal === value || (newVal !== newVal && value !== value)) {
            return
          }
          /* eslint-enable no-self-compare */
          if ("development" !== 'production' && customSetter) {
            customSetter();
          }
          if (setter) {
            setter.call(obj, newVal);
          } else {
            val = newVal;
          }
          childOb = !shallow && observe(newVal);
          dep.notify();
        }
      });
    }
    
    /**
     * Set a property on an object. Adds the new property and
     * triggers change notification if the property doesn't
     * already exist.
     */
    function set (target, key, val) {
      if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.length = Math.max(target.length, key);
        target.splice(key, 1, val);
        return val
      }
      if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        return val
      }
      var ob = (target).__ob__;
      if (target._isVue || (ob && ob.vmCount)) {
        "development" !== 'production' && warn(
          'Avoid adding reactive properties to a Vue instance or its root $data ' +
          'at runtime - declare it upfront in the data option.'
        );
        return val
      }
      if (!ob) {
        target[key] = val;
        return val
      }
      defineReactive(ob.value, key, val);
      ob.dep.notify();
      return val
    }
    
    /**
     * Delete a property and trigger change if necessary.
     */
    function del (target, key) {
      if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1);
        return
      }
      var ob = (target).__ob__;
      if (target._isVue || (ob && ob.vmCount)) {
        "development" !== 'production' && warn(
          'Avoid deleting properties on a Vue instance or its root $data ' +
          '- just set it to null.'
        );
        return
      }
      if (!hasOwn(target, key)) {
        return
      }
      delete target[key];
      if (!ob) {
        return
      }
      ob.dep.notify();
    }
    
    /**
     * Collect dependencies on array elements when the array is touched, since
     * we cannot intercept array element access like property getters.
     */
    function dependArray (value) {
      for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
        e = value[i];
        e && e.__ob__ && e.__ob__.dep.depend();
        if (Array.isArray(e)) {
          dependArray(e);
        }
      }
    }
    
    /*  */
    
    /**
     * Option overwriting strategies are functions that handle
     * how to merge a parent option value and a child option
     * value into the final value.
     */
    var strats = config.optionMergeStrategies;
    
    /**
     * Options with restrictions
     */
    if (true) {
      strats.el = strats.propsData = function (parent, child, vm, key) {
        if (!vm) {
          warn(
            "option \"" + key + "\" can only be used during instance " +
            'creation with the `new` keyword.'
          );
        }
        return defaultStrat(parent, child)
      };
    }
    
    /**
     * Helper that recursively merges two data objects together.
     */
    function mergeData (to, from) {
      if (!from) { return to }
      var key, toVal, fromVal;
      var keys = Object.keys(from);
      for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        toVal = to[key];
        fromVal = from[key];
        if (!hasOwn(to, key)) {
          set(to, key, fromVal);
        } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
          mergeData(toVal, fromVal);
        }
      }
      return to
    }
    
    /**
     * Data
     */
    function mergeDataOrFn (
      parentVal,
      childVal,
      vm
    ) {
      if (!vm) {
        // in a Vue.extend merge, both should be functions
        if (!childVal) {
          return parentVal
        }
        if (!parentVal) {
          return childVal
        }
        // when parentVal & childVal are both present,
        // we need to return a function that returns the
        // merged result of both functions... no need to
        // check if parentVal is a function here because
        // it has to be a function to pass previous merges.
        return function mergedDataFn () {
          return mergeData(
            typeof childVal === 'function' ? childVal.call(this, this) : childVal,
            typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
          )
        }
      } else {
        return function mergedInstanceDataFn () {
          // instance merge
          var instanceData = typeof childVal === 'function'
            ? childVal.call(vm, vm)
            : childVal;
          var defaultData = typeof parentVal === 'function'
            ? parentVal.call(vm, vm)
            : parentVal;
          if (instanceData) {
            return mergeData(instanceData, defaultData)
          } else {
            return defaultData
          }
        }
      }
    }
    
    strats.data = function (
      parentVal,
      childVal,
      vm
    ) {
      if (!vm) {
        if (childVal && typeof childVal !== 'function') {
          "development" !== 'production' && warn(
            'The "data" option should be a function ' +
            'that returns a per-instance value in component ' +
            'definitions.',
            vm
          );
    
          return parentVal
        }
        return mergeDataOrFn(parentVal, childVal)
      }
    
      return mergeDataOrFn(parentVal, childVal, vm)
    };
    
    /**
     * Hooks and props are merged as arrays.
     */
    function mergeHook (
      parentVal,
      childVal
    ) {
      return childVal
        ? parentVal
          ? parentVal.concat(childVal)
          : Array.isArray(childVal)
            ? childVal
            : [childVal]
        : parentVal
    }
    
    LIFECYCLE_HOOKS.forEach(function (hook) {
      strats[hook] = mergeHook;
    });
    
    /**
     * Assets
     *
     * When a vm is present (instance creation), we need to do
     * a three-way merge between constructor options, instance
     * options and parent options.
     */
    function mergeAssets (
      parentVal,
      childVal,
      vm,
      key
    ) {
      var res = Object.create(parentVal || null);
      if (childVal) {
        "development" !== 'production' && assertObjectType(key, childVal, vm);
        return extend(res, childVal)
      } else {
        return res
      }
    }
    
    ASSET_TYPES.forEach(function (type) {
      strats[type + 's'] = mergeAssets;
    });
    
    /**
     * Watchers.
     *
     * Watchers hashes should not overwrite one
     * another, so we merge them as arrays.
     */
    strats.watch = function (
      parentVal,
      childVal,
      vm,
      key
    ) {
      // work around Firefox's Object.prototype.watch...
      if (parentVal === nativeWatch) { parentVal = undefined; }
      if (childVal === nativeWatch) { childVal = undefined; }
      /* istanbul ignore if */
      if (!childVal) { return Object.create(parentVal || null) }
      if (true) {
        assertObjectType(key, childVal, vm);
      }
      if (!parentVal) { return childVal }
      var ret = {};
      extend(ret, parentVal);
      for (var key$1 in childVal) {
        var parent = ret[key$1];
        var child = childVal[key$1];
        if (parent && !Array.isArray(parent)) {
          parent = [parent];
        }
        ret[key$1] = parent
          ? parent.concat(child)
          : Array.isArray(child) ? child : [child];
      }
      return ret
    };
    
    /**
     * Other object hashes.
     */
    strats.props =
    strats.methods =
    strats.inject =
    strats.computed = function (
      parentVal,
      childVal,
      vm,
      key
    ) {
      if (childVal && "development" !== 'production') {
        assertObjectType(key, childVal, vm);
      }
      if (!parentVal) { return childVal }
      var ret = Object.create(null);
      extend(ret, parentVal);
      if (childVal) { extend(ret, childVal); }
      return ret
    };
    strats.provide = mergeDataOrFn;
    
    /**
     * Default strategy.
     */
    var defaultStrat = function (parentVal, childVal) {
      return childVal === undefined
        ? parentVal
        : childVal
    };
    
    /**
     * Validate component names
     */
    function checkComponents (options) {
      for (var key in options.components) {
        validateComponentName(key);
      }
    }
    
    function validateComponentName (name) {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
      if (isBuiltInTag(name) || config.isReservedTag(name)) {
        warn(
          'Do not use built-in or reserved HTML elements as component ' +
          'id: ' + name
        );
      }
    }
    
    /**
     * Ensure all props option syntax are normalized into the
     * Object-based format.
     */
    function normalizeProps (options, vm) {
      var props = options.props;
      if (!props) { return }
      var res = {};
      var i, val, name;
      if (Array.isArray(props)) {
        i = props.length;
        while (i--) {
          val = props[i];
          if (typeof val === 'string') {
            name = camelize(val);
            res[name] = { type: null };
          } else if (true) {
            warn('props must be strings when using array syntax.');
          }
        }
      } else if (isPlainObject(props)) {
        for (var key in props) {
          val = props[key];
          name = camelize(key);
          if ("development" !== 'production' && isPlainObject(val)) {
            validatePropObject(name, val, vm);
          }
          res[name] = isPlainObject(val)
            ? val
            : { type: val };
        }
      } else if (true) {
        warn(
          "Invalid value for option \"props\": expected an Array or an Object, " +
          "but got " + (toRawType(props)) + ".",
          vm
        );
      }
      options.props = res;
    }
    
    /**
     * Validate whether a prop object keys are valid.
     */
    var propOptionsRE = /^(type|default|required|validator)$/;
    
    function validatePropObject (
      propName,
      prop,
      vm
    ) {
      for (var key in prop) {
        if (!propOptionsRE.test(key)) {
          warn(
            ("Invalid key \"" + key + "\" in validation rules object for prop \"" + propName + "\"."),
            vm
          );
        }
      }
    }
    
    /**
     * Normalize all injections into Object-based format
     */
    function normalizeInject (options, vm) {
      var inject = options.inject;
      var normalized = options.inject = {};
      if (Array.isArray(inject)) {
        for (var i = 0; i < inject.length; i++) {
          normalized[inject[i]] = { from: inject[i] };
        }
      } else if (isPlainObject(inject)) {
        for (var key in inject) {
          var val = inject[key];
          normalized[key] = isPlainObject(val)
            ? extend({ from: key }, val)
            : { from: val };
        }
      } else if ("development" !== 'production' && inject) {
        warn(
          "Invalid value for option \"inject\": expected an Array or an Object, " +
          "but got " + (toRawType(inject)) + ".",
          vm
        );
      }
    }
    
    /**
     * Normalize raw function directives into object format.
     */
    function normalizeDirectives (options) {
      var dirs = options.directives;
      if (dirs) {
        for (var key in dirs) {
          var def = dirs[key];
          if (typeof def === 'function') {
            dirs[key] = { bind: def, update: def };
          }
        }
      }
    }
    
    function assertObjectType (name, value, vm) {
      if (!isPlainObject(value)) {
        warn(
          "Invalid value for option \"" + name + "\": expected an Object, " +
          "but got " + (toRawType(value)) + ".",
          vm
        );
      }
    }
    
    /**
     * Merge two option objects into a new one.
     * Core utility used in both instantiation and inheritance.
     */
    function mergeOptions (
      parent,
      child,
      vm
    ) {
      if (true) {
        checkComponents(child);
      }
    
      if (typeof child === 'function') {
        child = child.options;
      }
    
      normalizeProps(child, vm);
      normalizeInject(child, vm);
      normalizeDirectives(child);
      var extendsFrom = child.extends;
      if (extendsFrom) {
        parent = mergeOptions(parent, extendsFrom, vm);
      }
      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
      var options = {};
      var key;
      for (key in parent) {
        mergeField(key);
      }
      for (key in child) {
        if (!hasOwn(parent, key)) {
          mergeField(key);
        }
      }
      function mergeField (key) {
        var strat = strats[key] || defaultStrat;
        options[key] = strat(parent[key], child[key], vm, key);
      }
      return options
    }
    
    /**
     * Resolve an asset.
     * This function is used because child instances need access
     * to assets defined in its ancestor chain.
     */
    function resolveAsset (
      options,
      type,
      id,
      warnMissing
    ) {
      /* istanbul ignore if */
      if (typeof id !== 'string') {
        return
      }
      var assets = options[type];
      // check local registration variations first
      if (hasOwn(assets, id)) { return assets[id] }
      var camelizedId = camelize(id);
      if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
      var PascalCaseId = capitalize(camelizedId);
      if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
      // fallback to prototype chain
      var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
      if ("development" !== 'production' && warnMissing && !res) {
        warn(
          'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
          options
        );
      }
      return res
    }
    
    /*  */
    
    function validateProp (
      key,
      propOptions,
      propsData,
      vm
    ) {
      var prop = propOptions[key];
      var absent = !hasOwn(propsData, key);
      var value = propsData[key];
      // handle boolean props
      if (isType(Boolean, prop.type)) {
        if (absent && !hasOwn(prop, 'default')) {
          value = false;
        } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
          value = true;
        }
      }
      // check default value
      if (value === undefined) {
        value = getPropDefaultValue(vm, prop, key);
        // since the default value is a fresh copy,
        // make sure to observe it.
        var prevShouldConvert = observerState.shouldConvert;
        observerState.shouldConvert = true;
        observe(value);
        observerState.shouldConvert = prevShouldConvert;
      }
      if (true) {
        assertProp(prop, key, value, vm, absent);
      }
      return value
    }
    
    /**
     * Get the default value of a prop.
     */
    function getPropDefaultValue (vm, prop, key) {
      // no default, return undefined
      if (!hasOwn(prop, 'default')) {
        return undefined
      }
      var def = prop.default;
      // warn against non-factory defaults for Object & Array
      if ("development" !== 'production' && isObject(def)) {
        warn(
          'Invalid default value for prop "' + key + '": ' +
          'Props with type Object/Array must use a factory function ' +
          'to return the default value.',
          vm
        );
      }
      // the raw prop value was also undefined from previous render,
      // return previous default value to avoid unnecessary watcher trigger
      if (vm && vm.$options.propsData &&
        vm.$options.propsData[key] === undefined &&
        vm._props[key] !== undefined
      ) {
        return vm._props[key]
      }
      // call factory function for non-Function types
      // a value is Function if its prototype is function even across different execution context
      return typeof def === 'function' && getType(prop.type) !== 'Function'
        ? def.call(vm)
        : def
    }
    
    /**
     * Assert whether a prop is valid.
     */
    function assertProp (
      prop,
      name,
      value,
      vm,
      absent
    ) {
      if (prop.required && absent) {
        warn(
          'Missing required prop: "' + name + '"',
          vm
        );
        return
      }
      if (value == null && !prop.required) {
        return
      }
      var type = prop.type;
      var valid = !type || type === true;
      var expectedTypes = [];
      if (type) {
        if (!Array.isArray(type)) {
          type = [type];
        }
        for (var i = 0; i < type.length && !valid; i++) {
          var assertedType = assertType(value, type[i]);
          expectedTypes.push(assertedType.expectedType || '');
          valid = assertedType.valid;
        }
      }
      if (!valid) {
        warn(
          "Invalid prop: type check failed for prop \"" + name + "\"." +
          " Expected " + (expectedTypes.map(capitalize).join(', ')) +
          ", got " + (toRawType(value)) + ".",
          vm
        );
        return
      }
      var validator = prop.validator;
      if (validator) {
        if (!validator(value)) {
          warn(
            'Invalid prop: custom validator check failed for prop "' + name + '".',
            vm
          );
        }
      }
    }
    
    var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;
    
    function assertType (value, type) {
      var valid;
      var expectedType = getType(type);
      if (simpleCheckRE.test(expectedType)) {
        var t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === 'object') {
          valid = value instanceof type;
        }
      } else if (expectedType === 'Object') {
        valid = isPlainObject(value);
      } else if (expectedType === 'Array') {
        valid = Array.isArray(value);
      } else {
        valid = value instanceof type;
      }
      return {
        valid: valid,
        expectedType: expectedType
      }
    }
    
    /**
     * Use function string name to check built-in types,
     * because a simple equality check will fail when running
     * across different vms / iframes.
     */
    function getType (fn) {
      var match = fn && fn.toString().match(/^\s*function (\w+)/);
      return match ? match[1] : ''
    }
    
    function isType (type, fn) {
      if (!Array.isArray(fn)) {
        return getType(fn) === getType(type)
      }
      for (var i = 0, len = fn.length; i < len; i++) {
        if (getType(fn[i]) === getType(type)) {
          return true
        }
      }
      /* istanbul ignore next */
      return false
    }
    
    /*  */
    
    function handleError (err, vm, info) {
      if (vm) {
        var cur = vm;
        while ((cur = cur.$parent)) {
          var hooks = cur.$options.errorCaptured;
          if (hooks) {
            for (var i = 0; i < hooks.length; i++) {
              try {
                var capture = hooks[i].call(cur, err, vm, info) === false;
                if (capture) { return }
              } catch (e) {
                globalHandleError(e, cur, 'errorCaptured hook');
              }
            }
          }
        }
      }
      globalHandleError(err, vm, info);
    }
    
    function globalHandleError (err, vm, info) {
      if (config.errorHandler) {
        try {
          return config.errorHandler.call(null, err, vm, info)
        } catch (e) {
          logError(e, null, 'config.errorHandler');
        }
      }
      logError(err, vm, info);
    }
    
    function logError (err, vm, info) {
      if (true) {
        warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
      }
      /* istanbul ignore else */
      if ((inBrowser || inWeex) && typeof console !== 'undefined') {
        console.error(err);
      } else {
        throw err
      }
    }
    
    /*  */
    /* globals MessageChannel */
    
    var callbacks = [];
    var pending = false;
    
    function flushCallbacks () {
      pending = false;
      var copies = callbacks.slice(0);
      callbacks.length = 0;
      for (var i = 0; i < copies.length; i++) {
        copies[i]();
      }
    }
    
    // Here we have async deferring wrappers using both micro and macro tasks.
    // In < 2.4 we used micro tasks everywhere, but there are some scenarios where
    // micro tasks have too high a priority and fires in between supposedly
    // sequential events (e.g. #4521, #6690) or even between bubbling of the same
    // event (#6566). However, using macro tasks everywhere also has subtle problems
    // when state is changed right before repaint (e.g. #6813, out-in transitions).
    // Here we use micro task by default, but expose a way to force macro task when
    // needed (e.g. in event handlers attached by v-on).
    var microTimerFunc;
    var macroTimerFunc;
    var useMacroTask = false;
    
    // Determine (macro) Task defer implementation.
    // Technically setImmediate should be the ideal choice, but it's only available
    // in IE. The only polyfill that consistently queues the callback after all DOM
    // events triggered in the same loop is by using MessageChannel.
    /* istanbul ignore if */
    if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
      macroTimerFunc = function () {
        setImmediate(flushCallbacks);
      };
    } else if (typeof MessageChannel !== 'undefined' && (
      isNative(MessageChannel) ||
      // PhantomJS
      MessageChannel.toString() === '[object MessageChannelConstructor]'
    )) {
      var channel = new MessageChannel();
      var port = channel.port2;
      channel.port1.onmessage = flushCallbacks;
      macroTimerFunc = function () {
        port.postMessage(1);
      };
    } else {
      /* istanbul ignore next */
      macroTimerFunc = function () {
        setTimeout(flushCallbacks, 0);
      };
    }
    
    // Determine MicroTask defer implementation.
    /* istanbul ignore next, $flow-disable-line */
    if (typeof Promise !== 'undefined' && isNative(Promise)) {
      var p = Promise.resolve();
      microTimerFunc = function () {
        p.then(flushCallbacks);
        // in problematic UIWebViews, Promise.then doesn't completely break, but
        // it can get stuck in a weird state where callbacks are pushed into the
        // microtask queue but the queue isn't being flushed, until the browser
        // needs to do some other work, e.g. handle a timer. Therefore we can
        // "force" the microtask queue to be flushed by adding an empty timer.
        if (isIOS) { setTimeout(noop); }
      };
    } else {
      // fallback to macro
      microTimerFunc = macroTimerFunc;
    }
    
    /**
     * Wrap a function so that if any code inside triggers state change,
     * the changes are queued using a Task instead of a MicroTask.
     */
    function withMacroTask (fn) {
      return fn._withTask || (fn._withTask = function () {
        useMacroTask = true;
        var res = fn.apply(null, arguments);
        useMacroTask = false;
        return res
      })
    }
    
    function nextTick (cb, ctx) {
      var _resolve;
      callbacks.push(function () {
        if (cb) {
          try {
            cb.call(ctx);
          } catch (e) {
            handleError(e, ctx, 'nextTick');
          }
        } else if (_resolve) {
          _resolve(ctx);
        }
      });
      if (!pending) {
        pending = true;
        if (useMacroTask) {
          macroTimerFunc();
        } else {
          microTimerFunc();
        }
      }
      // $flow-disable-line
      if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
          _resolve = resolve;
        })
      }
    }
    
    /*  */
    
    var mark;
    var measure;
    
    if (true) {
      var perf = inBrowser && window.performance;
      /* istanbul ignore if */
      if (
        perf &&
        perf.mark &&
        perf.measure &&
        perf.clearMarks &&
        perf.clearMeasures
      ) {
        mark = function (tag) { return perf.mark(tag); };
        measure = function (name, startTag, endTag) {
          perf.measure(name, startTag, endTag);
          perf.clearMarks(startTag);
          perf.clearMarks(endTag);
          perf.clearMeasures(name);
        };
      }
    }
    
    /* not type checking this file because flow doesn't play well with Proxy */
    
    var initProxy;
    
    if (true) {
      var allowedGlobals = makeMap(
        'Infinity,undefined,NaN,isFinite,isNaN,' +
        'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
        'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
        'require' // for Webpack/Browserify
      );
    
      var warnNonPresent = function (target, key) {
        warn(
          "Property or method \"" + key + "\" is not defined on the instance but " +
          'referenced during render. Make sure that this property is reactive, ' +
          'either in the data option, or for class-based components, by ' +
          'initializing the property. ' +
          'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
          target
        );
      };
    
      var hasProxy =
        typeof Proxy !== 'undefined' &&
        Proxy.toString().match(/native code/);
    
      if (hasProxy) {
        var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
        config.keyCodes = new Proxy(config.keyCodes, {
          set: function set (target, key, value) {
            if (isBuiltInModifier(key)) {
              warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
              return false
            } else {
              target[key] = value;
              return true
            }
          }
        });
      }
    
      var hasHandler = {
        has: function has (target, key) {
          var has = key in target;
          var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
          if (!has && !isAllowed) {
            warnNonPresent(target, key);
          }
          return has || !isAllowed
        }
      };
    
      var getHandler = {
        get: function get (target, key) {
          if (typeof key === 'string' && !(key in target)) {
            warnNonPresent(target, key);
          }
          return target[key]
        }
      };
    
      initProxy = function initProxy (vm) {
        if (hasProxy) {
          // determine which proxy handler to use
          var options = vm.$options;
          var handlers = options.render && options.render._withStripped
            ? getHandler
            : hasHandler;
          vm._renderProxy = new Proxy(vm, handlers);
        } else {
          vm._renderProxy = vm;
        }
      };
    }
    
    /*  */
    
    var seenObjects = new _Set();
    
    /**
     * Recursively traverse an object to evoke all converted
     * getters, so that every nested property inside the object
     * is collected as a "deep" dependency.
     */
    function traverse (val) {
      _traverse(val, seenObjects);
      seenObjects.clear();
    }
    
    function _traverse (val, seen) {
      var i, keys;
      var isA = Array.isArray(val);
      if ((!isA && !isObject(val)) || Object.isFrozen(val)) {
        return
      }
      if (val.__ob__) {
        var depId = val.__ob__.dep.id;
        if (seen.has(depId)) {
          return
        }
        seen.add(depId);
      }
      if (isA) {
        i = val.length;
        while (i--) { _traverse(val[i], seen); }
      } else {
        keys = Object.keys(val);
        i = keys.length;
        while (i--) { _traverse(val[keys[i]], seen); }
      }
    }
    
    /*  */
    
    var normalizeEvent = cached(function (name) {
      var passive = name.charAt(0) === '&';
      name = passive ? name.slice(1) : name;
      var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
      name = once$$1 ? name.slice(1) : name;
      var capture = name.charAt(0) === '!';
      name = capture ? name.slice(1) : name;
      return {
        name: name,
        once: once$$1,
        capture: capture,
        passive: passive
      }
    });
    
    function createFnInvoker (fns) {
      function invoker () {
        var arguments$1 = arguments;
    
        var fns = invoker.fns;
        if (Array.isArray(fns)) {
          var cloned = fns.slice();
          for (var i = 0; i < cloned.length; i++) {
            cloned[i].apply(null, arguments$1);
          }
        } else {
          // return handler return value for single handlers
          return fns.apply(null, arguments)
        }
      }
      invoker.fns = fns;
      return invoker
    }
    
    function updateListeners (
      on,
      oldOn,
      add,
      remove$$1,
      vm
    ) {
      var name, cur, old, event;
      for (name in on) {
        cur = on[name];
        old = oldOn[name];
        event = normalizeEvent(name);
        if (isUndef(cur)) {
          "development" !== 'production' && warn(
            "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
            vm
          );
        } else if (isUndef(old)) {
          if (isUndef(cur.fns)) {
            cur = on[name] = createFnInvoker(cur);
          }
          add(event.name, cur, event.once, event.capture, event.passive);
        } else if (cur !== old) {
          old.fns = cur;
          on[name] = old;
        }
      }
      for (name in oldOn) {
        if (isUndef(on[name])) {
          event = normalizeEvent(name);
          remove$$1(event.name, oldOn[name], event.capture);
        }
      }
    }
    
    /*  */
    
    function mergeVNodeHook (def, hookKey, hook) {
      if (def instanceof VNode) {
        def = def.data.hook || (def.data.hook = {});
      }
      var invoker;
      var oldHook = def[hookKey];
    
      function wrappedHook () {
        hook.apply(this, arguments);
        // important: remove merged hook to ensure it's called only once
        // and prevent memory leak
        remove(invoker.fns, wrappedHook);
      }
    
      if (isUndef(oldHook)) {
        // no existing hook
        invoker = createFnInvoker([wrappedHook]);
      } else {
        /* istanbul ignore if */
        if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
          // already a merged invoker
          invoker = oldHook;
          invoker.fns.push(wrappedHook);
        } else {
          // existing plain hook
          invoker = createFnInvoker([oldHook, wrappedHook]);
        }
      }
    
      invoker.merged = true;
      def[hookKey] = invoker;
    }
    
    /*  */
    
    function extractPropsFromVNodeData (
      data,
      Ctor,
      tag
    ) {
      // we are only extracting raw values here.
      // validation and default values are handled in the child
      // component itself.
      var propOptions = Ctor.options.props;
      if (isUndef(propOptions)) {
        return
      }
      var res = {};
      var attrs = data.attrs;
      var props = data.props;
      if (isDef(attrs) || isDef(props)) {
        for (var key in propOptions) {
          var altKey = hyphenate(key);
          if (true) {
            var keyInLowerCase = key.toLowerCase();
            if (
              key !== keyInLowerCase &&
              attrs && hasOwn(attrs, keyInLowerCase)
            ) {
              tip(
                "Prop \"" + keyInLowerCase + "\" is passed to component " +
                (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
                " \"" + key + "\". " +
                "Note that HTML attributes are case-insensitive and camelCased " +
                "props need to use their kebab-case equivalents when using in-DOM " +
                "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
              );
            }
          }
          checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
        }
      }
      return res
    }
    
    function checkProp (
      res,
      hash,
      key,
      altKey,
      preserve
    ) {
      if (isDef(hash)) {
        if (hasOwn(hash, key)) {
          res[key] = hash[key];
          if (!preserve) {
            delete hash[key];
          }
          return true
        } else if (hasOwn(hash, altKey)) {
          res[key] = hash[altKey];
          if (!preserve) {
            delete hash[altKey];
          }
          return true
        }
      }
      return false
    }
    
    /*  */
    
    // The template compiler attempts to minimize the need for normalization by
    // statically analyzing the template at compile time.
    //
    // For plain HTML markup, normalization can be completely skipped because the
    // generated render function is guaranteed to return Array<VNode>. There are
    // two cases where extra normalization is needed:
    
    // 1. When the children contains components - because a functional component
    // may return an Array instead of a single root. In this case, just a simple
    // normalization is needed - if any child is an Array, we flatten the whole
    // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
    // because functional components already normalize their own children.
    function simpleNormalizeChildren (children) {
      for (var i = 0; i < children.length; i++) {
        if (Array.isArray(children[i])) {
          return Array.prototype.concat.apply([], children)
        }
      }
      return children
    }
    
    // 2. When the children contains constructs that always generated nested Arrays,
    // e.g. <template>, <slot>, v-for, or when the children is provided by user
    // with hand-written render functions / JSX. In such cases a full normalization
    // is needed to cater to all possible types of children values.
    function normalizeChildren (children) {
      return isPrimitive(children)
        ? [createTextVNode(children)]
        : Array.isArray(children)
          ? normalizeArrayChildren(children)
          : undefined
    }
    
    function isTextNode (node) {
      return isDef(node) && isDef(node.text) && isFalse(node.isComment)
    }
    
    function normalizeArrayChildren (children, nestedIndex) {
      var res = [];
      var i, c, lastIndex, last;
      for (i = 0; i < children.length; i++) {
        c = children[i];
        if (isUndef(c) || typeof c === 'boolean') { continue }
        lastIndex = res.length - 1;
        last = res[lastIndex];
        //  nested
        if (Array.isArray(c)) {
          if (c.length > 0) {
            c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
            // merge adjacent text nodes
            if (isTextNode(c[0]) && isTextNode(last)) {
              res[lastIndex] = createTextVNode(last.text + (c[0]).text);
              c.shift();
            }
            res.push.apply(res, c);
          }
        } else if (isPrimitive(c)) {
          if (isTextNode(last)) {
            // merge adjacent text nodes
            // this is necessary for SSR hydration because text nodes are
            // essentially merged when rendered to HTML strings
            res[lastIndex] = createTextVNode(last.text + c);
          } else if (c !== '') {
            // convert primitive to vnode
            res.push(createTextVNode(c));
          }
        } else {
          if (isTextNode(c) && isTextNode(last)) {
            // merge adjacent text nodes
            res[lastIndex] = createTextVNode(last.text + c.text);
          } else {
            // default key for nested array children (likely generated by v-for)
            if (isTrue(children._isVList) &&
              isDef(c.tag) &&
              isUndef(c.key) &&
              isDef(nestedIndex)) {
              c.key = "__vlist" + nestedIndex + "_" + i + "__";
            }
            res.push(c);
          }
        }
      }
      return res
    }
    
    /*  */
    
    function ensureCtor (comp, base) {
      if (
        comp.__esModule ||
        (hasSymbol && comp[Symbol.toStringTag] === 'Module')
      ) {
        comp = comp.default;
      }
      return isObject(comp)
        ? base.extend(comp)
        : comp
    }
    
    function createAsyncPlaceholder (
      factory,
      data,
      context,
      children,
      tag
    ) {
      var node = createEmptyVNode();
      node.asyncFactory = factory;
      node.asyncMeta = { data: data, context: context, children: children, tag: tag };
      return node
    }
    
    function resolveAsyncComponent (
      factory,
      baseCtor,
      context
    ) {
      if (isTrue(factory.error) && isDef(factory.errorComp)) {
        return factory.errorComp
      }
    
      if (isDef(factory.resolved)) {
        return factory.resolved
      }
    
      if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
        return factory.loadingComp
      }
    
      if (isDef(factory.contexts)) {
        // already pending
        factory.contexts.push(context);
      } else {
        var contexts = factory.contexts = [context];
        var sync = true;
    
        var forceRender = function () {
          for (var i = 0, l = contexts.length; i < l; i++) {
            contexts[i].$forceUpdate();
          }
        };
    
        var resolve = once(function (res) {
          // cache resolved
          factory.resolved = ensureCtor(res, baseCtor);
          // invoke callbacks only if this is not a synchronous resolve
          // (async resolves are shimmed as synchronous during SSR)
          if (!sync) {
            forceRender();
          }
        });
    
        var reject = once(function (reason) {
          "development" !== 'production' && warn(
            "Failed to resolve async component: " + (String(factory)) +
            (reason ? ("\nReason: " + reason) : '')
          );
          if (isDef(factory.errorComp)) {
            factory.error = true;
            forceRender();
          }
        });
    
        var res = factory(resolve, reject);
    
        if (isObject(res)) {
          if (typeof res.then === 'function') {
            // () => Promise
            if (isUndef(factory.resolved)) {
              res.then(resolve, reject);
            }
          } else if (isDef(res.component) && typeof res.component.then === 'function') {
            res.component.then(resolve, reject);
    
            if (isDef(res.error)) {
              factory.errorComp = ensureCtor(res.error, baseCtor);
            }
    
            if (isDef(res.loading)) {
              factory.loadingComp = ensureCtor(res.loading, baseCtor);
              if (res.delay === 0) {
                factory.loading = true;
              } else {
                setTimeout(function () {
                  if (isUndef(factory.resolved) && isUndef(factory.error)) {
                    factory.loading = true;
                    forceRender();
                  }
                }, res.delay || 200);
              }
            }
    
            if (isDef(res.timeout)) {
              setTimeout(function () {
                if (isUndef(factory.resolved)) {
                  reject(
                     true
                      ? ("timeout (" + (res.timeout) + "ms)")
                      : null
                  );
                }
              }, res.timeout);
            }
          }
        }
    
        sync = false;
        // return in case resolved synchronously
        return factory.loading
          ? factory.loadingComp
          : factory.resolved
      }
    }
    
    /*  */
    
    function isAsyncPlaceholder (node) {
      return node.isComment && node.asyncFactory
    }
    
    /*  */
    
    function getFirstComponentChild (children) {
      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          var c = children[i];
          if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
            return c
          }
        }
      }
    }
    
    /*  */
    
    /*  */
    
    function initEvents (vm) {
      vm._events = Object.create(null);
      vm._hasHookEvent = false;
      // init parent attached events
      var listeners = vm.$options._parentListeners;
      if (listeners) {
        updateComponentListeners(vm, listeners);
      }
    }
    
    var target;
    
    function add (event, fn, once) {
      if (once) {
        target.$once(event, fn);
      } else {
        target.$on(event, fn);
      }
    }
    
    function remove$1 (event, fn) {
      target.$off(event, fn);
    }
    
    function updateComponentListeners (
      vm,
      listeners,
      oldListeners
    ) {
      target = vm;
      updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
      target = undefined;
    }
    
    function eventsMixin (Vue) {
      var hookRE = /^hook:/;
      Vue.prototype.$on = function (event, fn) {
        var this$1 = this;
    
        var vm = this;
        if (Array.isArray(event)) {
          for (var i = 0, l = event.length; i < l; i++) {
            this$1.$on(event[i], fn);
          }
        } else {
          (vm._events[event] || (vm._events[event] = [])).push(fn);
          // optimize hook:event cost by using a boolean flag marked at registration
          // instead of a hash lookup
          if (hookRE.test(event)) {
            vm._hasHookEvent = true;
          }
        }
        return vm
      };
    
      Vue.prototype.$once = function (event, fn) {
        var vm = this;
        function on () {
          vm.$off(event, on);
          fn.apply(vm, arguments);
        }
        on.fn = fn;
        vm.$on(event, on);
        return vm
      };
    
      Vue.prototype.$off = function (event, fn) {
        var this$1 = this;
    
        var vm = this;
        // all
        if (!arguments.length) {
          vm._events = Object.create(null);
          return vm
        }
        // array of events
        if (Array.isArray(event)) {
          for (var i = 0, l = event.length; i < l; i++) {
            this$1.$off(event[i], fn);
          }
          return vm
        }
        // specific event
        var cbs = vm._events[event];
        if (!cbs) {
          return vm
        }
        if (!fn) {
          vm._events[event] = null;
          return vm
        }
        if (fn) {
          // specific handler
          var cb;
          var i$1 = cbs.length;
          while (i$1--) {
            cb = cbs[i$1];
            if (cb === fn || cb.fn === fn) {
              cbs.splice(i$1, 1);
              break
            }
          }
        }
        return vm
      };
    
      Vue.prototype.$emit = function (event) {
        var vm = this;
        if (true) {
          var lowerCaseEvent = event.toLowerCase();
          if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
            tip(
              "Event \"" + lowerCaseEvent + "\" is emitted in component " +
              (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
              "Note that HTML attributes are case-insensitive and you cannot use " +
              "v-on to listen to camelCase events when using in-DOM templates. " +
              "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
            );
          }
        }
        var cbs = vm._events[event];
        if (cbs) {
          cbs = cbs.length > 1 ? toArray(cbs) : cbs;
          var args = toArray(arguments, 1);
          for (var i = 0, l = cbs.length; i < l; i++) {
            try {
              cbs[i].apply(vm, args);
            } catch (e) {
              handleError(e, vm, ("event handler for \"" + event + "\""));
            }
          }
        }
        return vm
      };
    }
    
    /*  */
    
    
    
    /**
     * Runtime helper for resolving raw children VNodes into a slot object.
     */
    function resolveSlots (
      children,
      context
    ) {
      var slots = {};
      if (!children) {
        return slots
      }
      for (var i = 0, l = children.length; i < l; i++) {
        var child = children[i];
        var data = child.data;
        // remove slot attribute if the node is resolved as a Vue slot node
        if (data && data.attrs && data.attrs.slot) {
          delete data.attrs.slot;
        }
        // named slots should only be respected if the vnode was rendered in the
        // same context.
        if ((child.context === context || child.fnContext === context) &&
          data && data.slot != null
        ) {
          var name = data.slot;
          var slot = (slots[name] || (slots[name] = []));
          if (child.tag === 'template') {
            slot.push.apply(slot, child.children || []);
          } else {
            slot.push(child);
          }
        } else {
          (slots.default || (slots.default = [])).push(child);
        }
      }
      // ignore slots that contains only whitespace
      for (var name$1 in slots) {
        if (slots[name$1].every(isWhitespace)) {
          delete slots[name$1];
        }
      }
      return slots
    }
    
    function isWhitespace (node) {
      return (node.isComment && !node.asyncFactory) || node.text === ' '
    }
    
    function resolveScopedSlots (
      fns, // see flow/vnode
      res
    ) {
      res = res || {};
      for (var i = 0; i < fns.length; i++) {
        if (Array.isArray(fns[i])) {
          resolveScopedSlots(fns[i], res);
        } else {
          res[fns[i].key] = fns[i].fn;
        }
      }
      return res
    }
    
    /*  */
    
    var activeInstance = null;
    var isUpdatingChildComponent = false;
    
    function initLifecycle (vm) {
      var options = vm.$options;
    
      // locate first non-abstract parent
      var parent = options.parent;
      if (parent && !options.abstract) {
        while (parent.$options.abstract && parent.$parent) {
          parent = parent.$parent;
        }
        parent.$children.push(vm);
      }
    
      vm.$parent = parent;
      vm.$root = parent ? parent.$root : vm;
    
      vm.$children = [];
      vm.$refs = {};
    
      vm._watcher = null;
      vm._inactive = null;
      vm._directInactive = false;
      vm._isMounted = false;
      vm._isDestroyed = false;
      vm._isBeingDestroyed = false;
    }
    
    function lifecycleMixin (Vue) {
      Vue.prototype._update = function (vnode, hydrating) {
        var vm = this;
        if (vm._isMounted) {
          callHook(vm, 'beforeUpdate');
        }
        var prevEl = vm.$el;
        var prevVnode = vm._vnode;
        var prevActiveInstance = activeInstance;
        activeInstance = vm;
        vm._vnode = vnode;
        // Vue.prototype.__patch__ is injected in entry points
        // based on the rendering backend used.
        if (!prevVnode) {
          // initial render
          vm.$el = vm.__patch__(
            vm.$el, vnode, hydrating, false /* removeOnly */,
            vm.$options._parentElm,
            vm.$options._refElm
          );
          // no need for the ref nodes after initial patch
          // this prevents keeping a detached DOM tree in memory (#5851)
          vm.$options._parentElm = vm.$options._refElm = null;
        } else {
          // updates
          vm.$el = vm.__patch__(prevVnode, vnode);
        }
        activeInstance = prevActiveInstance;
        // update __vue__ reference
        if (prevEl) {
          prevEl.__vue__ = null;
        }
        if (vm.$el) {
          vm.$el.__vue__ = vm;
        }
        // if parent is an HOC, update its $el as well
        if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
          vm.$parent.$el = vm.$el;
        }
        // updated hook is called by the scheduler to ensure that children are
        // updated in a parent's updated hook.
      };
    
      Vue.prototype.$forceUpdate = function () {
        var vm = this;
        if (vm._watcher) {
          vm._watcher.update();
        }
      };
    
      Vue.prototype.$destroy = function () {
        var vm = this;
        if (vm._isBeingDestroyed) {
          return
        }
        callHook(vm, 'beforeDestroy');
        vm._isBeingDestroyed = true;
        // remove self from parent
        var parent = vm.$parent;
        if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
          remove(parent.$children, vm);
        }
        // teardown watchers
        if (vm._watcher) {
          vm._watcher.teardown();
        }
        var i = vm._watchers.length;
        while (i--) {
          vm._watchers[i].teardown();
        }
        // remove reference from data ob
        // frozen object may not have observer.
        if (vm._data.__ob__) {
          vm._data.__ob__.vmCount--;
        }
        // call the last hook...
        vm._isDestroyed = true;
        // invoke destroy hooks on current rendered tree
        vm.__patch__(vm._vnode, null);
        // fire destroyed hook
        callHook(vm, 'destroyed');
        // turn off all instance listeners.
        vm.$off();
        // remove __vue__ reference
        if (vm.$el) {
          vm.$el.__vue__ = null;
        }
        // release circular reference (#6759)
        if (vm.$vnode) {
          vm.$vnode.parent = null;
        }
      };
    }
    
    function mountComponent (
      vm,
      el,
      hydrating
    ) {
      vm.$el = el;
      if (!vm.$options.render) {
        vm.$options.render = createEmptyVNode;
        if (true) {
          /* istanbul ignore if */
          if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
            vm.$options.el || el) {
            warn(
              'You are using the runtime-only build of Vue where the template ' +
              'compiler is not available. Either pre-compile the templates into ' +
              'render functions, or use the compiler-included build.',
              vm
            );
          } else {
            warn(
              'Failed to mount component: template or render function not defined.',
              vm
            );
          }
        }
      }
      callHook(vm, 'beforeMount');
    
      var updateComponent;
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        updateComponent = function () {
          var name = vm._name;
          var id = vm._uid;
          var startTag = "vue-perf-start:" + id;
          var endTag = "vue-perf-end:" + id;
    
          mark(startTag);
          var vnode = vm._render();
          mark(endTag);
          measure(("vue " + name + " render"), startTag, endTag);
    
          mark(startTag);
          vm._update(vnode, hydrating);
          mark(endTag);
          measure(("vue " + name + " patch"), startTag, endTag);
        };
      } else {
        updateComponent = function () {
          vm._update(vm._render(), hydrating);
        };
      }
    
      // we set this to vm._watcher inside the watcher's constructor
      // since the watcher's initial patch may call $forceUpdate (e.g. inside child
      // component's mounted hook), which relies on vm._watcher being already defined
      new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
      hydrating = false;
    
      // manually mounted instance, call mounted on self
      // mounted is called for render-created child components in its inserted hook
      if (vm.$vnode == null) {
        vm._isMounted = true;
        callHook(vm, 'mounted');
      }
      return vm
    }
    
    function updateChildComponent (
      vm,
      propsData,
      listeners,
      parentVnode,
      renderChildren
    ) {
      if (true) {
        isUpdatingChildComponent = true;
      }
    
      // determine whether component has slot children
      // we need to do this before overwriting $options._renderChildren
      var hasChildren = !!(
        renderChildren ||               // has new static slots
        vm.$options._renderChildren ||  // has old static slots
        parentVnode.data.scopedSlots || // has new scoped slots
        vm.$scopedSlots !== emptyObject // has old scoped slots
      );
    
      vm.$options._parentVnode = parentVnode;
      vm.$vnode = parentVnode; // update vm's placeholder node without re-render
    
      if (vm._vnode) { // update child tree's parent
        vm._vnode.parent = parentVnode;
      }
      vm.$options._renderChildren = renderChildren;
    
      // update $attrs and $listeners hash
      // these are also reactive so they may trigger child update if the child
      // used them during render
      vm.$attrs = (parentVnode.data && parentVnode.data.attrs) || emptyObject;
      vm.$listeners = listeners || emptyObject;
    
      // update props
      if (propsData && vm.$options.props) {
        observerState.shouldConvert = false;
        var props = vm._props;
        var propKeys = vm.$options._propKeys || [];
        for (var i = 0; i < propKeys.length; i++) {
          var key = propKeys[i];
          props[key] = validateProp(key, vm.$options.props, propsData, vm);
        }
        observerState.shouldConvert = true;
        // keep a copy of raw propsData
        vm.$options.propsData = propsData;
      }
    
      // update listeners
      if (listeners) {
        var oldListeners = vm.$options._parentListeners;
        vm.$options._parentListeners = listeners;
        updateComponentListeners(vm, listeners, oldListeners);
      }
      // resolve slots + force update if has children
      if (hasChildren) {
        vm.$slots = resolveSlots(renderChildren, parentVnode.context);
        vm.$forceUpdate();
      }
    
      if (true) {
        isUpdatingChildComponent = false;
      }
    }
    
    function isInInactiveTree (vm) {
      while (vm && (vm = vm.$parent)) {
        if (vm._inactive) { return true }
      }
      return false
    }
    
    function activateChildComponent (vm, direct) {
      if (direct) {
        vm._directInactive = false;
        if (isInInactiveTree(vm)) {
          return
        }
      } else if (vm._directInactive) {
        return
      }
      if (vm._inactive || vm._inactive === null) {
        vm._inactive = false;
        for (var i = 0; i < vm.$children.length; i++) {
          activateChildComponent(vm.$children[i]);
        }
        callHook(vm, 'activated');
      }
    }
    
    function deactivateChildComponent (vm, direct) {
      if (direct) {
        vm._directInactive = true;
        if (isInInactiveTree(vm)) {
          return
        }
      }
      if (!vm._inactive) {
        vm._inactive = true;
        for (var i = 0; i < vm.$children.length; i++) {
          deactivateChildComponent(vm.$children[i]);
        }
        callHook(vm, 'deactivated');
      }
    }
    
    function callHook (vm, hook) {
      var handlers = vm.$options[hook];
      if (handlers) {
        for (var i = 0, j = handlers.length; i < j; i++) {
          try {
            handlers[i].call(vm);
          } catch (e) {
            handleError(e, vm, (hook + " hook"));
          }
        }
      }
      if (vm._hasHookEvent) {
        vm.$emit('hook:' + hook);
      }
    }
    
    /*  */
    
    
    var MAX_UPDATE_COUNT = 100;
    
    var queue = [];
    var activatedChildren = [];
    var has = {};
    var circular = {};
    var waiting = false;
    var flushing = false;
    var index = 0;
    
    /**
     * Reset the scheduler's state.
     */
    function resetSchedulerState () {
      index = queue.length = activatedChildren.length = 0;
      has = {};
      if (true) {
        circular = {};
      }
      waiting = flushing = false;
    }
    
    /**
     * Flush both queues and run the watchers.
     */
    function flushSchedulerQueue () {
      flushing = true;
      var watcher, id;
    
      // Sort queue before flush.
      // This ensures that:
      // 1. Components are updated from parent to child. (because parent is always
      //    created before the child)
      // 2. A component's user watchers are run before its render watcher (because
      //    user watchers are created before the render watcher)
      // 3. If a component is destroyed during a parent component's watcher run,
      //    its watchers can be skipped.
      queue.sort(function (a, b) { return a.id - b.id; });
    
      // do not cache length because more watchers might be pushed
      // as we run existing watchers
      for (index = 0; index < queue.length; index++) {
        watcher = queue[index];
        id = watcher.id;
        has[id] = null;
        watcher.run();
        // in dev build, check and stop circular updates.
        if ("development" !== 'production' && has[id] != null) {
          circular[id] = (circular[id] || 0) + 1;
          if (circular[id] > MAX_UPDATE_COUNT) {
            warn(
              'You may have an infinite update loop ' + (
                watcher.user
                  ? ("in watcher with expression \"" + (watcher.expression) + "\"")
                  : "in a component render function."
              ),
              watcher.vm
            );
            break
          }
        }
      }
    
      // keep copies of post queues before resetting state
      var activatedQueue = activatedChildren.slice();
      var updatedQueue = queue.slice();
    
      resetSchedulerState();
    
      // call component updated and activated hooks
      callActivatedHooks(activatedQueue);
      callUpdatedHooks(updatedQueue);
    
      // devtool hook
      /* istanbul ignore if */
      if (devtools && config.devtools) {
        devtools.emit('flush');
      }
    }
    
    function callUpdatedHooks (queue) {
      var i = queue.length;
      while (i--) {
        var watcher = queue[i];
        var vm = watcher.vm;
        if (vm._watcher === watcher && vm._isMounted) {
          callHook(vm, 'updated');
        }
      }
    }
    
    /**
     * Queue a kept-alive component that was activated during patch.
     * The queue will be processed after the entire tree has been patched.
     */
    function queueActivatedComponent (vm) {
      // setting _inactive to false here so that a render function can
      // rely on checking whether it's in an inactive tree (e.g. router-view)
      vm._inactive = false;
      activatedChildren.push(vm);
    }
    
    function callActivatedHooks (queue) {
      for (var i = 0; i < queue.length; i++) {
        queue[i]._inactive = true;
        activateChildComponent(queue[i], true /* true */);
      }
    }
    
    /**
     * Push a watcher into the watcher queue.
     * Jobs with duplicate IDs will be skipped unless it's
     * pushed when the queue is being flushed.
     */
    function queueWatcher (watcher) {
      var id = watcher.id;
      if (has[id] == null) {
        has[id] = true;
        if (!flushing) {
          queue.push(watcher);
        } else {
          // if already flushing, splice the watcher based on its id
          // if already past its id, it will be run next immediately.
          var i = queue.length - 1;
          while (i > index && queue[i].id > watcher.id) {
            i--;
          }
          queue.splice(i + 1, 0, watcher);
        }
        // queue the flush
        if (!waiting) {
          waiting = true;
          nextTick(flushSchedulerQueue);
        }
      }
    }
    
    /*  */
    
    var uid$2 = 0;
    
    /**
     * A watcher parses an expression, collects dependencies,
     * and fires callback when the expression value changes.
     * This is used for both the $watch() api and directives.
     */
    var Watcher = function Watcher (
      vm,
      expOrFn,
      cb,
      options,
      isRenderWatcher
    ) {
      this.vm = vm;
      if (isRenderWatcher) {
        vm._watcher = this;
      }
      vm._watchers.push(this);
      // options
      if (options) {
        this.deep = !!options.deep;
        this.user = !!options.user;
        this.lazy = !!options.lazy;
        this.sync = !!options.sync;
      } else {
        this.deep = this.user = this.lazy = this.sync = false;
      }
      this.cb = cb;
      this.id = ++uid$2; // uid for batching
      this.active = true;
      this.dirty = this.lazy; // for lazy watchers
      this.deps = [];
      this.newDeps = [];
      this.depIds = new _Set();
      this.newDepIds = new _Set();
      this.expression =  true
        ? expOrFn.toString()
        : '';
      // parse expression for getter
      if (typeof expOrFn === 'function') {
        this.getter = expOrFn;
      } else {
        this.getter = parsePath(expOrFn);
        if (!this.getter) {
          this.getter = function () {};
          "development" !== 'production' && warn(
            "Failed watching path: \"" + expOrFn + "\" " +
            'Watcher only accepts simple dot-delimited paths. ' +
            'For full control, use a function instead.',
            vm
          );
        }
      }
      this.value = this.lazy
        ? undefined
        : this.get();
    };
    
    /**
     * Evaluate the getter, and re-collect dependencies.
     */
    Watcher.prototype.get = function get () {
      pushTarget(this);
      var value;
      var vm = this.vm;
      try {
        value = this.getter.call(vm, vm);
      } catch (e) {
        if (this.user) {
          handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
        } else {
          throw e
        }
      } finally {
        // "touch" every property so they are all tracked as
        // dependencies for deep watching
        if (this.deep) {
          traverse(value);
        }
        popTarget();
        this.cleanupDeps();
      }
      return value
    };
    
    /**
     * Add a dependency to this directive.
     */
    Watcher.prototype.addDep = function addDep (dep) {
      var id = dep.id;
      if (!this.newDepIds.has(id)) {
        this.newDepIds.add(id);
        this.newDeps.push(dep);
        if (!this.depIds.has(id)) {
          dep.addSub(this);
        }
      }
    };
    
    /**
     * Clean up for dependency collection.
     */
    Watcher.prototype.cleanupDeps = function cleanupDeps () {
        var this$1 = this;
    
      var i = this.deps.length;
      while (i--) {
        var dep = this$1.deps[i];
        if (!this$1.newDepIds.has(dep.id)) {
          dep.removeSub(this$1);
        }
      }
      var tmp = this.depIds;
      this.depIds = this.newDepIds;
      this.newDepIds = tmp;
      this.newDepIds.clear();
      tmp = this.deps;
      this.deps = this.newDeps;
      this.newDeps = tmp;
      this.newDeps.length = 0;
    };
    
    /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */
    Watcher.prototype.update = function update () {
      /* istanbul ignore else */
      if (this.lazy) {
        this.dirty = true;
      } else if (this.sync) {
        this.run();
      } else {
        queueWatcher(this);
      }
    };
    
    /**
     * Scheduler job interface.
     * Will be called by the scheduler.
     */
    Watcher.prototype.run = function run () {
      if (this.active) {
        var value = this.get();
        if (
          value !== this.value ||
          // Deep watchers and watchers on Object/Arrays should fire even
          // when the value is the same, because the value may
          // have mutated.
          isObject(value) ||
          this.deep
        ) {
          // set new value
          var oldValue = this.value;
          this.value = value;
          if (this.user) {
            try {
              this.cb.call(this.vm, value, oldValue);
            } catch (e) {
              handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
            }
          } else {
            this.cb.call(this.vm, value, oldValue);
          }
        }
      }
    };
    
    /**
     * Evaluate the value of the watcher.
     * This only gets called for lazy watchers.
     */
    Watcher.prototype.evaluate = function evaluate () {
      this.value = this.get();
      this.dirty = false;
    };
    
    /**
     * Depend on all deps collected by this watcher.
     */
    Watcher.prototype.depend = function depend () {
        var this$1 = this;
    
      var i = this.deps.length;
      while (i--) {
        this$1.deps[i].depend();
      }
    };
    
    /**
     * Remove self from all dependencies' subscriber list.
     */
    Watcher.prototype.teardown = function teardown () {
        var this$1 = this;
    
      if (this.active) {
        // remove self from vm's watcher list
        // this is a somewhat expensive operation so we skip it
        // if the vm is being destroyed.
        if (!this.vm._isBeingDestroyed) {
          remove(this.vm._watchers, this);
        }
        var i = this.deps.length;
        while (i--) {
          this$1.deps[i].removeSub(this$1);
        }
        this.active = false;
      }
    };
    
    /*  */
    
    var sharedPropertyDefinition = {
      enumerable: true,
      configurable: true,
      get: noop,
      set: noop
    };
    
    function proxy (target, sourceKey, key) {
      sharedPropertyDefinition.get = function proxyGetter () {
        return this[sourceKey][key]
      };
      sharedPropertyDefinition.set = function proxySetter (val) {
        this[sourceKey][key] = val;
      };
      Object.defineProperty(target, key, sharedPropertyDefinition);
    }
    
    function initState (vm) {
      vm._watchers = [];
      var opts = vm.$options;
      if (opts.props) { initProps(vm, opts.props); }
      if (opts.methods) { initMethods(vm, opts.methods); }
      if (opts.data) {
        initData(vm);
      } else {
        observe(vm._data = {}, true /* asRootData */);
      }
      if (opts.computed) { initComputed(vm, opts.computed); }
      if (opts.watch && opts.watch !== nativeWatch) {
        initWatch(vm, opts.watch);
      }
    }
    
    function initProps (vm, propsOptions) {
      var propsData = vm.$options.propsData || {};
      var props = vm._props = {};
      // cache prop keys so that future props updates can iterate using Array
      // instead of dynamic object key enumeration.
      var keys = vm.$options._propKeys = [];
      var isRoot = !vm.$parent;
      // root instance props should be converted
      observerState.shouldConvert = isRoot;
      var loop = function ( key ) {
        keys.push(key);
        var value = validateProp(key, propsOptions, propsData, vm);
        /* istanbul ignore else */
        if (true) {
          var hyphenatedKey = hyphenate(key);
          if (isReservedAttribute(hyphenatedKey) ||
              config.isReservedAttr(hyphenatedKey)) {
            warn(
              ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
              vm
            );
          }
          defineReactive(props, key, value, function () {
            if (vm.$parent && !isUpdatingChildComponent) {
              warn(
                "Avoid mutating a prop directly since the value will be " +
                "overwritten whenever the parent component re-renders. " +
                "Instead, use a data or computed property based on the prop's " +
                "value. Prop being mutated: \"" + key + "\"",
                vm
              );
            }
          });
        } else {
          defineReactive(props, key, value);
        }
        // static props are already proxied on the component's prototype
        // during Vue.extend(). We only need to proxy props defined at
        // instantiation here.
        if (!(key in vm)) {
          proxy(vm, "_props", key);
        }
      };
    
      for (var key in propsOptions) loop( key );
      observerState.shouldConvert = true;
    }
    
    function initData (vm) {
      var data = vm.$options.data;
      data = vm._data = typeof data === 'function'
        ? getData(data, vm)
        : data || {};
      if (!isPlainObject(data)) {
        data = {};
        "development" !== 'production' && warn(
          'data functions should return an object:\n' +
          'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
          vm
        );
      }
      // proxy data on instance
      var keys = Object.keys(data);
      var props = vm.$options.props;
      var methods = vm.$options.methods;
      var i = keys.length;
      while (i--) {
        var key = keys[i];
        if (true) {
          if (methods && hasOwn(methods, key)) {
            warn(
              ("Method \"" + key + "\" has already been defined as a data property."),
              vm
            );
          }
        }
        if (props && hasOwn(props, key)) {
          "development" !== 'production' && warn(
            "The data property \"" + key + "\" is already declared as a prop. " +
            "Use prop default value instead.",
            vm
          );
        } else if (!isReserved(key)) {
          proxy(vm, "_data", key);
        }
      }
      // observe data
      observe(data, true /* asRootData */);
    }
    
    function getData (data, vm) {
      try {
        return data.call(vm, vm)
      } catch (e) {
        handleError(e, vm, "data()");
        return {}
      }
    }
    
    var computedWatcherOptions = { lazy: true };
    
    function initComputed (vm, computed) {
      // $flow-disable-line
      var watchers = vm._computedWatchers = Object.create(null);
      // computed properties are just getters during SSR
      var isSSR = isServerRendering();
    
      for (var key in computed) {
        var userDef = computed[key];
        var getter = typeof userDef === 'function' ? userDef : userDef.get;
        if ("development" !== 'production' && getter == null) {
          warn(
            ("Getter is missing for computed property \"" + key + "\"."),
            vm
          );
        }
    
        if (!isSSR) {
          // create internal watcher for the computed property.
          watchers[key] = new Watcher(
            vm,
            getter || noop,
            noop,
            computedWatcherOptions
          );
        }
    
        // component-defined computed properties are already defined on the
        // component prototype. We only need to define computed properties defined
        // at instantiation here.
        if (!(key in vm)) {
          defineComputed(vm, key, userDef);
        } else if (true) {
          if (key in vm.$data) {
            warn(("The computed property \"" + key + "\" is already defined in data."), vm);
          } else if (vm.$options.props && key in vm.$options.props) {
            warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
          }
        }
      }
    }
    
    function defineComputed (
      target,
      key,
      userDef
    ) {
      var shouldCache = !isServerRendering();
      if (typeof userDef === 'function') {
        sharedPropertyDefinition.get = shouldCache
          ? createComputedGetter(key)
          : userDef;
        sharedPropertyDefinition.set = noop;
      } else {
        sharedPropertyDefinition.get = userDef.get
          ? shouldCache && userDef.cache !== false
            ? createComputedGetter(key)
            : userDef.get
          : noop;
        sharedPropertyDefinition.set = userDef.set
          ? userDef.set
          : noop;
      }
      if ("development" !== 'production' &&
          sharedPropertyDefinition.set === noop) {
        sharedPropertyDefinition.set = function () {
          warn(
            ("Computed property \"" + key + "\" was assigned to but it has no setter."),
            this
          );
        };
      }
      Object.defineProperty(target, key, sharedPropertyDefinition);
    }
    
    function createComputedGetter (key) {
      return function computedGetter () {
        var watcher = this._computedWatchers && this._computedWatchers[key];
        if (watcher) {
          if (watcher.dirty) {
            watcher.evaluate();
          }
          if (Dep.target) {
            watcher.depend();
          }
          return watcher.value
        }
      }
    }
    
    function initMethods (vm, methods) {
      var props = vm.$options.props;
      for (var key in methods) {
        if (true) {
          if (methods[key] == null) {
            warn(
              "Method \"" + key + "\" has an undefined value in the component definition. " +
              "Did you reference the function correctly?",
              vm
            );
          }
          if (props && hasOwn(props, key)) {
            warn(
              ("Method \"" + key + "\" has already been defined as a prop."),
              vm
            );
          }
          if ((key in vm) && isReserved(key)) {
            warn(
              "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
              "Avoid defining component methods that start with _ or $."
            );
          }
        }
        vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
      }
    }
    
    function initWatch (vm, watch) {
      for (var key in watch) {
        var handler = watch[key];
        if (Array.isArray(handler)) {
          for (var i = 0; i < handler.length; i++) {
            createWatcher(vm, key, handler[i]);
          }
        } else {
          createWatcher(vm, key, handler);
        }
      }
    }
    
    function createWatcher (
      vm,
      keyOrFn,
      handler,
      options
    ) {
      if (isPlainObject(handler)) {
        options = handler;
        handler = handler.handler;
      }
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      return vm.$watch(keyOrFn, handler, options)
    }
    
    function stateMixin (Vue) {
      // flow somehow has problems with directly declared definition object
      // when using Object.defineProperty, so we have to procedurally build up
      // the object here.
      var dataDef = {};
      dataDef.get = function () { return this._data };
      var propsDef = {};
      propsDef.get = function () { return this._props };
      if (true) {
        dataDef.set = function (newData) {
          warn(
            'Avoid replacing instance root $data. ' +
            'Use nested data properties instead.',
            this
          );
        };
        propsDef.set = function () {
          warn("$props is readonly.", this);
        };
      }
      Object.defineProperty(Vue.prototype, '$data', dataDef);
      Object.defineProperty(Vue.prototype, '$props', propsDef);
    
      Vue.prototype.$set = set;
      Vue.prototype.$delete = del;
    
      Vue.prototype.$watch = function (
        expOrFn,
        cb,
        options
      ) {
        var vm = this;
        if (isPlainObject(cb)) {
          return createWatcher(vm, expOrFn, cb, options)
        }
        options = options || {};
        options.user = true;
        var watcher = new Watcher(vm, expOrFn, cb, options);
        if (options.immediate) {
          cb.call(vm, watcher.value);
        }
        return function unwatchFn () {
          watcher.teardown();
        }
      };
    }
    
    /*  */
    
    function initProvide (vm) {
      var provide = vm.$options.provide;
      if (provide) {
        vm._provided = typeof provide === 'function'
          ? provide.call(vm)
          : provide;
      }
    }
    
    function initInjections (vm) {
      var result = resolveInject(vm.$options.inject, vm);
      if (result) {
        observerState.shouldConvert = false;
        Object.keys(result).forEach(function (key) {
          /* istanbul ignore else */
          if (true) {
            defineReactive(vm, key, result[key], function () {
              warn(
                "Avoid mutating an injected value directly since the changes will be " +
                "overwritten whenever the provided component re-renders. " +
                "injection being mutated: \"" + key + "\"",
                vm
              );
            });
          } else {
            defineReactive(vm, key, result[key]);
          }
        });
        observerState.shouldConvert = true;
      }
    }
    
    function resolveInject (inject, vm) {
      if (inject) {
        // inject is :any because flow is not smart enough to figure out cached
        var result = Object.create(null);
        var keys = hasSymbol
          ? Reflect.ownKeys(inject).filter(function (key) {
            /* istanbul ignore next */
            return Object.getOwnPropertyDescriptor(inject, key).enumerable
          })
          : Object.keys(inject);
    
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var provideKey = inject[key].from;
          var source = vm;
          while (source) {
            if (source._provided && provideKey in source._provided) {
              result[key] = source._provided[provideKey];
              break
            }
            source = source.$parent;
          }
          if (!source) {
            if ('default' in inject[key]) {
              var provideDefault = inject[key].default;
              result[key] = typeof provideDefault === 'function'
                ? provideDefault.call(vm)
                : provideDefault;
            } else if (true) {
              warn(("Injection \"" + key + "\" not found"), vm);
            }
          }
        }
        return result
      }
    }
    
    /*  */
    
    /**
     * Runtime helper for rendering v-for lists.
     */
    function renderList (
      val,
      render
    ) {
      var ret, i, l, keys, key;
      if (Array.isArray(val) || typeof val === 'string') {
        ret = new Array(val.length);
        for (i = 0, l = val.length; i < l; i++) {
          ret[i] = render(val[i], i);
        }
      } else if (typeof val === 'number') {
        ret = new Array(val);
        for (i = 0; i < val; i++) {
          ret[i] = render(i + 1, i);
        }
      } else if (isObject(val)) {
        keys = Object.keys(val);
        ret = new Array(keys.length);
        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
      if (isDef(ret)) {
        (ret)._isVList = true;
      }
      return ret
    }
    
    /*  */
    
    /**
     * Runtime helper for rendering <slot>
     */
    function renderSlot (
      name,
      fallback,
      props,
      bindObject
    ) {
      var scopedSlotFn = this.$scopedSlots[name];
      var nodes;
      if (scopedSlotFn) { // scoped slot
        props = props || {};
        if (bindObject) {
          if ("development" !== 'production' && !isObject(bindObject)) {
            warn(
              'slot v-bind without argument expects an Object',
              this
            );
          }
          props = extend(extend({}, bindObject), props);
        }
        nodes = scopedSlotFn(props) || fallback;
      } else {
        var slotNodes = this.$slots[name];
        // warn duplicate slot usage
        if (slotNodes) {
          if ("development" !== 'production' && slotNodes._rendered) {
            warn(
              "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
              "- this will likely cause render errors.",
              this
            );
          }
          slotNodes._rendered = true;
        }
        nodes = slotNodes || fallback;
      }
    
      var target = props && props.slot;
      if (target) {
        return this.$createElement('template', { slot: target }, nodes)
      } else {
        return nodes
      }
    }
    
    /*  */
    
    /**
     * Runtime helper for resolving filters
     */
    function resolveFilter (id) {
      return resolveAsset(this.$options, 'filters', id, true) || identity
    }
    
    /*  */
    
    /**
     * Runtime helper for checking keyCodes from config.
     * exposed as Vue.prototype._k
     * passing in eventKeyName as last argument separately for backwards compat
     */
    function checkKeyCodes (
      eventKeyCode,
      key,
      builtInAlias,
      eventKeyName
    ) {
      var keyCodes = config.keyCodes[key] || builtInAlias;
      if (keyCodes) {
        if (Array.isArray(keyCodes)) {
          return keyCodes.indexOf(eventKeyCode) === -1
        } else {
          return keyCodes !== eventKeyCode
        }
      } else if (eventKeyName) {
        return hyphenate(eventKeyName) !== key
      }
    }
    
    /*  */
    
    /**
     * Runtime helper for merging v-bind="object" into a VNode's data.
     */
    function bindObjectProps (
      data,
      tag,
      value,
      asProp,
      isSync
    ) {
      if (value) {
        if (!isObject(value)) {
          "development" !== 'production' && warn(
            'v-bind without argument expects an Object or Array value',
            this
          );
        } else {
          if (Array.isArray(value)) {
            value = toObject(value);
          }
          var hash;
          var loop = function ( key ) {
            if (
              key === 'class' ||
              key === 'style' ||
              isReservedAttribute(key)
            ) {
              hash = data;
            } else {
              var type = data.attrs && data.attrs.type;
              hash = asProp || config.mustUseProp(tag, type, key)
                ? data.domProps || (data.domProps = {})
                : data.attrs || (data.attrs = {});
            }
            if (!(key in hash)) {
              hash[key] = value[key];
    
              if (isSync) {
                var on = data.on || (data.on = {});
                on[("update:" + key)] = function ($event) {
                  value[key] = $event;
                };
              }
            }
          };
    
          for (var key in value) loop( key );
        }
      }
      return data
    }
    
    /*  */
    
    /**
     * Runtime helper for rendering static trees.
     */
    function renderStatic (
      index,
      isInFor
    ) {
      var cached = this._staticTrees || (this._staticTrees = []);
      var tree = cached[index];
      // if has already-rendered static tree and not inside v-for,
      // we can reuse the same tree by doing a shallow clone.
      if (tree && !isInFor) {
        return Array.isArray(tree)
          ? cloneVNodes(tree)
          : cloneVNode(tree)
      }
      // otherwise, render a fresh tree.
      tree = cached[index] = this.$options.staticRenderFns[index].call(
        this._renderProxy,
        null,
        this // for render fns generated for functional component templates
      );
      markStatic(tree, ("__static__" + index), false);
      return tree
    }
    
    /**
     * Runtime helper for v-once.
     * Effectively it means marking the node as static with a unique key.
     */
    function markOnce (
      tree,
      index,
      key
    ) {
      markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
      return tree
    }
    
    function markStatic (
      tree,
      key,
      isOnce
    ) {
      if (Array.isArray(tree)) {
        for (var i = 0; i < tree.length; i++) {
          if (tree[i] && typeof tree[i] !== 'string') {
            markStaticNode(tree[i], (key + "_" + i), isOnce);
          }
        }
      } else {
        markStaticNode(tree, key, isOnce);
      }
    }
    
    function markStaticNode (node, key, isOnce) {
      node.isStatic = true;
      node.key = key;
      node.isOnce = isOnce;
    }
    
    /*  */
    
    function bindObjectListeners (data, value) {
      if (value) {
        if (!isPlainObject(value)) {
          "development" !== 'production' && warn(
            'v-on without argument expects an Object value',
            this
          );
        } else {
          var on = data.on = data.on ? extend({}, data.on) : {};
          for (var key in value) {
            var existing = on[key];
            var ours = value[key];
            on[key] = existing ? [].concat(existing, ours) : ours;
          }
        }
      }
      return data
    }
    
    /*  */
    
    function installRenderHelpers (target) {
      target._o = markOnce;
      target._n = toNumber;
      target._s = toString;
      target._l = renderList;
      target._t = renderSlot;
      target._q = looseEqual;
      target._i = looseIndexOf;
      target._m = renderStatic;
      target._f = resolveFilter;
      target._k = checkKeyCodes;
      target._b = bindObjectProps;
      target._v = createTextVNode;
      target._e = createEmptyVNode;
      target._u = resolveScopedSlots;
      target._g = bindObjectListeners;
    }
    
    /*  */
    
    function FunctionalRenderContext (
      data,
      props,
      children,
      parent,
      Ctor
    ) {
      var options = Ctor.options;
      this.data = data;
      this.props = props;
      this.children = children;
      this.parent = parent;
      this.listeners = data.on || emptyObject;
      this.injections = resolveInject(options.inject, parent);
      this.slots = function () { return resolveSlots(children, parent); };
    
      // ensure the createElement function in functional components
      // gets a unique context - this is necessary for correct named slot check
      var contextVm = Object.create(parent);
      var isCompiled = isTrue(options._compiled);
      var needNormalization = !isCompiled;
    
      // support for compiled functional template
      if (isCompiled) {
        // exposing $options for renderStatic()
        this.$options = options;
        // pre-resolve slots for renderSlot()
        this.$slots = this.slots();
        this.$scopedSlots = data.scopedSlots || emptyObject;
      }
    
      if (options._scopeId) {
        this._c = function (a, b, c, d) {
          var vnode = createElement(contextVm, a, b, c, d, needNormalization);
          if (vnode) {
            vnode.fnScopeId = options._scopeId;
            vnode.fnContext = parent;
          }
          return vnode
        };
      } else {
        this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
      }
    }
    
    installRenderHelpers(FunctionalRenderContext.prototype);
    
    function createFunctionalComponent (
      Ctor,
      propsData,
      data,
      contextVm,
      children
    ) {
      var options = Ctor.options;
      var props = {};
      var propOptions = options.props;
      if (isDef(propOptions)) {
        for (var key in propOptions) {
          props[key] = validateProp(key, propOptions, propsData || emptyObject);
        }
      } else {
        if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
        if (isDef(data.props)) { mergeProps(props, data.props); }
      }
    
      var renderContext = new FunctionalRenderContext(
        data,
        props,
        children,
        contextVm,
        Ctor
      );
    
      var vnode = options.render.call(null, renderContext._c, renderContext);
    
      if (vnode instanceof VNode) {
        vnode.fnContext = contextVm;
        vnode.fnOptions = options;
        if (data.slot) {
          (vnode.data || (vnode.data = {})).slot = data.slot;
        }
      }
    
      return vnode
    }
    
    function mergeProps (to, from) {
      for (var key in from) {
        to[camelize(key)] = from[key];
      }
    }
    
    /*  */
    
    // hooks to be invoked on component VNodes during patch
    var componentVNodeHooks = {
      init: function init (
        vnode,
        hydrating,
        parentElm,
        refElm
      ) {
        if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
          var child = vnode.componentInstance = createComponentInstanceForVnode(
            vnode,
            activeInstance,
            parentElm,
            refElm
          );
          child.$mount(hydrating ? vnode.elm : undefined, hydrating);
        } else if (vnode.data.keepAlive) {
          // kept-alive components, treat as a patch
          var mountedNode = vnode; // work around flow
          componentVNodeHooks.prepatch(mountedNode, mountedNode);
        }
      },
    
      prepatch: function prepatch (oldVnode, vnode) {
        var options = vnode.componentOptions;
        var child = vnode.componentInstance = oldVnode.componentInstance;
        updateChildComponent(
          child,
          options.propsData, // updated props
          options.listeners, // updated listeners
          vnode, // new parent vnode
          options.children // new children
        );
      },
    
      insert: function insert (vnode) {
        var context = vnode.context;
        var componentInstance = vnode.componentInstance;
        if (!componentInstance._isMounted) {
          componentInstance._isMounted = true;
          callHook(componentInstance, 'mounted');
        }
        if (vnode.data.keepAlive) {
          if (context._isMounted) {
            // vue-router#1212
            // During updates, a kept-alive component's child components may
            // change, so directly walking the tree here may call activated hooks
            // on incorrect children. Instead we push them into a queue which will
            // be processed after the whole patch process ended.
            queueActivatedComponent(componentInstance);
          } else {
            activateChildComponent(componentInstance, true /* direct */);
          }
        }
      },
    
      destroy: function destroy (vnode) {
        var componentInstance = vnode.componentInstance;
        if (!componentInstance._isDestroyed) {
          if (!vnode.data.keepAlive) {
            componentInstance.$destroy();
          } else {
            deactivateChildComponent(componentInstance, true /* direct */);
          }
        }
      }
    };
    
    var hooksToMerge = Object.keys(componentVNodeHooks);
    
    function createComponent (
      Ctor,
      data,
      context,
      children,
      tag
    ) {
      if (isUndef(Ctor)) {
        return
      }
    
      var baseCtor = context.$options._base;
    
      // plain options object: turn it into a constructor
      if (isObject(Ctor)) {
        Ctor = baseCtor.extend(Ctor);
      }
    
      // if at this stage it's not a constructor or an async component factory,
      // reject.
      if (typeof Ctor !== 'function') {
        if (true) {
          warn(("Invalid Component definition: " + (String(Ctor))), context);
        }
        return
      }
    
      // async component
      var asyncFactory;
      if (isUndef(Ctor.cid)) {
        asyncFactory = Ctor;
        Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
        if (Ctor === undefined) {
          // return a placeholder node for async component, which is rendered
          // as a comment node but preserves all the raw information for the node.
          // the information will be used for async server-rendering and hydration.
          return createAsyncPlaceholder(
            asyncFactory,
            data,
            context,
            children,
            tag
          )
        }
      }
    
      data = data || {};
    
      // resolve constructor options in case global mixins are applied after
      // component constructor creation
      resolveConstructorOptions(Ctor);
    
      // transform component v-model data into props & events
      if (isDef(data.model)) {
        transformModel(Ctor.options, data);
      }
    
      // extract props
      var propsData = extractPropsFromVNodeData(data, Ctor, tag);
    
      // functional component
      if (isTrue(Ctor.options.functional)) {
        return createFunctionalComponent(Ctor, propsData, data, context, children)
      }
    
      // extract listeners, since these needs to be treated as
      // child component listeners instead of DOM listeners
      var listeners = data.on;
      // replace with listeners with .native modifier
      // so it gets processed during parent component patch.
      data.on = data.nativeOn;
    
      if (isTrue(Ctor.options.abstract)) {
        // abstract components do not keep anything
        // other than props & listeners & slot
    
        // work around flow
        var slot = data.slot;
        data = {};
        if (slot) {
          data.slot = slot;
        }
      }
    
      // merge component management hooks onto the placeholder node
      mergeHooks(data);
    
      // return a placeholder vnode
      var name = Ctor.options.name || tag;
      var vnode = new VNode(
        ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
        data, undefined, undefined, undefined, context,
        { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
        asyncFactory
      );
      return vnode
    }
    
    function createComponentInstanceForVnode (
      vnode, // we know it's MountedComponentVNode but flow doesn't
      parent, // activeInstance in lifecycle state
      parentElm,
      refElm
    ) {
      var options = {
        _isComponent: true,
        parent: parent,
        _parentVnode: vnode,
        _parentElm: parentElm || null,
        _refElm: refElm || null
      };
      // check inline-template render functions
      var inlineTemplate = vnode.data.inlineTemplate;
      if (isDef(inlineTemplate)) {
        options.render = inlineTemplate.render;
        options.staticRenderFns = inlineTemplate.staticRenderFns;
      }
      return new vnode.componentOptions.Ctor(options)
    }
    
    function mergeHooks (data) {
      if (!data.hook) {
        data.hook = {};
      }
      for (var i = 0; i < hooksToMerge.length; i++) {
        var key = hooksToMerge[i];
        var fromParent = data.hook[key];
        var ours = componentVNodeHooks[key];
        data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
      }
    }
    
    function mergeHook$1 (one, two) {
      return function (a, b, c, d) {
        one(a, b, c, d);
        two(a, b, c, d);
      }
    }
    
    // transform component v-model info (value and callback) into
    // prop and event handler respectively.
    function transformModel (options, data) {
      var prop = (options.model && options.model.prop) || 'value';
      var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
      var on = data.on || (data.on = {});
      if (isDef(on[event])) {
        on[event] = [data.model.callback].concat(on[event]);
      } else {
        on[event] = data.model.callback;
      }
    }
    
    /*  */
    
    var SIMPLE_NORMALIZE = 1;
    var ALWAYS_NORMALIZE = 2;
    
    // wrapper function for providing a more flexible interface
    // without getting yelled at by flow
    function createElement (
      context,
      tag,
      data,
      children,
      normalizationType,
      alwaysNormalize
    ) {
      if (Array.isArray(data) || isPrimitive(data)) {
        normalizationType = children;
        children = data;
        data = undefined;
      }
      if (isTrue(alwaysNormalize)) {
        normalizationType = ALWAYS_NORMALIZE;
      }
      return _createElement(context, tag, data, children, normalizationType)
    }
    
    function _createElement (
      context,
      tag,
      data,
      children,
      normalizationType
    ) {
      if (isDef(data) && isDef((data).__ob__)) {
        "development" !== 'production' && warn(
          "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
          'Always create fresh vnode data objects in each render!',
          context
        );
        return createEmptyVNode()
      }
      // object syntax in v-bind
      if (isDef(data) && isDef(data.is)) {
        tag = data.is;
      }
      if (!tag) {
        // in case of component :is set to falsy value
        return createEmptyVNode()
      }
      // warn against non-primitive key
      if ("development" !== 'production' &&
        isDef(data) && isDef(data.key) && !isPrimitive(data.key)
      ) {
        warn(
          'Avoid using non-primitive value as key, ' +
          'use string/number value instead.',
          context
        );
      }
      // support single function children as default scoped slot
      if (Array.isArray(children) &&
        typeof children[0] === 'function'
      ) {
        data = data || {};
        data.scopedSlots = { default: children[0] };
        children.length = 0;
      }
      if (normalizationType === ALWAYS_NORMALIZE) {
        children = normalizeChildren(children);
      } else if (normalizationType === SIMPLE_NORMALIZE) {
        children = simpleNormalizeChildren(children);
      }
      var vnode, ns;
      if (typeof tag === 'string') {
        var Ctor;
        ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
        if (config.isReservedTag(tag)) {
          // platform built-in elements
          vnode = new VNode(
            config.parsePlatformTagName(tag), data, children,
            undefined, undefined, context
          );
        } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
          // component
          vnode = createComponent(Ctor, data, context, children, tag);
        } else {
          // unknown or unlisted namespaced elements
          // check at runtime because it may get assigned a namespace when its
          // parent normalizes children
          vnode = new VNode(
            tag, data, children,
            undefined, undefined, context
          );
        }
      } else {
        // direct component options / constructor
        vnode = createComponent(tag, data, context, children);
      }
      if (isDef(vnode)) {
        if (ns) { applyNS(vnode, ns); }
        return vnode
      } else {
        return createEmptyVNode()
      }
    }
    
    function applyNS (vnode, ns, force) {
      vnode.ns = ns;
      if (vnode.tag === 'foreignObject') {
        // use default namespace inside foreignObject
        ns = undefined;
        force = true;
      }
      if (isDef(vnode.children)) {
        for (var i = 0, l = vnode.children.length; i < l; i++) {
          var child = vnode.children[i];
          if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
            applyNS(child, ns, force);
          }
        }
      }
    }
    
    /*  */
    
    function initRender (vm) {
      vm._vnode = null; // the root of the child tree
      vm._staticTrees = null; // v-once cached trees
      var options = vm.$options;
      var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
      var renderContext = parentVnode && parentVnode.context;
      vm.$slots = resolveSlots(options._renderChildren, renderContext);
      vm.$scopedSlots = emptyObject;
      // bind the createElement fn to this instance
      // so that we get proper render context inside it.
      // args order: tag, data, children, normalizationType, alwaysNormalize
      // internal version is used by render functions compiled from templates
      vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
      // normalization is always applied for the public version, used in
      // user-written render functions.
      vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
    
      // $attrs & $listeners are exposed for easier HOC creation.
      // they need to be reactive so that HOCs using them are always updated
      var parentData = parentVnode && parentVnode.data;
    
      /* istanbul ignore else */
      if (true) {
        defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
          !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
        }, true);
        defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
          !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
        }, true);
      } else {
        defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
        defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
      }
    }
    
    function renderMixin (Vue) {
      // install runtime convenience helpers
      installRenderHelpers(Vue.prototype);
    
      Vue.prototype.$nextTick = function (fn) {
        return nextTick(fn, this)
      };
    
      Vue.prototype._render = function () {
        var vm = this;
        var ref = vm.$options;
        var render = ref.render;
        var _parentVnode = ref._parentVnode;
    
        if (vm._isMounted) {
          // if the parent didn't update, the slot nodes will be the ones from
          // last render. They need to be cloned to ensure "freshness" for this render.
          for (var key in vm.$slots) {
            var slot = vm.$slots[key];
            // _rendered is a flag added by renderSlot, but may not be present
            // if the slot is passed from manually written render functions
            if (slot._rendered || (slot[0] && slot[0].elm)) {
              vm.$slots[key] = cloneVNodes(slot, true /* deep */);
            }
          }
        }
    
        vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;
    
        // set parent vnode. this allows render functions to have access
        // to the data on the placeholder node.
        vm.$vnode = _parentVnode;
        // render self
        var vnode;
        try {
          vnode = render.call(vm._renderProxy, vm.$createElement);
        } catch (e) {
          handleError(e, vm, "render");
          // return error render result,
          // or previous vnode to prevent render error causing blank component
          /* istanbul ignore else */
          if (true) {
            if (vm.$options.renderError) {
              try {
                vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
              } catch (e) {
                handleError(e, vm, "renderError");
                vnode = vm._vnode;
              }
            } else {
              vnode = vm._vnode;
            }
          } else {
            vnode = vm._vnode;
          }
        }
        // return empty vnode in case the render function errored out
        if (!(vnode instanceof VNode)) {
          if ("development" !== 'production' && Array.isArray(vnode)) {
            warn(
              'Multiple root nodes returned from render function. Render function ' +
              'should return a single root node.',
              vm
            );
          }
          vnode = createEmptyVNode();
        }
        // set parent
        vnode.parent = _parentVnode;
        return vnode
      };
    }
    
    /*  */
    
    var uid$1 = 0;
    
    function initMixin (Vue) {
      Vue.prototype._init = function (options) {
        var vm = this;
        // a uid
        vm._uid = uid$1++;
    
        var startTag, endTag;
        /* istanbul ignore if */
        if ("development" !== 'production' && config.performance && mark) {
          startTag = "vue-perf-start:" + (vm._uid);
          endTag = "vue-perf-end:" + (vm._uid);
          mark(startTag);
        }
    
        // a flag to avoid this being observed
        vm._isVue = true;
        // merge options
        if (options && options._isComponent) {
          // optimize internal component instantiation
          // since dynamic options merging is pretty slow, and none of the
          // internal component options needs special treatment.
          initInternalComponent(vm, options);
        } else {
          vm.$options = mergeOptions(
            resolveConstructorOptions(vm.constructor),
            options || {},
            vm
          );
        }
        /* istanbul ignore else */
        if (true) {
          initProxy(vm);
        } else {
          vm._renderProxy = vm;
        }
        // expose real self
        vm._self = vm;
        initLifecycle(vm);
        initEvents(vm);
        initRender(vm);
        callHook(vm, 'beforeCreate');
        initInjections(vm); // resolve injections before data/props
        initState(vm);
        initProvide(vm); // resolve provide after data/props
        callHook(vm, 'created');
    
        /* istanbul ignore if */
        if ("development" !== 'production' && config.performance && mark) {
          vm._name = formatComponentName(vm, false);
          mark(endTag);
          measure(("vue " + (vm._name) + " init"), startTag, endTag);
        }
    
        if (vm.$options.el) {
          vm.$mount(vm.$options.el);
        }
      };
    }
    
    function initInternalComponent (vm, options) {
      var opts = vm.$options = Object.create(vm.constructor.options);
      // doing this because it's faster than dynamic enumeration.
      var parentVnode = options._parentVnode;
      opts.parent = options.parent;
      opts._parentVnode = parentVnode;
      opts._parentElm = options._parentElm;
      opts._refElm = options._refElm;
    
      var vnodeComponentOptions = parentVnode.componentOptions;
      opts.propsData = vnodeComponentOptions.propsData;
      opts._parentListeners = vnodeComponentOptions.listeners;
      opts._renderChildren = vnodeComponentOptions.children;
      opts._componentTag = vnodeComponentOptions.tag;
    
      if (options.render) {
        opts.render = options.render;
        opts.staticRenderFns = options.staticRenderFns;
      }
    }
    
    function resolveConstructorOptions (Ctor) {
      var options = Ctor.options;
      if (Ctor.super) {
        var superOptions = resolveConstructorOptions(Ctor.super);
        var cachedSuperOptions = Ctor.superOptions;
        if (superOptions !== cachedSuperOptions) {
          // super option changed,
          // need to resolve new options.
          Ctor.superOptions = superOptions;
          // check if there are any late-modified/attached options (#4976)
          var modifiedOptions = resolveModifiedOptions(Ctor);
          // update base extend options
          if (modifiedOptions) {
            extend(Ctor.extendOptions, modifiedOptions);
          }
          options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
          if (options.name) {
            options.components[options.name] = Ctor;
          }
        }
      }
      return options
    }
    
    function resolveModifiedOptions (Ctor) {
      var modified;
      var latest = Ctor.options;
      var extended = Ctor.extendOptions;
      var sealed = Ctor.sealedOptions;
      for (var key in latest) {
        if (latest[key] !== sealed[key]) {
          if (!modified) { modified = {}; }
          modified[key] = dedupe(latest[key], extended[key], sealed[key]);
        }
      }
      return modified
    }
    
    function dedupe (latest, extended, sealed) {
      // compare latest and sealed to ensure lifecycle hooks won't be duplicated
      // between merges
      if (Array.isArray(latest)) {
        var res = [];
        sealed = Array.isArray(sealed) ? sealed : [sealed];
        extended = Array.isArray(extended) ? extended : [extended];
        for (var i = 0; i < latest.length; i++) {
          // push original options and not sealed options to exclude duplicated options
          if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
            res.push(latest[i]);
          }
        }
        return res
      } else {
        return latest
      }
    }
    
    function Vue$3 (options) {
      if ("development" !== 'production' &&
        !(this instanceof Vue$3)
      ) {
        warn('Vue is a constructor and should be called with the `new` keyword');
      }
      this._init(options);
    }
    
    initMixin(Vue$3);
    stateMixin(Vue$3);
    eventsMixin(Vue$3);
    lifecycleMixin(Vue$3);
    renderMixin(Vue$3);
    
    /*  */
    
    function initUse (Vue) {
      Vue.use = function (plugin) {
        var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
        if (installedPlugins.indexOf(plugin) > -1) {
          return this
        }
    
        // additional parameters
        var args = toArray(arguments, 1);
        args.unshift(this);
        if (typeof plugin.install === 'function') {
          plugin.install.apply(plugin, args);
        } else if (typeof plugin === 'function') {
          plugin.apply(null, args);
        }
        installedPlugins.push(plugin);
        return this
      };
    }
    
    /*  */
    
    function initMixin$1 (Vue) {
      Vue.mixin = function (mixin) {
        this.options = mergeOptions(this.options, mixin);
        return this
      };
    }
    
    /*  */
    
    function initExtend (Vue) {
      /**
       * Each instance constructor, including Vue, has a unique
       * cid. This enables us to create wrapped "child
       * constructors" for prototypal inheritance and cache them.
       */
      Vue.cid = 0;
      var cid = 1;
    
      /**
       * Class inheritance
       */
      Vue.extend = function (extendOptions) {
        extendOptions = extendOptions || {};
        var Super = this;
        var SuperId = Super.cid;
        var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
        if (cachedCtors[SuperId]) {
          return cachedCtors[SuperId]
        }
    
        var name = extendOptions.name || Super.options.name;
        if ("development" !== 'production' && name) {
          validateComponentName(name);
        }
    
        var Sub = function VueComponent (options) {
          this._init(options);
        };
        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.cid = cid++;
        Sub.options = mergeOptions(
          Super.options,
          extendOptions
        );
        Sub['super'] = Super;
    
        // For props and computed properties, we define the proxy getters on
        // the Vue instances at extension time, on the extended prototype. This
        // avoids Object.defineProperty calls for each instance created.
        if (Sub.options.props) {
          initProps$1(Sub);
        }
        if (Sub.options.computed) {
          initComputed$1(Sub);
        }
    
        // allow further extension/mixin/plugin usage
        Sub.extend = Super.extend;
        Sub.mixin = Super.mixin;
        Sub.use = Super.use;
    
        // create asset registers, so extended classes
        // can have their private assets too.
        ASSET_TYPES.forEach(function (type) {
          Sub[type] = Super[type];
        });
        // enable recursive self-lookup
        if (name) {
          Sub.options.components[name] = Sub;
        }
    
        // keep a reference to the super options at extension time.
        // later at instantiation we can check if Super's options have
        // been updated.
        Sub.superOptions = Super.options;
        Sub.extendOptions = extendOptions;
        Sub.sealedOptions = extend({}, Sub.options);
    
        // cache constructor
        cachedCtors[SuperId] = Sub;
        return Sub
      };
    }
    
    function initProps$1 (Comp) {
      var props = Comp.options.props;
      for (var key in props) {
        proxy(Comp.prototype, "_props", key);
      }
    }
    
    function initComputed$1 (Comp) {
      var computed = Comp.options.computed;
      for (var key in computed) {
        defineComputed(Comp.prototype, key, computed[key]);
      }
    }
    
    /*  */
    
    function initAssetRegisters (Vue) {
      /**
       * Create asset registration methods.
       */
      ASSET_TYPES.forEach(function (type) {
        Vue[type] = function (
          id,
          definition
        ) {
          if (!definition) {
            return this.options[type + 's'][id]
          } else {
            /* istanbul ignore if */
            if ("development" !== 'production' && type === 'component') {
              validateComponentName(id);
            }
            if (type === 'component' && isPlainObject(definition)) {
              definition.name = definition.name || id;
              definition = this.options._base.extend(definition);
            }
            if (type === 'directive' && typeof definition === 'function') {
              definition = { bind: definition, update: definition };
            }
            this.options[type + 's'][id] = definition;
            return definition
          }
        };
      });
    }
    
    /*  */
    
    function getComponentName (opts) {
      return opts && (opts.Ctor.options.name || opts.tag)
    }
    
    function matches (pattern, name) {
      if (Array.isArray(pattern)) {
        return pattern.indexOf(name) > -1
      } else if (typeof pattern === 'string') {
        return pattern.split(',').indexOf(name) > -1
      } else if (isRegExp(pattern)) {
        return pattern.test(name)
      }
      /* istanbul ignore next */
      return false
    }
    
    function pruneCache (keepAliveInstance, filter) {
      var cache = keepAliveInstance.cache;
      var keys = keepAliveInstance.keys;
      var _vnode = keepAliveInstance._vnode;
      for (var key in cache) {
        var cachedNode = cache[key];
        if (cachedNode) {
          var name = getComponentName(cachedNode.componentOptions);
          if (name && !filter(name)) {
            pruneCacheEntry(cache, key, keys, _vnode);
          }
        }
      }
    }
    
    function pruneCacheEntry (
      cache,
      key,
      keys,
      current
    ) {
      var cached$$1 = cache[key];
      if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
        cached$$1.componentInstance.$destroy();
      }
      cache[key] = null;
      remove(keys, key);
    }
    
    var patternTypes = [String, RegExp, Array];
    
    var KeepAlive = {
      name: 'keep-alive',
      abstract: true,
    
      props: {
        include: patternTypes,
        exclude: patternTypes,
        max: [String, Number]
      },
    
      created: function created () {
        this.cache = Object.create(null);
        this.keys = [];
      },
    
      destroyed: function destroyed () {
        var this$1 = this;
    
        for (var key in this$1.cache) {
          pruneCacheEntry(this$1.cache, key, this$1.keys);
        }
      },
    
      watch: {
        include: function include (val) {
          pruneCache(this, function (name) { return matches(val, name); });
        },
        exclude: function exclude (val) {
          pruneCache(this, function (name) { return !matches(val, name); });
        }
      },
    
      render: function render () {
        var slot = this.$slots.default;
        var vnode = getFirstComponentChild(slot);
        var componentOptions = vnode && vnode.componentOptions;
        if (componentOptions) {
          // check pattern
          var name = getComponentName(componentOptions);
          var ref = this;
          var include = ref.include;
          var exclude = ref.exclude;
          if (
            // not included
            (include && (!name || !matches(include, name))) ||
            // excluded
            (exclude && name && matches(exclude, name))
          ) {
            return vnode
          }
    
          var ref$1 = this;
          var cache = ref$1.cache;
          var keys = ref$1.keys;
          var key = vnode.key == null
            // same constructor may get registered as different local components
            // so cid alone is not enough (#3269)
            ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
            : vnode.key;
          if (cache[key]) {
            vnode.componentInstance = cache[key].componentInstance;
            // make current key freshest
            remove(keys, key);
            keys.push(key);
          } else {
            cache[key] = vnode;
            keys.push(key);
            // prune oldest entry
            if (this.max && keys.length > parseInt(this.max)) {
              pruneCacheEntry(cache, keys[0], keys, this._vnode);
            }
          }
    
          vnode.data.keepAlive = true;
        }
        return vnode || (slot && slot[0])
      }
    };
    
    var builtInComponents = {
      KeepAlive: KeepAlive
    };
    
    /*  */
    
    function initGlobalAPI (Vue) {
      // config
      var configDef = {};
      configDef.get = function () { return config; };
      if (true) {
        configDef.set = function () {
          warn(
            'Do not replace the Vue.config object, set individual fields instead.'
          );
        };
      }
      Object.defineProperty(Vue, 'config', configDef);
    
      // exposed util methods.
      // NOTE: these are not considered part of the public API - avoid relying on
      // them unless you are aware of the risk.
      Vue.util = {
        warn: warn,
        extend: extend,
        mergeOptions: mergeOptions,
        defineReactive: defineReactive
      };
    
      Vue.set = set;
      Vue.delete = del;
      Vue.nextTick = nextTick;
    
      Vue.options = Object.create(null);
      ASSET_TYPES.forEach(function (type) {
        Vue.options[type + 's'] = Object.create(null);
      });
    
      // this is used to identify the "base" constructor to extend all plain-object
      // components with in Weex's multi-instance scenarios.
      Vue.options._base = Vue;
    
      extend(Vue.options.components, builtInComponents);
    
      initUse(Vue);
      initMixin$1(Vue);
      initExtend(Vue);
      initAssetRegisters(Vue);
    }
    
    initGlobalAPI(Vue$3);
    
    Object.defineProperty(Vue$3.prototype, '$isServer', {
      get: isServerRendering
    });
    
    Object.defineProperty(Vue$3.prototype, '$ssrContext', {
      get: function get () {
        /* istanbul ignore next */
        return this.$vnode && this.$vnode.ssrContext
      }
    });
    
    Vue$3.version = '2.5.11';
    
    /*  */
    
    // these are reserved for web because they are directly compiled away
    // during template compilation
    var isReservedAttr = makeMap('style,class');
    
    // attributes that should be using props for binding
    var acceptValue = makeMap('input,textarea,option,select,progress');
    var mustUseProp = function (tag, type, attr) {
      return (
        (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
        (attr === 'selected' && tag === 'option') ||
        (attr === 'checked' && tag === 'input') ||
        (attr === 'muted' && tag === 'video')
      )
    };
    
    var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
    
    var isBooleanAttr = makeMap(
      'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
      'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
      'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
      'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
      'required,reversed,scoped,seamless,selected,sortable,translate,' +
      'truespeed,typemustmatch,visible'
    );
    
    var xlinkNS = 'http://www.w3.org/1999/xlink';
    
    var isXlink = function (name) {
      return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
    };
    
    var getXlinkProp = function (name) {
      return isXlink(name) ? name.slice(6, name.length) : ''
    };
    
    var isFalsyAttrValue = function (val) {
      return val == null || val === false
    };
    
    /*  */
    
    function genClassForVnode (vnode) {
      var data = vnode.data;
      var parentNode = vnode;
      var childNode = vnode;
      while (isDef(childNode.componentInstance)) {
        childNode = childNode.componentInstance._vnode;
        if (childNode && childNode.data) {
          data = mergeClassData(childNode.data, data);
        }
      }
      while (isDef(parentNode = parentNode.parent)) {
        if (parentNode && parentNode.data) {
          data = mergeClassData(data, parentNode.data);
        }
      }
      return renderClass(data.staticClass, data.class)
    }
    
    function mergeClassData (child, parent) {
      return {
        staticClass: concat(child.staticClass, parent.staticClass),
        class: isDef(child.class)
          ? [child.class, parent.class]
          : parent.class
      }
    }
    
    function renderClass (
      staticClass,
      dynamicClass
    ) {
      if (isDef(staticClass) || isDef(dynamicClass)) {
        return concat(staticClass, stringifyClass(dynamicClass))
      }
      /* istanbul ignore next */
      return ''
    }
    
    function concat (a, b) {
      return a ? b ? (a + ' ' + b) : a : (b || '')
    }
    
    function stringifyClass (value) {
      if (Array.isArray(value)) {
        return stringifyArray(value)
      }
      if (isObject(value)) {
        return stringifyObject(value)
      }
      if (typeof value === 'string') {
        return value
      }
      /* istanbul ignore next */
      return ''
    }
    
    function stringifyArray (value) {
      var res = '';
      var stringified;
      for (var i = 0, l = value.length; i < l; i++) {
        if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
          if (res) { res += ' '; }
          res += stringified;
        }
      }
      return res
    }
    
    function stringifyObject (value) {
      var res = '';
      for (var key in value) {
        if (value[key]) {
          if (res) { res += ' '; }
          res += key;
        }
      }
      return res
    }
    
    /*  */
    
    var namespaceMap = {
      svg: 'http://www.w3.org/2000/svg',
      math: 'http://www.w3.org/1998/Math/MathML'
    };
    
    var isHTMLTag = makeMap(
      'html,body,base,head,link,meta,style,title,' +
      'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
      'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
      'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
      's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
      'embed,object,param,source,canvas,script,noscript,del,ins,' +
      'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
      'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
      'output,progress,select,textarea,' +
      'details,dialog,menu,menuitem,summary,' +
      'content,element,shadow,template,blockquote,iframe,tfoot'
    );
    
    // this map is intentionally selective, only covering SVG elements that may
    // contain child elements.
    var isSVG = makeMap(
      'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
      'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
      'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
      true
    );
    
    var isPreTag = function (tag) { return tag === 'pre'; };
    
    var isReservedTag = function (tag) {
      return isHTMLTag(tag) || isSVG(tag)
    };
    
    function getTagNamespace (tag) {
      if (isSVG(tag)) {
        return 'svg'
      }
      // basic support for MathML
      // note it doesn't support other MathML elements being component roots
      if (tag === 'math') {
        return 'math'
      }
    }
    
    var unknownElementCache = Object.create(null);
    function isUnknownElement (tag) {
      /* istanbul ignore if */
      if (!inBrowser) {
        return true
      }
      if (isReservedTag(tag)) {
        return false
      }
      tag = tag.toLowerCase();
      /* istanbul ignore if */
      if (unknownElementCache[tag] != null) {
        return unknownElementCache[tag]
      }
      var el = document.createElement(tag);
      if (tag.indexOf('-') > -1) {
        // http://stackoverflow.com/a/28210364/1070244
        return (unknownElementCache[tag] = (
          el.constructor === window.HTMLUnknownElement ||
          el.constructor === window.HTMLElement
        ))
      } else {
        return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
      }
    }
    
    var isTextInputType = makeMap('text,number,password,search,email,tel,url');
    
    /*  */
    
    /**
     * Query an element selector if it's not an element already.
     */
    function query (el) {
      if (typeof el === 'string') {
        var selected = document.querySelector(el);
        if (!selected) {
          "development" !== 'production' && warn(
            'Cannot find element: ' + el
          );
          return document.createElement('div')
        }
        return selected
      } else {
        return el
      }
    }
    
    /*  */
    
    function createElement$1 (tagName, vnode) {
      var elm = document.createElement(tagName);
      if (tagName !== 'select') {
        return elm
      }
      // false or null will remove the attribute but undefined will not
      if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
        elm.setAttribute('multiple', 'multiple');
      }
      return elm
    }
    
    function createElementNS (namespace, tagName) {
      return document.createElementNS(namespaceMap[namespace], tagName)
    }
    
    function createTextNode (text) {
      return document.createTextNode(text)
    }
    
    function createComment (text) {
      return document.createComment(text)
    }
    
    function insertBefore (parentNode, newNode, referenceNode) {
      parentNode.insertBefore(newNode, referenceNode);
    }
    
    function removeChild (node, child) {
      node.removeChild(child);
    }
    
    function appendChild (node, child) {
      node.appendChild(child);
    }
    
    function parentNode (node) {
      return node.parentNode
    }
    
    function nextSibling (node) {
      return node.nextSibling
    }
    
    function tagName (node) {
      return node.tagName
    }
    
    function setTextContent (node, text) {
      node.textContent = text;
    }
    
    function setAttribute (node, key, val) {
      node.setAttribute(key, val);
    }
    
    
    var nodeOps = Object.freeze({
        createElement: createElement$1,
        createElementNS: createElementNS,
        createTextNode: createTextNode,
        createComment: createComment,
        insertBefore: insertBefore,
        removeChild: removeChild,
        appendChild: appendChild,
        parentNode: parentNode,
        nextSibling: nextSibling,
        tagName: tagName,
        setTextContent: setTextContent,
        setAttribute: setAttribute
    });
    
    /*  */
    
    var ref = {
      create: function create (_, vnode) {
        registerRef(vnode);
      },
      update: function update (oldVnode, vnode) {
        if (oldVnode.data.ref !== vnode.data.ref) {
          registerRef(oldVnode, true);
          registerRef(vnode);
        }
      },
      destroy: function destroy (vnode) {
        registerRef(vnode, true);
      }
    };
    
    function registerRef (vnode, isRemoval) {
      var key = vnode.data.ref;
      if (!key) { return }
    
      var vm = vnode.context;
      var ref = vnode.componentInstance || vnode.elm;
      var refs = vm.$refs;
      if (isRemoval) {
        if (Array.isArray(refs[key])) {
          remove(refs[key], ref);
        } else if (refs[key] === ref) {
          refs[key] = undefined;
        }
      } else {
        if (vnode.data.refInFor) {
          if (!Array.isArray(refs[key])) {
            refs[key] = [ref];
          } else if (refs[key].indexOf(ref) < 0) {
            // $flow-disable-line
            refs[key].push(ref);
          }
        } else {
          refs[key] = ref;
        }
      }
    }
    
    /**
     * Virtual DOM patching algorithm based on Snabbdom by
     * Simon Friis Vindum (@paldepind)
     * Licensed under the MIT License
     * https://github.com/paldepind/snabbdom/blob/master/LICENSE
     *
     * modified by Evan You (@yyx990803)
     *
     * Not type-checking this because this file is perf-critical and the cost
     * of making flow understand it is not worth it.
     */
    
    var emptyNode = new VNode('', {}, []);
    
    var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];
    
    function sameVnode (a, b) {
      return (
        a.key === b.key && (
          (
            a.tag === b.tag &&
            a.isComment === b.isComment &&
            isDef(a.data) === isDef(b.data) &&
            sameInputType(a, b)
          ) || (
            isTrue(a.isAsyncPlaceholder) &&
            a.asyncFactory === b.asyncFactory &&
            isUndef(b.asyncFactory.error)
          )
        )
      )
    }
    
    function sameInputType (a, b) {
      if (a.tag !== 'input') { return true }
      var i;
      var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
      var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
      return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
    }
    
    function createKeyToOldIdx (children, beginIdx, endIdx) {
      var i, key;
      var map = {};
      for (i = beginIdx; i <= endIdx; ++i) {
        key = children[i].key;
        if (isDef(key)) { map[key] = i; }
      }
      return map
    }
    
    function createPatchFunction (backend) {
      var i, j;
      var cbs = {};
    
      var modules = backend.modules;
      var nodeOps = backend.nodeOps;
    
      for (i = 0; i < hooks.length; ++i) {
        cbs[hooks[i]] = [];
        for (j = 0; j < modules.length; ++j) {
          if (isDef(modules[j][hooks[i]])) {
            cbs[hooks[i]].push(modules[j][hooks[i]]);
          }
        }
      }
    
      function emptyNodeAt (elm) {
        return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
      }
    
      function createRmCb (childElm, listeners) {
        function remove () {
          if (--remove.listeners === 0) {
            removeNode(childElm);
          }
        }
        remove.listeners = listeners;
        return remove
      }
    
      function removeNode (el) {
        var parent = nodeOps.parentNode(el);
        // element may have already been removed due to v-html / v-text
        if (isDef(parent)) {
          nodeOps.removeChild(parent, el);
        }
      }
    
      function isUnknownElement$$1 (vnode, inVPre) {
        return (
          !inVPre &&
          !vnode.ns &&
          !(
            config.ignoredElements.length &&
            config.ignoredElements.some(function (ignore) {
              return isRegExp(ignore)
                ? ignore.test(vnode.tag)
                : ignore === vnode.tag
            })
          ) &&
          config.isUnknownElement(vnode.tag)
        )
      }
    
      var creatingElmInVPre = 0;
      function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
        vnode.isRootInsert = !nested; // for transition enter check
        if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
          return
        }
    
        var data = vnode.data;
        var children = vnode.children;
        var tag = vnode.tag;
        if (isDef(tag)) {
          if (true) {
            if (data && data.pre) {
              creatingElmInVPre++;
            }
            if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
              warn(
                'Unknown custom element: <' + tag + '> - did you ' +
                'register the component correctly? For recursive components, ' +
                'make sure to provide the "name" option.',
                vnode.context
              );
            }
          }
          vnode.elm = vnode.ns
            ? nodeOps.createElementNS(vnode.ns, tag)
            : nodeOps.createElement(tag, vnode);
          setScope(vnode);
    
          /* istanbul ignore if */
          {
            createChildren(vnode, children, insertedVnodeQueue);
            if (isDef(data)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
            }
            insert(parentElm, vnode.elm, refElm);
          }
    
          if ("development" !== 'production' && data && data.pre) {
            creatingElmInVPre--;
          }
        } else if (isTrue(vnode.isComment)) {
          vnode.elm = nodeOps.createComment(vnode.text);
          insert(parentElm, vnode.elm, refElm);
        } else {
          vnode.elm = nodeOps.createTextNode(vnode.text);
          insert(parentElm, vnode.elm, refElm);
        }
      }
    
      function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
        var i = vnode.data;
        if (isDef(i)) {
          var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
          if (isDef(i = i.hook) && isDef(i = i.init)) {
            i(vnode, false /* hydrating */, parentElm, refElm);
          }
          // after calling the init hook, if the vnode is a child component
          // it should've created a child instance and mounted it. the child
          // component also has set the placeholder vnode's elm.
          // in that case we can just return the element and be done.
          if (isDef(vnode.componentInstance)) {
            initComponent(vnode, insertedVnodeQueue);
            if (isTrue(isReactivated)) {
              reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
            }
            return true
          }
        }
      }
    
      function initComponent (vnode, insertedVnodeQueue) {
        if (isDef(vnode.data.pendingInsert)) {
          insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
          vnode.data.pendingInsert = null;
        }
        vnode.elm = vnode.componentInstance.$el;
        if (isPatchable(vnode)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
          setScope(vnode);
        } else {
          // empty component root.
          // skip all element-related modules except for ref (#3455)
          registerRef(vnode);
          // make sure to invoke the insert hook
          insertedVnodeQueue.push(vnode);
        }
      }
    
      function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
        var i;
        // hack for #4339: a reactivated component with inner transition
        // does not trigger because the inner node's created hooks are not called
        // again. It's not ideal to involve module-specific logic in here but
        // there doesn't seem to be a better way to do it.
        var innerNode = vnode;
        while (innerNode.componentInstance) {
          innerNode = innerNode.componentInstance._vnode;
          if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
            for (i = 0; i < cbs.activate.length; ++i) {
              cbs.activate[i](emptyNode, innerNode);
            }
            insertedVnodeQueue.push(innerNode);
            break
          }
        }
        // unlike a newly created component,
        // a reactivated keep-alive component doesn't insert itself
        insert(parentElm, vnode.elm, refElm);
      }
    
      function insert (parent, elm, ref$$1) {
        if (isDef(parent)) {
          if (isDef(ref$$1)) {
            if (ref$$1.parentNode === parent) {
              nodeOps.insertBefore(parent, elm, ref$$1);
            }
          } else {
            nodeOps.appendChild(parent, elm);
          }
        }
      }
    
      function createChildren (vnode, children, insertedVnodeQueue) {
        if (Array.isArray(children)) {
          if (true) {
            checkDuplicateKeys(children);
          }
          for (var i = 0; i < children.length; ++i) {
            createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
          }
        } else if (isPrimitive(vnode.text)) {
          nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
        }
      }
    
      function isPatchable (vnode) {
        while (vnode.componentInstance) {
          vnode = vnode.componentInstance._vnode;
        }
        return isDef(vnode.tag)
      }
    
      function invokeCreateHooks (vnode, insertedVnodeQueue) {
        for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
          cbs.create[i$1](emptyNode, vnode);
        }
        i = vnode.data.hook; // Reuse variable
        if (isDef(i)) {
          if (isDef(i.create)) { i.create(emptyNode, vnode); }
          if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
        }
      }
    
      // set scope id attribute for scoped CSS.
      // this is implemented as a special case to avoid the overhead
      // of going through the normal attribute patching process.
      function setScope (vnode) {
        var i;
        if (isDef(i = vnode.fnScopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        } else {
          var ancestor = vnode;
          while (ancestor) {
            if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
              nodeOps.setAttribute(vnode.elm, i, '');
            }
            ancestor = ancestor.parent;
          }
        }
        // for slot content they should also get the scopeId from the host instance.
        if (isDef(i = activeInstance) &&
          i !== vnode.context &&
          i !== vnode.fnContext &&
          isDef(i = i.$options._scopeId)
        ) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
      }
    
      function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
          createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
        }
      }
    
      function invokeDestroyHook (vnode) {
        var i, j;
        var data = vnode.data;
        if (isDef(data)) {
          if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
          for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
        }
        if (isDef(i = vnode.children)) {
          for (j = 0; j < vnode.children.length; ++j) {
            invokeDestroyHook(vnode.children[j]);
          }
        }
      }
    
      function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
          var ch = vnodes[startIdx];
          if (isDef(ch)) {
            if (isDef(ch.tag)) {
              removeAndInvokeRemoveHook(ch);
              invokeDestroyHook(ch);
            } else { // Text node
              removeNode(ch.elm);
            }
          }
        }
      }
    
      function removeAndInvokeRemoveHook (vnode, rm) {
        if (isDef(rm) || isDef(vnode.data)) {
          var i;
          var listeners = cbs.remove.length + 1;
          if (isDef(rm)) {
            // we have a recursively passed down rm callback
            // increase the listeners count
            rm.listeners += listeners;
          } else {
            // directly removing
            rm = createRmCb(vnode.elm, listeners);
          }
          // recursively invoke hooks on child component root node
          if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
            removeAndInvokeRemoveHook(i, rm);
          }
          for (i = 0; i < cbs.remove.length; ++i) {
            cbs.remove[i](vnode, rm);
          }
          if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
            i(vnode, rm);
          } else {
            rm();
          }
        } else {
          removeNode(vnode.elm);
        }
      }
    
      function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
        var oldStartIdx = 0;
        var newStartIdx = 0;
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        var oldKeyToIdx, idxInOld, vnodeToMove, refElm;
    
        // removeOnly is a special flag used only by <transition-group>
        // to ensure removed elements stay in correct relative positions
        // during leaving transitions
        var canMove = !removeOnly;
    
        if (true) {
          checkDuplicateKeys(newCh);
        }
    
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
          if (isUndef(oldStartVnode)) {
            oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
          } else if (isUndef(oldEndVnode)) {
            oldEndVnode = oldCh[--oldEndIdx];
          } else if (sameVnode(oldStartVnode, newStartVnode)) {
            patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
          } else if (sameVnode(oldEndVnode, newEndVnode)) {
            patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
          } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
            patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
            canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
          } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
            patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
            canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
          } else {
            if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
            idxInOld = isDef(newStartVnode.key)
              ? oldKeyToIdx[newStartVnode.key]
              : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
            if (isUndef(idxInOld)) { // New element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            } else {
              vnodeToMove = oldCh[idxInOld];
              if (sameVnode(vnodeToMove, newStartVnode)) {
                patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
                oldCh[idxInOld] = undefined;
                canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
              } else {
                // same key but different element. treat as new element
                createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
              }
            }
            newStartVnode = newCh[++newStartIdx];
          }
        }
        if (oldStartIdx > oldEndIdx) {
          refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
          addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        } else if (newStartIdx > newEndIdx) {
          removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
        }
      }
    
      function checkDuplicateKeys (children) {
        var seenKeys = {};
        for (var i = 0; i < children.length; i++) {
          var vnode = children[i];
          var key = vnode.key;
          if (isDef(key)) {
            if (seenKeys[key]) {
              warn(
                ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
                vnode.context
              );
            } else {
              seenKeys[key] = true;
            }
          }
        }
      }
    
      function findIdxInOld (node, oldCh, start, end) {
        for (var i = start; i < end; i++) {
          var c = oldCh[i];
          if (isDef(c) && sameVnode(node, c)) { return i }
        }
      }
    
      function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
        if (oldVnode === vnode) {
          return
        }
    
        var elm = vnode.elm = oldVnode.elm;
    
        if (isTrue(oldVnode.isAsyncPlaceholder)) {
          if (isDef(vnode.asyncFactory.resolved)) {
            hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
          } else {
            vnode.isAsyncPlaceholder = true;
          }
          return
        }
    
        // reuse element for static trees.
        // note we only do this if the vnode is cloned -
        // if the new node is not cloned it means the render functions have been
        // reset by the hot-reload-api and we need to do a proper re-render.
        if (isTrue(vnode.isStatic) &&
          isTrue(oldVnode.isStatic) &&
          vnode.key === oldVnode.key &&
          (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
        ) {
          vnode.componentInstance = oldVnode.componentInstance;
          return
        }
    
        var i;
        var data = vnode.data;
        if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
          i(oldVnode, vnode);
        }
    
        var oldCh = oldVnode.children;
        var ch = vnode.children;
        if (isDef(data) && isPatchable(vnode)) {
          for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
          if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
        }
        if (isUndef(vnode.text)) {
          if (isDef(oldCh) && isDef(ch)) {
            if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
          } else if (isDef(ch)) {
            if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
            addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
          } else if (isDef(oldCh)) {
            removeVnodes(elm, oldCh, 0, oldCh.length - 1);
          } else if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
          }
        } else if (oldVnode.text !== vnode.text) {
          nodeOps.setTextContent(elm, vnode.text);
        }
        if (isDef(data)) {
          if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
        }
      }
    
      function invokeInsertHook (vnode, queue, initial) {
        // delay insert hooks for component root nodes, invoke them after the
        // element is really inserted
        if (isTrue(initial) && isDef(vnode.parent)) {
          vnode.parent.data.pendingInsert = queue;
        } else {
          for (var i = 0; i < queue.length; ++i) {
            queue[i].data.hook.insert(queue[i]);
          }
        }
      }
    
      var hydrationBailed = false;
      // list of modules that can skip create hook during hydration because they
      // are already rendered on the client or has no need for initialization
      // Note: style is excluded because it relies on initial clone for future
      // deep updates (#7063).
      var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');
    
      // Note: this is a browser-only function so we can assume elms are DOM nodes.
      function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
        var i;
        var tag = vnode.tag;
        var data = vnode.data;
        var children = vnode.children;
        inVPre = inVPre || (data && data.pre);
        vnode.elm = elm;
    
        if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
          vnode.isAsyncPlaceholder = true;
          return true
        }
        // assert node match
        if (true) {
          if (!assertNodeMatch(elm, vnode, inVPre)) {
            return false
          }
        }
        if (isDef(data)) {
          if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
          if (isDef(i = vnode.componentInstance)) {
            // child component. it should have hydrated its own tree.
            initComponent(vnode, insertedVnodeQueue);
            return true
          }
        }
        if (isDef(tag)) {
          if (isDef(children)) {
            // empty element, allow client to pick up and populate children
            if (!elm.hasChildNodes()) {
              createChildren(vnode, children, insertedVnodeQueue);
            } else {
              // v-html and domProps: innerHTML
              if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
                if (i !== elm.innerHTML) {
                  /* istanbul ignore if */
                  if ("development" !== 'production' &&
                    typeof console !== 'undefined' &&
                    !hydrationBailed
                  ) {
                    hydrationBailed = true;
                    console.warn('Parent: ', elm);
                    console.warn('server innerHTML: ', i);
                    console.warn('client innerHTML: ', elm.innerHTML);
                  }
                  return false
                }
              } else {
                // iterate and compare children lists
                var childrenMatch = true;
                var childNode = elm.firstChild;
                for (var i$1 = 0; i$1 < children.length; i$1++) {
                  if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                    childrenMatch = false;
                    break
                  }
                  childNode = childNode.nextSibling;
                }
                // if childNode is not null, it means the actual childNodes list is
                // longer than the virtual children list.
                if (!childrenMatch || childNode) {
                  /* istanbul ignore if */
                  if ("development" !== 'production' &&
                    typeof console !== 'undefined' &&
                    !hydrationBailed
                  ) {
                    hydrationBailed = true;
                    console.warn('Parent: ', elm);
                    console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                  }
                  return false
                }
              }
            }
          }
          if (isDef(data)) {
            var fullInvoke = false;
            for (var key in data) {
              if (!isRenderedModule(key)) {
                fullInvoke = true;
                invokeCreateHooks(vnode, insertedVnodeQueue);
                break
              }
            }
            if (!fullInvoke && data['class']) {
              // ensure collecting deps for deep class bindings for future updates
              traverse(data['class']);
            }
          }
        } else if (elm.data !== vnode.text) {
          elm.data = vnode.text;
        }
        return true
      }
    
      function assertNodeMatch (node, vnode, inVPre) {
        if (isDef(vnode.tag)) {
          return vnode.tag.indexOf('vue-component') === 0 || (
            !isUnknownElement$$1(vnode, inVPre) &&
            vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
          )
        } else {
          return node.nodeType === (vnode.isComment ? 8 : 3)
        }
      }
    
      return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
        if (isUndef(vnode)) {
          if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
          return
        }
    
        var isInitialPatch = false;
        var insertedVnodeQueue = [];
    
        if (isUndef(oldVnode)) {
          // empty mount (likely as component), create new root element
          isInitialPatch = true;
          createElm(vnode, insertedVnodeQueue, parentElm, refElm);
        } else {
          var isRealElement = isDef(oldVnode.nodeType);
          if (!isRealElement && sameVnode(oldVnode, vnode)) {
            // patch existing root node
            patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
          } else {
            if (isRealElement) {
              // mounting to a real element
              // check if this is server-rendered content and if we can perform
              // a successful hydration.
              if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                oldVnode.removeAttribute(SSR_ATTR);
                hydrating = true;
              }
              if (isTrue(hydrating)) {
                if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                  invokeInsertHook(vnode, insertedVnodeQueue, true);
                  return oldVnode
                } else if (true) {
                  warn(
                    'The client-side rendered virtual DOM tree is not matching ' +
                    'server-rendered content. This is likely caused by incorrect ' +
                    'HTML markup, for example nesting block-level elements inside ' +
                    '<p>, or missing <tbody>. Bailing hydration and performing ' +
                    'full client-side render.'
                  );
                }
              }
              // either not server-rendered, or hydration failed.
              // create an empty node and replace it
              oldVnode = emptyNodeAt(oldVnode);
            }
    
            // replacing existing element
            var oldElm = oldVnode.elm;
            var parentElm$1 = nodeOps.parentNode(oldElm);
    
            // create new node
            createElm(
              vnode,
              insertedVnodeQueue,
              // extremely rare edge case: do not insert if old element is in a
              // leaving transition. Only happens when combining transition +
              // keep-alive + HOCs. (#4590)
              oldElm._leaveCb ? null : parentElm$1,
              nodeOps.nextSibling(oldElm)
            );
    
            // update parent placeholder node element, recursively
            if (isDef(vnode.parent)) {
              var ancestor = vnode.parent;
              var patchable = isPatchable(vnode);
              while (ancestor) {
                for (var i = 0; i < cbs.destroy.length; ++i) {
                  cbs.destroy[i](ancestor);
                }
                ancestor.elm = vnode.elm;
                if (patchable) {
                  for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                    cbs.create[i$1](emptyNode, ancestor);
                  }
                  // #6513
                  // invoke insert hooks that may have been merged by create hooks.
                  // e.g. for directives that uses the "inserted" hook.
                  var insert = ancestor.data.hook.insert;
                  if (insert.merged) {
                    // start at index 1 to avoid re-invoking component mounted hook
                    for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                      insert.fns[i$2]();
                    }
                  }
                } else {
                  registerRef(ancestor);
                }
                ancestor = ancestor.parent;
              }
            }
    
            // destroy old node
            if (isDef(parentElm$1)) {
              removeVnodes(parentElm$1, [oldVnode], 0, 0);
            } else if (isDef(oldVnode.tag)) {
              invokeDestroyHook(oldVnode);
            }
          }
        }
    
        invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
        return vnode.elm
      }
    }
    
    /*  */
    
    var directives = {
      create: updateDirectives,
      update: updateDirectives,
      destroy: function unbindDirectives (vnode) {
        updateDirectives(vnode, emptyNode);
      }
    };
    
    function updateDirectives (oldVnode, vnode) {
      if (oldVnode.data.directives || vnode.data.directives) {
        _update(oldVnode, vnode);
      }
    }
    
    function _update (oldVnode, vnode) {
      var isCreate = oldVnode === emptyNode;
      var isDestroy = vnode === emptyNode;
      var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
      var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
    
      var dirsWithInsert = [];
      var dirsWithPostpatch = [];
    
      var key, oldDir, dir;
      for (key in newDirs) {
        oldDir = oldDirs[key];
        dir = newDirs[key];
        if (!oldDir) {
          // new directive, bind
          callHook$1(dir, 'bind', vnode, oldVnode);
          if (dir.def && dir.def.inserted) {
            dirsWithInsert.push(dir);
          }
        } else {
          // existing directive, update
          dir.oldValue = oldDir.value;
          callHook$1(dir, 'update', vnode, oldVnode);
          if (dir.def && dir.def.componentUpdated) {
            dirsWithPostpatch.push(dir);
          }
        }
      }
    
      if (dirsWithInsert.length) {
        var callInsert = function () {
          for (var i = 0; i < dirsWithInsert.length; i++) {
            callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
          }
        };
        if (isCreate) {
          mergeVNodeHook(vnode, 'insert', callInsert);
        } else {
          callInsert();
        }
      }
    
      if (dirsWithPostpatch.length) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          for (var i = 0; i < dirsWithPostpatch.length; i++) {
            callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
          }
        });
      }
    
      if (!isCreate) {
        for (key in oldDirs) {
          if (!newDirs[key]) {
            // no longer present, unbind
            callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
          }
        }
      }
    }
    
    var emptyModifiers = Object.create(null);
    
    function normalizeDirectives$1 (
      dirs,
      vm
    ) {
      var res = Object.create(null);
      if (!dirs) {
        // $flow-disable-line
        return res
      }
      var i, dir;
      for (i = 0; i < dirs.length; i++) {
        dir = dirs[i];
        if (!dir.modifiers) {
          // $flow-disable-line
          dir.modifiers = emptyModifiers;
        }
        res[getRawDirName(dir)] = dir;
        dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
      }
      // $flow-disable-line
      return res
    }
    
    function getRawDirName (dir) {
      return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
    }
    
    function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
      var fn = dir.def && dir.def[hook];
      if (fn) {
        try {
          fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
        } catch (e) {
          handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
        }
      }
    }
    
    var baseModules = [
      ref,
      directives
    ];
    
    /*  */
    
    function updateAttrs (oldVnode, vnode) {
      var opts = vnode.componentOptions;
      if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
        return
      }
      if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
        return
      }
      var key, cur, old;
      var elm = vnode.elm;
      var oldAttrs = oldVnode.data.attrs || {};
      var attrs = vnode.data.attrs || {};
      // clone observed objects, as the user probably wants to mutate it
      if (isDef(attrs.__ob__)) {
        attrs = vnode.data.attrs = extend({}, attrs);
      }
    
      for (key in attrs) {
        cur = attrs[key];
        old = oldAttrs[key];
        if (old !== cur) {
          setAttr(elm, key, cur);
        }
      }
      // #4391: in IE9, setting type can reset value for input[type=radio]
      // #6666: IE/Edge forces progress value down to 1 before setting a max
      /* istanbul ignore if */
      if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
        setAttr(elm, 'value', attrs.value);
      }
      for (key in oldAttrs) {
        if (isUndef(attrs[key])) {
          if (isXlink(key)) {
            elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
          } else if (!isEnumeratedAttr(key)) {
            elm.removeAttribute(key);
          }
        }
      }
    }
    
    function setAttr (el, key, value) {
      if (isBooleanAttr(key)) {
        // set attribute for blank value
        // e.g. <option disabled>Select one</option>
        if (isFalsyAttrValue(value)) {
          el.removeAttribute(key);
        } else {
          // technically allowfullscreen is a boolean attribute for <iframe>,
          // but Flash expects a value of "true" when used on <embed> tag
          value = key === 'allowfullscreen' && el.tagName === 'EMBED'
            ? 'true'
            : key;
          el.setAttribute(key, value);
        }
      } else if (isEnumeratedAttr(key)) {
        el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
      } else if (isXlink(key)) {
        if (isFalsyAttrValue(value)) {
          el.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else {
          el.setAttributeNS(xlinkNS, key, value);
        }
      } else {
        if (isFalsyAttrValue(value)) {
          el.removeAttribute(key);
        } else {
          // #7138: IE10 & 11 fires input event when setting placeholder on
          // <textarea>... block the first input event and remove the blocker
          // immediately.
          /* istanbul ignore if */
          if (
            isIE && !isIE9 &&
            el.tagName === 'TEXTAREA' &&
            key === 'placeholder' && !el.__ieph
          ) {
            var blocker = function (e) {
              e.stopImmediatePropagation();
              el.removeEventListener('input', blocker);
            };
            el.addEventListener('input', blocker);
            // $flow-disable-line
            el.__ieph = true; /* IE placeholder patched */
          }
          el.setAttribute(key, value);
        }
      }
    }
    
    var attrs = {
      create: updateAttrs,
      update: updateAttrs
    };
    
    /*  */
    
    function updateClass (oldVnode, vnode) {
      var el = vnode.elm;
      var data = vnode.data;
      var oldData = oldVnode.data;
      if (
        isUndef(data.staticClass) &&
        isUndef(data.class) && (
          isUndef(oldData) || (
            isUndef(oldData.staticClass) &&
            isUndef(oldData.class)
          )
        )
      ) {
        return
      }
    
      var cls = genClassForVnode(vnode);
    
      // handle transition classes
      var transitionClass = el._transitionClasses;
      if (isDef(transitionClass)) {
        cls = concat(cls, stringifyClass(transitionClass));
      }
    
      // set the class
      if (cls !== el._prevClass) {
        el.setAttribute('class', cls);
        el._prevClass = cls;
      }
    }
    
    var klass = {
      create: updateClass,
      update: updateClass
    };
    
    /*  */
    
    var validDivisionCharRE = /[\w).+\-_$\]]/;
    
    function parseFilters (exp) {
      var inSingle = false;
      var inDouble = false;
      var inTemplateString = false;
      var inRegex = false;
      var curly = 0;
      var square = 0;
      var paren = 0;
      var lastFilterIndex = 0;
      var c, prev, i, expression, filters;
    
      for (i = 0; i < exp.length; i++) {
        prev = c;
        c = exp.charCodeAt(i);
        if (inSingle) {
          if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
        } else if (inDouble) {
          if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
        } else if (inTemplateString) {
          if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
        } else if (inRegex) {
          if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
        } else if (
          c === 0x7C && // pipe
          exp.charCodeAt(i + 1) !== 0x7C &&
          exp.charCodeAt(i - 1) !== 0x7C &&
          !curly && !square && !paren
        ) {
          if (expression === undefined) {
            // first filter, end of expression
            lastFilterIndex = i + 1;
            expression = exp.slice(0, i).trim();
          } else {
            pushFilter();
          }
        } else {
          switch (c) {
            case 0x22: inDouble = true; break         // "
            case 0x27: inSingle = true; break         // '
            case 0x60: inTemplateString = true; break // `
            case 0x28: paren++; break                 // (
            case 0x29: paren--; break                 // )
            case 0x5B: square++; break                // [
            case 0x5D: square--; break                // ]
            case 0x7B: curly++; break                 // {
            case 0x7D: curly--; break                 // }
          }
          if (c === 0x2f) { // /
            var j = i - 1;
            var p = (void 0);
            // find first non-whitespace prev char
            for (; j >= 0; j--) {
              p = exp.charAt(j);
              if (p !== ' ') { break }
            }
            if (!p || !validDivisionCharRE.test(p)) {
              inRegex = true;
            }
          }
        }
      }
    
      if (expression === undefined) {
        expression = exp.slice(0, i).trim();
      } else if (lastFilterIndex !== 0) {
        pushFilter();
      }
    
      function pushFilter () {
        (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
        lastFilterIndex = i + 1;
      }
    
      if (filters) {
        for (i = 0; i < filters.length; i++) {
          expression = wrapFilter(expression, filters[i]);
        }
      }
    
      return expression
    }
    
    function wrapFilter (exp, filter) {
      var i = filter.indexOf('(');
      if (i < 0) {
        // _f: resolveFilter
        return ("_f(\"" + filter + "\")(" + exp + ")")
      } else {
        var name = filter.slice(0, i);
        var args = filter.slice(i + 1);
        return ("_f(\"" + name + "\")(" + exp + "," + args)
      }
    }
    
    /*  */
    
    function baseWarn (msg) {
      console.error(("[Vue compiler]: " + msg));
    }
    
    function pluckModuleFunction (
      modules,
      key
    ) {
      return modules
        ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
        : []
    }
    
    function addProp (el, name, value) {
      (el.props || (el.props = [])).push({ name: name, value: value });
    }
    
    function addAttr (el, name, value) {
      (el.attrs || (el.attrs = [])).push({ name: name, value: value });
    }
    
    function addDirective (
      el,
      name,
      rawName,
      value,
      arg,
      modifiers
    ) {
      (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
    }
    
    function addHandler (
      el,
      name,
      value,
      modifiers,
      important,
      warn
    ) {
      modifiers = modifiers || emptyObject;
      // warn prevent and passive modifier
      /* istanbul ignore if */
      if (
        "development" !== 'production' && warn &&
        modifiers.prevent && modifiers.passive
      ) {
        warn(
          'passive and prevent can\'t be used together. ' +
          'Passive handler can\'t prevent default event.'
        );
      }
    
      // check capture modifier
      if (modifiers.capture) {
        delete modifiers.capture;
        name = '!' + name; // mark the event as captured
      }
      if (modifiers.once) {
        delete modifiers.once;
        name = '~' + name; // mark the event as once
      }
      /* istanbul ignore if */
      if (modifiers.passive) {
        delete modifiers.passive;
        name = '&' + name; // mark the event as passive
      }
    
      // normalize click.right and click.middle since they don't actually fire
      // this is technically browser-specific, but at least for now browsers are
      // the only target envs that have right/middle clicks.
      if (name === 'click') {
        if (modifiers.right) {
          name = 'contextmenu';
          delete modifiers.right;
        } else if (modifiers.middle) {
          name = 'mouseup';
        }
      }
    
      var events;
      if (modifiers.native) {
        delete modifiers.native;
        events = el.nativeEvents || (el.nativeEvents = {});
      } else {
        events = el.events || (el.events = {});
      }
    
      var newHandler = { value: value };
      if (modifiers !== emptyObject) {
        newHandler.modifiers = modifiers;
      }
    
      var handlers = events[name];
      /* istanbul ignore if */
      if (Array.isArray(handlers)) {
        important ? handlers.unshift(newHandler) : handlers.push(newHandler);
      } else if (handlers) {
        events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
      } else {
        events[name] = newHandler;
      }
    }
    
    function getBindingAttr (
      el,
      name,
      getStatic
    ) {
      var dynamicValue =
        getAndRemoveAttr(el, ':' + name) ||
        getAndRemoveAttr(el, 'v-bind:' + name);
      if (dynamicValue != null) {
        return parseFilters(dynamicValue)
      } else if (getStatic !== false) {
        var staticValue = getAndRemoveAttr(el, name);
        if (staticValue != null) {
          return JSON.stringify(staticValue)
        }
      }
    }
    
    // note: this only removes the attr from the Array (attrsList) so that it
    // doesn't get processed by processAttrs.
    // By default it does NOT remove it from the map (attrsMap) because the map is
    // needed during codegen.
    function getAndRemoveAttr (
      el,
      name,
      removeFromMap
    ) {
      var val;
      if ((val = el.attrsMap[name]) != null) {
        var list = el.attrsList;
        for (var i = 0, l = list.length; i < l; i++) {
          if (list[i].name === name) {
            list.splice(i, 1);
            break
          }
        }
      }
      if (removeFromMap) {
        delete el.attrsMap[name];
      }
      return val
    }
    
    /*  */
    
    /**
     * Cross-platform code generation for component v-model
     */
    function genComponentModel (
      el,
      value,
      modifiers
    ) {
      var ref = modifiers || {};
      var number = ref.number;
      var trim = ref.trim;
    
      var baseValueExpression = '$$v';
      var valueExpression = baseValueExpression;
      if (trim) {
        valueExpression =
          "(typeof " + baseValueExpression + " === 'string'" +
            "? " + baseValueExpression + ".trim()" +
            ": " + baseValueExpression + ")";
      }
      if (number) {
        valueExpression = "_n(" + valueExpression + ")";
      }
      var assignment = genAssignmentCode(value, valueExpression);
    
      el.model = {
        value: ("(" + value + ")"),
        expression: ("\"" + value + "\""),
        callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
      };
    }
    
    /**
     * Cross-platform codegen helper for generating v-model value assignment code.
     */
    function genAssignmentCode (
      value,
      assignment
    ) {
      var res = parseModel(value);
      if (res.key === null) {
        return (value + "=" + assignment)
      } else {
        return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
      }
    }
    
    /**
     * Parse a v-model expression into a base path and a final key segment.
     * Handles both dot-path and possible square brackets.
     *
     * Possible cases:
     *
     * - test
     * - test[key]
     * - test[test1[key]]
     * - test["a"][key]
     * - xxx.test[a[a].test1[key]]
     * - test.xxx.a["asa"][test1[key]]
     *
     */
    
    var len;
    var str;
    var chr;
    var index$1;
    var expressionPos;
    var expressionEndPos;
    
    
    
    function parseModel (val) {
      len = val.length;
    
      if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
        index$1 = val.lastIndexOf('.');
        if (index$1 > -1) {
          return {
            exp: val.slice(0, index$1),
            key: '"' + val.slice(index$1 + 1) + '"'
          }
        } else {
          return {
            exp: val,
            key: null
          }
        }
      }
    
      str = val;
      index$1 = expressionPos = expressionEndPos = 0;
    
      while (!eof()) {
        chr = next();
        /* istanbul ignore if */
        if (isStringStart(chr)) {
          parseString(chr);
        } else if (chr === 0x5B) {
          parseBracket(chr);
        }
      }
    
      return {
        exp: val.slice(0, expressionPos),
        key: val.slice(expressionPos + 1, expressionEndPos)
      }
    }
    
    function next () {
      return str.charCodeAt(++index$1)
    }
    
    function eof () {
      return index$1 >= len
    }
    
    function isStringStart (chr) {
      return chr === 0x22 || chr === 0x27
    }
    
    function parseBracket (chr) {
      var inBracket = 1;
      expressionPos = index$1;
      while (!eof()) {
        chr = next();
        if (isStringStart(chr)) {
          parseString(chr);
          continue
        }
        if (chr === 0x5B) { inBracket++; }
        if (chr === 0x5D) { inBracket--; }
        if (inBracket === 0) {
          expressionEndPos = index$1;
          break
        }
      }
    }
    
    function parseString (chr) {
      var stringQuote = chr;
      while (!eof()) {
        chr = next();
        if (chr === stringQuote) {
          break
        }
      }
    }
    
    /*  */
    
    var warn$1;
    
    // in some cases, the event used has to be determined at runtime
    // so we used some reserved tokens during compile.
    var RANGE_TOKEN = '__r';
    var CHECKBOX_RADIO_TOKEN = '__c';
    
    function model (
      el,
      dir,
      _warn
    ) {
      warn$1 = _warn;
      var value = dir.value;
      var modifiers = dir.modifiers;
      var tag = el.tag;
      var type = el.attrsMap.type;
    
      if (true) {
        // inputs with type="file" are read only and setting the input's
        // value will throw an error.
        if (tag === 'input' && type === 'file') {
          warn$1(
            "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
            "File inputs are read only. Use a v-on:change listener instead."
          );
        }
      }
    
      if (el.component) {
        genComponentModel(el, value, modifiers);
        // component v-model doesn't need extra runtime
        return false
      } else if (tag === 'select') {
        genSelect(el, value, modifiers);
      } else if (tag === 'input' && type === 'checkbox') {
        genCheckboxModel(el, value, modifiers);
      } else if (tag === 'input' && type === 'radio') {
        genRadioModel(el, value, modifiers);
      } else if (tag === 'input' || tag === 'textarea') {
        genDefaultModel(el, value, modifiers);
      } else if (!config.isReservedTag(tag)) {
        genComponentModel(el, value, modifiers);
        // component v-model doesn't need extra runtime
        return false
      } else if (true) {
        warn$1(
          "<" + (el.tag) + " v-model=\"" + value + "\">: " +
          "v-model is not supported on this element type. " +
          'If you are working with contenteditable, it\'s recommended to ' +
          'wrap a library dedicated for that purpose inside a custom component.'
        );
      }
    
      // ensure runtime directive metadata
      return true
    }
    
    function genCheckboxModel (
      el,
      value,
      modifiers
    ) {
      var number = modifiers && modifiers.number;
      var valueBinding = getBindingAttr(el, 'value') || 'null';
      var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
      var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
      addProp(el, 'checked',
        "Array.isArray(" + value + ")" +
        "?_i(" + value + "," + valueBinding + ")>-1" + (
          trueValueBinding === 'true'
            ? (":(" + value + ")")
            : (":_q(" + value + "," + trueValueBinding + ")")
        )
      );
      addHandler(el, 'change',
        "var $$a=" + value + "," +
            '$$el=$event.target,' +
            "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
        'if(Array.isArray($$a)){' +
          "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
              '$$i=_i($$a,$$v);' +
          "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" +
          "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
        "}else{" + (genAssignmentCode(value, '$$c')) + "}",
        null, true
      );
    }
    
    function genRadioModel (
      el,
      value,
      modifiers
    ) {
      var number = modifiers && modifiers.number;
      var valueBinding = getBindingAttr(el, 'value') || 'null';
      valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
      addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
      addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
    }
    
    function genSelect (
      el,
      value,
      modifiers
    ) {
      var number = modifiers && modifiers.number;
      var selectedVal = "Array.prototype.filter" +
        ".call($event.target.options,function(o){return o.selected})" +
        ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
        "return " + (number ? '_n(val)' : 'val') + "})";
    
      var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
      var code = "var $$selectedVal = " + selectedVal + ";";
      code = code + " " + (genAssignmentCode(value, assignment));
      addHandler(el, 'change', code, null, true);
    }
    
    function genDefaultModel (
      el,
      value,
      modifiers
    ) {
      var type = el.attrsMap.type;
    
      // warn if v-bind:value conflicts with v-model
      if (true) {
        var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
        if (value$1) {
          var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
          warn$1(
            binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
            'because the latter already expands to a value binding internally'
          );
        }
      }
    
      var ref = modifiers || {};
      var lazy = ref.lazy;
      var number = ref.number;
      var trim = ref.trim;
      var needCompositionGuard = !lazy && type !== 'range';
      var event = lazy
        ? 'change'
        : type === 'range'
          ? RANGE_TOKEN
          : 'input';
    
      var valueExpression = '$event.target.value';
      if (trim) {
        valueExpression = "$event.target.value.trim()";
      }
      if (number) {
        valueExpression = "_n(" + valueExpression + ")";
      }
    
      var code = genAssignmentCode(value, valueExpression);
      if (needCompositionGuard) {
        code = "if($event.target.composing)return;" + code;
      }
    
      addProp(el, 'value', ("(" + value + ")"));
      addHandler(el, event, code, null, true);
      if (trim || number) {
        addHandler(el, 'blur', '$forceUpdate()');
      }
    }
    
    /*  */
    
    // normalize v-model event tokens that can only be determined at runtime.
    // it's important to place the event as the first in the array because
    // the whole point is ensuring the v-model callback gets called before
    // user-attached handlers.
    function normalizeEvents (on) {
      /* istanbul ignore if */
      if (isDef(on[RANGE_TOKEN])) {
        // IE input[type=range] only supports `change` event
        var event = isIE ? 'change' : 'input';
        on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
        delete on[RANGE_TOKEN];
      }
      // This was originally intended to fix #4521 but no longer necessary
      // after 2.5. Keeping it for backwards compat with generated code from < 2.4
      /* istanbul ignore if */
      if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
        on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
        delete on[CHECKBOX_RADIO_TOKEN];
      }
    }
    
    var target$1;
    
    function createOnceHandler (handler, event, capture) {
      var _target = target$1; // save current target element in closure
      return function onceHandler () {
        var res = handler.apply(null, arguments);
        if (res !== null) {
          remove$2(event, onceHandler, capture, _target);
        }
      }
    }
    
    function add$1 (
      event,
      handler,
      once$$1,
      capture,
      passive
    ) {
      handler = withMacroTask(handler);
      if (once$$1) { handler = createOnceHandler(handler, event, capture); }
      target$1.addEventListener(
        event,
        handler,
        supportsPassive
          ? { capture: capture, passive: passive }
          : capture
      );
    }
    
    function remove$2 (
      event,
      handler,
      capture,
      _target
    ) {
      (_target || target$1).removeEventListener(
        event,
        handler._withTask || handler,
        capture
      );
    }
    
    function updateDOMListeners (oldVnode, vnode) {
      if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
        return
      }
      var on = vnode.data.on || {};
      var oldOn = oldVnode.data.on || {};
      target$1 = vnode.elm;
      normalizeEvents(on);
      updateListeners(on, oldOn, add$1, remove$2, vnode.context);
      target$1 = undefined;
    }
    
    var events = {
      create: updateDOMListeners,
      update: updateDOMListeners
    };
    
    /*  */
    
    function updateDOMProps (oldVnode, vnode) {
      if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
        return
      }
      var key, cur;
      var elm = vnode.elm;
      var oldProps = oldVnode.data.domProps || {};
      var props = vnode.data.domProps || {};
      // clone observed objects, as the user probably wants to mutate it
      if (isDef(props.__ob__)) {
        props = vnode.data.domProps = extend({}, props);
      }
    
      for (key in oldProps) {
        if (isUndef(props[key])) {
          elm[key] = '';
        }
      }
      for (key in props) {
        cur = props[key];
        // ignore children if the node has textContent or innerHTML,
        // as these will throw away existing DOM nodes and cause removal errors
        // on subsequent patches (#3360)
        if (key === 'textContent' || key === 'innerHTML') {
          if (vnode.children) { vnode.children.length = 0; }
          if (cur === oldProps[key]) { continue }
          // #6601 work around Chrome version <= 55 bug where single textNode
          // replaced by innerHTML/textContent retains its parentNode property
          if (elm.childNodes.length === 1) {
            elm.removeChild(elm.childNodes[0]);
          }
        }
    
        if (key === 'value') {
          // store value as _value as well since
          // non-string values will be stringified
          elm._value = cur;
          // avoid resetting cursor position when value is the same
          var strCur = isUndef(cur) ? '' : String(cur);
          if (shouldUpdateValue(elm, strCur)) {
            elm.value = strCur;
          }
        } else {
          elm[key] = cur;
        }
      }
    }
    
    // check platforms/web/util/attrs.js acceptValue
    
    
    function shouldUpdateValue (elm, checkVal) {
      return (!elm.composing && (
        elm.tagName === 'OPTION' ||
        isNotInFocusAndDirty(elm, checkVal) ||
        isDirtyWithModifiers(elm, checkVal)
      ))
    }
    
    function isNotInFocusAndDirty (elm, checkVal) {
      // return true when textbox (.number and .trim) loses focus and its value is
      // not equal to the updated value
      var notInFocus = true;
      // #6157
      // work around IE bug when accessing document.activeElement in an iframe
      try { notInFocus = document.activeElement !== elm; } catch (e) {}
      return notInFocus && elm.value !== checkVal
    }
    
    function isDirtyWithModifiers (elm, newVal) {
      var value = elm.value;
      var modifiers = elm._vModifiers; // injected by v-model runtime
      if (isDef(modifiers)) {
        if (modifiers.lazy) {
          // inputs with lazy should only be updated when not in focus
          return false
        }
        if (modifiers.number) {
          return toNumber(value) !== toNumber(newVal)
        }
        if (modifiers.trim) {
          return value.trim() !== newVal.trim()
        }
      }
      return value !== newVal
    }
    
    var domProps = {
      create: updateDOMProps,
      update: updateDOMProps
    };
    
    /*  */
    
    var parseStyleText = cached(function (cssText) {
      var res = {};
      var listDelimiter = /;(?![^(]*\))/g;
      var propertyDelimiter = /:(.+)/;
      cssText.split(listDelimiter).forEach(function (item) {
        if (item) {
          var tmp = item.split(propertyDelimiter);
          tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
        }
      });
      return res
    });
    
    // merge static and dynamic style data on the same vnode
    function normalizeStyleData (data) {
      var style = normalizeStyleBinding(data.style);
      // static style is pre-processed into an object during compilation
      // and is always a fresh object, so it's safe to merge into it
      return data.staticStyle
        ? extend(data.staticStyle, style)
        : style
    }
    
    // normalize possible array / string values into Object
    function normalizeStyleBinding (bindingStyle) {
      if (Array.isArray(bindingStyle)) {
        return toObject(bindingStyle)
      }
      if (typeof bindingStyle === 'string') {
        return parseStyleText(bindingStyle)
      }
      return bindingStyle
    }
    
    /**
     * parent component style should be after child's
     * so that parent component's style could override it
     */
    function getStyle (vnode, checkChild) {
      var res = {};
      var styleData;
    
      if (checkChild) {
        var childNode = vnode;
        while (childNode.componentInstance) {
          childNode = childNode.componentInstance._vnode;
          if (
            childNode && childNode.data &&
            (styleData = normalizeStyleData(childNode.data))
          ) {
            extend(res, styleData);
          }
        }
      }
    
      if ((styleData = normalizeStyleData(vnode.data))) {
        extend(res, styleData);
      }
    
      var parentNode = vnode;
      while ((parentNode = parentNode.parent)) {
        if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
          extend(res, styleData);
        }
      }
      return res
    }
    
    /*  */
    
    var cssVarRE = /^--/;
    var importantRE = /\s*!important$/;
    var setProp = function (el, name, val) {
      /* istanbul ignore if */
      if (cssVarRE.test(name)) {
        el.style.setProperty(name, val);
      } else if (importantRE.test(val)) {
        el.style.setProperty(name, val.replace(importantRE, ''), 'important');
      } else {
        var normalizedName = normalize(name);
        if (Array.isArray(val)) {
          // Support values array created by autoprefixer, e.g.
          // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
          // Set them one by one, and the browser will only set those it can recognize
          for (var i = 0, len = val.length; i < len; i++) {
            el.style[normalizedName] = val[i];
          }
        } else {
          el.style[normalizedName] = val;
        }
      }
    };
    
    var vendorNames = ['Webkit', 'Moz', 'ms'];
    
    var emptyStyle;
    var normalize = cached(function (prop) {
      emptyStyle = emptyStyle || document.createElement('div').style;
      prop = camelize(prop);
      if (prop !== 'filter' && (prop in emptyStyle)) {
        return prop
      }
      var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
      for (var i = 0; i < vendorNames.length; i++) {
        var name = vendorNames[i] + capName;
        if (name in emptyStyle) {
          return name
        }
      }
    });
    
    function updateStyle (oldVnode, vnode) {
      var data = vnode.data;
      var oldData = oldVnode.data;
    
      if (isUndef(data.staticStyle) && isUndef(data.style) &&
        isUndef(oldData.staticStyle) && isUndef(oldData.style)
      ) {
        return
      }
    
      var cur, name;
      var el = vnode.elm;
      var oldStaticStyle = oldData.staticStyle;
      var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
    
      // if static style exists, stylebinding already merged into it when doing normalizeStyleData
      var oldStyle = oldStaticStyle || oldStyleBinding;
    
      var style = normalizeStyleBinding(vnode.data.style) || {};
    
      // store normalized style under a different key for next diff
      // make sure to clone it if it's reactive, since the user likely wants
      // to mutate it.
      vnode.data.normalizedStyle = isDef(style.__ob__)
        ? extend({}, style)
        : style;
    
      var newStyle = getStyle(vnode, true);
    
      for (name in oldStyle) {
        if (isUndef(newStyle[name])) {
          setProp(el, name, '');
        }
      }
      for (name in newStyle) {
        cur = newStyle[name];
        if (cur !== oldStyle[name]) {
          // ie9 setting to null has no effect, must use empty string
          setProp(el, name, cur == null ? '' : cur);
        }
      }
    }
    
    var style = {
      create: updateStyle,
      update: updateStyle
    };
    
    /*  */
    
    /**
     * Add class with compatibility for SVG since classList is not supported on
     * SVG elements in IE
     */
    function addClass (el, cls) {
      /* istanbul ignore if */
      if (!cls || !(cls = cls.trim())) {
        return
      }
    
      /* istanbul ignore else */
      if (el.classList) {
        if (cls.indexOf(' ') > -1) {
          cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
        } else {
          el.classList.add(cls);
        }
      } else {
        var cur = " " + (el.getAttribute('class') || '') + " ";
        if (cur.indexOf(' ' + cls + ' ') < 0) {
          el.setAttribute('class', (cur + cls).trim());
        }
      }
    }
    
    /**
     * Remove class with compatibility for SVG since classList is not supported on
     * SVG elements in IE
     */
    function removeClass (el, cls) {
      /* istanbul ignore if */
      if (!cls || !(cls = cls.trim())) {
        return
      }
    
      /* istanbul ignore else */
      if (el.classList) {
        if (cls.indexOf(' ') > -1) {
          cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
        } else {
          el.classList.remove(cls);
        }
        if (!el.classList.length) {
          el.removeAttribute('class');
        }
      } else {
        var cur = " " + (el.getAttribute('class') || '') + " ";
        var tar = ' ' + cls + ' ';
        while (cur.indexOf(tar) >= 0) {
          cur = cur.replace(tar, ' ');
        }
        cur = cur.trim();
        if (cur) {
          el.setAttribute('class', cur);
        } else {
          el.removeAttribute('class');
        }
      }
    }
    
    /*  */
    
    function resolveTransition (def) {
      if (!def) {
        return
      }
      /* istanbul ignore else */
      if (typeof def === 'object') {
        var res = {};
        if (def.css !== false) {
          extend(res, autoCssTransition(def.name || 'v'));
        }
        extend(res, def);
        return res
      } else if (typeof def === 'string') {
        return autoCssTransition(def)
      }
    }
    
    var autoCssTransition = cached(function (name) {
      return {
        enterClass: (name + "-enter"),
        enterToClass: (name + "-enter-to"),
        enterActiveClass: (name + "-enter-active"),
        leaveClass: (name + "-leave"),
        leaveToClass: (name + "-leave-to"),
        leaveActiveClass: (name + "-leave-active")
      }
    });
    
    var hasTransition = inBrowser && !isIE9;
    var TRANSITION = 'transition';
    var ANIMATION = 'animation';
    
    // Transition property/event sniffing
    var transitionProp = 'transition';
    var transitionEndEvent = 'transitionend';
    var animationProp = 'animation';
    var animationEndEvent = 'animationend';
    if (hasTransition) {
      /* istanbul ignore if */
      if (window.ontransitionend === undefined &&
        window.onwebkittransitionend !== undefined
      ) {
        transitionProp = 'WebkitTransition';
        transitionEndEvent = 'webkitTransitionEnd';
      }
      if (window.onanimationend === undefined &&
        window.onwebkitanimationend !== undefined
      ) {
        animationProp = 'WebkitAnimation';
        animationEndEvent = 'webkitAnimationEnd';
      }
    }
    
    // binding to window is necessary to make hot reload work in IE in strict mode
    var raf = inBrowser
      ? window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : setTimeout
      : /* istanbul ignore next */ function (fn) { return fn(); };
    
    function nextFrame (fn) {
      raf(function () {
        raf(fn);
      });
    }
    
    function addTransitionClass (el, cls) {
      var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
      if (transitionClasses.indexOf(cls) < 0) {
        transitionClasses.push(cls);
        addClass(el, cls);
      }
    }
    
    function removeTransitionClass (el, cls) {
      if (el._transitionClasses) {
        remove(el._transitionClasses, cls);
      }
      removeClass(el, cls);
    }
    
    function whenTransitionEnds (
      el,
      expectedType,
      cb
    ) {
      var ref = getTransitionInfo(el, expectedType);
      var type = ref.type;
      var timeout = ref.timeout;
      var propCount = ref.propCount;
      if (!type) { return cb() }
      var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
      var ended = 0;
      var end = function () {
        el.removeEventListener(event, onEnd);
        cb();
      };
      var onEnd = function (e) {
        if (e.target === el) {
          if (++ended >= propCount) {
            end();
          }
        }
      };
      setTimeout(function () {
        if (ended < propCount) {
          end();
        }
      }, timeout + 1);
      el.addEventListener(event, onEnd);
    }
    
    var transformRE = /\b(transform|all)(,|$)/;
    
    function getTransitionInfo (el, expectedType) {
      var styles = window.getComputedStyle(el);
      var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
      var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
      var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
      var animationDelays = styles[animationProp + 'Delay'].split(', ');
      var animationDurations = styles[animationProp + 'Duration'].split(', ');
      var animationTimeout = getTimeout(animationDelays, animationDurations);
    
      var type;
      var timeout = 0;
      var propCount = 0;
      /* istanbul ignore if */
      if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
          type = TRANSITION;
          timeout = transitionTimeout;
          propCount = transitionDurations.length;
        }
      } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
          type = ANIMATION;
          timeout = animationTimeout;
          propCount = animationDurations.length;
        }
      } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0
          ? transitionTimeout > animationTimeout
            ? TRANSITION
            : ANIMATION
          : null;
        propCount = type
          ? type === TRANSITION
            ? transitionDurations.length
            : animationDurations.length
          : 0;
      }
      var hasTransform =
        type === TRANSITION &&
        transformRE.test(styles[transitionProp + 'Property']);
      return {
        type: type,
        timeout: timeout,
        propCount: propCount,
        hasTransform: hasTransform
      }
    }
    
    function getTimeout (delays, durations) {
      /* istanbul ignore next */
      while (delays.length < durations.length) {
        delays = delays.concat(delays);
      }
    
      return Math.max.apply(null, durations.map(function (d, i) {
        return toMs(d) + toMs(delays[i])
      }))
    }
    
    function toMs (s) {
      return Number(s.slice(0, -1)) * 1000
    }
    
    /*  */
    
    function enter (vnode, toggleDisplay) {
      var el = vnode.elm;
    
      // call leave callback now
      if (isDef(el._leaveCb)) {
        el._leaveCb.cancelled = true;
        el._leaveCb();
      }
    
      var data = resolveTransition(vnode.data.transition);
      if (isUndef(data)) {
        return
      }
    
      /* istanbul ignore if */
      if (isDef(el._enterCb) || el.nodeType !== 1) {
        return
      }
    
      var css = data.css;
      var type = data.type;
      var enterClass = data.enterClass;
      var enterToClass = data.enterToClass;
      var enterActiveClass = data.enterActiveClass;
      var appearClass = data.appearClass;
      var appearToClass = data.appearToClass;
      var appearActiveClass = data.appearActiveClass;
      var beforeEnter = data.beforeEnter;
      var enter = data.enter;
      var afterEnter = data.afterEnter;
      var enterCancelled = data.enterCancelled;
      var beforeAppear = data.beforeAppear;
      var appear = data.appear;
      var afterAppear = data.afterAppear;
      var appearCancelled = data.appearCancelled;
      var duration = data.duration;
    
      // activeInstance will always be the <transition> component managing this
      // transition. One edge case to check is when the <transition> is placed
      // as the root node of a child component. In that case we need to check
      // <transition>'s parent for appear check.
      var context = activeInstance;
      var transitionNode = activeInstance.$vnode;
      while (transitionNode && transitionNode.parent) {
        transitionNode = transitionNode.parent;
        context = transitionNode.context;
      }
    
      var isAppear = !context._isMounted || !vnode.isRootInsert;
    
      if (isAppear && !appear && appear !== '') {
        return
      }
    
      var startClass = isAppear && appearClass
        ? appearClass
        : enterClass;
      var activeClass = isAppear && appearActiveClass
        ? appearActiveClass
        : enterActiveClass;
      var toClass = isAppear && appearToClass
        ? appearToClass
        : enterToClass;
    
      var beforeEnterHook = isAppear
        ? (beforeAppear || beforeEnter)
        : beforeEnter;
      var enterHook = isAppear
        ? (typeof appear === 'function' ? appear : enter)
        : enter;
      var afterEnterHook = isAppear
        ? (afterAppear || afterEnter)
        : afterEnter;
      var enterCancelledHook = isAppear
        ? (appearCancelled || enterCancelled)
        : enterCancelled;
    
      var explicitEnterDuration = toNumber(
        isObject(duration)
          ? duration.enter
          : duration
      );
    
      if ("development" !== 'production' && explicitEnterDuration != null) {
        checkDuration(explicitEnterDuration, 'enter', vnode);
      }
    
      var expectsCSS = css !== false && !isIE9;
      var userWantsControl = getHookArgumentsLength(enterHook);
    
      var cb = el._enterCb = once(function () {
        if (expectsCSS) {
          removeTransitionClass(el, toClass);
          removeTransitionClass(el, activeClass);
        }
        if (cb.cancelled) {
          if (expectsCSS) {
            removeTransitionClass(el, startClass);
          }
          enterCancelledHook && enterCancelledHook(el);
        } else {
          afterEnterHook && afterEnterHook(el);
        }
        el._enterCb = null;
      });
    
      if (!vnode.data.show) {
        // remove pending leave element on enter by injecting an insert hook
        mergeVNodeHook(vnode, 'insert', function () {
          var parent = el.parentNode;
          var pendingNode = parent && parent._pending && parent._pending[vnode.key];
          if (pendingNode &&
            pendingNode.tag === vnode.tag &&
            pendingNode.elm._leaveCb
          ) {
            pendingNode.elm._leaveCb();
          }
          enterHook && enterHook(el, cb);
        });
      }
    
      // start enter transition
      beforeEnterHook && beforeEnterHook(el);
      if (expectsCSS) {
        addTransitionClass(el, startClass);
        addTransitionClass(el, activeClass);
        nextFrame(function () {
          addTransitionClass(el, toClass);
          removeTransitionClass(el, startClass);
          if (!cb.cancelled && !userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        });
      }
    
      if (vnode.data.show) {
        toggleDisplay && toggleDisplay();
        enterHook && enterHook(el, cb);
      }
    
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
    
    function leave (vnode, rm) {
      var el = vnode.elm;
    
      // call enter callback now
      if (isDef(el._enterCb)) {
        el._enterCb.cancelled = true;
        el._enterCb();
      }
    
      var data = resolveTransition(vnode.data.transition);
      if (isUndef(data) || el.nodeType !== 1) {
        return rm()
      }
    
      /* istanbul ignore if */
      if (isDef(el._leaveCb)) {
        return
      }
    
      var css = data.css;
      var type = data.type;
      var leaveClass = data.leaveClass;
      var leaveToClass = data.leaveToClass;
      var leaveActiveClass = data.leaveActiveClass;
      var beforeLeave = data.beforeLeave;
      var leave = data.leave;
      var afterLeave = data.afterLeave;
      var leaveCancelled = data.leaveCancelled;
      var delayLeave = data.delayLeave;
      var duration = data.duration;
    
      var expectsCSS = css !== false && !isIE9;
      var userWantsControl = getHookArgumentsLength(leave);
    
      var explicitLeaveDuration = toNumber(
        isObject(duration)
          ? duration.leave
          : duration
      );
    
      if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
        checkDuration(explicitLeaveDuration, 'leave', vnode);
      }
    
      var cb = el._leaveCb = once(function () {
        if (el.parentNode && el.parentNode._pending) {
          el.parentNode._pending[vnode.key] = null;
        }
        if (expectsCSS) {
          removeTransitionClass(el, leaveToClass);
          removeTransitionClass(el, leaveActiveClass);
        }
        if (cb.cancelled) {
          if (expectsCSS) {
            removeTransitionClass(el, leaveClass);
          }
          leaveCancelled && leaveCancelled(el);
        } else {
          rm();
          afterLeave && afterLeave(el);
        }
        el._leaveCb = null;
      });
    
      if (delayLeave) {
        delayLeave(performLeave);
      } else {
        performLeave();
      }
    
      function performLeave () {
        // the delayed leave may have already been cancelled
        if (cb.cancelled) {
          return
        }
        // record leaving element
        if (!vnode.data.show) {
          (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
        }
        beforeLeave && beforeLeave(el);
        if (expectsCSS) {
          addTransitionClass(el, leaveClass);
          addTransitionClass(el, leaveActiveClass);
          nextFrame(function () {
            addTransitionClass(el, leaveToClass);
            removeTransitionClass(el, leaveClass);
            if (!cb.cancelled && !userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          });
        }
        leave && leave(el, cb);
        if (!expectsCSS && !userWantsControl) {
          cb();
        }
      }
    }
    
    // only used in dev mode
    function checkDuration (val, name, vnode) {
      if (typeof val !== 'number') {
        warn(
          "<transition> explicit " + name + " duration is not a valid number - " +
          "got " + (JSON.stringify(val)) + ".",
          vnode.context
        );
      } else if (isNaN(val)) {
        warn(
          "<transition> explicit " + name + " duration is NaN - " +
          'the duration expression might be incorrect.',
          vnode.context
        );
      }
    }
    
    function isValidDuration (val) {
      return typeof val === 'number' && !isNaN(val)
    }
    
    /**
     * Normalize a transition hook's argument length. The hook may be:
     * - a merged hook (invoker) with the original in .fns
     * - a wrapped component method (check ._length)
     * - a plain function (.length)
     */
    function getHookArgumentsLength (fn) {
      if (isUndef(fn)) {
        return false
      }
      var invokerFns = fn.fns;
      if (isDef(invokerFns)) {
        // invoker
        return getHookArgumentsLength(
          Array.isArray(invokerFns)
            ? invokerFns[0]
            : invokerFns
        )
      } else {
        return (fn._length || fn.length) > 1
      }
    }
    
    function _enter (_, vnode) {
      if (vnode.data.show !== true) {
        enter(vnode);
      }
    }
    
    var transition = inBrowser ? {
      create: _enter,
      activate: _enter,
      remove: function remove$$1 (vnode, rm) {
        /* istanbul ignore else */
        if (vnode.data.show !== true) {
          leave(vnode, rm);
        } else {
          rm();
        }
      }
    } : {};
    
    var platformModules = [
      attrs,
      klass,
      events,
      domProps,
      style,
      transition
    ];
    
    /*  */
    
    // the directive module should be applied last, after all
    // built-in modules have been applied.
    var modules = platformModules.concat(baseModules);
    
    var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });
    
    /**
     * Not type checking this file because flow doesn't like attaching
     * properties to Elements.
     */
    
    /* istanbul ignore if */
    if (isIE9) {
      // http://www.matts411.com/post/internet-explorer-9-oninput/
      document.addEventListener('selectionchange', function () {
        var el = document.activeElement;
        if (el && el.vmodel) {
          trigger(el, 'input');
        }
      });
    }
    
    var directive = {
      inserted: function inserted (el, binding, vnode, oldVnode) {
        if (vnode.tag === 'select') {
          // #6903
          if (oldVnode.elm && !oldVnode.elm._vOptions) {
            mergeVNodeHook(vnode, 'postpatch', function () {
              directive.componentUpdated(el, binding, vnode);
            });
          } else {
            setSelected(el, binding, vnode.context);
          }
          el._vOptions = [].map.call(el.options, getValue);
        } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
          el._vModifiers = binding.modifiers;
          if (!binding.modifiers.lazy) {
            // Safari < 10.2 & UIWebView doesn't fire compositionend when
            // switching focus before confirming composition choice
            // this also fixes the issue where some browsers e.g. iOS Chrome
            // fires "change" instead of "input" on autocomplete.
            el.addEventListener('change', onCompositionEnd);
            if (!isAndroid) {
              el.addEventListener('compositionstart', onCompositionStart);
              el.addEventListener('compositionend', onCompositionEnd);
            }
            /* istanbul ignore if */
            if (isIE9) {
              el.vmodel = true;
            }
          }
        }
      },
    
      componentUpdated: function componentUpdated (el, binding, vnode) {
        if (vnode.tag === 'select') {
          setSelected(el, binding, vnode.context);
          // in case the options rendered by v-for have changed,
          // it's possible that the value is out-of-sync with the rendered options.
          // detect such cases and filter out values that no longer has a matching
          // option in the DOM.
          var prevOptions = el._vOptions;
          var curOptions = el._vOptions = [].map.call(el.options, getValue);
          if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
            // trigger change event if
            // no matching option found for at least one value
            var needReset = el.multiple
              ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
              : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
            if (needReset) {
              trigger(el, 'change');
            }
          }
        }
      }
    };
    
    function setSelected (el, binding, vm) {
      actuallySetSelected(el, binding, vm);
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(function () {
          actuallySetSelected(el, binding, vm);
        }, 0);
      }
    }
    
    function actuallySetSelected (el, binding, vm) {
      var value = binding.value;
      var isMultiple = el.multiple;
      if (isMultiple && !Array.isArray(value)) {
        "development" !== 'production' && warn(
          "<select multiple v-model=\"" + (binding.expression) + "\"> " +
          "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
          vm
        );
        return
      }
      var selected, option;
      for (var i = 0, l = el.options.length; i < l; i++) {
        option = el.options[i];
        if (isMultiple) {
          selected = looseIndexOf(value, getValue(option)) > -1;
          if (option.selected !== selected) {
            option.selected = selected;
          }
        } else {
          if (looseEqual(getValue(option), value)) {
            if (el.selectedIndex !== i) {
              el.selectedIndex = i;
            }
            return
          }
        }
      }
      if (!isMultiple) {
        el.selectedIndex = -1;
      }
    }
    
    function hasNoMatchingOption (value, options) {
      return options.every(function (o) { return !looseEqual(o, value); })
    }
    
    function getValue (option) {
      return '_value' in option
        ? option._value
        : option.value
    }
    
    function onCompositionStart (e) {
      e.target.composing = true;
    }
    
    function onCompositionEnd (e) {
      // prevent triggering an input event for no reason
      if (!e.target.composing) { return }
      e.target.composing = false;
      trigger(e.target, 'input');
    }
    
    function trigger (el, type) {
      var e = document.createEvent('HTMLEvents');
      e.initEvent(type, true, true);
      el.dispatchEvent(e);
    }
    
    /*  */
    
    // recursively search for possible transition defined inside the component root
    function locateNode (vnode) {
      return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
        ? locateNode(vnode.componentInstance._vnode)
        : vnode
    }
    
    var show = {
      bind: function bind (el, ref, vnode) {
        var value = ref.value;
    
        vnode = locateNode(vnode);
        var transition$$1 = vnode.data && vnode.data.transition;
        var originalDisplay = el.__vOriginalDisplay =
          el.style.display === 'none' ? '' : el.style.display;
        if (value && transition$$1) {
          vnode.data.show = true;
          enter(vnode, function () {
            el.style.display = originalDisplay;
          });
        } else {
          el.style.display = value ? originalDisplay : 'none';
        }
      },
    
      update: function update (el, ref, vnode) {
        var value = ref.value;
        var oldValue = ref.oldValue;
    
        /* istanbul ignore if */
        if (value === oldValue) { return }
        vnode = locateNode(vnode);
        var transition$$1 = vnode.data && vnode.data.transition;
        if (transition$$1) {
          vnode.data.show = true;
          if (value) {
            enter(vnode, function () {
              el.style.display = el.__vOriginalDisplay;
            });
          } else {
            leave(vnode, function () {
              el.style.display = 'none';
            });
          }
        } else {
          el.style.display = value ? el.__vOriginalDisplay : 'none';
        }
      },
    
      unbind: function unbind (
        el,
        binding,
        vnode,
        oldVnode,
        isDestroy
      ) {
        if (!isDestroy) {
          el.style.display = el.__vOriginalDisplay;
        }
      }
    };
    
    var platformDirectives = {
      model: directive,
      show: show
    };
    
    /*  */
    
    // Provides transition support for a single element/component.
    // supports transition mode (out-in / in-out)
    
    var transitionProps = {
      name: String,
      appear: Boolean,
      css: Boolean,
      mode: String,
      type: String,
      enterClass: String,
      leaveClass: String,
      enterToClass: String,
      leaveToClass: String,
      enterActiveClass: String,
      leaveActiveClass: String,
      appearClass: String,
      appearActiveClass: String,
      appearToClass: String,
      duration: [Number, String, Object]
    };
    
    // in case the child is also an abstract component, e.g. <keep-alive>
    // we want to recursively retrieve the real component to be rendered
    function getRealChild (vnode) {
      var compOptions = vnode && vnode.componentOptions;
      if (compOptions && compOptions.Ctor.options.abstract) {
        return getRealChild(getFirstComponentChild(compOptions.children))
      } else {
        return vnode
      }
    }
    
    function extractTransitionData (comp) {
      var data = {};
      var options = comp.$options;
      // props
      for (var key in options.propsData) {
        data[key] = comp[key];
      }
      // events.
      // extract listeners and pass them directly to the transition methods
      var listeners = options._parentListeners;
      for (var key$1 in listeners) {
        data[camelize(key$1)] = listeners[key$1];
      }
      return data
    }
    
    function placeholder (h, rawChild) {
      if (/\d-keep-alive$/.test(rawChild.tag)) {
        return h('keep-alive', {
          props: rawChild.componentOptions.propsData
        })
      }
    }
    
    function hasParentTransition (vnode) {
      while ((vnode = vnode.parent)) {
        if (vnode.data.transition) {
          return true
        }
      }
    }
    
    function isSameChild (child, oldChild) {
      return oldChild.key === child.key && oldChild.tag === child.tag
    }
    
    var Transition = {
      name: 'transition',
      props: transitionProps,
      abstract: true,
    
      render: function render (h) {
        var this$1 = this;
    
        var children = this.$slots.default;
        if (!children) {
          return
        }
    
        // filter out text nodes (possible whitespaces)
        children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
        /* istanbul ignore if */
        if (!children.length) {
          return
        }
    
        // warn multiple elements
        if ("development" !== 'production' && children.length > 1) {
          warn(
            '<transition> can only be used on a single element. Use ' +
            '<transition-group> for lists.',
            this.$parent
          );
        }
    
        var mode = this.mode;
    
        // warn invalid mode
        if ("development" !== 'production' &&
          mode && mode !== 'in-out' && mode !== 'out-in'
        ) {
          warn(
            'invalid <transition> mode: ' + mode,
            this.$parent
          );
        }
    
        var rawChild = children[0];
    
        // if this is a component root node and the component's
        // parent container node also has transition, skip.
        if (hasParentTransition(this.$vnode)) {
          return rawChild
        }
    
        // apply transition data to child
        // use getRealChild() to ignore abstract components e.g. keep-alive
        var child = getRealChild(rawChild);
        /* istanbul ignore if */
        if (!child) {
          return rawChild
        }
    
        if (this._leaving) {
          return placeholder(h, rawChild)
        }
    
        // ensure a key that is unique to the vnode type and to this transition
        // component instance. This key will be used to remove pending leaving nodes
        // during entering.
        var id = "__transition-" + (this._uid) + "-";
        child.key = child.key == null
          ? child.isComment
            ? id + 'comment'
            : id + child.tag
          : isPrimitive(child.key)
            ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
            : child.key;
    
        var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
        var oldRawChild = this._vnode;
        var oldChild = getRealChild(oldRawChild);
    
        // mark v-show
        // so that the transition module can hand over the control to the directive
        if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
          child.data.show = true;
        }
    
        if (
          oldChild &&
          oldChild.data &&
          !isSameChild(child, oldChild) &&
          !isAsyncPlaceholder(oldChild) &&
          // #6687 component root is a comment node
          !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
        ) {
          // replace old child transition data with fresh one
          // important for dynamic transitions!
          var oldData = oldChild.data.transition = extend({}, data);
          // handle transition mode
          if (mode === 'out-in') {
            // return placeholder node and queue update when leave finishes
            this._leaving = true;
            mergeVNodeHook(oldData, 'afterLeave', function () {
              this$1._leaving = false;
              this$1.$forceUpdate();
            });
            return placeholder(h, rawChild)
          } else if (mode === 'in-out') {
            if (isAsyncPlaceholder(child)) {
              return oldRawChild
            }
            var delayedLeave;
            var performLeave = function () { delayedLeave(); };
            mergeVNodeHook(data, 'afterEnter', performLeave);
            mergeVNodeHook(data, 'enterCancelled', performLeave);
            mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
          }
        }
    
        return rawChild
      }
    };
    
    /*  */
    
    // Provides transition support for list items.
    // supports move transitions using the FLIP technique.
    
    // Because the vdom's children update algorithm is "unstable" - i.e.
    // it doesn't guarantee the relative positioning of removed elements,
    // we force transition-group to update its children into two passes:
    // in the first pass, we remove all nodes that need to be removed,
    // triggering their leaving transition; in the second pass, we insert/move
    // into the final desired state. This way in the second pass removed
    // nodes will remain where they should be.
    
    var props = extend({
      tag: String,
      moveClass: String
    }, transitionProps);
    
    delete props.mode;
    
    var TransitionGroup = {
      props: props,
    
      render: function render (h) {
        var tag = this.tag || this.$vnode.data.tag || 'span';
        var map = Object.create(null);
        var prevChildren = this.prevChildren = this.children;
        var rawChildren = this.$slots.default || [];
        var children = this.children = [];
        var transitionData = extractTransitionData(this);
    
        for (var i = 0; i < rawChildren.length; i++) {
          var c = rawChildren[i];
          if (c.tag) {
            if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
              children.push(c);
              map[c.key] = c
              ;(c.data || (c.data = {})).transition = transitionData;
            } else if (true) {
              var opts = c.componentOptions;
              var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
              warn(("<transition-group> children must be keyed: <" + name + ">"));
            }
          }
        }
    
        if (prevChildren) {
          var kept = [];
          var removed = [];
          for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
            var c$1 = prevChildren[i$1];
            c$1.data.transition = transitionData;
            c$1.data.pos = c$1.elm.getBoundingClientRect();
            if (map[c$1.key]) {
              kept.push(c$1);
            } else {
              removed.push(c$1);
            }
          }
          this.kept = h(tag, null, kept);
          this.removed = removed;
        }
    
        return h(tag, null, children)
      },
    
      beforeUpdate: function beforeUpdate () {
        // force removing pass
        this.__patch__(
          this._vnode,
          this.kept,
          false, // hydrating
          true // removeOnly (!important avoids unnecessary moves)
        );
        this._vnode = this.kept;
      },
    
      updated: function updated () {
        var children = this.prevChildren;
        var moveClass = this.moveClass || ((this.name || 'v') + '-move');
        if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
          return
        }
    
        // we divide the work into three loops to avoid mixing DOM reads and writes
        // in each iteration - which helps prevent layout thrashing.
        children.forEach(callPendingCbs);
        children.forEach(recordPosition);
        children.forEach(applyTranslation);
    
        // force reflow to put everything in position
        // assign to this to avoid being removed in tree-shaking
        // $flow-disable-line
        this._reflow = document.body.offsetHeight;
    
        children.forEach(function (c) {
          if (c.data.moved) {
            var el = c.elm;
            var s = el.style;
            addTransitionClass(el, moveClass);
            s.transform = s.WebkitTransform = s.transitionDuration = '';
            el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
              if (!e || /transform$/.test(e.propertyName)) {
                el.removeEventListener(transitionEndEvent, cb);
                el._moveCb = null;
                removeTransitionClass(el, moveClass);
              }
            });
          }
        });
      },
    
      methods: {
        hasMove: function hasMove (el, moveClass) {
          /* istanbul ignore if */
          if (!hasTransition) {
            return false
          }
          /* istanbul ignore if */
          if (this._hasMove) {
            return this._hasMove
          }
          // Detect whether an element with the move class applied has
          // CSS transitions. Since the element may be inside an entering
          // transition at this very moment, we make a clone of it and remove
          // all other transition classes applied to ensure only the move class
          // is applied.
          var clone = el.cloneNode();
          if (el._transitionClasses) {
            el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
          }
          addClass(clone, moveClass);
          clone.style.display = 'none';
          this.$el.appendChild(clone);
          var info = getTransitionInfo(clone);
          this.$el.removeChild(clone);
          return (this._hasMove = info.hasTransform)
        }
      }
    };
    
    function callPendingCbs (c) {
      /* istanbul ignore if */
      if (c.elm._moveCb) {
        c.elm._moveCb();
      }
      /* istanbul ignore if */
      if (c.elm._enterCb) {
        c.elm._enterCb();
      }
    }
    
    function recordPosition (c) {
      c.data.newPos = c.elm.getBoundingClientRect();
    }
    
    function applyTranslation (c) {
      var oldPos = c.data.pos;
      var newPos = c.data.newPos;
      var dx = oldPos.left - newPos.left;
      var dy = oldPos.top - newPos.top;
      if (dx || dy) {
        c.data.moved = true;
        var s = c.elm.style;
        s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
        s.transitionDuration = '0s';
      }
    }
    
    var platformComponents = {
      Transition: Transition,
      TransitionGroup: TransitionGroup
    };
    
    /*  */
    
    // install platform specific utils
    Vue$3.config.mustUseProp = mustUseProp;
    Vue$3.config.isReservedTag = isReservedTag;
    Vue$3.config.isReservedAttr = isReservedAttr;
    Vue$3.config.getTagNamespace = getTagNamespace;
    Vue$3.config.isUnknownElement = isUnknownElement;
    
    // install platform runtime directives & components
    extend(Vue$3.options.directives, platformDirectives);
    extend(Vue$3.options.components, platformComponents);
    
    // install platform patch function
    Vue$3.prototype.__patch__ = inBrowser ? patch : noop;
    
    // public mount method
    Vue$3.prototype.$mount = function (
      el,
      hydrating
    ) {
      el = el && inBrowser ? query(el) : undefined;
      return mountComponent(this, el, hydrating)
    };
    
    // devtools global hook
    /* istanbul ignore next */
    Vue$3.nextTick(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue$3);
        } else if ("development" !== 'production' && isChrome) {
          console[console.info ? 'info' : 'log'](
            'Download the Vue Devtools extension for a better development experience:\n' +
            'https://github.com/vuejs/vue-devtools'
          );
        }
      }
      if ("development" !== 'production' &&
        config.productionTip !== false &&
        inBrowser && typeof console !== 'undefined'
      ) {
        console[console.info ? 'info' : 'log'](
          "You are running Vue in development mode.\n" +
          "Make sure to turn on production mode when deploying for production.\n" +
          "See more tips at https://vuejs.org/guide/deployment.html"
        );
      }
    }, 0);
    
    /*  */
    
    var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
    var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
    
    var buildRegex = cached(function (delimiters) {
      var open = delimiters[0].replace(regexEscapeRE, '\\$&');
      var close = delimiters[1].replace(regexEscapeRE, '\\$&');
      return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
    });
    
    function parseText (
      text,
      delimiters
    ) {
      var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
      if (!tagRE.test(text)) {
        return
      }
      var tokens = [];
      var lastIndex = tagRE.lastIndex = 0;
      var match, index;
      while ((match = tagRE.exec(text))) {
        index = match.index;
        // push text token
        if (index > lastIndex) {
          tokens.push(JSON.stringify(text.slice(lastIndex, index)));
        }
        // tag token
        var exp = parseFilters(match[1].trim());
        tokens.push(("_s(" + exp + ")"));
        lastIndex = index + match[0].length;
      }
      if (lastIndex < text.length) {
        tokens.push(JSON.stringify(text.slice(lastIndex)));
      }
      return tokens.join('+')
    }
    
    /*  */
    
    function transformNode (el, options) {
      var warn = options.warn || baseWarn;
      var staticClass = getAndRemoveAttr(el, 'class');
      if ("development" !== 'production' && staticClass) {
        var expression = parseText(staticClass, options.delimiters);
        if (expression) {
          warn(
            "class=\"" + staticClass + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div class="{{ val }}">, use <div :class="val">.'
          );
        }
      }
      if (staticClass) {
        el.staticClass = JSON.stringify(staticClass);
      }
      var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
      if (classBinding) {
        el.classBinding = classBinding;
      }
    }
    
    function genData (el) {
      var data = '';
      if (el.staticClass) {
        data += "staticClass:" + (el.staticClass) + ",";
      }
      if (el.classBinding) {
        data += "class:" + (el.classBinding) + ",";
      }
      return data
    }
    
    var klass$1 = {
      staticKeys: ['staticClass'],
      transformNode: transformNode,
      genData: genData
    };
    
    /*  */
    
    function transformNode$1 (el, options) {
      var warn = options.warn || baseWarn;
      var staticStyle = getAndRemoveAttr(el, 'style');
      if (staticStyle) {
        /* istanbul ignore if */
        if (true) {
          var expression = parseText(staticStyle, options.delimiters);
          if (expression) {
            warn(
              "style=\"" + staticStyle + "\": " +
              'Interpolation inside attributes has been removed. ' +
              'Use v-bind or the colon shorthand instead. For example, ' +
              'instead of <div style="{{ val }}">, use <div :style="val">.'
            );
          }
        }
        el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
      }
    
      var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
      if (styleBinding) {
        el.styleBinding = styleBinding;
      }
    }
    
    function genData$1 (el) {
      var data = '';
      if (el.staticStyle) {
        data += "staticStyle:" + (el.staticStyle) + ",";
      }
      if (el.styleBinding) {
        data += "style:(" + (el.styleBinding) + "),";
      }
      return data
    }
    
    var style$1 = {
      staticKeys: ['staticStyle'],
      transformNode: transformNode$1,
      genData: genData$1
    };
    
    /*  */
    
    var decoder;
    
    var he = {
      decode: function decode (html) {
        decoder = decoder || document.createElement('div');
        decoder.innerHTML = html;
        return decoder.textContent
      }
    };
    
    /*  */
    
    var isUnaryTag = makeMap(
      'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
      'link,meta,param,source,track,wbr'
    );
    
    // Elements that you can, intentionally, leave open
    // (and which close themselves)
    var canBeLeftOpenTag = makeMap(
      'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
    );
    
    // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
    // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
    var isNonPhrasingTag = makeMap(
      'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
      'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
      'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
      'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
      'title,tr,track'
    );
    
    /**
     * Not type-checking this file because it's mostly vendor code.
     */
    
    /*!
     * HTML Parser By John Resig (ejohn.org)
     * Modified by Juriy "kangax" Zaytsev
     * Original code by Erik Arvidsson, Mozilla Public License
     * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
     */
    
    // Regular Expressions for parsing tags and attributes
    var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
    // could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
    // but for Vue templates we can enforce a simple charset
    var ncname = '[a-zA-Z_][\\w\\-\\.]*';
    var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
    var startTagOpen = new RegExp(("^<" + qnameCapture));
    var startTagClose = /^\s*(\/?)>/;
    var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
    var doctype = /^<!DOCTYPE [^>]+>/i;
    var comment = /^<!--/;
    var conditionalComment = /^<!\[/;
    
    var IS_REGEX_CAPTURING_BROKEN = false;
    'x'.replace(/x(.)?/g, function (m, g) {
      IS_REGEX_CAPTURING_BROKEN = g === '';
    });
    
    // Special Elements (can contain anything)
    var isPlainTextElement = makeMap('script,style,textarea', true);
    var reCache = {};
    
    var decodingMap = {
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&amp;': '&',
      '&#10;': '\n',
      '&#9;': '\t'
    };
    var encodedAttr = /&(?:lt|gt|quot|amp);/g;
    var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;
    
    // #5992
    var isIgnoreNewlineTag = makeMap('pre,textarea', true);
    var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };
    
    function decodeAttr (value, shouldDecodeNewlines) {
      var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
      return value.replace(re, function (match) { return decodingMap[match]; })
    }
    
    function parseHTML (html, options) {
      var stack = [];
      var expectHTML = options.expectHTML;
      var isUnaryTag$$1 = options.isUnaryTag || no;
      var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
      var index = 0;
      var last, lastTag;
      while (html) {
        last = html;
        // Make sure we're not in a plaintext content element like script/style
        if (!lastTag || !isPlainTextElement(lastTag)) {
          var textEnd = html.indexOf('<');
          if (textEnd === 0) {
            // Comment:
            if (comment.test(html)) {
              var commentEnd = html.indexOf('-->');
    
              if (commentEnd >= 0) {
                if (options.shouldKeepComment) {
                  options.comment(html.substring(4, commentEnd));
                }
                advance(commentEnd + 3);
                continue
              }
            }
    
            // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
            if (conditionalComment.test(html)) {
              var conditionalEnd = html.indexOf(']>');
    
              if (conditionalEnd >= 0) {
                advance(conditionalEnd + 2);
                continue
              }
            }
    
            // Doctype:
            var doctypeMatch = html.match(doctype);
            if (doctypeMatch) {
              advance(doctypeMatch[0].length);
              continue
            }
    
            // End tag:
            var endTagMatch = html.match(endTag);
            if (endTagMatch) {
              var curIndex = index;
              advance(endTagMatch[0].length);
              parseEndTag(endTagMatch[1], curIndex, index);
              continue
            }
    
            // Start tag:
            var startTagMatch = parseStartTag();
            if (startTagMatch) {
              handleStartTag(startTagMatch);
              if (shouldIgnoreFirstNewline(lastTag, html)) {
                advance(1);
              }
              continue
            }
          }
    
          var text = (void 0), rest = (void 0), next = (void 0);
          if (textEnd >= 0) {
            rest = html.slice(textEnd);
            while (
              !endTag.test(rest) &&
              !startTagOpen.test(rest) &&
              !comment.test(rest) &&
              !conditionalComment.test(rest)
            ) {
              // < in plain text, be forgiving and treat it as text
              next = rest.indexOf('<', 1);
              if (next < 0) { break }
              textEnd += next;
              rest = html.slice(textEnd);
            }
            text = html.substring(0, textEnd);
            advance(textEnd);
          }
    
          if (textEnd < 0) {
            text = html;
            html = '';
          }
    
          if (options.chars && text) {
            options.chars(text);
          }
        } else {
          var endTagLength = 0;
          var stackedTag = lastTag.toLowerCase();
          var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
          var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
            endTagLength = endTag.length;
            if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
              text = text
                .replace(/<!--([\s\S]*?)-->/g, '$1')
                .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
            }
            if (shouldIgnoreFirstNewline(stackedTag, text)) {
              text = text.slice(1);
            }
            if (options.chars) {
              options.chars(text);
            }
            return ''
          });
          index += html.length - rest$1.length;
          html = rest$1;
          parseEndTag(stackedTag, index - endTagLength, index);
        }
    
        if (html === last) {
          options.chars && options.chars(html);
          if ("development" !== 'production' && !stack.length && options.warn) {
            options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
          }
          break
        }
      }
    
      // Clean up any remaining tags
      parseEndTag();
    
      function advance (n) {
        index += n;
        html = html.substring(n);
      }
    
      function parseStartTag () {
        var start = html.match(startTagOpen);
        if (start) {
          var match = {
            tagName: start[1],
            attrs: [],
            start: index
          };
          advance(start[0].length);
          var end, attr;
          while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
            advance(attr[0].length);
            match.attrs.push(attr);
          }
          if (end) {
            match.unarySlash = end[1];
            advance(end[0].length);
            match.end = index;
            return match
          }
        }
      }
    
      function handleStartTag (match) {
        var tagName = match.tagName;
        var unarySlash = match.unarySlash;
    
        if (expectHTML) {
          if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
            parseEndTag(lastTag);
          }
          if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
            parseEndTag(tagName);
          }
        }
    
        var unary = isUnaryTag$$1(tagName) || !!unarySlash;
    
        var l = match.attrs.length;
        var attrs = new Array(l);
        for (var i = 0; i < l; i++) {
          var args = match.attrs[i];
          // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
          if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
            if (args[3] === '') { delete args[3]; }
            if (args[4] === '') { delete args[4]; }
            if (args[5] === '') { delete args[5]; }
          }
          var value = args[3] || args[4] || args[5] || '';
          var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
            ? options.shouldDecodeNewlinesForHref
            : options.shouldDecodeNewlines;
          attrs[i] = {
            name: args[1],
            value: decodeAttr(value, shouldDecodeNewlines)
          };
        }
    
        if (!unary) {
          stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
          lastTag = tagName;
        }
    
        if (options.start) {
          options.start(tagName, attrs, unary, match.start, match.end);
        }
      }
    
      function parseEndTag (tagName, start, end) {
        var pos, lowerCasedTagName;
        if (start == null) { start = index; }
        if (end == null) { end = index; }
    
        if (tagName) {
          lowerCasedTagName = tagName.toLowerCase();
        }
    
        // Find the closest opened tag of the same type
        if (tagName) {
          for (pos = stack.length - 1; pos >= 0; pos--) {
            if (stack[pos].lowerCasedTag === lowerCasedTagName) {
              break
            }
          }
        } else {
          // If no tag name is provided, clean shop
          pos = 0;
        }
    
        if (pos >= 0) {
          // Close all the open elements, up the stack
          for (var i = stack.length - 1; i >= pos; i--) {
            if ("development" !== 'production' &&
              (i > pos || !tagName) &&
              options.warn
            ) {
              options.warn(
                ("tag <" + (stack[i].tag) + "> has no matching end tag.")
              );
            }
            if (options.end) {
              options.end(stack[i].tag, start, end);
            }
          }
    
          // Remove the open elements from the stack
          stack.length = pos;
          lastTag = pos && stack[pos - 1].tag;
        } else if (lowerCasedTagName === 'br') {
          if (options.start) {
            options.start(tagName, [], true, start, end);
          }
        } else if (lowerCasedTagName === 'p') {
          if (options.start) {
            options.start(tagName, [], false, start, end);
          }
          if (options.end) {
            options.end(tagName, start, end);
          }
        }
      }
    }
    
    /*  */
    
    var onRE = /^@|^v-on:/;
    var dirRE = /^v-|^@|^:/;
    var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
    var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    var stripParensRE = /^\(|\)$/g;
    
    var argRE = /:(.*)$/;
    var bindRE = /^:|^v-bind:/;
    var modifierRE = /\.[^.]+/g;
    
    var decodeHTMLCached = cached(he.decode);
    
    // configurable state
    var warn$2;
    var delimiters;
    var transforms;
    var preTransforms;
    var postTransforms;
    var platformIsPreTag;
    var platformMustUseProp;
    var platformGetTagNamespace;
    
    
    
    function createASTElement (
      tag,
      attrs,
      parent
    ) {
      return {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        parent: parent,
        children: []
      }
    }
    
    /**
     * Convert HTML string to AST.
     */
    function parse (
      template,
      options
    ) {
      warn$2 = options.warn || baseWarn;
    
      platformIsPreTag = options.isPreTag || no;
      platformMustUseProp = options.mustUseProp || no;
      platformGetTagNamespace = options.getTagNamespace || no;
    
      transforms = pluckModuleFunction(options.modules, 'transformNode');
      preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
      postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
    
      delimiters = options.delimiters;
    
      var stack = [];
      var preserveWhitespace = options.preserveWhitespace !== false;
      var root;
      var currentParent;
      var inVPre = false;
      var inPre = false;
      var warned = false;
    
      function warnOnce (msg) {
        if (!warned) {
          warned = true;
          warn$2(msg);
        }
      }
    
      function endPre (element) {
        // check pre state
        if (element.pre) {
          inVPre = false;
        }
        if (platformIsPreTag(element.tag)) {
          inPre = false;
        }
      }
    
      parseHTML(template, {
        warn: warn$2,
        expectHTML: options.expectHTML,
        isUnaryTag: options.isUnaryTag,
        canBeLeftOpenTag: options.canBeLeftOpenTag,
        shouldDecodeNewlines: options.shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
        shouldKeepComment: options.comments,
        start: function start (tag, attrs, unary) {
          // check namespace.
          // inherit parent ns if there is one
          var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);
    
          // handle IE svg bug
          /* istanbul ignore if */
          if (isIE && ns === 'svg') {
            attrs = guardIESVGBug(attrs);
          }
    
          var element = createASTElement(tag, attrs, currentParent);
          if (ns) {
            element.ns = ns;
          }
    
          if (isForbiddenTag(element) && !isServerRendering()) {
            element.forbidden = true;
            "development" !== 'production' && warn$2(
              'Templates should only be responsible for mapping the state to the ' +
              'UI. Avoid placing tags with side-effects in your templates, such as ' +
              "<" + tag + ">" + ', as they will not be parsed.'
            );
          }
    
          // apply pre-transforms
          for (var i = 0; i < preTransforms.length; i++) {
            element = preTransforms[i](element, options) || element;
          }
    
          if (!inVPre) {
            processPre(element);
            if (element.pre) {
              inVPre = true;
            }
          }
          if (platformIsPreTag(element.tag)) {
            inPre = true;
          }
          if (inVPre) {
            processRawAttrs(element);
          } else if (!element.processed) {
            // structural directives
            processFor(element);
            processIf(element);
            processOnce(element);
            // element-scope stuff
            processElement(element, options);
          }
    
          function checkRootConstraints (el) {
            if (true) {
              if (el.tag === 'slot' || el.tag === 'template') {
                warnOnce(
                  "Cannot use <" + (el.tag) + "> as component root element because it may " +
                  'contain multiple nodes.'
                );
              }
              if (el.attrsMap.hasOwnProperty('v-for')) {
                warnOnce(
                  'Cannot use v-for on stateful component root element because ' +
                  'it renders multiple elements.'
                );
              }
            }
          }
    
          // tree management
          if (!root) {
            root = element;
            checkRootConstraints(root);
          } else if (!stack.length) {
            // allow root elements with v-if, v-else-if and v-else
            if (root.if && (element.elseif || element.else)) {
              checkRootConstraints(element);
              addIfCondition(root, {
                exp: element.elseif,
                block: element
              });
            } else if (true) {
              warnOnce(
                "Component template should contain exactly one root element. " +
                "If you are using v-if on multiple elements, " +
                "use v-else-if to chain them instead."
              );
            }
          }
          if (currentParent && !element.forbidden) {
            if (element.elseif || element.else) {
              processIfConditions(element, currentParent);
            } else if (element.slotScope) { // scoped slot
              currentParent.plain = false;
              var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
            } else {
              currentParent.children.push(element);
              element.parent = currentParent;
            }
          }
          if (!unary) {
            currentParent = element;
            stack.push(element);
          } else {
            endPre(element);
          }
          // apply post-transforms
          for (var i$1 = 0; i$1 < postTransforms.length; i$1++) {
            postTransforms[i$1](element, options);
          }
        },
    
        end: function end () {
          // remove trailing whitespace
          var element = stack[stack.length - 1];
          var lastNode = element.children[element.children.length - 1];
          if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
            element.children.pop();
          }
          // pop stack
          stack.length -= 1;
          currentParent = stack[stack.length - 1];
          endPre(element);
        },
    
        chars: function chars (text) {
          if (!currentParent) {
            if (true) {
              if (text === template) {
                warnOnce(
                  'Component template requires a root element, rather than just text.'
                );
              } else if ((text = text.trim())) {
                warnOnce(
                  ("text \"" + text + "\" outside root element will be ignored.")
                );
              }
            }
            return
          }
          // IE textarea placeholder bug
          /* istanbul ignore if */
          if (isIE &&
            currentParent.tag === 'textarea' &&
            currentParent.attrsMap.placeholder === text
          ) {
            return
          }
          var children = currentParent.children;
          text = inPre || text.trim()
            ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
            // only preserve whitespace if its not right after a starting tag
            : preserveWhitespace && children.length ? ' ' : '';
          if (text) {
            var expression;
            if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
              children.push({
                type: 2,
                expression: expression,
                text: text
              });
            } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
              children.push({
                type: 3,
                text: text
              });
            }
          }
        },
        comment: function comment (text) {
          currentParent.children.push({
            type: 3,
            text: text,
            isComment: true
          });
        }
      });
      return root
    }
    
    function processPre (el) {
      if (getAndRemoveAttr(el, 'v-pre') != null) {
        el.pre = true;
      }
    }
    
    function processRawAttrs (el) {
      var l = el.attrsList.length;
      if (l) {
        var attrs = el.attrs = new Array(l);
        for (var i = 0; i < l; i++) {
          attrs[i] = {
            name: el.attrsList[i].name,
            value: JSON.stringify(el.attrsList[i].value)
          };
        }
      } else if (!el.pre) {
        // non root node in pre blocks with no attributes
        el.plain = true;
      }
    }
    
    function processElement (element, options) {
      processKey(element);
    
      // determine whether this is a plain element after
      // removing structural attributes
      element.plain = !element.key && !element.attrsList.length;
    
      processRef(element);
      processSlot(element);
      processComponent(element);
      for (var i = 0; i < transforms.length; i++) {
        element = transforms[i](element, options) || element;
      }
      processAttrs(element);
    }
    
    function processKey (el) {
      var exp = getBindingAttr(el, 'key');
      if (exp) {
        if ("development" !== 'production' && el.tag === 'template') {
          warn$2("<template> cannot be keyed. Place the key on real elements instead.");
        }
        el.key = exp;
      }
    }
    
    function processRef (el) {
      var ref = getBindingAttr(el, 'ref');
      if (ref) {
        el.ref = ref;
        el.refInFor = checkInFor(el);
      }
    }
    
    function processFor (el) {
      var exp;
      if ((exp = getAndRemoveAttr(el, 'v-for'))) {
        var inMatch = exp.match(forAliasRE);
        if (!inMatch) {
          "development" !== 'production' && warn$2(
            ("Invalid v-for expression: " + exp)
          );
          return
        }
        el.for = inMatch[2].trim();
        var alias = inMatch[1].trim().replace(stripParensRE, '');
        var iteratorMatch = alias.match(forIteratorRE);
        if (iteratorMatch) {
          el.alias = alias.replace(forIteratorRE, '');
          el.iterator1 = iteratorMatch[1].trim();
          if (iteratorMatch[2]) {
            el.iterator2 = iteratorMatch[2].trim();
          }
        } else {
          el.alias = alias;
        }
      }
    }
    
    function processIf (el) {
      var exp = getAndRemoveAttr(el, 'v-if');
      if (exp) {
        el.if = exp;
        addIfCondition(el, {
          exp: exp,
          block: el
        });
      } else {
        if (getAndRemoveAttr(el, 'v-else') != null) {
          el.else = true;
        }
        var elseif = getAndRemoveAttr(el, 'v-else-if');
        if (elseif) {
          el.elseif = elseif;
        }
      }
    }
    
    function processIfConditions (el, parent) {
      var prev = findPrevElement(parent.children);
      if (prev && prev.if) {
        addIfCondition(prev, {
          exp: el.elseif,
          block: el
        });
      } else if (true) {
        warn$2(
          "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
          "used on element <" + (el.tag) + "> without corresponding v-if."
        );
      }
    }
    
    function findPrevElement (children) {
      var i = children.length;
      while (i--) {
        if (children[i].type === 1) {
          return children[i]
        } else {
          if ("development" !== 'production' && children[i].text !== ' ') {
            warn$2(
              "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
              "will be ignored."
            );
          }
          children.pop();
        }
      }
    }
    
    function addIfCondition (el, condition) {
      if (!el.ifConditions) {
        el.ifConditions = [];
      }
      el.ifConditions.push(condition);
    }
    
    function processOnce (el) {
      var once$$1 = getAndRemoveAttr(el, 'v-once');
      if (once$$1 != null) {
        el.once = true;
      }
    }
    
    function processSlot (el) {
      if (el.tag === 'slot') {
        el.slotName = getBindingAttr(el, 'name');
        if ("development" !== 'production' && el.key) {
          warn$2(
            "`key` does not work on <slot> because slots are abstract outlets " +
            "and can possibly expand into multiple elements. " +
            "Use the key on a wrapping element instead."
          );
        }
      } else {
        var slotScope;
        if (el.tag === 'template') {
          slotScope = getAndRemoveAttr(el, 'scope');
          /* istanbul ignore if */
          if ("development" !== 'production' && slotScope) {
            warn$2(
              "the \"scope\" attribute for scoped slots have been deprecated and " +
              "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
              "can also be used on plain elements in addition to <template> to " +
              "denote scoped slots.",
              true
            );
          }
          el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
        } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
          /* istanbul ignore if */
          if ("development" !== 'production' && el.attrsMap['v-for']) {
            warn$2(
              "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
              "(v-for takes higher priority). Use a wrapper <template> for the " +
              "scoped slot to make it clearer.",
              true
            );
          }
          el.slotScope = slotScope;
        }
        var slotTarget = getBindingAttr(el, 'slot');
        if (slotTarget) {
          el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
          // preserve slot as an attribute for native shadow DOM compat
          // only for non-scoped slots.
          if (el.tag !== 'template' && !el.slotScope) {
            addAttr(el, 'slot', slotTarget);
          }
        }
      }
    }
    
    function processComponent (el) {
      var binding;
      if ((binding = getBindingAttr(el, 'is'))) {
        el.component = binding;
      }
      if (getAndRemoveAttr(el, 'inline-template') != null) {
        el.inlineTemplate = true;
      }
    }
    
    function processAttrs (el) {
      var list = el.attrsList;
      var i, l, name, rawName, value, modifiers, isProp;
      for (i = 0, l = list.length; i < l; i++) {
        name = rawName = list[i].name;
        value = list[i].value;
        if (dirRE.test(name)) {
          // mark element as dynamic
          el.hasBindings = true;
          // modifiers
          modifiers = parseModifiers(name);
          if (modifiers) {
            name = name.replace(modifierRE, '');
          }
          if (bindRE.test(name)) { // v-bind
            name = name.replace(bindRE, '');
            value = parseFilters(value);
            isProp = false;
            if (modifiers) {
              if (modifiers.prop) {
                isProp = true;
                name = camelize(name);
                if (name === 'innerHtml') { name = 'innerHTML'; }
              }
              if (modifiers.camel) {
                name = camelize(name);
              }
              if (modifiers.sync) {
                addHandler(
                  el,
                  ("update:" + (camelize(name))),
                  genAssignmentCode(value, "$event")
                );
              }
            }
            if (isProp || (
              !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
            )) {
              addProp(el, name, value);
            } else {
              addAttr(el, name, value);
            }
          } else if (onRE.test(name)) { // v-on
            name = name.replace(onRE, '');
            addHandler(el, name, value, modifiers, false, warn$2);
          } else { // normal directives
            name = name.replace(dirRE, '');
            // parse arg
            var argMatch = name.match(argRE);
            var arg = argMatch && argMatch[1];
            if (arg) {
              name = name.slice(0, -(arg.length + 1));
            }
            addDirective(el, name, rawName, value, arg, modifiers);
            if ("development" !== 'production' && name === 'model') {
              checkForAliasModel(el, value);
            }
          }
        } else {
          // literal attribute
          if (true) {
            var expression = parseText(value, delimiters);
            if (expression) {
              warn$2(
                name + "=\"" + value + "\": " +
                'Interpolation inside attributes has been removed. ' +
                'Use v-bind or the colon shorthand instead. For example, ' +
                'instead of <div id="{{ val }}">, use <div :id="val">.'
              );
            }
          }
          addAttr(el, name, JSON.stringify(value));
          // #6887 firefox doesn't update muted state if set via attribute
          // even immediately after element creation
          if (!el.component &&
              name === 'muted' &&
              platformMustUseProp(el.tag, el.attrsMap.type, name)) {
            addProp(el, name, 'true');
          }
        }
      }
    }
    
    function checkInFor (el) {
      var parent = el;
      while (parent) {
        if (parent.for !== undefined) {
          return true
        }
        parent = parent.parent;
      }
      return false
    }
    
    function parseModifiers (name) {
      var match = name.match(modifierRE);
      if (match) {
        var ret = {};
        match.forEach(function (m) { ret[m.slice(1)] = true; });
        return ret
      }
    }
    
    function makeAttrsMap (attrs) {
      var map = {};
      for (var i = 0, l = attrs.length; i < l; i++) {
        if (
          "development" !== 'production' &&
          map[attrs[i].name] && !isIE && !isEdge
        ) {
          warn$2('duplicate attribute: ' + attrs[i].name);
        }
        map[attrs[i].name] = attrs[i].value;
      }
      return map
    }
    
    // for script (e.g. type="x/template") or style, do not decode content
    function isTextTag (el) {
      return el.tag === 'script' || el.tag === 'style'
    }
    
    function isForbiddenTag (el) {
      return (
        el.tag === 'style' ||
        (el.tag === 'script' && (
          !el.attrsMap.type ||
          el.attrsMap.type === 'text/javascript'
        ))
      )
    }
    
    var ieNSBug = /^xmlns:NS\d+/;
    var ieNSPrefix = /^NS\d+:/;
    
    /* istanbul ignore next */
    function guardIESVGBug (attrs) {
      var res = [];
      for (var i = 0; i < attrs.length; i++) {
        var attr = attrs[i];
        if (!ieNSBug.test(attr.name)) {
          attr.name = attr.name.replace(ieNSPrefix, '');
          res.push(attr);
        }
      }
      return res
    }
    
    function checkForAliasModel (el, value) {
      var _el = el;
      while (_el) {
        if (_el.for && _el.alias === value) {
          warn$2(
            "<" + (el.tag) + " v-model=\"" + value + "\">: " +
            "You are binding v-model directly to a v-for iteration alias. " +
            "This will not be able to modify the v-for source array because " +
            "writing to the alias is like modifying a function local variable. " +
            "Consider using an array of objects and use v-model on an object property instead."
          );
        }
        _el = _el.parent;
      }
    }
    
    /*  */
    
    /**
     * Expand input[v-model] with dyanmic type bindings into v-if-else chains
     * Turn this:
     *   <input v-model="data[type]" :type="type">
     * into this:
     *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
     *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
     *   <input v-else :type="type" v-model="data[type]">
     */
    
    function preTransformNode (el, options) {
      if (el.tag === 'input') {
        var map = el.attrsMap;
        if (map['v-model'] && (map['v-bind:type'] || map[':type'])) {
          var typeBinding = getBindingAttr(el, 'type');
          var ifCondition = getAndRemoveAttr(el, 'v-if', true);
          var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
          var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
          var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
          // 1. checkbox
          var branch0 = cloneASTElement(el);
          // process for on the main node
          processFor(branch0);
          addRawAttr(branch0, 'type', 'checkbox');
          processElement(branch0, options);
          branch0.processed = true; // prevent it from double-processed
          branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
          addIfCondition(branch0, {
            exp: branch0.if,
            block: branch0
          });
          // 2. add radio else-if condition
          var branch1 = cloneASTElement(el);
          getAndRemoveAttr(branch1, 'v-for', true);
          addRawAttr(branch1, 'type', 'radio');
          processElement(branch1, options);
          addIfCondition(branch0, {
            exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
            block: branch1
          });
          // 3. other
          var branch2 = cloneASTElement(el);
          getAndRemoveAttr(branch2, 'v-for', true);
          addRawAttr(branch2, ':type', typeBinding);
          processElement(branch2, options);
          addIfCondition(branch0, {
            exp: ifCondition,
            block: branch2
          });
    
          if (hasElse) {
            branch0.else = true;
          } else if (elseIfCondition) {
            branch0.elseif = elseIfCondition;
          }
    
          return branch0
        }
      }
    }
    
    function cloneASTElement (el) {
      return createASTElement(el.tag, el.attrsList.slice(), el.parent)
    }
    
    function addRawAttr (el, name, value) {
      el.attrsMap[name] = value;
      el.attrsList.push({ name: name, value: value });
    }
    
    var model$2 = {
      preTransformNode: preTransformNode
    };
    
    var modules$1 = [
      klass$1,
      style$1,
      model$2
    ];
    
    /*  */
    
    function text (el, dir) {
      if (dir.value) {
        addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
      }
    }
    
    /*  */
    
    function html (el, dir) {
      if (dir.value) {
        addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
      }
    }
    
    var directives$1 = {
      model: model,
      text: text,
      html: html
    };
    
    /*  */
    
    var baseOptions = {
      expectHTML: true,
      modules: modules$1,
      directives: directives$1,
      isPreTag: isPreTag,
      isUnaryTag: isUnaryTag,
      mustUseProp: mustUseProp,
      canBeLeftOpenTag: canBeLeftOpenTag,
      isReservedTag: isReservedTag,
      getTagNamespace: getTagNamespace,
      staticKeys: genStaticKeys(modules$1)
    };
    
    /*  */
    
    var isStaticKey;
    var isPlatformReservedTag;
    
    var genStaticKeysCached = cached(genStaticKeys$1);
    
    /**
     * Goal of the optimizer: walk the generated template AST tree
     * and detect sub-trees that are purely static, i.e. parts of
     * the DOM that never needs to change.
     *
     * Once we detect these sub-trees, we can:
     *
     * 1. Hoist them into constants, so that we no longer need to
     *    create fresh nodes for them on each re-render;
     * 2. Completely skip them in the patching process.
     */
    function optimize (root, options) {
      if (!root) { return }
      isStaticKey = genStaticKeysCached(options.staticKeys || '');
      isPlatformReservedTag = options.isReservedTag || no;
      // first pass: mark all non-static nodes.
      markStatic$1(root);
      // second pass: mark static roots.
      markStaticRoots(root, false);
    }
    
    function genStaticKeys$1 (keys) {
      return makeMap(
        'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
        (keys ? ',' + keys : '')
      )
    }
    
    function markStatic$1 (node) {
      node.static = isStatic(node);
      if (node.type === 1) {
        // do not make component slot content static. this avoids
        // 1. components not able to mutate slot nodes
        // 2. static slot content fails for hot-reloading
        if (
          !isPlatformReservedTag(node.tag) &&
          node.tag !== 'slot' &&
          node.attrsMap['inline-template'] == null
        ) {
          return
        }
        for (var i = 0, l = node.children.length; i < l; i++) {
          var child = node.children[i];
          markStatic$1(child);
          if (!child.static) {
            node.static = false;
          }
        }
        if (node.ifConditions) {
          for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
            var block = node.ifConditions[i$1].block;
            markStatic$1(block);
            if (!block.static) {
              node.static = false;
            }
          }
        }
      }
    }
    
    function markStaticRoots (node, isInFor) {
      if (node.type === 1) {
        if (node.static || node.once) {
          node.staticInFor = isInFor;
        }
        // For a node to qualify as a static root, it should have children that
        // are not just static text. Otherwise the cost of hoisting out will
        // outweigh the benefits and it's better off to just always render it fresh.
        if (node.static && node.children.length && !(
          node.children.length === 1 &&
          node.children[0].type === 3
        )) {
          node.staticRoot = true;
          return
        } else {
          node.staticRoot = false;
        }
        if (node.children) {
          for (var i = 0, l = node.children.length; i < l; i++) {
            markStaticRoots(node.children[i], isInFor || !!node.for);
          }
        }
        if (node.ifConditions) {
          for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
            markStaticRoots(node.ifConditions[i$1].block, isInFor);
          }
        }
      }
    }
    
    function isStatic (node) {
      if (node.type === 2) { // expression
        return false
      }
      if (node.type === 3) { // text
        return true
      }
      return !!(node.pre || (
        !node.hasBindings && // no dynamic bindings
        !node.if && !node.for && // not v-if or v-for or v-else
        !isBuiltInTag(node.tag) && // not a built-in
        isPlatformReservedTag(node.tag) && // not a component
        !isDirectChildOfTemplateFor(node) &&
        Object.keys(node).every(isStaticKey)
      ))
    }
    
    function isDirectChildOfTemplateFor (node) {
      while (node.parent) {
        node = node.parent;
        if (node.tag !== 'template') {
          return false
        }
        if (node.for) {
          return true
        }
      }
      return false
    }
    
    /*  */
    
    var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
    var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;
    
    // keyCode aliases
    var keyCodes = {
      esc: 27,
      tab: 9,
      enter: 13,
      space: 32,
      up: 38,
      left: 37,
      right: 39,
      down: 40,
      'delete': [8, 46]
    };
    
    // #4868: modifiers that prevent the execution of the listener
    // need to explicitly return null so that we can determine whether to remove
    // the listener for .once
    var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };
    
    var modifierCode = {
      stop: '$event.stopPropagation();',
      prevent: '$event.preventDefault();',
      self: genGuard("$event.target !== $event.currentTarget"),
      ctrl: genGuard("!$event.ctrlKey"),
      shift: genGuard("!$event.shiftKey"),
      alt: genGuard("!$event.altKey"),
      meta: genGuard("!$event.metaKey"),
      left: genGuard("'button' in $event && $event.button !== 0"),
      middle: genGuard("'button' in $event && $event.button !== 1"),
      right: genGuard("'button' in $event && $event.button !== 2")
    };
    
    function genHandlers (
      events,
      isNative,
      warn
    ) {
      var res = isNative ? 'nativeOn:{' : 'on:{';
      for (var name in events) {
        res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
      }
      return res.slice(0, -1) + '}'
    }
    
    function genHandler (
      name,
      handler
    ) {
      if (!handler) {
        return 'function(){}'
      }
    
      if (Array.isArray(handler)) {
        return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
      }
    
      var isMethodPath = simplePathRE.test(handler.value);
      var isFunctionExpression = fnExpRE.test(handler.value);
    
      if (!handler.modifiers) {
        return isMethodPath || isFunctionExpression
          ? handler.value
          : ("function($event){" + (handler.value) + "}") // inline statement
      } else {
        var code = '';
        var genModifierCode = '';
        var keys = [];
        for (var key in handler.modifiers) {
          if (modifierCode[key]) {
            genModifierCode += modifierCode[key];
            // left/right
            if (keyCodes[key]) {
              keys.push(key);
            }
          } else if (key === 'exact') {
            var modifiers = (handler.modifiers);
            genModifierCode += genGuard(
              ['ctrl', 'shift', 'alt', 'meta']
                .filter(function (keyModifier) { return !modifiers[keyModifier]; })
                .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
                .join('||')
            );
          } else {
            keys.push(key);
          }
        }
        if (keys.length) {
          code += genKeyFilter(keys);
        }
        // Make sure modifiers like prevent and stop get executed after key filtering
        if (genModifierCode) {
          code += genModifierCode;
        }
        var handlerCode = isMethodPath
          ? handler.value + '($event)'
          : isFunctionExpression
            ? ("(" + (handler.value) + ")($event)")
            : handler.value;
        return ("function($event){" + code + handlerCode + "}")
      }
    }
    
    function genKeyFilter (keys) {
      return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
    }
    
    function genFilterCode (key) {
      var keyVal = parseInt(key, 10);
      if (keyVal) {
        return ("$event.keyCode!==" + keyVal)
      }
      var code = keyCodes[key];
      return (
        "_k($event.keyCode," +
        (JSON.stringify(key)) + "," +
        (JSON.stringify(code)) + "," +
        "$event.key)"
      )
    }
    
    /*  */
    
    function on (el, dir) {
      if ("development" !== 'production' && dir.modifiers) {
        warn("v-on without argument does not support modifiers.");
      }
      el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
    }
    
    /*  */
    
    function bind$1 (el, dir) {
      el.wrapData = function (code) {
        return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
      };
    }
    
    /*  */
    
    var baseDirectives = {
      on: on,
      bind: bind$1,
      cloak: noop
    };
    
    /*  */
    
    var CodegenState = function CodegenState (options) {
      this.options = options;
      this.warn = options.warn || baseWarn;
      this.transforms = pluckModuleFunction(options.modules, 'transformCode');
      this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
      this.directives = extend(extend({}, baseDirectives), options.directives);
      var isReservedTag = options.isReservedTag || no;
      this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
      this.onceId = 0;
      this.staticRenderFns = [];
    };
    
    
    
    function generate (
      ast,
      options
    ) {
      var state = new CodegenState(options);
      var code = ast ? genElement(ast, state) : '_c("div")';
      return {
        render: ("with(this){return " + code + "}"),
        staticRenderFns: state.staticRenderFns
      }
    }
    
    function genElement (el, state) {
      if (el.staticRoot && !el.staticProcessed) {
        return genStatic(el, state)
      } else if (el.once && !el.onceProcessed) {
        return genOnce(el, state)
      } else if (el.for && !el.forProcessed) {
        return genFor(el, state)
      } else if (el.if && !el.ifProcessed) {
        return genIf(el, state)
      } else if (el.tag === 'template' && !el.slotTarget) {
        return genChildren(el, state) || 'void 0'
      } else if (el.tag === 'slot') {
        return genSlot(el, state)
      } else {
        // component or element
        var code;
        if (el.component) {
          code = genComponent(el.component, el, state);
        } else {
          var data = el.plain ? undefined : genData$2(el, state);
    
          var children = el.inlineTemplate ? null : genChildren(el, state, true);
          code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
        }
        // module transforms
        for (var i = 0; i < state.transforms.length; i++) {
          code = state.transforms[i](el, code);
        }
        return code
      }
    }
    
    // hoist static sub-trees out
    function genStatic (el, state) {
      el.staticProcessed = true;
      state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
      return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
    }
    
    // v-once
    function genOnce (el, state) {
      el.onceProcessed = true;
      if (el.if && !el.ifProcessed) {
        return genIf(el, state)
      } else if (el.staticInFor) {
        var key = '';
        var parent = el.parent;
        while (parent) {
          if (parent.for) {
            key = parent.key;
            break
          }
          parent = parent.parent;
        }
        if (!key) {
          "development" !== 'production' && state.warn(
            "v-once can only be used inside v-for that is keyed. "
          );
          return genElement(el, state)
        }
        return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
      } else {
        return genStatic(el, state)
      }
    }
    
    function genIf (
      el,
      state,
      altGen,
      altEmpty
    ) {
      el.ifProcessed = true; // avoid recursion
      return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
    }
    
    function genIfConditions (
      conditions,
      state,
      altGen,
      altEmpty
    ) {
      if (!conditions.length) {
        return altEmpty || '_e()'
      }
    
      var condition = conditions.shift();
      if (condition.exp) {
        return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
      } else {
        return ("" + (genTernaryExp(condition.block)))
      }
    
      // v-if with v-once should generate code like (a)?_m(0):_m(1)
      function genTernaryExp (el) {
        return altGen
          ? altGen(el, state)
          : el.once
            ? genOnce(el, state)
            : genElement(el, state)
      }
    }
    
    function genFor (
      el,
      state,
      altGen,
      altHelper
    ) {
      var exp = el.for;
      var alias = el.alias;
      var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
      var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
    
      if ("development" !== 'production' &&
        state.maybeComponent(el) &&
        el.tag !== 'slot' &&
        el.tag !== 'template' &&
        !el.key
      ) {
        state.warn(
          "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
          "v-for should have explicit keys. " +
          "See https://vuejs.org/guide/list.html#key for more info.",
          true /* tip */
        );
      }
    
      el.forProcessed = true; // avoid recursion
      return (altHelper || '_l') + "((" + exp + ")," +
        "function(" + alias + iterator1 + iterator2 + "){" +
          "return " + ((altGen || genElement)(el, state)) +
        '})'
    }
    
    function genData$2 (el, state) {
      var data = '{';
    
      // directives first.
      // directives may mutate the el's other properties before they are generated.
      var dirs = genDirectives(el, state);
      if (dirs) { data += dirs + ','; }
    
      // key
      if (el.key) {
        data += "key:" + (el.key) + ",";
      }
      // ref
      if (el.ref) {
        data += "ref:" + (el.ref) + ",";
      }
      if (el.refInFor) {
        data += "refInFor:true,";
      }
      // pre
      if (el.pre) {
        data += "pre:true,";
      }
      // record original tag name for components using "is" attribute
      if (el.component) {
        data += "tag:\"" + (el.tag) + "\",";
      }
      // module data generation functions
      for (var i = 0; i < state.dataGenFns.length; i++) {
        data += state.dataGenFns[i](el);
      }
      // attributes
      if (el.attrs) {
        data += "attrs:{" + (genProps(el.attrs)) + "},";
      }
      // DOM props
      if (el.props) {
        data += "domProps:{" + (genProps(el.props)) + "},";
      }
      // event handlers
      if (el.events) {
        data += (genHandlers(el.events, false, state.warn)) + ",";
      }
      if (el.nativeEvents) {
        data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
      }
      // slot target
      // only for non-scoped slots
      if (el.slotTarget && !el.slotScope) {
        data += "slot:" + (el.slotTarget) + ",";
      }
      // scoped slots
      if (el.scopedSlots) {
        data += (genScopedSlots(el.scopedSlots, state)) + ",";
      }
      // component v-model
      if (el.model) {
        data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
      }
      // inline-template
      if (el.inlineTemplate) {
        var inlineTemplate = genInlineTemplate(el, state);
        if (inlineTemplate) {
          data += inlineTemplate + ",";
        }
      }
      data = data.replace(/,$/, '') + '}';
      // v-bind data wrap
      if (el.wrapData) {
        data = el.wrapData(data);
      }
      // v-on data wrap
      if (el.wrapListeners) {
        data = el.wrapListeners(data);
      }
      return data
    }
    
    function genDirectives (el, state) {
      var dirs = el.directives;
      if (!dirs) { return }
      var res = 'directives:[';
      var hasRuntime = false;
      var i, l, dir, needRuntime;
      for (i = 0, l = dirs.length; i < l; i++) {
        dir = dirs[i];
        needRuntime = true;
        var gen = state.directives[dir.name];
        if (gen) {
          // compile-time directive that manipulates AST.
          // returns true if it also needs a runtime counterpart.
          needRuntime = !!gen(el, dir, state.warn);
        }
        if (needRuntime) {
          hasRuntime = true;
          res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
        }
      }
      if (hasRuntime) {
        return res.slice(0, -1) + ']'
      }
    }
    
    function genInlineTemplate (el, state) {
      var ast = el.children[0];
      if ("development" !== 'production' && (
        el.children.length !== 1 || ast.type !== 1
      )) {
        state.warn('Inline-template components must have exactly one child element.');
      }
      if (ast.type === 1) {
        var inlineRenderFns = generate(ast, state.options);
        return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
      }
    }
    
    function genScopedSlots (
      slots,
      state
    ) {
      return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
          return genScopedSlot(key, slots[key], state)
        }).join(',')) + "])")
    }
    
    function genScopedSlot (
      key,
      el,
      state
    ) {
      if (el.for && !el.forProcessed) {
        return genForScopedSlot(key, el, state)
      }
      var fn = "function(" + (String(el.slotScope)) + "){" +
        "return " + (el.tag === 'template'
          ? el.if
            ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
            : genChildren(el, state) || 'undefined'
          : genElement(el, state)) + "}";
      return ("{key:" + key + ",fn:" + fn + "}")
    }
    
    function genForScopedSlot (
      key,
      el,
      state
    ) {
      var exp = el.for;
      var alias = el.alias;
      var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
      var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
      el.forProcessed = true; // avoid recursion
      return "_l((" + exp + ")," +
        "function(" + alias + iterator1 + iterator2 + "){" +
          "return " + (genScopedSlot(key, el, state)) +
        '})'
    }
    
    function genChildren (
      el,
      state,
      checkSkip,
      altGenElement,
      altGenNode
    ) {
      var children = el.children;
      if (children.length) {
        var el$1 = children[0];
        // optimize single v-for
        if (children.length === 1 &&
          el$1.for &&
          el$1.tag !== 'template' &&
          el$1.tag !== 'slot'
        ) {
          return (altGenElement || genElement)(el$1, state)
        }
        var normalizationType = checkSkip
          ? getNormalizationType(children, state.maybeComponent)
          : 0;
        var gen = altGenNode || genNode;
        return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
      }
    }
    
    // determine the normalization needed for the children array.
    // 0: no normalization needed
    // 1: simple normalization needed (possible 1-level deep nested array)
    // 2: full normalization needed
    function getNormalizationType (
      children,
      maybeComponent
    ) {
      var res = 0;
      for (var i = 0; i < children.length; i++) {
        var el = children[i];
        if (el.type !== 1) {
          continue
        }
        if (needsNormalization(el) ||
            (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
          res = 2;
          break
        }
        if (maybeComponent(el) ||
            (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
          res = 1;
        }
      }
      return res
    }
    
    function needsNormalization (el) {
      return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
    }
    
    function genNode (node, state) {
      if (node.type === 1) {
        return genElement(node, state)
      } if (node.type === 3 && node.isComment) {
        return genComment(node)
      } else {
        return genText(node)
      }
    }
    
    function genText (text) {
      return ("_v(" + (text.type === 2
        ? text.expression // no need for () because already wrapped in _s()
        : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
    }
    
    function genComment (comment) {
      return ("_e(" + (JSON.stringify(comment.text)) + ")")
    }
    
    function genSlot (el, state) {
      var slotName = el.slotName || '"default"';
      var children = genChildren(el, state);
      var res = "_t(" + slotName + (children ? ("," + children) : '');
      var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
      var bind$$1 = el.attrsMap['v-bind'];
      if ((attrs || bind$$1) && !children) {
        res += ",null";
      }
      if (attrs) {
        res += "," + attrs;
      }
      if (bind$$1) {
        res += (attrs ? '' : ',null') + "," + bind$$1;
      }
      return res + ')'
    }
    
    // componentName is el.component, take it as argument to shun flow's pessimistic refinement
    function genComponent (
      componentName,
      el,
      state
    ) {
      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
    }
    
    function genProps (props) {
      var res = '';
      for (var i = 0; i < props.length; i++) {
        var prop = props[i];
        res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
      }
      return res.slice(0, -1)
    }
    
    // #3895, #4268
    function transformSpecialNewlines (text) {
      return text
        .replace(/\u2028/g, '\\u2028')
        .replace(/\u2029/g, '\\u2029')
    }
    
    /*  */
    
    // these keywords should not appear inside expressions, but operators like
    // typeof, instanceof and in are allowed
    var prohibitedKeywordRE = new RegExp('\\b' + (
      'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
      'super,throw,while,yield,delete,export,import,return,switch,default,' +
      'extends,finally,continue,debugger,function,arguments'
    ).split(',').join('\\b|\\b') + '\\b');
    
    // these unary operators should not be used as property/method names
    var unaryOperatorsRE = new RegExp('\\b' + (
      'delete,typeof,void'
    ).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');
    
    // strip strings in expressions
    var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
    
    // detect problematic expressions in a template
    function detectErrors (ast) {
      var errors = [];
      if (ast) {
        checkNode(ast, errors);
      }
      return errors
    }
    
    function checkNode (node, errors) {
      if (node.type === 1) {
        for (var name in node.attrsMap) {
          if (dirRE.test(name)) {
            var value = node.attrsMap[name];
            if (value) {
              if (name === 'v-for') {
                checkFor(node, ("v-for=\"" + value + "\""), errors);
              } else if (onRE.test(name)) {
                checkEvent(value, (name + "=\"" + value + "\""), errors);
              } else {
                checkExpression(value, (name + "=\"" + value + "\""), errors);
              }
            }
          }
        }
        if (node.children) {
          for (var i = 0; i < node.children.length; i++) {
            checkNode(node.children[i], errors);
          }
        }
      } else if (node.type === 2) {
        checkExpression(node.expression, node.text, errors);
      }
    }
    
    function checkEvent (exp, text, errors) {
      var stipped = exp.replace(stripStringRE, '');
      var keywordMatch = stipped.match(unaryOperatorsRE);
      if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
        errors.push(
          "avoid using JavaScript unary operator as property name: " +
          "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
        );
      }
      checkExpression(exp, text, errors);
    }
    
    function checkFor (node, text, errors) {
      checkExpression(node.for || '', text, errors);
      checkIdentifier(node.alias, 'v-for alias', text, errors);
      checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
      checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
    }
    
    function checkIdentifier (
      ident,
      type,
      text,
      errors
    ) {
      if (typeof ident === 'string') {
        try {
          new Function(("var " + ident + "=_"));
        } catch (e) {
          errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
        }
      }
    }
    
    function checkExpression (exp, text, errors) {
      try {
        new Function(("return " + exp));
      } catch (e) {
        var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
        if (keywordMatch) {
          errors.push(
            "avoid using JavaScript keyword as property name: " +
            "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
          );
        } else {
          errors.push(
            "invalid expression: " + (e.message) + " in\n\n" +
            "    " + exp + "\n\n" +
            "  Raw expression: " + (text.trim()) + "\n"
          );
        }
      }
    }
    
    /*  */
    
    function createFunction (code, errors) {
      try {
        return new Function(code)
      } catch (err) {
        errors.push({ err: err, code: code });
        return noop
      }
    }
    
    function createCompileToFunctionFn (compile) {
      var cache = Object.create(null);
    
      return function compileToFunctions (
        template,
        options,
        vm
      ) {
        options = extend({}, options);
        var warn$$1 = options.warn || warn;
        delete options.warn;
    
        /* istanbul ignore if */
        if (true) {
          // detect possible CSP restriction
          try {
            new Function('return 1');
          } catch (e) {
            if (e.toString().match(/unsafe-eval|CSP/)) {
              warn$$1(
                'It seems you are using the standalone build of Vue.js in an ' +
                'environment with Content Security Policy that prohibits unsafe-eval. ' +
                'The template compiler cannot work in this environment. Consider ' +
                'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
                'templates into render functions.'
              );
            }
          }
        }
    
        // check cache
        var key = options.delimiters
          ? String(options.delimiters) + template
          : template;
        if (cache[key]) {
          return cache[key]
        }
    
        // compile
        var compiled = compile(template, options);
    
        // check compilation errors/tips
        if (true) {
          if (compiled.errors && compiled.errors.length) {
            warn$$1(
              "Error compiling template:\n\n" + template + "\n\n" +
              compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
              vm
            );
          }
          if (compiled.tips && compiled.tips.length) {
            compiled.tips.forEach(function (msg) { return tip(msg, vm); });
          }
        }
    
        // turn code into functions
        var res = {};
        var fnGenErrors = [];
        res.render = createFunction(compiled.render, fnGenErrors);
        res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
          return createFunction(code, fnGenErrors)
        });
    
        // check function generation errors.
        // this should only happen if there is a bug in the compiler itself.
        // mostly for codegen development use
        /* istanbul ignore if */
        if (true) {
          if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
            warn$$1(
              "Failed to generate render function:\n\n" +
              fnGenErrors.map(function (ref) {
                var err = ref.err;
                var code = ref.code;
    
                return ((err.toString()) + " in\n\n" + code + "\n");
            }).join('\n'),
              vm
            );
          }
        }
    
        return (cache[key] = res)
      }
    }
    
    /*  */
    
    function createCompilerCreator (baseCompile) {
      return function createCompiler (baseOptions) {
        function compile (
          template,
          options
        ) {
          var finalOptions = Object.create(baseOptions);
          var errors = [];
          var tips = [];
          finalOptions.warn = function (msg, tip) {
            (tip ? tips : errors).push(msg);
          };
    
          if (options) {
            // merge custom modules
            if (options.modules) {
              finalOptions.modules =
                (baseOptions.modules || []).concat(options.modules);
            }
            // merge custom directives
            if (options.directives) {
              finalOptions.directives = extend(
                Object.create(baseOptions.directives || null),
                options.directives
              );
            }
            // copy other options
            for (var key in options) {
              if (key !== 'modules' && key !== 'directives') {
                finalOptions[key] = options[key];
              }
            }
          }
    
          var compiled = baseCompile(template, finalOptions);
          if (true) {
            errors.push.apply(errors, detectErrors(compiled.ast));
          }
          compiled.errors = errors;
          compiled.tips = tips;
          return compiled
        }
    
        return {
          compile: compile,
          compileToFunctions: createCompileToFunctionFn(compile)
        }
      }
    }
    
    /*  */
    
    // `createCompilerCreator` allows creating compilers that use alternative
    // parser/optimizer/codegen, e.g the SSR optimizing compiler.
    // Here we just export a default compiler using the default parts.
    var createCompiler = createCompilerCreator(function baseCompile (
      template,
      options
    ) {
      var ast = parse(template.trim(), options);
      optimize(ast, options);
      var code = generate(ast, options);
      return {
        ast: ast,
        render: code.render,
        staticRenderFns: code.staticRenderFns
      }
    });
    
    /*  */
    
    var ref$1 = createCompiler(baseOptions);
    var compileToFunctions = ref$1.compileToFunctions;
    
    /*  */
    
    // check whether current browser encodes a char inside attribute values
    var div;
    function getShouldDecode (href) {
      div = div || document.createElement('div');
      div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
      return div.innerHTML.indexOf('&#10;') > 0
    }
    
    // #3663: IE encodes newlines inside attribute values while other browsers don't
    var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
    // #6828: chrome encodes content in a[href]
    var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;
    
    /*  */
    
    var idToTemplate = cached(function (id) {
      var el = query(id);
      return el && el.innerHTML
    });
    
    var mount = Vue$3.prototype.$mount;
    Vue$3.prototype.$mount = function (
      el,
      hydrating
    ) {
      el = el && query(el);
    
      /* istanbul ignore if */
      if (el === document.body || el === document.documentElement) {
        "development" !== 'production' && warn(
          "Do not mount Vue to <html> or <body> - mount to normal elements instead."
        );
        return this
      }
    
      var options = this.$options;
      // resolve template/el and convert to render function
      if (!options.render) {
        var template = options.template;
        if (template) {
          if (typeof template === 'string') {
            if (template.charAt(0) === '#') {
              template = idToTemplate(template);
              /* istanbul ignore if */
              if ("development" !== 'production' && !template) {
                warn(
                  ("Template element not found or is empty: " + (options.template)),
                  this
                );
              }
            }
          } else if (template.nodeType) {
            template = template.innerHTML;
          } else {
            if (true) {
              warn('invalid template option:' + template, this);
            }
            return this
          }
        } else if (el) {
          template = getOuterHTML(el);
        }
        if (template) {
          /* istanbul ignore if */
          if ("development" !== 'production' && config.performance && mark) {
            mark('compile');
          }
    
          var ref = compileToFunctions(template, {
            shouldDecodeNewlines: shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
            delimiters: options.delimiters,
            comments: options.comments
          }, this);
          var render = ref.render;
          var staticRenderFns = ref.staticRenderFns;
          options.render = render;
          options.staticRenderFns = staticRenderFns;
    
          /* istanbul ignore if */
          if ("development" !== 'production' && config.performance && mark) {
            mark('compile end');
            measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
          }
        }
      }
      return mount.call(this, el, hydrating)
    };
    
    /**
     * Get outerHTML of elements, taking care
     * of SVG elements in IE as well.
     */
    function getOuterHTML (el) {
      if (el.outerHTML) {
        return el.outerHTML
      } else {
        var container = document.createElement('div');
        container.appendChild(el.cloneNode(true));
        return container.innerHTML
      }
    }
    
    Vue$3.compile = compileToFunctions;
    
    module.exports = Vue$3;
    
    /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(2).setImmediate))
    
    /***/ }),
    /* 33 */
    /***/ (function(module, exports) {
    
    /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    module.exports = function(useSourceMap) {
        var list = [];
    
        // return the list of modules as css string
        list.toString = function toString() {
            return this.map(function (item) {
                var content = cssWithMappingToString(item, useSourceMap);
                if(item[2]) {
                    return "@media " + item[2] + "{" + content + "}";
                } else {
                    return content;
                }
            }).join("");
        };
    
        // import a list of modules into the list
        list.i = function(modules, mediaQuery) {
            if(typeof modules === "string")
                modules = [[null, modules, ""]];
            var alreadyImportedModules = {};
            for(var i = 0; i < this.length; i++) {
                var id = this[i][0];
                if(typeof id === "number")
                    alreadyImportedModules[id] = true;
            }
            for(i = 0; i < modules.length; i++) {
                var item = modules[i];
                // skip already imported module
                // this implementation is not 100% perfect for weird media query combinations
                //  when a module is imported multiple times with different media queries.
                //  I hope this will never occur (Hey this way we have smaller bundles)
                if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                    if(mediaQuery && !item[2]) {
                        item[2] = mediaQuery;
                    } else if(mediaQuery) {
                        item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                    }
                    list.push(item);
                }
            }
        };
        return list;
    };
    
    function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || '';
        var cssMapping = item[3];
        if (!cssMapping) {
            return content;
        }
    
        if (useSourceMap && typeof btoa === 'function') {
            var sourceMapping = toComment(cssMapping);
            var sourceURLs = cssMapping.sources.map(function (source) {
                return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
            });
    
            return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
        }
    
        return [content].join('\n');
    }
    
    // Adapted from convert-source-map (MIT)
    function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
        var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
    
        return '/*# ' + data + ' */';
    }
    
    
    /***/ }),
    /* 34 */
    /***/ (function(module, exports, __webpack_require__) {
    
    /*
      MIT License http://www.opensource.org/licenses/mit-license.php
      Author Tobias Koppers @sokra
      Modified by Evan You @yyx990803
    */
    
    var hasDocument = typeof document !== 'undefined'
    
    if (typeof DEBUG !== 'undefined' && DEBUG) {
      if (!hasDocument) {
        throw new Error(
        'vue-style-loader cannot be used in a non-browser environment. ' +
        "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
      ) }
    }
    
    var listToStyles = __webpack_require__(35)
    
    /*
    type StyleObject = {
      id: number;
      parts: Array<StyleObjectPart>
    }
    
    type StyleObjectPart = {
      css: string;
      media: string;
      sourceMap: ?string
    }
    */
    
    var stylesInDom = {/*
      [id: number]: {
        id: number,
        refs: number,
        parts: Array<(obj?: StyleObjectPart) => void>
      }
    */}
    
    var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
    var singletonElement = null
    var singletonCounter = 0
    var isProduction = false
    var noop = function () {}
    
    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page
    var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())
    
    module.exports = function (parentId, list, _isProduction) {
      isProduction = _isProduction
    
      var styles = listToStyles(parentId, list)
      addStylesToDom(styles)
    
      return function update (newList) {
        var mayRemove = []
        for (var i = 0; i < styles.length; i++) {
          var item = styles[i]
          var domStyle = stylesInDom[item.id]
          domStyle.refs--
          mayRemove.push(domStyle)
        }
        if (newList) {
          styles = listToStyles(parentId, newList)
          addStylesToDom(styles)
        } else {
          styles = []
        }
        for (var i = 0; i < mayRemove.length; i++) {
          var domStyle = mayRemove[i]
          if (domStyle.refs === 0) {
            for (var j = 0; j < domStyle.parts.length; j++) {
              domStyle.parts[j]()
            }
            delete stylesInDom[domStyle.id]
          }
        }
      }
    }
    
    function addStylesToDom (styles /* Array<StyleObject> */) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i]
        var domStyle = stylesInDom[item.id]
        if (domStyle) {
          domStyle.refs++
          for (var j = 0; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j])
          }
          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j]))
          }
          if (domStyle.parts.length > item.parts.length) {
            domStyle.parts.length = item.parts.length
          }
        } else {
          var parts = []
          for (var j = 0; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j]))
          }
          stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
        }
      }
    }
    
    function createStyleElement () {
      var styleElement = document.createElement('style')
      styleElement.type = 'text/css'
      head.appendChild(styleElement)
      return styleElement
    }
    
    function addStyle (obj /* StyleObjectPart */) {
      var update, remove
      var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
    
      if (styleElement) {
        if (isProduction) {
          // has SSR styles and in production mode.
          // simply do nothing.
          return noop
        } else {
          // has SSR styles but in dev mode.
          // for some reason Chrome can't handle source map in server-rendered
          // style tags - source maps in <style> only works if the style tag is
          // created and inserted dynamically. So we remove the server rendered
          // styles and inject new ones.
          styleElement.parentNode.removeChild(styleElement)
        }
      }
    
      if (isOldIE) {
        // use singleton mode for IE9.
        var styleIndex = singletonCounter++
        styleElement = singletonElement || (singletonElement = createStyleElement())
        update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
        remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
      } else {
        // use multi-style-tag mode in all other cases
        styleElement = createStyleElement()
        update = applyToTag.bind(null, styleElement)
        remove = function () {
          styleElement.parentNode.removeChild(styleElement)
        }
      }
    
      update(obj)
    
      return function updateStyle (newObj /* StyleObjectPart */) {
        if (newObj) {
          if (newObj.css === obj.css &&
              newObj.media === obj.media &&
              newObj.sourceMap === obj.sourceMap) {
            return
          }
          update(obj = newObj)
        } else {
          remove()
        }
      }
    }
    
    var replaceText = (function () {
      var textStore = []
    
      return function (index, replacement) {
        textStore[index] = replacement
        return textStore.filter(Boolean).join('\n')
      }
    })()
    
    function applyToSingletonTag (styleElement, index, remove, obj) {
      var css = remove ? '' : obj.css
    
      if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = replaceText(index, css)
      } else {
        var cssNode = document.createTextNode(css)
        var childNodes = styleElement.childNodes
        if (childNodes[index]) styleElement.removeChild(childNodes[index])
        if (childNodes.length) {
          styleElement.insertBefore(cssNode, childNodes[index])
        } else {
          styleElement.appendChild(cssNode)
        }
      }
    }
    
    function applyToTag (styleElement, obj) {
      var css = obj.css
      var media = obj.media
      var sourceMap = obj.sourceMap
    
      if (media) {
        styleElement.setAttribute('media', media)
      }
    
      if (sourceMap) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
        // http://stackoverflow.com/a/26603875
        css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
      }
    
      if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = css
      } else {
        while (styleElement.firstChild) {
          styleElement.removeChild(styleElement.firstChild)
        }
        styleElement.appendChild(document.createTextNode(css))
      }
    }
    
    
    /***/ }),
    /* 35 */
    /***/ (function(module, exports) {
    
    /**
     * Translates the list format produced by css-loader into something
     * easier to manipulate.
     */
    module.exports = function listToStyles (parentId, list) {
      var styles = []
      var newStyles = {}
      for (var i = 0; i < list.length; i++) {
        var item = list[i]
        var id = item[0]
        var css = item[1]
        var media = item[2]
        var sourceMap = item[3]
        var part = {
          id: parentId + ':' + i,
          css: css,
          media: media,
          sourceMap: sourceMap
        }
        if (!newStyles[id]) {
          styles.push(newStyles[id] = { id: id, parts: [part] })
        } else {
          newStyles[id].parts.push(part)
        }
      }
      return styles
    }
    
    
    /***/ }),
    /* 36 */
    /***/ (function(module, exports, __webpack_require__) {
    
    var disposed = false
    var normalizeComponent = __webpack_require__(1)
    /* script */
    var __vue_script__ = __webpack_require__(51)
    /* template */
    var __vue_template__ = __webpack_require__(54)
    /* template functional */
    var __vue_template_functional__ = false
    /* styles */
    var __vue_styles__ = null
    /* scopeId */
    var __vue_scopeId__ = null
    /* moduleIdentifier (server only) */
    var __vue_module_identifier__ = null
    var Component = normalizeComponent(
      __vue_script__,
      __vue_template__,
      __vue_template_functional__,
      __vue_styles__,
      __vue_scopeId__,
      __vue_module_identifier__
    )
    Component.options.__file = "resources/assets/website/js/components/Map/GoogleMapComponent.vue"
    
    /* hot reload */
    if (false) {(function () {
      var hotAPI = require("vue-hot-reload-api")
      hotAPI.install(require("vue"), false)
      if (!hotAPI.compatible) return
      module.hot.accept()
      if (!module.hot.data) {
        hotAPI.createRecord("data-v-e0843a10", Component.options)
      } else {
        hotAPI.reload("data-v-e0843a10", Component.options)
      }
      module.hot.dispose(function (data) {
        disposed = true
      })
    })()}
    
    module.exports = Component.exports
    
    
    /***/ }),
    /* 37 */,
    /* 38 */,
    /* 39 */,
    /* 40 */,
    /* 41 */,
    /* 42 */,
    /* 43 */,
    /* 44 */,
    /* 45 */,
    /* 46 */,
    /* 47 */,
    /* 48 */
    /***/ (function(module, exports, __webpack_require__) {
    
    module.exports = __webpack_require__(49);
    
    
    /***/ }),
    /* 49 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuejs_datepicker__ = __webpack_require__(70);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuejs_datepicker_dist_locale__ = __webpack_require__(71);
    /**
     * First we will load all of this project's JavaScript dependencies which
     * includes Vue and other libraries. It is a great starting point when
     * building robust, powerful web applications using Vue and Laravel.
     */
    
    window.Vue = __webpack_require__(32);
    
    window.axios = __webpack_require__(11);
    
    window.swal = __webpack_require__(12);
    
    window.swal2 = __webpack_require__(50);
    
    /**
     * Next, we will create a fresh Vue application instance and attach it to
     * the page. Then, you may begin adding components to this application
     * or customize the JavaScript scaffolding to fit your unique needs.
     */
    
    Vue.component('google-maps', __webpack_require__(36));
    Vue.component('franchise-maps', __webpack_require__(55));
    Vue.component('posts-list', __webpack_require__(65));
    
    
    Vue.component('datepicker', __WEBPACK_IMPORTED_MODULE_0_vuejs_datepicker__["a" /* default */]);
    
    
    
    var app = new Vue({
        el: '#app',
        data: {
            datepickerlocale: __WEBPACK_IMPORTED_MODULE_1_vuejs_datepicker_dist_locale__["a" /* ptBR */]
        },
    
        methods: {
            submitForm: function submitForm(formId) {
                this.$nextTick(function () {
                    $(formId).submit();
                });
            }
        }
    });
    
    /***/ }),
    /* 50 */
    /***/ (function(module, exports, __webpack_require__) {
    
    /*!
    * sweetalert2 v7.19.1
    * Released under the MIT License.
    */
    (function(e,t){ true?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Sweetalert2=t()})(this,function(){'use strict';function e(e){var t=function e(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return this instanceof e?void Object.getPrototypeOf(e).apply(this,n):new(Function.prototype.bind.apply(e,[null].concat(n)))};return t.prototype=l(Object.create(e.prototype),{constructor:t}),Object.setPrototypeOf(t,e),t}function t(){var e=Ee.innerParams.get(this),t=Ee.domCache.get(this);e.showConfirmButton||(q(t.confirmButton),!e.showCancelButton&&q(t.actions)),T([t.popup,t.actions],B.loading),t.popup.removeAttribute('aria-busy'),t.popup.removeAttribute('data-loading'),t.confirmButton.disabled=!1,t.cancelButton.disabled=!1}function n(e){e.inputValidator||Object.keys(Se).forEach(function(t){e.input===t&&(e.inputValidator=e.expectRejections?Se[t]:Oe.adaptInputValidator(Se[t]))}),e.target&&('string'!=typeof e.target||document.querySelector(e.target))&&('string'==typeof e.target||e.target.appendChild)||(h('Target parameter is not valid, defaulting to "body"'),e.target='body');var t,n=M(),o='string'==typeof e.target?document.querySelector(e.target):e.target;t=n&&o&&n.parentNode!==o.parentNode?ie(e):n||ie(e),e.width&&(t.style.width='number'==typeof e.width?e.width+'px':e.width),e.padding&&(t.style.padding='number'==typeof e.padding?e.padding+'px':e.padding),e.background&&(t.style.background=e.background);for(var a=window.getComputedStyle(t).getPropertyValue('background-color'),r=t.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix'),s=0;s<r.length;s++)r[s].style.backgroundColor=a;var i=N(),l=U(),d=K().querySelector('#'+B.content),u=X(),c=F(),p=J(),m=Z(),g=G();if(e.titleText?l.innerText=e.titleText:e.title&&(l.innerHTML=e.title.split('\n').join('<br />')),'string'==typeof e.backdrop?N().style.background=e.backdrop:!e.backdrop&&O([document.documentElement,document.body],B['no-backdrop']),e.html?ae(e.html,d):e.text?(d.textContent=e.text,V(d)):q(d),e.position in B?O(i,B[e.position]):(h('The "position" parameter is not valid, defaulting to "center"'),O(i,B.center)),e.grow&&'string'==typeof e.grow){var f='grow-'+e.grow;f in B&&O(i,B[f])}'function'==typeof e.animation&&(e.animation=e.animation.call()),e.showCloseButton?(m.setAttribute('aria-label',e.closeButtonAriaLabel),V(m)):q(m),t.className=B.popup,e.toast?(O([document.documentElement,document.body],B['toast-shown']),O(t,B.toast)):O(t,B.modal),e.customClass&&O(t,e.customClass);var y=Q(),v=parseInt(null===e.currentProgressStep?Oe.getQueueStep():e.currentProgressStep,10);e.progressSteps&&e.progressSteps.length?(V(y),j(y),v>=e.progressSteps.length&&h('Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)'),e.progressSteps.forEach(function(t,n){var o=document.createElement('li');if(O(o,B.progresscircle),o.innerHTML=t,n===v&&O(o,B.activeprogressstep),y.appendChild(o),n!==e.progressSteps.length-1){var i=document.createElement('li');O(i,B.progressline),e.progressStepsDistance&&(i.style.width=e.progressStepsDistance),y.appendChild(i)}})):q(y);for(var w=W(),C=0;C<w.length;C++)q(w[C]);if(e.type){var x=!1;for(var k in A)if(e.type===k){x=!0;break}if(!x)return b('Unknown alert type: '+e.type),!1;var E=t.querySelector('.'+B.icon+'.'+A[e.type]);V(E),e.animation&&O(E,'swal2-animate-'+e.type+'-icon')}var S=z();if(e.imageUrl?(S.setAttribute('src',e.imageUrl),S.setAttribute('alt',e.imageAlt),V(S),e.imageWidth?S.setAttribute('width',e.imageWidth):S.removeAttribute('width'),e.imageHeight?S.setAttribute('height',e.imageHeight):S.removeAttribute('height'),S.className=B.image,e.imageClass&&O(S,e.imageClass)):q(S),e.showCancelButton?p.style.display='inline-block':q(p),e.showConfirmButton?R(c,'display'):q(c),e.showConfirmButton||e.showCancelButton?V(u):q(u),c.innerHTML=e.confirmButtonText,p.innerHTML=e.cancelButtonText,c.setAttribute('aria-label',e.confirmButtonAriaLabel),p.setAttribute('aria-label',e.cancelButtonAriaLabel),c.className=B.confirm,O(c,e.confirmButtonClass),p.className=B.cancel,O(p,e.cancelButtonClass),e.buttonsStyling){O([c,p],B.styled),e.confirmButtonColor&&(c.style.backgroundColor=e.confirmButtonColor),e.cancelButtonColor&&(p.style.backgroundColor=e.cancelButtonColor);var P=window.getComputedStyle(c).getPropertyValue('background-color');c.style.borderLeftColor=P,c.style.borderRightColor=P}else T([c,p],B.styled),c.style.backgroundColor=c.style.borderLeftColor=c.style.borderRightColor='',p.style.backgroundColor=p.style.borderLeftColor=p.style.borderRightColor='';ae(e.footer,g),!0===e.animation?T(t,B.noanimation):O(t,B.noanimation),e.showLoaderOnConfirm&&!e.preConfirm&&h('showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request')}function o(){if('undefined'!=typeof window){'undefined'==typeof Promise&&b('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if('undefined'==typeof t[0])return b('SweetAlert2 expects at least 1 attribute!'),!1;i=this;var o=Object.freeze(this.constructor.argsToParams(t));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0}});var a=this._main(this.params);Ee.promise.set(this,a)}}var i,a='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&'function'==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?'symbol':typeof e},r=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},s=function(){function e(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var o in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},d=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,o)}if('value'in i)return i.value;var r=i.get;return void 0===r?void 0:r.call(o)},u=function(e,t){if('function'!=typeof t&&null!==t)throw new TypeError('Super expression must either be null or a function, not '+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},c=function(e,t){if(!e)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t&&('object'==typeof t||'function'==typeof t)?t:e},p=function(){function e(e,t){var n,o=[],i=!0,a=!1;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(o.push(r.value),!(t&&o.length===t));i=!0);}catch(e){a=!0,n=e}finally{try{!i&&s['return']&&s['return']()}finally{if(a)throw n}}return o}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),m='SweetAlert2:',g=function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t},f=function(e){var t=[];return e instanceof Map?e.forEach(function(e,n){t.push([n,e])}):Object.keys(e).forEach(function(n){t.push([n,e[n]])}),t},h=function(e){console.warn(m+' '+e)},b=function(e){console.error(m+' '+e)},y=[],v=function(e){-1!==y.indexOf(e)||(y.push(e),h(e))},w=function(e){return'function'==typeof e?e():e},C=function(e){return'object'===('undefined'==typeof e?'undefined':a(e))&&'function'==typeof e.then},x=Object.freeze({cancel:'cancel',backdrop:'overlay',close:'close',esc:'esc',timer:'timer'}),k=function(e){var t={};for(var n in e)t[e[n]]='swal2-'+e[n];return t},B=k(['container','shown','iosfix','popup','modal','no-backdrop','toast','toast-shown','fade','show','hide','noanimation','close','title','header','content','actions','confirm','cancel','footer','icon','icon-text','image','input','has-input','file','range','select','radio','checkbox','textarea','inputerror','validationerror','progresssteps','activeprogressstep','progresscircle','progressline','loading','styled','top','top-start','top-end','top-left','top-right','center','center-start','center-end','center-left','center-right','bottom','bottom-start','bottom-end','bottom-left','bottom-right','grow-row','grow-column','grow-fullscreen']),A=k(['success','warning','info','question','error']),E={previousActiveElement:null,previousBodyPadding:null},S=function(e,t){return!!e.classList&&e.classList.contains(t)},P=function(e){if(e.focus(),'file'!==e.type){var t=e.value;e.value='',e.value=t}},L=function(e,t,n){e&&t&&('string'==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(function(t){e.forEach?e.forEach(function(e){n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)}))},O=function(e,t){L(e,t,!0)},T=function(e,t){L(e,t,!1)},_=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(S(e.childNodes[n],t))return e.childNodes[n]},V=function(e){e.style.opacity='',e.style.display=e.id===B.content?'block':'flex'},q=function(e){e.style.opacity='',e.style.display='none'},j=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},D=function(e){return e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},R=function(e,t){e.style.removeProperty?e.style.removeProperty(t):e.style.removeAttribute(t)},I=function(){if(E.previousActiveElement&&E.previousActiveElement.focus){var e=window.scrollX,t=window.scrollY;E.previousActiveElement.focus(),'undefined'!=typeof e&&'undefined'!=typeof t&&window.scrollTo(e,t)}},N=function(){return document.body.querySelector('.'+B.container)},H=function(e){var t=N();return t?t.querySelector('.'+e):null},M=function(){return H(B.popup)},W=function(){var e=M();return e.querySelectorAll('.'+B.icon)},U=function(){return H(B.title)},K=function(){return H(B.content)},z=function(){return H(B.image)},Q=function(){return H(B.progresssteps)},Y=function(){return H(B.validationerror)},F=function(){return H(B.confirm)},J=function(){return H(B.cancel)},X=function(){return H(B.actions)},G=function(){return H(B.footer)},Z=function(){return H(B.close)},$=function(){var e=Array.prototype.slice.call(M().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e,t){return(e=parseInt(e.getAttribute('tabindex')),t=parseInt(t.getAttribute('tabindex')),e>t)?1:e<t?-1:0}),t=Array.prototype.slice.call(M().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]'));return g(e.concat(t))},ee=function(){return!document.body.classList.contains(B['toast-shown'])},te=function(){return document.body.classList.contains(B['toast-shown'])},ne=function(){return'undefined'==typeof window||'undefined'==typeof document},oe=('\n <div aria-labelledby="'+B.title+'" aria-describedby="'+B.content+'" class="'+B.popup+'" tabindex="-1">\n   <div class="'+B.header+'">\n     <ul class="'+B.progresssteps+'"></ul>\n     <div class="'+B.icon+' '+A.error+'">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="'+B.icon+' '+A.question+'">\n       <span class="'+B['icon-text']+'">?</span>\n      </div>\n     <div class="'+B.icon+' '+A.warning+'">\n       <span class="'+B['icon-text']+'">!</span>\n      </div>\n     <div class="'+B.icon+' '+A.info+'">\n       <span class="'+B['icon-text']+'">i</span>\n      </div>\n     <div class="'+B.icon+' '+A.success+'">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="'+B.image+'" />\n     <h2 class="'+B.title+'" id="'+B.title+'"></h2>\n     <button type="button" class="'+B.close+'">\xD7</button>\n   </div>\n   <div class="'+B.content+'">\n     <div id="'+B.content+'"></div>\n     <input class="'+B.input+'" />\n     <input type="file" class="'+B.file+'" />\n     <div class="'+B.range+'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="'+B.select+'"></select>\n     <div class="'+B.radio+'"></div>\n     <label for="'+B.checkbox+'" class="'+B.checkbox+'">\n       <input type="checkbox" />\n     </label>\n     <textarea class="'+B.textarea+'"></textarea>\n     <div class="'+B.validationerror+'" id="'+B.validationerror+'"></div>\n   </div>\n   <div class="'+B.actions+'">\n     <button type="button" class="'+B.confirm+'">OK</button>\n     <button type="button" class="'+B.cancel+'">Cancel</button>\n   </div>\n   <div class="'+B.footer+'">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,''),ie=function(e){var t=N();if(t&&(t.parentNode.removeChild(t),T([document.documentElement,document.body],[B['no-backdrop'],B['has-input'],B['toast-shown']])),ne())return void b('SweetAlert2 requires document to initialize');var n=document.createElement('div');n.className=B.container,n.innerHTML=oe;var o='string'==typeof e.target?document.querySelector(e.target):e.target;o.appendChild(n);var i=M(),a=K(),r=_(a,B.input),s=_(a,B.file),l=a.querySelector('.'+B.range+' input'),d=a.querySelector('.'+B.range+' output'),u=_(a,B.select),c=a.querySelector('.'+B.checkbox+' input'),p=_(a,B.textarea);i.setAttribute('role',e.toast?'alert':'dialog'),i.setAttribute('aria-live',e.toast?'polite':'assertive'),e.toast||i.setAttribute('aria-modal','true');var m=function(){Oe.isVisible()&&Oe.resetValidationError()};return r.oninput=m,s.onchange=m,u.onchange=m,c.onchange=m,p.oninput=m,l.oninput=function(){m(),d.value=l.value},l.onchange=function(){m(),l.nextSibling.value=l.value},i},ae=function(e,t){if(!e)return q(t);if('object'===('undefined'==typeof e?'undefined':a(e))){if(t.innerHTML='',0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0));}else if(e)t.innerHTML=e;else;V(t)},re=function(){if(ne())return!1;var e=document.createElement('div'),t={WebkitAnimation:'webkitAnimationEnd',OAnimation:'oAnimationEnd oanimationend',animation:'animationend'};for(var n in t)if(t.hasOwnProperty(n)&&'undefined'!=typeof e.style[n])return t[n];return!1}(),se=function(){var e='ontouchstart'in window||navigator.msMaxTouchPoints;if(e)return 0;var t=document.createElement('div');t.style.width='50px',t.style.height='50px',t.style.overflow='scroll',document.body.appendChild(t);var n=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),n},le=function(){null!==E.previousBodyPadding||document.body.scrollHeight>window.innerHeight&&(E.previousBodyPadding=document.body.style.paddingRight,document.body.style.paddingRight=se()+'px')},de=function(){null!==E.previousBodyPadding&&(document.body.style.paddingRight=E.previousBodyPadding,E.previousBodyPadding=null)},ue=function(){var e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;if(e&&!S(document.body,B.iosfix)){var t=document.body.scrollTop;document.body.style.top=-1*t+'px',O(document.body,B.iosfix)}},ce=function(){if(S(document.body,B.iosfix)){var e=parseInt(document.body.style.top,10);T(document.body,B.iosfix),document.body.style.top='',document.body.scrollTop=-1*e}},pe={},me=function(e,t){var n=N(),o=M();if(o){null!==e&&'function'==typeof e&&e(o),T(o,B.show),O(o,B.hide),clearTimeout(o.timeout),te()||(I(),window.onkeydown=pe.previousWindowKeyDown,pe.windowOnkeydownOverridden=!1);var i=function(){n.parentNode&&n.parentNode.removeChild(n),T([document.documentElement,document.body],[B.shown,B['no-backdrop'],B['has-input'],B['toast-shown']]),ee()&&(de(),ce()),null!==t&&'function'==typeof t&&setTimeout(function(){t()})};re&&!S(o,B.noanimation)?o.addEventListener(re,function e(){o.removeEventListener(re,e),S(o,B.hide)&&i()}):i()}},ge={title:'',titleText:'',text:'',html:'',footer:'',type:null,toast:!1,customClass:'',target:'body',backdrop:!0,animation:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:'OK',confirmButtonAriaLabel:'',confirmButtonColor:null,confirmButtonClass:null,cancelButtonText:'Cancel',cancelButtonAriaLabel:'',cancelButtonColor:null,cancelButtonClass:null,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:'Close this dialog',showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:'',imageClass:null,timer:null,width:null,padding:null,background:null,input:null,inputPlaceholder:'',inputValue:'',inputOptions:{},inputAutoTrim:!0,inputClass:null,inputAttributes:{},inputValidator:null,grow:!1,position:'center',progressSteps:[],currentProgressStep:null,progressStepsDistance:null,onBeforeOpen:null,onAfterClose:null,onOpen:null,onClose:null,useRejections:!1,expectRejections:!1},fe=['useRejections','expectRejections'],he=function(e){return ge.hasOwnProperty(e)||'extraParams'===e},be=function(e){return-1!==fe.indexOf(e)},ye=function(e){for(var t in e)he(t)||h('Unknown parameter "'+t+'"'),be(t)&&v('The parameter "'+t+'" is deprecated and will be removed in the next major release.')},ve='"setDefaults" & "resetDefaults" methods are deprecated in favor of "mixin" method and will be removed in the next major release. For new projects, use "mixin". For past projects already using "setDefaults", support will be provided through an additional package.',we={},Ce=[],xe=function(e,t){return t&&t<Ce.length?Ce.splice(t,0,e):Ce.push(e)},ke=function(e){'undefined'!=typeof Ce[e]&&Ce.splice(e,1)},Be=function(){var e=M();e||Oe(''),e=M();var t=X(),n=F(),o=J();V(t),V(n),O([e,t],B.loading),n.disabled=!0,o.disabled=!0,e.setAttribute('data-loading',!0),e.setAttribute('aria-busy',!0),e.focus()},Ae=Object.freeze({isValidParameter:he,isDeprecatedParameter:be,argsToParams:function(e){var t={};switch(a(e[0])){case'string':['title','html','type'].forEach(function(n,o){void 0!==e[o]&&(t[n]=e[o])});break;case'object':l(t,e[0]);break;default:return b('Unexpected type of argument! Expected "string" or "object", got '+a(e[0])),!1;}return t},adaptInputValidator:function(e){return function(t,n){return e.call(this,t,n).then(function(){},function(e){return e})}},close:me,closePopup:me,closeModal:me,closeToast:me,isVisible:function(){return!!M()},clickConfirm:function(){return F().click()},clickCancel:function(){return J().click()},getPopup:M,getTitle:U,getContent:K,getImage:z,getButtonsWrapper:function(){return v('swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead'),H(B.actions)},getActions:X,getConfirmButton:F,getCancelButton:J,getFooter:G,isLoading:function(){return M().hasAttribute('data-loading')},mixin:function(t){var n=this;return e(function(e){function n(){return r(this,n),c(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,e),s(n,[{key:'_main',value:function(e){return d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),'_main',this).call(this,l({},t,e))}}]),n}(n))},queue:function(e){var t=this;Ce=e;var n=function(){Ce=[],document.body.removeAttribute('data-swal2-queue-step')},o=[];return new Promise(function(e){(function a(r,i){r<Ce.length?(document.body.setAttribute('data-swal2-queue-step',r),t(Ce[r]).then(function(t){'undefined'==typeof t.value?(n(),e({dismiss:t.dismiss})):(o.push(t.value),a(r+1,i))})):(n(),e({value:o}))})(0)})},getQueueStep:function(){return document.body.getAttribute('data-swal2-queue-step')},insertQueueStep:xe,deleteQueueStep:ke,showLoading:Be,enableLoading:Be,fire:function(){for(var e=this,t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return new(Function.prototype.bind.apply(e,[null].concat(n)))}}),Ee={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},Se={email:function(e){return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.reject('Invalid email address')},url:function(e){return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e)?Promise.resolve():Promise.reject('Invalid URL')}},Pe=function(e,t,n){var o=N(),i=M();null!==t&&'function'==typeof t&&t(i),e?(O(i,B.show),O(o,B.fade),T(i,B.hide)):T(i,B.fade),V(i),o.style.overflowY='hidden',re&&!S(i,B.noanimation)?i.addEventListener(re,function e(){i.removeEventListener(re,e),o.style.overflowY='auto'}):o.style.overflowY='auto',O([document.documentElement,document.body,o],B.shown),ee()&&(le(),ue()),E.previousActiveElement=document.activeElement,null!==n&&'function'==typeof n&&setTimeout(function(){n(i)})},Le=Object.freeze({hideLoading:t,disableLoading:t,getInput:function(e){var t=Ee.innerParams.get(this),n=Ee.domCache.get(this);return(e=e||t.input,!e)?null:'select'===e||'textarea'===e||'file'===e?_(n.content,B[e]):'checkbox'===e?n.popup.querySelector('.'+B.checkbox+' input'):'radio'===e?n.popup.querySelector('.'+B.radio+' input:checked')||n.popup.querySelector('.'+B.radio+' input:first-child'):'range'===e?n.popup.querySelector('.'+B.range+' input'):_(n.content,B.input)},enableButtons:function(){var e=Ee.domCache.get(this);e.confirmButton.disabled=!1,e.cancelButton.disabled=!1},disableButtons:function(){var e=Ee.domCache.get(this);e.confirmButton.disabled=!0,e.cancelButton.disabled=!0},enableConfirmButton:function(){var e=Ee.domCache.get(this);e.confirmButton.disabled=!1},disableConfirmButton:function(){var e=Ee.domCache.get(this);e.confirmButton.disabled=!0},enableInput:function(){var e=this.getInput();if(!e)return!1;if('radio'===e.type)for(var t=e.parentNode.parentNode,n=t.querySelectorAll('input'),o=0;o<n.length;o++)n[o].disabled=!1;else e.disabled=!1},disableInput:function(){var e=this.getInput();if(!e)return!1;if(e&&'radio'===e.type)for(var t=e.parentNode.parentNode,n=t.querySelectorAll('input'),o=0;o<n.length;o++)n[o].disabled=!0;else e.disabled=!0},showValidationError:function(e){var t=Ee.domCache.get(this);t.validationError.innerHTML=e;var n=window.getComputedStyle(t.popup);t.validationError.style.marginLeft='-'+n.getPropertyValue('padding-left'),t.validationError.style.marginRight='-'+n.getPropertyValue('padding-right'),V(t.validationError);var o=this.getInput();o&&(o.setAttribute('aria-invalid',!0),o.setAttribute('aria-describedBy',B.validationerror),P(o),O(o,B.inputerror))},resetValidationError:function(){var e=Ee.domCache.get(this);e.validationError&&q(e.validationError);var t=this.getInput();t&&(t.removeAttribute('aria-invalid'),t.removeAttribute('aria-describedBy'),T(t,B.inputerror))},_main:function(e){var t=this;ye(e);var o=l({},ge,e);n(o),Object.freeze(o),Ee.innerParams.set(this,o);var r={popup:M(),container:N(),content:K(),actions:X(),confirmButton:F(),cancelButton:J(),closeButton:Z(),validationError:Y(),progressSteps:Q()};Ee.domCache.set(this,r);var s=this.constructor;return new Promise(function(e,n){var l=function(t){s.closePopup(o.onClose,o.onAfterClose),o.useRejections?e(t):e({value:t})},d=function(t){s.closePopup(o.onClose,o.onAfterClose),o.useRejections?n(t):e({dismiss:t})},u=function(e){s.closePopup(o.onClose,o.onAfterClose),n(e)};o.timer&&(r.popup.timeout=setTimeout(function(){return d('timer')},o.timer));var c=function(){var e=t.getInput();if(!e)return null;switch(o.input){case'checkbox':return e.checked?1:0;case'radio':return e.checked?e.value:null;case'file':return e.files.length?e.files[0]:null;default:return o.inputAutoTrim?e.value.trim():e.value;}};o.input&&setTimeout(function(){var e=t.getInput();e&&P(e)},0);for(var m=function(e){if(o.showLoaderOnConfirm&&s.showLoading(),o.preConfirm){t.resetValidationError();var n=Promise.resolve().then(function(){return o.preConfirm(e,o.extraParams)});o.expectRejections?n.then(function(t){return l(t||e)},function(e){t.hideLoading(),e&&t.showValidationError(e)}):n.then(function(n){D(r.validationError)||!1===n?t.hideLoading():l(n||e)},function(e){return u(e)})}else l(e)},g=function(n){var i=n||window.event,e=i.target||i.srcElement,a=r.confirmButton,l=r.cancelButton,p=a&&(a===e||a.contains(e)),g=l&&(l===e||l.contains(e));switch(i.type){case'click':if(!(p&&s.isVisible()))g&&s.isVisible()&&(t.disableButtons(),d(s.DismissReason.cancel));else if(t.disableButtons(),o.input){var f=c();if(o.inputValidator){t.disableInput();var h=Promise.resolve().then(function(){return o.inputValidator(f,o.extraParams)});o.expectRejections?h.then(function(){t.enableButtons(),t.enableInput(),m(f)},function(e){t.enableButtons(),t.enableInput(),e&&t.showValidationError(e)}):h.then(function(e){t.enableButtons(),t.enableInput(),e?t.showValidationError(e):m(f)},function(e){return u(e)})}else m(f)}else m(!0);break;default:}},h=r.popup.querySelectorAll('button'),y=0;y<h.length;y++)h[y].onclick=g,h[y].onmouseover=g,h[y].onmouseout=g,h[y].onmousedown=g;if(r.closeButton.onclick=function(){d(s.DismissReason.close)},o.toast)r.popup.onclick=function(){o.showConfirmButton||o.showCancelButton||o.showCloseButton||o.input||(s.closePopup(o.onClose,o.onAfterClose),d(s.DismissReason.close))};else{var i=!1;r.popup.onmousedown=function(){r.container.onmouseup=function(t){r.container.onmouseup=void 0,t.target===r.container&&(i=!0)}},r.container.onmousedown=function(){r.popup.onmouseup=function(t){r.popup.onmouseup=void 0,(t.target===r.popup||r.popup.contains(t.target))&&(i=!0)}},r.container.onclick=function(t){return i?void(i=!1):void(t.target!==r.container||w(o.allowOutsideClick)&&d(s.DismissReason.backdrop))}}o.reverseButtons?r.confirmButton.parentNode.insertBefore(r.cancelButton,r.confirmButton):r.confirmButton.parentNode.insertBefore(r.confirmButton,r.cancelButton);var v=function(e,t){for(var n=$(o.focusCancel),i=0;i<n.length;i++){e+=t,e===n.length?e=0:-1===e&&(e=n.length-1);var a=n[e];if(D(a))return a.focus()}};o.toast&&pe.windowOnkeydownOverridden&&(window.onkeydown=pe.previousWindowKeyDown,pe.windowOnkeydownOverridden=!1),o.toast||pe.windowOnkeydownOverridden||(pe.previousWindowKeyDown=window.onkeydown,pe.windowOnkeydownOverridden=!0,window.onkeydown=function(n){var i=n||window.event;if('Enter'===i.key&&!i.isComposing){if(i.target===t.getInput()){if(-1!==['textarea','file'].indexOf(o.input))return;s.clickConfirm(),i.preventDefault()}}else if('Tab'===i.key){for(var e=i.target||i.srcElement,a=$(o.focusCancel),l=-1,u=0;u<a.length;u++)if(e===a[u]){l=u;break}i.shiftKey?v(l,-1):v(l,1),i.stopPropagation(),i.preventDefault()}else-1===['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Left','Right','Up','Down'].indexOf(i.key)?('Escape'===i.key||'Esc'===i.key)&&!0===w(o.allowEscapeKey)&&d(s.DismissReason.esc):document.activeElement===r.confirmButton&&D(r.cancelButton)?r.cancelButton.focus():document.activeElement===r.cancelButton&&D(r.confirmButton)&&r.confirmButton.focus()}),t.enableButtons(),t.hideLoading(),t.resetValidationError(),o.input&&O(document.body,B['has-input']);for(var x=['input','file','range','select','radio','checkbox','textarea'],k=void 0,A=0;A<x.length;A++){var E=B[x[A]],S=_(r.content,E);if(k=t.getInput(x[A]),k){for(var L in k.attributes)if(k.attributes.hasOwnProperty(L)){var T=k.attributes[L].name;'type'!==T&&'value'!==T&&k.removeAttribute(T)}for(var j in o.inputAttributes)k.setAttribute(j,o.inputAttributes[j])}S.className=E,o.inputClass&&O(S,o.inputClass),q(S)}var R;switch(o.input){case'text':case'email':case'password':case'number':case'tel':case'url':k=_(r.content,B.input),k.value=o.inputValue,k.placeholder=o.inputPlaceholder,k.type=o.input,V(k);break;case'file':k=_(r.content,B.file),k.placeholder=o.inputPlaceholder,k.type=o.input,V(k);break;case'range':var I=_(r.content,B.range),N=I.querySelector('input'),H=I.querySelector('output');N.value=o.inputValue,N.type=o.input,H.value=o.inputValue,V(I);break;case'select':var M=_(r.content,B.select);if(M.innerHTML='',o.inputPlaceholder){var W=document.createElement('option');W.innerHTML=o.inputPlaceholder,W.value='',W.disabled=!0,W.selected=!0,M.appendChild(W)}R=function(e){e.forEach(function(e){var t=p(e,2),n=t[0],i=t[1],a=document.createElement('option');a.value=n,a.innerHTML=i,o.inputValue.toString()===n.toString()&&(a.selected=!0),M.appendChild(a)}),V(M),M.focus()};break;case'radio':var U=_(r.content,B.radio);U.innerHTML='',R=function(e){e.forEach(function(e){var t=p(e,2),n=t[0],i=t[1],a=document.createElement('input'),r=document.createElement('label');a.type='radio',a.name=B.radio,a.value=n,o.inputValue.toString()===n.toString()&&(a.checked=!0),r.innerHTML=i,r.insertBefore(a,r.firstChild),U.appendChild(r)}),V(U);var t=U.querySelectorAll('input');t.length&&t[0].focus()};break;case'checkbox':var K=_(r.content,B.checkbox),z=t.getInput('checkbox');z.type='checkbox',z.value=1,z.id=B.checkbox,z.checked=!!o.inputValue;var Q=K.getElementsByTagName('span');Q.length&&K.removeChild(Q[0]),Q=document.createElement('span'),Q.innerHTML=o.inputPlaceholder,K.appendChild(Q),V(K);break;case'textarea':var Y=_(r.content,B.textarea);Y.value=o.inputValue,Y.placeholder=o.inputPlaceholder,V(Y);break;case null:break;default:b('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'+o.input+'"');}if('select'===o.input||'radio'===o.input){var F=function(e){return R(f(e))};C(o.inputOptions)?(s.showLoading(),o.inputOptions.then(function(e){t.hideLoading(),F(e)})):'object'===a(o.inputOptions)?F(o.inputOptions):b('Unexpected type of inputOptions! Expected object, Map or Promise, got '+a(o.inputOptions))}else-1!==['text','email','number','tel','textarea'].indexOf(o.input)&&C(o.inputValue)&&(s.showLoading(),q(k),o.inputValue.then(function(e){k.value='number'===o.input?parseFloat(e)||0:e+'',V(k),t.hideLoading()}).catch(function(e){b('Error in inputValue promise: '+e),k.value='',V(k),t.hideLoading()}));Pe(o.animation,o.onBeforeOpen,o.onOpen),o.toast||(w(o.allowEnterKey)?o.focusCancel&&D(r.cancelButton)?r.cancelButton.focus():o.focusConfirm&&D(r.confirmButton)?r.confirmButton.focus():v(-1,1):document.activeElement&&document.activeElement.blur()),r.container.scrollTop=0})}});o.prototype.then=function(e,t){var n=Ee.promise.get(this);return n.then(e,t)},o.prototype.catch=function(e){var t=Ee.promise.get(this);return t.catch(e)},o.prototype.finally=function(e){var t=Ee.promise.get(this);return t.finally(e)},l(o.prototype,Le),l(o,Ae),Object.keys(Le).forEach(function(e){o[e]=function(){if(i){var t;return(t=i)[e].apply(t,arguments)}}}),o.DismissReason=x,o.noop=function(){},o.version='7.19.1';var Oe=e(function(e){var t=function(t){function n(){return r(this,n),c(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,t),s(n,[{key:'_main',value:function(e){return d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),'_main',this).call(this,l({},we,e))}}],[{key:'setDefaults',value:function(t){if(v(ve),!t||'object'!==('undefined'==typeof t?'undefined':a(t)))throw new TypeError('SweetAlert2: The argument for setDefaults() is required and has to be a object');ye(t),Object.keys(t).forEach(function(n){e.isValidParameter(n)&&(we[n]=t[n])})}},{key:'resetDefaults',value:function(){v(ve),we={}}}]),n}(e);return'undefined'!=typeof window&&'object'===a(window._swalDefaults)&&t.setDefaults(window._swalDefaults),t}(o));return Oe.default=Oe,Oe}),'undefined'!=typeof window&&window.Sweetalert2&&(window.swal=window.sweetAlert=window.Swal=window.SweetAlert=window.Sweetalert2);
    
    "undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@-webkit-keyframes swal2-show {\n" +
    "  0% {\n" +
    "    -webkit-transform: scale(0.7);\n" +
    "            transform: scale(0.7); }\n" +
    "  45% {\n" +
    "    -webkit-transform: scale(1.05);\n" +
    "            transform: scale(1.05); }\n" +
    "  80% {\n" +
    "    -webkit-transform: scale(0.95);\n" +
    "            transform: scale(0.95); }\n" +
    "  100% {\n" +
    "    -webkit-transform: scale(1);\n" +
    "            transform: scale(1); } }\n" +
    "\n" +
    "@keyframes swal2-show {\n" +
    "  0% {\n" +
    "    -webkit-transform: scale(0.7);\n" +
    "            transform: scale(0.7); }\n" +
    "  45% {\n" +
    "    -webkit-transform: scale(1.05);\n" +
    "            transform: scale(1.05); }\n" +
    "  80% {\n" +
    "    -webkit-transform: scale(0.95);\n" +
    "            transform: scale(0.95); }\n" +
    "  100% {\n" +
    "    -webkit-transform: scale(1);\n" +
    "            transform: scale(1); } }\n" +
    "\n" +
    "@-webkit-keyframes swal2-hide {\n" +
    "  0% {\n" +
    "    -webkit-transform: scale(1);\n" +
    "            transform: scale(1);\n" +
    "    opacity: 1; }\n" +
    "  100% {\n" +
    "    -webkit-transform: scale(0.5);\n" +
    "            transform: scale(0.5);\n" +
    "    opacity: 0; } }\n" +
    "\n" +
    "@keyframes swal2-hide {\n" +
    "  0% {\n" +
    "    -webkit-transform: scale(1);\n" +
    "            transform: scale(1);\n" +
    "    opacity: 1; }\n" +
    "  100% {\n" +
    "    -webkit-transform: scale(0.5);\n" +
    "            transform: scale(0.5);\n" +
    "    opacity: 0; } }\n" +
    "\n" +
    "@-webkit-keyframes swal2-animate-success-line-tip {\n" +
    "  0% {\n" +
    "    top: 1.1875em;\n" +
    "    left: .0625em;\n" +
    "    width: 0; }\n" +
    "  54% {\n" +
    "    top: 1.0625em;\n" +
    "    left: .125em;\n" +
    "    width: 0; }\n" +
    "  70% {\n" +
    "    top: 2.1875em;\n" +
    "    left: -.375em;\n" +
    "    width: 3.125em; }\n" +
    "  84% {\n" +
    "    top: 3em;\n" +
    "    left: 1.3125em;\n" +
    "    width: 1.0625em; }\n" +
    "  100% {\n" +
    "    top: 2.8125em;\n" +
    "    left: .875em;\n" +
    "    width: 1.5625em; } }\n" +
    "\n" +
    "@keyframes swal2-animate-success-line-tip {\n" +
    "  0% {\n" +
    "    top: 1.1875em;\n" +
    "    left: .0625em;\n" +
    "    width: 0; }\n" +
    "  54% {\n" +
    "    top: 1.0625em;\n" +
    "    left: .125em;\n" +
    "    width: 0; }\n" +
    "  70% {\n" +
    "    top: 2.1875em;\n" +
    "    left: -.375em;\n" +
    "    width: 3.125em; }\n" +
    "  84% {\n" +
    "    top: 3em;\n" +
    "    left: 1.3125em;\n" +
    "    width: 1.0625em; }\n" +
    "  100% {\n" +
    "    top: 2.8125em;\n" +
    "    left: .875em;\n" +
    "    width: 1.5625em; } }\n" +
    "\n" +
    "@-webkit-keyframes swal2-animate-success-line-long {\n" +
    "  0% {\n" +
    "    top: 3.375em;\n" +
    "    right: 2.875em;\n" +
    "    width: 0; }\n" +
    "  65% {\n" +
    "    top: 3.375em;\n" +
    "    right: 2.875em;\n" +
    "    width: 0; }\n" +
    "  84% {\n" +
    "    top: 2.1875em;\n" +
    "    right: 0;\n" +
    "    width: 3.4375em; }\n" +
    "  100% {\n" +
    "    top: 2.375em;\n" +
    "    right: .5em;\n" +
    "    width: 2.9375em; } }\n" +
    "\n" +
    "@keyframes swal2-animate-success-line-long {\n" +
    "  0% {\n" +
    "    top: 3.375em;\n" +
    "    right: 2.875em;\n" +
    "    width: 0; }\n" +
    "  65% {\n" +
    "    top: 3.375em;\n" +
    "    right: 2.875em;\n" +
    "    width: 0; }\n" +
    "  84% {\n" +
    "    top: 2.1875em;\n" +
    "    right: 0;\n" +
    "    width: 3.4375em; }\n" +
    "  100% {\n" +
    "    top: 2.375em;\n" +
    "    right: .5em;\n" +
    "    width: 2.9375em; } }\n" +
    "\n" +
    "@-webkit-keyframes swal2-rotate-success-circular-line {\n" +
    "  0% {\n" +
    "    -webkit-transform: rotate(-45deg);\n" +
    "            transform: rotate(-45deg); }\n" +
    "  5% {\n" +
    "    -webkit-transform: rotate(-45deg);\n" +
    "            transform: rotate(-45deg); }\n" +
    "  12% {\n" +
    "    -webkit-transform: rotate(-405deg);\n" +
    "            transform: rotate(-405deg); }\n" +
    "  100% {\n" +
    "    -webkit-transform: rotate(-405deg);\n" +
    "            transform: rotate(-405deg); } }\n" +
    "\n" +
    "@keyframes swal2-rotate-success-circular-line {\n" +
    "  0% {\n" +
    "    -webkit-transform: rotate(-45deg);\n" +
    "            transform: rotate(-45deg); }\n" +
    "  5% {\n" +
    "    -webkit-transform: rotate(-45deg);\n" +
    "            transform: rotate(-45deg); }\n" +
    "  12% {\n" +
    "    -webkit-transform: rotate(-405deg);\n" +
    "            transform: rotate(-405deg); }\n" +
    "  100% {\n" +
    "    -webkit-transform: rotate(-405deg);\n" +
    "            transform: rotate(-405deg); } }\n" +
    "\n" +
    "@-webkit-keyframes swal2-animate-error-x-mark {\n" +
    "  0% {\n" +
    "    margin-top: 1.625em;\n" +
    "    -webkit-transform: scale(0.4);\n" +
    "            transform: scale(0.4);\n" +
    "    opacity: 0; }\n" +
    "  50% {\n" +
    "    margin-top: 1.625em;\n" +
    "    -webkit-transform: scale(0.4);\n" +
    "            transform: scale(0.4);\n" +
    "    opacity: 0; }\n" +
    "  80% {\n" +
    "    margin-top: -.375em;\n" +
    "    -webkit-transform: scale(1.15);\n" +
    "            transform: scale(1.15); }\n" +
    "  100% {\n" +
    "    margin-top: 0;\n" +
    "    -webkit-transform: scale(1);\n" +
    "            transform: scale(1);\n" +
    "    opacity: 1; } }\n" +
    "\n" +
    "@keyframes swal2-animate-error-x-mark {\n" +
    "  0% {\n" +
    "    margin-top: 1.625em;\n" +
    "    -webkit-transform: scale(0.4);\n" +
    "            transform: scale(0.4);\n" +
    "    opacity: 0; }\n" +
    "  50% {\n" +
    "    margin-top: 1.625em;\n" +
    "    -webkit-transform: scale(0.4);\n" +
    "            transform: scale(0.4);\n" +
    "    opacity: 0; }\n" +
    "  80% {\n" +
    "    margin-top: -.375em;\n" +
    "    -webkit-transform: scale(1.15);\n" +
    "            transform: scale(1.15); }\n" +
    "  100% {\n" +
    "    margin-top: 0;\n" +
    "    -webkit-transform: scale(1);\n" +
    "            transform: scale(1);\n" +
    "    opacity: 1; } }\n" +
    "\n" +
    "@-webkit-keyframes swal2-animate-error-icon {\n" +
    "  0% {\n" +
    "    -webkit-transform: rotateX(100deg);\n" +
    "            transform: rotateX(100deg);\n" +
    "    opacity: 0; }\n" +
    "  100% {\n" +
    "    -webkit-transform: rotateX(0deg);\n" +
    "            transform: rotateX(0deg);\n" +
    "    opacity: 1; } }\n" +
    "\n" +
    "@keyframes swal2-animate-error-icon {\n" +
    "  0% {\n" +
    "    -webkit-transform: rotateX(100deg);\n" +
    "            transform: rotateX(100deg);\n" +
    "    opacity: 0; }\n" +
    "  100% {\n" +
    "    -webkit-transform: rotateX(0deg);\n" +
    "            transform: rotateX(0deg);\n" +
    "    opacity: 1; } }\n" +
    "\n" +
    "body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast {\n" +
    "  flex-direction: column;\n" +
    "  align-items: stretch; }\n" +
    "  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-actions {\n" +
    "    flex: 1;\n" +
    "    align-self: stretch;\n" +
    "    justify-content: flex-end;\n" +
    "    height: 2.2em; }\n" +
    "  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-loading {\n" +
    "    justify-content: center; }\n" +
    "  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-input {\n" +
    "    height: 2em;\n" +
    "    margin: .3125em auto;\n" +
    "    font-size: 1em; }\n" +
    "  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-validationerror {\n" +
    "    font-size: 1em; }\n" +
    "\n" +
    "body.swal2-toast-shown > .swal2-container {\n" +
    "  position: fixed;\n" +
    "  background-color: transparent; }\n" +
    "  body.swal2-toast-shown > .swal2-container.swal2-shown {\n" +
    "    background-color: transparent; }\n" +
    "  body.swal2-toast-shown > .swal2-container.swal2-top {\n" +
    "    top: 0;\n" +
    "    right: auto;\n" +
    "    bottom: auto;\n" +
    "    left: 50%;\n" +
    "    -webkit-transform: translateX(-50%);\n" +
    "            transform: translateX(-50%); }\n" +
    "  body.swal2-toast-shown > .swal2-container.swal2-top-end, body.swal2-toast-shown > .swal2-container.swal2-top-right {\n" +
    "    top: 0;\n" +
    "    right: 0;\n" +
    "    bottom: auto;\n" +
    "    left: auto; }\n" +
    "  body.swal2-toast-shown > .swal2-container.swal2-top-start, body.swal2-toast-shown > .swal2-container.swal2-top-left {\n" +
    "    top: 0;\n" +
    "    right: auto;\n" +
    "    bottom: auto;\n" +
    "    left: 0; }\n" +
    "  body.swal2-toast-shown > .swal2-container.swal2-center-start, body.swal2-toast-shown > .swal2-container.swal2-center-left {\n" +
    "    top: 50%;\n" +
    "    right: auto;\n" +
    "    bottom: auto;\n" +
    "    left: 0;\n" +
    "    -webkit-transform: translateY(-50%);\n" +
    "            transform: translateY(-50%); }\n" +
    "  body.swal2-toast-shown > .swal2-container.swal2-center {\n" +
    "    top: 50%;\n" +
    "    right: auto;\n" +
    "    bottom: auto;\n" +
    "    left: 50%;\n" +
    "    -webkit-transform: translate(-50%, -50%);\n" +
    "            transform: translate(-50%, -50%); }\n" +
    "  body.swal2-toast-shown > .swal2-container.swal2-center-end, body.swal2-toast-shown > .swal2-container.swal2-center-right {\n" +
    "    top: 50%;\n" +
    "    right: 0;\n" +
    "    bottom: auto;\n" +
    "    left: auto;\n" +
    "    -webkit-transform: translateY(-50%);\n" +
    "            transform: translateY(-50%); }\n" +
    "  body.swal2-toast-shown > .swal2-container.swal2-bottom-start, body.swal2-toast-shown > .swal2-container.swal2-bottom-left {\n" +
    "    top: auto;\n" +
    "    right: auto;\n" +
    "    bottom: 0;\n" +
    "    left: 0; }\n" +
    "  body.swal2-toast-shown > .swal2-container.swal2-bottom {\n" +
    "    top: auto;\n" +
    "    right: auto;\n" +
    "    bottom: 0;\n" +
    "    left: 50%;\n" +
    "    -webkit-transform: translateX(-50%);\n" +
    "            transform: translateX(-50%); }\n" +
    "  body.swal2-toast-shown > .swal2-container.swal2-bottom-end, body.swal2-toast-shown > .swal2-container.swal2-bottom-right {\n" +
    "    top: auto;\n" +
    "    right: 0;\n" +
    "    bottom: 0;\n" +
    "    left: auto; }\n" +
    "\n" +
    ".swal2-popup.swal2-toast {\n" +
    "  flex-direction: row;\n" +
    "  align-items: center;\n" +
    "  width: auto;\n" +
    "  padding: 0.625em;\n" +
    "  box-shadow: 0 0 0.625em #d9d9d9;\n" +
    "  overflow-y: hidden; }\n" +
    "  .swal2-popup.swal2-toast .swal2-header {\n" +
    "    flex-direction: row; }\n" +
    "  .swal2-popup.swal2-toast .swal2-title {\n" +
    "    justify-content: flex-start;\n" +
    "    margin: 0 .6em;\n" +
    "    font-size: 1em; }\n" +
    "  .swal2-popup.swal2-toast .swal2-close {\n" +
    "    position: initial; }\n" +
    "  .swal2-popup.swal2-toast .swal2-content {\n" +
    "    justify-content: flex-start;\n" +
    "    font-size: 1em; }\n" +
    "  .swal2-popup.swal2-toast .swal2-icon {\n" +
    "    width: 2em;\n" +
    "    min-width: 2em;\n" +
    "    height: 2em;\n" +
    "    margin: 0; }\n" +
    "    .swal2-popup.swal2-toast .swal2-icon-text {\n" +
    "      font-size: 2em;\n" +
    "      font-weight: bold;\n" +
    "      line-height: 1em; }\n" +
    "    .swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n" +
    "      width: 2em;\n" +
    "      height: 2em; }\n" +
    "    .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n" +
    "      top: .875em;\n" +
    "      width: 1.375em; }\n" +
    "      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n" +
    "        left: .3125em; }\n" +
    "      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n" +
    "        right: .3125em; }\n" +
    "  .swal2-popup.swal2-toast .swal2-actions {\n" +
    "    height: auto;\n" +
    "    margin: 0 .3125em; }\n" +
    "  .swal2-popup.swal2-toast .swal2-styled {\n" +
    "    margin: 0 .3125em;\n" +
    "    padding: .3125em .625em;\n" +
    "    font-size: 1em; }\n" +
    "    .swal2-popup.swal2-toast .swal2-styled:focus {\n" +
    "      box-shadow: 0 0 0 0.0625em #fff, 0 0 0 0.125em rgba(50, 100, 150, 0.4); }\n" +
    "  .swal2-popup.swal2-toast .swal2-success {\n" +
    "    border-color: #a5dc86; }\n" +
    "    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'] {\n" +
    "      position: absolute;\n" +
    "      width: 2em;\n" +
    "      height: 2.8125em;\n" +
    "      -webkit-transform: rotate(45deg);\n" +
    "              transform: rotate(45deg);\n" +
    "      border-radius: 50%; }\n" +
    "      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n" +
    "        top: -.25em;\n" +
    "        left: -.9375em;\n" +
    "        -webkit-transform: rotate(-45deg);\n" +
    "                transform: rotate(-45deg);\n" +
    "        -webkit-transform-origin: 2em 2em;\n" +
    "                transform-origin: 2em 2em;\n" +
    "        border-radius: 4em 0 0 4em; }\n" +
    "      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n" +
    "        top: -.25em;\n" +
    "        left: .9375em;\n" +
    "        -webkit-transform-origin: 0 2em;\n" +
    "                transform-origin: 0 2em;\n" +
    "        border-radius: 0 4em 4em 0; }\n" +
    "    .swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n" +
    "      width: 2em;\n" +
    "      height: 2em; }\n" +
    "    .swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n" +
    "      top: 0;\n" +
    "      left: .4375em;\n" +
    "      width: .4375em;\n" +
    "      height: 2.6875em; }\n" +
    "    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'] {\n" +
    "      height: .3125em; }\n" +
    "      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='tip'] {\n" +
    "        top: 1.125em;\n" +
    "        left: .1875em;\n" +
    "        width: .75em; }\n" +
    "      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='long'] {\n" +
    "        top: .9375em;\n" +
    "        right: .1875em;\n" +
    "        width: 1.375em; }\n" +
    "  .swal2-popup.swal2-toast.swal2-show {\n" +
    "    -webkit-animation: showSweetToast .5s;\n" +
    "            animation: showSweetToast .5s; }\n" +
    "  .swal2-popup.swal2-toast.swal2-hide {\n" +
    "    -webkit-animation: hideSweetToast .2s forwards;\n" +
    "            animation: hideSweetToast .2s forwards; }\n" +
    "  .swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip {\n" +
    "    -webkit-animation: animate-toast-success-tip .75s;\n" +
    "            animation: animate-toast-success-tip .75s; }\n" +
    "  .swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long {\n" +
    "    -webkit-animation: animate-toast-success-long .75s;\n" +
    "            animation: animate-toast-success-long .75s; }\n" +
    "\n" +
    "@-webkit-keyframes showSweetToast {\n" +
    "  0% {\n" +
    "    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n" +
    "            transform: translateY(-0.625em) rotateZ(2deg);\n" +
    "    opacity: 0; }\n" +
    "  33% {\n" +
    "    -webkit-transform: translateY(0) rotateZ(-2deg);\n" +
    "            transform: translateY(0) rotateZ(-2deg);\n" +
    "    opacity: .5; }\n" +
    "  66% {\n" +
    "    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n" +
    "            transform: translateY(0.3125em) rotateZ(2deg);\n" +
    "    opacity: .7; }\n" +
    "  100% {\n" +
    "    -webkit-transform: translateY(0) rotateZ(0);\n" +
    "            transform: translateY(0) rotateZ(0);\n" +
    "    opacity: 1; } }\n" +
    "\n" +
    "@keyframes showSweetToast {\n" +
    "  0% {\n" +
    "    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n" +
    "            transform: translateY(-0.625em) rotateZ(2deg);\n" +
    "    opacity: 0; }\n" +
    "  33% {\n" +
    "    -webkit-transform: translateY(0) rotateZ(-2deg);\n" +
    "            transform: translateY(0) rotateZ(-2deg);\n" +
    "    opacity: .5; }\n" +
    "  66% {\n" +
    "    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n" +
    "            transform: translateY(0.3125em) rotateZ(2deg);\n" +
    "    opacity: .7; }\n" +
    "  100% {\n" +
    "    -webkit-transform: translateY(0) rotateZ(0);\n" +
    "            transform: translateY(0) rotateZ(0);\n" +
    "    opacity: 1; } }\n" +
    "\n" +
    "@-webkit-keyframes hideSweetToast {\n" +
    "  0% {\n" +
    "    opacity: 1; }\n" +
    "  33% {\n" +
    "    opacity: .5; }\n" +
    "  100% {\n" +
    "    -webkit-transform: rotateZ(1deg);\n" +
    "            transform: rotateZ(1deg);\n" +
    "    opacity: 0; } }\n" +
    "\n" +
    "@keyframes hideSweetToast {\n" +
    "  0% {\n" +
    "    opacity: 1; }\n" +
    "  33% {\n" +
    "    opacity: .5; }\n" +
    "  100% {\n" +
    "    -webkit-transform: rotateZ(1deg);\n" +
    "            transform: rotateZ(1deg);\n" +
    "    opacity: 0; } }\n" +
    "\n" +
    "@-webkit-keyframes animate-toast-success-tip {\n" +
    "  0% {\n" +
    "    top: .5625em;\n" +
    "    left: .0625em;\n" +
    "    width: 0; }\n" +
    "  54% {\n" +
    "    top: .125em;\n" +
    "    left: .125em;\n" +
    "    width: 0; }\n" +
    "  70% {\n" +
    "    top: .625em;\n" +
    "    left: -.25em;\n" +
    "    width: 1.625em; }\n" +
    "  84% {\n" +
    "    top: 1.0625em;\n" +
    "    left: .75em;\n" +
    "    width: .5em; }\n" +
    "  100% {\n" +
    "    top: 1.125em;\n" +
    "    left: .1875em;\n" +
    "    width: .75em; } }\n" +
    "\n" +
    "@keyframes animate-toast-success-tip {\n" +
    "  0% {\n" +
    "    top: .5625em;\n" +
    "    left: .0625em;\n" +
    "    width: 0; }\n" +
    "  54% {\n" +
    "    top: .125em;\n" +
    "    left: .125em;\n" +
    "    width: 0; }\n" +
    "  70% {\n" +
    "    top: .625em;\n" +
    "    left: -.25em;\n" +
    "    width: 1.625em; }\n" +
    "  84% {\n" +
    "    top: 1.0625em;\n" +
    "    left: .75em;\n" +
    "    width: .5em; }\n" +
    "  100% {\n" +
    "    top: 1.125em;\n" +
    "    left: .1875em;\n" +
    "    width: .75em; } }\n" +
    "\n" +
    "@-webkit-keyframes animate-toast-success-long {\n" +
    "  0% {\n" +
    "    top: 1.625em;\n" +
    "    right: 1.375em;\n" +
    "    width: 0; }\n" +
    "  65% {\n" +
    "    top: 1.25em;\n" +
    "    right: .9375em;\n" +
    "    width: 0; }\n" +
    "  84% {\n" +
    "    top: .9375em;\n" +
    "    right: 0;\n" +
    "    width: 1.125em; }\n" +
    "  100% {\n" +
    "    top: .9375em;\n" +
    "    right: .1875em;\n" +
    "    width: 1.375em; } }\n" +
    "\n" +
    "@keyframes animate-toast-success-long {\n" +
    "  0% {\n" +
    "    top: 1.625em;\n" +
    "    right: 1.375em;\n" +
    "    width: 0; }\n" +
    "  65% {\n" +
    "    top: 1.25em;\n" +
    "    right: .9375em;\n" +
    "    width: 0; }\n" +
    "  84% {\n" +
    "    top: .9375em;\n" +
    "    right: 0;\n" +
    "    width: 1.125em; }\n" +
    "  100% {\n" +
    "    top: .9375em;\n" +
    "    right: .1875em;\n" +
    "    width: 1.375em; } }\n" +
    "\n" +
    "html.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown),\n" +
    "body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n" +
    "  height: auto;\n" +
    "  overflow-y: hidden; }\n" +
    "\n" +
    "body.swal2-no-backdrop .swal2-shown {\n" +
    "  top: auto;\n" +
    "  right: auto;\n" +
    "  bottom: auto;\n" +
    "  left: auto;\n" +
    "  background-color: transparent; }\n" +
    "  body.swal2-no-backdrop .swal2-shown > .swal2-modal {\n" +
    "    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); }\n" +
    "  body.swal2-no-backdrop .swal2-shown.swal2-top {\n" +
    "    top: 0;\n" +
    "    left: 50%;\n" +
    "    -webkit-transform: translateX(-50%);\n" +
    "            transform: translateX(-50%); }\n" +
    "  body.swal2-no-backdrop .swal2-shown.swal2-top-start, body.swal2-no-backdrop .swal2-shown.swal2-top-left {\n" +
    "    top: 0;\n" +
    "    left: 0; }\n" +
    "  body.swal2-no-backdrop .swal2-shown.swal2-top-end, body.swal2-no-backdrop .swal2-shown.swal2-top-right {\n" +
    "    top: 0;\n" +
    "    right: 0; }\n" +
    "  body.swal2-no-backdrop .swal2-shown.swal2-center {\n" +
    "    top: 50%;\n" +
    "    left: 50%;\n" +
    "    -webkit-transform: translate(-50%, -50%);\n" +
    "            transform: translate(-50%, -50%); }\n" +
    "  body.swal2-no-backdrop .swal2-shown.swal2-center-start, body.swal2-no-backdrop .swal2-shown.swal2-center-left {\n" +
    "    top: 50%;\n" +
    "    left: 0;\n" +
    "    -webkit-transform: translateY(-50%);\n" +
    "            transform: translateY(-50%); }\n" +
    "  body.swal2-no-backdrop .swal2-shown.swal2-center-end, body.swal2-no-backdrop .swal2-shown.swal2-center-right {\n" +
    "    top: 50%;\n" +
    "    right: 0;\n" +
    "    -webkit-transform: translateY(-50%);\n" +
    "            transform: translateY(-50%); }\n" +
    "  body.swal2-no-backdrop .swal2-shown.swal2-bottom {\n" +
    "    bottom: 0;\n" +
    "    left: 50%;\n" +
    "    -webkit-transform: translateX(-50%);\n" +
    "            transform: translateX(-50%); }\n" +
    "  body.swal2-no-backdrop .swal2-shown.swal2-bottom-start, body.swal2-no-backdrop .swal2-shown.swal2-bottom-left {\n" +
    "    bottom: 0;\n" +
    "    left: 0; }\n" +
    "  body.swal2-no-backdrop .swal2-shown.swal2-bottom-end, body.swal2-no-backdrop .swal2-shown.swal2-bottom-right {\n" +
    "    right: 0;\n" +
    "    bottom: 0; }\n" +
    "\n" +
    ".swal2-container {\n" +
    "  display: flex;\n" +
    "  position: fixed;\n" +
    "  top: 0;\n" +
    "  right: 0;\n" +
    "  bottom: 0;\n" +
    "  left: 0;\n" +
    "  flex-direction: row;\n" +
    "  align-items: center;\n" +
    "  justify-content: center;\n" +
    "  padding: 10px;\n" +
    "  background-color: transparent;\n" +
    "  z-index: 1060;\n" +
    "  overflow-x: hidden;\n" +
    "  -webkit-overflow-scrolling: touch; }\n" +
    "  .swal2-container.swal2-top {\n" +
    "    align-items: flex-start; }\n" +
    "  .swal2-container.swal2-top-start, .swal2-container.swal2-top-left {\n" +
    "    align-items: flex-start;\n" +
    "    justify-content: flex-start; }\n" +
    "  .swal2-container.swal2-top-end, .swal2-container.swal2-top-right {\n" +
    "    align-items: flex-start;\n" +
    "    justify-content: flex-end; }\n" +
    "  .swal2-container.swal2-center {\n" +
    "    align-items: center; }\n" +
    "  .swal2-container.swal2-center-start, .swal2-container.swal2-center-left {\n" +
    "    align-items: center;\n" +
    "    justify-content: flex-start; }\n" +
    "  .swal2-container.swal2-center-end, .swal2-container.swal2-center-right {\n" +
    "    align-items: center;\n" +
    "    justify-content: flex-end; }\n" +
    "  .swal2-container.swal2-bottom {\n" +
    "    align-items: flex-end; }\n" +
    "  .swal2-container.swal2-bottom-start, .swal2-container.swal2-bottom-left {\n" +
    "    align-items: flex-end;\n" +
    "    justify-content: flex-start; }\n" +
    "  .swal2-container.swal2-bottom-end, .swal2-container.swal2-bottom-right {\n" +
    "    align-items: flex-end;\n" +
    "    justify-content: flex-end; }\n" +
    "  .swal2-container.swal2-grow-fullscreen > .swal2-modal {\n" +
    "    display: flex !important;\n" +
    "    flex: 1;\n" +
    "    align-self: stretch;\n" +
    "    justify-content: center; }\n" +
    "  .swal2-container.swal2-grow-row > .swal2-modal {\n" +
    "    display: flex !important;\n" +
    "    flex: 1;\n" +
    "    align-content: center;\n" +
    "    justify-content: center; }\n" +
    "  .swal2-container.swal2-grow-column {\n" +
    "    flex: 1;\n" +
    "    flex-direction: column; }\n" +
    "    .swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n" +
    "      align-items: center; }\n" +
    "    .swal2-container.swal2-grow-column.swal2-top-start, .swal2-container.swal2-grow-column.swal2-center-start, .swal2-container.swal2-grow-column.swal2-bottom-start, .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n" +
    "      align-items: flex-start; }\n" +
    "    .swal2-container.swal2-grow-column.swal2-top-end, .swal2-container.swal2-grow-column.swal2-center-end, .swal2-container.swal2-grow-column.swal2-bottom-end, .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n" +
    "      align-items: flex-end; }\n" +
    "    .swal2-container.swal2-grow-column > .swal2-modal {\n" +
    "      display: flex !important;\n" +
    "      flex: 1;\n" +
    "      align-content: center;\n" +
    "      justify-content: center; }\n" +
    "  .swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right) > .swal2-modal {\n" +
    "    margin: auto; }\n" +
    "  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n" +
    "    .swal2-container .swal2-modal {\n" +
    "      margin: 0 !important; } }\n" +
    "  .swal2-container.swal2-fade {\n" +
    "    transition: background-color .1s; }\n" +
    "  .swal2-container.swal2-shown {\n" +
    "    background-color: rgba(0, 0, 0, 0.4); }\n" +
    "\n" +
    ".swal2-popup {\n" +
    "  display: none;\n" +
    "  position: relative;\n" +
    "  flex-direction: column;\n" +
    "  justify-content: center;\n" +
    "  width: 32em;\n" +
    "  max-width: 100%;\n" +
    "  padding: 1.25em;\n" +
    "  border-radius: 0.3125em;\n" +
    "  background: #fff;\n" +
    "  font-family: inherit;\n" +
    "  font-size: 1rem;\n" +
    "  box-sizing: border-box; }\n" +
    "  .swal2-popup:focus {\n" +
    "    outline: none; }\n" +
    "  .swal2-popup.swal2-loading {\n" +
    "    overflow-y: hidden; }\n" +
    "  .swal2-popup .swal2-header {\n" +
    "    display: flex;\n" +
    "    flex-direction: column;\n" +
    "    align-items: center; }\n" +
    "  .swal2-popup .swal2-title {\n" +
    "    display: block;\n" +
    "    position: relative;\n" +
    "    max-width: 100%;\n" +
    "    margin: 0 0 0.4em;\n" +
    "    padding: 0;\n" +
    "    color: #595959;\n" +
    "    font-size: 1.875em;\n" +
    "    font-weight: 600;\n" +
    "    text-align: center;\n" +
    "    text-transform: none;\n" +
    "    word-wrap: break-word; }\n" +
    "  .swal2-popup .swal2-actions {\n" +
    "    align-items: center;\n" +
    "    justify-content: center;\n" +
    "    margin: 1.25em auto 0; }\n" +
    "    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {\n" +
    "      opacity: .4; }\n" +
    "    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover {\n" +
    "      background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)); }\n" +
    "    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active {\n" +
    "      background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)); }\n" +
    "    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm {\n" +
    "      width: 2.5em;\n" +
    "      height: 2.5em;\n" +
    "      margin: .46875em;\n" +
    "      padding: 0;\n" +
    "      border: .25em solid transparent;\n" +
    "      border-radius: 100%;\n" +
    "      border-color: transparent;\n" +
    "      background-color: transparent !important;\n" +
    "      color: transparent;\n" +
    "      cursor: default;\n" +
    "      box-sizing: border-box;\n" +
    "      -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n" +
    "              animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n" +
    "      -webkit-user-select: none;\n" +
    "         -moz-user-select: none;\n" +
    "          -ms-user-select: none;\n" +
    "              user-select: none; }\n" +
    "    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel {\n" +
    "      margin-right: 30px;\n" +
    "      margin-left: 30px; }\n" +
    "    .swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n" +
    "      display: inline-block;\n" +
    "      width: 15px;\n" +
    "      height: 15px;\n" +
    "      margin-left: 5px;\n" +
    "      border: 3px solid #999999;\n" +
    "      border-radius: 50%;\n" +
    "      border-right-color: transparent;\n" +
    "      box-shadow: 1px 1px 1px #fff;\n" +
    "      content: '';\n" +
    "      -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n" +
    "              animation: swal2-rotate-loading 1.5s linear 0s infinite normal; }\n" +
    "  .swal2-popup .swal2-styled {\n" +
    "    margin: 0 .3125em;\n" +
    "    padding: .625em 2em;\n" +
    "    font-weight: 500;\n" +
    "    box-shadow: none; }\n" +
    "    .swal2-popup .swal2-styled:not([disabled]) {\n" +
    "      cursor: pointer; }\n" +
    "    .swal2-popup .swal2-styled.swal2-confirm {\n" +
    "      border: 0;\n" +
    "      border-radius: 0.25em;\n" +
    "      background: initial;\n" +
    "      background-color: #3085d6;\n" +
    "      color: #fff;\n" +
    "      font-size: 1.0625em; }\n" +
    "    .swal2-popup .swal2-styled.swal2-cancel {\n" +
    "      border: 0;\n" +
    "      border-radius: 0.25em;\n" +
    "      background: initial;\n" +
    "      background-color: #aaa;\n" +
    "      color: #fff;\n" +
    "      font-size: 1.0625em; }\n" +
    "    .swal2-popup .swal2-styled:focus {\n" +
    "      outline: none;\n" +
    "      box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4); }\n" +
    "    .swal2-popup .swal2-styled::-moz-focus-inner {\n" +
    "      border: 0; }\n" +
    "  .swal2-popup .swal2-footer {\n" +
    "    justify-content: center;\n" +
    "    margin: 1.25em 0 0;\n" +
    "    padding-top: 1em;\n" +
    "    border-top: 1px solid #eee;\n" +
    "    color: #545454;\n" +
    "    font-size: 1em; }\n" +
    "  .swal2-popup .swal2-image {\n" +
    "    max-width: 100%;\n" +
    "    margin: 1.25em auto; }\n" +
    "  .swal2-popup .swal2-close {\n" +
    "    position: absolute;\n" +
    "    top: 0;\n" +
    "    right: 0;\n" +
    "    justify-content: center;\n" +
    "    width: 1.2em;\n" +
    "    min-width: 1.2em;\n" +
    "    height: 1.2em;\n" +
    "    margin: 0;\n" +
    "    padding: 0;\n" +
    "    transition: color 0.1s ease-out;\n" +
    "    border: none;\n" +
    "    border-radius: 0;\n" +
    "    background: transparent;\n" +
    "    color: #cccccc;\n" +
    "    font-family: serif;\n" +
    "    font-size: calc(2.5em - 0.25em);\n" +
    "    line-height: 1.2em;\n" +
    "    cursor: pointer; }\n" +
    "    .swal2-popup .swal2-close:hover {\n" +
    "      -webkit-transform: none;\n" +
    "              transform: none;\n" +
    "      color: #f27474; }\n" +
    "  .swal2-popup > .swal2-input,\n" +
    "  .swal2-popup > .swal2-file,\n" +
    "  .swal2-popup > .swal2-textarea,\n" +
    "  .swal2-popup > .swal2-select,\n" +
    "  .swal2-popup > .swal2-radio,\n" +
    "  .swal2-popup > .swal2-checkbox {\n" +
    "    display: none; }\n" +
    "  .swal2-popup .swal2-content {\n" +
    "    justify-content: center;\n" +
    "    margin: 0;\n" +
    "    padding: 0;\n" +
    "    color: #545454;\n" +
    "    font-size: 1.125em;\n" +
    "    font-weight: 300;\n" +
    "    line-height: normal;\n" +
    "    word-wrap: break-word; }\n" +
    "  .swal2-popup #swal2-content {\n" +
    "    text-align: center; }\n" +
    "  .swal2-popup .swal2-input,\n" +
    "  .swal2-popup .swal2-file,\n" +
    "  .swal2-popup .swal2-textarea,\n" +
    "  .swal2-popup .swal2-select,\n" +
    "  .swal2-popup .swal2-radio,\n" +
    "  .swal2-popup .swal2-checkbox {\n" +
    "    margin: 1em auto; }\n" +
    "  .swal2-popup .swal2-input,\n" +
    "  .swal2-popup .swal2-file,\n" +
    "  .swal2-popup .swal2-textarea {\n" +
    "    width: 100%;\n" +
    "    transition: border-color .3s, box-shadow .3s;\n" +
    "    border: 1px solid #d9d9d9;\n" +
    "    border-radius: 0.1875em;\n" +
    "    font-size: 1.125em;\n" +
    "    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n" +
    "    box-sizing: border-box; }\n" +
    "    .swal2-popup .swal2-input.swal2-inputerror,\n" +
    "    .swal2-popup .swal2-file.swal2-inputerror,\n" +
    "    .swal2-popup .swal2-textarea.swal2-inputerror {\n" +
    "      border-color: #f27474 !important;\n" +
    "      box-shadow: 0 0 2px #f27474 !important; }\n" +
    "    .swal2-popup .swal2-input:focus,\n" +
    "    .swal2-popup .swal2-file:focus,\n" +
    "    .swal2-popup .swal2-textarea:focus {\n" +
    "      border: 1px solid #b4dbed;\n" +
    "      outline: none;\n" +
    "      box-shadow: 0 0 3px #c4e6f5; }\n" +
    "    .swal2-popup .swal2-input::-webkit-input-placeholder,\n" +
    "    .swal2-popup .swal2-file::-webkit-input-placeholder,\n" +
    "    .swal2-popup .swal2-textarea::-webkit-input-placeholder {\n" +
    "      color: #cccccc; }\n" +
    "    .swal2-popup .swal2-input:-ms-input-placeholder,\n" +
    "    .swal2-popup .swal2-file:-ms-input-placeholder,\n" +
    "    .swal2-popup .swal2-textarea:-ms-input-placeholder {\n" +
    "      color: #cccccc; }\n" +
    "    .swal2-popup .swal2-input::-ms-input-placeholder,\n" +
    "    .swal2-popup .swal2-file::-ms-input-placeholder,\n" +
    "    .swal2-popup .swal2-textarea::-ms-input-placeholder {\n" +
    "      color: #cccccc; }\n" +
    "    .swal2-popup .swal2-input::placeholder,\n" +
    "    .swal2-popup .swal2-file::placeholder,\n" +
    "    .swal2-popup .swal2-textarea::placeholder {\n" +
    "      color: #cccccc; }\n" +
    "  .swal2-popup .swal2-range input {\n" +
    "    width: 80%; }\n" +
    "  .swal2-popup .swal2-range output {\n" +
    "    width: 20%;\n" +
    "    font-weight: 600;\n" +
    "    text-align: center; }\n" +
    "  .swal2-popup .swal2-range input,\n" +
    "  .swal2-popup .swal2-range output {\n" +
    "    height: 2.625em;\n" +
    "    margin: 1em auto;\n" +
    "    padding: 0;\n" +
    "    font-size: 1.125em;\n" +
    "    line-height: 2.625em; }\n" +
    "  .swal2-popup .swal2-input {\n" +
    "    height: 2.625em;\n" +
    "    padding: 0.75em; }\n" +
    "    .swal2-popup .swal2-input[type='number'] {\n" +
    "      max-width: 10em; }\n" +
    "  .swal2-popup .swal2-file {\n" +
    "    font-size: 1.125em; }\n" +
    "  .swal2-popup .swal2-textarea {\n" +
    "    height: 6.75em;\n" +
    "    padding: 0.75em; }\n" +
    "  .swal2-popup .swal2-select {\n" +
    "    min-width: 50%;\n" +
    "    max-width: 100%;\n" +
    "    padding: .375em .625em;\n" +
    "    color: #545454;\n" +
    "    font-size: 1.125em; }\n" +
    "  .swal2-popup .swal2-radio,\n" +
    "  .swal2-popup .swal2-checkbox {\n" +
    "    align-items: center;\n" +
    "    justify-content: center; }\n" +
    "    .swal2-popup .swal2-radio label,\n" +
    "    .swal2-popup .swal2-checkbox label {\n" +
    "      margin: 0 .6em;\n" +
    "      font-size: 1.125em; }\n" +
    "    .swal2-popup .swal2-radio input,\n" +
    "    .swal2-popup .swal2-checkbox input {\n" +
    "      margin: 0 .4em; }\n" +
    "  .swal2-popup .swal2-validationerror {\n" +
    "    display: none;\n" +
    "    align-items: center;\n" +
    "    justify-content: center;\n" +
    "    padding: 0.625em;\n" +
    "    background: #f0f0f0;\n" +
    "    color: #666666;\n" +
    "    font-size: 1em;\n" +
    "    font-weight: 300;\n" +
    "    overflow: hidden; }\n" +
    "    .swal2-popup .swal2-validationerror::before {\n" +
    "      display: inline-block;\n" +
    "      width: 1.5em;\n" +
    "      height: 1.5em;\n" +
    "      margin: 0 .625em;\n" +
    "      border-radius: 50%;\n" +
    "      background-color: #f27474;\n" +
    "      color: #fff;\n" +
    "      font-weight: 600;\n" +
    "      line-height: 1.5em;\n" +
    "      text-align: center;\n" +
    "      content: '!';\n" +
    "      zoom: normal; }\n" +
    "\n" +
    "@supports (-ms-accelerator: true) {\n" +
    "  .swal2-range input {\n" +
    "    width: 100% !important; }\n" +
    "  .swal2-range output {\n" +
    "    display: none; } }\n" +
    "\n" +
    "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n" +
    "  .swal2-range input {\n" +
    "    width: 100% !important; }\n" +
    "  .swal2-range output {\n" +
    "    display: none; } }\n" +
    "\n" +
    ".swal2-icon {\n" +
    "  position: relative;\n" +
    "  justify-content: center;\n" +
    "  width: 5em;\n" +
    "  height: 5em;\n" +
    "  margin: 1.25em auto 1.875em;\n" +
    "  border: .25em solid transparent;\n" +
    "  border-radius: 50%;\n" +
    "  line-height: 5em;\n" +
    "  cursor: default;\n" +
    "  box-sizing: content-box;\n" +
    "  -webkit-user-select: none;\n" +
    "     -moz-user-select: none;\n" +
    "      -ms-user-select: none;\n" +
    "          user-select: none;\n" +
    "  zoom: normal; }\n" +
    "  .swal2-icon-text {\n" +
    "    font-size: 3.75em; }\n" +
    "  .swal2-icon.swal2-error {\n" +
    "    border-color: #f27474; }\n" +
    "    .swal2-icon.swal2-error .swal2-x-mark {\n" +
    "      position: relative;\n" +
    "      flex-grow: 1; }\n" +
    "    .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n" +
    "      display: block;\n" +
    "      position: absolute;\n" +
    "      top: 2.3125em;\n" +
    "      width: 2.9375em;\n" +
    "      height: .3125em;\n" +
    "      border-radius: .125em;\n" +
    "      background-color: #f27474; }\n" +
    "      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n" +
    "        left: 1.0625em;\n" +
    "        -webkit-transform: rotate(45deg);\n" +
    "                transform: rotate(45deg); }\n" +
    "      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n" +
    "        right: 1em;\n" +
    "        -webkit-transform: rotate(-45deg);\n" +
    "                transform: rotate(-45deg); }\n" +
    "  .swal2-icon.swal2-warning {\n" +
    "    border-color: #facea8;\n" +
    "    color: #f8bb86; }\n" +
    "  .swal2-icon.swal2-info {\n" +
    "    border-color: #9de0f6;\n" +
    "    color: #3fc3ee; }\n" +
    "  .swal2-icon.swal2-question {\n" +
    "    border-color: #c9dae1;\n" +
    "    color: #87adbd; }\n" +
    "  .swal2-icon.swal2-success {\n" +
    "    border-color: #a5dc86; }\n" +
    "    .swal2-icon.swal2-success [class^='swal2-success-circular-line'] {\n" +
    "      position: absolute;\n" +
    "      width: 3.75em;\n" +
    "      height: 7.5em;\n" +
    "      -webkit-transform: rotate(45deg);\n" +
    "              transform: rotate(45deg);\n" +
    "      border-radius: 50%; }\n" +
    "      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n" +
    "        top: -.4375em;\n" +
    "        left: -2.0635em;\n" +
    "        -webkit-transform: rotate(-45deg);\n" +
    "                transform: rotate(-45deg);\n" +
    "        -webkit-transform-origin: 3.75em 3.75em;\n" +
    "                transform-origin: 3.75em 3.75em;\n" +
    "        border-radius: 7.5em 0 0 7.5em; }\n" +
    "      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n" +
    "        top: -.6875em;\n" +
    "        left: 1.875em;\n" +
    "        -webkit-transform: rotate(-45deg);\n" +
    "                transform: rotate(-45deg);\n" +
    "        -webkit-transform-origin: 0 3.75em;\n" +
    "                transform-origin: 0 3.75em;\n" +
    "        border-radius: 0 7.5em 7.5em 0; }\n" +
    "    .swal2-icon.swal2-success .swal2-success-ring {\n" +
    "      position: absolute;\n" +
    "      top: -.25em;\n" +
    "      left: -.25em;\n" +
    "      width: 100%;\n" +
    "      height: 100%;\n" +
    "      border: 0.25em solid rgba(165, 220, 134, 0.3);\n" +
    "      border-radius: 50%;\n" +
    "      z-index: 2;\n" +
    "      box-sizing: content-box; }\n" +
    "    .swal2-icon.swal2-success .swal2-success-fix {\n" +
    "      position: absolute;\n" +
    "      top: .5em;\n" +
    "      left: 1.625em;\n" +
    "      width: .4375em;\n" +
    "      height: 5.625em;\n" +
    "      -webkit-transform: rotate(-45deg);\n" +
    "              transform: rotate(-45deg);\n" +
    "      z-index: 1; }\n" +
    "    .swal2-icon.swal2-success [class^='swal2-success-line'] {\n" +
    "      display: block;\n" +
    "      position: absolute;\n" +
    "      height: .3125em;\n" +
    "      border-radius: .125em;\n" +
    "      background-color: #a5dc86;\n" +
    "      z-index: 2; }\n" +
    "      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {\n" +
    "        top: 2.875em;\n" +
    "        left: .875em;\n" +
    "        width: 1.5625em;\n" +
    "        -webkit-transform: rotate(45deg);\n" +
    "                transform: rotate(45deg); }\n" +
    "      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {\n" +
    "        top: 2.375em;\n" +
    "        right: .5em;\n" +
    "        width: 2.9375em;\n" +
    "        -webkit-transform: rotate(-45deg);\n" +
    "                transform: rotate(-45deg); }\n" +
    "\n" +
    ".swal2-progresssteps {\n" +
    "  align-items: center;\n" +
    "  margin: 0 0 1.25em;\n" +
    "  padding: 0;\n" +
    "  font-weight: 600; }\n" +
    "  .swal2-progresssteps li {\n" +
    "    display: inline-block;\n" +
    "    position: relative; }\n" +
    "  .swal2-progresssteps .swal2-progresscircle {\n" +
    "    width: 2em;\n" +
    "    height: 2em;\n" +
    "    border-radius: 2em;\n" +
    "    background: #3085d6;\n" +
    "    color: #fff;\n" +
    "    line-height: 2em;\n" +
    "    text-align: center;\n" +
    "    z-index: 20; }\n" +
    "    .swal2-progresssteps .swal2-progresscircle:first-child {\n" +
    "      margin-left: 0; }\n" +
    "    .swal2-progresssteps .swal2-progresscircle:last-child {\n" +
    "      margin-right: 0; }\n" +
    "    .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep {\n" +
    "      background: #3085d6; }\n" +
    "      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progresscircle {\n" +
    "        background: #add8e6; }\n" +
    "      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progressline {\n" +
    "        background: #add8e6; }\n" +
    "  .swal2-progresssteps .swal2-progressline {\n" +
    "    width: 2.5em;\n" +
    "    height: .4em;\n" +
    "    margin: 0 -1px;\n" +
    "    background: #3085d6;\n" +
    "    z-index: 10; }\n" +
    "\n" +
    "[class^='swal2'] {\n" +
    "  -webkit-tap-highlight-color: transparent; }\n" +
    "\n" +
    ".swal2-show {\n" +
    "  -webkit-animation: swal2-show 0.3s;\n" +
    "          animation: swal2-show 0.3s; }\n" +
    "  .swal2-show.swal2-noanimation {\n" +
    "    -webkit-animation: none;\n" +
    "            animation: none; }\n" +
    "\n" +
    ".swal2-hide {\n" +
    "  -webkit-animation: swal2-hide 0.15s forwards;\n" +
    "          animation: swal2-hide 0.15s forwards; }\n" +
    "  .swal2-hide.swal2-noanimation {\n" +
    "    -webkit-animation: none;\n" +
    "            animation: none; }\n" +
    "\n" +
    "[dir='rtl'] .swal2-close {\n" +
    "  right: auto;\n" +
    "  left: 0; }\n" +
    "\n" +
    ".swal2-animate-success-icon .swal2-success-line-tip {\n" +
    "  -webkit-animation: swal2-animate-success-line-tip 0.75s;\n" +
    "          animation: swal2-animate-success-line-tip 0.75s; }\n" +
    "\n" +
    ".swal2-animate-success-icon .swal2-success-line-long {\n" +
    "  -webkit-animation: swal2-animate-success-line-long 0.75s;\n" +
    "          animation: swal2-animate-success-line-long 0.75s; }\n" +
    "\n" +
    ".swal2-animate-success-icon .swal2-success-circular-line-right {\n" +
    "  -webkit-animation: swal2-rotate-success-circular-line 4.25s ease-in;\n" +
    "          animation: swal2-rotate-success-circular-line 4.25s ease-in; }\n" +
    "\n" +
    ".swal2-animate-error-icon {\n" +
    "  -webkit-animation: swal2-animate-error-icon 0.5s;\n" +
    "          animation: swal2-animate-error-icon 0.5s; }\n" +
    "  .swal2-animate-error-icon .swal2-x-mark {\n" +
    "    -webkit-animation: swal2-animate-error-x-mark 0.5s;\n" +
    "            animation: swal2-animate-error-x-mark 0.5s; }\n" +
    "\n" +
    "@-webkit-keyframes swal2-rotate-loading {\n" +
    "  0% {\n" +
    "    -webkit-transform: rotate(0deg);\n" +
    "            transform: rotate(0deg); }\n" +
    "  100% {\n" +
    "    -webkit-transform: rotate(360deg);\n" +
    "            transform: rotate(360deg); } }\n" +
    "\n" +
    "@keyframes swal2-rotate-loading {\n" +
    "  0% {\n" +
    "    -webkit-transform: rotate(0deg);\n" +
    "            transform: rotate(0deg); }\n" +
    "  100% {\n" +
    "    -webkit-transform: rotate(360deg);\n" +
    "            transform: rotate(360deg); } }");
    
    /***/ }),
    /* 51 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    //
    //
    //
    //
    
    /* harmony default export */ __webpack_exports__["default"] = ({
        computed: {
            uniqId: function uniqId() {
                return 'map-' + Math.floor(Math.random() * 1000000);
            },
            uniqSelector: function uniqSelector() {
                return '#' + this.uniqId;
            },
            mapStyle: function mapStyle() {
                return [];
            }
        },
        data: function data() {
            return {
                gmap: false,
                gMarkers: [],
                markers: [],
                geocoder: false,
                zipcode: false,
                userLocation: false
            };
        },
    
        mixins: [__webpack_require__(52)],
        methods: {
            drawMap: function drawMap() {
                this.gmap = new google.maps.Map($(this.uniqSelector)[0], {
                    zoom: 12,
                    zoomControl: false,
                    scaleControl: false,
                    scrollwheel: false,
                    disableDoubleClickZoom: true,
                    styles: this.mapStyle,
                    center: new google.maps.LatLng(-23.5470756728648, -46.598787313327186)
                });
            },
            drawMarkers: function drawMarkers() {
                for (var i in this.markers) {
                    this.gMarkers[i] = this.createMarker(this.gmap, this.markers[i]);
                }
            },
            changeZipcode: function changeZipcode(zipcode) {
                var _this = this;
    
                zipcode = zipcode || '';
                this.geocoder.geocode({ address: zipcode }, function (results) {
                    if (!results[0]) {
                        swal('Erro', 'Cep nÃ£o encontrado', 'warning');
                        return false;
                    }
                    _this.zipcode = zipcode;
                    _this.gmap.setCenter(results[0].geometry.location);
                    _this.userLocation = results[0];
                });
            }
        },
        mounted: function mounted() {
            this.drawMap();
            this.drawMarkers();
            this.geocoder = new google.maps.Geocoder();
        }
    });
    
    /***/ }),
    /* 52 */
    /***/ (function(module, exports, __webpack_require__) {
    
    var disposed = false
    var normalizeComponent = __webpack_require__(1)
    /* script */
    var __vue_script__ = __webpack_require__(53)
    /* template */
    var __vue_template__ = null
    /* template functional */
    var __vue_template_functional__ = false
    /* styles */
    var __vue_styles__ = null
    /* scopeId */
    var __vue_scopeId__ = null
    /* moduleIdentifier (server only) */
    var __vue_module_identifier__ = null
    var Component = normalizeComponent(
      __vue_script__,
      __vue_template__,
      __vue_template_functional__,
      __vue_styles__,
      __vue_scopeId__,
      __vue_module_identifier__
    )
    Component.options.__file = "resources/assets/website/js/components/Map/mixins/MapMarkerMixin.vue"
    
    /* hot reload */
    if (false) {(function () {
      var hotAPI = require("vue-hot-reload-api")
      hotAPI.install(require("vue"), false)
      if (!hotAPI.compatible) return
      module.hot.accept()
      if (!module.hot.data) {
        hotAPI.createRecord("data-v-0265709a", Component.options)
      } else {
        hotAPI.reload("data-v-0265709a", Component.options)
      }
      module.hot.dispose(function (data) {
        disposed = true
      })
    })()}
    
    module.exports = Component.exports
    
    
    /***/ }),
    /* 53 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    
    /* harmony default export */ __webpack_exports__["default"] = ({
        methods: {
            createWindowTemplate: function createWindowTemplate(marker) {
                var directionLink = 'https://www.google.com/maps/dir/?api=1&destination=' + marker.address + ',\n                ' + marker.number + ', ' + marker.city + ', ' + marker.neighborhood + ', ' + marker.state + ', ' + marker.lat + ', ' + marker.lng;
    
                if (this.userLocation) directionLink += '&origin=' + this.userLocation.formatted_address;
    
                directionLink = encodeURI(directionLink);
    
                var content = '<p>' + marker.address + ', ' + marker.number + '<br />' + marker.neighborhood + ', ' + marker.city + '<br />\n                    CEP: ' + marker.zipcode + '<br /><b>Tel. ' + marker.phone_main + '</b></p>\n                    <a href="' + directionLink + '" target="_blank" class="btn-como-chegar">como chegar</a>';
    
                //                if(!marker.image)
                return '<section class="custom-content" style="padding-top: 0;"><h1 class="custom-header">' + marker.description + '</h1>\n                        <div class="custom-body">' + content + '</div></section>';
    
                //                return `<div class="custom-img" style="background-image: url(${marker.image})"></div>
                //                        <section class="custom-content"><h1 class="custom-header">${marker.name}</h1>
                //                        <div class="custom-body">${content}</div></section>`;
            },
            createWindowInfo: function createWindowInfo(gmarker, marker) {
                var info = null;
                var closeDelayed = false;
                var closeDelayHandler = function closeDelayHandler() {
                    $(info.getWrapper()).removeClass('active');
                    setTimeout(function () {
                        closeDelayed = true;
                        info.close();
                    }, 300);
                };
    
                // Add a Snazzy Info Window to the marker
                info = new SnazzyInfoWindow({
                    marker: gmarker,
                    wrapperClass: 'custom-window',
                    closeWhenOthersOpen: true,
                    offset: {
                        top: '-72px'
                    },
                    edgeOffset: {
                        top: 50,
                        right: 60,
                        bottom: 50
                    },
                    border: false,
                    closeButtonMarkup: '<button type="button" class="custom-close">&#215;</button>',
                    content: this.createWindowTemplate(marker),
                    callbacks: {
                        open: function open() {
                            $(this.getWrapper()).addClass('open');
                        },
                        afterOpen: function afterOpen() {
                            var wrapper = $(this.getWrapper());
                            wrapper.addClass('active');
                            wrapper.find('.custom-close').on('click', closeDelayHandler);
                        },
                        beforeClose: function beforeClose() {
                            if (!closeDelayed) {
                                closeDelayHandler();
                                return false;
                            }
                            return true;
                        },
                        afterClose: function afterClose() {
                            var wrapper = $(this.getWrapper());
                            wrapper.find('.custom-close').off();
                            wrapper.removeClass('open');
                            closeDelayed = false;
                        }
                    }
                });
                info.open();
            },
            createMarker: function createMarker(map, marker) {
                var _this = this;
    
                var gmarker = new google.maps.Marker({
                    map: map,
                    icon: '/assets/website/images/pin-maps.png',
                    position: new google.maps.LatLng(marker.lat, marker.lng)
                });
                gmarker.addListener('click', function () {
                    _this.createWindowInfo(gmarker, marker);
                });
                return gmarker;
            }
        }
    });
    
    /***/ }),
    /* 54 */
    /***/ (function(module, exports, __webpack_require__) {
    
    var render = function() {
      var _vm = this
      var _h = _vm.$createElement
      var _c = _vm._self._c || _h
      return _c("div", { staticClass: "map-canvas", attrs: { id: _vm.uniqId } })
    }
    var staticRenderFns = []
    render._withStripped = true
    module.exports = { render: render, staticRenderFns: staticRenderFns }
    if (false) {
      module.hot.accept()
      if (module.hot.data) {
        require("vue-hot-reload-api")      .rerender("data-v-e0843a10", module.exports)
      }
    }
    
    /***/ }),
    /* 55 */
    /***/ (function(module, exports, __webpack_require__) {
    
    var disposed = false
    var normalizeComponent = __webpack_require__(1)
    /* script */
    var __vue_script__ = __webpack_require__(56)
    /* template */
    var __vue_template__ = __webpack_require__(64)
    /* template functional */
    var __vue_template_functional__ = false
    /* styles */
    var __vue_styles__ = null
    /* scopeId */
    var __vue_scopeId__ = null
    /* moduleIdentifier (server only) */
    var __vue_module_identifier__ = null
    var Component = normalizeComponent(
      __vue_script__,
      __vue_template__,
      __vue_template_functional__,
      __vue_styles__,
      __vue_scopeId__,
      __vue_module_identifier__
    )
    Component.options.__file = "resources/assets/website/js/components/Map/FranchisesMapComponent.vue"
    
    /* hot reload */
    if (false) {(function () {
      var hotAPI = require("vue-hot-reload-api")
      hotAPI.install(require("vue"), false)
      if (!hotAPI.compatible) return
      module.hot.accept()
      if (!module.hot.data) {
        hotAPI.createRecord("data-v-f04a0f96", Component.options)
      } else {
        hotAPI.reload("data-v-f04a0f96", Component.options)
      }
      module.hot.dispose(function (data) {
        disposed = true
      })
    })()}
    
    module.exports = Component.exports
    
    
    /***/ }),
    /* 56 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    //
    //
    //
    //
    //
    //
    
    /* harmony default export */ __webpack_exports__["default"] = ({
        extends: __webpack_require__(36),
        components: {
            'zipcode-search': __webpack_require__(57)
        },
        mixins: [__webpack_require__(60), __webpack_require__(62)]
    });
    
    /***/ }),
    /* 57 */
    /***/ (function(module, exports, __webpack_require__) {
    
    var disposed = false
    var normalizeComponent = __webpack_require__(1)
    /* script */
    var __vue_script__ = __webpack_require__(58)
    /* template */
    var __vue_template__ = __webpack_require__(59)
    /* template functional */
    var __vue_template_functional__ = false
    /* styles */
    var __vue_styles__ = null
    /* scopeId */
    var __vue_scopeId__ = null
    /* moduleIdentifier (server only) */
    var __vue_module_identifier__ = null
    var Component = normalizeComponent(
      __vue_script__,
      __vue_template__,
      __vue_template_functional__,
      __vue_styles__,
      __vue_scopeId__,
      __vue_module_identifier__
    )
    Component.options.__file = "resources/assets/website/js/components/Franchise/SearchByZipcodeComponent.vue"
    
    /* hot reload */
    if (false) {(function () {
      var hotAPI = require("vue-hot-reload-api")
      hotAPI.install(require("vue"), false)
      if (!hotAPI.compatible) return
      module.hot.accept()
      if (!module.hot.data) {
        hotAPI.createRecord("data-v-689dee0b", Component.options)
      } else {
        hotAPI.reload("data-v-689dee0b", Component.options)
      }
      module.hot.dispose(function (data) {
        disposed = true
      })
    })()}
    
    module.exports = Component.exports
    
    
    /***/ }),
    /* 58 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    
    /* harmony default export */ __webpack_exports__["default"] = ({
        data: function data() {
            return {
                zipcode: ''
            };
        },
    
        methods: {
            emitZipcode: function emitZipcode() {
                this.$emit('newZipcode', this.zipcode);
            }
        }
    });
    
    /***/ }),
    /* 59 */
    /***/ (function(module, exports, __webpack_require__) {
    
    var render = function() {
      var _vm = this
      var _h = _vm.$createElement
      var _c = _vm._self._c || _h
      return _c("section", { staticClass: "wrap-maps" }, [
        _c("div", { staticClass: "wrap-next-you" }, [
          _c("div", { staticClass: "grid1015" }, [
            _c("h3", { staticClass: "next-you" }, [_vm._v("PrÃ³ximos a vocÃª")]),
            _vm._v(" "),
            _c("form", { attrs: { action: "" } }, [
              _c("label", { attrs: { for: "" } }, [_vm._v("Seu CEP:")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.lazy",
                    value: _vm.zipcode,
                    expression: "zipcode",
                    modifiers: { lazy: true }
                  }
                ],
                staticClass: "ipt-text-cep",
                attrs: { type: "text", name: "zipcode", placeholder: "_____-___" },
                domProps: { value: _vm.zipcode },
                on: {
                  change: function($event) {
                    _vm.zipcode = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "link-class",
                  attrs: {
                    href: "http://www.buscacep.correios.com.br/sistemas/buscacep",
                    target: "_blank"
                  }
                },
                [_vm._v("nÃ£o sei meu CEP")]
              ),
              _vm._v(" "),
              _c("input", {
                staticClass:
                  "ipt-text-buscar btn-default border-blue remake-search",
                attrs: { type: "button", value: "BUSCAR" },
                on: { click: this.emitZipcode }
              })
            ])
          ])
        ])
      ])
    }
    var staticRenderFns = []
    render._withStripped = true
    module.exports = { render: render, staticRenderFns: staticRenderFns }
    if (false) {
      module.hot.accept()
      if (module.hot.data) {
        require("vue-hot-reload-api")      .rerender("data-v-689dee0b", module.exports)
      }
    }
    
    /***/ }),
    /* 60 */
    /***/ (function(module, exports, __webpack_require__) {
    
    var disposed = false
    var normalizeComponent = __webpack_require__(1)
    /* script */
    var __vue_script__ = __webpack_require__(61)
    /* template */
    var __vue_template__ = null
    /* template functional */
    var __vue_template_functional__ = false
    /* styles */
    var __vue_styles__ = null
    /* scopeId */
    var __vue_scopeId__ = null
    /* moduleIdentifier (server only) */
    var __vue_module_identifier__ = null
    var Component = normalizeComponent(
      __vue_script__,
      __vue_template__,
      __vue_template_functional__,
      __vue_styles__,
      __vue_scopeId__,
      __vue_module_identifier__
    )
    Component.options.__file = "resources/assets/website/js/components/Map/mixins/SnazzyMapStyleMixin.vue"
    
    /* hot reload */
    if (false) {(function () {
      var hotAPI = require("vue-hot-reload-api")
      hotAPI.install(require("vue"), false)
      if (!hotAPI.compatible) return
      module.hot.accept()
      if (!module.hot.data) {
        hotAPI.createRecord("data-v-429976da", Component.options)
      } else {
        hotAPI.reload("data-v-429976da", Component.options)
      }
      module.hot.dispose(function (data) {
        disposed = true
      })
    })()}
    
    module.exports = Component.exports
    
    
    /***/ }),
    /* 61 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    
    /* harmony default export */ __webpack_exports__["default"] = ({
        computed: {
            mapStyle: function mapStyle() {
                return [{
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "saturation": "15"
                    }, {
                        "color": "#006e82"
                    }, {
                        "lightness": "13"
                    }, {
                        "gamma": "1.00"
                    }, {
                        "weight": "1.00"
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "weight": "2.29"
                    }, {
                        "color": "#ffffff"
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }, {
                        "hue": "#0090ff"
                    }, {
                        "saturation": "0"
                    }, {
                        "lightness": "0"
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#e1dcd5"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#e1dcd5"
                    }, {
                        "lightness": 17
                    }, {
                        "weight": 1.2
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e1dcd5"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e1dcd5"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "featureType": "poi.business",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "hue": "#00faff"
                    }, {
                        "lightness": "0"
                    }, {
                        "gamma": "1"
                    }, {
                        "saturation": "0"
                    }, {
                        "weight": "0"
                    }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dcd5cb"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 29
                    }, {
                        "weight": 0.2
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 18
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f2f2f2"
                    }, {
                        "lightness": 19
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#c5bbae"
                    }, {
                        "lightness": 17
                    }]
                }];
            }
        }
    });
    
    /***/ }),
    /* 62 */
    /***/ (function(module, exports, __webpack_require__) {
    
    var disposed = false
    var normalizeComponent = __webpack_require__(1)
    /* script */
    var __vue_script__ = __webpack_require__(63)
    /* template */
    var __vue_template__ = null
    /* template functional */
    var __vue_template_functional__ = false
    /* styles */
    var __vue_styles__ = null
    /* scopeId */
    var __vue_scopeId__ = null
    /* moduleIdentifier (server only) */
    var __vue_module_identifier__ = null
    var Component = normalizeComponent(
      __vue_script__,
      __vue_template__,
      __vue_template_functional__,
      __vue_styles__,
      __vue_scopeId__,
      __vue_module_identifier__
    )
    Component.options.__file = "resources/assets/website/js/components/Map/mixins/FranchiseLoaderMixin.vue"
    
    /* hot reload */
    if (false) {(function () {
      var hotAPI = require("vue-hot-reload-api")
      hotAPI.install(require("vue"), false)
      if (!hotAPI.compatible) return
      module.hot.accept()
      if (!module.hot.data) {
        hotAPI.createRecord("data-v-76027340", Component.options)
      } else {
        hotAPI.reload("data-v-76027340", Component.options)
      }
      module.hot.dispose(function (data) {
        disposed = true
      })
    })()}
    
    module.exports = Component.exports
    
    
    /***/ }),
    /* 63 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(11);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
    
    
    /* harmony default export */ __webpack_exports__["default"] = ({
        data: function data() {
            return {
                franchise_ids: []
            };
        },
    
        methods: {
            pushFranchise: function pushFranchise(franchise) {
                this.franchise_ids.push(franchise.id);
                this.markers.push(franchise);
            },
            loadFranchises: function loadFranchises(location) {
                var _this = this;
    
                __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/franquias/mapa', location).then(function (response) {
                    var franchises = response.data.filter(function (f) {
                        return !_this.franchise_ids.includes(f.id);
                    });
    
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;
    
                    try {
                        for (var _iterator = franchises[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var f = _step.value;
    
                            _this.pushFranchise(f);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
    
                    _this.drawMarkers();
                });
            }
        },
        mounted: function mounted() {
            var _this2 = this;
    
            google.maps.event.addListener(this.gmap, 'idle', function () {
                var bounds = _this2.gmap.getBounds().toJSON();
                //                console.log('zoom', this.gmap.getZoom());
                //                console.log('center', this.gmap.getCenter().toJSON());
                //                console.log('bounds', bounds);
                _this2.loadFranchises({
                    lat: {
                        min: bounds.south,
                        max: bounds.north
                    },
                    lng: {
                        min: bounds.west,
                        max: bounds.east
                    }
                });
            });
        }
    });
    
    /***/ }),
    /* 64 */
    /***/ (function(module, exports, __webpack_require__) {
    
    var render = function() {
      var _vm = this
      var _h = _vm.$createElement
      var _c = _vm._self._c || _h
      return _c(
        "div",
        [
          _c("zipcode-search", { on: { newZipcode: _vm.changeZipcode } }),
          _vm._v(" "),
          _c("div", { staticClass: "map-canvas", attrs: { id: _vm.uniqId } })
        ],
        1
      )
    }
    var staticRenderFns = []
    render._withStripped = true
    module.exports = { render: render, staticRenderFns: staticRenderFns }
    if (false) {
      module.hot.accept()
      if (module.hot.data) {
        require("vue-hot-reload-api")      .rerender("data-v-f04a0f96", module.exports)
      }
    }
    
    /***/ }),
    /* 65 */
    /***/ (function(module, exports, __webpack_require__) {
    
    var disposed = false
    function injectStyle (ssrContext) {
      if (disposed) return
      __webpack_require__(66)
    }
    var normalizeComponent = __webpack_require__(1)
    /* script */
    var __vue_script__ = __webpack_require__(68)
    /* template */
    var __vue_template__ = __webpack_require__(69)
    /* template functional */
    var __vue_template_functional__ = false
    /* styles */
    var __vue_styles__ = injectStyle
    /* scopeId */
    var __vue_scopeId__ = "data-v-1492784c"
    /* moduleIdentifier (server only) */
    var __vue_module_identifier__ = null
    var Component = normalizeComponent(
      __vue_script__,
      __vue_template__,
      __vue_template_functional__,
      __vue_styles__,
      __vue_scopeId__,
      __vue_module_identifier__
    )
    Component.options.__file = "resources/assets/website/js/components/Posts/PostsList.vue"
    
    /* hot reload */
    if (false) {(function () {
      var hotAPI = require("vue-hot-reload-api")
      hotAPI.install(require("vue"), false)
      if (!hotAPI.compatible) return
      module.hot.accept()
      if (!module.hot.data) {
        hotAPI.createRecord("data-v-1492784c", Component.options)
      } else {
        hotAPI.reload("data-v-1492784c", Component.options)
      }
      module.hot.dispose(function (data) {
        disposed = true
      })
    })()}
    
    module.exports = Component.exports
    
    
    /***/ }),
    /* 66 */
    /***/ (function(module, exports, __webpack_require__) {
    
    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(67);
    if(typeof content === 'string') content = [[module.i, content, '']];
    if(content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(34)("33281524", content, false);
    // Hot Module Replacement
    if(false) {
     // When the styles change, update the <style> tags
     if(!content.locals) {
       module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1492784c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./PostsList.vue", function() {
         var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1492784c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./PostsList.vue");
         if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
         update(newContent);
       });
     }
     // When the module is disposed, remove the <style> tags
     module.hot.dispose(function() { update(); });
    }
    
    /***/ }),
    /* 67 */
    /***/ (function(module, exports, __webpack_require__) {
    
    exports = module.exports = __webpack_require__(33)(undefined);
    // imports
    
    
    // module
    exports.push([module.i, "\n.no-items[data-v-1492784c] {\n    width: 100%;\n    height: 400px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    font-size: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n", ""]);
    
    // exports
    
    
    /***/ }),
    /* 68 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
    
    function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
    
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    
    /* harmony default export */ __webpack_exports__["default"] = ({
        props: ['initialData', 'title'],
        data: function data() {
            return {
                data: this.initialData,
                type: "events",
                loading: false
            };
        },
    
    
        methods: {
            fetch: function fetch() {
                var _this = this;
    
                this.loading = true;
    
                console.log("TESTE!");
                console.log(this.data);
    
                axios.get(this.data.next_page_url).then(function (response) {
                    _this.loading = false;
                    _this.data = _extends({}, response.data, {
                        data: [].concat(_toConsumableArray(_this.data.data.concat(response.data.data)))
                    });
                });
            }
        },
    
        computed: {
            buttonTitle: function buttonTitle() {
                return this.loading ? 'Carregando...' : this.title;
            }
        }
    });
    
    /***/ }),
    /* 69 */
    /***/ (function(module, exports, __webpack_require__) {
    
    var render = function() {
      var _vm = this
      var _h = _vm.$createElement
      var _c = _vm._self._c || _h
      return _c("div", [
        _c(
          "ul",
          { staticClass: "grid1240" },
          _vm._l(_vm.data.data, function(post) {
            return _c("li", [
              _c("div", { staticClass: "list-news" }, [
                post.type == _vm.type
                  ? _c("div", { staticClass: "txt-list-news txt-white" }, [
                      post.pdf == null
                        ? _c("a", [
                            _c("div", { staticClass: "wrap-img" }, [
                              _c("img", {
                                attrs: {
                                  src: post.image.conversions.thumb.url,
                                  alt: ""
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("h2", [_vm._v(_vm._s(post.title))]),
                            _vm._v(" "),
                            _c("p", [_vm._v(_vm._s(post.short_description))])
                          ])
                        : _c(
                            "a",
                            { attrs: { href: post.pdf.url, target: "_blank" } },
                            [
                              _c("div", { staticClass: "wrap-img" }, [
                                _c("img", {
                                  attrs: {
                                    src: post.image.conversions.thumb.url,
                                    alt: ""
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("h2", [_vm._v(_vm._s(post.title))]),
                              _vm._v(" "),
                              _c("p", [_vm._v(_vm._s(post.short_description))]),
                              _vm._v(" "),
                              _vm._m(0, true)
                            ]
                          )
                    ])
                  : _c("div", { staticClass: "txt-list-news txt-white" }, [
                      _c("a", { attrs: { href: post.pdf.url, target: "_blank" } }, [
                        _c("div", { staticClass: "wrap-img" }, [
                          _c("img", {
                            attrs: {
                              src: post.image.conversions.thumb.url,
                              alt: ""
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("time", [_vm._v(_vm._s(post.created_at_formatted))]),
                        _vm._v(" "),
                        _c("h2", [_vm._v(_vm._s(post.title))]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(post.short_description))]),
                        _vm._v(" "),
                        _vm._m(1, true)
                      ])
                    ])
              ])
            ])
          })
        ),
        _vm._v(" "),
        _vm.data.data.length === 0
          ? _c("div", { staticClass: "no-items" }, [
              _vm._v("\n        Nenhum item encontrado.\n    ")
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.data.has_more_pages
          ? _c("div", { staticClass: "grid1240" }, [
              _c(
                "a",
                {
                  staticClass: "btn-default-transparent",
                  attrs: { href: "javascript:void(0);", target: "_blank" },
                  on: { click: _vm.fetch }
                },
                [_vm._v(_vm._s(_vm.buttonTitle))]
              )
            ])
          : _vm._e()
      ])
    }
    var staticRenderFns = [
      function() {
        var _vm = this
        var _h = _vm.$createElement
        var _c = _vm._self._c || _h
        return _c("span", [
          _c("i", { staticClass: "bt-download" }),
          _vm._v("Abrir PDF")
        ])
      },
      function() {
        var _vm = this
        var _h = _vm.$createElement
        var _c = _vm._self._c || _h
        return _c("span", [
          _c("i", { staticClass: "bt-download" }),
          _vm._v("Abrir PDF")
        ])
      }
    ]
    render._withStripped = true
    module.exports = { render: render, staticRenderFns: staticRenderFns }
    if (false) {
      module.hot.accept()
      if (module.hot.data) {
        require("vue-hot-reload-api")      .rerender("data-v-1492784c", module.exports)
      }
    }
    
    /***/ }),
    /* 70 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    /*!
     * vuejs-datepicker v1.5.2
     * (c) 2016-2018 Charlie Kassel
     * Released under the MIT License.
     */
    var Language = function Language (language, months, monthsAbbr, days) {
      this.language = language;
      this.months = months;
      this.monthsAbbr = monthsAbbr;
      this.days = days;
      this.rtl = false;
      this.ymd = false;
      this.yearSuffix = '';
    };
    
    var prototypeAccessors = { language: { configurable: true },months: { configurable: true },monthsAbbr: { configurable: true },days: { configurable: true } };
    
    prototypeAccessors.language.get = function () {
      return this._language
    };
    
    prototypeAccessors.language.set = function (language) {
      if (typeof language !== 'string') {
        throw new TypeError('Language must be a string')
      }
      this._language = language;
    };
    
    prototypeAccessors.months.get = function () {
      return this._months
    };
    
    prototypeAccessors.months.set = function (months) {
      if (months.length !== 12) {
        throw new RangeError(("There must be 12 months for " + (this.language) + " language"))
      }
      this._months = months;
    };
    
    prototypeAccessors.monthsAbbr.get = function () {
      return this._monthsAbbr
    };
    
    prototypeAccessors.monthsAbbr.set = function (monthsAbbr) {
      if (monthsAbbr.length !== 12) {
        throw new RangeError(("There must be 12 abbreviated months for " + (this.language) + " language"))
      }
      this._monthsAbbr = monthsAbbr;
    };
    
    prototypeAccessors.days.get = function () {
      return this._days
    };
    
    prototypeAccessors.days.set = function (days) {
      if (days.length !== 7) {
        throw new RangeError(("There must be 7 days for " + (this.language) + " language"))
      }
      this._days = days;
    };
    
    Object.defineProperties( Language.prototype, prototypeAccessors );
    
    var en = new Language(
      'English',
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    )
    // eslint-disable-next-line
    ;
    
    var utils = {
      /**
       * @type {Boolean}
       */
      useUtc: false,
      /**
       * Returns the full year, using UTC or not
       * @param {Date} date
       */
      getFullYear: function getFullYear (date) {
        return this.useUtc ? date.getUTCFullYear() : date.getFullYear()
      },
    
      /**
       * Returns the month, using UTC or not
       * @param {Date} date
       */
      getMonth: function getMonth (date) {
        return this.useUtc ? date.getUTCMonth() : date.getMonth()
      },
    
      /**
       * Returns the date, using UTC or not
       * @param {Date} date
       */
      getDate: function getDate (date) {
        return this.useUtc ? date.getUTCDate() : date.getDate()
      },
    
      /**
       * Returns the day, using UTC or not
       * @param {Date} date
       */
      getDay: function getDay (date) {
        return this.useUtc ? date.getUTCDay() : date.getDay()
      },
    
      /**
       * Returns the hours, using UTC or not
       * @param {Date} date
       */
      getHours: function getHours (date) {
        return this.useUtc ? date.getUTCHours() : date.getHours()
      },
    
      /**
       * Returns the minutes, using UTC or not
       * @param {Date} date
       */
      getMinutes: function getMinutes (date) {
        return this.useUtc ? date.getUTCMinutes() : date.getMinutes()
      },
    
      /**
       * Sets the full year, using UTC or not
       * @param {Date} date
       */
      setFullYear: function setFullYear (date, value, useUtc) {
        return this.useUtc ? date.setUTCFullYear(value) : date.setFullYear(value)
      },
    
      /**
       * Sets the month, using UTC or not
       * @param {Date} date
       */
      setMonth: function setMonth (date, value, useUtc) {
        return this.useUtc ? date.setUTCMonth(value) : date.setMonth(value)
      },
    
      /**
       * Sets the date, using UTC or not
       * @param {Date} date
       * @param {Number} value
       */
      setDate: function setDate (date, value, useUtc) {
        return this.useUtc ? date.setUTCDate(value) : date.setDate(value)
      },
    
      /**
       * Check if date1 is equivalent to date2, without comparing the time
       * @see https://stackoverflow.com/a/6202196/4455925
       * @param {Date} date1
       * @param {Date} date2
       */
      compareDates: function compareDates (date1, date2) {
        var d1 = new Date(date1.getTime());
        var d2 = new Date(date2.getTime());
    
        if (this.useUtc) {
          d1.setUTCHours(0, 0, 0, 0);
          d2.setUTCHours(0, 0, 0, 0);
        } else {
          d1.setHours(0, 0, 0, 0);
          d2.setHours(0, 0, 0, 0);
        }
        return d1.getTime() === d2.getTime()
      },
    
      /**
       * Validates a date object
       * @param {Date} date - an object instantiated with the new Date constructor
       * @return {Boolean}
       */
      isValidDate: function isValidDate (date) {
        if (Object.prototype.toString.call(date) !== '[object Date]') {
          return false
        }
        return !isNaN(date.getTime())
      },
    
      /**
       * Return abbreviated week day name
       * @param {Date}
       * @param {Array}
       * @return {String}
       */
      getDayNameAbbr: function getDayNameAbbr (date, days) {
        if (typeof date !== 'object') {
          throw TypeError('Invalid Type')
        }
        return days[this.getDay(date)]
      },
    
      /**
       * Return name of the month
       * @param {Number|Date}
       * @param {Array}
       * @return {String}
       */
      getMonthName: function getMonthName (month, months) {
        if (!months) {
          throw Error('missing 2nd parameter Months array')
        }
        if (typeof month === 'object') {
          return months[this.getMonth(month)]
        }
        if (typeof month === 'number') {
          return months[month]
        }
        throw TypeError('Invalid type')
      },
    
      /**
       * Return an abbreviated version of the month
       * @param {Number|Date}
       * @return {String}
       */
      getMonthNameAbbr: function getMonthNameAbbr (month, monthsAbbr) {
        if (!monthsAbbr) {
          throw Error('missing 2nd paramter Months array')
        }
        if (typeof month === 'object') {
          return monthsAbbr[this.getMonth(month)]
        }
        if (typeof month === 'number') {
          return monthsAbbr[month]
        }
        throw TypeError('Invalid type')
      },
    
      /**
       * Alternative get total number of days in month
       * @param {Number} year
       * @param {Number} m
       * @return {Number}
       */
      daysInMonth: function daysInMonth (year, month) {
        return /8|3|5|10/.test(month) ? 30 : month === 1 ? (!(year % 4) && year % 100) || !(year % 400) ? 29 : 28 : 31
      },
    
      /**
       * Get nth suffix for date
       * @param {Number} day
       * @return {String}
       */
      getNthSuffix: function getNthSuffix (day) {
        switch (day) {
          case 1:
          case 21:
          case 31:
            return 'st'
          case 2:
          case 22:
            return 'nd'
          case 3:
          case 23:
            return 'rd'
          default:
            return 'th'
        }
      },
    
      /**
       * Formats date object
       * @param {Date}
       * @param {String}
       * @param {Object}
       * @return {String}
       */
      formatDate: function formatDate (date, format, translation) {
        translation = (!translation) ? en : translation;
        var year = this.getFullYear(date);
        var month = this.getMonth(date) + 1;
        var day = this.getDate(date);
        var str = format
          .replace(/dd/, ('0' + day).slice(-2))
          .replace(/d/, day)
          .replace(/yyyy/, year)
          .replace(/yy/, String(year).slice(2))
          .replace(/MMMM/, this.getMonthName(this.getMonth(date), translation.months))
          .replace(/MMM/, this.getMonthNameAbbr(this.getMonth(date), translation.monthsAbbr))
          .replace(/MM/, ('0' + month).slice(-2))
          .replace(/M(?!a|Ã¤|e)/, month)
          .replace(/su/, this.getNthSuffix(this.getDate(date)))
          .replace(/D(?!e|Ã©|i)/, this.getDayNameAbbr(date, translation.days));
        return str
      },
    
      /**
       * Creates an array of dates for each day in between two dates.
       * @param {Date} start
       * @param {Date} end
       * @return {Array}
       */
      createDateArray: function createDateArray (start, end) {
        var this$1 = this;
    
        var dates = [];
        while (start <= end) {
          dates.push(new Date(start));
          start = this$1.setDate(new Date(start), this$1.getDate(new Date(start)) + 1);
        }
        return dates
      }
    };
    
    var makeDateUtils = function (useUtc) { return (Object.assign({}, utils, {useUtc: useUtc})); };
    
    Object.assign({}, utils)
    // eslint-disable-next-line
    ;
    
    (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
    var DateInput = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'input-group' : _vm.bootstrapStyling}},[(_vm.calendarButton)?_c('span',{staticClass:"vdp-datepicker__calendar-button",class:{'input-group-prepend' : _vm.bootstrapStyling},style:({'cursor:not-allowed;' : _vm.disabled}),on:{"click":_vm.showCalendar}},[_c('span',{class:{'input-group-text' : _vm.bootstrapStyling}},[_c('i',{class:_vm.calendarButtonIcon},[_vm._v(" "+_vm._s(_vm.calendarButtonIconContent)+" "),(!_vm.calendarButtonIcon)?_c('span',[_vm._v("â€¦")]):_vm._e()])])]):_vm._e(),_vm._v(" "),_c('input',{ref:_vm.refName,class:_vm.computedInputClass,attrs:{"type":_vm.inline ? 'hidden' : 'text',"name":_vm.name,"id":_vm.id,"open-date":_vm.openDate,"placeholder":_vm.placeholder,"clear-button":_vm.clearButton,"disabled":_vm.disabled,"required":_vm.required,"autocomplete":"off"},domProps:{"value":_vm.formattedValue},on:{"click":_vm.showCalendar,"keydown":_vm.allowTyping,"keyup":_vm.parseTypedDate,"blur":_vm.inputBlurred}}),_vm._v(" "),(_vm.clearButton && _vm.selectedDate)?_c('span',{staticClass:"vdp-datepicker__clear-button",class:{'input-group-append' : _vm.bootstrapStyling},on:{"click":function($event){_vm.clearDate();}}},[_c('span',{class:{'input-group-text' : _vm.bootstrapStyling}},[_c('i',{class:_vm.clearButtonIcon},[(!_vm.clearButtonIcon)?_c('span',[_vm._v("Ã—")]):_vm._e()])])]):_vm._e(),_vm._v(" "),_vm._t("afterDateInput")],2)},staticRenderFns: [],
      props: {
        selectedDate: Date,
        resetTypedDate: [Date],
        format: [String, Function],
        translation: Object,
        inline: Boolean,
        id: String,
        name: String,
        refName: String,
        openDate: Date,
        placeholder: String,
        inputClass: [String, Object, Array],
        clearButton: Boolean,
        clearButtonIcon: String,
        calendarButton: Boolean,
        calendarButtonIcon: String,
        calendarButtonIconContent: String,
        disabled: Boolean,
        required: Boolean,
        typeable: Boolean,
        bootstrapStyling: Boolean,
        useUtc: Boolean
      },
      data: function data () {
        var constructedDateUtils = makeDateUtils(this.useUtc);
        return {
          input: null,
          typedDate: false,
          utils: constructedDateUtils
        }
      },
      computed: {
        formattedValue: function formattedValue () {
          if (!this.selectedDate) {
            return null
          }
          if (this.typedDate) {
            return this.typedDate
          }
          return typeof this.format === 'function'
            ? this.format(this.selectedDate)
            : this.utils.formatDate(new Date(this.selectedDate), this.format, this.translation)
        },
    
        computedInputClass: function computedInputClass () {
          if (this.bootstrapStyling) {
            if (typeof this.inputClass === 'string') {
              return [this.inputClass, 'form-control'].join(' ')
            }
            return Object.assign({}, {'form-control': true}, this.inputClass)
          }
          return this.inputClass
        }
      },
      watch: {
        resetTypedDate: function resetTypedDate () {
          this.typedDate = false;
        }
      },
      methods: {
        showCalendar: function showCalendar () {
          this.$emit('showCalendar');
        },
        /**
         * Prevent typing if not typeable
         * @param {Event} event
         * @return {Boolean}
         */
        allowTyping: function allowTyping (event) {
          if (!this.typeable) {
            event.preventDefault();
            return false
          }
          return true
        },
        /**
         * Attempt to parse a typed date
         * @param {Event} event
         */
        parseTypedDate: function parseTypedDate (event) {
          // close calendar if escape or enter are pressed
          if ([
            27, // escape
            13  // enter
          ].includes(event.keyCode)) {
            this.input.blur();
          }
    
          if (this.typeable) {
            var typedDate = Date.parse(this.input.value);
            if (!isNaN(typedDate)) {
              this.typedDate = this.input.value;
              this.$emit('typedDate', new Date(this.typedDate));
            }
          }
        },
        /**
         * nullify the typed date to defer to regular formatting
         * called once the input is blurred
         */
        inputBlurred: function inputBlurred () {
          if (this.typeable && isNaN(Date.parse(this.input.value))) {
            this.clearDate();
            this.input.value = null;
            this.typedDate = null;
          }
    
          this.$emit('closeCalendar');
        },
        /**
         * emit a clearDate event
         */
        clearDate: function clearDate () {
          this.$emit('clearDate');
        }
      },
      mounted: function mounted () {
        this.input = this.$el.querySelector('input');
      }
    }
    // eslint-disable-next-line
    ;
    
    (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
    var PickerDay = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDayView),expression:"showDayView"}],class:[_vm.calendarClass, 'vdp-datepicker__calendar'],style:(_vm.calendarStyle),on:{"mousedown":function($event){$event.preventDefault();}}},[_vm._t("beforeCalendarHeader"),_vm._v(" "),_c('header',[_c('span',{staticClass:"prev",class:{'disabled': _vm.isLeftNavDisabled},on:{"click":function($event){_vm.isRtl ? _vm.nextMonth() : _vm.previousMonth();}}},[_vm._v("<")]),_vm._v(" "),_c('span',{staticClass:"day__month_btn",class:_vm.allowedToShowView('month') ? 'up' : '',on:{"click":_vm.showMonthCalendar}},[_vm._v(_vm._s(_vm.isYmd ? _vm.currYearName : _vm.currMonthName)+" "+_vm._s(_vm.isYmd ? _vm.currMonthName : _vm.currYearName))]),_vm._v(" "),_c('span',{staticClass:"next",class:{'disabled': _vm.isRightNavDisabled},on:{"click":function($event){_vm.isRtl ? _vm.previousMonth() : _vm.nextMonth();}}},[_vm._v(">")])]),_vm._v(" "),_c('div',{class:_vm.isRtl ? 'flex-rtl' : ''},[_vm._l((_vm.daysOfWeek),function(d){return _c('span',{key:d.timestamp,staticClass:"cell day-header"},[_vm._v(_vm._s(d))])}),_vm._v(" "),(_vm.blankDays > 0)?_vm._l((_vm.blankDays),function(d){return _c('span',{key:d.timestamp,staticClass:"cell day blank"})}):_vm._e(),_vm._l((_vm.days),function(day){return _c('span',{key:day.timestamp,staticClass:"cell day",class:_vm.dayClasses(day),domProps:{"innerHTML":_vm._s(_vm.dayCellContent(day))},on:{"click":function($event){_vm.selectDate(day);}}})})],2)],2)},staticRenderFns: [],
      props: {
        showDayView: Boolean,
        selectedDate: Date,
        pageDate: Date,
        pageTimestamp: Number,
        fullMonthName: Boolean,
        allowedToShowView: Function,
        dayCellContent: {
          type: Function,
          default: function (day) { return day.date; }
        },
        disabledDates: Object,
        highlighted: Object,
        calendarClass: [String, Object, Array],
        calendarStyle: Object,
        translation: Object,
        isRtl: Boolean,
        mondayFirst: Boolean,
        useUtc: Boolean
      },
      data: function data () {
        var constructedDateUtils = makeDateUtils(this.useUtc);
        return {
          utils: constructedDateUtils
        }
      },
      computed: {
        /**
         * Returns an array of day names
         * @return {String[]}
         */
        daysOfWeek: function daysOfWeek () {
          if (this.mondayFirst) {
            var tempDays = this.translation.days.slice();
            tempDays.push(tempDays.shift());
            return tempDays
          }
          return this.translation.days
        },
        /**
         * Returns the day number of the week less one for the first of the current month
         * Used to show amount of empty cells before the first in the day calendar layout
         * @return {Number}
         */
        blankDays: function blankDays () {
          var d = this.pageDate;
          var dObj = this.useUtc
            ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1))
            : new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());
          if (this.mondayFirst) {
            return this.utils.getDay(dObj) > 0 ? this.utils.getDay(dObj) - 1 : 6
          }
          return this.utils.getDay(dObj)
        },
        /**
         * @return {Object[]}
         */
        days: function days () {
          var this$1 = this;
    
          var d = this.pageDate;
          var days = [];
          // set up a new date object to the beginning of the current 'page'
          var dObj = this.useUtc
            ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1))
            : new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());
          var daysInMonth = this.utils.daysInMonth(this.utils.getFullYear(dObj), this.utils.getMonth(dObj));
          for (var i = 0; i < daysInMonth; i++) {
            days.push({
              date: this$1.utils.getDate(dObj),
              timestamp: dObj.getTime(),
              isSelected: this$1.isSelectedDate(dObj),
              isDisabled: this$1.isDisabledDate(dObj),
              isHighlighted: this$1.isHighlightedDate(dObj),
              isHighlightStart: this$1.isHighlightStart(dObj),
              isHighlightEnd: this$1.isHighlightEnd(dObj),
              isToday: this$1.utils.compareDates(dObj, new Date()),
              isWeekend: this$1.utils.getDay(dObj) === 0 || this$1.utils.getDay(dObj) === 6,
              isSaturday: this$1.utils.getDay(dObj) === 6,
              isSunday: this$1.utils.getDay(dObj) === 0
            });
            this$1.utils.setDate(dObj, this$1.utils.getDate(dObj) + 1);
          }
          return days
        },
        /**
         * Gets the name of the month the current page is on
         * @return {String}
         */
        currMonthName: function currMonthName () {
          var monthName = this.fullMonthName ? this.translation.months : this.translation.monthsAbbr;
          return this.utils.getMonthNameAbbr(this.utils.getMonth(this.pageDate), monthName)
        },
        /**
         * Gets the name of the year that current page is on
         * @return {Number}
         */
        currYearName: function currYearName () {
          var yearSuffix = this.translation.yearSuffix;
          return ("" + (this.utils.getFullYear(this.pageDate)) + yearSuffix)
        },
        /**
         * Is this translation using year/month/day format?
         * @return {Boolean}
         */
        isYmd: function isYmd () {
          return this.translation.ymd && this.translation.ymd === true
        },
        /**
         * Is the left hand navigation button disabled?
         * @return {Boolean}
         */
        isLeftNavDisabled: function isLeftNavDisabled () {
          return this.isRtl
            ? this.isNextMonthDisabled(this.pageTimestamp)
            : this.isPreviousMonthDisabled(this.pageTimestamp)
        },
        /**
         * Is the right hand navigation button disabled?
         * @return {Boolean}
         */
        isRightNavDisabled: function isRightNavDisabled () {
          return this.isRtl
            ? this.isPreviousMonthDisabled(this.pageTimestamp)
            : this.isNextMonthDisabled(this.pageTimestamp)
        }
      },
      methods: {
        selectDate: function selectDate (date) {
          if (date.isDisabled) {
            this.$emit('selectedDisabled', date);
            return false
          }
          this.$emit('selectDate', date);
        },
        /**
         * @return {Number}
         */
        getPageMonth: function getPageMonth () {
          return this.utils.getMonth(this.pageDate)
        },
        /**
         * Emit an event to show the month picker
         */
        showMonthCalendar: function showMonthCalendar () {
          this.$emit('showMonthCalendar');
        },
        /**
         * Change the page month
         * @param {Number} incrementBy
         */
        changeMonth: function changeMonth (incrementBy) {
          var date = this.pageDate;
          this.utils.setMonth(date, this.utils.getMonth(date) + incrementBy);
          this.$emit('changedMonth', date);
        },
        /**
         * Decrement the page month
         */
        previousMonth: function previousMonth () {
          if (!this.isPreviousMonthDisabled()) {
            this.changeMonth(-1);
          }
        },
        /**
         * Is the previous month disabled?
         * @return {Boolean}
         */
        isPreviousMonthDisabled: function isPreviousMonthDisabled () {
          if (!this.disabledDates || !this.disabledDates.to) {
            return false
          }
          var d = this.pageDate;
          return this.utils.getMonth(this.disabledDates.to) >= this.utils.getMonth(d) &&
            this.utils.getFullYear(this.disabledDates.to) >= this.utils.getFullYear(d)
        },
        /**
         * Increment the current page month
         */
        nextMonth: function nextMonth () {
          if (!this.isNextMonthDisabled()) {
            this.changeMonth(+1);
          }
        },
        /**
         * Is the next month disabled?
         * @return {Boolean}
         */
        isNextMonthDisabled: function isNextMonthDisabled () {
          if (!this.disabledDates || !this.disabledDates.from) {
            return false
          }
          var d = this.pageDate;
          return this.utils.getMonth(this.disabledDates.from) <= this.utils.getMonth(d) &&
            this.utils.getFullYear(this.disabledDates.from) <= this.utils.getFullYear(d)
        },
        /**
         * Whether a day is selected
         * @param {Date}
         * @return {Boolean}
         */
        isSelectedDate: function isSelectedDate (dObj) {
          return this.selectedDate && this.utils.compareDates(this.selectedDate, dObj)
        },
        /**
         * Whether a day is disabled
         * @param {Date}
         * @return {Boolean}
         */
        isDisabledDate: function isDisabledDate (date) {
          var this$1 = this;
    
          var disabledDates = false;
    
          if (typeof this.disabledDates === 'undefined') {
            return false
          }
    
          if (typeof this.disabledDates.dates !== 'undefined') {
            this.disabledDates.dates.forEach(function (d) {
              if (this$1.utils.compareDates(date, d)) {
                disabledDates = true;
                return true
              }
            });
          }
          if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to && date < this.disabledDates.to) {
            disabledDates = true;
          }
          if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from && date > this.disabledDates.from) {
            disabledDates = true;
          }
          if (typeof this.disabledDates.ranges !== 'undefined') {
            this.disabledDates.ranges.forEach(function (range) {
              if (typeof range.from !== 'undefined' && range.from && typeof range.to !== 'undefined' && range.to) {
                if (date < range.to && date > range.from) {
                  disabledDates = true;
                  return true
                }
              }
            });
          }
          if (typeof this.disabledDates.days !== 'undefined' && this.disabledDates.days.indexOf(this.utils.getDay(date)) !== -1) {
            disabledDates = true;
          }
          if (typeof this.disabledDates.daysOfMonth !== 'undefined' && this.disabledDates.daysOfMonth.indexOf(this.utils.getDate(date)) !== -1) {
            disabledDates = true;
          }
          if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
            disabledDates = true;
          }
          return disabledDates
        },
        /**
         * Whether a day is highlighted (only if it is not disabled already except when highlighted.includeDisabled is true)
         * @param {Date}
         * @return {Boolean}
         */
        isHighlightedDate: function isHighlightedDate (date) {
          var this$1 = this;
    
          if (!(this.highlighted && this.highlighted.includeDisabled) && this.isDisabledDate(date)) {
            return false
          }
    
          var highlighted = false;
    
          if (typeof this.highlighted === 'undefined') {
            return false
          }
    
          if (typeof this.highlighted.dates !== 'undefined') {
            this.highlighted.dates.forEach(function (d) {
              if (this$1.utils.compareDates(date, d)) {
                highlighted = true;
                return true
              }
            });
          }
    
          if (this.isDefined(this.highlighted.from) && this.isDefined(this.highlighted.to)) {
            highlighted = date >= this.highlighted.from && date <= this.highlighted.to;
          }
    
          if (typeof this.highlighted.days !== 'undefined' && this.highlighted.days.indexOf(this.utils.getDay(date)) !== -1) {
            highlighted = true;
          }
    
          if (typeof this.highlighted.daysOfMonth !== 'undefined' && this.highlighted.daysOfMonth.indexOf(this.utils.getDate(date)) !== -1) {
            highlighted = true;
          }
    
          if (typeof this.highlighted.customPredictor === 'function' && this.highlighted.customPredictor(date)) {
            highlighted = true;
          }
    
          return highlighted
        },
        dayClasses: function dayClasses (day) {
          return {
            'selected': day.isSelected,
            'disabled': day.isDisabled,
            'highlighted': day.isHighlighted,
            'today': day.isToday,
            'weekend': day.isWeekend,
            'sat': day.isSaturday,
            'sun': day.isSunday,
            'highlight-start': day.isHighlightStart,
            'highlight-end': day.isHighlightEnd
          }
        },
        /**
         * Whether a day is highlighted and it is the first date
         * in the highlighted range of dates
         * @param {Date}
         * @return {Boolean}
         */
        isHighlightStart: function isHighlightStart (date) {
          return this.isHighlightedDate(date) &&
            (this.highlighted.from instanceof Date) &&
            (this.utils.getFullYear(this.highlighted.from) === this.utils.getFullYear(date)) &&
            (this.utils.getMonth(this.highlighted.from) === this.utils.getMonth(date)) &&
            (this.utils.getDate(this.highlighted.from) === this.utils.getDate(date))
        },
        /**
         * Whether a day is highlighted and it is the first date
         * in the highlighted range of dates
         * @param {Date}
         * @return {Boolean}
         */
        isHighlightEnd: function isHighlightEnd (date) {
          return this.isHighlightedDate(date) &&
            (this.highlighted.to instanceof Date) &&
            (this.utils.getFullYear(this.highlighted.to) === this.utils.getFullYear(date)) &&
            (this.utils.getMonth(this.highlighted.to) === this.utils.getMonth(date)) &&
            (this.utils.getDate(this.highlighted.to) === this.utils.getDate(date))
        },
        /**
         * Helper
         * @param  {mixed}  prop
         * @return {Boolean}
         */
        isDefined: function isDefined (prop) {
          return typeof prop !== 'undefined' && prop
        }
      }
    }
    // eslint-disable-next-line
    ;
    
    (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
    var PickerMonth = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showMonthView),expression:"showMonthView"}],class:[_vm.calendarClass, 'vdp-datepicker__calendar'],style:(_vm.calendarStyle),on:{"mousedown":function($event){$event.preventDefault();}}},[_vm._t("beforeCalendarHeader"),_vm._v(" "),_c('header',[_c('span',{staticClass:"prev",class:{'disabled': _vm.isLeftNavDisabled},on:{"click":function($event){_vm.isRtl ? _vm.nextYear() : _vm.previousYear();}}},[_vm._v("<")]),_vm._v(" "),_c('span',{staticClass:"month__year_btn",class:_vm.allowedToShowView('year') ? 'up' : '',on:{"click":_vm.showYearCalendar}},[_vm._v(_vm._s(_vm.pageYearName))]),_vm._v(" "),_c('span',{staticClass:"next",class:{'disabled': _vm.isRightNavDisabled},on:{"click":function($event){_vm.isRtl ? _vm.previousYear() : _vm.nextYear();}}},[_vm._v(">")])]),_vm._v(" "),_vm._l((_vm.months),function(month){return _c('span',{key:month.timestamp,staticClass:"cell month",class:{'selected': month.isSelected, 'disabled': month.isDisabled},on:{"click":function($event){$event.stopPropagation();_vm.selectMonth(month);}}},[_vm._v(_vm._s(month.month))])})],2)},staticRenderFns: [],
      props: {
        showMonthView: Boolean,
        selectedDate: Date,
        pageDate: Date,
        pageTimestamp: Number,
        disabledDates: Object,
        calendarClass: [String, Object, Array],
        calendarStyle: Object,
        translation: Object,
        isRtl: Boolean,
        allowedToShowView: Function,
        useUtc: Boolean
      },
      data: function data () {
        var constructedDateUtils = makeDateUtils(this.useUtc);
        return {
          utils: constructedDateUtils
        }
      },
      computed: {
        months: function months () {
          var this$1 = this;
    
          var d = this.pageDate;
          var months = [];
          // set up a new date object to the beginning of the current 'page'
          var dObj = this.useUtc
            ? new Date(Date.UTC(d.getUTCFullYear(), 0, d.getUTCDate()))
            : new Date(d.getFullYear(), 0, d.getDate(), d.getHours(), d.getMinutes());
          for (var i = 0; i < 12; i++) {
            months.push({
              month: this$1.utils.getMonthName(i, this$1.translation.months),
              timestamp: dObj.getTime(),
              isSelected: this$1.isSelectedMonth(dObj),
              isDisabled: this$1.isDisabledMonth(dObj)
            });
            this$1.utils.setMonth(dObj, this$1.utils.getMonth(dObj) + 1);
          }
          return months
        },
        /**
         * Get year name on current page.
         * @return {String}
         */
        pageYearName: function pageYearName () {
          var yearSuffix = this.translation.yearSuffix;
          return ("" + (this.utils.getFullYear(this.pageDate)) + yearSuffix)
        },
        /**
         * Is the left hand navigation disabled
         * @return {Boolean}
         */
        isLeftNavDisabled: function isLeftNavDisabled () {
          return this.isRtl
            ? this.isNextYearDisabled(this.pageTimestamp)
            : this.isPreviousYearDisabled(this.pageTimestamp)
        },
        /**
         * Is the right hand navigation disabled
         * @return {Boolean}
         */
        isRightNavDisabled: function isRightNavDisabled () {
          return this.isRtl
            ? this.isPreviousYearDisabled(this.pageTimestamp)
            : this.isNextYearDisabled(this.pageTimestamp)
        }
      },
      methods: {
        /**
         * Emits a selectMonth event
         * @param {Object} month
         */
        selectMonth: function selectMonth (month) {
          if (month.isDisabled) {
            return false
          }
          this.$emit('selectMonth', month);
        },
        /**
         * Changes the year up or down
         * @param {Number} incrementBy
         */
        changeYear: function changeYear (incrementBy) {
          var date = this.pageDate;
          this.utils.setFullYear(date, this.utils.getFullYear(date) + incrementBy);
          this.$emit('changedYear', date);
        },
        /**
         * Decrements the year
         */
        previousYear: function previousYear () {
          if (!this.isPreviousYearDisabled()) {
            this.changeYear(-1);
          }
        },
        /**
         * Checks if the previous year is disabled or not
         * @return {Boolean}
         */
        isPreviousYearDisabled: function isPreviousYearDisabled () {
          if (!this.disabledDates || !this.disabledDates.to) {
            return false
          }
          return this.utils.getFullYear(this.disabledDates.to) >= this.utils.getFullYear(this.pageDate)
        },
        /**
         * Increments the year
         */
        nextYear: function nextYear () {
          if (!this.isNextYearDisabled()) {
            this.changeYear(1);
          }
        },
        /**
         * Checks if the next year is disabled or not
         * @return {Boolean}
         */
        isNextYearDisabled: function isNextYearDisabled () {
          if (!this.disabledDates || !this.disabledDates.from) {
            return false
          }
          return this.utils.getFullYear(this.disabledDates.from) <= this.utils.getFullYear(this.pageDate)
        },
        /**
         * Emits an event that shows the year calendar
         */
        showYearCalendar: function showYearCalendar () {
          this.$emit('showYearCalendar');
        },
        /**
         * Whether the selected date is in this month
         * @param {Date}
         * @return {Boolean}
         */
        isSelectedMonth: function isSelectedMonth (date) {
          return (this.selectedDate &&
            this.utils.getFullYear(this.selectedDate) === this.utils.getFullYear(date) &&
            this.utils.getMonth(this.selectedDate) === this.utils.getMonth(date))
        },
        /**
         * Whether a month is disabled
         * @param {Date}
         * @return {Boolean}
         */
        isDisabledMonth: function isDisabledMonth (date) {
          var disabledDates = false;
    
          if (typeof this.disabledDates === 'undefined') {
            return false
          }
    
          if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to) {
            if (
              (this.utils.getMonth(date) < this.utils.getMonth(this.disabledDates.to) && this.utils.getFullYear(date) <= this.utils.getFullYear(this.disabledDates.to)) ||
              this.utils.getFullYear(date) < this.utils.getFullYear(this.disabledDates.to)
            ) {
              disabledDates = true;
            }
          }
          if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from) {
            if (
              this.disabledDates.from &&
              (this.utils.getMonth(date) > this.utils.getMonth(this.disabledDates.from) && this.utils.getFullYear(date) >= this.utils.getFullYear(this.disabledDates.from)) ||
              this.utils.getFullYear(date) > this.utils.getFullYear(this.disabledDates.from)
            ) {
              disabledDates = true;
            }
          }
    
          if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
            disabledDates = true;
          }
          return disabledDates
        }
      }
    }
    // eslint-disable-next-line
    ;
    
    (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
    var PickerYear = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showYearView),expression:"showYearView"}],class:[_vm.calendarClass, 'vdp-datepicker__calendar'],style:(_vm.calendarStyle),on:{"mousedown":function($event){$event.preventDefault();}}},[_vm._t("beforeCalendarHeader"),_vm._v(" "),_c('header',[_c('span',{staticClass:"prev",class:{'disabled': _vm.isLeftNavDisabled},on:{"click":function($event){_vm.isRtl ? _vm.nextDecade() : _vm.previousDecade();}}},[_vm._v("<")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.getPageDecade))]),_vm._v(" "),_c('span',{staticClass:"next",class:{'disabled': _vm.isRightNavDisabled},on:{"click":function($event){_vm.isRtl ? _vm.previousDecade() : _vm.nextDecade();}}},[_vm._v(">")])]),_vm._v(" "),_vm._l((_vm.years),function(year){return _c('span',{key:year.timestamp,staticClass:"cell year",class:{ 'selected': year.isSelected, 'disabled': year.isDisabled },on:{"click":function($event){$event.stopPropagation();_vm.selectYear(year);}}},[_vm._v(_vm._s(year.year))])})],2)},staticRenderFns: [],
      props: {
        showYearView: Boolean,
        selectedDate: Date,
        pageDate: Date,
        pageTimestamp: Number,
        disabledDates: Object,
        highlighted: Object,
        calendarClass: [String, Object, Array],
        calendarStyle: Object,
        translation: Object,
        isRtl: Boolean,
        allowedToShowView: Function,
        useUtc: Boolean
      },
      computed: {
        years: function years () {
          var this$1 = this;
    
          var d = this.pageDate;
          var years = [];
          // set up a new date object to the beginning of the current 'page'7
          var dObj = this.useUtc
            ? new Date(Date.UTC(Math.floor(d.getUTCFullYear() / 10) * 10, d.getUTCMonth(), d.getUTCDate()))
            : new Date(Math.floor(d.getFullYear() / 10) * 10, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());
          for (var i = 0; i < 10; i++) {
            years.push({
              year: this$1.utils.getFullYear(dObj),
              timestamp: dObj.getTime(),
              isSelected: this$1.isSelectedYear(dObj),
              isDisabled: this$1.isDisabledYear(dObj)
            });
            this$1.utils.setFullYear(dObj, this$1.utils.getFullYear(dObj) + 1);
          }
          return years
        },
        /**
         * @return {String}
         */
        getPageDecade: function getPageDecade () {
          var decadeStart = Math.floor(this.utils.getFullYear(this.pageDate) / 10) * 10;
          var decadeEnd = decadeStart + 9;
          var yearSuffix = this.translation.yearSuffix;
          return (decadeStart + " - " + decadeEnd + yearSuffix)
        },
        /**
         * Is the left hand navigation button disabled?
         * @return {Boolean}
         */
        isLeftNavDisabled: function isLeftNavDisabled () {
          return this.isRtl
            ? this.isNextDecadeDisabled(this.pageTimestamp)
            : this.isPreviousDecadeDisabled(this.pageTimestamp)
        },
        /**
         * Is the right hand navigation button disabled?
         * @return {Boolean}
         */
        isRightNavDisabled: function isRightNavDisabled () {
          return this.isRtl
            ? this.isPreviousDecadeDisabled(this.pageTimestamp)
            : this.isNextDecadeDisabled(this.pageTimestamp)
        }
      },
      data: function data () {
        var constructedDateUtils = makeDateUtils(this.useUtc);
        return {
          utils: constructedDateUtils
        }
      },
      methods: {
        selectYear: function selectYear (year) {
          if (year.isDisabled) {
            return false
          }
          this.$emit('selectYear', year);
        },
        changeYear: function changeYear (incrementBy) {
          var date = this.pageDate;
          this.utils.setFullYear(date, this.utils.getFullYear(date) + incrementBy);
          this.$emit('changedDecade', date);
        },
        previousDecade: function previousDecade () {
          if (this.isPreviousDecadeDisabled()) {
            return false
          }
          this.changeYear(-10);
        },
        isPreviousDecadeDisabled: function isPreviousDecadeDisabled () {
          if (!this.disabledDates || !this.disabledDates.to) {
            return false
          }
          return Math.floor(this.utils.getFullYear(this.disabledDates.to) / 10) * 10 >= Math.floor(this.utils.getFullYear(this.pageDate) / 10) * 10
        },
        nextDecade: function nextDecade () {
          if (this.isNextDecadeDisabled()) {
            return false
          }
          this.changeYear(10);
        },
        isNextDecadeDisabled: function isNextDecadeDisabled () {
          if (!this.disabledDates || !this.disabledDates.from) {
            return false
          }
          return Math.ceil(this.utils.getFullYear(this.disabledDates.from) / 10) * 10 <= Math.ceil(this.utils.getFullYear(this.pageDate) / 10) * 10
        },
    
        /**
         * Whether the selected date is in this year
         * @param {Date}
         * @return {Boolean}
         */
        isSelectedYear: function isSelectedYear (date) {
          return this.selectedDate && this.utils.getFullYear(this.selectedDate) === this.utils.getFullYear(date)
        },
        /**
         * Whether a year is disabled
         * @param {Date}
         * @return {Boolean}
         */
        isDisabledYear: function isDisabledYear (date) {
          var disabledDates = false;
          if (typeof this.disabledDates === 'undefined' || !this.disabledDates) {
            return false
          }
    
          if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to) {
            if (this.utils.getFullYear(date) < this.utils.getFullYear(this.disabledDates.to)) {
              disabledDates = true;
            }
          }
          if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from) {
            if (this.utils.getFullYear(date) > this.utils.getFullYear(this.disabledDates.from)) {
              disabledDates = true;
            }
          }
    
          if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
            disabledDates = true;
          }
    
          return disabledDates
        }
      }
    }
    // eslint-disable-next-line
    ;
    
    (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=".rtl { direction: rtl; } .vdp-datepicker { position: relative; text-align: left; } .vdp-datepicker * { box-sizing: border-box; } .vdp-datepicker__calendar { position: absolute; z-index: 100; background: #fff; width: 300px; border: 1px solid #ccc; } .vdp-datepicker__calendar header { display: block; line-height: 40px; } .vdp-datepicker__calendar header span { display: inline-block; text-align: center; width: 71.42857142857143%; float: left; } .vdp-datepicker__calendar header .prev, .vdp-datepicker__calendar header .next { width: 14.285714285714286%; float: left; text-indent: -10000px; position: relative; } .vdp-datepicker__calendar header .prev:after, .vdp-datepicker__calendar header .next:after { content: ''; position: absolute; left: 50%; top: 50%; -webkit-transform: translateX(-50%) translateY(-50%); transform: translateX(-50%) translateY(-50%); border: 6px solid transparent; } .vdp-datepicker__calendar header .prev:after { border-right: 10px solid #000; margin-left: -5px; } .vdp-datepicker__calendar header .prev.disabled:after { border-right: 10px solid #ddd; } .vdp-datepicker__calendar header .next:after { border-left: 10px solid #000; margin-left: 5px; } .vdp-datepicker__calendar header .next.disabled:after { border-left: 10px solid #ddd; } .vdp-datepicker__calendar header .prev:not(.disabled), .vdp-datepicker__calendar header .next:not(.disabled), .vdp-datepicker__calendar header .up:not(.disabled) { cursor: pointer; } .vdp-datepicker__calendar header .prev:not(.disabled):hover, .vdp-datepicker__calendar header .next:not(.disabled):hover, .vdp-datepicker__calendar header .up:not(.disabled):hover { background: #eee; } .vdp-datepicker__calendar .disabled { color: #ddd; cursor: default; } .vdp-datepicker__calendar .flex-rtl { display: flex; width: inherit; flex-wrap: wrap; } .vdp-datepicker__calendar .cell { display: inline-block; padding: 0 5px; width: 14.285714285714286%; height: 40px; line-height: 40px; text-align: center; vertical-align: middle; border: 1px solid transparent; } .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year { cursor: pointer; } .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover { border: 1px solid #4bd; } .vdp-datepicker__calendar .cell.selected { background: #4bd; } .vdp-datepicker__calendar .cell.selected:hover { background: #4bd; } .vdp-datepicker__calendar .cell.selected.highlighted { background: #4bd; } .vdp-datepicker__calendar .cell.highlighted { background: #cae5ed; } .vdp-datepicker__calendar .cell.highlighted.disabled { color: #a3a3a3; } .vdp-datepicker__calendar .cell.grey { color: #888; } .vdp-datepicker__calendar .cell.grey:hover { background: inherit; } .vdp-datepicker__calendar .cell.day-header { font-size: 75%; white-space: no-wrap; cursor: inherit; } .vdp-datepicker__calendar .cell.day-header:hover { background: inherit; } .vdp-datepicker__calendar .month, .vdp-datepicker__calendar .year { width: 33.333%; } .vdp-datepicker__clear-button, .vdp-datepicker__calendar-button { cursor: pointer; font-style: normal; } .vdp-datepicker__clear-button.disabled, .vdp-datepicker__calendar-button.disabled { color: #999; cursor: default; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
    var Datepicker = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vdp-datepicker",class:[_vm.wrapperClass, _vm.isRtl ? 'rtl' : '']},[_c('date-input',{attrs:{"selectedDate":_vm.selectedDate,"resetTypedDate":_vm.resetTypedDate,"format":_vm.format,"translation":_vm.translation,"inline":_vm.inline,"id":_vm.id,"name":_vm.name,"refName":_vm.refName,"openDate":_vm.openDate,"placeholder":_vm.placeholder,"inputClass":_vm.inputClass,"typeable":_vm.typeable,"clearButton":_vm.clearButton,"clearButtonIcon":_vm.clearButtonIcon,"calendarButton":_vm.calendarButton,"calendarButtonIcon":_vm.calendarButtonIcon,"calendarButtonIconContent":_vm.calendarButtonIconContent,"disabled":_vm.disabled,"required":_vm.required,"bootstrapStyling":_vm.bootstrapStyling,"use-utc":_vm.useUtc},on:{"showCalendar":_vm.showCalendar,"closeCalendar":_vm.close,"typedDate":_vm.setTypedDate,"clearDate":_vm.clearDate}},[_vm._t("afterDateInput",null,{slot:"afterDateInput"})],2),_vm._v(" "),(_vm.allowedToShowView('day'))?_c('picker-day',{attrs:{"pageDate":_vm.pageDate,"selectedDate":_vm.selectedDate,"showDayView":_vm.showDayView,"fullMonthName":_vm.fullMonthName,"allowedToShowView":_vm.allowedToShowView,"disabledDates":_vm.disabledDates,"highlighted":_vm.highlighted,"calendarClass":_vm.calendarClass,"calendarStyle":_vm.calendarStyle,"translation":_vm.translation,"pageTimestamp":_vm.pageTimestamp,"isRtl":_vm.isRtl,"mondayFirst":_vm.mondayFirst,"dayCellContent":_vm.dayCellContent,"use-utc":_vm.useUtc},on:{"changedMonth":_vm.handleChangedMonthFromDayPicker,"selectDate":_vm.selectDate,"showMonthCalendar":_vm.showMonthCalendar,"selectedDisabled":_vm.selectDisabledDate}},[_vm._t("beforeCalendarHeader",null,{slot:"beforeCalendarHeader"})],2):_vm._e(),_vm._v(" "),(_vm.allowedToShowView('month'))?_c('picker-month',{attrs:{"pageDate":_vm.pageDate,"selectedDate":_vm.selectedDate,"showMonthView":_vm.showMonthView,"allowedToShowView":_vm.allowedToShowView,"disabledDates":_vm.disabledDates,"calendarClass":_vm.calendarClass,"calendarStyle":_vm.calendarStyle,"translation":_vm.translation,"isRtl":_vm.isRtl,"use-utc":_vm.useUtc},on:{"selectMonth":_vm.selectMonth,"showYearCalendar":_vm.showYearCalendar,"changedYear":_vm.setPageDate}},[_vm._t("beforeCalendarHeader",null,{slot:"beforeCalendarHeader"})],2):_vm._e(),_vm._v(" "),(_vm.allowedToShowView('year'))?_c('picker-year',{attrs:{"pageDate":_vm.pageDate,"selectedDate":_vm.selectedDate,"showYearView":_vm.showYearView,"allowedToShowView":_vm.allowedToShowView,"disabledDates":_vm.disabledDates,"calendarClass":_vm.calendarClass,"calendarStyle":_vm.calendarStyle,"translation":_vm.translation,"isRtl":_vm.isRtl,"use-utc":_vm.useUtc},on:{"selectYear":_vm.selectYear,"changedDecade":_vm.setPageDate}},[_vm._t("beforeCalendarHeader",null,{slot:"beforeCalendarHeader"})],2):_vm._e()],1)},staticRenderFns: [],
      components: {
        DateInput: DateInput,
        PickerDay: PickerDay,
        PickerMonth: PickerMonth,
        PickerYear: PickerYear
      },
      props: {
        value: {
          validator: function (val) {
            return val === null || val instanceof Date || typeof val === 'string' || typeof val === 'number'
          }
        },
        name: String,
        refName: String,
        id: String,
        format: {
          type: [String, Function],
          default: 'dd MMM yyyy'
        },
        language: {
          type: Object,
          default: function () { return en; }
        },
        openDate: {
          validator: function (val) {
            return val === null || val instanceof Date || typeof val === 'string' || typeof val === 'number'
          }
        },
        dayCellContent: Function,
        fullMonthName: Boolean,
        disabledDates: Object,
        highlighted: Object,
        placeholder: String,
        inline: Boolean,
        calendarClass: [String, Object, Array],
        inputClass: [String, Object, Array],
        wrapperClass: [String, Object, Array],
        mondayFirst: Boolean,
        clearButton: Boolean,
        clearButtonIcon: String,
        calendarButton: Boolean,
        calendarButtonIcon: String,
        calendarButtonIconContent: String,
        bootstrapStyling: Boolean,
        initialView: String,
        disabled: Boolean,
        required: Boolean,
        typeable: Boolean,
        useUtc: Boolean,
        minimumView: {
          type: String,
          default: 'day'
        },
        maximumView: {
          type: String,
          default: 'year'
        }
      },
      data: function data () {
        var startDate = this.openDate ? new Date(this.openDate) : new Date();
        var constructedDateUtils = makeDateUtils(this.useUtc);
        var pageTimestamp = constructedDateUtils.setDate(startDate, 1);
        return {
          /*
           * Vue cannot observe changes to a Date Object so date must be stored as a timestamp
           * This represents the first day of the current viewing month
           * {Number}
           */
          pageTimestamp: pageTimestamp,
          /*
           * Selected Date
           * {Date}
           */
          selectedDate: null,
          /*
           * Flags to show calendar views
           * {Boolean}
           */
          showDayView: false,
          showMonthView: false,
          showYearView: false,
          /*
           * Positioning
           */
          calendarHeight: 0,
          resetTypedDate: new Date(),
          utils: constructedDateUtils
        }
      },
      watch: {
        value: function value (value$1) {
          this.setValue(value$1);
        },
        openDate: function openDate () {
          this.setPageDate();
        },
        initialView: function initialView () {
          this.setInitialView();
        }
      },
      computed: {
        computedInitialView: function computedInitialView () {
          if (!this.initialView) {
            return this.minimumView
          }
    
          return this.initialView
        },
        pageDate: function pageDate () {
          return new Date(this.pageTimestamp)
        },
    
        translation: function translation () {
          return this.language
        },
    
        calendarStyle: function calendarStyle () {
          return {
            position: this.isInline ? 'static' : undefined
          }
        },
        isOpen: function isOpen () {
          return this.showDayView || this.showMonthView || this.showYearView
        },
        isInline: function isInline () {
          return !!this.inline
        },
        isRtl: function isRtl () {
          return this.translation.rtl === true
        }
      },
      methods: {
        /**
         * Called in the event that the user navigates to date pages and
         * closes the picker without selecting a date.
         */
        resetDefaultPageDate: function resetDefaultPageDate () {
          if (this.selectedDate === null) {
            this.setPageDate();
            return
          }
          this.setPageDate(this.selectedDate);
        },
        /**
         * Effectively a toggle to show/hide the calendar
         * @return {mixed}
         */
        showCalendar: function showCalendar () {
          if (this.disabled || this.isInline) {
            return false
          }
          if (this.isOpen) {
            return this.close(true)
          }
          this.setInitialView();
          if (!this.isInline) {
            this.$emit('opened');
          }
        },
        /**
         * Sets the initial picker page view: day, month or year
         */
        setInitialView: function setInitialView () {
          var initialView = this.computedInitialView;
          if (!this.allowedToShowView(initialView)) {
            throw new Error(("initialView '" + (this.initialView) + "' cannot be rendered based on minimum '" + (this.minimumView) + "' and maximum '" + (this.maximumView) + "'"))
          }
          switch (initialView) {
            case 'year':
              this.showYearCalendar();
              break
            case 'month':
              this.showMonthCalendar();
              break
            default:
              this.showDayCalendar();
              break
          }
        },
        /**
         * Are we allowed to show a specific picker view?
         * @param {String} view
         * @return {Boolean}
         */
        allowedToShowView: function allowedToShowView (view) {
          var views = ['day', 'month', 'year'];
          var minimumViewIndex = views.indexOf(this.minimumView);
          var maximumViewIndex = views.indexOf(this.maximumView);
          var viewIndex = views.indexOf(view);
    
          return viewIndex >= minimumViewIndex && viewIndex <= maximumViewIndex
        },
        /**
         * Show the day picker
         * @return {Boolean}
         */
        showDayCalendar: function showDayCalendar () {
          if (!this.allowedToShowView('day')) {
            return false
          }
          this.close();
          this.showDayView = true;
          return true
        },
        /**
         * Show the month picker
         * @return {Boolean}
         */
        showMonthCalendar: function showMonthCalendar () {
          if (!this.allowedToShowView('month')) {
            return false
          }
          this.close();
          this.showMonthView = true;
          return true
        },
        /**
         * Show the year picker
         * @return {Boolean}
         */
        showYearCalendar: function showYearCalendar () {
          if (!this.allowedToShowView('year')) {
            return false
          }
          this.close();
          this.showYearView = true;
          return true
        },
        /**
         * Set the selected date
         * @param {Number} timestamp
         */
        setDate: function setDate (timestamp) {
          var date = new Date(timestamp);
          this.selectedDate = date;
          this.setPageDate(date);
          this.$emit('selected', date);
          this.$emit('input', date);
        },
        /**
         * Clear the selected date
         */
        clearDate: function clearDate () {
          this.selectedDate = null;
          this.setPageDate();
          this.$emit('selected', null);
          this.$emit('input', null);
          this.$emit('cleared');
        },
        /**
         * @param {Object} date
         */
        selectDate: function selectDate (date) {
          this.setDate(date.timestamp);
          if (!this.isInline) {
            this.close(true);
          }
          this.resetTypedDate = new Date();
        },
        /**
         * @param {Object} date
         */
        selectDisabledDate: function selectDisabledDate (date) {
          this.$emit('selectedDisabled', date);
        },
        /**
         * @param {Object} month
         */
        selectMonth: function selectMonth (month) {
          var date = new Date(month.timestamp);
          if (this.allowedToShowView('day')) {
            this.setPageDate(date);
            this.$emit('changedMonth', month);
            this.showDayCalendar();
          } else {
            this.selectDate(month);
          }
        },
        /**
         * @param {Object} year
         */
        selectYear: function selectYear (year) {
          var date = new Date(year.timestamp);
          if (this.allowedToShowView('month')) {
            this.setPageDate(date);
            this.$emit('changedYear', year);
            this.showMonthCalendar();
          } else {
            this.selectDate(year);
          }
        },
        /**
         * Set the datepicker value
         * @param {Date|String|Number|null} date
         */
        setValue: function setValue (date) {
          if (typeof date === 'string' || typeof date === 'number') {
            var parsed = new Date(date);
            date = isNaN(parsed.valueOf()) ? null : parsed;
          }
          if (!date) {
            this.setPageDate();
            this.selectedDate = null;
            return
          }
          this.selectedDate = date;
          this.setPageDate(date);
        },
        /**
         * Sets the date that the calendar should open on
         */
        setPageDate: function setPageDate (date) {
          if (!date) {
            if (this.openDate) {
              date = new Date(this.openDate);
            } else {
              date = new Date();
            }
          }
          this.pageTimestamp = this.utils.setDate(new Date(date), 1);
        },
        /**
         * Handles a month change from the day picker
         */
        handleChangedMonthFromDayPicker: function handleChangedMonthFromDayPicker (date) {
          this.setPageDate(date);
          this.$emit('changedMonth', date);
        },
        /**
         * Set the date from a typedDate event
         */
        setTypedDate: function setTypedDate (date) {
          this.setDate(date.getTime());
        },
        /**
         * Close all calendar layers
         * @param {Boolean} full - emit close event
         */
        close: function close (full) {
          this.showDayView = this.showMonthView = this.showYearView = false;
          if (!this.isInline) {
            if (full) {
              this.$emit('closed');
            }
            document.removeEventListener('click', this.clickOutside, false);
          }
        },
        /**
         * Initiate the component
         */
        init: function init () {
          if (this.value) {
            this.setValue(this.value);
          }
          if (this.isInline) {
            this.setInitialView();
          }
        }
      },
      mounted: function mounted () {
        this.init();
      }
    }
    // eslint-disable-next-line
    ;
    
    /* harmony default export */ __webpack_exports__["a"] = (Datepicker);
    
    
    /***/ }),
    /* 71 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    /* unused harmony export af */
    /* unused harmony export ar */
    /* unused harmony export bg */
    /* unused harmony export bs */
    /* unused harmony export ca */
    /* unused harmony export cs */
    /* unused harmony export da */
    /* unused harmony export de */
    /* unused harmony export ee */
    /* unused harmony export el */
    /* unused harmony export en */
    /* unused harmony export es */
    /* unused harmony export fa */
    /* unused harmony export fi */
    /* unused harmony export fo */
    /* unused harmony export fr */
    /* unused harmony export ge */
    /* unused harmony export he */
    /* unused harmony export hr */
    /* unused harmony export hu */
    /* unused harmony export id */
    /* unused harmony export is */
    /* unused harmony export it */
    /* unused harmony export ja */
    /* unused harmony export ko */
    /* unused harmony export lb */
    /* unused harmony export lt */
    /* unused harmony export lv */
    /* unused harmony export mn */
    /* unused harmony export nbNO */
    /* unused harmony export nl */
    /* unused harmony export pl */
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ptBR; });
    /* unused harmony export ro */
    /* unused harmony export ru */
    /* unused harmony export sk */
    /* unused harmony export slSI */
    /* unused harmony export srCYRL */
    /* unused harmony export sr */
    /* unused harmony export sv */
    /* unused harmony export th */
    /* unused harmony export tr */
    /* unused harmony export uk */
    /* unused harmony export ur */
    /* unused harmony export vi */
    /* unused harmony export zh */
    var Language=function(e,a,r,n){this.language=e,this.months=a,this.monthsAbbr=r,this.days=n,this.rtl=!1,this.ymd=!1,this.yearSuffix=""},prototypeAccessors={language:{configurable:!0},months:{configurable:!0},monthsAbbr:{configurable:!0},days:{configurable:!0}};prototypeAccessors.language.get=function(){return this._language},prototypeAccessors.language.set=function(e){if("string"!=typeof e)throw new TypeError("Language must be a string");this._language=e},prototypeAccessors.months.get=function(){return this._months},prototypeAccessors.months.set=function(e){if(12!==e.length)throw new RangeError("There must be 12 months for "+this.language+" language");this._months=e},prototypeAccessors.monthsAbbr.get=function(){return this._monthsAbbr},prototypeAccessors.monthsAbbr.set=function(e){if(12!==e.length)throw new RangeError("There must be 12 abbreviated months for "+this.language+" language");this._monthsAbbr=e},prototypeAccessors.days.get=function(){return this._days},prototypeAccessors.days.set=function(e){if(7!==e.length)throw new RangeError("There must be 7 days for "+this.language+" language");this._days=e},Object.defineProperties(Language.prototype,prototypeAccessors);var af=new Language("Afrikaans",["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"],["Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des"],["So.","Ma.","Di.","Wo.","Do.","Vr.","Sa."]),language=new Language("Arabic",["ÙŠÙ†Ø§ÙŠØ±","ÙØ¨Ø±Ø§ÙŠØ±","Ù…Ø§Ø±Ø³","Ø£Ø¨Ø±ÙŠÙ„","Ù…Ø§ÙŠÙˆ","ÙŠÙˆÙ†ÙŠÙˆ","ÙŠÙˆÙ„ÙŠÙˆ","Ø£ØºØ³Ø·Ø³","Ø³Ø¨ØªÙ…Ø¨Ø±","Ø£ÙƒØªÙˆØ¨Ø±","Ù†ÙˆÚ¤Ù…Ø¨Ø±","Ø¯ÙŠØ³Ù…Ø¨Ø±"],["ÙŠÙ†Ø§ÙŠØ±","ÙØ¨Ø±Ø§ÙŠØ±","Ù…Ø§Ø±Ø³","Ø£Ø¨Ø±ÙŠÙ„","Ù…Ø§ÙŠÙˆ","ÙŠÙˆÙ†ÙŠÙˆ","ÙŠÙˆÙ„ÙŠÙˆ","Ø£ØºØ³Ø·Ø³","Ø³Ø¨ØªÙ…Ø¨Ø±","Ø£ÙƒØªÙˆØ¨Ø±","Ù†ÙˆÚ¤Ù…Ø¨Ø±","Ø¯ÙŠØ³Ù…Ø¨Ø±"],["Ø£Ø­Ø¯","Ø¥Ø«Ù†ÙŠÙ†","Ø«Ù„Ø§Ø«Ø§Ø¡","Ø£Ø±Ø¨Ø¹Ø§Ø¡","Ø®Ù…ÙŠØ³","Ø¬Ù…Ø¹Ø©","Ø³Ø¨Øª"]);language.rtl=!0;var bg=new Language("Bulgarian",["Ð¯Ð½ÑƒÐ°Ñ€Ð¸","Ð¤ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸","ÐœÐ°Ñ€Ñ‚","ÐÐ¿Ñ€Ð¸Ð»","ÐœÐ°Ð¹","Ð®Ð½Ð¸","Ð®Ð»Ð¸","ÐÐ²Ð³ÑƒÑÑ‚","Ð¡ÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸","ÐžÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸","ÐÐ¾ÐµÐ¼Ð²Ñ€Ð¸","Ð”ÐµÐºÐµÐ¼Ð²Ñ€Ð¸"],["Ð¯Ð½","Ð¤ÐµÐ²","ÐœÐ°Ñ€","ÐÐ¿Ñ€","ÐœÐ°Ð¹","Ð®Ð½Ð¸","Ð®Ð»Ð¸","ÐÐ²Ð³","Ð¡ÐµÐ¿","ÐžÐºÑ‚","ÐÐ¾Ðµ","Ð”ÐµÐº"],["ÐÐ´","ÐŸÐ½","Ð’Ñ‚","Ð¡Ñ€","Ð§Ñ‚","ÐŸÑ‚","Ð¡Ð±"]),bs=new Language("Bosnian",["Januar","Februar","Mart","April","Maj","Juni","Juli","Avgust","Septembar","Oktobar","Novembar","Decembar"],["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],["Ned","Pon","Uto","Sri","ÄŒet","Pet","Sub"]),ca=new Language("Catalan",["Gener","Febrer","MarÃ§","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],["Gen","Feb","Mar","Abr","Mai","Jun","Jul","Ago","Set","Oct","Nov","Des"],["Diu","Dil","Dmr","Dmc","Dij","Div","Dis"]),cs=new Language("Czech",["leden","Ãºnor","bÅ™ezen","duben","kvÄ›ten","Äerven","Äervenec","srpen","zÃ¡Å™Ã­","Å™Ã­jen","listopad","prosinec"],["led","Ãºno","bÅ™e","dub","kvÄ›","Äer","Äec","srp","zÃ¡Å™","Å™Ã­j","lis","pro"],["ne","po","Ãºt","st","Ät","pÃ¡","so"]),da=new Language("Danish",["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"],["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],["SÃ¸","Ma","Ti","On","To","Fr","LÃ¸"]),de=new Language("German",["Januar","Februar","MÃ¤rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],["Jan","Feb","MÃ¤r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]),ee=new Language("Estonian",["Jaanuar","Veebruar","MÃ¤rts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"],["Jaan","Veebr","MÃ¤rts","Apr","Mai","Juuni","Juuli","Aug","Sept","Okt","Nov","Dets"],["P","E","T","K","N","R","L"]),el=new Language("Greek",["Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚","Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚","ÎœÎ¬ÏÏ„Î¹Î¿Ï‚","Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚","ÎœÎ¬ÏŠÎ¿Ï‚","Î™Î¿ÏÎ½Î¹Î¿Ï‚","Î™Î¿ÏÎ»Î¹Î¿Ï‚","Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚","Î£ÎµÏ€Ï„Î­Î¼Î²ÏÎ¹Î¿Ï‚","ÎŸÎºÏ„ÏŽÎ²ÏÎ¹Î¿Ï‚","ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï‚","Î”ÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï‚"],["Î™Î±Î½","Î¦ÎµÎ²","ÎœÎ±Ï","Î‘Ï€Ï","ÎœÎ±Î¹","Î™Î¿Ï…Î½","Î™Î¿Ï…Î»","Î‘Ï…Î³","Î£ÎµÏ€","ÎŸÎºÏ„","ÎÎ¿Îµ","Î”ÎµÎº"],["ÎšÏ…Ï","Î”ÎµÏ…","Î¤ÏÎ¹","Î¤ÎµÏ„","Î ÎµÎ¼","Î Î±Ï","Î£Î±Ï„"]),en=new Language("English",["January","February","March","April","May","June","July","August","September","October","November","December"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]),es=new Language("Spanish",["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],["Dom","Lun","Mar","MiÃ©","Jue","Vie","Sab"]),fa=new Language("Persian",["ÙØ±ÙˆØ±Ø¯ÛŒÙ†","Ø§Ø±Ø¯ÛŒØ¨Ù‡Ø´Øª","Ø®Ø±Ø¯Ø§Ø¯","ØªÛŒØ±","Ù…Ø±Ø¯Ø§Ø¯","Ø´Ù‡Ø±ÛŒÙˆØ±","Ù…Ù‡Ø±","Ø¢Ø¨Ø§Ù†","Ø¢Ø°Ø±","Ø¯ÛŒ","Ø¨Ù‡Ù…Ù†","Ø§Ø³ÙÙ†Ø¯"],["ÙØ±Ùˆ","Ø§Ø±Ø¯","Ø®Ø±Ø¯","ØªÛŒØ±","Ù…Ø±Ø¯","Ø´Ù‡Ø±","Ù…Ù‡Ø±","Ø¢Ø¨Ø§","Ø¢Ø°Ø±","Ø¯ÛŒ","Ø¨Ù‡Ù…","Ø§Ø³Ù"],["ÛŒÚ©Ø´Ù†Ø¨Ù‡","Ø¯ÙˆØ´Ù†Ø¨Ù‡","Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡","Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡","Ù¾Ù†Ø¬Ø´Ù†Ø¨Ù‡","Ø¬Ù…Ø¹Ù‡","Ø´Ù†Ø¨Ù‡"]),fi=new Language("Finish",["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesÃ¤kuu","heinÃ¤kuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],["tammi","helmi","maalis","huhti","touko","kesÃ¤","heinÃ¤","elo","syys","loka","marras","joulu"],["su","ma","ti","ke","to","pe","la"]),fo=new Language("Faroese",["Januar","Februar","Mars","AprÃ­l","Mai","Juni","Juli","August","Septembur","Oktobur","Novembur","Desembur"],["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Des"],["Sun","MÃ¡n","TÃ½s","Mik","HÃ³s","FrÃ­","Ley"]),fr=new Language("French",["Janvier","FÃ©vrier","Mars","Avril","Mai","Juin","Juillet","AoÃ»t","Septembre","Octobre","Novembre","DÃ©cembre"],["Jan","FÃ©v","Mar","Avr","Mai","Juin","Juil","AoÃ»t","Sep","Oct","Nov","DÃ©c"],["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"]),ge=new Language("Georgia",["áƒ˜áƒáƒœáƒ•áƒáƒ áƒ˜","áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ˜","áƒ›áƒáƒ áƒ¢áƒ˜","áƒáƒžáƒ áƒ˜áƒšáƒ˜","áƒ›áƒáƒ˜áƒ¡áƒ˜","áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ˜","áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ˜","áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ","áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜","áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ˜","áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜","áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜"],["áƒ˜áƒáƒœ","áƒ—áƒ”áƒ‘","áƒ›áƒáƒ ","áƒáƒžáƒ ","áƒ›áƒáƒ˜","áƒ˜áƒ•áƒœ","áƒ˜áƒ•áƒš","áƒáƒ’áƒ•","áƒ¡áƒ”áƒ¥","áƒáƒ¥áƒ¢","áƒœáƒáƒ”","áƒ“áƒ”áƒ™"],["áƒ™áƒ•áƒ˜","áƒáƒ áƒ¨","áƒ¡áƒáƒ›","áƒáƒ—áƒ®","áƒ®áƒ£áƒ—","áƒžáƒáƒ ","áƒ¨áƒáƒ‘"]),language$1=new Language("Hebrew",["×™× ×•××¨","×¤×‘×¨×•××¨","×ž×¨×¥","××¤×¨×™×œ","×ž××™","×™×•× ×™","×™×•×œ×™","××•×’×•×¡×˜","×¡×¤×˜×ž×‘×¨","××•×§×˜×•×‘×¨","× ×•×‘×ž×‘×¨","×“×¦×ž×‘×¨"],["×™× ×•","×¤×‘×¨","×ž×¨×¥","××¤×¨","×ž××™","×™×•× ","×™×•×œ","××•×’","×¡×¤×˜","××•×§","× ×•×‘","×“×¦×ž"],["×","×‘","×’","×“","×”","×•","×©"]);language$1.rtl=!0;var hr=new Language("Croatian",["SijeÄanj","VeljaÄa","OÅ¾ujak","Travanj","Svibanj","Lipanj","Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"],["Sij","Velj","OÅ¾u","Tra","Svi","Lip","Srp","Kol","Ruj","Lis","Stu","Pro"],["Ned","Pon","Uto","Sri","ÄŒet","Pet","Sub"]),hu=new Language("Hungarian",["JanuÃ¡r","FebruÃ¡r","MÃ¡rcius","Ãprilis","MÃ¡jus","JÃºnius","JÃºlius","Augusztus","Szeptember","OktÃ³ber","November","December"],["Jan","Febr","MÃ¡rc","Ãpr","MÃ¡j","JÃºn","JÃºl","Aug","Szept","Okt","Nov","Dec"],["Vas","HÃ©t","Ke","Sze","CsÃ¼","PÃ©n","Szo"]),id=new Language("Indonesian",["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],["Min","Sen","Sel","Rab","Kam","Jum","Sab"]),is=new Language("Icelandic",["JanÃºar","FebrÃºar","Mars","AprÃ­l","MaÃ­","JÃºnÃ­","JÃºlÃ­","ÃgÃºst","September","OktÃ³ber","NÃ³vember","Desember"],["Jan","Feb","Mars","Apr","MaÃ­","JÃºn","JÃºl","ÃgÃº","Sep","Okt","NÃ³v","Des"],["Sun","MÃ¡n","Ãžri","MiÃ°","Fim","FÃ¶s","Lau"]),it=new Language("Italian",["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],["Dom","Lun","Mar","Mer","Gio","Ven","Sab"]),language$2=new Language("Japanese",["1æœˆ","2æœˆ","3æœˆ","4æœˆ","5æœˆ","6æœˆ","7æœˆ","8æœˆ","9æœˆ","10æœˆ","11æœˆ","12æœˆ"],["1æœˆ","2æœˆ","3æœˆ","4æœˆ","5æœˆ","6æœˆ","7æœˆ","8æœˆ","9æœˆ","10æœˆ","11æœˆ","12æœˆ"],["æ—¥","æœˆ","ç«","æ°´","æœ¨","é‡‘","åœŸ"]);language$2.yearSuffix="å¹´";var language$3=new Language("Korean",["1ì›”","2ì›”","3ì›”","4ì›”","5ì›”","6ì›”","7ì›”","8ì›”","9ì›”","10ì›”","11ì›”","12ì›”"],["1ì›”","2ì›”","3ì›”","4ì›”","5ì›”","6ì›”","7ì›”","8ì›”","9ì›”","10ì›”","11ì›”","12ì›”"],["ì¼","ì›”","í™”","ìˆ˜","ëª©","ê¸ˆ","í† "]);language$3.yearSuffix="ë…„";var lb=new Language("Luxembourgish",["Januar","Februar","MÃ¤erz","AbrÃ«ll","MÃ¤i","Juni","Juli","August","September","Oktober","November","Dezember"],["Jan","Feb","MÃ¤e","Abr","MÃ¤i","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],["So.","MÃ©.","DÃ«.","MÃ«.","Do.","Fr.","Sa."]),language$4=new Language("Lithuanian",["Sausis","Vasaris","Kovas","Balandis","GeguÅ¾Ä—","BirÅ¾elis","Liepa","RugpjÅ«tis","RugsÄ—jis","Spalis","Lapkritis","Gruodis"],["Sau","Vas","Kov","Bal","Geg","Bir","Lie","Rugp","Rugs","Spa","Lap","Gru"],["Sek","Pir","Ant","Tre","Ket","Pen","Å eÅ¡"]);language$4.ymd=!0;var lv=new Language("Latvian",["JanvÄris","FebruÄris","Marts","AprÄ«lis","Maijs","JÅ«nijs","JÅ«lijs","Augusts","Septembris","Oktobris","Novembris","Decembris"],["Jan","Feb","Mar","Apr","Mai","JÅ«n","JÅ«l","Aug","Sep","Okt","Nov","Dec"],["Sv","Pr","Ot","Tr","Ce","Pk","Se"]),language$5=new Language("Mongolia",["1 Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€","2 Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€","3 Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€","4 Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€","5 Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€","6 Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€","7 Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€","8 Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€","9 Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€","10 Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€","11 Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€","12 Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€"],["1-Ñ€ ÑÐ°Ñ€","2-Ñ€ ÑÐ°Ñ€","3-Ñ€ ÑÐ°Ñ€","4-Ñ€ ÑÐ°Ñ€","5-Ñ€ ÑÐ°Ñ€","6-Ñ€ ÑÐ°Ñ€","7-Ñ€ ÑÐ°Ñ€","8-Ñ€ ÑÐ°Ñ€","9-Ñ€ ÑÐ°Ñ€","10-Ñ€ ÑÐ°Ñ€","11-Ñ€ ÑÐ°Ñ€","12-Ñ€ ÑÐ°Ñ€"],["ÐÑ","Ð”Ð°","ÐœÑ","Ð›Ñ…","ÐŸÒ¯","Ð‘Ð°","Ð‘Ñ"]);language$5.ymd=!0;var nbNO=new Language("Norwegian BokmÃ¥l",["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Des"],["SÃ¸","Ma","Ti","On","To","Fr","LÃ¸"]),nl=new Language("Dutch",["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],["jan","feb","maa","apr","mei","jun","jul","aug","sep","okt","nov","dec"],["zo","ma","di","wo","do","vr","za"]),pl=new Language("Polish",["StyczeÅ„","Luty","Marzec","KwiecieÅ„","Maj","Czerwiec","Lipiec","SierpieÅ„","WrzesieÅ„","PaÅºdziernik","Listopad","GrudzieÅ„"],["Sty","Lut","Mar","Kwi","Maj","Cze","Lip","Sie","Wrz","PaÅº","Lis","Gru"],["Nd","Pn","Wt","Åšr","Czw","Pt","Sob"]),ptBR=new Language("Brazilian",["Janeiro","Fevereiro","MarÃ§o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],["Dom","Seg","Ter","Qua","Qui","Sex","Sab"]),ro=new Language("Romanian",["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],["Ian","Feb","Mar","Apr","Mai","Iun","Iul","Aug","Sep","Oct","Noi","Dec"],["D","L","Ma","Mi","J","V","S"]),ru=new Language("Russian",["Ð¯Ð½Ð²Ð°Ñ€ÑŒ","Ð¤ÐµÐ²Ñ€Ð°Ð»ÑŒ","ÐœÐ°Ñ€Ñ‚","ÐÐ¿Ñ€ÐµÐ»ÑŒ","ÐœÐ°Ð¹","Ð˜ÑŽÐ½ÑŒ","Ð˜ÑŽÐ»ÑŒ","ÐÐ²Ð³ÑƒÑÑ‚","Ð¡ÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ","ÐžÐºÑ‚ÑÐ±Ñ€ÑŒ","ÐÐ¾ÑÐ±Ñ€ÑŒ","Ð”ÐµÐºÐ°Ð±Ñ€ÑŒ"],["Ð¯Ð½Ð²","Ð¤ÐµÐ²Ñ€","ÐœÐ°Ñ€Ñ‚","ÐÐ¿Ñ€","ÐœÐ°Ð¹","Ð˜ÑŽÐ½ÑŒ","Ð˜ÑŽÐ»ÑŒ","ÐÐ²Ð³","Ð¡ÐµÐ½Ñ‚","ÐžÐºÑ‚","ÐÐ¾ÑÐ±","Ð”ÐµÐº"],["Ð’Ñ","ÐŸÐ½","Ð’Ñ‚","Ð¡Ñ€","Ð§Ñ‚","ÐŸÑ‚","Ð¡Ð±"]),sk=new Language("Slovakian",["januÃ¡r","februÃ¡r","marec","aprÃ­l","mÃ¡j","jÃºn","jÃºl","august","september","oktÃ³ber","november","december"],["jan","feb","mar","apr","mÃ¡j","jÃºn","jÃºl","aug","sep","okt","nov","dec"],["ne","po","ut","st","Å¡t","pi","so"]),slSI=new Language("Sloveian",["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],["Ned","Pon","Tor","Sre","ÄŒet","Pet","Sob"]),srCYRL=new Language("Serbian in Cyrillic script",["ÐˆÐ°Ð½ÑƒÐ°Ñ€","Ð¤ÐµÐ±Ñ€ÑƒÐ°Ñ€","ÐœÐ°Ñ€Ñ‚","ÐÐ¿Ñ€Ð¸Ð»","ÐœÐ°Ñ˜","ÐˆÑƒÐ½","ÐˆÑƒÐ»","ÐÐ²Ð³ÑƒÑÑ‚","Ð¡ÐµÐ¿Ñ‚ÐµÐ¼Ð±Ð°Ñ€","ÐžÐºÑ‚Ð¾Ð±Ð°Ñ€","ÐÐ¾Ð²ÐµÐ¼Ð±Ð°Ñ€","Ð”ÐµÑ†ÐµÐ¼Ð±Ð°Ñ€"],["ÐˆÐ°Ð½","Ð¤ÐµÐ±","ÐœÐ°Ñ€","ÐÐ¿Ñ€","ÐœÐ°Ñ˜","ÐˆÑƒÐ½","ÐˆÑƒÐ»","ÐÐ²Ð³","Ð¡ÐµÐ¿","ÐžÐºÑ‚","ÐÐ¾Ð²","Ð”ÐµÑ†"],["ÐÐµÐ´","ÐŸÐ¾Ð½","Ð£Ñ‚Ð¾","Ð¡Ñ€Ðµ","Ð§ÐµÑ‚","ÐŸÐµÑ‚","Ð¡ÑƒÐ±"]),sr=new Language("Serbian",["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],["Ned","Pon","Uto","Sre","ÄŒet","Pet","Sub"]),sv=new Language("Swedish",["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],["SÃ¶n","MÃ¥n","Tis","Ons","Tor","Fre","LÃ¶r"]),th=new Language("Thai",["à¸¡à¸à¸£à¸²à¸„à¸¡","à¸à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ","à¸¡à¸µà¸™à¸²à¸„à¸¡","à¹€à¸¡à¸©à¸²à¸¢à¸™","à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡","à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™","à¸à¸£à¸à¸Žà¸²à¸„à¸¡","à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡","à¸à¸±à¸™à¸¢à¸²à¸¢à¸™","à¸•à¸¸à¸¥à¸²à¸„à¸¡","à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™","à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡"],["à¸¡.à¸„.","à¸.à¸ž.","à¸¡à¸µ.à¸„.","à¹€à¸¡.à¸¢.","à¸ž.à¸„.","à¸¡à¸´.à¸¢.","à¸.à¸„.","à¸ª.à¸„.","à¸.à¸¢.","à¸•.à¸„.","à¸ž.à¸¢.","à¸˜.à¸„."],["à¸­à¸²","à¸ˆ","à¸­","à¸ž","à¸žà¸¤","à¸¨","à¸ª"]),tr=new Language("Turkish",["Ocak","Åžubat","Mart","Nisan","MayÄ±s","Haziran","Temmuz","AÄŸustos","EylÃ¼l","Ekim","KasÄ±m","AralÄ±k"],["Oca","Åžub","Mar","Nis","May","Haz","Tem","AÄŸu","Eyl","Eki","Kas","Ara"],["Paz","Pzt","Sal","Ã‡ar","Per","Cum","Cmt"]),uk=new Language("Ukraine",["Ð¡Ñ–Ñ‡ÐµÐ½ÑŒ","Ð›ÑŽÑ‚Ð¸Ð¹","Ð‘ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ","ÐšÐ²Ñ–Ñ‚ÐµÐ½ÑŒ","Ð¢Ñ€Ð°Ð²ÐµÐ½ÑŒ","Ð§ÐµÑ€Ð²ÐµÐ½ÑŒ","Ð›Ð¸Ð¿ÐµÐ½ÑŒ","Ð¡ÐµÑ€Ð¿ÐµÐ½ÑŒ","Ð’ÐµÑ€ÐµÑÐµÐ½ÑŒ","Ð–Ð¾Ð²Ñ‚ÐµÐ½ÑŒ","Ð›Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´","Ð“Ñ€ÑƒÐ´ÐµÐ½ÑŒ"],["Ð¡Ñ–Ñ‡","Ð›ÑŽÑ‚","Ð‘ÐµÑ€","ÐšÐ²Ñ–Ñ‚","Ð¢Ñ€Ð°Ð²","Ð§ÐµÑ€","Ð›Ð¸Ð¿","Ð¡ÐµÑ€Ð¿","Ð’ÐµÑ€","Ð–Ð¾Ð²Ñ‚","Ð›Ð¸ÑÑ‚","Ð“Ñ€ÑƒÐ´"],["ÐÐ´","ÐŸÐ½","Ð’Ñ‚","Ð¡Ñ€","Ð§Ñ‚","ÐŸÑ‚","Ð¡Ð±"]),language$6=new Language("Urdu",["Ø¬Ù†ÙˆØ±ÛŒ","ÙØ±ÙˆØ±ÛŒ","Ù…Ø§Ø±Ú†","Ø§Ù¾Ø±ÛŒÙ„","Ù…Ø¦ÛŒ","Ø¬ÙˆÙ†","Ø¬ÙˆÙ„Ø§Ø¦ÛŒ","Ø§Ú¯Ø³Øª","Ø³Ù¾ØªÙ…Ø¨Ø±","Ø§Ú©ØªÙˆØ¨Ø±","Ù†ÙˆÙ…Ø¨Ø±","Ø¯Ø³Ù…Ø¨Ø±"],["Ø¬Ù†ÙˆØ±ÛŒ","ÙØ±ÙˆØ±ÛŒ","Ù…Ø§Ø±Ú†","Ø§Ù¾Ø±ÛŒÙ„","Ù…Ø¦ÛŒ","Ø¬ÙˆÙ†","Ø¬ÙˆÙ„Ø§Ø¦ÛŒ","Ø§Ú¯Ø³Øª","Ø³Ù¾ØªÙ…Ø¨Ø±","Ø§Ú©ØªÙˆØ¨Ø±","Ù†ÙˆÙ…Ø¨Ø±","Ø¯Ø³Ù…Ø¨Ø±"],["Ø§ØªÙˆØ§Ø±","Ù¾ÛŒØ±","Ù…Ù†Ú¯Ù„","Ø¨Ø¯Ú¾","Ø¬Ù…Ø¹Ø±Ø§Øª","Ø¬Ù…Ø¹Û","ÛÙØªÛ"]);language$6.rtl=!0;var vi=new Language("Vientnamese",["ThÃ¡ng 1","ThÃ¡ng 2","ThÃ¡ng 3","ThÃ¡ng 4","ThÃ¡ng 5","ThÃ¡ng 6","ThÃ¡ng 7","ThÃ¡ng 8","ThÃ¡ng 9","ThÃ¡ng 10","ThÃ¡ng 11","ThÃ¡ng 12"],["T 01","T 02","T 03","T 04","T 05","T 06","T 07","T 08","T 09","T 10","T 11","T 12"],["CN","Thá»© 2","Thá»© 3","Thá»© 4","Thá»© 5","Thá»© 6","Thá»© 7"]),language$7=new Language("Chinese",["ä¸€æœˆ","äºŒæœˆ","ä¸‰æœˆ","å››æœˆ","äº”æœˆ","å…­æœˆ","ä¸ƒæœˆ","å…«æœˆ","ä¹æœˆ","åæœˆ","åä¸€æœˆ","åäºŒæœˆ"],["ä¸€æœˆ","äºŒæœˆ","ä¸‰æœˆ","å››æœˆ","äº”æœˆ","å…­æœˆ","ä¸ƒæœˆ","å…«æœˆ","ä¹æœˆ","åæœˆ","åä¸€æœˆ","åäºŒæœˆ"],["æ—¥","ä¸€","äºŒ","ä¸‰","å››","äº”","å…­"]);language$7.yearSuffix="å¹´";
    
    
    /***/ })
    /******/ ]);