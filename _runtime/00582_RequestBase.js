// _runtime/00582_RequestBase.js
class RequestBase {
  constructor() {
    return;
  }
  clearTimeout() {
    clearTimeoutResult = clearTimeout(this._timer);
    clearTimeoutResult1 = clearTimeout(this._responseTimeoutTimer);
    clearTimeoutResult2 = clearTimeout(this._uploadTimeoutTimer);
    delete tmp[tmp2];
    delete tmp[tmp2];
    delete tmp[tmp2];
    return this;
  }
  parse(arg0) {
    this._parser = global;
    return this;
  }
  responseType(arg0) {
    this._responseType = global;
    return this;
  }
  serialize(arg0) {
    this._serializer = global;
    return this;
  }
  timeout(arg0) {
    self = this;
    if (global) {
      if (typeof global === "object") {
        tmp2 = global;
        tmp3 = globalThis;
        str = "Unknown timeout option";
        str2 = "upload";
        str3 = "response";
        str4 = "deadline";
        for (const key10002 in arg0) {
          tmp4 = key10002;
          tmp5 = closure_0;
          tmp6 = closure_1;
          obj = require("_createForOfIteratorHelper");
          if (!obj.hasOwn(arg0, key10002)) {
            continue;
          } else {
            if ("deadline" === key10002) {
              self._timeout = arg0.deadline;
              continue;
            } else {
              if ("response" === key10002) {
                self._responseTimeout = arg0.response;
                continue;
              } else {
                if ("upload" === key10002) {
                  self._uploadTimeout = arg0.upload;
                  continue;
                } else {
                  _console = console;
                  warnResult = console.warn("Unknown timeout option", key10002);
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
    self._timeout = global;
    self._responseTimeout = 0;
    self._uploadTimeout = 0;
    return self;
  }
  retry(arg0, arg1) {
    obj = {};
    num = global;
    tmp = 0 !== arguments.length;
    if (tmp) {
      flag = true;
      tmp = true !== num;
    }
    if (!tmp) {
      num = 1;
    }
    if (num <= 0) {
      num = 0;
    }
    obj._maxRetries = num;
    obj._retries = 0;
    obj._retryCallback = require;
    return obj;
  }
  _shouldRetry(arg0, arg1) {
    self = this;
    if (this._maxRetries) {
      tmp = +self._retries;
      self._retries = tmp + 1;
      if (tmp < self._maxRetries) {
        tmp10 = global;
        tmp11 = require;
        if (self._retryCallback) {
          try {
            _retryCallbackResult = self._retryCallback(global, require);
            flag = true;
            if (true === _retryCallbackResult) {
              return true;
            } else {
              tmp4 = _retryCallbackResult;
              flag2 = false;
              if (false === tmp3) {
                return false;
              }
            }
          } catch (tmp5) {
            tmp6 = globalThis;
            _console = console;
            errorResult = console.error(tmp5);
          }
        }
        if (require) {
          if (require.status) {
            tmp8 = f19044;
            if (f19044.has(require.status)) {
              flag7 = true;
              return true;
            }
          }
        }
        if (global) {
          if (global.code) {
            tmp9 = closure_2;
            if (closure_2.has(global.code)) {
              flag6 = true;
              return true;
            }
          }
          if (global.timeout) {
            str = "ECONNABORTED";
            if ("ECONNABORTED" === global.code) {
              flag5 = true;
              return true;
            }
          }
          if (global.crossDomain) {
            flag4 = true;
            return true;
          }
        }
        flag3 = false;
        return false;
      }
    }
    return false;
  }
  _retry() {
    self = this;
    clearTimeoutResult = this.clearTimeout();
    if (this.req) {
      tmp2 = null;
      self.req = null;
      self.req = self.request();
    }
    self._aborted = false;
    self.timedout = false;
    self.timedoutError = null;
    return self._end();
  }
  then(arg0, arg1) {
    self = this;
    self = this;
    if (!this._fullfilledPromise) {
      if (self._endCalled) {
        tmp = globalThis;
        _console = console;
        str = "Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises";
        warnResult = console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
      }
      tmp3 = globalThis;
      _Promise = Promise;
      tmp4 = new.target;
      tmp5 = new.target;
      promise = new Promise((arg0, arg1) => {
        const _self = arg0;
        let closure_1 = arg1;
        _self.on("abort", () => {
          if (!lib._maxRetries) {
            if (tmp.timedout) {
              if (tmp.timedoutError) {
                lib(tmp.timedoutError);
              }
            }
            const _Error = Error;
            const error = new Error("Aborted");
            error.code = "ABORTED";
            ({ status: tmp5.status, method: tmp5.method, url: tmp5.url } = tmp);
            lib(error);
          }
        });
        _self.end((arg0, arg1) => {
          if (arg0) {
            lib(arg0);
          } else {
            callback(arg1);
          }
        });
      });
      tmp7 = promise;
      self._fullfilledPromise = promise;
    }
    _fullfilledPromise = self._fullfilledPromise;
    return _fullfilledPromise.then(global, require);
  }
  catch(arg0) {
    return this.then(undefined, global);
  }
  use(arg0) {
    tmp = global(this);
    return this;
  }
  ok(arg0) {
    if (typeof global !== "function") {
      tmp = globalThis;
      _Error = Error;
      tmp2 = new.target;
      str = "Callback required";
      tmp3 = new.target;
      error = new Error("Callback required");
      tmp5 = error;
      throw error;
    } else {
      self = this;
      this._okCallback = global;
      return this;
    }
  }
  _isResponseOK(arg0) {
    tmp = global;
    if (!tmp) {
      return tmp;
    } else {
      self = this;
      if (this._okCallback) {
        _okCallbackResult = self._okCallback(global);
      } else {
        num = 200;
        _okCallbackResult = global.status >= 200;
        if (_okCallbackResult) {
          num2 = 300;
          _okCallbackResult = global.status < 300;
        }
      }
      tmp3 = _okCallbackResult;
    }
    return;
  }
  get(arg0) {
    return this._header[global.toLowerCase(global)];
  }
  set(arg0, arg1) {
    self = this;
    obj = require("_createForOfIteratorHelper");
    if (obj.isObject(global)) {
      tmp2 = global;
      for (const key10016 in arg0) {
        tmp4 = key10016;
        tmp5 = closure_0;
        tmp6 = closure_1;
        obj2 = require("_createForOfIteratorHelper");
        if (!obj2.hasOwn(arg0, key10016)) {
          continue;
        } else {
          result = self.set(key10016, arg0[key10016]);
          continue;
        }
        continue;
      }
      return self;
    } else {
      tmp = require;
      self._header[global.toLowerCase()] = require;
      self.header[global] = require;
      return self;
    }
  }
  unset(arg0) {
    formatted = global.toLowerCase();
    delete tmp3[tmp];
    delete tmp[tmp2];
    return this;
  }
  field(arg0, arg1, arg2) {
    if (null == global) {
      tmp23 = globalThis;
      _Error3 = Error;
      tmp24 = new.target;
      str3 = ".field(name, val) name can not be empty";
      tmp25 = new.target;
      error = new Error(".field(name, val) name can not be empty");
      tmp27 = error;
      throw error;
    } else {
      self = this;
      if (this._data) {
        tmp18 = globalThis;
        _Error2 = Error;
        tmp19 = new.target;
        str2 = ".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()";
        tmp20 = new.target;
        error1 = new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
        tmp22 = error1;
        throw error1;
      } else {
        tmp = closure_0;
        tmp2 = closure_1;
        obj = require("_createForOfIteratorHelper");
        if (obj.isObject(global)) {
          tmp16 = global;
          for (const key10035 in arg0) {
            tmp31 = key10035;
            tmp32 = closure_0;
            tmp33 = closure_1;
            obj3 = require("_createForOfIteratorHelper");
            if (!obj3.hasOwn(arg0, key10035)) {
              continue;
            } else {
              fieldResult = self.field(key10035, arg0[key10035]);
              continue;
            }
            continue;
          }
          return self;
        } else {
          tmp3 = require;
          tmp4 = globalThis;
          _Array = Array;
          if (Array.isArray(require)) {
            tmp14 = require;
            for (const key10029 in arg1) {
              tmp28 = key10029;
              tmp29 = closure_0;
              tmp30 = closure_1;
              obj2 = require("_createForOfIteratorHelper");
              if (!obj2.hasOwn(arg1, key10029)) {
                continue;
              } else {
                fieldResult1 = self.field(arg0, arg1[key10029]);
                continue;
              }
              continue;
            }
            return self;
          } else if (null == require) {
            _Error = Error;
            tmp10 = new.target;
            str = ".field(name, val) val can not be empty";
            tmp11 = new.target;
            error2 = new Error(".field(name, val) val can not be empty");
            tmp13 = error2;
            throw error2;
          } else {
            StringResult = require;
            if (typeof require === "boolean") {
              _String = String;
              StringResult = String(require);
            }
            tmp6 = importDefault;
            _getFormDataResult = self._getFormData();
            append = _getFormDataResult.append;
            if (importDefault) {
              appendResult = append(global, StringResult, importDefault);
            } else {
              appendResult1 = append(global, StringResult);
            }
            return self;
          }
        }
      }
    }
  }
  abort() {
    self = this;
    if (this._aborted) {
      return self;
    } else {
      flag = true;
      self._aborted = true;
      if (self.xhr) {
        xhr = self.xhr;
        abortResult = xhr.abort();
      }
      if (self.req) {
        tmp2 = closure_0;
        tmp3 = closure_1;
        obj = require("module_576");
        tmp4 = globalThis;
        _process = process;
        str = "v13.0.0";
        if (obj.gte(process.version, "v13.0.0")) {
          tmp2Result = require("module_576");
          _process2 = process;
          str2 = "v14.0.0";
          if (tmp2Result.lt(process.version, "v14.0.0")) {
            _Error = Error;
            tmp8 = new.target;
            str4 = "Superagent does not work in v13 properly with abort() due to Node.js core changes";
            tmp9 = new.target;
            error = new Error("Superagent does not work in v13 properly with abort() due to Node.js core changes");
            tmp11 = error;
            throw error;
          }
        }
        req = self.req;
        abortResult1 = req.abort();
      }
      clearTimeoutResult = self.clearTimeout();
      str3 = "abort";
      emitResult = self.emit("abort");
      return self;
    }
  }
  _auth(arg0, arg1, arg2, arg3) {
    type = importDefault.type;
    self = this;
    if ("basic" === type) {
      tmp = importAll;
      tmp2 = globalThis;
      _HermesInternal = HermesInternal;
      str3 = ":";
      str4 = "";
      _HermesInternal2 = HermesInternal;
      str5 = "Basic ";
      str6 = "Authorization";
      result = self.set("Authorization", "Basic " + importAll("" + global + ":" + require));
    } else {
      str = "auto";
      if ("auto" === type) {
        self.username = global;
        self.password = require;
      } else {
        str2 = "bearer";
        if ("bearer" === type) {
          tmp4 = globalThis;
          _HermesInternal3 = HermesInternal;
          str7 = "Bearer ";
          str8 = "Authorization";
          result1 = self.set("Authorization", "Bearer " + global);
        }
      }
    }
    return self;
  }
  withCredentials(arg0) {
    flag = global;
    if (undefined === global) {
      flag = true;
    }
    this._withCredentials = flag;
    return this;
  }
  redirects(arg0) {
    this._maxRedirects = global;
    return this;
  }
  maxResponseSize(arg0) {
    if (typeof global !== "number") {
      tmp = globalThis;
      _TypeError = TypeError;
      tmp2 = new.target;
      str = "Invalid argument";
      tmp3 = new.target;
      typeError = new TypeError("Invalid argument");
      tmp5 = typeError;
      throw typeError;
    } else {
      self = this;
      this._maxResponseSize = global;
      return this;
    }
  }
  toJSON() {
    obj = { method: this.method, url: this.url, data: this._data, headers: this._header };
    return obj;
  }
  send(arg0) {
    self = this;
    tmp2 = closure_0;
    tmp3 = closure_1;
    obj = require("_createForOfIteratorHelper");
    isObjectResult = obj.isObject(global);
    content_type = this._header["content-type"];
    if (this._formData) {
      tmp35 = globalThis;
      _Error4 = Error;
      tmp36 = new.target;
      str11 = ".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()";
      tmp37 = new.target;
      error = new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
      tmp39 = error;
      throw error;
    } else {
      if (isObjectResult) {
        if (!self._data) {
          tmp5 = globalThis;
          _Array = Array;
          if (Array.isArray(global)) {
            self._data = [];
          } else if (!self._isHost(global)) {
            self._data = {};
          }
        }
        if (isObjectResult) {
          tmp2Result = require("_createForOfIteratorHelper");
          if (tmp2Result.isObject(self._data)) {
            tmp18 = global;
            tmp12 = content_type;
            keys = Object.keys();
            if (keys !== undefined) {
              tmp12 = content_type;
              tmp20 = keys[tmp];
              while (tmp20 !== undefined) {
                tmp40 = tmp20;
                if (typeof global[tmp20] === "bigint") {
                  if (!global[tmp20].toJSON) {
                    tmp21 = globalThis;
                    _Error2 = Error;
                    tmp22 = new.target;
                    str8 = "Cannot serialize BigInt value to json";
                    tmp23 = new.target;
                    error1 = new Error("Cannot serialize BigInt value to json");
                    tmp25 = error1;
                    throw error1;
                  }
                }
                tmp26 = closure_0;
                tmp27 = closure_1;
                obj3 = require("_createForOfIteratorHelper");
                if (!obj3.hasOwn(global, tmp20)) {
                  continue;
                } else {
                  self._data[tmp20] = global[tmp20];
                  continue;
                }
                continue;
              }
            }
          }
          _isHostResult = !isObjectResult;
          if (isObjectResult) {
            _isHostResult = self._isHost(global);
          }
          if (!_isHostResult) {
            _isHostResult = tmp12;
          }
          if (!_isHostResult) {
            str9 = "json";
            typeResult = self.type("json");
          }
          return self;
        }
        if (typeof global === "bigint") {
          tmp13 = globalThis;
          _Error = Error;
          tmp14 = new.target;
          str7 = "Cannot send value of type BigInt";
          tmp15 = new.target;
          error2 = new Error("Cannot send value of type BigInt");
          tmp17 = error2;
          throw error2;
        } else if (typeof global === "string") {
          if (!content_type) {
            str = "form";
            typeResult1 = self.type("form");
          }
          str2 = self._header["content-type"];
          trimmed = str2;
          if (str2) {
            str3 = str2.toLowerCase();
            trimmed = str3.trim();
          }
          str4 = "application/x-www-form-urlencoded";
          if ("application/x-www-form-urlencoded" === trimmed) {
            combined = global;
            if (self._data) {
              tmp11 = globalThis;
              _HermesInternal = HermesInternal;
              str5 = "&";
              str6 = "";
              combined = "" + self._data + "&" + global;
            }
            sum = combined;
          } else {
            tmp8 = self._data || "";
            sum = tmp8 + global;
          }
          self._data = sum;
          tmp12 = trimmed;
        } else {
          self._data = global;
          tmp12 = content_type;
        }
      }
      if (global) {
        if (self._data) {
          if (self._isHost(self._data)) {
            tmp30 = globalThis;
            _Error3 = Error;
            tmp31 = new.target;
            str10 = "Can't merge these send calls";
            tmp32 = new.target;
            error3 = new Error("Can't merge these send calls");
            tmp34 = error3;
            throw error3;
          }
        }
      }
    }
    return;
  }
  sortQuery(arg0) {
    tmp = undefined === global || global;
    this._sort = tmp;
    return this;
  }
  _finalizeQueryString() {
    self = this;
    _query = this._query;
    joined = _query.join("&");
    if (joined) {
      url = self.url;
      str = "?";
      if (url.includes("?")) {
        str = "&";
      }
      self.url = self.url + (str + joined);
    }
    self._query.length = 0;
    if (self._sort) {
      url = self.url;
      str2 = "?";
      index = url.indexOf("?");
      if (index >= 0) {
        url1 = self.url;
        num = 1;
        str3 = url1.slice(index + 1);
        parts = str3.split("&");
        if (typeof self._sort === "function") {
          sorted = parts.sort(self._sort);
        } else {
          sorted1 = parts.sort();
        }
        url2 = self.url;
        str2 = require("_createForOfIteratorHelper") + str2;
        self.url = str2 + parts.join("&");
      }
    }
    return;
  }
  _appendQueryString() {
    warnResult = console.warn("Unsupported");
    return;
  }
  _timeoutError(arg0, arg1, arg2) {
    self = this;
    if (!this._aborted) {
      tmp = global;
      tmp2 = require;
      tmp3 = importDefault;
      tmp4 = globalThis;
      _Error = Error;
      _HermesInternal = HermesInternal;
      str = "ms exceeded";
      str2 = "";
      tmp5 = new.target;
      tmp6 = new.target;
      error = new Error("" + global + require + "ms exceeded");
      tmp8 = error;
      error.timeout = require;
      str3 = "ECONNABORTED";
      error.code = "ECONNABORTED";
      error.errno = importDefault;
      flag = true;
      self.timedout = true;
      self.timedoutError = error;
      abortResult = self.abort();
      callbackResult = self.callback(error);
    }
    return;
  }
  _setTimeouts() {
    self = this;
    self = this;
    tmp = this._timeout && !self._timer;
    if (tmp) {
      tmp2 = globalThis;
      _setTimeout = setTimeout;
      self._timer = setTimeout(() => {
        self._timeoutError("Timeout of ", self._timeout, "ETIME");
      }, self._timeout);
    }
    tmp3 = self._responseTimeout && !self._responseTimeoutTimer;
    if (tmp3) {
      tmp4 = globalThis;
      _setTimeout2 = setTimeout;
      self._responseTimeoutTimer = setTimeout(() => {
        self._timeoutError("Response timeout of ", self._responseTimeout, "ETIMEDOUT");
      }, self._responseTimeout);
    }
    return;
  }
}
const set = new Set(["ETIMEDOUT", "ECONNRESET", "EADDRINUSE", "ECONNREFUSED", "EPIPE", "ENOTFOUND", "ENETUNREACH", "EAI_AGAIN"]);
const set1 = new Set([408, 413, 429, 500, 502, 503, 504, 521, 522, 524]);
RequestBase.prototype.getHeader = RequestBase.prototype.get;

export default RequestBase;