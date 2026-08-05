// _runtime/00216_t.js
const global = arg0;
const fn = function t(arg0) {
  let closure_0 = arg0;
  class Headers {
    constructor(arg0) {
      self = this;
      closure_0 = arg0;
      this.map = {};
      if (arg0 instanceof Headers) {
        item = arg0.forEach(function(arg0, arg1) {
          this.append(arg1, arg0);
        }, self);
      } else {
        tmp = globalThis;
        _Array = Array;
        if (Array.isArray(arg0)) {
          item1 = arg0.forEach(function(arg0) {
            if (2 != arg0.length) {
              const _TypeError = TypeError;
              const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + arg0.length);
              throw typeError;
            } else {
              const self = this;
              this.append(arg0[0], arg0[1]);
            }
          }, self);
        } else if (arg0) {
          _Object = Object;
          ownPropertyNames = Object.getOwnPropertyNames(arg0);
          item2 = ownPropertyNames.forEach(function(arg0) {
            this.append(arg0, headers[arg0]);
          }, self);
        }
      }
      return;
    }
    append(arg0, arg1) {
      str = arg0;
      if (typeof arg0 !== "string") {
        tmp7 = globalThis;
        _String = String;
        str = String(arg0);
      }
      obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
      if (!obj.test(str)) {
        str2 = "";
        if ("" !== str) {
          tmp = arg1;
          formatted = str.toLowerCase();
          StringResult = arg1;
          if (typeof arg1 !== "string") {
            tmp8 = globalThis;
            _String2 = String;
            StringResult = String(arg1);
          }
          self = this;
          tmp4 = this.map[formatted];
          text = StringResult;
          if (tmp4) {
            str3 = ", ";
            text = `${tmp4}, ${tmp3}`;
          }
          this.map[formatted] = text;
          return;
        }
      }
      typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
      throw typeError;
    }
    delete(arg0) {
      str = arg0;
      if (typeof arg0 !== "string") {
        tmp5 = globalThis;
        _String = String;
        str = String(arg0);
      }
      obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
      if (!obj.test(str)) {
        str2 = "";
        if ("" !== str) {
          formatted = str.toLowerCase();
          delete tmp2[tmp];
          return;
        }
      }
      typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
      throw typeError;
    }
    get(arg0) {
      str = arg0;
      if (typeof arg0 !== "string") {
        tmp4 = globalThis;
        _String = String;
        str = String(arg0);
      }
      obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
      if (!obj.test(str)) {
        str2 = "";
        if ("" !== str) {
          self = this;
          formatted = str.toLowerCase();
          tmp2 = null;
          if (this.has(formatted)) {
            tmp2 = self.map[formatted];
          }
          return tmp2;
        }
      }
      typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
      throw typeError;
    }
    has(arg0) {
      map = this.map;
      str = arg0;
      if (typeof arg0 !== "string") {
        tmp2 = globalThis;
        _String = String;
        str = String(arg0);
      }
      obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
      if (!obj.test(str)) {
        str2 = "";
        if ("" !== str) {
          return map.hasOwnProperty(str.toLowerCase());
        }
      }
      typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
      throw typeError;
    }
    set(arg0, arg1) {
      str = arg0;
      if (typeof arg0 !== "string") {
        tmp5 = globalThis;
        _String = String;
        str = String(arg0);
      }
      obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
      if (!obj.test(str)) {
        str2 = "";
        if ("" !== str) {
          tmp = arg1;
          StringResult = arg1;
          formatted = str.toLowerCase();
          if (typeof arg1 !== "string") {
            tmp6 = globalThis;
            _String2 = String;
            StringResult = String(arg1);
          }
          this.map[formatted] = StringResult;
          return;
        }
      }
      typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
      throw typeError;
    }
    forEach(arg0, arg1) {
      self = this;
      for (const key10005 in this.map) {
        map = self.map;
        tmp3 = key10005;
        if (!map.hasOwnProperty(key10005)) {
          continue;
        } else {
          call = arg0.call;
          tmp = self.map[key10005];
          if (typeof call === "unknown") {
            tmp2 = arg0(tmp, key10005, self);
            continue;
          } else {
            tmp4 = arg0;
            tmp5 = arg1;
            tmp6 = tmp;
            tmp7 = key10005;
            tmp8 = self;
            callResult = call(arg1, tmp, tmp3, self);
            continue;
          }
          continue;
        }
        continue;
      }
      return;
    }
    keys() {
      items = [];
      closure_0 = items;
      item = this.forEach((arg0, arg1) => {
        items.push(arg1);
      });
      closure_0 = items;
      obj = {
        next() {
              const arr = items.shift();
              return { done: undefined === arr, value: arr };
            }
      };
      globalThis = obj;
      if (c3) {
        tmp2 = globalThis;
        _Symbol = Symbol;
        obj[Symbol.iterator] = () => obj;
      }
      return obj;
    }
    values() {
      items = [];
      closure_0 = items;
      item = this.forEach((arg0) => {
        items.push(arg0);
      });
      closure_0 = items;
      obj = {
        next() {
              const arr = items.shift();
              return { done: undefined === arr, value: arr };
            }
      };
      globalThis = obj;
      if (c3) {
        tmp2 = globalThis;
        _Symbol = Symbol;
        obj[Symbol.iterator] = () => obj;
      }
      return obj;
    }
    entries() {
      items = [];
      closure_0 = items;
      item = this.forEach((arg0, arg1) => {
        const items = [arg1, arg0];
        items.push(items);
      });
      closure_0 = items;
      obj = {
        next() {
              const arr = items.shift();
              return { done: undefined === arr, value: arr };
            }
      };
      globalThis = obj;
      if (c3) {
        tmp2 = globalThis;
        _Symbol = Symbol;
        obj[Symbol.iterator] = () => obj;
      }
      return obj;
    }
  }
  function readBlobAsArrayBuffer(closure_0) {
    const fileReader = new FileReader();
    const asArrayBuffer = fileReader.readAsArrayBuffer(closure_0);
    return new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      closure_0.onload = () => {
        lib(lib.result);
      };
      closure_0.onerror = () => {
        callback(lib.error);
      };
    });
  }
  class Request {
    constructor(arg0, arg1) {
      self = this;
      if (this instanceof Request) {
        request = arg1;
        if (!arg1) {
          request = {};
        }
        tmp7 = arg0;
        body = request.body;
        if (arg0 instanceof tmp) {
          if (arg0.bodyUsed) {
            tmp48 = globalThis;
            _TypeError3 = TypeError;
            tmp49 = new.target;
            str14 = "Already read";
            tmp50 = new.target;
            typeError = new TypeError("Already read");
            tmp52 = typeError;
            throw typeError;
          } else {
            ({ url: self.url, credentials: self.credentials } = arg0);
            if (request.headers) {
              ({ method: self.method, mode: self.mode, signal: self.signal } = arg0);
              tmp15 = body;
              if (!body) {
                tmp16 = null;
                tmp15 = null == arg0._bodyInit;
              }
              _bodyInit = body;
              if (!tmp15) {
                _bodyInit = arg0._bodyInit;
                flag = true;
                arg0.bodyUsed = true;
              }
            } else {
              tmp9 = Headers;
              headers = arg0.headers;
              obj = Object.create(Headers.prototype);
              obj.map = {};
              if (headers instanceof Headers) {
                item = headers.forEach(function(arg0, arg1) {
                  this.append(arg1, arg0);
                }, obj);
                self.headers = obj;
              } else {
                tmp11 = globalThis;
                _Array = Array;
                if (!Array.isArray(headers)) {
                  if (headers) {
                    _Object = Object;
                    ownPropertyNames = Object.getOwnPropertyNames(headers);
                    item1 = ownPropertyNames.forEach(function(arg0) {
                      this.append(arg0, headers[arg0]);
                    }, obj);
                  }
                }
              }
              item2 = headers.forEach(function(arg0) {
                if (2 != arg0.length) {
                  const _TypeError = TypeError;
                  const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + arg0.length);
                  throw typeError;
                } else {
                  const self = this;
                  this.append(arg0[0], arg0[1]);
                }
              }, obj);
            }
          }
        } else {
          tmp8 = globalThis;
          _String = String;
          self.url = String(arg0);
          _bodyInit = body;
        }
        self.credentials = request.credentials || self.credentials || "same-origin";
        headers = request.headers;
        headers2 = !headers;
        if (!headers) {
          headers2 = self.headers;
        }
        if (headers2) {
          str2 = request.method || self.method || "GET";
          formatted = str2.toUpperCase();
          tmp24 = entries;
          num = -1;
          if (entries.indexOf(formatted) > -1) {
            str2 = formatted;
          }
          self.method = str2;
          self.mode = request.mode || self.mode || null;
          tmp25 = request.signal || self.signal;
          if (!tmp25) {
            tmp26 = globalThis;
            str3 = "AbortController";
            signal = undefined;
            if ("AbortController" in globalThis) {
              tmp28 = globalThis;
              _AbortController = AbortController;
              tmp29 = new.target;
              tmp30 = new.target;
              abortController = new AbortController();
              tmp32 = abortController;
              signal = abortController.signal;
            }
            tmp25 = signal;
          }
          self.signal = tmp25;
          tmp33 = null;
          self.referrer = null;
          str4 = "GET";
          if ("GET" === self.method) {
            if (_bodyInit) {
              tmp43 = globalThis;
              _TypeError2 = TypeError;
              tmp44 = new.target;
              str13 = "Body not allowed for GET or HEAD requests";
              tmp45 = new.target;
              typeError1 = new TypeError("Body not allowed for GET or HEAD requests");
              tmp47 = typeError1;
              throw typeError1;
            }
          } else {
            str5 = "HEAD";
          }
          _initBodyResult = self._initBody(_bodyInit);
          if ("GET" === self.method) {
            str7 = "no-store";
            if ("no-store" === request.cache) {
              obj = /([?&])_=[^&]*/;
              str9 = self.url;
              if (obj.test(self.url)) {
                tmp39 = globalThis;
                _Date2 = Date;
                tmp40 = new.target;
                tmp41 = new.target;
                date = new Date();
                tmp42 = date;
                str12 = "$1_=";
                self.url = str9.replace(obj, `$1_=${obj4.getTime()}`);
              } else {
                obj2 = /\?/;
                str10 = "?";
                if (obj2.test(self.url)) {
                  str10 = "&";
                }
                tmp35 = globalThis;
                _Date = Date;
                tmp36 = new.target;
                tmp37 = new.target;
                date1 = new Date();
                tmp38 = date1;
                str11 = "_=";
                self.url = `${str9}${str10}_=${obj3.getTime()}`;
              }
            } else {
              str8 = "no-cache";
            }
          } else {
            str6 = "HEAD";
          }
          return;
        } else {
          tmp17 = Headers;
          headers1 = request.headers;
          obj1 = Object.create(Headers.prototype);
          headers = headers1;
          obj1.map = {};
          if (headers1 instanceof Headers) {
            item3 = headers1.forEach(function(arg0, arg1) {
              this.append(arg1, arg0);
            }, obj1);
            self.headers = obj1;
          } else {
            tmp19 = globalThis;
            _Array2 = Array;
            if (!Array.isArray(headers1)) {
              if (headers1) {
                _Object2 = Object;
                ownPropertyNames1 = Object.getOwnPropertyNames(headers1);
                item4 = ownPropertyNames1.forEach(function(arg0) {
                  this.append(arg0, headers[arg0]);
                }, obj1);
              }
            }
          }
          item5 = headers1.forEach(function(arg0) {
            if (2 != arg0.length) {
              const _TypeError = TypeError;
              const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + arg0.length);
              throw typeError;
            } else {
              const self = this;
              this.append(arg0[0], arg0[1]);
            }
          }, obj1);
        }
      } else {
        tmp2 = globalThis;
        _TypeError = TypeError;
        tmp3 = new.target;
        str = "Please use the \"new\" operator, this DOM object constructor cannot be called as a function.";
        tmp4 = new.target;
        typeError2 = new TypeError("Please use the \"new\" operator, this DOM object constructor cannot be called as a function.");
        tmp6 = typeError2;
        throw typeError2;
      }
      return;
    }
    clone() {
      obj = { body: this._bodyInit };
      obj = Object.create(Request.prototype);
      tmp2 = Request(this, obj);
      return obj;
    }
  }
  function decode(str) {
    const formData = new FormData();
    let parts = str.trim().split("&");
    const item = parts.forEach((str) => {
      if (str) {
        const parts = str.split("=");
        const replaced = parts.shift().replace(/\+/g, " ");
        const str2 = parts.shift();
        const _decodeURIComponent = decodeURIComponent;
        const replaced1 = parts.join("=").replace(/\+/g, " ");
        const _decodeURIComponent2 = decodeURIComponent;
        const str4 = parts.join("=");
        formData.append(decodeURIComponent(replaced), decodeURIComponent(replaced1));
        const decodeURIComponentResult = decodeURIComponent(replaced);
      }
    });
    return formData;
  }
  class Response {
    constructor(arg0, arg1) {
      self = this;
      if (this instanceof Response) {
        response = arg1;
        if (!arg1) {
          response = {};
        }
        str2 = "default";
        self.type = "default";
        num = 200;
        num2 = 200;
        if (undefined !== response.status) {
          num2 = response.status;
        }
        self.status = num2;
        if (self.status >= 200) {
          num4 = 599;
          if (self.status <= 599) {
            tmp6 = self.status >= 200;
            if (tmp6) {
              num3 = 300;
              tmp6 = self.status < 300;
            }
            self.ok = tmp6;
            str3 = "";
            str4 = "";
            if (undefined !== response.statusText) {
              str4 = `${response.statusText}`;
            }
            self.statusText = str4;
            tmp7 = Headers;
            headers = response.headers;
            obj = Object.create(Headers.prototype);
            obj.map = {};
            if (headers instanceof Headers) {
              item = headers.forEach(function(arg0, arg1) {
                this.append(arg1, arg0);
              }, obj);
            } else {
              tmp9 = globalThis;
              _Array = Array;
              if (Array.isArray(headers)) {
                item1 = headers.forEach(function(arg0) {
                  if (2 != arg0.length) {
                    const _TypeError = TypeError;
                    const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + arg0.length);
                    throw typeError;
                  } else {
                    const self = this;
                    this.append(arg0[0], arg0[1]);
                  }
                }, obj);
              } else if (headers) {
                _Object = Object;
                ownPropertyNames = Object.getOwnPropertyNames(headers);
                item2 = ownPropertyNames.forEach(function(arg0) {
                  this.append(arg0, headers[arg0]);
                }, obj);
              }
            }
            self.headers = obj;
            tmp13 = response.url || "";
            tmp14 = arg0;
            self.url = tmp13;
            _initBodyResult = self._initBody(arg0);
            return;
          }
        }
        tmp16 = globalThis;
        _RangeError = RangeError;
        tmp17 = new.target;
        str5 = "Failed to construct 'Response': The status provided (0) is outside the range [200, 599].";
        tmp18 = new.target;
        rangeError = new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
        tmp20 = rangeError;
        throw rangeError;
      } else {
        tmp = globalThis;
        _TypeError = TypeError;
        tmp2 = new.target;
        str = "Please use the \"new\" operator, this DOM object constructor cannot be called as a function.";
        tmp3 = new.target;
        typeError = new TypeError("Please use the \"new\" operator, this DOM object constructor cannot be called as a function.");
        tmp5 = typeError;
        throw typeError;
      }
    }
  }
  let _globalThis = typeof globalThis !== "undefined";
  if (typeof globalThis !== "undefined") {
    _globalThis = globalThis;
  }
  if (!_globalThis) {
    const _self = self;
    class Headers {
      constructor(arg0) {
        self = this;
        closure_0 = arg0;
        this.map = {};
        if (arg0 instanceof Headers) {
          item = arg0.forEach(function(arg0, arg1) {
            this.append(arg1, arg0);
          }, self);
        } else {
          tmp = globalThis;
          _Array = Array;
          if (Array.isArray(arg0)) {
            item1 = arg0.forEach(function(arg0) {
              if (2 != arg0.length) {
                const _TypeError = TypeError;
                const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + arg0.length);
                throw typeError;
              } else {
                const self = this;
                this.append(arg0[0], arg0[1]);
              }
            }, self);
          } else if (arg0) {
            _Object = Object;
            ownPropertyNames = Object.getOwnPropertyNames(arg0);
            item2 = ownPropertyNames.forEach(function(arg0) {
              this.append(arg0, headers[arg0]);
            }, self);
          }
        }
        return;
      }
      append(arg0, arg1) {
        str = arg0;
        if (typeof arg0 !== "string") {
          tmp7 = globalThis;
          _String = String;
          str = String(arg0);
        }
        obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          str2 = "";
          if ("" !== str) {
            tmp = arg1;
            formatted = str.toLowerCase();
            StringResult = arg1;
            if (typeof arg1 !== "string") {
              tmp8 = globalThis;
              _String2 = String;
              StringResult = String(arg1);
            }
            self = this;
            tmp4 = this.map[formatted];
            text = StringResult;
            if (tmp4) {
              str3 = ", ";
              text = `${tmp4}, ${tmp3}`;
            }
            this.map[formatted] = text;
            return;
          }
        }
        typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      delete(arg0) {
        str = arg0;
        if (typeof arg0 !== "string") {
          tmp5 = globalThis;
          _String = String;
          str = String(arg0);
        }
        obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          str2 = "";
          if ("" !== str) {
            formatted = str.toLowerCase();
            delete tmp2[tmp];
            return;
          }
        }
        typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      get(arg0) {
        str = arg0;
        if (typeof arg0 !== "string") {
          tmp4 = globalThis;
          _String = String;
          str = String(arg0);
        }
        obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          str2 = "";
          if ("" !== str) {
            self = this;
            formatted = str.toLowerCase();
            tmp2 = null;
            if (this.has(formatted)) {
              tmp2 = self.map[formatted];
            }
            return tmp2;
          }
        }
        typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      has(arg0) {
        map = this.map;
        str = arg0;
        if (typeof arg0 !== "string") {
          tmp2 = globalThis;
          _String = String;
          str = String(arg0);
        }
        obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          str2 = "";
          if ("" !== str) {
            return map.hasOwnProperty(str.toLowerCase());
          }
        }
        typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      set(arg0, arg1) {
        str = arg0;
        if (typeof arg0 !== "string") {
          tmp5 = globalThis;
          _String = String;
          str = String(arg0);
        }
        obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          str2 = "";
          if ("" !== str) {
            tmp = arg1;
            StringResult = arg1;
            formatted = str.toLowerCase();
            if (typeof arg1 !== "string") {
              tmp6 = globalThis;
              _String2 = String;
              StringResult = String(arg1);
            }
            this.map[formatted] = StringResult;
            return;
          }
        }
        typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      forEach(arg0, arg1) {
        self = this;
        for (const key10005 in this.map) {
          map = self.map;
          tmp3 = key10005;
          if (!map.hasOwnProperty(key10005)) {
            continue;
          } else {
            call = arg0.call;
            tmp = self.map[key10005];
            if (typeof call === "unknown") {
              tmp2 = arg0(tmp, key10005, self);
              continue;
            } else {
              tmp4 = arg0;
              tmp5 = arg1;
              tmp6 = tmp;
              tmp7 = key10005;
              tmp8 = self;
              callResult = call(arg1, tmp, tmp3, self);
              continue;
            }
            continue;
          }
          continue;
        }
        return;
      }
      keys() {
        items = [];
        closure_0 = items;
        item = this.forEach((arg0, arg1) => {
          items.push(arg1);
        });
        closure_0 = items;
        obj = {
          next() {
                  const arr = items.shift();
                  return { done: undefined === arr, value: arr };
                }
        };
        globalThis = obj;
        if (c3) {
          tmp2 = globalThis;
          _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
      values() {
        items = [];
        closure_0 = items;
        item = this.forEach((arg0) => {
          items.push(arg0);
        });
        closure_0 = items;
        obj = {
          next() {
                  const arr = items.shift();
                  return { done: undefined === arr, value: arr };
                }
        };
        globalThis = obj;
        if (c3) {
          tmp2 = globalThis;
          _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
      entries() {
        items = [];
        closure_0 = items;
        item = this.forEach((arg0, arg1) => {
          const items = [arg1, arg0];
          items.push(items);
        });
        closure_0 = items;
        obj = {
          next() {
                  const arr = items.shift();
                  return { done: undefined === arr, value: arr };
                }
        };
        globalThis = obj;
        if (c3) {
          tmp2 = globalThis;
          _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
    }
    _globalThis = typeof self !== "undefined";
    let tmp = typeof self !== "undefined";
  }
  if (!_globalThis) {
    _globalThis = undefined !== closure_0 && closure_0;
    let tmp2 = undefined !== closure_0 && closure_0;
  }
  if (!_globalThis) {
    _globalThis = {};
  }
  let closure_2 = "URLSearchParams" in _globalThis;
  if ("Symbol" in _globalThis) {
    let _Symbol = Symbol;
    class Headers {
      constructor(arg0) {
        self = this;
        closure_0 = arg0;
        this.map = {};
        if (arg0 instanceof Headers) {
          item = arg0.forEach(function(arg0, arg1) {
            this.append(arg1, arg0);
          }, self);
        } else {
          tmp = globalThis;
          _Array = Array;
          if (Array.isArray(arg0)) {
            item1 = arg0.forEach(function(arg0) {
              if (2 != arg0.length) {
                const _TypeError = TypeError;
                const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + arg0.length);
                throw typeError;
              } else {
                const self = this;
                this.append(arg0[0], arg0[1]);
              }
            }, self);
          } else if (arg0) {
            _Object = Object;
            ownPropertyNames = Object.getOwnPropertyNames(arg0);
            item2 = ownPropertyNames.forEach(function(arg0) {
              this.append(arg0, headers[arg0]);
            }, self);
          }
        }
        return;
      }
      append(arg0, arg1) {
        str = arg0;
        if (typeof arg0 !== "string") {
          tmp7 = globalThis;
          _String = String;
          str = String(arg0);
        }
        obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          str2 = "";
          if ("" !== str) {
            tmp = arg1;
            formatted = str.toLowerCase();
            StringResult = arg1;
            if (typeof arg1 !== "string") {
              tmp8 = globalThis;
              _String2 = String;
              StringResult = String(arg1);
            }
            self = this;
            tmp4 = this.map[formatted];
            text = StringResult;
            if (tmp4) {
              str3 = ", ";
              text = `${tmp4}, ${tmp3}`;
            }
            this.map[formatted] = text;
            return;
          }
        }
        typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      delete(arg0) {
        str = arg0;
        if (typeof arg0 !== "string") {
          tmp5 = globalThis;
          _String = String;
          str = String(arg0);
        }
        obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          str2 = "";
          if ("" !== str) {
            formatted = str.toLowerCase();
            delete tmp2[tmp];
            return;
          }
        }
        typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      get(arg0) {
        str = arg0;
        if (typeof arg0 !== "string") {
          tmp4 = globalThis;
          _String = String;
          str = String(arg0);
        }
        obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          str2 = "";
          if ("" !== str) {
            self = this;
            formatted = str.toLowerCase();
            tmp2 = null;
            if (this.has(formatted)) {
              tmp2 = self.map[formatted];
            }
            return tmp2;
          }
        }
        typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      has(arg0) {
        map = this.map;
        str = arg0;
        if (typeof arg0 !== "string") {
          tmp2 = globalThis;
          _String = String;
          str = String(arg0);
        }
        obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          str2 = "";
          if ("" !== str) {
            return map.hasOwnProperty(str.toLowerCase());
          }
        }
        typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      set(arg0, arg1) {
        str = arg0;
        if (typeof arg0 !== "string") {
          tmp5 = globalThis;
          _String = String;
          str = String(arg0);
        }
        obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          str2 = "";
          if ("" !== str) {
            tmp = arg1;
            StringResult = arg1;
            formatted = str.toLowerCase();
            if (typeof arg1 !== "string") {
              tmp6 = globalThis;
              _String2 = String;
              StringResult = String(arg1);
            }
            this.map[formatted] = StringResult;
            return;
          }
        }
        typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      forEach(arg0, arg1) {
        self = this;
        for (const key10005 in this.map) {
          map = self.map;
          tmp3 = key10005;
          if (!map.hasOwnProperty(key10005)) {
            continue;
          } else {
            call = arg0.call;
            tmp = self.map[key10005];
            if (typeof call === "unknown") {
              tmp2 = arg0(tmp, key10005, self);
              continue;
            } else {
              tmp4 = arg0;
              tmp5 = arg1;
              tmp6 = tmp;
              tmp7 = key10005;
              tmp8 = self;
              callResult = call(arg1, tmp, tmp3, self);
              continue;
            }
            continue;
          }
          continue;
        }
        return;
      }
      keys() {
        items = [];
        closure_0 = items;
        item = this.forEach((arg0, arg1) => {
          items.push(arg1);
        });
        closure_0 = items;
        obj = {
          next() {
                  const arr = items.shift();
                  return { done: undefined === arr, value: arr };
                }
        };
        globalThis = obj;
        if (c3) {
          tmp2 = globalThis;
          _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
      values() {
        items = [];
        closure_0 = items;
        item = this.forEach((arg0) => {
          items.push(arg0);
        });
        closure_0 = items;
        obj = {
          next() {
                  const arr = items.shift();
                  return { done: undefined === arr, value: arr };
                }
        };
        globalThis = obj;
        if (c3) {
          tmp2 = globalThis;
          _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
      entries() {
        items = [];
        closure_0 = items;
        item = this.forEach((arg0, arg1) => {
          const items = [arg1, arg0];
          items.push(items);
        });
        closure_0 = items;
        obj = {
          next() {
                  const arr = items.shift();
                  return { done: undefined === arr, value: arr };
                }
        };
        globalThis = obj;
        if (c3) {
          tmp2 = globalThis;
          _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
    }
  }
  let closure_3 = tmp3;
  let tmp4 = "FileReader" in _globalThis;
  if (tmp4) {
    tmp4 = "Blob" in _globalThis;
  }
  if (tmp4) {
    tmp4 = (() => {
      try {
        const _Blob = Blob;
        const blob = new Blob();
        return true;
      } catch (err) {
        return false;
      }
    })();
  }
  let closure_4 = tmp4;
  let closure_5 = "FormData" in _globalThis;
  let closure_6 = tmp5;
  if ("ArrayBuffer" in _globalThis) {
    let closure_7 = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"];
    let _ArrayBuffer = ArrayBuffer;
    class Headers {
      constructor(arg0) {
        self = this;
        closure_0 = arg0;
        this.map = {};
        if (arg0 instanceof Headers) {
          item = arg0.forEach(function(arg0, arg1) {
            this.append(arg1, arg0);
          }, self);
        } else {
          tmp = globalThis;
          _Array = Array;
          if (Array.isArray(arg0)) {
            item1 = arg0.forEach(function(arg0) {
              if (2 != arg0.length) {
                const _TypeError = TypeError;
                const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + arg0.length);
                throw typeError;
              } else {
                const self = this;
                this.append(arg0[0], arg0[1]);
              }
            }, self);
          } else if (arg0) {
            _Object = Object;
            ownPropertyNames = Object.getOwnPropertyNames(arg0);
            item2 = ownPropertyNames.forEach(function(arg0) {
              this.append(arg0, headers[arg0]);
            }, self);
          }
        }
        return;
      }
      append(arg0, arg1) {
        str = arg0;
        if (typeof arg0 !== "string") {
          tmp7 = globalThis;
          _String = String;
          str = String(arg0);
        }
        obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          str2 = "";
          if ("" !== str) {
            tmp = arg1;
            formatted = str.toLowerCase();
            StringResult = arg1;
            if (typeof arg1 !== "string") {
              tmp8 = globalThis;
              _String2 = String;
              StringResult = String(arg1);
            }
            self = this;
            tmp4 = this.map[formatted];
            text = StringResult;
            if (tmp4) {
              str3 = ", ";
              text = `${tmp4}, ${tmp3}`;
            }
            this.map[formatted] = text;
            return;
          }
        }
        typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      delete(arg0) {
        str = arg0;
        if (typeof arg0 !== "string") {
          tmp5 = globalThis;
          _String = String;
          str = String(arg0);
        }
        obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          str2 = "";
          if ("" !== str) {
            formatted = str.toLowerCase();
            delete tmp2[tmp];
            return;
          }
        }
        typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      get(arg0) {
        str = arg0;
        if (typeof arg0 !== "string") {
          tmp4 = globalThis;
          _String = String;
          str = String(arg0);
        }
        obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          str2 = "";
          if ("" !== str) {
            self = this;
            formatted = str.toLowerCase();
            tmp2 = null;
            if (this.has(formatted)) {
              tmp2 = self.map[formatted];
            }
            return tmp2;
          }
        }
        typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      has(arg0) {
        map = this.map;
        str = arg0;
        if (typeof arg0 !== "string") {
          tmp2 = globalThis;
          _String = String;
          str = String(arg0);
        }
        obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          str2 = "";
          if ("" !== str) {
            return map.hasOwnProperty(str.toLowerCase());
          }
        }
        typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      set(arg0, arg1) {
        str = arg0;
        if (typeof arg0 !== "string") {
          tmp5 = globalThis;
          _String = String;
          str = String(arg0);
        }
        obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          str2 = "";
          if ("" !== str) {
            tmp = arg1;
            StringResult = arg1;
            formatted = str.toLowerCase();
            if (typeof arg1 !== "string") {
              tmp6 = globalThis;
              _String2 = String;
              StringResult = String(arg1);
            }
            this.map[formatted] = StringResult;
            return;
          }
        }
        typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      forEach(arg0, arg1) {
        self = this;
        for (const key10005 in this.map) {
          map = self.map;
          tmp3 = key10005;
          if (!map.hasOwnProperty(key10005)) {
            continue;
          } else {
            call = arg0.call;
            tmp = self.map[key10005];
            if (typeof call === "unknown") {
              tmp2 = arg0(tmp, key10005, self);
              continue;
            } else {
              tmp4 = arg0;
              tmp5 = arg1;
              tmp6 = tmp;
              tmp7 = key10005;
              tmp8 = self;
              callResult = call(arg1, tmp, tmp3, self);
              continue;
            }
            continue;
          }
          continue;
        }
        return;
      }
      keys() {
        items = [];
        closure_0 = items;
        item = this.forEach((arg0, arg1) => {
          items.push(arg1);
        });
        closure_0 = items;
        obj = {
          next() {
                  const arr = items.shift();
                  return { done: undefined === arr, value: arr };
                }
        };
        globalThis = obj;
        if (c3) {
          tmp2 = globalThis;
          _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
      values() {
        items = [];
        closure_0 = items;
        item = this.forEach((arg0) => {
          items.push(arg0);
        });
        closure_0 = items;
        obj = {
          next() {
                  const arr = items.shift();
                  return { done: undefined === arr, value: arr };
                }
        };
        globalThis = obj;
        if (c3) {
          tmp2 = globalThis;
          _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
      entries() {
        items = [];
        closure_0 = items;
        item = this.forEach((arg0, arg1) => {
          const items = [arg1, arg0];
          items.push(items);
        });
        closure_0 = items;
        obj = {
          next() {
                  const arr = items.shift();
                  return { done: undefined === arr, value: arr };
                }
        };
        globalThis = obj;
        if (c3) {
          tmp2 = globalThis;
          _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
    }
    let closure_8 = tmp6;
  }
  if ("Symbol" in _globalThis) {
    const _Symbol2 = Symbol;
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }
  class Body {
    constructor() {
      obj = {
        bodyUsed: false,
        _initBody: function(_bodyInit) {
              const self = this;
              this.bodyUsed = this.bodyUsed;
              this._bodyInit = _bodyInit;
              if (_bodyInit) {
                if (typeof _bodyInit === "string") {
                  self._bodyText = _bodyInit;
                  let tmp = _bodyInit;
                } else {
                  if (closure_4) {
                    const _Blob = Blob;
                    if (prototype.isPrototypeOf(_bodyInit)) {
                      self._bodyBlob = _bodyInit;
                      tmp = _bodyInit;
                    }
                  }
                  if (closure_5) {
                    const _FormData = FormData;
                    if (prototype2.isPrototypeOf(_bodyInit)) {
                      self._bodyFormData = _bodyInit;
                      tmp = _bodyInit;
                    }
                  }
                  if (closure_2) {
                    const _URLSearchParams = URLSearchParams;
                    if (prototype3.isPrototypeOf(_bodyInit)) {
                      self._bodyText = _bodyInit.toString();
                      tmp = _bodyInit;
                    }
                  }
                  if (closure_6) {
                    if (tmp44) {
                      let isPrototypeOfResult = _bodyInit;
                      if (_bodyInit) {
                        const _DataView = DataView;
                        isPrototypeOfResult = prototype4.isPrototypeOf(_bodyInit);
                      }
                      if (isPrototypeOfResult) {
                        let buffer = _bodyInit.buffer;
                        if (buffer.slice) {
                          let buffer2 = buffer.slice(0);
                        } else {
                          const _Uint8Array3 = Uint8Array;
                          const uint8Array = new Uint8Array(buffer.byteLength);
                          const _Uint8Array4 = Uint8Array;
                          const uint8Array1 = new Uint8Array(buffer);
                          const result = uint8Array.set(uint8Array1);
                          buffer2 = uint8Array.buffer;
                        }
                        self._bodyArrayBuffer = buffer2;
                        const _Blob2 = Blob;
                        const items = [self._bodyArrayBuffer];
                        const blob = new Blob(items);
                        self._bodyInit = blob;
                        tmp = _bodyInit;
                      }
                    }
                  }
                  if (tmp7) {
                    const _ArrayBuffer = ArrayBuffer;
                    if (_bodyInit.slice) {
                      buffer = _bodyInit.slice(0);
                    } else {
                      const _Uint8Array = Uint8Array;
                      const uint8Array2 = new Uint8Array(_bodyInit.byteLength);
                      const _Uint8Array2 = Uint8Array;
                      const uint8Array3 = new Uint8Array(_bodyInit);
                      const result1 = uint8Array2.set(uint8Array3);
                      buffer = uint8Array2.buffer;
                    }
                    self._bodyArrayBuffer = buffer;
                    tmp = _bodyInit;
                  }
                  const _Object = Object;
                  const call = toString.call;
                  const tmp13 = typeof call === "unknown" ? toString() : call(_bodyInit);
                  self._bodyText = tmp13;
                  tmp = tmp13;
                  tmp44 = closure_4;
                  tmp7 = closure_6;
                }
              } else {
                self._noBody = true;
                self._bodyText = "";
                tmp = _bodyInit;
              }
              const headers = self.headers;
              if (!headers.get("content-type")) {
                if (typeof tmp === "string") {
                  const headers4 = self.headers;
                  const result2 = headers4.set("content-type", "text/plain;charset=UTF-8");
                } else {
                  if (self._bodyBlob) {
                    if (self._bodyBlob.type) {
                      const headers3 = self.headers;
                      const result3 = headers3.set("content-type", self._bodyBlob.type);
                    }
                  }
                  let isPrototypeOfResult1 = closure_2;
                  if (closure_2) {
                    const _URLSearchParams2 = URLSearchParams;
                    isPrototypeOfResult1 = prototype6.isPrototypeOf(tmp);
                  }
                  if (isPrototypeOfResult1) {
                    const headers2 = self.headers;
                    const result4 = headers2.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                  }
                }
              }
            }
      };
      if (FileReader) {
        obj.blob = function() {
          const self = this;
          if (this._noBody) {
            if (!undefined) {
              if (self._bodyBlob) {
                return Promise.resolve(self._bodyBlob);
              } else if (self._bodyArrayBuffer) {
                const _Blob2 = Blob;
                const items = [self._bodyArrayBuffer];
                const blob = new Blob(items);
                return Promise.resolve(blob);
              } else if (self._bodyFormData) {
                const _Error = Error;
                const error = new Error("could not read FormData body as blob");
                throw error;
              } else {
                const _Blob = Blob;
                const items1 = [self._bodyText];
                const blob1 = new Blob(items1);
                return Promise.resolve(blob1);
              }
            }
          } else if (self.bodyUsed) {
            const _TypeError = TypeError;
            const typeError = new TypeError("Already read");
            const rejectResult = Promise.reject(typeError);
          } else {
            self.bodyUsed = true;
          }
        };
      }
      obj.arrayBuffer = function() {
        let self = this;
        if (this._bodyArrayBuffer) {
          if (self._noBody) {
            if (!undefined) {
              const _ArrayBuffer = ArrayBuffer;
              let byteOffset = self._bodyArrayBuffer;
              if (ArrayBuffer.isView(self._bodyArrayBuffer)) {
                const buffer = byteOffset.buffer;
                byteOffset = self._bodyArrayBuffer.byteOffset;
                self = buffer.slice(byteOffset, self._bodyArrayBuffer.byteOffset + self._bodyArrayBuffer.byteLength);
                let resolveResult = resolve(self);
              } else {
                resolveResult = resolve(byteOffset);
              }
            }
          } else if (self.bodyUsed) {
            const _TypeError = TypeError;
            const typeError = new TypeError("Already read");
            const rejectResult = Promise.reject(typeError);
          } else {
            self.bodyUsed = true;
          }
        } else if (closure_4) {
          return self.blob().then(closure_10);
        } else {
          const _Error = Error;
          const error = new Error("could not read as ArrayBuffer");
          throw error;
        }
      };
      obj.text = function() {
        let length;
        const self = this;
        if (this._noBody) {
          if (!undefined) {
            if (self._bodyBlob) {
              const _bodyBlob = self._bodyBlob;
              const _FileReader = FileReader;
              const fileReader = new FileReader();
              const promise = new Promise((arg0, arg1) => {
                let closure_0 = arg0;
                let closure_1 = arg1;
                closure_0.onload = () => {
                  lib(lib.result);
                };
                closure_0.onerror = () => {
                  callback(lib.error);
                };
              });
              const match = /charset=([A-Za-z0-9_-]+)/.exec(_bodyBlob.type);
              let str4 = "utf-8";
              if (match) {
                str4 = match[1];
              }
              const asText = fileReader.readAsText(_bodyBlob, str4);
              return promise;
            } else if (self._bodyArrayBuffer) {
              const _Uint8Array = Uint8Array;
              const uint8Array = new Uint8Array(self._bodyArrayBuffer);
              const _Array = Array;
              const array = new Array(uint8Array.length);
              let num = 0;
              if (0 < uint8Array.length) {
                do {
                  let _String = String;
                  array[num] = String.fromCharCode(uint8Array[num]);
                  num = num + 1;
                  length = uint8Array.length;
                } while (num < length);
              }
              return Promise.resolve(array.join(""));
            } else if (self._bodyFormData) {
              const _Error = Error;
              const error = new Error("could not read FormData body as text");
              throw error;
            } else {
              return Promise.resolve(self._bodyText);
            }
          }
        } else if (self.bodyUsed) {
          const _TypeError = TypeError;
          const typeError = new TypeError("Already read");
          const rejectResult = Promise.reject(typeError);
        } else {
          self.bodyUsed = true;
        }
      };
      if (FormData) {
        obj.formData = function() {
          return this.text().then(closure_13);
        };
      }
      obj.json = function() {
        return this.text().then(JSON.parse);
      };
      return obj;
    }
  }
  let closure_11 = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
  let call = Body.call;
  let prototype = Request.prototype;
  if (typeof call === "unknown") {
    Body();
  } else {
    call(prototype);
  }
  const call2 = Body.call;
  let DOMException = Response.prototype;
  if (typeof call2 === "unknown") {
    Body();
  } else {
    call2(DOMException);
  }
  Body = Response.prototype;
  Body.clone = function() {
    let obj = { status: this.status, statusText: this.statusText, headers: null, url: null };
    const headers = this.headers;
    obj = Object.create(Headers.prototype);
    obj.map = {};
    if (headers instanceof Headers) {
      const item = headers.forEach(function(arg0, arg1) {
        this.append(arg1, arg0);
      }, obj);
    } else {
      const _Array = Array;
      if (Array.isArray(headers)) {
        const item1 = headers.forEach(function(arg0) {
          if (2 != arg0.length) {
            const _TypeError = TypeError;
            const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + arg0.length);
            throw typeError;
          } else {
            const self = this;
            this.append(arg0[0], arg0[1]);
          }
        }, obj);
      } else if (headers) {
        const _Object = Object;
        const ownPropertyNames = Object.getOwnPropertyNames(headers);
        const item2 = ownPropertyNames.forEach(function(arg0) {
          this.append(arg0, headers[arg0]);
        }, obj);
      }
    }
    obj[2] = obj;
    obj[3] = this.url;
    obj = Object.create(tmp.prototype);
    Response(this._bodyInit, obj);
    return obj;
  };
  Response.error = () => {
    const obj = Object.create(Response.prototype);
    Response(null, { status: 200, statusText: "" });
    obj.ok = false;
    obj.status = 0;
    obj.type = "error";
    return obj;
  };
  let closure_15 = [301, 302, 303, 307, 308];
  Response.redirect = (arg0, arg1) => {
    if (-1 === closure_15.indexOf(arg1)) {
      const _RangeError = RangeError;
      const rangeError = new RangeError("Invalid status code");
      throw rangeError;
    } else {
      let obj = { status: null, headers: null };
      obj[0] = arg1;
      obj = { location: null };
      obj[0] = arg0;
      obj[1] = obj;
      obj = Object.create(Response.prototype);
      Response(null, obj);
      return obj;
    }
  };
  DOMException = _globalThis.DOMException;
  arg0.DOMException = DOMException;
};
if (typeof obj === "object") {
  if (undefined !== arg4) {
    fn(obj);
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["exports"], fn);
  }
}
obj = {};
this.WHATWGFetch = obj;
fn(obj);