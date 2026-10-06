// _runtime/01334_RequestBase.js
import type2 from "01284_type.js";
import _mod1328 from "metro/01328__.js";

let _self;

class RequestBase {
  constructor() {}
  clearTimeout() {
    const self = this;
    clearTimeout(this._timer);
    clearTimeout(this._responseTimeoutTimer);
    clearTimeout(this._uploadTimeoutTimer);
    delete self["_timer"];
    delete self["_responseTimeoutTimer"];
    delete self["_uploadTimeoutTimer"];
    return this;
  }
  parse(_parser) {
    this._parser = _parser;
    return this;
  }
  responseType(_responseType) {
    this._responseType = _responseType;
    return this;
  }
  serialize(_serializer) {
    this._serializer = _serializer;
    return this;
  }
  timeout(deadline) {
    const self = this;
    const tmp = deadline;
    if (tmp) {
      if (typeof deadline === "object") {
        for (const key10002 in deadline) {
          let obj = type2;
          if (!obj.hasOwn(deadline, key10002)) {
            continue;
          } else {
            if ("deadline" === key10002) {
              self._timeout = deadline.deadline;
              continue;
            } else {
              if ("response" === key10002) {
                self._responseTimeout = deadline.response;
                continue;
              } else {
                if ("upload" === key10002) {
                  self._uploadTimeout = deadline.upload;
                  continue;
                } else {
                  let _console = console;
                  let warnResult = console.warn("Unknown timeout option", key10002);
                  continue;
                }
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        return self;
      }
    }
    self._timeout = deadline;
    self._responseTimeout = 0;
    self._uploadTimeout = 0;
    return self;
  }
  retry(arg0, _retryCallback) {
    let num;
    const obj = { _maxRetries: num, _retries: 0, _retryCallback };
    num = arg0;
    const tmp = 0 !== arguments.length && true !== num;
    if (!tmp) {
      num = 1;
    }
    if (num <= 0) {
      num = 0;
    }
    return obj;
  }
  _shouldRetry(code, status) {
    const self = this;
    if (this._maxRetries) {
      self._retries = +self._retries + 1;
      if (+self._retries < self._maxRetries) {
        if (self._retryCallback) {
          try {
            const _retryCallbackResult = self._retryCallback(code, status);
            if (true === _retryCallbackResult) {
              return true;
            } else if (false === tmp3) {
              return false;
            }
          } catch (tmp5) {
            const _console = console;
            console.error(tmp5);
          }
        }
        if (status) {
          if (status.status) {
            if (set1.has(status.status)) {
              return true;
            }
          }
        }
        if (code) {
          if (code.code) {
            if (set.has(code.code)) {
              return true;
            }
          }
          if (code.timeout) {
            if ("ECONNABORTED" === code.code) {
              return true;
            }
          }
          if (code.crossDomain) {
            return true;
          }
        }
        return false;
      }
    }
    return false;
  }
  _retry() {
    const self = this;
    this.clearTimeout();
    if (this.req) {
      self.req = null;
      self.req = self.request();
    }
    self._aborted = false;
    self.timedout = false;
    self.timedoutError = null;
    return self._end();
  }
  then(arg0, arg1) {
    const f83947 = (arg0, arg1) => {
      let closure_0;
      _self = arg0;
      let closure_1 = arg1;
      _self.on("abort", function () {
        if (!self._maxRetries) {
          if (self.timedout) {
            if (self.timedoutError) {
              closure_1(self.timedoutError);
            }
          }
          const _Error = Error;
          self = this;
          const self2 = this;
          const error = new Error("Aborted");
          error.code = "ABORTED";
          ({ status: tmp3.status, method: tmp3.method, url: tmp3.url } = self);
          closure_1(error);
        }
      });
      _self.end((arg0, arg1) => {
        const tmp = arg0;
        if (tmp) {
          closure_1(arg0);
        } else {
          closure_0(arg1);
        }
      });
    };
    let self = this;
    if (!this._fullfilledPromise) {
      if (self._endCalled) {
        let tmp = globalThis;
        const _console = console;
        console.warn(
          "Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises",
        );
      }
      const tmp3 = globalThis;
      let self2 = this;
      const self3 = this;
      self._fullfilledPromise = new Promise(f83947);
      const promise = new Promise(f83947);
    }
    const _fullfilledPromise = self._fullfilledPromise;
    return _fullfilledPromise.then(arg0, arg1);
  }
  catch(arg0) {
    return this.then(undefined, arg0);
  }
  use(fn) {
    fn(this);
    return this;
  }
  ok(_okCallback) {
    if (typeof _okCallback !== "function") {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Callback required");
      throw error;
    } else {
      const self3 = this;
      this._okCallback = _okCallback;
      return this;
    }
  }
  _isResponseOK(status) {
    let tmp = status;
    if (tmp) {
      let _okCallbackResult;
      const self = this;
      if (this._okCallback) {
        _okCallbackResult = self._okCallback(status);
      } else {
        _okCallbackResult = status.status >= 200 && status.status < 300;
      }
      tmp = _okCallbackResult;
    }
    return tmp;
  }
  get(arg0) {
    return this._header[arg0.toLowerCase(arg0)];
  }
  set(_data, arg1) {
    const self = this;
    const obj = type2;
    if (obj.isObject(_data)) {
      for (const key10016 in _data) {
        let obj2 = type2;
        if (!obj2.hasOwn(_data, key10016)) {
          continue;
        } else {
          let result = self.set(key10016, _data[key10016]);
          continue;
        }
        continue;
      }
      return self;
    } else {
      self._header[_data.toLowerCase()] = arg1;
      self.header[_data] = arg1;
      return self;
    }
  }
  unset(arg0) {
    const _header = this._header;
    delete _header[arg0.toLowerCase(arg0)];
    delete this.header[arg0];
    return this;
  }
  field(_data, obj2, arg2) {
    if (null == _data) {
      const _Error3 = Error;
      const self5 = this;
      const self6 = this;
      const error = new Error(".field(name, val) name can not be empty");
      throw error;
    } else {
      const self7 = this;
      if (this._data) {
        const _Error2 = Error;
        const self3 = this;
        const self4 = this;
        const error1 = new Error(
          ".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()",
        );
        throw error1;
      } else {
        const obj = type2;
        if (obj.isObject(_data)) {
          for (const key10035 in _data) {
            let obj3 = type2;
            if (!obj3.hasOwn(_data, key10035)) {
              continue;
            } else {
              let fieldResult = self7.field(key10035, _data[key10035]);
              continue;
            }
            continue;
          }
          return self7;
        } else {
          const _Array = Array;
          if (Array.isArray(obj2)) {
            for (const key10029 in obj2) {
              obj2 = type2;
              if (!obj2.hasOwn(obj2, key10029)) {
                continue;
              } else {
                let fieldResult1 = self7.field(_data, obj2[key10029]);
                continue;
              }
              continue;
            }
            return self7;
          } else if (null == obj2) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error2 = new Error(".field(name, val) val can not be empty");
            throw error2;
          } else {
            let StringResult = obj2;
            if (typeof obj2 === "boolean") {
              const _String = String;
              StringResult = String(obj2);
            }
            const append = self7._getFormData().append;
            self7._getFormData();
            if (arg2) {
              append(_data, StringResult, arg2);
            } else {
              append(_data, StringResult);
            }
            return self7;
          }
        }
      }
    }
  }
  abort() {
    const self = this;
    if (this._aborted) {
      return self;
    } else {
      self._aborted = true;
      if (self.xhr) {
        const xhr = self.xhr;
        xhr.abort();
      }
      if (self.req) {
        const _process = process;
        const obj = _mod1328;
        if (obj.gte(process.version, "v13.0.0")) {
          const _process2 = process;
          const tmp2Result = _mod1328;
          if (tmp2Result.lt(process.version, "v14.0.0")) {
            const _Error = Error;
            const self2 = this;
            const self3 = this;
            const error = new Error(
              "Superagent does not work in v13 properly with abort() due to Node.js core changes",
            );
            throw error;
          }
        }
        const req = self.req;
        req.abort();
      }
      self.clearTimeout();
      self.emit("abort");
      return self;
    }
  }
  _auth(username, password, type, fn) {
    type = type.type;
    const self = this;
    if ("basic" === type) {
      const _HermesInternal = HermesInternal;
      const _HermesInternal2 = HermesInternal;
      const result = self.set("Authorization", "Basic " + fn("" + username + ":" + password));
    } else if ("auto" === type) {
      self.username = username;
      self.password = password;
    } else if ("bearer" === type) {
      const _HermesInternal3 = HermesInternal;
      const result1 = self.set("Authorization", "Bearer " + username);
    }
    return self;
  }
  withCredentials(arg0) {
    let flag = arg0;
    if (undefined === arg0) {
      flag = true;
    }
    this._withCredentials = flag;
    return this;
  }
  redirects(_maxRedirects) {
    this._maxRedirects = _maxRedirects;
    return this;
  }
  maxResponseSize(_maxResponseSize) {
    if (typeof _maxResponseSize !== "number") {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("Invalid argument");
      throw typeError;
    } else {
      const self3 = this;
      this._maxResponseSize = _maxResponseSize;
      return this;
    }
  }
  toJSON() {
    const request = { method: this.method, url: this.url, data: this._data, headers: this._header };
    return request;
  }
  send(_data) {
    const self = this;
    const obj = type2;
    const isObjectResult = obj.isObject(_data);
    const prop = this._header["content-type"];
    if (this._formData) {
      const _Error4 = Error;
      const self8 = this;
      const self9 = this;
      const error = new Error(
        ".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()",
      );
      throw error;
    } else {
      if (isObjectResult) {
        let tmp13;
        if (!self._data) {
          const _Array = Array;
          if (Array.isArray(_data)) {
            self._data = [];
          } else if (!self._isHost(_data)) {
            self._data = {};
          }
        }
        if (isObjectResult) {
          const tmp2Result = type2;
          if (tmp2Result.isObject(self._data)) {
            tmp13 = prop;
            const keys = Object.keys();
            if (keys !== undefined) {
              tmp13 = prop;
              while (keys[tmp] !== undefined) {
                if (typeof _data[tmp19] === "bigint") {
                  if (!_data[tmp19].toJSON) {
                    let tmp20 = globalThis;
                    let _Error2 = Error;
                    let self4 = this;
                    let str8 = "Cannot serialize BigInt value to json";
                    let self5 = this;
                    let error1 = new Error("Cannot serialize BigInt value to json");
                    throw error1;
                  }
                }
                let obj3 = type2;
                if (!obj3.hasOwn(_data, tmp19)) {
                  continue;
                } else {
                  self._data[tmp19] = _data[tmp19];
                  continue;
                }
                continue;
              }
            }
          }
          let _isHostResult = !isObjectResult;
          if (isObjectResult) {
            _isHostResult = self._isHost(_data);
          }
          if (!_isHostResult) {
            _isHostResult = tmp13;
          }
          if (!_isHostResult) {
            self.type("json");
          }
          return self;
        }
        if (typeof _data === "bigint") {
          const _Error = Error;
          const self2 = this;
          const self3 = this;
          const error2 = new Error("Cannot send value of type BigInt");
          throw error2;
        } else if (typeof _data === "string") {
          let sum;
          if (!prop) {
            self.type("form");
          }
          let trimmed = str2;
          if (trimmed) {
            const str3 = self._header["content-type"].toLowerCase();
            trimmed = str3.trim();
          }
          if ("application/x-www-form-urlencoded" === trimmed) {
            let combined = _data;
            if (self._data) {
              const _HermesInternal = HermesInternal;
              combined = "" + self._data + "&" + _data;
            }
            sum = combined;
          } else {
            sum = (self._data || "") + _data;
          }
          self._data = sum;
          tmp13 = trimmed;
        } else {
          self._data = _data;
          tmp13 = prop;
        }
      }
      if (_data) {
        if (self._data) {
          if (self._isHost(self._data)) {
            const _Error3 = Error;
            const self6 = this;
            const self7 = this;
            const error3 = new Error("Can't merge these send calls");
            throw error3;
          }
        }
      }
    }
  }
  sortQuery(arg0) {
    const tmp = undefined === arg0 || arg0;
    this._sort = tmp;
    return this;
  }
  _finalizeQueryString() {
    const self = this;
    const _query = this._query;
    const joined = _query.join("&");
    if (joined) {
      const url2 = self.url;
      let str = "?";
      const url = self.url;
      if (url2.includes("?")) {
        str = "&";
      }
      self.url = url + (str + joined);
    }
    self._query.length = 0;
    if (self._sort) {
      const url1 = self.url;
      const index = url1.indexOf("?");
      if (index >= 0) {
        const url3 = self.url;
        const str3 = url3.slice(index + 1);
        const parts = str3.split("&");
        if (typeof self._sort === "function") {
          const sorted = parts.sort(self._sort);
        } else {
          const sorted1 = parts.sort();
        }
        const url4 = self.url;
        const text = `${arr3.slice(0, tmp2)}?`;
        self.url = `${arr3.slice(0, tmp2)}?` + parts.join("&");
      }
    }
  }
  _appendQueryString() {
    console.warn("Unsupported");
  }
  _timeoutError(arg0, timeout, errno) {
    const self = this;
    if (!this._aborted) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const error = new Error("" + arg0 + timeout + "ms exceeded");
      error.timeout = timeout;
      error.code = "ECONNABORTED";
      error.errno = errno;
      self.timedout = true;
      self.timedoutError = error;
      self.abort();
      self.callback(error);
    }
  }
  _setTimeouts() {
    const self = this;
    const tmp = this._timeout && !self._timer;
    if (tmp) {
      const _setTimeout = setTimeout;
      self._timer = setTimeout(() => {
        self._timeoutError("Timeout of ", self._timeout, "ETIME");
      }, self._timeout);
    }
    const tmp3 = self._responseTimeout && !self._responseTimeoutTimer;
    if (tmp3) {
      const _setTimeout2 = setTimeout;
      self._responseTimeoutTimer = setTimeout(() => {
        self._timeoutError("Response timeout of ", self._responseTimeout, "ETIMEDOUT");
      }, self._responseTimeout);
    }
  }
}
const set = new Set([
  "ETIMEDOUT",
  "ECONNRESET",
  "EADDRINUSE",
  "ECONNREFUSED",
  "EPIPE",
  "ENOTFOUND",
  "ENETUNREACH",
  "EAI_AGAIN",
]);
const set1 = new Set([408, 413, 429, 500, 502, 503, 504, 521, 522, 524]);
RequestBase.prototype.getHeader = RequestBase.prototype.get;

export default RequestBase;
