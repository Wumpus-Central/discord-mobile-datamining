// === Module 14371: ? ===

// Module 14371
import _mod14372 from "module_14372" /* 14372 */;
import URLImpl from "URLImpl" /* 14373 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const exports = {
  _mixedIntoPredicates: [],
  is(arg0) {
    if (arg0) {
      if (obj.hasOwn(arg0, _mod14372.implSymbol)) {
        if (arg0[tmp(undefined, 14372).implSymbol] instanceof tmp(14373).implementation) {
          return true;
        }
      }
      const _mixedIntoPredicates = module.exports._mixedIntoPredicates;
      for (const item10025 of _mixedIntoPredicates) {
        if (item10025(arg0)) {
          obj2.return();
          let flag = true;
          return true;
        }
      }
      obj = _mod14372;
    }
    return false;
  },
  isImpl(arg0) {
    if (arg0) {
      if (arg0 instanceof URLImpl.implementation) {
        return true;
      } else {
        const _mixedIntoPredicates = module.exports._mixedIntoPredicates;
        for (const item10018 of _mixedIntoPredicates) {
          if (item10018(tmpResult.wrapperForImpl(arg0))) {
            obj2.return();
            let flag = true;
            return true;
          }
        }
        const tmpResult = tmp(14372);
      }
      tmp = require;
    }
    return false;
  },
  convert(arg0) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let str = obj.context;
    if (str === undefined) {
      str = "The provided value";
    }
    const _exports = module.exports;
    if (_exports.is(arg0)) {
      return _mod14372.implForWrapper(arg0);
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("" + str + " is not of type 'URL'.");
      throw typeError;
    }
  },
  create(arg0, arg1, arg2) {
    if (undefined === arg0[_mod14372.ctorRegistrySymbol]) {
      const _Error2 = Error;
      const error = new Error("Internal error: invalid global object");
      throw error;
    } else {
      const _URL = arg0[_mod14372.ctorRegistrySymbol].URL;
      if (undefined === _URL) {
        const _Error = Error;
        const error1 = new Error("Internal error: constructor URL is not installed on the passed global object");
        throw error1;
      } else {
        const _Object = Object;
        return obj.setup(Object.create(_URL.prototype), arg0, arg1, arg2);
      }
    }
  },
  createImpl(arg0, arg1, arg2) {
    obj.create(arg0, arg1, arg2);
    obj = _mod14372;
    return obj.implForWrapper(obj);
  },
  _internalSetup(arg0) {

  },
  setup(wrapper, arg1) {
    let items = arg2;
    if (arg2 === undefined) {
      items = [];
    }
    let obj = arg3;
    if (arg3 === undefined) {
      obj = {};
    }
    obj.wrapper = wrapper;
    obj._internalSetup(wrapper);
    obj = { value: null, configurable: true };
    const implementation = new URLImpl.implementation(arg1, items, obj);
    obj.value = implementation;
    Object.defineProperty(wrapper, _mod14372.implSymbol, obj);
    wrapper[_mod14372.implSymbol][_mod14372.wrapperSymbol] = wrapper;
    if (URLImpl.init) {
      tmp2(14373).init(wrapper[tmp2(undefined, 14372).implSymbol], obj);
      const tmp2Result = tmp2(14373);
    }
    return wrapper;
  },
  install(arg0) {
    const URL = arg0;
    class URL {
      constructor(arg0) {
        tmp = closure_3(this, URL);
        if (arguments.length < 1) {
          tmp7 = globalThis;
          _TypeError = TypeError;
          str = "Failed to construct 'URL': 1 argument required, but only ";
          tmp8 = new.target;
          str2 = " present.";
          tmp9 = new.target;
          typeError = new TypeError("Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.");
          tmp11 = typeError;
          throw typeError;
        } else {
          items = [];
          num = 0;
          tmp12 = closure_0;
          tmp13 = c2;
          obj2 = closure_0(c2[4]);
          arr = items.push(obj2.USVString(arguments[0], { context: "Failed to construct 'URL': parameter 1" }));
          tmp15 = arguments[1];
          USVStringResult = tmp15;
          if (undefined !== tmp15) {
            tmp12Result = tmp12(tmp13[4]);
            USVStringResult = tmp12Result.USVString(tmp15, { context: "Failed to construct 'URL': parameter 2" });
          }
          arr1 = items.push(USVStringResult);
          tmp4 = hasOwnProperty;
          tmp5 = globalThis;
          _Object = Object;
          tmp6 = closure_0;
          return hasOwnProperty.setup(Object.create(this.constructor.prototype), closure_0, items);
        }
      }
    }
    const entry = {
      key: "toJSON",
      value: function toJSON() {
        const self = this;
        if (this) {
          _exports = module.exports;
          if (_exports.is(self)) {
            return self[URL(undefined, 14372).implSymbol].toJSON();
          }
        }
        const typeError = new TypeError("Illegal invocation");
        throw typeError;
      }
    };
    let items = [
      entry,
      {
        key: "href",
        get() {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 14372).implSymbol].href;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              const obj = URL(14380);
              self[URL(undefined, 14372).implSymbol].href = URL(14380).USVString(arg0, { context: "Failed to set the 'href' property on 'URL': The provided value" });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      },
      {
        key: "toString",
        value: function toString() {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 14372).implSymbol].href;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      },
      {
        key: "origin",
        get() {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 14372).implSymbol].origin;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      },
      {
        key: "protocol",
        get() {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 14372).implSymbol].protocol;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              const obj = URL(14380);
              self[URL(undefined, 14372).implSymbol].protocol = URL(14380).USVString(arg0, { context: "Failed to set the 'protocol' property on 'URL': The provided value" });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      },
      {
        key: "username",
        get() {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 14372).implSymbol].username;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              const obj = URL(14380);
              self[URL(undefined, 14372).implSymbol].username = URL(14380).USVString(arg0, { context: "Failed to set the 'username' property on 'URL': The provided value" });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      },
      {
        key: "password",
        get() {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 14372).implSymbol].password;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              const obj = URL(14380);
              self[URL(undefined, 14372).implSymbol].password = URL(14380).USVString(arg0, { context: "Failed to set the 'password' property on 'URL': The provided value" });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      },
      {
        key: "host",
        get() {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 14372).implSymbol].host;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              const obj = URL(14380);
              self[URL(undefined, 14372).implSymbol].host = URL(14380).USVString(arg0, { context: "Failed to set the 'host' property on 'URL': The provided value" });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      },
      {
        key: "hostname",
        get() {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 14372).implSymbol].hostname;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              const obj = URL(14380);
              self[URL(undefined, 14372).implSymbol].hostname = URL(14380).USVString(arg0, { context: "Failed to set the 'hostname' property on 'URL': The provided value" });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      },
      {
        key: "port",
        get() {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 14372).implSymbol].port;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              const obj = URL(14380);
              self[URL(undefined, 14372).implSymbol].port = URL(14380).USVString(arg0, { context: "Failed to set the 'port' property on 'URL': The provided value" });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      },
      {
        key: "pathname",
        get() {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 14372).implSymbol].pathname;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              const obj = URL(14380);
              self[URL(undefined, 14372).implSymbol].pathname = URL(14380).USVString(arg0, { context: "Failed to set the 'pathname' property on 'URL': The provided value" });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      },
      {
        key: "search",
        get() {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 14372).implSymbol].search;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              const obj = URL(14380);
              self[URL(undefined, 14372).implSymbol].search = URL(14380).USVString(arg0, { context: "Failed to set the 'search' property on 'URL': The provided value" });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      },
      {
        key: "searchParams",
        get() {
          const self = this;
          if (this) {
            _exports = _exports.exports;
            if (_exports.is(self)) {
              return self(14372).getSameObject(self, "searchParams", () => URL(14372).tryWrapperForImpl(self[URL(undefined, 14372).implSymbol].searchParams));
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      },
      {
        key: "hash",
        get() {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 14372).implSymbol].hash;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            _exports = module.exports;
            if (_exports.is(self)) {
              const obj = URL(14380);
              self[URL(undefined, 14372).implSymbol].hash = URL(14380).USVString(arg0, { context: "Failed to set the 'hash' property on 'URL': The provided value" });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      }
    ];
    const tmp = _createClass(URL, items);
    const user = { toJSON: { enumerable: true }, href: { enumerable: true }, toString: { enumerable: true }, origin: { enumerable: true }, protocol: { enumerable: true }, username: { enumerable: true }, password: { enumerable: true }, host: { enumerable: true }, hostname: { enumerable: true }, port: { enumerable: true }, pathname: { enumerable: true }, search: { enumerable: true }, searchParams: { enumerable: true }, hash: { enumerable: true } };
    user[Symbol.toStringTag] = { value: "URL", configurable: true };
    Object.defineProperties(tmp.prototype, user);
    if (undefined === arg0[URL(undefined, 14372).ctorRegistrySymbol]) {
      let _Object = Object;
      const ctorRegistrySymbol = tmp3(14372).ctorRegistrySymbol;
      class URL {
        constructor(arg0) {
          tmp = closure_3(this, URL);
          if (arguments.length < 1) {
            tmp7 = globalThis;
            _TypeError = TypeError;
            str = "Failed to construct 'URL': 1 argument required, but only ";
            tmp8 = new.target;
            str2 = " present.";
            tmp9 = new.target;
            typeError = new TypeError("Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.");
            tmp11 = typeError;
            throw typeError;
          } else {
            items = [];
            num = 0;
            tmp12 = closure_0;
            tmp13 = c2;
            obj2 = closure_0(c2[4]);
            arr = items.push(obj2.USVString(arguments[0], { context: "Failed to construct 'URL': parameter 1" }));
            tmp15 = arguments[1];
            USVStringResult = tmp15;
            if (undefined !== tmp15) {
              tmp12Result = tmp12(tmp13[4]);
              USVStringResult = tmp12Result.USVString(tmp15, { context: "Failed to construct 'URL': parameter 2" });
            }
            arr1 = items.push(USVStringResult);
            tmp4 = hasOwnProperty;
            tmp5 = globalThis;
            _Object = Object;
            tmp6 = closure_0;
            return hasOwnProperty.setup(Object.create(this.constructor.prototype), closure_0, items);
          }
        }
      }
    }
    arg0[URL(undefined, 14372).ctorRegistrySymbol].URL = tmp;
    Object.defineProperty(arg0, "URL", { configurable: true, writable: true, value: tmp });
  }
};

export default exports;