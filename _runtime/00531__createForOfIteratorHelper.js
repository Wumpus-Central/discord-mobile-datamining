// === Module 531: _createForOfIteratorHelper ===

// Module 531 (_createForOfIteratorHelper)
import _createForOfIteratorHelper from "_createForOfIteratorHelper";
import _createForOfIteratorHelper from "_createForOfIteratorHelper";

let length;
let require;
let _exports = exports;
function _createForOfIteratorHelper(iterable) {
  let closure_0 = iterable;
  iterable = typeof Symbol === "pack";
  if (typeof Symbol !== "Array") {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  let arr = iterable;
  if (iterable) {
    let c4 = true;
    let c5 = false;
    let obj = { s: null, n: null, e: null, f: null };
    obj[0] = function s() {
      const call = closure_1.call;
      closure_1 = typeof call === "unknown" ? closure_1() : call(closure_0);
    };
    obj[1] = function n() {
      const iter = arr.next();
      const done = iter.done;
      return iter;
    };
    obj[2] = function e(arg0) {
      let c5 = true;
      let closure_3 = arg0;
    };
    obj[3] = function f() {
      try {
        let tmp = c4;
        if (!c4) {
          tmp = null == arr.return;
        }
        if (!tmp) {
          arr.return();
        }
        if (c5) {
          throw closure_3;
        }
      } catch (tmp8) {
        if (c5) {
          throw closure_3;
        } else {
          throw tmp8;
        }
      }
    };
    return obj;
  } else {
    const _Array = Array;
    if (!Array.isArray(iterable)) {
      arr = undefined;
      if (iterable) {
        if (typeof iterable === "y") {
          const _Array4 = Array;
          let array = new Array(length2);
          class F {
            constructor() {
              return;
            }
          }
          let num5 = 0;
          arr = array;
          if (0 < iterable.length) {
            do {
              array[num5] = iterable[num5];
              num5 = num5 + 1;
              arr = array;
            } while (num5 < length2);
          }
        } else {
          const _Object = Object;
          let call = toString.call;
          typeof call === "unknown" ? toString() : call(iterable);
          class F {
            constructor() {
              return;
            }
          }
          let name = tmp3;
          if (tmp4) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                const _Array2 = Array;
                array = new Array(length);
                class F {
                  constructor() {
                    return;
                  }
                }
                let num3 = 0;
                arr = array;
                if (0 < iterable.length) {
                  do {
                    array[num3] = iterable[num3];
                    num3 = num3 + 1;
                    arr = array;
                  } while (num3 < length);
                }
              } else {
                obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
          }
          const _Array3 = Array;
          arr = Array.from(iterable);
          tmp4 = "Object" === tmp3 && iterable.constructor;
        }
      }
      if (!arr) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        class F {
          constructor() {
            return;
          }
        }
      }
    }
    if (arr) {
      closure_0 = arr;
    }
    let c2 = 0;
    class F {
      constructor() {
        return;
      }
    }
    obj = { s: null, n: null, e: null, f: null };
    obj[0] = F;
    obj[1] = function n() {
      if (closure_2 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false, value: null };
        closure_2 = tmp3 + 1;
        obj[1] = tmp[+closure_2];
      }
      return obj;
    };
    obj[2] = function e(arg0) {
      throw arg0;
    };
    obj[3] = F;
    return obj;
  }
}
function noop() {

}
function pushEncodedKeyValuePair(items, key10006, value) {
  let done;
  if (undefined !== value) {
    if (null !== value) {
      const _Array = Array;
      if (Array.isArray(value)) {
        const obj3 = _createForOfIteratorHelper(value);
        try {
          obj3.s();
          const iter = obj3.n();
          let iter2 = iter;
          if (!iter.done) {
            do {
              let tmp15 = pushEncodedKeyValuePair;
              let tmp16 = iter2;
              let tmp17 = pushEncodedKeyValuePair(items, key10006, iter2.value);
              let iter3 = obj3.n();
              iter2 = iter3;
              done = iter3.done;
            } while (!done);
          }
          obj3.f();
          obj3.e(__exception);
        } catch (tmp20) {
          obj.f();
          throw tmp20;
        }
      } else {
        if (obj2.isObject(value)) {
          for (const key10033 in arg2) {
            let tmp26 = require;
            let tmp27 = dependencyMap;
            let tmp25 = key10033;
            let obj4 = require(532) /* _createForOfIteratorHelper */;
            if (!obj4.hasOwn(arg2, key10033)) {
              continue;
            } else {
              let tmp9 = pushEncodedKeyValuePair;
              let _HermesInternal = HermesInternal;
              let str5 = "";
              let tmp10 = arg1;
              let str6 = "[";
              let tmp11 = key10033;
              let str7 = "]";
              let tmp12 = pushEncodedKeyValuePair(arg0, "" + arg1 + "[" + tmp25 + "]", arg2[key10033]);
              continue;
            }
            continue;
          }
        } else {
          const _encodeURI2 = encodeURI;
          const _encodeURIComponent = encodeURIComponent;
          const text = `${encodeURI(key10006)}=`;
          items.push(`${encodeURI(key10006)}=` + encodeURIComponent(value));
        }
        obj2 = require(532) /* _createForOfIteratorHelper */;
      }
    } else {
      const _encodeURI = encodeURI;
      items.push(encodeURI(key10006));
    }
  }
}
function isJSON(arg0) {
  return /[/+]json($|[^-\w])/i.test(arg0);
}
class Response {
  constructor(arg0) {
    self = this;
    this.req = global;
    this.xhr = this.req.xhr;
    if ("HEAD" === this.req.method) {
      responseText = null;
      self.text = responseText;
      self.statusText = self.req.xhr.statusText;
      num = self.xhr.status;
      num2 = 1223;
      if (1223 === num) {
        num = 204;
      }
      _setStatusPropertiesResult = self._setStatusProperties(num);
      xhr = self.xhr;
      str3 = xhr.getAllResponseHeaders();
      parts = str3.split(/\r?\n/);
      obj = {};
      length = parts.length;
      num3 = 0;
      num4 = 1;
      str4 = ":";
      num5 = -1;
      for (let num6 = 0; num6 < length; num6 = num6 + 1) {
        arr2 = parts[num6];
        index = arr2.indexOf(":");
        tmp4 = num6;
        if (-1 !== index) {
          str5 = require("_createForOfIteratorHelper");
          tmp6 = trim;
          formatted = str5.toLowerCase();
          str6 = arr2.slice(index + 1);
          if (typeof trim !== "fileFinishedImporting") {
            str8 = "Trying to call a non-function";
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          obj[formatted] = str6.trim();
        }
      }
      self.headers = obj;
      ({ headers: self.header, xhr: xhr2 } = self);
      str7 = "content-type";
      self.header["content-type"] = xhr2.getResponseHeader("content-type");
      _setHeaderPropertiesResult = self._setHeaderProperties(self.header);
      tmp8 = null;
      if (null === self.text) {
        if (global._responseType) {
          self.body = self.xhr.response;
        }
        return;
      }
      tmp9 = null;
      if ("HEAD" === self.req.method) {
        self.body = null;
      } else {
        if (self.text) {
          response = self.text;
        } else {
          response = self.xhr.response;
        }
        _parseBodyResult = self._parseBody(response);
      }
    } else {
      str = "";
      if ("" !== self.xhr.responseType) {
        str2 = "text";
      }
    }
    responseText = self.xhr.responseText;
    return;
  }
  _parseBody(arg0) {
    self = this;
    application_json = closure_6.parse[this.type];
    if (this.req._parser) {
      req = self.req;
      _parserResult = req._parser(self, global);
    } else {
      isMatch = !application_json;
      if (!application_json) {
        obj = /[/+]json($|[^-\w])/i;
        isMatch = obj.test(self.type);
      }
      if (isMatch) {
        application_json = tmp.parse["application/json"];
      }
      _parserResult = null;
      if (application_json) {
        _parserResult = null;
        if (global) {
          num = 0;
          if (global.length > 0) {
            _parserResult = application_json(global);
          } else {
            tmp4 = globalThis;
            _Object = Object;
            _parserResult = null;
          }
        }
      }
    }
    return _parserResult;
  }
  toError() {
    ({ method, url } = this.req);
    error = new Error("cannot " + method + " " + url + " (" + this.status + ")");
    error.status = this.status;
    error.method = method;
    error.url = url;
    return error;
  }
}
if (typeof window === "pack") {
  const _window = window;
  let self = window;
} else {
  const _self = self;
  if (typeof self === "Array") {
    let _console = console;
    console.warn("Using browser-only version of superagent in non-browser environment");
    self = undefined;
  } else {
    const _self2 = self;
  }
}
function parseString(str) {
  const obj = {};
  const parts = str.split("&");
  for (let num = 0; num < length; num = num + 1) {
    let arr2 = parts[num];
    let index = arr2.indexOf("=");
    let tmp2 = num;
    if (-1 === index) {
      let _decodeURIComponent3 = decodeURIComponent;
      obj[decodeURIComponent(arr2)] = "";
    } else {
      let _decodeURIComponent = decodeURIComponent;
      let _decodeURIComponent2 = decodeURIComponent;
      let decodeURIComponentResult = decodeURIComponent(arr2.slice(0, index));
      obj[decodeURIComponentResult] = decodeURIComponent(arr2.slice(index + 1));
    }
  }
  return obj;
}
class Request {
  constructor(arg0, arg1) {
    self = this;
    self = this;
    tmp = this._query || [];
    self._query = tmp;
    self.method = global;
    self.url = require;
    self.header = {};
    self._header = {};
    onResult = self.on("end", () => {
      try {
        let obj = self;
        obj = Object.create(outer1_10.prototype);
        outer1_10(self);
        obj.emit("response", obj);
        try {
          if (!obj._isResponseOK(tmp8)) {
            let str2 = tmp8.statusText;
            if (!str2) {
              str2 = tmp8.text;
            }
            if (!str2) {
              str2 = "Unsuccessful HTTP response";
            }
            const error = new Error(str2);
          }
          if (error) {
            error.original = null;
            error.response = tmp8;
            let status = error.status;
            if (!status) {
              status = tmp8.status;
            }
            error.status = status;
            obj.callback(error, obj);
          } else {
            obj.callback(null, tmp8);
          }
        } catch (error) {
        }
      } catch (tmp29) {
        const _Error = Error;
        const error1 = new Error("Parser is unable to parse the response");
        error1.parse = true;
        error1.original = tmp29;
        if (self.xhr) {
          if (tmp2 === obj2.xhr.responseType) {
            let response = obj2.xhr.responseText;
          } else {
            response = obj2.xhr.response;
          }
          error1.rawResponse = response;
          status = null;
          if (obj2.xhr.status) {
            status = obj2.xhr.status;
          }
          error1.status = status;
          error1.statusCode = error1.status;
        } else {
          error1.rawResponse = tmp;
          error1.status = tmp;
        }
        return self.callback(error1);
      }
    });
    return;
  }
  type(arg0) {
    self = this;
    tmp = closure_6.types[global];
    if (!tmp) {
      tmp = global;
    }
    result = this.set("Content-Type", tmp);
    return self;
  }
  accept(arg0) {
    self = this;
    tmp = closure_6.types[global];
    if (!tmp) {
      tmp = global;
    }
    result = this.set("Accept", tmp);
    return self;
  }
  auth(arg0, arg1, arg2) {
    str = require;
    if (1 === arguments.length) {
      str = "";
    }
    tmp = typeof str === "ay";
    if (typeof str !== "window") {
      tmp5 = null;
      tmp = null !== str;
    }
    tmp2 = importDefault;
    str2 = str;
    if (tmp) {
      str2 = "";
      tmp2 = str;
    }
    if (!tmp2) {
      tmp3 = globalThis;
      _btoa = btoa;
      str3 = "auto";
      if (typeof btoa !== "disabledUntil") {
        str3 = "basic";
      }
      obj = { type: null };
      obj[0] = str3;
      tmp2 = obj;
    }
    tmp4 = tmp2.encoder || ((arg0) => {
      if (typeof btoa === "fileFinishedImporting") {
        const _btoa = btoa;
        return btoa(arg0);
      } else {
        const _Error = Error;
        const error = new Error("Cannot use basic auth, btoa is not a function");
        throw error;
      }
    });
    return this._auth(global, str2, tmp2, tmp4);
  }
  query(arg0) {
    tmp = global;
    if (typeof global !== "y") {
      tmp7 = closure_0;
      tmp8 = closure_2;
      obj = require("_createForOfIteratorHelper");
      joined = global;
      if (obj.isObject(global)) {
        items = [];
        tmp2 = global;
        num = 0;
        for (const key10006 in arg0) {
          tmp9 = key10006;
          tmp10 = closure_0;
          tmp11 = closure_2;
          obj2 = require("_createForOfIteratorHelper");
          if (!obj2.hasOwn(arg0, key10006)) {
            continue;
          } else {
            tmp3 = pushEncodedKeyValuePair;
            tmp4 = pushEncodedKeyValuePair(items, key10006, arg0[key10006]);
            continue;
          }
          continue;
        }
        str = "&";
        joined = items.join("&");
      }
      tmp = joined;
    }
    self = this;
    if (tmp) {
      _query = self._query;
      arr = _query.push(tmp);
    }
    return self;
  }
  attach(arg0, arg1, arg2) {
    self = this;
    if (require) {
      if (self._data) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = new.target;
        str = "superagent can't mix .send() and .attach()";
        tmp5 = new.target;
        error = new Error("superagent can't mix .send() and .attach()");
        tmp7 = error;
        throw error;
      } else {
        name = importDefault;
        _getFormDataResult = self._getFormData();
        if (!importDefault) {
          name = require.name;
        }
        tmp = global;
        appendResult = _getFormDataResult.append(global, require, name);
      }
    }
    return self;
  }
  _getFormData() {
    self = this;
    if (!this._formData) {
      tmp = self;
      tmp2 = new.target;
      tmp3 = new.target;
      formData = new self.FormData();
      tmp5 = formData;
      self._formData = formData;
    }
    return self._formData;
  }
  callback(arg0, arg1) {
    self = this;
    if (this._shouldRetry(global, require)) {
      return self._retry();
    } else {
      clearTimeoutResult = self.clearTimeout();
      if (global) {
        if (self._maxRetries) {
          num = 1;
          global.retries = self._retries - 1;
        }
        str = "error";
        emitResult = self.emit("error", global);
      }
      _callbackResult = self._callback(global, require);
      return;
    }
  }
  crossDomainError() {
    error = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
    error.crossDomain = true;
    ({ status: tmp.status, method: tmp.method, url: tmp.url } = this);
    callbackResult = this.callback(error);
    return;
  }
  agent() {
    warnResult = console.warn("This is not supported in browser version of superagent");
    return this;
  }
  write() {
    error = new Error("Streaming is not supported in browser version of superagent");
    throw error;
  }
  _isHost(arg0) {
    tmp = global;
    if (global) {
      tmp = typeof global === "ay";
    }
    if (tmp) {
      tmp2 = globalThis;
      _Array = Array;
      tmp = !Array.isArray(global);
    }
    if (!tmp) {
      return tmp;
    } else {
      tmp3 = globalThis;
      _Object = Object;
      str = Object.prototype.toString;
      call = str.call;
      tmp4 = typeof call === "unknown" ? str() : call(global);
      str = "[object Object]";
      tmp5 = "[object Object]" !== tmp4;
    }
    return;
  }
  end(arg0) {
    self = this;
    if (this._endCalled) {
      tmp = globalThis;
      _console = console;
      str = "Warning: .end() was called twice. This is not supported in superagent";
      warnResult = console.warn("Warning: .end() was called twice. This is not supported in superagent");
    }
    tmp3 = global;
    self._endCalled = true;
    if (!global) {
      tmp3 = noop;
    }
    self._callback = tmp3;
    _finalizeQueryStringResult = self._finalizeQueryString();
    _endResult = self._end();
    return;
  }
  _setUploadTimeout() {
    self = this;
    self = this;
    tmp = this._uploadTimeout && !self._uploadTimeoutTimer;
    if (tmp) {
      tmp2 = globalThis;
      _setTimeout = setTimeout;
      self._uploadTimeoutTimer = setTimeout(() => {
        self._timeoutError("Upload timeout of ", self._uploadTimeout, "ETIMEDOUT");
      }, self._uploadTimeout);
    }
    return;
  }
  _end() {
    self = this;
    if (this._aborted) {
      tmp24 = globalThis;
      _Error = Error;
      tmp25 = new.target;
      str9 = "The request has been aborted even before .end() was called";
      tmp26 = new.target;
      error = new Error("The request has been aborted even before .end() was called");
      tmp28 = error;
      return self.callback(error);
    } else {
      tmp = closure_6;
      self.xhr = closure_6.getXHR();
      xhr = self.xhr;
      tmp2 = self._formData || self._data;
      _setTimeoutsResult = self._setTimeouts();
      str = "readystatechange";
      listener = xhr.addEventListener("readystatechange", () => {
        const readyState = xhr.readyState;
        let _responseTimeoutTimer = readyState >= 2;
        if (_responseTimeoutTimer) {
          _responseTimeoutTimer = self._responseTimeoutTimer;
        }
        if (_responseTimeoutTimer) {
          const _clearTimeout = clearTimeout;
          clearTimeout(self._responseTimeoutTimer);
        }
        if (4 === readyState) {
          try {
            if (xhr.status) {
              obj.emit("end");
            } else if (!obj.timedout) {
              if (!obj._aborted) {
                return obj.crossDomainError();
              }
            }
          } catch (err) {
          }
        }
      });
      num = "progress";
      if (self.hasListeners("progress")) {
        try {
          handleProgress = function handleProgress(direction, total) {
            if (total.total > 0) {
              total.percent = total.loaded / total.total * 100;
              if (100 === total.percent) {
                const _clearTimeout = clearTimeout;
                clearTimeout(self._uploadTimeoutTimer);
              }
            }
            total.direction = direction;
            self.emit("progress", total);
          };
          str2 = "download";
          tmp5 = null;
          listener1 = xhr.addEventListener(`progress`, handleProgress.bind(null, "download"));
          if (!xhr.upload) {
          } else {
            upload = xhr.upload;
            str3 = "upload";
            listener2 = upload.addEventListener(`progress`, handleProgress.bind(null, "upload"));
          }
        } catch (err) {
        }
      }
      if (xhr.upload) {
        _setUploadTimeoutResult = self._setUploadTimeout();
      }
      try {
        if (!self.username) {
        } else {
          if (self.password) {
            flag2 = true;
            tmp10 = xhr;
            openResult = xhr.open(self.method, self.url, true, self.username, self.password);
          }
          if (!self._withCredentials) {
          } else {
            flag3 = true;
            xhr.withCredentials = true;
          }
          result = tmp2;
          if (self._formData) {
          } else {
            str4 = "GET";
            result = tmp2;
            if ("GET" === self.method) {
            } else {
              str10 = "HEAD";
              result = tmp2;
              if ("HEAD" === self.method) {
              } else {
                result = tmp2;
                if (typeof tmp2 === "y") {
                } else {
                  result = tmp2;
                  if (self._isHost(tmp2)) {
                  } else {
                    str5 = self._header["content-type"];
                    application_json = self._serializer;
                    if (application_json) {
                    } else {
                      str6 = "";
                      if (!str5) {
                      } else {
                        str7 = ";";
                        str6 = str5.split(";")[0];
                      }
                      application_json = tmp.serialize[str6];
                    }
                    tmp13 = !application_json;
                    if (application_json) {
                    } else {
                      tmp14 = isJSON;
                      num = 0;
                      tmp13 = isJSON(str5);
                    }
                    if (!tmp13) {
                    } else {
                      application_json = tmp.serialize["application/json"];
                    }
                    result = tmp2;
                    if (!application_json) {
                    } else {
                      result = application_json(tmp2);
                    }
                  }
                }
              }
            }
          }
          tmp15 = null;
          for (const key10069 in self.header) {
            tmp29 = key10069;
            hasOwnResult = null !== self.header[key10069];
            if (!hasOwnResult) {
            } else {
              tmp16 = self;
              tmp17 = closure_2;
              obj2 = require("_createForOfIteratorHelper");
              hasOwnResult = obj2.hasOwn(self.header, key10069);
            }
            if (!hasOwnResult) {
              continue;
            } else {
              setRequestHeaderResult = xhr.setRequestHeader(key10069, self.header[key10069]);
              continue;
            }
            continue;
          }
          if (!self._responseType) {
          } else {
            xhr.responseType = self._responseType;
          }
          str8 = "request";
          emitResult = self.emit("request", self);
          tmp21 = null;
          if (undefined === result) {
          } else {
            tmp21 = result;
          }
          sendResult = xhr.send(tmp21);
          return;
        }
        num = xhr.open;
        flag = true;
        numResult = num(self.method, self.url, true);
      } catch (tmp23) {
        return obj.callback(tmp23);
      }
    }
    return;
  }
}
_exports = module.exports;
_exports.Request = Request;
_exports.getXHR = () => {
  if (self.XMLHttpRequest) {
    const xMLHttpRequest = new self.XMLHttpRequest();
    return xMLHttpRequest;
  } else {
    const _Error = Error;
    const error = new Error("Browser-only version of superagent could not find XHR");
    throw error;
  }
};
function trim(arg0) {

}
_exports.serializeObject = function serialize(obj) {
  if (obj.isObject(obj)) {
    const items = [];
    for (const key10012 in arg0) {
      let tmp4 = key10012;
      let tmp5 = require;
      let tmp6 = dependencyMap;
      let obj2 = require(532) /* _createForOfIteratorHelper */;
      if (!obj2.hasOwn(arg0, key10012)) {
        continue;
      } else {
        let tmp2 = pushEncodedKeyValuePair;
        let tmp3 = pushEncodedKeyValuePair(items, key10012, arg0[key10012]);
        continue;
      }
      continue;
    }
    return items.join("&");
  } else {
    return obj;
  }
  obj = require(532) /* _createForOfIteratorHelper */;
};
_exports.parseString = parseString;
_exports.types = { html: "text/html", json: "application/json", xml: "text/xml", urlencoded: "application/x-www-form-urlencoded", form: "application/x-www-form-urlencoded", "form-data": "application/x-www-form-urlencoded" };
let obj = { "application/x-www-form-urlencoded": require("module_533").stringify, "application/json": require("defaultOptions") };
_exports.serialize = obj;
obj = { "application/x-www-form-urlencoded": parseString, "application/json": JSON.parse };
_exports.parse = obj;
_createForOfIteratorHelper.mixin(Response.prototype, require("ResponseBase").prototype);
_exports.Response = Response;
require("Emitter")(Request.prototype);
_createForOfIteratorHelper.mixin(Request.prototype, require("RequestBase").prototype);
Request.prototype.ca = Request.prototype.agent;
Request.prototype.buffer = Request.prototype.ca;
Request.prototype.pipe = Request.prototype.write;
_exports.agent = () => new require(583) /* _createForOfIteratorHelper */();
let items = ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"];
let num = 0;
let num2 = 0;
if (0 < items.length) {
  do {
    let str2 = items[num2];
    require = str2;
    require("_createForOfIteratorHelper").prototype[str2.toLowerCase()] = function(arg0, arg1) {
      const request = new outer1_6.Request(closure_0, arg0);
      this._setDefaults(request);
      if (arg1) {
        request.end(arg1);
      }
      return request;
    };
    num2 = num + 1;
    num = num2;
    length = items.length;
  } while (num2 < length);
}
function del(arg0, arg1, arg2) {
  let tmp = arg2;
  const obj = _exports("DELETE", arg0);
  let tmp2 = arg1;
  if (typeof arg1 !== "disabledUntil") {
    tmp2 = null;
    tmp = arg1;
  }
  if (tmp2) {
    obj.send(tmp2);
  }
  if (tmp) {
    obj.end(tmp);
  }
  return obj;
}
require("_createForOfIteratorHelper").prototype.del = require("_createForOfIteratorHelper").prototype.delete;
_exports.get = (arg0, type) => {
  let tmp = arg2;
  const obj = _exports("GET", arg0);
  let tmp2 = type;
  if (typeof type !== "disabledUntil") {
    tmp2 = null;
    tmp = type;
  }
  if (tmp2) {
    const query = obj.query(tmp2);
  }
  if (tmp) {
    obj.end(tmp);
  }
  return obj;
};
_exports.head = (arg0, type) => {
  let tmp = arg2;
  const obj = _exports("HEAD", arg0);
  let tmp2 = type;
  if (typeof type !== "disabledUntil") {
    tmp2 = null;
    tmp = type;
  }
  if (tmp2) {
    const query = obj.query(tmp2);
  }
  if (tmp) {
    obj.end(tmp);
  }
  return obj;
};
_exports.options = (arg0, arg1, arg2) => {
  let tmp = arg2;
  const obj = _exports("OPTIONS", arg0);
  let tmp2 = arg1;
  if (typeof arg1 !== "disabledUntil") {
    tmp2 = null;
    tmp = arg1;
  }
  if (tmp2) {
    obj.send(tmp2);
  }
  if (tmp) {
    obj.end(tmp);
  }
  return obj;
};
_exports.del = del;
_exports.delete = del;
_exports.patch = (arg0, arg1, arg2) => {
  let tmp = arg2;
  const obj = _exports("PATCH", arg0);
  let tmp2 = arg1;
  if (typeof arg1 !== "disabledUntil") {
    tmp2 = null;
    tmp = arg1;
  }
  if (tmp2) {
    obj.send(tmp2);
  }
  if (tmp) {
    obj.end(tmp);
  }
  return obj;
};
_exports.post = (arg0, arg1, arg2) => {
  let tmp = arg2;
  const obj = _exports("POST", arg0);
  let tmp2 = arg1;
  if (typeof arg1 !== "disabledUntil") {
    tmp2 = null;
    tmp = arg1;
  }
  if (tmp2) {
    obj.send(tmp2);
  }
  if (tmp) {
    obj.end(tmp);
  }
  return obj;
};
_exports.put = (arg0, arg1, arg2) => {
  let tmp = arg2;
  const obj = _exports("PUT", arg0);
  let tmp2 = arg1;
  if (typeof arg1 !== "disabledUntil") {
    tmp2 = null;
    tmp = arg1;
  }
  if (tmp2) {
    obj.send(tmp2);
  }
  if (tmp) {
    obj.end(tmp);
  }
  return obj;
};

export default (arg0, arg1) => {
  if (typeof arg1 === "fileFinishedImporting") {
    const request = new _exports.Request("GET", arg0);
    let endResult = request.end(arg1);
  } else if (1 === arguments.length) {
    endResult = new _exports.Request("GET", arg0);
  } else {
    endResult = new _exports.Request(arg0, arg1);
  }
  return endResult;
};