// === Module 199: _isNativeReflectConstruct ===

// Module 199 (_isNativeReflectConstruct)
import _get from "_get";
import _classCallCheck from "_classCallCheck";
import importDefaultResult from "_createClass";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult1 from "_inherits";

let XMLHttpRequest = arg1;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
if (require("BlobManager").default.isAvailable) {
  require("BlobManager").default.addNetworkingHandler();
  let _default = require("BlobManager").default;
}
let closure_8 = { arraybuffer: typeof global.ArrayBuffer === "error", blob: typeof global.Blob === "error", document: false, json: true, text: true, "": true };
class XMLHttpRequestEventTarget {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, XMLHttpRequest);
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(XMLHttpRequest);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
XMLHttpRequest = XMLHttpRequestEventTarget;
importDefaultResult1(XMLHttpRequestEventTarget, require("dispatch"));
let obj = {
  key: "onload",
  get() {
    return XMLHttpRequest(205).getEventHandlerAttribute(this, "load");
  },
  set(arg0) {
    const result = XMLHttpRequest(205).setEventHandlerAttribute(this, "load", arg0);
  }
};
let items = [
  obj,
  {
    key: "onloadstart",
    get() {
      return XMLHttpRequest(205).getEventHandlerAttribute(this, "loadstart");
    },
    set(arg0) {
      const result = XMLHttpRequest(205).setEventHandlerAttribute(this, "loadstart", arg0);
    }
  },
  {
    key: "onprogress",
    get() {
      return XMLHttpRequest(205).getEventHandlerAttribute(this, "progress");
    },
    set(arg0) {
      const result = XMLHttpRequest(205).setEventHandlerAttribute(this, "progress", arg0);
    }
  },
  {
    key: "ontimeout",
    get() {
      return XMLHttpRequest(205).getEventHandlerAttribute(this, "timeout");
    },
    set(arg0) {
      const result = XMLHttpRequest(205).setEventHandlerAttribute(this, "timeout", arg0);
    }
  },
  {
    key: "onerror",
    get() {
      return XMLHttpRequest(205).getEventHandlerAttribute(this, "error");
    },
    set(arg0) {
      const result = XMLHttpRequest(205).setEventHandlerAttribute(this, "error", arg0);
    }
  },
  {
    key: "onabort",
    get() {
      return XMLHttpRequest(205).getEventHandlerAttribute(this, "abort");
    },
    set(arg0) {
      const result = XMLHttpRequest(205).setEventHandlerAttribute(this, "abort", arg0);
    }
  },
  {
    key: "onloadend",
    get() {
      return XMLHttpRequest(205).getEventHandlerAttribute(this, "loadend");
    },
    set(arg0) {
      const result = XMLHttpRequest(205).setEventHandlerAttribute(this, "loadend", arg0);
    }
  }
];
let closure_9 = importDefaultResult(XMLHttpRequestEventTarget, items);
class XMLHttpRequest {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, XMLHttpRequest);
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(XMLHttpRequest);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.UNSENT = 0;
    tmp3Result.OPENED = 1;
    tmp3Result.HEADERS_RECEIVED = 2;
    tmp3Result.LOADING = 3;
    tmp3Result.DONE = 4;
    tmp3Result.readyState = 0;
    tmp3Result.status = 0;
    tmp3Result.timeout = 0;
    tmp3Result.withCredentials = true;
    tmp6 = new set();
    tmp3Result.upload = tmp6;
    tmp3Result._aborted = false;
    tmp3Result._hasError = false;
    tmp3Result._method = null;
    tmp3Result._perfKey = null;
    tmp3Result._response = "";
    tmp3Result._url = null;
    tmp3Result._timedOut = false;
    tmp3Result._incrementalEvents = false;
    tmp3Result._performanceLogger = null;
    _resetResult = tmp3Result._reset();
    return tmp3Result;
  }
}
importDefaultResult1(XMLHttpRequest, require("dispatch"));
obj = {
  key: "_reset",
  value: function _reset() {
    this.readyState = this.UNSENT;
    this.responseHeaders = undefined;
    this.status = 0;
    delete tmp[tmp2];
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
  obj,
  {
    key: "responseType",
    get() {
      return this._responseType;
    },
    set(_responseType) {
      if (this._sent) {
        const _Error = Error;
        const error = new Error("Failed to set the 'responseType' property on 'XMLHttpRequest': The response type cannot be set after the request has been sent.");
        throw error;
      } else if (closure_8.hasOwnProperty(_responseType)) {
        let tmp9 = closure_8[_responseType];
        if (!tmp9) {
          tmp9 = "document" === _responseType;
        }
        const _HermesInternal2 = HermesInternal;
        XMLHttpRequest(38)(tmp9, "The provided value '" + _responseType + "' is unsupported in this environment.");
        if ("blob" === _responseType) {
          tmp6(38)(tmp6(200).default.isAvailable, "Native module BlobModule is required for blob support");
          const tmp6Result = tmp6(38);
        }
        tmp._responseType = _responseType;
        const tmp8 = XMLHttpRequest(38);
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
              self._cachedResponse = XMLHttpRequest(206).toByteArray(self._response).buffer;
              const obj = XMLHttpRequest(206);
            } else if ("blob" === responseType) {
              if (typeof self._response !== "window") {
                if (self._response) {
                  self._cachedResponse = XMLHttpRequest(200).default.createFromOptions(self._response);
                  const _default2 = XMLHttpRequest(200).default;
                }
              }
              if ("" !== self._response) {
                const _Error = Error;
                ({ _response: _response2, _response } = self);
                const _HermesInternal = HermesInternal;
                const error = new Error("Invalid response for blob - expecting object, was " + typeof _response + ": " + _response2.trim());
                throw error;
              } else {
                self._cachedResponse = XMLHttpRequest(200).default.createFromParts([]);
                const _default = XMLHttpRequest(200).default;
              }
            } else if ("json" === responseType) {
              try {
                const _JSON = JSON;
                self._cachedResponse = JSON.parse(self._response);
              } catch (err) {
                tmp._cachedResponse = null;
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
        if (!str) {
          str = "";
        }
        const sent = _interceptor.requestSent(_requestId, str, tmp, self._headers);
      }
    }
  },
  {
    key: "__didUploadProgress",
    value: function __didUploadProgress(arg0, arg1, arg2) {
      if (arg0 === this._requestId) {
        let obj = XMLHttpRequest(135);
        obj = { lengthComputable: true, loaded: null, total: null };
        obj[1] = arg1;
        obj[2] = arg2;
        const tmp10 = new importDefault(207)("progress", obj);
        obj.dispatchTrustedEvent(tmp.upload, tmp10);
      }
    }
  },
  {
    key: "__didReceiveResponse",
    value: function __didReceiveResponse(arg0, status) {
      const self = this;
      if (arg0 === this._requestId) {
        const _performanceLogger = self._performanceLogger;
        if (tmp3) {
          _performanceLogger.stopTimespan(self._perfKey);
        }
        let obj = arg2;
        let str = arg3;
        self.status = status;
        self.setResponseHeaders(arg2);
        self.setReadyState(self.HEADERS_RECEIVED);
        if (!arg3) {
          if ("" !== str) {
            delete tmp2[tmp];
          }
          if (XMLHttpRequest._interceptor) {
            const _interceptor = XMLHttpRequest._interceptor;
            if (!str) {
              str = self._url;
            }
            if (!str) {
              str = "";
            }
            if (!obj) {
              obj = {};
            }
            _interceptor.responseReceived(arg0, str, status, obj);
          }
        }
        self.responseURL = str;
        tmp3 = null != self._perfKey && null != _performanceLogger;
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
    value: function __didReceiveIncrementalData(arg0, _response) {
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
        const result = self.__didReceiveDataProgress(arg0, arg2, arg3);
      }
    }
  },
  {
    key: "__didReceiveDataProgress",
    value: function __didReceiveDataProgress(arg0, arg1, arg2) {
      if (arg0 === this._requestId) {
        let obj = XMLHttpRequest(135);
        obj = { lengthComputable: null, loaded: null, total: null };
        obj[0] = arg2 >= 0;
        obj[1] = arg1;
        obj[2] = arg2;
        const tmp10 = new importDefault(207)("progress", obj);
        obj.dispatchTrustedEvent(tmp, tmp10);
      }
    }
  },
  {
    key: "__didCompleteResponse",
    value: function __didCompleteResponse(arg0, _response) {
      const self = this;
      if (arg0 === this._requestId) {
        if (_response) {
          let tmp = "" !== self._responseType;
          if (tmp) {
            tmp = "text" !== self._responseType;
          }
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
            const _interceptor3 = tmp6._interceptor;
            _interceptor3.loadingFailed(arg0, _response);
          }
        } else if (_interceptor) {
          const _interceptor2 = tmp6._interceptor;
          _interceptor2.loadingFinished(arg0, self._response.length);
        }
      }
    }
  },
  {
    key: "_clearSubscriptions",
    value: function _clearSubscriptions() {
      let _subscriptions = this._subscriptions;
      if (!_subscriptions) {
        _subscriptions = [];
      }
      const item = _subscriptions.forEach((remove) => {
        if (remove) {
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
        const map = new Map();
        const _Object = Object;
        const keys = Object.keys(responseHeaders);
        const iter = keys[Symbol.iterator]();
        const str2 = iter.next();
        while (iter !== undefined) {
          let str3 = str2;
          let tmp10 = responseHeaders[str2];
          let formatted = str2.toLowerCase();
          let tmp12 = formatted;
          let value = map.get(formatted);
          let tmp14 = value;
          if (value) {
            let tmp19 = value;
            let tmp20 = tmp10;
            tmp14.headerValue = `${tmp14.headerValue}, ${tmp10}`;
            let tmp21 = formatted;
            let result = map.set(tmp12, tmp14);
          } else {
            let tmp15 = formatted;
            let obj = { lowerHeaderName: null, upperHeaderName: null, headerValue: null };
            obj[0] = tmp12;
            let tmp16 = str2;
            obj[1] = str3.toUpperCase();
            let tmp17 = tmp10;
            obj[2] = tmp10;
            let result1 = map.set(tmp12, obj);
          }
          continue;
        }
        const items = [];
        HermesBuiltin.arraySpread(map.values(), 0);
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
        const error = new Error("Request has not been opened");
        throw error;
      } else {
        const _String = String;
        const formatted = baggage.toLowerCase();
        tmp._headers[formatted] = String(StringResult);
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
    value: function open(str, _url) {
      const self = this;
      if (this.readyState !== this.UNSENT) {
        const _Error3 = Error;
        const error = new Error("Cannot open, already sending");
        throw error;
      } else {
        if (undefined !== arg2) {
          if (!arg2) {
            const _Error = Error;
            const error1 = new Error("Synchronous http requests are not supported");
            throw error1;
          }
        }
        if (_url) {
          self._method = str.toUpperCase();
          self._url = _url;
          self._aborted = false;
          self.setReadyState(self.OPENED);
        } else {
          const _Error2 = Error;
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
      let self = this;
      self = this;
      if (this.readyState !== this.OPENED) {
        const _Error2 = Error;
        const error = new Error("Request has not been opened");
        throw error;
      } else if (self._sent) {
        const _Error = Error;
        const error1 = new Error("Request has already been sent");
        throw error1;
      } else {
        self._sent = true;
        const _subscriptions = self._subscriptions;
        _subscriptions.push(self(208).default.addListener("didSendNetworkData", (arg0) => {
          const items = [...arg0];
          return self.__didUploadProgress.apply(items);
        }));
        const _subscriptions1 = self._subscriptions;
        const _default = self(208).default;
        _subscriptions1.push(self(208).default.addListener("didReceiveNetworkResponse", (arg0) => {
          const items = [...arg0];
          return self.__didReceiveResponse.apply(items);
        }));
        const _subscriptions2 = self._subscriptions;
        const _default2 = self(208).default;
        _subscriptions2.push(self(208).default.addListener("didReceiveNetworkData", (arg0) => {
          const items = [...arg0];
          return self.__didReceiveData.apply(items);
        }));
        const _subscriptions3 = self._subscriptions;
        const _default3 = self(208).default;
        _subscriptions3.push(self(208).default.addListener("didReceiveNetworkIncrementalData", (arg0) => {
          const items = [...arg0];
          return self.__didReceiveIncrementalData.apply(items);
        }));
        const _subscriptions4 = self._subscriptions;
        const _default4 = self(208).default;
        _subscriptions4.push(self(208).default.addListener("didReceiveNetworkDataProgress", (arg0) => {
          const items = [...arg0];
          return self.__didReceiveDataProgress.apply(items);
        }));
        const _subscriptions5 = self._subscriptions;
        const _default5 = self(208).default;
        _subscriptions5.push(self(208).default.addListener("didCompleteNetworkResponse", (arg0) => {
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
        self(38)(self._method, "XMLHttpRequest method needs to be defined (%s).", _url);
        self(38)(self._url, "XMLHttpRequest URL needs to be defined (%s).", _url);
        const _default7 = self(208).default;
        ({ _method, _trackingName } = self);
        ({ __didCreateRequest, _url: _url2, _headers, timeout } = self);
        _default7.sendRequest(_method, _trackingName, _url2, _headers, arg0, str7, self._incrementalEvents || self.onreadystatechange || self.onprogress, timeout, __didCreateRequest.bind(self), self.withCredentials);
      }
    }
  },
  {
    key: "abort",
    value: function abort() {
      const self = this;
      this._aborted = true;
      if (this._requestId) {
        XMLHttpRequest(208).default.abortRequest(self._requestId);
        const _default = XMLHttpRequest(208).default;
      }
      let tmp4 = self.readyState === self.UNSENT;
      if (!tmp4) {
        tmp4 = self.readyState === self.OPENED && !self._sent;
        const tmp5 = self.readyState === self.OPENED && !self._sent;
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
      let tmp = arg0;
      if (!arg0) {
        tmp = null;
      }
      this.responseHeaders = tmp;
      if (!obj) {
        obj = {};
      }
      const keys = Object.keys(obj);
      this._lowerCaseResponseHeaders = keys.reduce((arg0, str) => {
        arg0[str.toLowerCase()] = obj[str];
        return arg0;
      }, {});
    }
  },
  {
    key: "setReadyState",
    value: function setReadyState(DONE) {
      const self = this;
      this.readyState = DONE;
      let obj = XMLHttpRequest;
      let tmp2 = importDefault;
      const obj2 = XMLHttpRequest(135);
      obj2.dispatchTrustedEvent(this, new importDefault(133)("readystatechange"));
      if (DONE === this.DONE) {
        if (self._aborted) {
          let objResult = obj(135);
          const tmp23 = new tmp2(133)("abort");
          objResult.dispatchTrustedEvent(self, tmp23);
          obj = obj(135);
          let tmp2Result = tmp2(133);
          tmp2 = new.target;
          tmp2Result = new tmp2Result("loadend");
          obj.dispatchTrustedEvent(self, tmp2Result);
        } else if (!self._hasError) {
          objResult = obj(135);
          const tmp7 = new tmp2(133)("load");
          objResult.dispatchTrustedEvent(self, tmp7);
        }
        const dispatchTrustedEvent = obj(135).dispatchTrustedEvent;
        const tmp2Result1 = tmp2(133);
        if (self._timedOut) {
          const tmp2Result11 = new tmp2Result1("timeout");
          dispatchTrustedEvent(self, tmp2Result11);
        } else {
          const tmp2Result12 = new tmp2Result1("error");
          dispatchTrustedEvent(self, tmp2Result12);
        }
        const objResult1 = obj(135);
      }
    }
  },
  {
    key: "addEventListener",
    value: function addEventListener(arg0, arg1) {
      let tmp = "readystatechange" !== arg0;
      if (tmp) {
        tmp = "progress" !== arg0;
      }
      const self = this;
      if (!tmp) {
        self._incrementalEvents = true;
      }
      let fn = callback(callback3(self.prototype), "addEventListener", self);
      if (typeof fn !== "HAS_APPLICATION") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0, arg1];
      fn(items);
    }
  },
  {
    key: "onabort",
    get() {
      return XMLHttpRequest(205).getEventHandlerAttribute(this, "abort");
    },
    set(arg0) {
      const result = XMLHttpRequest(205).setEventHandlerAttribute(this, "abort", arg0);
    }
  },
  {
    key: "onerror",
    get() {
      return XMLHttpRequest(205).getEventHandlerAttribute(this, "error");
    },
    set(arg0) {
      const result = XMLHttpRequest(205).setEventHandlerAttribute(this, "error", arg0);
    }
  },
  {
    key: "onload",
    get() {
      return XMLHttpRequest(205).getEventHandlerAttribute(this, "load");
    },
    set(arg0) {
      const result = XMLHttpRequest(205).setEventHandlerAttribute(this, "load", arg0);
    }
  },
  {
    key: "onloadstart",
    get() {
      return XMLHttpRequest(205).getEventHandlerAttribute(this, "loadstart");
    },
    set(arg0) {
      const result = XMLHttpRequest(205).setEventHandlerAttribute(this, "loadstart", arg0);
    }
  },
  {
    key: "onprogress",
    get() {
      return XMLHttpRequest(205).getEventHandlerAttribute(this, "progress");
    },
    set(arg0) {
      const result = XMLHttpRequest(205).setEventHandlerAttribute(this, "progress", arg0);
    }
  },
  {
    key: "ontimeout",
    get() {
      return XMLHttpRequest(205).getEventHandlerAttribute(this, "timeout");
    },
    set(arg0) {
      const result = XMLHttpRequest(205).setEventHandlerAttribute(this, "timeout", arg0);
    }
  },
  {
    key: "onloadend",
    get() {
      return XMLHttpRequest(205).getEventHandlerAttribute(this, "loadend");
    },
    set(arg0) {
      const result = XMLHttpRequest(205).setEventHandlerAttribute(this, "loadend", arg0);
    }
  },
  {
    key: "onreadystatechange",
    get() {
      return XMLHttpRequest(205).getEventHandlerAttribute(this, "readystatechange");
    },
    set(arg0) {
      const result = XMLHttpRequest(205).setEventHandlerAttribute(this, "readystatechange", arg0);
    }
  }
];
obj = {
  key: "__setInterceptor_DO_NOT_USE",
  value: function __setInterceptor_DO_NOT_USE(_interceptor) {
    XMLHttpRequest._interceptor = _interceptor;
  }
};
const items2 = [obj];
const importDefaultResultResult = importDefaultResult(XMLHttpRequest, items1, items2);
importDefaultResultResult.UNSENT = 0;
importDefaultResultResult.OPENED = 1;
importDefaultResultResult.HEADERS_RECEIVED = 2;
importDefaultResultResult.LOADING = 3;
importDefaultResultResult.DONE = 4;
importDefaultResultResult._interceptor = null;

export default importDefaultResultResult;