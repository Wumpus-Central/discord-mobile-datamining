// === Module 199: ? ===

// Module 199
import _mod38 from "module_38" /* 38 */;
import _modDef132 from "module_132" /* 132 */;
import _modDef133 from "module_133" /* 133 */;
import EVENT_TARGET_GET_THE_PARENT_KEY from "EVENT_TARGET_GET_THE_PARENT_KEY" /* 135 */;
import _modDef207 from "module_207" /* 207 */;
import _mod208 from "module_208" /* 208 */;
import _get from "_get" /* 96 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import hasOwnProperty from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const require = globalThis.__r;
let map, set;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
if (require("module_200").default.isAvailable) {
  let _default = require("module_200").default;
  _default.addNetworkingHandler();
}
let closure_8 = { arraybuffer: typeof global.ArrayBuffer === "function", blob: typeof global.Blob === "function", document: false, json: true, text: true, "": true };
class XMLHttpRequestEventTarget {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, XMLHttpRequestEventTarget);
    const obj = _getPrototypeOf(XMLHttpRequestEventTarget);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return hasOwnProperty(self, constructResult);
  }
}
_inherits(XMLHttpRequestEventTarget, _modDef132);
let obj = {
  key: "onload",
  get() {
    const obj = require("module_205");
    return obj.getEventHandlerAttribute(this, "load");
  },
  set(handleEvent) {
    const obj = require("module_205");
    const result = obj.setEventHandlerAttribute(this, "load", handleEvent);
  }
};
let items = [
  obj,
  {
    key: "onloadstart",
    get() {
      const obj = require("module_205");
      return obj.getEventHandlerAttribute(this, "loadstart");
    },
    set(handleEvent) {
      const obj = require("module_205");
      const result = obj.setEventHandlerAttribute(this, "loadstart", handleEvent);
    }
  },
  {
    key: "onprogress",
    get() {
      const obj = require("module_205");
      return obj.getEventHandlerAttribute(this, "progress");
    },
    set(handleEvent) {
      const obj = require("module_205");
      const result = obj.setEventHandlerAttribute(this, "progress", handleEvent);
    }
  },
  {
    key: "ontimeout",
    get() {
      const obj = require("module_205");
      return obj.getEventHandlerAttribute(this, "timeout");
    },
    set(handleEvent) {
      const obj = require("module_205");
      const result = obj.setEventHandlerAttribute(this, "timeout", handleEvent);
    }
  },
  {
    key: "onerror",
    get() {
      const obj = require("module_205");
      return obj.getEventHandlerAttribute(this, "error");
    },
    set(handleEvent) {
      const obj = require("module_205");
      const result = obj.setEventHandlerAttribute(this, "error", handleEvent);
    }
  },
  {
    key: "onabort",
    get() {
      const obj = require("module_205");
      return obj.getEventHandlerAttribute(this, "abort");
    },
    set(handleEvent) {
      const obj = require("module_205");
      const result = obj.setEventHandlerAttribute(this, "abort", handleEvent);
    }
  },
  {
    key: "onloadend",
    get() {
      const obj = require("module_205");
      return obj.getEventHandlerAttribute(this, "loadend");
    },
    set(handleEvent) {
      const obj = require("module_205");
      const result = obj.setEventHandlerAttribute(this, "loadend", handleEvent);
    }
  }
];
let closure_9 = _createClass(XMLHttpRequestEventTarget, items);
class XMLHttpRequest {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, XMLHttpRequest);
    const obj = _getPrototypeOf(XMLHttpRequest);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = hasOwnProperty(self, constructResult);
    tmp3Result.UNSENT = 0;
    tmp3Result.OPENED = 1;
    tmp3Result.HEADERS_RECEIVED = 2;
    tmp3Result.LOADING = 3;
    tmp3Result.DONE = 4;
    tmp3Result.readyState = 0;
    tmp3Result.status = 0;
    tmp3Result.timeout = 0;
    tmp3Result.withCredentials = true;
    tmp3Result.upload = new closure_9();
    tmp3Result._aborted = false;
    tmp3Result._hasError = false;
    tmp3Result._method = null;
    tmp3Result._perfKey = null;
    tmp3Result._response = "";
    tmp3Result._url = null;
    tmp3Result._timedOut = false;
    tmp3Result._incrementalEvents = false;
    tmp3Result._performanceLogger = null;
    new closure_9();
    tmp3Result._reset();
    return tmp3Result;
  }
}
_inherits(XMLHttpRequest, _modDef132);
const entry = {
  key: "_reset",
  value: function _reset() {
    this.readyState = this.UNSENT;
    this.responseHeaders = undefined;
    this.status = 0;
    delete this["responseURL"];
    this._requestId = null;
    this._cachedResponse = undefined;
    this._hasError = false;
    this._headers = {};
    this._response = "";
    this._responseType = "";
    this._sent = false;
    this._lowerCaseResponseHeaders = {};
    this._clearSubscriptions();
    this._timedOut = false;
  }
};
const items1 = [
  entry,
  {
    key: "responseType",
    get() {
      return this._responseType;
    },
    set(_responseType) {
      if (this._sent) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Failed to set the 'responseType' property on 'XMLHttpRequest': The response type cannot be set after the request has been sent.");
        throw error;
      } else if (closure_8.hasOwnProperty(_responseType)) {
        let tmp9 = closure_8[_responseType];
        const tmp8 = _mod38;
        if (!tmp9) {
          tmp9 = "document" === _responseType;
        }
        const _HermesInternal2 = HermesInternal;
        tmp8(tmp9, "The provided value '" + _responseType + "' is unsupported in this environment.");
        if ("blob" === _responseType) {
          const tmp6Result = _mod38;
          tmp6Result(require("module_200").default.isAvailable, "Native module BlobModule is required for blob support");
        }
        tmp._responseType = _responseType;
      } else {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn("The provided value '" + _responseType + "' is not a valid 'responseType'.");
      }
    }
  },
  {
    key: "responseText",
    get() {
      const self = this;
      let str = "";
      if ("" !== this._responseType) {
        if ("text" !== self._responseType) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const self2 = this;
          const self3 = this;
          const error = new Error("The 'responseText' property is only available if 'responseType' is set to '' or 'text', but it is '" + self._responseType + "'.");
          throw error;
        }
      }
      if (self.readyState >= 3) {
        str = self._response;
      }
      return str;
    }
  },
  {
    key: "response",
    get() {
      let _response;
      let _response2;
      const self = this;
      const responseType = this.responseType;
      if ("" !== responseType) {
        if ("text" !== responseType) {
          if (4 !== self.readyState) {
            return null;
          } else if (undefined !== self._cachedResponse) {
            return self._cachedResponse;
          } else {
            if ("document" === responseType) {
              self._cachedResponse = null;
            } else if ("arraybuffer" === responseType) {
              const obj = require("byteLength");
              self._cachedResponse = obj.toByteArray(self._response).buffer;
            } else if ("blob" === responseType) {
              if (typeof self._response === "object") {
                if (self._response) {
                  const _default2 = require("module_200").default;
                  self._cachedResponse = _default2.createFromOptions(self._response);
                }
              }
              if ("" !== self._response) {
                const _Error = Error;
                ({ _response: _response2, _response } = self);
                const _HermesInternal = HermesInternal;
                const self2 = this;
                const self3 = this;
                const error = new Error("Invalid response for blob - expecting object, was " + typeof _response + ": " + _response2.trim());
                throw error;
              } else {
                const _default = require("module_200").default;
                self._cachedResponse = _default.createFromParts([]);
              }
            } else if ("json" === responseType) {
              try {
                const _JSON = JSON;
                self._cachedResponse = JSON.parse(self._response);
              } catch (err) {
                self._cachedResponse = null;
              }
            }
            return self._cachedResponse;
          }
        }
      }
      let str4 = "";
      if (self.readyState >= 3) {
        str4 = "";
        if (!self._hasError) {
          str4 = self._response;
        }
      }
      return str4;
    }
  },
  {
    key: "__didCreateRequest",
    value: function __didCreateRequest(_requestId) {
      const self = this;
      this._requestId = _requestId;
      if (XMLHttpRequest._interceptor) {
        const _interceptor = XMLHttpRequest._interceptor;
        let str = self._url;
        const requestSent = _interceptor.requestSent;
        if (!str) {
          str = "";
        }
        const sent = requestSent(_requestId, str, tmp, self._headers);
      }
    }
  },
  {
    key: "__didUploadProgress",
    value: function __didUploadProgress(arg0, loaded, total) {
      if (arg0 === this._requestId) {
        const dispatchTrustedEvent = EVENT_TARGET_GET_THE_PARENT_KEY.dispatchTrustedEvent;
        const upload = tmp.upload;
        const self = this;
        const self2 = this;
        const obj = { lengthComputable: true, loaded, total };
        EVENT_TARGET_GET_THE_PARENT_KEY;
        const tmp9 = new _modDef207("progress", obj);
        dispatchTrustedEvent(upload, tmp9);
      }
    }
  },
  {
    key: "__didReceiveResponse",
    value: function __didReceiveResponse(arg0, status, arg2, arg3) {
      const self = this;
      if (arg0 === this._requestId) {
        const _performanceLogger = self._performanceLogger;
        const tmp = null != self._perfKey && null != _performanceLogger;
        if (tmp) {
          _performanceLogger.stopTimespan(self._perfKey);
        }
        let obj = arg2;
        let str = arg3;
        self.status = status;
        self.setResponseHeaders(arg2);
        self.setReadyState(self.HEADERS_RECEIVED);
        if (!arg3) {
          if ("" !== str) {
            delete self["responseURL"];
          }
          if (XMLHttpRequest._interceptor) {
            const _interceptor = XMLHttpRequest._interceptor;
            const responseReceived = _interceptor.responseReceived;
            if (!str) {
              str = self._url;
            }
            if (!str) {
              str = "";
            }
            if (!obj) {
              obj = {};
            }
            responseReceived(arg0, str, status, obj);
          }
        }
        self.responseURL = str;
      }
    }
  },
  {
    key: "__didReceiveData",
    value: function __didReceiveData(arg0, _response) {
      const self = this;
      if (arg0 === this._requestId) {
        self._response = _response;
        self._cachedResponse = undefined;
        self.setReadyState(self.LOADING);
        if (XMLHttpRequest._interceptor) {
          const _interceptor = XMLHttpRequest._interceptor;
          _interceptor.dataReceived(arg0, _response);
        }
      }
    }
  },
  {
    key: "__didReceiveIncrementalData",
    value: function __didReceiveIncrementalData(arg0, _response, loaded, total) {
      const self = this;
      if (arg0 === this._requestId) {
        if (self._response) {
          self._response = self._response + _response;
        } else {
          self._response = _response;
        }
        if (XMLHttpRequest._interceptor) {
          const _interceptor = XMLHttpRequest._interceptor;
          _interceptor.dataReceived(arg0, _response);
        }
        self.setReadyState(self.LOADING);
        const result = self.__didReceiveDataProgress(arg0, loaded, total);
      }
    }
  },
  {
    key: "__didReceiveDataProgress",
    value: function __didReceiveDataProgress(arg0, loaded, total) {
      if (arg0 === this._requestId) {
        const dispatchTrustedEvent = EVENT_TARGET_GET_THE_PARENT_KEY.dispatchTrustedEvent;
        const self = this;
        const self2 = this;
        const obj = { lengthComputable: total >= 0, loaded, total };
        EVENT_TARGET_GET_THE_PARENT_KEY;
        const tmp9 = new _modDef207("progress", obj);
        dispatchTrustedEvent(tmp, tmp9);
      }
    }
  },
  {
    key: "__didCompleteResponse",
    value: function __didCompleteResponse(arg0, _response, arg2) {
      const self = this;
      if (arg0 === this._requestId) {
        const tmp9 = _response;
        if (tmp9) {
          const tmp = "" !== self._responseType && "text" !== self._responseType;
          if (!tmp) {
            self._response = _response;
          }
          self._hasError = true;
          if (arg2) {
            self._timedOut = true;
          }
        }
        self._clearSubscriptions();
        self._requestId = null;
        self.setReadyState(self.DONE);
        const _interceptor = XMLHttpRequest._interceptor;
        if (_response) {
          if (_interceptor) {
            const _interceptor3 = XMLHttpRequest._interceptor;
            _interceptor3.loadingFailed(arg0, _response);
          }
        } else if (_interceptor) {
          const _interceptor2 = XMLHttpRequest._interceptor;
          _interceptor2.loadingFinished(arg0, self._response.length);
        }
      }
    }
  },
  {
    key: "_clearSubscriptions",
    value: function _clearSubscriptions() {
      const _subscriptions = this._subscriptions || [];
      const item = _subscriptions.forEach((remove) => {
        const tmp = remove;
        if (tmp) {
          remove.remove();
        }
      });
      this._subscriptions = [];
    }
  },
  {
    key: "getAllResponseHeaders",
    value: function getAllResponseHeaders() {
      if (this.responseHeaders) {
        const responseHeaders = this.responseHeaders;
        const _Map = Map;
        const self2 = this;
        const self = this;
        map = new Map();
        const _Object = Object;
        const keys = Object.keys(responseHeaders);
        const iter = keys[Symbol.iterator]();
        const str2 = iter.next();
        while (iter !== undefined) {
          let str3 = str2;
          let tmp8 = responseHeaders[str2];
          let formatted = str2.toLowerCase();
          let tmp10 = formatted;
          let value = map.get(formatted);
          let tmp12 = value;
          if (tmp12) {
            tmp12.headerValue = `${tmp12.headerValue}, ${tmp8}`;
            let result = map.set(tmp10, tmp12);
          } else {
            let obj = { lowerHeaderName: tmp10, upperHeaderName: str3.toUpperCase(), headerValue: tmp8 };
            set = map.set;
            let result1 = set(tmp10, obj);
          }
          continue;
        }
        const items = [];
        let num = 0;
        HermesBuiltin.arraySpread(items, map.values(), 0);
        const sorted = items.sort((upperHeaderName, upperHeaderName2) => {
          let num = -1;
          if (upperHeaderName.upperHeaderName >= upperHeaderName2.upperHeaderName) {
            let num2 = 0;
            if (upperHeaderName.upperHeaderName > upperHeaderName2.upperHeaderName) {
              num2 = 1;
            }
            num = num2;
          }
          return num;
        });
        const mapped = sorted.map((lowerHeaderName) => lowerHeaderName.lowerHeaderName + ": " + lowerHeaderName.headerValue);
        return mapped.join("\r\n") + "\r\n";
      } else {
        return null;
      }
    }
  },
  {
    key: "getResponseHeader",
    value: function getResponseHeader(arg0) {
      const tmp = this._lowerCaseResponseHeaders[arg0.toLowerCase(arg0)];
      let tmp2 = null;
      if (undefined !== tmp) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  },
  {
    key: "setRequestHeader",
    value: function setRequestHeader(baggage, StringResult) {
      if (this.readyState !== this.OPENED) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Request has not been opened");
        throw error;
      } else {
        const _headers = tmp._headers;
        const _String = String;
        const formatted = baggage.toLowerCase();
        _headers[formatted] = String(StringResult);
      }
    }
  },
  {
    key: "setTrackingName",
    value: function setTrackingName(_trackingName) {
      this._trackingName = _trackingName;
      return this;
    }
  },
  {
    key: "setPerformanceLogger",
    value: function setPerformanceLogger(_performanceLogger) {
      this._performanceLogger = _performanceLogger;
      return this;
    }
  },
  {
    key: "open",
    value: function open(str, _url, arg2) {
      const self = this;
      if (this.readyState !== this.UNSENT) {
        const _Error3 = Error;
        const self6 = this;
        const self7 = this;
        const error = new Error("Cannot open, already sending");
        throw error;
      } else {
        if (undefined !== arg2) {
          if (!arg2) {
            const _Error = Error;
            const self2 = this;
            const self3 = this;
            const error1 = new Error("Synchronous http requests are not supported");
            throw error1;
          }
        }
        const tmp4 = _url;
        if (tmp4) {
          self._method = str.toUpperCase();
          self._url = _url;
          self._aborted = false;
          self.setReadyState(self.OPENED);
        } else {
          const _Error2 = Error;
          const self4 = this;
          const self5 = this;
          const error2 = new Error("Cannot load an empty url");
          throw error2;
        }
      }
    }
  },
  {
    key: "send",
    value: function send(arg0) {
      let __didCreateRequest;
      let _headers;
      let _method;
      let _trackingName;
      let _url2;
      let timeout;
      const self = this;
      if (this.readyState !== this.OPENED) {
        const _Error2 = Error;
        const self4 = this;
        const self5 = this;
        const error = new Error("Request has not been opened");
        throw error;
      } else if (self._sent) {
        const _Error = Error;
        const self2 = this;
        const self3 = this;
        const error1 = new Error("Request has already been sent");
        throw error1;
      } else {
        self._sent = true;
        const _subscriptions = self._subscriptions;
        const push = _subscriptions.push;
        const _default = _mod208.default;
        push(_default.addListener("didSendNetworkData", (arg0) => {
          const items = [...arg0];
          return self.__didUploadProgress.apply(items);
        }));
        const _subscriptions1 = self._subscriptions;
        const push2 = _subscriptions1.push;
        const _default2 = _mod208.default;
        push2(_default2.addListener("didReceiveNetworkResponse", (arg0) => {
          const items = [...arg0];
          return self.__didReceiveResponse.apply(items);
        }));
        const _subscriptions2 = self._subscriptions;
        const push3 = _subscriptions2.push;
        const _default3 = _mod208.default;
        push3(_default3.addListener("didReceiveNetworkData", (arg0) => {
          const items = [...arg0];
          return self.__didReceiveData.apply(items);
        }));
        const _subscriptions3 = self._subscriptions;
        const push4 = _subscriptions3.push;
        const _default4 = _mod208.default;
        push4(_default4.addListener("didReceiveNetworkIncrementalData", (arg0) => {
          const items = [...arg0];
          return self.__didReceiveIncrementalData.apply(items);
        }));
        const _subscriptions4 = self._subscriptions;
        const push5 = _subscriptions4.push;
        const _default5 = _mod208.default;
        push5(_default5.addListener("didReceiveNetworkDataProgress", (arg0) => {
          const items = [...arg0];
          return self.__didReceiveDataProgress.apply(items);
        }));
        const _subscriptions5 = self._subscriptions;
        const push6 = _subscriptions5.push;
        const _default6 = _mod208.default;
        push6(_default6.addListener("didCompleteNetworkResponse", (arg0) => {
          const items = [...arg0];
          return self.__didCompleteResponse.apply(items);
        }));
        let str7 = "text";
        if ("arraybuffer" === self._responseType) {
          str7 = "base64";
        }
        if ("blob" === self._responseType) {
          str7 = "blob";
        }
        let _url = self._trackingName;
        if (_url == null) {
          _url = self._url;
        }
        const _performanceLogger = self._performanceLogger;
        if (null != _performanceLogger) {
          const _String = String;
          self._perfKey = `network_XMLHttpRequest_${String(_url)}`;
          _performanceLogger.startTimespan(self._perfKey);
        }
        _mod38(self._method, "XMLHttpRequest method needs to be defined (%s).", _url);
        _mod38(self._url, "XMLHttpRequest URL needs to be defined (%s).", _url);
        ({ _method, _trackingName } = self);
        const sendRequest = _mod208.default.sendRequest;
        ({ __didCreateRequest, _url: _url2, _headers, timeout } = self);
        const _default7 = _mod208.default;
        sendRequest(_method, _trackingName, _url2, _headers, arg0, str7, self._incrementalEvents || self.onreadystatechange || self.onprogress, timeout, __didCreateRequest.bind(self), self.withCredentials);
      }
    }
  },
  {
    key: "abort",
    value: function abort() {
      const self = this;
      this._aborted = true;
      if (this._requestId) {
        const _default = _mod208.default;
        _default.abortRequest(self._requestId);
      }
      let tmp4 = self.readyState === self.UNSENT;
      if (!tmp4) {
        tmp4 = self.readyState === self.OPENED && !self._sent;
      }
      if (!tmp4) {
        tmp4 = self.readyState === self.DONE;
      }
      if (!tmp4) {
        self._reset();
        self.setReadyState(self.DONE);
      }
      self._reset();
    }
  },
  {
    key: "setResponseHeaders",
    value: function setResponseHeaders(arg0) {
      let obj = arg0;
      this.responseHeaders = arg0 || null;
      if (!obj) {
        obj = {};
      }
      const keys = Object.keys(obj);
      this._lowerCaseResponseHeaders = keys.reduce((acc, item) => {
        acc[item.toLowerCase()] = obj[item];
        return acc;
      }, {});
    }
  },
  {
    key: "setReadyState",
    value: function setReadyState(DONE) {
      const self = this;
      this.readyState = DONE;
      const dispatchTrustedEvent = EVENT_TARGET_GET_THE_PARENT_KEY.dispatchTrustedEvent;
      EVENT_TARGET_GET_THE_PARENT_KEY;
      const tmp5 = new _modDef133("readystatechange");
      dispatchTrustedEvent(this, tmp5);
      if (DONE === this.DONE) {
        if (self._aborted) {
          const dispatchTrustedEvent4 = EVENT_TARGET_GET_THE_PARENT_KEY.dispatchTrustedEvent;
          const self5 = this;
          const self6 = this;
          EVENT_TARGET_GET_THE_PARENT_KEY;
          const tmp22 = new _modDef133("abort");
          const result = dispatchTrustedEvent4(self, tmp22);
        } else if (self._hasError) {
          const _timedOut = self._timedOut;
          const dispatchTrustedEvent3 = EVENT_TARGET_GET_THE_PARENT_KEY.dispatchTrustedEvent;
          EVENT_TARGET_GET_THE_PARENT_KEY;
          const tmp4Result = _modDef133;
          const self4 = this;
          if (_timedOut) {
            const tmp4Result1 = new tmp4Result("timeout");
            const result1 = dispatchTrustedEvent3(self, tmp4Result1);
          } else {
            const tmp4Result2 = new tmp4Result("error");
            const result2 = dispatchTrustedEvent3(self, tmp4Result2);
          }
        } else {
          const dispatchTrustedEvent2 = EVENT_TARGET_GET_THE_PARENT_KEY.dispatchTrustedEvent;
          const self2 = this;
          const self3 = this;
          EVENT_TARGET_GET_THE_PARENT_KEY;
          const tmp8 = new _modDef133("load");
          const result3 = dispatchTrustedEvent2(self, tmp8);
        }
        const dispatchTrustedEvent5 = EVENT_TARGET_GET_THE_PARENT_KEY.dispatchTrustedEvent;
        const self7 = this;
        const self8 = this;
        EVENT_TARGET_GET_THE_PARENT_KEY;
        const tmp26 = new _modDef133("loadend");
        const result4 = dispatchTrustedEvent5(self, tmp26);
      }
    }
  },
  {
    key: "addEventListener",
    value: function addEventListener(arg0, arg1) {
      const self = this;
      const tmp = "readystatechange" !== arg0 && "progress" !== arg0;
      if (!tmp) {
        self._incrementalEvents = true;
      }
      let fn = _get(_getPrototypeOf(XMLHttpRequest.prototype), "addEventListener", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0, arg1];
      fn(items);
    }
  },
  {
    key: "onabort",
    get() {
      const obj = require("module_205");
      return obj.getEventHandlerAttribute(this, "abort");
    },
    set(handleEvent) {
      const obj = require("module_205");
      const result = obj.setEventHandlerAttribute(this, "abort", handleEvent);
    }
  },
  {
    key: "onerror",
    get() {
      const obj = require("module_205");
      return obj.getEventHandlerAttribute(this, "error");
    },
    set(handleEvent) {
      const obj = require("module_205");
      const result = obj.setEventHandlerAttribute(this, "error", handleEvent);
    }
  },
  {
    key: "onload",
    get() {
      const obj = require("module_205");
      return obj.getEventHandlerAttribute(this, "load");
    },
    set(handleEvent) {
      const obj = require("module_205");
      const result = obj.setEventHandlerAttribute(this, "load", handleEvent);
    }
  },
  {
    key: "onloadstart",
    get() {
      const obj = require("module_205");
      return obj.getEventHandlerAttribute(this, "loadstart");
    },
    set(handleEvent) {
      const obj = require("module_205");
      const result = obj.setEventHandlerAttribute(this, "loadstart", handleEvent);
    }
  },
  {
    key: "onprogress",
    get() {
      const obj = require("module_205");
      return obj.getEventHandlerAttribute(this, "progress");
    },
    set(handleEvent) {
      const obj = require("module_205");
      const result = obj.setEventHandlerAttribute(this, "progress", handleEvent);
    }
  },
  {
    key: "ontimeout",
    get() {
      const obj = require("module_205");
      return obj.getEventHandlerAttribute(this, "timeout");
    },
    set(handleEvent) {
      const obj = require("module_205");
      const result = obj.setEventHandlerAttribute(this, "timeout", handleEvent);
    }
  },
  {
    key: "onloadend",
    get() {
      const obj = require("module_205");
      return obj.getEventHandlerAttribute(this, "loadend");
    },
    set(handleEvent) {
      const obj = require("module_205");
      const result = obj.setEventHandlerAttribute(this, "loadend", handleEvent);
    }
  },
  {
    key: "onreadystatechange",
    get() {
      const obj = require("module_205");
      return obj.getEventHandlerAttribute(this, "readystatechange");
    },
    set(handleEvent) {
      const obj = require("module_205");
      const result = obj.setEventHandlerAttribute(this, "readystatechange", handleEvent);
    }
  }
];
const entry1 = {
  key: "__setInterceptor_DO_NOT_USE",
  value: function __setInterceptor_DO_NOT_USE(_interceptor) {
    XMLHttpRequest._interceptor = _interceptor;
  }
};
const items2 = [entry1];
const importDefaultResultResult = _createClass(XMLHttpRequest, items1, items2);
importDefaultResultResult.UNSENT = 0;
importDefaultResultResult.OPENED = 1;
importDefaultResultResult.HEADERS_RECEIVED = 2;
importDefaultResultResult.LOADING = 3;
importDefaultResultResult.DONE = 4;
importDefaultResultResult._interceptor = null;

export default importDefaultResultResult;