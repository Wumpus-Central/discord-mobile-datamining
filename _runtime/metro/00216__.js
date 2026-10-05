// === Module 216: ? ===

// Module 216
let hasOwnProperty, map, set, set2;

const fn = function t(DOMException) {
  let closure_0 = DOMException;
  class Headers {
    constructor(headers) {
      const self = this;
      closure_0 = headers;
      this.map = {};
      if (headers instanceof Headers) {
        const item = headers.forEach(function(item, index) {
          this.append(index, item);
        }, self);
      } else {
        const _Array = Array;
        if (Array.isArray(headers)) {
          const item1 = headers.forEach(function(item) {
            if (2 != item.length) {
              const _TypeError = TypeError;
              const self2 = this;
              const self3 = this;
              const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + item.length);
              throw typeError;
            } else {
              const self = this;
              this.append(item[0], item[1]);
            }
          }, self);
        } else if (headers) {
          const _Object = Object;
          const ownPropertyNames = Object.getOwnPropertyNames(headers);
          const item2 = ownPropertyNames.forEach(function(item) {
            this.append(item, headers[item]);
          }, self);
        }
      }
    }
    append(str, str2) {
      if (typeof str !== "string") {
        const _String = String;
        str = String(str);
      }
      const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
      if (!obj.test(str)) {
        if ("" !== str) {
          const formatted = str.toLowerCase();
          let StringResult = str2;
          if (typeof "" !== "string") {
            const _String2 = String;
            StringResult = String(str2);
          }
          const self = this;
          let text = StringResult;
          map = this.map;
          if (this.map[formatted]) {
            text = `${tmp4}, ${tmp3}`;
          }
          map[formatted] = text;
        }
      }
      const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
      throw typeError;
    }
    delete(str) {
      map = this.map;
      if (typeof str !== "string") {
        const _String = String;
        str = String(str);
      }
      const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
      if (!obj.test(str)) {
        if ("" !== str) {
          delete map[str.toLowerCase(str)];
        }
      }
      const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
      throw typeError;
    }
    get(str) {
      if (typeof str !== "string") {
        const _String = String;
        str = String(str);
      }
      const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
      if (!obj.test(str)) {
        if ("" !== str) {
          const self = this;
          const formatted = str.toLowerCase();
          let tmp2 = null;
          if (this.has(formatted)) {
            tmp2 = self.map[formatted];
          }
          return tmp2;
        }
      }
      const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
      throw typeError;
    }
    has(str) {
      hasOwnProperty = this.map.hasOwnProperty;
      if (typeof str !== "string") {
        const _String = String;
        str = String(str);
      }
      const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
      if (!obj.test(str)) {
        if ("" !== str) {
          return hasOwnProperty(str.toLowerCase());
        }
      }
      const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
      throw typeError;
    }
    set(str, str2) {
      map = this.map;
      if (typeof str !== "string") {
        const _String = String;
        str = String(str);
      }
      const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
      if (!obj.test(str)) {
        if ("" !== str) {
          let StringResult = str2;
          const formatted = str.toLowerCase();
          if (typeof "" !== "string") {
            const _String2 = String;
            StringResult = String(str2);
          }
          map[formatted] = StringResult;
        }
      }
      const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
      throw typeError;
    }
    forEach(call, arg1) {
      const self = this;
      for (const key10005 in this.map) {
        map = self.map;
        if (!map.hasOwnProperty(key10005)) {
          continue;
        } else {
          let tmp = self.map[key10005];
          let callResult = call.call(arg1, tmp, key10005, self);
          continue;
          continue;
        }
        continue;
      }
    }
    keys() {
      const items = [];
      const item = this.forEach((item, index) => {
        items.push(index);
      });
      const obj = {
        next() {
          const arr = items.shift();
          return { done: undefined === arr, value: arr };
        }
      };
      if (closure_3) {
        const _Symbol = Symbol;
        obj[Symbol.iterator] = () => obj;
      }
      return obj;
    }
    values() {
      const items = [];
      const item = this.forEach((item) => {
        items.push(item);
      });
      const obj = {
        next() {
          const arr = items.shift();
          return { done: undefined === arr, value: arr };
        }
      };
      if (closure_3) {
        const _Symbol = Symbol;
        obj[Symbol.iterator] = () => obj;
      }
      return obj;
    }
    entries() {
      let items = [];
      const item = this.forEach((item, index) => {
        items = [index, item];
        items.push(items);
      });
      const obj = {
        next() {
          const arr = items.shift();
          return { done: undefined === arr, value: arr };
        }
      };
      if (closure_3) {
        const _Symbol = Symbol;
        obj[Symbol.iterator] = () => obj;
      }
      return obj;
    }
  }
  function readBlobAsArrayBuffer(data) {
    const fileReader = new FileReader();
    const promise = new Promise((arg0, arg1) => {
      closure_0 = arg0;
      let closure_1 = arg1;
      closure_0.onload = () => {
        closure_0(fileReader.result);
      };
      closure_0.onerror = () => {
        closure_1(fileReader.error);
      };
    });
    const asArrayBuffer = fileReader.readAsArrayBuffer(data);
    return promise;
  }
  class Request {
    constructor(bodyUsed, arg1) {
      const self = this;
      if (this instanceof Request) {
        let _bodyInit;
        const request = arg1 || {};
        const body = request.body;
        if (bodyUsed instanceof tmp) {
          if (bodyUsed.bodyUsed) {
            const _TypeError3 = TypeError;
            const self12 = this;
            const self13 = this;
            const typeError = new TypeError("Already read");
            throw typeError;
          } else {
            ({ url: self.url, credentials: self.credentials } = bodyUsed);
            if (!request.headers) {
              const headers = bodyUsed.headers;
              const obj6 = Object.create(Headers.prototype);
              obj6.map = {};
              if (headers instanceof Headers) {
                const item = headers.forEach(function(item, index) {
                  this.append(index, item);
                }, obj6);
              } else {
                const _Array = Array;
                if (Array.isArray(headers)) {
                  const item1 = headers.forEach(function(item) {
                    if (2 != item.length) {
                      const _TypeError = TypeError;
                      const self2 = this;
                      const self3 = this;
                      const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + item.length);
                      throw typeError;
                    } else {
                      const self = this;
                      this.append(item[0], item[1]);
                    }
                  }, obj6);
                } else if (headers) {
                  const _Object = Object;
                  const ownPropertyNames = Object.getOwnPropertyNames(headers);
                  const item2 = ownPropertyNames.forEach(function(item) {
                    this.append(item, headers[item]);
                  }, obj6);
                }
              }
              self.headers = obj6;
            }
            ({ method: self.method, mode: self.mode, signal: self.signal } = bodyUsed);
            _bodyInit = body;
            const tmp13 = body || null == bodyUsed._bodyInit;
            if (!tmp13) {
              _bodyInit = bodyUsed._bodyInit;
              bodyUsed.bodyUsed = true;
            }
          }
        } else {
          const _String = String;
          self.url = String(bodyUsed);
          _bodyInit = body;
        }
        self.credentials = request.credentials || self.credentials || "same-origin";
        const tmp15 = !request.headers && self.headers;
        if (!tmp15) {
          const headers1 = request.headers;
          const obj7 = Object.create(Headers.prototype);
          obj7.map = {};
          if (headers1 instanceof Headers) {
            const item3 = headers1.forEach(function(item, index) {
              this.append(index, item);
            }, obj7);
          } else {
            const _Array2 = Array;
            if (Array.isArray(headers1)) {
              const item4 = headers1.forEach(function(item) {
                if (2 != item.length) {
                  const _TypeError = TypeError;
                  const self2 = this;
                  const self3 = this;
                  const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + item.length);
                  throw typeError;
                } else {
                  const self = this;
                  this.append(item[0], item[1]);
                }
              }, obj7);
            } else if (headers1) {
              const _Object2 = Object;
              const ownPropertyNames1 = Object.getOwnPropertyNames(headers1);
              const item5 = ownPropertyNames1.forEach(function(item) {
                this.append(item, headers[item]);
              }, obj7);
            }
          }
          self.headers = obj7;
        }
        let str2 = request.method || self.method || "GET";
        const formatted = str2.toUpperCase();
        if (closure_11.indexOf(formatted) > -1) {
          str2 = formatted;
        }
        self.method = str2;
        self.mode = request.mode || self.mode || null;
        let tmp24 = request.signal || self.signal;
        if (!tmp24) {
          let signal;
          if ("AbortController" in _globalThis) {
            const _AbortController = AbortController;
            const self4 = this;
            const self5 = this;
            const abortController = new AbortController();
            signal = abortController.signal;
          }
          tmp24 = signal;
        }
        self.signal = tmp24;
        self.referrer = null;
        if ("GET" === self.method) {
          if (_bodyInit) {
            const _TypeError2 = TypeError;
            const self10 = this;
            const self11 = this;
            const typeError1 = new TypeError("Body not allowed for GET or HEAD requests");
            throw typeError1;
          }
        }
        self._initBody(_bodyInit);
        if ("GET" === self.method) {
          if ("no-store" === request.cache) {
            const obj = /([?&])_=[^&]*/;
            if (obj.test(self.url)) {
              const _Date2 = Date;
              const self8 = this;
              const self9 = this;
              const replace = str9.replace;
              new Date();
              self.url = replace(obj, `$1_=${obj4.getTime()}`);
            } else {
              let str10 = "?";
              const obj2 = /\?/;
              if (obj2.test(self.url)) {
                str10 = "&";
              }
              const _Date = Date;
              const self6 = this;
              const self7 = this;
              new Date();
              self.url = `${self.url}${str10}_=${obj3.getTime()}`;
            }
          }
        }
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError2 = new TypeError("Please use the \"new\" operator, this DOM object constructor cannot be called as a function.");
        throw typeError2;
      }
    }
    clone() {
      const obj = { body: this._bodyInit };
      const obj2 = Object.create(Request.prototype);
      Request(this, obj);
      return obj2;
    }
  }
  function decode(str) {
    const formData = new FormData();
    str = str.trim();
    let parts = str.split("&");
    const item = parts.forEach((item) => {
      const tmp = item;
      if (tmp) {
        const parts = item.split("=");
        const str2 = parts.shift();
        const replaced = str2.replace(/\+/g, " ");
        const _decodeURIComponent = decodeURIComponent;
        const str4 = parts.join("=");
        const replaced1 = str4.replace(/\+/g, " ");
        const append = formData.append;
        const _decodeURIComponent2 = decodeURIComponent;
        const decodeURIComponentResult = decodeURIComponent(replaced);
        append(decodeURIComponentResult, decodeURIComponent(replaced1));
      }
    });
    return formData;
  }
  class Response {
    constructor(arg0, arg1) {
      const self = this;
      if (this instanceof Response) {
        const response = arg1 || {};
        self.type = "default";
        let num2 = 200;
        if (undefined !== response.status) {
          num2 = response.status;
        }
        self.status = num2;
        if (self.status >= 200) {
          if (self.status <= 599) {
            const tmp4 = self.status >= 200 && self.status < 300;
            self.ok = tmp4;
            let str4 = "";
            if (undefined !== response.statusText) {
              str4 = `${response.statusText}`;
            }
            self.statusText = str4;
            const headers = response.headers;
            const obj = Object.create(Headers.prototype);
            obj.map = {};
            if (headers instanceof Headers) {
              const item = headers.forEach(function(item, index) {
                this.append(index, item);
              }, obj);
            } else {
              const _Array = Array;
              if (Array.isArray(headers)) {
                const item1 = headers.forEach(function(item) {
                  if (2 != item.length) {
                    const _TypeError = TypeError;
                    const self2 = this;
                    const self3 = this;
                    const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + item.length);
                    throw typeError;
                  } else {
                    const self = this;
                    this.append(item[0], item[1]);
                  }
                }, obj);
              } else if (headers) {
                const _Object = Object;
                const ownPropertyNames = Object.getOwnPropertyNames(headers);
                const item2 = ownPropertyNames.forEach(function(item) {
                  this.append(item, headers[item]);
                }, obj);
              }
            }
            self.headers = obj;
            const tmp11 = response.url || "";
            self.url = tmp11;
            self._initBody(arg0);
          }
        }
        const _RangeError = RangeError;
        const self4 = this;
        const self5 = this;
        const rangeError = new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
        throw rangeError;
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError("Please use the \"new\" operator, this DOM object constructor cannot be called as a function.");
        throw typeError;
      }
    }
    clone() {
      let obj;
      const response = { status: this.status, statusText: this.statusText, headers: obj, url: this.url };
      const headers = this.headers;
      const _bodyInit = this._bodyInit;
      obj = Object.create(Headers.prototype);
      obj.map = {};
      if (headers instanceof Headers) {
        const item = headers.forEach(function(item, index) {
          this.append(index, item);
        }, obj);
      } else {
        const _Array = Array;
        if (Array.isArray(headers)) {
          const item1 = headers.forEach(function(item) {
            if (2 != item.length) {
              const _TypeError = TypeError;
              const self2 = this;
              const self3 = this;
              const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + item.length);
              throw typeError;
            } else {
              const self = this;
              this.append(item[0], item[1]);
            }
          }, obj);
        } else if (headers) {
          const _Object = Object;
          const ownPropertyNames = Object.getOwnPropertyNames(headers);
          const item2 = ownPropertyNames.forEach(function(item) {
            this.append(item, headers[item]);
          }, obj);
        }
      }
      const obj3 = Object.create(Response.prototype);
      Response(_bodyInit, response);
      return obj3;
    }
    static error() {
      const obj = Object.create(Response.prototype);
      Response(null, { status: 200, statusText: "" });
      obj.ok = false;
      obj.status = 0;
      obj.type = "error";
      return obj;
    }
    static redirect(location, status) {
      let obj;
      if (-1 === closure_15.indexOf(status)) {
        const _RangeError = RangeError;
        const self = this;
        const self2 = this;
        const rangeError = new RangeError("Invalid status code");
        throw rangeError;
      } else {
        const response = { status, headers: obj };
        obj = { location };
        const obj2 = Object.create(Response.prototype);
        Response(null, response);
        return obj2;
      }
    }
  }
  let _globalThis = typeof globalThis !== "undefined";
  if (typeof globalThis !== "undefined") {
    _globalThis = globalThis;
  }
  if (!_globalThis) {
    const _self = self;
    let tmp = typeof self !== "undefined";
    class Headers {
      constructor(headers) {
        const self = this;
        closure_0 = headers;
        this.map = {};
        if (headers instanceof Headers) {
          const item = headers.forEach(function(item, index) {
            this.append(index, item);
          }, self);
        } else {
          const _Array = Array;
          if (Array.isArray(headers)) {
            const item1 = headers.forEach(function(item) {
              if (2 != item.length) {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + item.length);
                throw typeError;
              } else {
                const self = this;
                this.append(item[0], item[1]);
              }
            }, self);
          } else if (headers) {
            const _Object = Object;
            const ownPropertyNames = Object.getOwnPropertyNames(headers);
            const item2 = ownPropertyNames.forEach(function(item) {
              this.append(item, headers[item]);
            }, self);
          }
        }
      }
      append(str, str2) {
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            const formatted = str.toLowerCase();
            let StringResult = str2;
            if (typeof "" !== "string") {
              const _String2 = String;
              StringResult = String(str2);
            }
            const self = this;
            let text = StringResult;
            map = this.map;
            if (this.map[formatted]) {
              text = `${tmp4}, ${tmp3}`;
            }
            map[formatted] = text;
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      delete(str) {
        map = this.map;
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            delete map[str.toLowerCase(str)];
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      get(str) {
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            const self = this;
            const formatted = str.toLowerCase();
            let tmp2 = null;
            if (this.has(formatted)) {
              tmp2 = self.map[formatted];
            }
            return tmp2;
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      has(str) {
        hasOwnProperty = this.map.hasOwnProperty;
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            return hasOwnProperty(str.toLowerCase());
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      set(str, str2) {
        map = this.map;
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            let StringResult = str2;
            const formatted = str.toLowerCase();
            if (typeof "" !== "string") {
              const _String2 = String;
              StringResult = String(str2);
            }
            map[formatted] = StringResult;
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      forEach(call, arg1) {
        const self = this;
        for (const key10005 in this.map) {
          map = self.map;
          if (!map.hasOwnProperty(key10005)) {
            continue;
          } else {
            let tmp = self.map[key10005];
            let callResult = call.call(arg1, tmp, key10005, self);
            continue;
            continue;
          }
          continue;
        }
      }
      keys() {
        const items = [];
        const item = this.forEach((item, index) => {
          items.push(index);
        });
        const obj = {
          next() {
            const arr = items.shift();
            return { done: undefined === arr, value: arr };
          }
        };
        if (closure_3) {
          const _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
      values() {
        const items = [];
        const item = this.forEach((item) => {
          items.push(item);
        });
        const obj = {
          next() {
            const arr = items.shift();
            return { done: undefined === arr, value: arr };
          }
        };
        if (closure_3) {
          const _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
      entries() {
        let items = [];
        const item = this.forEach((item, index) => {
          items = [index, item];
          items.push(items);
        });
        const obj = {
          next() {
            const arr = items.shift();
            return { done: undefined === arr, value: arr };
          }
        };
        if (closure_3) {
          const _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
    }
    _globalThis = tmp;
  }
  if (!_globalThis) {
    let tmp2 = undefined !== global && global;
    _globalThis = tmp2;
  }
  if (!_globalThis) {
    _globalThis = {};
  }
  let closure_2 = "URLSearchParams" in _globalThis;
  let tmp3 = "Symbol" in _globalThis;
  if (tmp3) {
    let _Symbol = Symbol;
    let str = "iterator";
    class Headers {
      constructor(headers) {
        const self = this;
        closure_0 = headers;
        this.map = {};
        if (headers instanceof Headers) {
          const item = headers.forEach(function(item, index) {
            this.append(index, item);
          }, self);
        } else {
          const _Array = Array;
          if (Array.isArray(headers)) {
            const item1 = headers.forEach(function(item) {
              if (2 != item.length) {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + item.length);
                throw typeError;
              } else {
                const self = this;
                this.append(item[0], item[1]);
              }
            }, self);
          } else if (headers) {
            const _Object = Object;
            const ownPropertyNames = Object.getOwnPropertyNames(headers);
            const item2 = ownPropertyNames.forEach(function(item) {
              this.append(item, headers[item]);
            }, self);
          }
        }
      }
      append(str, str2) {
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            const formatted = str.toLowerCase();
            let StringResult = str2;
            if (typeof "" !== "string") {
              const _String2 = String;
              StringResult = String(str2);
            }
            const self = this;
            let text = StringResult;
            map = this.map;
            if (this.map[formatted]) {
              text = `${tmp4}, ${tmp3}`;
            }
            map[formatted] = text;
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      delete(str) {
        map = this.map;
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            delete map[str.toLowerCase(str)];
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      get(str) {
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            const self = this;
            const formatted = str.toLowerCase();
            let tmp2 = null;
            if (this.has(formatted)) {
              tmp2 = self.map[formatted];
            }
            return tmp2;
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      has(str) {
        hasOwnProperty = this.map.hasOwnProperty;
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            return hasOwnProperty(str.toLowerCase());
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      set(str, str2) {
        map = this.map;
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            let StringResult = str2;
            const formatted = str.toLowerCase();
            if (typeof "" !== "string") {
              const _String2 = String;
              StringResult = String(str2);
            }
            map[formatted] = StringResult;
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      forEach(call, arg1) {
        const self = this;
        for (const key10005 in this.map) {
          map = self.map;
          if (!map.hasOwnProperty(key10005)) {
            continue;
          } else {
            let tmp = self.map[key10005];
            let callResult = call.call(arg1, tmp, key10005, self);
            continue;
            continue;
          }
          continue;
        }
      }
      keys() {
        const items = [];
        const item = this.forEach((item, index) => {
          items.push(index);
        });
        const obj = {
          next() {
            const arr = items.shift();
            return { done: undefined === arr, value: arr };
          }
        };
        if (closure_3) {
          const _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
      values() {
        const items = [];
        const item = this.forEach((item) => {
          items.push(item);
        });
        const obj = {
          next() {
            const arr = items.shift();
            return { done: undefined === arr, value: arr };
          }
        };
        if (closure_3) {
          const _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
      entries() {
        let items = [];
        const item = this.forEach((item, index) => {
          items = [index, item];
          items.push(items);
        });
        const obj = {
          next() {
            const arr = items.shift();
            return { done: undefined === arr, value: arr };
          }
        };
        if (closure_3) {
          const _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
    }
  }
  let closure_3 = tmp3;
  let tmp4 = "FileReader" in _globalThis;
  if (tmp4) {
    let str2 = "Blob";
    tmp4 = "Blob" in _globalThis;
  }
  if (tmp4) {
    let num = 0;
    tmp4 = (function() {
      try {
        const _Blob = Blob;
        const self = this;
        const blob = new Blob();
        return true;
      } catch (err) {
        return false;
      }
    })();
  }
  let closure_4 = tmp4;
  let closure_5 = "FormData" in _globalThis;
  let tmp5 = "ArrayBuffer" in _globalThis;
  let closure_6 = tmp5;
  if (closure_6) {
    let closure_7 = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"];
    let _ArrayBuffer = ArrayBuffer;
    class Headers {
      constructor(headers) {
        const self = this;
        closure_0 = headers;
        this.map = {};
        if (headers instanceof Headers) {
          const item = headers.forEach(function(item, index) {
            this.append(index, item);
          }, self);
        } else {
          const _Array = Array;
          if (Array.isArray(headers)) {
            const item1 = headers.forEach(function(item) {
              if (2 != item.length) {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + item.length);
                throw typeError;
              } else {
                const self = this;
                this.append(item[0], item[1]);
              }
            }, self);
          } else if (headers) {
            const _Object = Object;
            const ownPropertyNames = Object.getOwnPropertyNames(headers);
            const item2 = ownPropertyNames.forEach(function(item) {
              this.append(item, headers[item]);
            }, self);
          }
        }
      }
      append(str, str2) {
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            const formatted = str.toLowerCase();
            let StringResult = str2;
            if (typeof "" !== "string") {
              const _String2 = String;
              StringResult = String(str2);
            }
            const self = this;
            let text = StringResult;
            map = this.map;
            if (this.map[formatted]) {
              text = `${tmp4}, ${tmp3}`;
            }
            map[formatted] = text;
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      delete(str) {
        map = this.map;
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            delete map[str.toLowerCase(str)];
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      get(str) {
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            const self = this;
            const formatted = str.toLowerCase();
            let tmp2 = null;
            if (this.has(formatted)) {
              tmp2 = self.map[formatted];
            }
            return tmp2;
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      has(str) {
        hasOwnProperty = this.map.hasOwnProperty;
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            return hasOwnProperty(str.toLowerCase());
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      set(str, str2) {
        map = this.map;
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            let StringResult = str2;
            const formatted = str.toLowerCase();
            if (typeof "" !== "string") {
              const _String2 = String;
              StringResult = String(str2);
            }
            map[formatted] = StringResult;
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      forEach(call, arg1) {
        const self = this;
        for (const key10005 in this.map) {
          map = self.map;
          if (!map.hasOwnProperty(key10005)) {
            continue;
          } else {
            let tmp = self.map[key10005];
            let callResult = call.call(arg1, tmp, key10005, self);
            continue;
            continue;
          }
          continue;
        }
      }
      keys() {
        const items = [];
        const item = this.forEach((item, index) => {
          items.push(index);
        });
        const obj = {
          next() {
            const arr = items.shift();
            return { done: undefined === arr, value: arr };
          }
        };
        if (closure_3) {
          const _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
      values() {
        const items = [];
        const item = this.forEach((item) => {
          items.push(item);
        });
        const obj = {
          next() {
            const arr = items.shift();
            return { done: undefined === arr, value: arr };
          }
        };
        if (closure_3) {
          const _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
      entries() {
        let items = [];
        const item = this.forEach((item, index) => {
          items = [index, item];
          items.push(items);
        });
        const obj = {
          next() {
            const arr = items.shift();
            return { done: undefined === arr, value: arr };
          }
        };
        if (closure_3) {
          const _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
    }
  }
  if (tmp3) {
    const _Symbol2 = Symbol;
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }
  class Body {
    constructor() {
      const obj = {
        bodyUsed: false,
        _initBody: function(_bodyInit) {
          let tmp;
          const self = this;
          this.bodyUsed = this.bodyUsed;
          this._bodyInit = _bodyInit;
          if (_bodyInit) {
            if (typeof _bodyInit === "string") {
              self._bodyText = _bodyInit;
              tmp = _bodyInit;
            } else {
              if (closure_1_4) {
                const _Blob = Blob;
                if (prototype.isPrototypeOf(_bodyInit)) {
                  self._bodyBlob = _bodyInit;
                  tmp = _bodyInit;
                }
              }
              if (closure_1_5) {
                const _FormData = FormData;
                const prototype2 = FormData.prototype;
                if (prototype2.isPrototypeOf(_bodyInit)) {
                  self._bodyFormData = _bodyInit;
                  tmp = _bodyInit;
                }
              }
              if (closure_1_2) {
                const _URLSearchParams = URLSearchParams;
                const prototype3 = URLSearchParams.prototype;
                if (prototype3.isPrototypeOf(_bodyInit)) {
                  self._bodyText = _bodyInit.toString();
                  tmp = _bodyInit;
                }
              }
              if (closure_1_6) {
                if (closure_1_4) {
                  let isPrototypeOfResult = _bodyInit;
                  if (isPrototypeOfResult) {
                    const _DataView = DataView;
                    const prototype4 = DataView.prototype;
                    isPrototypeOfResult = prototype4.isPrototypeOf(_bodyInit);
                  }
                  if (isPrototypeOfResult) {
                    let buffer2;
                    const buffer1 = _bodyInit.buffer;
                    if (buffer1.slice) {
                      buffer2 = buffer1.slice(0);
                    } else {
                      const _Uint8Array3 = Uint8Array;
                      const self6 = this;
                      const self7 = this;
                      const uint8Array = new Uint8Array(buffer1.byteLength);
                      const _Uint8Array4 = Uint8Array;
                      const self8 = this;
                      const self9 = this;
                      set2 = uint8Array.set;
                      const uint8Array1 = new Uint8Array(buffer1);
                      set2(uint8Array1);
                      buffer2 = uint8Array.buffer;
                    }
                    self._bodyArrayBuffer = buffer2;
                    const _Blob2 = Blob;
                    const items = [self._bodyArrayBuffer];
                    const self10 = this;
                    const self11 = this;
                    const blob = new Blob(items);
                    self._bodyInit = blob;
                    tmp = _bodyInit;
                  }
                }
              }
              if (closure_1_6) {
                let buffer;
                const _ArrayBuffer = ArrayBuffer;
                const prototype5 = ArrayBuffer.prototype;
                if (_bodyInit.slice) {
                  buffer = _bodyInit.slice(0);
                } else {
                  const _Uint8Array = Uint8Array;
                  const self2 = this;
                  const self3 = this;
                  const uint8Array2 = new Uint8Array(_bodyInit.byteLength);
                  const _Uint8Array2 = Uint8Array;
                  const self4 = this;
                  const self5 = this;
                  set = uint8Array2.set;
                  const uint8Array3 = new Uint8Array(_bodyInit);
                  const result = set(uint8Array3);
                  buffer = uint8Array2.buffer;
                }
                self._bodyArrayBuffer = buffer;
                tmp = _bodyInit;
              }
              const _Object = Object;
              const callResult = toString.call(_bodyInit);
              self._bodyText = callResult;
              tmp = callResult;
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
              const result1 = headers4.set("content-type", "text/plain;charset=UTF-8");
            } else {
              if (self._bodyBlob) {
                if (self._bodyBlob.type) {
                  const headers3 = self.headers;
                  const result2 = headers3.set("content-type", self._bodyBlob.type);
                }
              }
              let isPrototypeOfResult1 = closure_1_2;
              if (isPrototypeOfResult1) {
                const _URLSearchParams2 = URLSearchParams;
                const prototype6 = URLSearchParams.prototype;
                isPrototypeOfResult1 = prototype6.isPrototypeOf(tmp);
              }
              if (isPrototypeOfResult1) {
                const headers2 = self.headers;
                const result3 = headers2.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          }
        },
        arrayBuffer: function() {
          const self = this;
          if (this._bodyArrayBuffer) {
            let tmp6;
            if (!self._noBody) {
              let rejectResult;
              if (self.bodyUsed) {
                const _TypeError = TypeError;
                const self4 = this;
                const self5 = this;
                const typeError = new TypeError("Already read");
                rejectResult = reject(typeError);
              } else {
                self.bodyUsed = true;
              }
              tmp6 = rejectResult;
            }
            if (!tmp6) {
              let resolveResult;
              const _ArrayBuffer = ArrayBuffer;
              const _bodyArrayBuffer = self._bodyArrayBuffer;
              if (ArrayBuffer.isView(self._bodyArrayBuffer)) {
                const buffer = _bodyArrayBuffer.buffer;
                resolveResult = resolve(buffer.slice(self._bodyArrayBuffer.byteOffset, self._bodyArrayBuffer.byteOffset + self._bodyArrayBuffer.byteLength));
              } else {
                resolveResult = resolve(_bodyArrayBuffer);
              }
              tmp6 = resolveResult;
            }
            return tmp6;
          } else if (closure_1_4) {
            const blobResult = self.blob();
            return blobResult.then(readBlobAsArrayBuffer);
          } else {
            const _Error = Error;
            const self2 = this;
            const self3 = this;
            const error = new Error("could not read as ArrayBuffer");
            throw error;
          }
        },
        text: function() {
          let length;
          const self = this;
          let tmp;
          if (!this._noBody) {
            let rejectResult;
            if (self.bodyUsed) {
              const _TypeError = TypeError;
              const self2 = this;
              const self3 = this;
              const typeError = new TypeError("Already read");
              rejectResult = reject(typeError);
            } else {
              self.bodyUsed = true;
            }
            tmp = rejectResult;
          }
          if (tmp) {
            return tmp;
          } else if (self._bodyBlob) {
            const _bodyBlob = self._bodyBlob;
            const _FileReader = FileReader;
            const self10 = this;
            const self11 = this;
            const fileReader = new FileReader();
            const self12 = this;
            const self13 = this;
            const obj3 = /charset=([A-Za-z0-9_-]+)/;
            const promise = new Promise((arg0, arg1) => {
              closure_0 = arg0;
              let closure_1 = arg1;
              closure_0.onload = () => {
                closure_0(fileReader.result);
              };
              closure_0.onerror = () => {
                closure_1(fileReader.error);
              };
            });
            const match = obj3.exec(_bodyBlob.type);
            let str4 = "utf-8";
            if (match) {
              str4 = match[1];
            }
            const asText = fileReader.readAsText(_bodyBlob, str4);
            return promise;
          } else if (self._bodyArrayBuffer) {
            const _Uint8Array = Uint8Array;
            const self6 = this;
            const self7 = this;
            const uint8Array = new Uint8Array(self._bodyArrayBuffer);
            const _Array = Array;
            const self8 = this;
            const self9 = this;
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
            return resolve(array.join(""));
          } else if (self._bodyFormData) {
            const _Error = Error;
            const self4 = this;
            const self5 = this;
            const error = new Error("could not read FormData body as text");
            throw error;
          } else {
            return Promise.resolve(self._bodyText);
          }
        },
        json: function() {
          const textResult = this.text();
          return textResult.then(JSON.parse);
        }
      };
      if (closure_4) {
        obj.blob = function() {
          const self = this;
          let tmp;
          if (!this._noBody) {
            let rejectResult;
            if (self.bodyUsed) {
              const _TypeError = TypeError;
              const self2 = this;
              const self3 = this;
              const typeError = new TypeError("Already read");
              rejectResult = reject(typeError);
            } else {
              self.bodyUsed = true;
            }
            tmp = rejectResult;
          }
          if (tmp) {
            return tmp;
          } else if (self._bodyBlob) {
            return Promise.resolve(self._bodyBlob);
          } else if (self._bodyArrayBuffer) {
            const _Blob2 = Blob;
            const items = [self._bodyArrayBuffer];
            const self8 = this;
            const self9 = this;
            const resolve2 = Promise.resolve;
            const blob = new Blob(items);
            return resolve2(blob);
          } else if (self._bodyFormData) {
            const _Error = Error;
            const self6 = this;
            const self7 = this;
            const error = new Error("could not read FormData body as blob");
            throw error;
          } else {
            const _Blob = Blob;
            const items1 = [self._bodyText];
            const self4 = this;
            const self5 = this;
            const blob1 = new Blob(items1);
            return resolve(blob1);
          }
        };
      }
      if (closure_5) {
        obj.formData = function() {
          const textResult = this.text();
          return textResult.then(decode);
        };
      }
      return obj;
    }
  }
  let closure_11 = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
  let callResult = Body.call(Request.prototype);
  Body.call(Response.prototype);
  let closure_15 = [301, 302, 303, 307, 308];
  DOMException.DOMException = _globalThis.DOMException;
  try {
    let self = this;
    let dOMException = new DOMException.DOMException();
  } catch (err) {
    DOMException.DOMException = (message, name) => {
      const error = { message, name, stack: Error(message).stack };
    };
    let _Object = Object;
    class Headers {
      constructor(headers) {
        const self = this;
        closure_0 = headers;
        this.map = {};
        if (headers instanceof Headers) {
          const item = headers.forEach(function(item, index) {
            this.append(index, item);
          }, self);
        } else {
          const _Array = Array;
          if (Array.isArray(headers)) {
            const item1 = headers.forEach(function(item) {
              if (2 != item.length) {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + item.length);
                throw typeError;
              } else {
                const self = this;
                this.append(item[0], item[1]);
              }
            }, self);
          } else if (headers) {
            const _Object = Object;
            const ownPropertyNames = Object.getOwnPropertyNames(headers);
            const item2 = ownPropertyNames.forEach(function(item) {
              this.append(item, headers[item]);
            }, self);
          }
        }
      }
      append(str, str2) {
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            const formatted = str.toLowerCase();
            let StringResult = str2;
            if (typeof "" !== "string") {
              const _String2 = String;
              StringResult = String(str2);
            }
            const self = this;
            let text = StringResult;
            map = this.map;
            if (this.map[formatted]) {
              text = `${tmp4}, ${tmp3}`;
            }
            map[formatted] = text;
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      delete(str) {
        map = this.map;
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            delete map[str.toLowerCase(str)];
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      get(str) {
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            const self = this;
            const formatted = str.toLowerCase();
            let tmp2 = null;
            if (this.has(formatted)) {
              tmp2 = self.map[formatted];
            }
            return tmp2;
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      has(str) {
        hasOwnProperty = this.map.hasOwnProperty;
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            return hasOwnProperty(str.toLowerCase());
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      set(str, str2) {
        map = this.map;
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            let StringResult = str2;
            const formatted = str.toLowerCase();
            if (typeof "" !== "string") {
              const _String2 = String;
              StringResult = String(str2);
            }
            map[formatted] = StringResult;
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      forEach(call, arg1) {
        const self = this;
        for (const key10005 in this.map) {
          map = self.map;
          if (!map.hasOwnProperty(key10005)) {
            continue;
          } else {
            let tmp = self.map[key10005];
            let callResult = call.call(arg1, tmp, key10005, self);
            continue;
            continue;
          }
          continue;
        }
      }
      keys() {
        const items = [];
        const item = this.forEach((item, index) => {
          items.push(index);
        });
        const obj = {
          next() {
            const arr = items.shift();
            return { done: undefined === arr, value: arr };
          }
        };
        if (closure_3) {
          const _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
      values() {
        const items = [];
        const item = this.forEach((item) => {
          items.push(item);
        });
        const obj = {
          next() {
            const arr = items.shift();
            return { done: undefined === arr, value: arr };
          }
        };
        if (closure_3) {
          const _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
      entries() {
        let items = [];
        const item = this.forEach((item, index) => {
          items = [index, item];
          items.push(items);
        });
        const obj = {
          next() {
            const arr = items.shift();
            return { done: undefined === arr, value: arr };
          }
        };
        if (closure_3) {
          const _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
    }
    DOMException.DOMException.prototype = Object.create(Error.prototype);
    DOMException.DOMException.prototype.constructor = DOMException.DOMException;
  }
  function fetch(arg0, arg1) {
    let DOMException = arg0;
    let _Headers = arg1;
    const promise = new Promise(function(arg0, fn) {
      let config;
      function fixUrl(url) {
        try {
          let href = url;
          if ("" === url) {
            href = url;
            if (config.location.href) {
              href = config.location.href;
            }
          }
          return href;
        } catch (err) {
          return url;
        }
      }
      DOMException = arg0;
      _Headers = fn;
      function abortXhr() {
        xMLHttpRequest.abort();
      }
      let request = Object.create(Request.prototype);
      Request(DOMException, _Headers);
      if (request.signal) {
        if (request.signal.aborted) {
          let self = this;
          let self2 = this;
          let dOMException = new DOMException.DOMException("Aborted", "AbortError");
          return fn(dOMException);
        }
      }
      const xMLHttpRequest = new XMLHttpRequest();
      xMLHttpRequest.onload = () => {
        let obj2;
        let responseURL;
        let obj = { statusText: xMLHttpRequest.statusText, headers: obj2, url: responseURL };
        let str = xMLHttpRequest.getAllResponseHeaders() || "";
        obj2 = Object.create(Headers.prototype);
        let c0;
        obj2.map = {};
        if (undefined instanceof Headers) {
          const item = undefined.forEach(function(item, index) {
            this.append(index, item);
          }, obj2);
        } else {
          const tmp3 = globalThis;
          const _Array = Array;
          if (Array.isArray(undefined)) {
            const item1 = undefined.forEach(function(item) {
              if (2 != item.length) {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + item.length);
                throw typeError;
              } else {
                const self = this;
                this.append(item[0], item[1]);
              }
            }, obj2);
          }
        }
        const str2 = str.replace(/\r?\n[\t ]+/g, " ");
        let parts = str2.split("\r");
        const mapped = parts.map((arr) => {
          let substr = arr;
          if (0 === arr.indexOf("\n")) {
            substr = arr.substr(1, arr.length);
          }
          return substr;
        });
        const item2 = mapped.forEach((item) => {
          const parts = item.split(":");
          const str = parts.shift();
          const trimmed = str.trim();
          if (trimmed) {
            const joined = parts.join(":");
            try {
              obj2.append(trimmed, tmp3);
            } catch (tmp6) {
              const _console = console;
              console.warn("Response " + tmp6.message);
            }
          }
        });
        const url = request.url;
        if (0 !== url.indexOf("file://")) {
          obj.status = xMLHttpRequest.status;
        } else {
          obj.status = 200;
        }
        if ("responseURL" in xMLHttpRequest) {
          responseURL = xMLHttpRequest.responseURL;
        } else {
          const headers = obj.headers;
          responseURL = headers.get("X-Request-URL");
        }
        request = "response" in xMLHttpRequest ? xMLHttpRequest.response : xMLHttpRequest.responseText;
        const timerId = setTimeout(() => {
          obj = Object.create(Response.prototype);
          Response(closure_2, obj);
          obj2(obj);
        }, 0);
      };
      xMLHttpRequest.onerror = () => {
        const timerId = setTimeout(() => {
          const typeError = new TypeError("Network request failed");
          config(typeError);
        }, 0);
      };
      xMLHttpRequest.ontimeout = () => {
        const timerId = setTimeout(() => {
          const typeError = new TypeError("Network request timed out");
          config(typeError);
        }, 0);
      };
      xMLHttpRequest.onabort = () => {
        const timerId = setTimeout(() => {
          const dOMException = new DOMException.DOMException("Aborted", "AbortError");
          config(dOMException);
        }, 0);
      };
      xMLHttpRequest.open(request.method, fixUrl(request.url), true);
      if ("include" === request.credentials) {
        xMLHttpRequest.withCredentials = true;
      } else {
        let str = "omit";
        if ("omit" === request.credentials) {
          xMLHttpRequest.withCredentials = false;
        }
      }
      if ("responseType" in xMLHttpRequest) {
        if (closure_1_4) {
          xMLHttpRequest.responseType = "blob";
        } else if (closure_1_6) {
          let str2 = "arraybuffer";
          xMLHttpRequest.responseType = "arraybuffer";
        }
      }
      if (_Headers) {
        if (typeof _Headers.headers === "object") {
          if (!(_Headers.headers instanceof Headers)) {
            closure_5 = [];
            const _Object = Object;
            const ownPropertyNames = Object.getOwnPropertyNames(tmp.headers);
            let item = ownPropertyNames.forEach((item) => {
              let str = item;
              const push = closure_5.push;
              if (typeof item !== "string") {
                const _String = String;
                str = String(item);
              }
              const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
              if (!obj.test(str)) {
                if ("" !== str) {
                  push(str.toLowerCase());
                  let StringResult = tmp5;
                  const setRequestHeader = xMLHttpRequest.setRequestHeader;
                  if (typeof config.headers[item] !== "string") {
                    const _String2 = String;
                    StringResult = String(tmp5);
                  }
                  setRequestHeader(item, StringResult);
                }
              }
              const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
              throw typeError;
            });
            let headers = request.headers;
            let item1 = headers.forEach((item, index) => {
              if (-1 === closure_5.indexOf(index)) {
                xMLHttpRequest.setRequestHeader(index, item);
              }
            });
          }
          if (request.signal) {
            let signal = request.signal;
            const listener = signal.addEventListener("abort", abortXhr);
            xMLHttpRequest.onreadystatechange = () => {
              if (4 === xMLHttpRequest.readyState) {
                const signal = request.signal;
                const removed = signal.removeEventListener("abort", abortXhr);
              }
            };
          }
          let _bodyInit = null;
          const send = xMLHttpRequest.send;
          if (undefined !== request._bodyInit) {
            _bodyInit = request._bodyInit;
          }
          send(_bodyInit);
        }
      }
      const headers1 = request.headers;
      let item2 = headers1.forEach((item, index) => {
        xMLHttpRequest.setRequestHeader(index, item);
      });
    });
    return promise;
  }
  fetch.polyfill = true;
  if (!_globalThis.fetch) {
    _globalThis.fetch = fetch;
    _globalThis.Headers = Headers;
    class Headers {
      constructor(headers) {
        const self = this;
        closure_0 = headers;
        this.map = {};
        if (headers instanceof Headers) {
          const item = headers.forEach(function(item, index) {
            this.append(index, item);
          }, self);
        } else {
          const _Array = Array;
          if (Array.isArray(headers)) {
            const item1 = headers.forEach(function(item) {
              if (2 != item.length) {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + item.length);
                throw typeError;
              } else {
                const self = this;
                this.append(item[0], item[1]);
              }
            }, self);
          } else if (headers) {
            const _Object = Object;
            const ownPropertyNames = Object.getOwnPropertyNames(headers);
            const item2 = ownPropertyNames.forEach(function(item) {
              this.append(item, headers[item]);
            }, self);
          }
        }
      }
      append(str, str2) {
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            const formatted = str.toLowerCase();
            let StringResult = str2;
            if (typeof "" !== "string") {
              const _String2 = String;
              StringResult = String(str2);
            }
            const self = this;
            let text = StringResult;
            map = this.map;
            if (this.map[formatted]) {
              text = `${tmp4}, ${tmp3}`;
            }
            map[formatted] = text;
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      delete(str) {
        map = this.map;
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            delete map[str.toLowerCase(str)];
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      get(str) {
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            const self = this;
            const formatted = str.toLowerCase();
            let tmp2 = null;
            if (this.has(formatted)) {
              tmp2 = self.map[formatted];
            }
            return tmp2;
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      has(str) {
        hasOwnProperty = this.map.hasOwnProperty;
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            return hasOwnProperty(str.toLowerCase());
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      set(str, str2) {
        map = this.map;
        if (typeof str !== "string") {
          const _String = String;
          str = String(str);
        }
        const obj = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
        if (!obj.test(str)) {
          if ("" !== str) {
            let StringResult = str2;
            const formatted = str.toLowerCase();
            if (typeof "" !== "string") {
              const _String2 = String;
              StringResult = String(str2);
            }
            map[formatted] = StringResult;
          }
        }
        const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
        throw typeError;
      }
      forEach(call, arg1) {
        const self = this;
        for (const key10005 in this.map) {
          map = self.map;
          if (!map.hasOwnProperty(key10005)) {
            continue;
          } else {
            let tmp = self.map[key10005];
            let callResult = call.call(arg1, tmp, key10005, self);
            continue;
            continue;
          }
          continue;
        }
      }
      keys() {
        const items = [];
        const item = this.forEach((item, index) => {
          items.push(index);
        });
        const obj = {
          next() {
            const arr = items.shift();
            return { done: undefined === arr, value: arr };
          }
        };
        if (closure_3) {
          const _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
      values() {
        const items = [];
        const item = this.forEach((item) => {
          items.push(item);
        });
        const obj = {
          next() {
            const arr = items.shift();
            return { done: undefined === arr, value: arr };
          }
        };
        if (closure_3) {
          const _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
      entries() {
        let items = [];
        const item = this.forEach((item, index) => {
          items = [index, item];
          items.push(items);
        });
        const obj = {
          next() {
            const arr = items.shift();
            return { done: undefined === arr, value: arr };
          }
        };
        if (closure_3) {
          const _Symbol = Symbol;
          obj[Symbol.iterator] = () => obj;
        }
        return obj;
      }
    }
    _globalThis.Response = Response;
  }
  DOMException.Headers = Headers;
  DOMException.Request = Request;
  DOMException.Response = Response;
  DOMException.fetch = fetch;
};
if (typeof exports === "object") {
  let tmp4 = module;
  if (undefined !== module) {
    fn(exports);
  }
}
if (typeof globalThis.define === "function") {
  const define2 = globalThis.define;
  if (globalThis.define.amd) {
    globalThis.define(["exports"], fn);
  }
}
let obj = {};
this.WHATWGFetch = obj;
fn(obj);