// _runtime/01283_Request.js
import _mod1285 from "metro/01285__.js";
import stringify from "01331_stringify.js";
import ResponseBase from "01332_ResponseBase.js";
import _mod1333 from "metro/01333__.js";
import RequestBase from "01334_RequestBase.js";
import Agent from "01335_Agent.js";
import type_mod from "01284_type.js";

let set;

let length;
let _exports = exports;
function _createForOfIteratorHelper(iterable, arg1) {
  let length = iterable;
  let prop = typeof Symbol !== "undefined";
  if (typeof Symbol !== "undefined") {
    const _Symbol = Symbol;
    prop = iterable[Symbol.iterator];
  }
  if (!prop) {
    prop = iterable[Symbol.iterator];
  }
  if (prop) {
    let done = true;
    let c5 = false;
    return {
      s() {
        prop = prop.call(length);
      },
      n() {
        const iter = prop.next();
        done = iter.done;
        return iter;
      },
      e(arg0) {
        c5 = true;
        let closure_1_3 = arg0;
      },
      f() {
        try {
          const tmp = done || null == prop.return;
          if (!tmp) {
            prop.return();
          }
          if (c5) {
            throw _createForOfIteratorHelper;
          }
        } catch (tmp8) {
          if (c5) {
            throw _createForOfIteratorHelper;
          } else {
            throw tmp8;
          }
        }
      },
    };
  } else {
    const _Array = Array;
    if (!Array.isArray(iterable)) {
      let arr;
      if (iterable) {
        if (typeof iterable === "string") {
          const _Array4 = Array;
          const self3 = this;
          const self4 = this;
          const array = new Array(length2);
          class F {
            constructor() {}
          }
          let num5 = 0;
          arr = array;
          if (0 < iterable.length) {
            do {
              array[num5] = iterable[num5];
              num5 = num5 + 1;
              arr = array;
            } while (num5 < iterable.length);
          }
        } else {
          const _Object = Object;
          const callResult = toString.call(iterable);
          const substr = callResult.slice(8, -1);
          class F {
            constructor() {}
          }
          let name = substr;
          const tmp4 = "Object" === substr && iterable.constructor;
          if (tmp4) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                length = iterable.length;
                const _Array2 = Array;
                const self = this;
                self2 = this;
                const array2 = new Array(length);
                class F {
                  constructor() {}
                }
                let num3 = 0;
                arr = array2;
                if (0 < length) {
                  do {
                    array2[num3] = iterable[num3];
                    num3 = num3 + 1;
                    arr = array2;
                  } while (num3 < length);
                }
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
          }
          const _Array3 = Array;
          arr = Array.from(iterable);
        }
      }
      prop = arr;
      if (!prop) {
        const _TypeError = TypeError;
        const self5 = this;
        const self6 = this;
        const typeError = new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
        class F {
          constructor() {}
        }
      }
    }
    if (prop) {
      length = prop;
    }
    let closure_2 = 0;
    class F {
      constructor() {}
    }
    return {
      s: F,
      n() {
        let obj;
        if (closure_2 >= length.length) {
          obj = { done: true };
        } else {
          obj = { done: false, value: tmp[+closure_2] };
          closure_2 = tmp3 + 1;
        }
        return obj;
      },
      e(arg0) {
        throw arg0;
      },
      f: F,
    };
  }
}
function noop() {}
function pushEncodedKeyValuePair(items, key10006, value) {
  let done;
  if (undefined !== value) {
    if (null !== value) {
      const _Array = Array;
      if (Array.isArray(value)) {
        const obj2 = _createForOfIteratorHelper(value);
        try {
          obj2.s();
          const iter = obj2.n();
          let iter2 = iter;
          if (!iter.done) {
            do {
              let tmp17 = pushEncodedKeyValuePair(items, key10006, iter2.value);
              let iter3 = obj2.n();
              iter2 = iter3;
              done = iter3.done;
            } while (!done);
          }
          obj2.f();
        } catch (tmp19) {
          obj2.f();
          throw tmp19;
        }
      } else {
        const obj = type;
        if (obj.isObject(value)) {
          for (const key10033 in value) {
            let obj3 = type;
            if (!obj3.hasOwn(value, key10033)) {
              continue;
            } else {
              let _HermesInternal = HermesInternal;
              let str5 = "";
              let str6 = "[";
              let str7 = "]";
              let tmp12 = pushEncodedKeyValuePair(items, "" + key10006 + "[" + key10033 + "]", value[key10033]);
              continue;
            }
            continue;
          }
        } else {
          const _encodeURI2 = encodeURI;
          const push = items.push;
          const _encodeURIComponent = encodeURIComponent;
          const text = `${encodeURI(key10006)}=`;
          push(`${encodeURI(key10006)}=` + encodeURIComponent(value));
        }
      }
    } else {
      const _encodeURI = encodeURI;
      items.push(encodeURI(key10006));
    }
  }
}
function isJSON(arg0) {
  const obj = /[/+]json($|[^-\w])/i;
  return obj.test(arg0);
}
class Response {
  constructor(req) {
    let xhr2;
    const self = this;
    this.req = req;
    this.xhr = this.req.xhr;
    if ("HEAD" === this.req.method) {
      let responseText = null;
      self.text = responseText;
      self.statusText = self.req.xhr.statusText;
      let num = self.xhr.status;
      if (1223 === num) {
        num = 204;
      }
      self._setStatusProperties(num);
      const xhr = self.xhr;
      const str3 = xhr.getAllResponseHeaders();
      const parts = str3.split(/\r?\n/);
      const obj = {};
      let num6 = 0;
      const length = parts.length;
      if (0 < length) {
        while (true) {
          let arr2 = parts[num6];
          let index = arr2.indexOf(":");
          if (-1 !== index) {
            let str5 = arr2.slice(0, index);
            let formatted = str5.toLowerCase();
            let str6 = arr2.slice(index + 1);
            if (typeof trim !== "function") {
              break;
            } else {
              obj[formatted] = str6.trim();
            }
          }
          num6 = num6 + 1;
        }
        throw new TypeError("Trying to call a non-function");
      }
      self.headers = obj;
      ({ headers: self.header, xhr: xhr2 } = self);
      self.header["content-type"] = xhr2.getResponseHeader("content-type");
      self._setHeaderProperties(self.header);
      if (null === self.text) {
        if (req._responseType) {
          self.body = self.xhr.response;
        }
      }
      let _parseBodyResult = null;
      if ("HEAD" !== self.req.method) {
        let response;
        const _parseBody = self._parseBody;
        if (self.text) {
          response = self.text;
        } else {
          response = self.xhr.response;
        }
        _parseBodyResult = _parseBody(response);
      }
      self.body = _parseBodyResult;
    }
    responseText = self.xhr.responseText;
  }
  _parseBody(arg0) {
    let _parserResult;
    const self = this;
    let prop = _exports.parse[this.type];
    if (this.req._parser) {
      const req = self.req;
      _parserResult = req._parser(self, arg0);
    } else {
      let isMatch = !prop;
      if (isMatch) {
        const obj = /[/+]json($|[^-\w])/i;
        isMatch = obj.test(self.type);
      }
      if (isMatch) {
        prop = tmp.parse["application/json"];
      }
      _parserResult = null;
      if (prop) {
        _parserResult = null;
        if (arg0) {
          if (arg0.length > 0) {
            _parserResult = prop(arg0);
          } else {
            const _Object = Object;
            _parserResult = null;
          }
        }
      }
    }
    return _parserResult;
  }
  toError() {
    let method;
    let url;
    ({ method, url } = this.req);
    const error = new Error("cannot " + method + " " + url + " (" + this.status + ")");
    error.status = this.status;
    error.method = method;
    error.url = url;
    return error;
  }
}
if (typeof window !== "undefined") {
  const _window = window;
  let self2 = window;
} else {
  const _self = self;
  if (typeof self === "undefined") {
    let _console = console;
    let str = "Using browser-only version of superagent in non-browser environment";
    console.warn("Using browser-only version of superagent in non-browser environment");
    self2 = undefined;
  } else {
    const _self2 = self;
    self2 = self;
  }
}
function parseString(str) {
  let num;
  const obj = {};
  const parts = str.split("&");
  const length = parts.length;
  for (let num = 0; num < length; num = num + 1) {
    let arr2 = parts[num];
    let index = arr2.indexOf("=");
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
  constructor(method, url) {
    let self = this;
    const tmp = this._query || [];
    self._query = tmp;
    self.method = method;
    self.url = url;
    self.header = {};
    self._header = {};
    self.on("end", function () {
      try {
        let _Error1;
        const obj3 = Object.create(Response.prototype);
        Response(self);
        self.emit("response", obj3);
        try {
          if (!self._isResponseOK(obj3)) {
            let str2 = tmp6.statusText;
            const _Error = Error;
            if (!str2) {
              str2 = tmp6.text;
            }
            if (!str2) {
              str2 = "Unsuccessful HTTP response";
            }
            self = this;
            self2 = this;
            _Error1 = new _Error(str2);
          }
        } catch (_Error1) {}
        const tmp16 = _Error1;
        if (tmp16) {
          _Error1.original = null;
          _Error1.response = obj3;
          const status = _Error1.status || tmp6.status;
          _Error1.status = status;
          self.callback(_Error1, obj3);
        } else {
          self.callback(null, obj3);
        }
      } catch (tmp25) {
        const _Error2 = Error;
        const self3 = this;
        const self4 = this;
        const error = new Error("Parser is unable to parse the response");
        error.parse = true;
        error.original = tmp25;
        if (self.xhr) {
          let response;
          if (undefined === self.xhr.responseType) {
            response = obj2.xhr.responseText;
          } else {
            response = obj2.xhr.response;
          }
          error.rawResponse = response;
          let status1 = null;
          if (self.xhr.status) {
            status1 = obj2.xhr.status;
          }
          error.status = status1;
          error.statusCode = error.status;
        } else {
          error.rawResponse = null;
          error.status = null;
        }
        return self.callback(error);
      }
    });
  }
  type(arg0) {
    const self = this;
    let tmp = _exports.types[arg0];
    set = this.set;
    if (!tmp) {
      tmp = arg0;
    }
    const result = set("Content-Type", tmp);
    return self;
  }
  accept(arg0) {
    const self = this;
    let tmp = _exports.types[arg0];
    set = this.set;
    if (!tmp) {
      tmp = arg0;
    }
    const result = set("Accept", tmp);
    return self;
  }
  auth(arg0, arg1, arg2) {
    let str = arg1;
    if (1 === arguments.length) {
      str = "";
    }
    let tmp = typeof str === "object";
    if (typeof str === "object") {
      tmp = null !== str;
    }
    let tmp2 = arg2;
    let str2 = str;
    if (tmp) {
      str2 = "";
      tmp2 = str;
    }
    if (!tmp2) {
      let _btoa = btoa;
      let str3 = "auto";
      if (typeof btoa === "function") {
        str3 = "basic";
      }
      tmp2 = { type: str3 };
      const obj = { type: str3 };
    }
    const tmp4 =
      tmp2.encoder ||
      function (arg0) {
        if (typeof btoa === "function") {
          const _btoa = btoa;
          return btoa(arg0);
        } else {
          const _Error = Error;
          const self = this;
          self2 = this;
          const error = new Error("Cannot use basic auth, btoa is not a function");
          throw error;
        }
      };
    return this._auth(arg0, str2, tmp2, tmp4);
  }
  query(_data) {
    let tmp = _data;
    if (typeof _data !== "string") {
      let joined = _data;
      const obj = type;
      if (obj.isObject(_data)) {
        const items = [];
        for (const key10006 in _data) {
          let obj2 = type;
          if (!obj2.hasOwn(_data, key10006)) {
            continue;
          } else {
            let tmp4 = pushEncodedKeyValuePair(items, key10006, _data[key10006]);
            continue;
          }
          continue;
        }
        joined = items.join("&");
      }
      tmp = joined;
    }
    const self = this;
    if (tmp) {
      const _query = self._query;
      _query.push(tmp);
    }
    return self;
  }
  attach(arg0, name, arg2) {
    const self = this;
    const tmp = name;
    if (tmp) {
      if (self._data) {
        const _Error = Error;
        self2 = this;
        const self3 = this;
        const error = new Error("superagent can't mix .send() and .attach()");
        throw error;
      } else {
        name = arg2;
        const append = self._getFormData().append;
        self._getFormData();
        if (!arg2) {
          name = name.name;
        }
        append(arg0, name, name);
      }
    }
    return self;
  }
  _getFormData() {
    const self = this;
    if (!this._formData) {
      self2 = this;
      const self3 = this;
      const formData = new self2.FormData();
      self._formData = formData;
    }
    return self._formData;
  }
  callback(arg0, arg1) {
    const self = this;
    if (this._shouldRetry(arg0, arg1)) {
      return self._retry();
    } else {
      const _callback = self._callback;
      self.clearTimeout();
      if (arg0) {
        if (self._maxRetries) {
          arg0.retries = self._retries - 1;
        }
        self.emit("error", arg0);
      }
      _callback(arg0, arg1);
    }
  }
  crossDomainError() {
    const error = new Error(
      "Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.",
    );
    error.crossDomain = true;
    ({ status: tmp.status, method: tmp.method, url: tmp.url } = this);
    this.callback(error);
  }
  agent() {
    console.warn("This is not supported in browser version of superagent");
    return this;
  }
  write() {
    const error = new Error("Streaming is not supported in browser version of superagent");
    throw error;
  }
  _isHost(obj) {
    let tmp = obj && typeof obj === "object";
    if (tmp) {
      const _Array = Array;
      tmp = !Array.isArray(obj);
    }
    if (tmp) {
      const _Object = Object;
      tmp = "[object Object]" !== toString.call(obj);
    }
    return tmp;
  }
  end(arg0) {
    const self = this;
    if (this._endCalled) {
      const _console = console;
      console.warn("Warning: .end() was called twice. This is not supported in superagent");
    }
    let tmp3 = arg0;
    self._endCalled = true;
    if (!arg0) {
      tmp3 = noop;
    }
    self._callback = tmp3;
    self._finalizeQueryString();
    self._end();
  }
  _setUploadTimeout() {
    const self = this;
    const tmp = this._uploadTimeout && !self._uploadTimeoutTimer;
    if (tmp) {
      const _setTimeout = setTimeout;
      self._uploadTimeoutTimer = setTimeout(() => {
        self._timeoutError("Upload timeout of ", self._uploadTimeout, "ETIMEDOUT");
      }, self._uploadTimeout);
    }
  }
  _end() {
    const self = this;
    if (this._aborted) {
      const _Error = Error;
      self2 = this;
      const self3 = this;
      const callback = self.callback;
      const error = new Error("The request has been aborted even before .end() was called");
      return callback(error);
    } else {
      self.xhr = _exports.getXHR();
      const xhr = self.xhr;
      self._setTimeouts();
      const listener = xhr.addEventListener("readystatechange", () => {
        const readyState = xhr.readyState;
        const _responseTimeoutTimer = readyState >= 2 && self._responseTimeoutTimer;
        if (_responseTimeoutTimer) {
          const _clearTimeout = clearTimeout;
          clearTimeout(self._responseTimeoutTimer);
        }
        if (4 === readyState) {
          let num;
          try {
            num = xhr.status;
          } catch (err) {
            num = 0;
          }
          if (num) {
            self.emit("end");
          } else if (!self.timedout) {
            if (!self._aborted) {
              return self.crossDomainError();
            }
          }
        }
      });
      let num = "progress";
      if (self.hasListeners("progress")) {
        try {
          function handleProgress(direction, total) {
            if (total.total > 0) {
              total.percent = (total.loaded / total.total) * 100;
              if (100 === total.percent) {
                const _clearTimeout = clearTimeout;
                clearTimeout(self._uploadTimeoutTimer);
              }
            }
            total.direction = direction;
            self.emit("progress", total);
          }
          const listener1 = xhr.addEventListener(`progress`, handleProgress.bind(null, "download"));
          if (xhr.upload) {
            const upload = xhr.upload;
            const listener2 = upload.addEventListener(`progress`, handleProgress.bind(null, "upload"));
          }
        } catch (err) {}
      }
      if (xhr.upload) {
        self._setUploadTimeout();
      }
      try {
        if (self.username) {
          if (self.password) {
            xhr.open(self.method, self.url, true, self.username, self.password);
          }
          if (self._withCredentials) {
            xhr.withCredentials = true;
          }
          let _serializerResult = tmp2;
          if (!self._formData) {
            _serializerResult = tmp2;
            if ("GET" !== self.method) {
              _serializerResult = tmp2;
              if ("HEAD" !== self.method) {
                _serializerResult = tmp2;
                if (typeof self._formData || self._data !== "string") {
                  _serializerResult = tmp2;
                  if (!self._isHost(self._formData || self._data)) {
                    let _serializer = self._serializer;
                    if (!_serializer) {
                      num = _exports.serialize;
                      let str6 = "";
                      if (self._header["content-type"]) {
                        str6 = str5.split(";")[0];
                      }
                      _serializer = num[str6];
                    }
                    let tmp14 = !_serializer;
                    if (tmp14) {
                      num = 0;
                      tmp14 = isJSON(str5);
                    }
                    if (tmp14) {
                      _serializer = _exports.serialize["application/json"];
                    }
                    _serializerResult = tmp2;
                    if (_serializer) {
                      _serializerResult = _serializer(tmp2);
                    }
                  }
                }
              }
            }
          }
          for (const key10069 in self.header) {
            let hasOwnResult = null !== self.header[key10069];
            if (hasOwnResult) {
              let obj = type;
              hasOwnResult = obj.hasOwn(self.header, key10069);
            }
            if (!hasOwnResult) {
              continue;
            } else {
              let setRequestHeaderResult = xhr.setRequestHeader(key10069, self.header[key10069]);
              continue;
            }
            continue;
          }
          if (self._responseType) {
            xhr.responseType = self._responseType;
          }
          self.emit("request", self);
          let tmp22 = null;
          const send = xhr.send;
          if (undefined !== _serializerResult) {
            tmp22 = _serializerResult;
          }
          send(tmp22);
        }
        num = xhr.open;
        num(self.method, self.url, true);
      } catch (tmp24) {
        return self.callback(tmp24);
      }
    }
  }
}
_exports = module.exports;
function trim(arg0) {}
let obj = { "application/x-www-form-urlencoded": _mod1285.stringify, "application/json": stringify };
let obj2 = { "application/x-www-form-urlencoded": parseString, "application/json": JSON.parse };
let type = type_mod;
type.mixin(Response.prototype, ResponseBase.prototype);
let tmp3 = _mod1333(Request.prototype);
type = type_mod;
type.mixin(Request.prototype, RequestBase.prototype);
Request.prototype.ca = Request.prototype.agent;
Request.prototype.buffer = Request.prototype.ca;
Request.prototype.pipe = Request.prototype.write;
let items = ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"];
let num = 0;
let num2 = 0;
if (0 < items.length) {
  do {
    let str2 = items[num2];
    Agent.prototype[str2.toLowerCase()] = function (arg0, arg1) {
      const request = new _exports.Request(str2, arg0);
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
function del(arg0, fn, arg2) {
  let tmp = arg2;
  const obj = _exports("DELETE", arg0);
  let tmp2 = fn;
  if (typeof fn === "function") {
    tmp2 = null;
    tmp = fn;
  }
  if (tmp2) {
    obj.send(tmp2);
  }
  if (tmp) {
    obj.end(tmp);
  }
  return obj;
}
Agent.prototype.del = Agent.prototype.delete;

export default function (arg0, fn) {
  let endResult;
  if (typeof fn === "function") {
    const self5 = this;
    const self6 = this;
    const request = new _exports.Request("GET", arg0);
    endResult = request.end(fn);
  } else if (1 === arguments.length) {
    const self3 = this;
    const self4 = this;
    endResult = new _exports.Request("GET", arg0);
  } else {
    const self = this;
    self2 = this;
    endResult = new _exports.Request(arg0, fn);
  }
  return endResult;
}
export { Request };
export const getXHR = function () {
  if (self2.XMLHttpRequest) {
    const self3 = this;
    const self4 = this;
    const xMLHttpRequest = new self2.XMLHttpRequest();
    return xMLHttpRequest;
  } else {
    const _Error = Error;
    const self = this;
    self2 = this;
    const error = new Error("Browser-only version of superagent could not find XHR");
    throw error;
  }
};
export const serializeObject = function serialize(_data) {
  const obj = type;
  if (obj.isObject(_data)) {
    const items = [];
    for (const key10012 in _data) {
      let obj2 = type;
      if (!obj2.hasOwn(_data, key10012)) {
        continue;
      } else {
        let tmp3 = pushEncodedKeyValuePair(items, key10012, _data[key10012]);
        continue;
      }
      continue;
    }
    return items.join("&");
  } else {
    return _data;
  }
};
export { parseString };
export const types = {
  html: "text/html",
  json: "application/json",
  xml: "text/xml",
  urlencoded: "application/x-www-form-urlencoded",
  form: "application/x-www-form-urlencoded",
  "form-data": "application/x-www-form-urlencoded",
};
export const serialize = obj;
export const parse = obj2;
export { Response };
export const agent = () => {
  const tmp = new Agent();
  return tmp;
};
export const get = (arg0, fn, arg2) => {
  let tmp = arg2;
  const obj = _exports("GET", arg0);
  let tmp2 = fn;
  if (typeof fn === "function") {
    tmp2 = null;
    tmp = fn;
  }
  if (tmp2) {
    const query = obj.query(tmp2);
  }
  if (tmp) {
    obj.end(tmp);
  }
  return obj;
};
export const head = (arg0, fn, arg2) => {
  let tmp = arg2;
  const obj = _exports("HEAD", arg0);
  let tmp2 = fn;
  if (typeof fn === "function") {
    tmp2 = null;
    tmp = fn;
  }
  if (tmp2) {
    const query = obj.query(tmp2);
  }
  if (tmp) {
    obj.end(tmp);
  }
  return obj;
};
export const options = (arg0, fn, arg2) => {
  let tmp = arg2;
  const obj = _exports("OPTIONS", arg0);
  let tmp2 = fn;
  if (typeof fn === "function") {
    tmp2 = null;
    tmp = fn;
  }
  if (tmp2) {
    obj.send(tmp2);
  }
  if (tmp) {
    obj.end(tmp);
  }
  return obj;
};
export { del };
const delete_export = del;
export { delete_export as delete };
export const patch = (arg0, fn, arg2) => {
  let tmp = arg2;
  const obj = _exports("PATCH", arg0);
  let tmp2 = fn;
  if (typeof fn === "function") {
    tmp2 = null;
    tmp = fn;
  }
  if (tmp2) {
    obj.send(tmp2);
  }
  if (tmp) {
    obj.end(tmp);
  }
  return obj;
};
export const post = (arg0, fn, arg2) => {
  let tmp = arg2;
  const obj = _exports("POST", arg0);
  let tmp2 = fn;
  if (typeof fn === "function") {
    tmp2 = null;
    tmp = fn;
  }
  if (tmp2) {
    obj.send(tmp2);
  }
  if (tmp) {
    obj.end(tmp);
  }
  return obj;
};
export const put = (arg0, fn, arg2) => {
  let tmp = arg2;
  const obj = _exports("PUT", arg0);
  let tmp2 = fn;
  if (typeof fn === "function") {
    tmp2 = null;
    tmp = fn;
  }
  if (tmp2) {
    obj.send(tmp2);
  }
  if (tmp) {
    obj.end(tmp);
  }
  return obj;
};
