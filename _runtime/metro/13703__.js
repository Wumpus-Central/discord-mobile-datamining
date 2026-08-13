// _runtime/metro/13703__.js
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";
import { SymbolResult1 } from "../13704_SymbolResult1.js";
import { URLImpl } from "../13705_URLImpl.js";

let obj = {
  _mixedIntoPredicates: [],
  is(arg0) {
    if (arg0) {
      if (obj.hasOwn(arg0, SymbolResult1.implSymbol)) {
        if (arg0[tmp(undefined, 13704).implSymbol] instanceof tmp(13705).implementation) {
          return true;
        }
      }
      const _mixedIntoPredicates = module.exports._mixedIntoPredicates;
      for (const item10025 of _mixedIntoPredicates) {
        if (item10025(arg0)) {
          let tmp6 = obj2;
          obj2.return();
          let flag = true;
          return true;
        }
      }
      obj = SymbolResult1;
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
            let tmp6 = obj2;
            obj2.return();
            let flag = true;
            return true;
          }
        }
        const tmpResult = tmp(13704);
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
      return SymbolResult1.implForWrapper(arg0);
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("" + str + " is not of type 'URL'.");
      throw typeError;
    }
  },
  create(arg0, arg1, arg2) {
    if (undefined === arg0[require(undefined, 13704) /* SymbolResult1 */.ctorRegistrySymbol]) {
      const _Error2 = Error;
      const error = new Error("Internal error: invalid global object");
      throw error;
    } else {
      const _URL = arg0[tmp(undefined, 13704).ctorRegistrySymbol].URL;
      if (undefined === _URL) {
        const _Error = Error;
        const error1 = new Error("Internal error: constructor URL is not installed on the passed global object");
        throw error1;
      } else {
        const _Object = Object;
        return obj.setup(Object.create(_URL.prototype), arg0, arg1, arg2);
      }
    }
    tmp = require;
  },
  createImpl(arg0, arg1, arg2) {
    obj = obj.create(arg0, arg1, arg2);
    obj = SymbolResult1;
    return obj.implForWrapper(obj);
  },
  _internalSetup(arg0) {

  },
  setup(wrapper) {
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
    obj[0] = implementation;
    Object.defineProperty(wrapper, SymbolResult1.implSymbol, obj);
    wrapper[require(undefined, 13704) /* SymbolResult1 */.implSymbol][SymbolResult1.wrapperSymbol] = wrapper;
    if (URLImpl.init) {
      tmp2(13705).init(wrapper[tmp2(undefined, 13704).implSymbol], obj);
      const tmp2Result = tmp2(13705);
    }
    return wrapper;
  },
  install(arg0) {
    const URL = arg0;
    class URL {
      constructor(arg0) {
        tmp = outer2_3(this, URL);
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
          tmp13 = closure_2;
          obj2 = closure_0(closure_2[4]);
          arr = items.push(obj2.USVString(arguments[0], { context: "Failed to construct 'URL': parameter 1" }));
          tmp15 = arguments[1];
          USVStringResult = tmp15;
          if (undefined !== tmp15) {
            tmp12Result = tmp12(tmp13[4]);
            USVStringResult = tmp12Result.USVString(tmp15, { context: "Failed to construct 'URL': parameter 2" });
          }
          arr1 = items.push(USVStringResult);
          tmp4 = closure_5;
          tmp5 = globalThis;
          _Object = Object;
          tmp6 = URL;
          return closure_5.setup(Object.create(this.constructor.prototype), URL, items);
        }
      }
    }
    let obj = {
      key: "toJSON",
      value: function toJSON() {
        const self = this;
        if (this) {
          const _exports = closure_1.exports;
          if (_exports.is(self)) {
            return self[URL(undefined, 13704).implSymbol].toJSON();
          }
        }
        const typeError = new TypeError("Illegal invocation");
        throw typeError;
      }
    };
    let items = [
      obj,
      {
        key: "href",
        get() {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 13704).implSymbol].href;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              const obj = URL(13712);
              self[URL(undefined, 13704).implSymbol].href = URL(13712).USVString(arg0, { context: "Failed to set the 'href' property on 'URL': The provided value" });
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 13704).implSymbol].href;
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 13704).implSymbol].origin;
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 13704).implSymbol].protocol;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              const obj = URL(13712);
              self[URL(undefined, 13704).implSymbol].protocol = URL(13712).USVString(arg0, { context: "Failed to set the 'protocol' property on 'URL': The provided value" });
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 13704).implSymbol].username;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              const obj = URL(13712);
              self[URL(undefined, 13704).implSymbol].username = URL(13712).USVString(arg0, { context: "Failed to set the 'username' property on 'URL': The provided value" });
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 13704).implSymbol].password;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              const obj = URL(13712);
              self[URL(undefined, 13704).implSymbol].password = URL(13712).USVString(arg0, { context: "Failed to set the 'password' property on 'URL': The provided value" });
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 13704).implSymbol].host;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              const obj = URL(13712);
              self[URL(undefined, 13704).implSymbol].host = URL(13712).USVString(arg0, { context: "Failed to set the 'host' property on 'URL': The provided value" });
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 13704).implSymbol].hostname;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              const obj = URL(13712);
              self[URL(undefined, 13704).implSymbol].hostname = URL(13712).USVString(arg0, { context: "Failed to set the 'hostname' property on 'URL': The provided value" });
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 13704).implSymbol].port;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              const obj = URL(13712);
              self[URL(undefined, 13704).implSymbol].port = URL(13712).USVString(arg0, { context: "Failed to set the 'port' property on 'URL': The provided value" });
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 13704).implSymbol].pathname;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              const obj = URL(13712);
              self[URL(undefined, 13704).implSymbol].pathname = URL(13712).USVString(arg0, { context: "Failed to set the 'pathname' property on 'URL': The provided value" });
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 13704).implSymbol].search;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              const obj = URL(13712);
              self[URL(undefined, 13704).implSymbol].search = URL(13712).USVString(arg0, { context: "Failed to set the 'search' property on 'URL': The provided value" });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      },
      {
        key: "searchParams",
        get() {
          let self = this;
          self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self(13704).getSameObject(self, "searchParams", () => self(outer1_2[2]).tryWrapperForImpl(self[self(undefined, outer1_2[2]).implSymbol].searchParams));
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[URL(undefined, 13704).implSymbol].hash;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              const obj = URL(13712);
              self[URL(undefined, 13704).implSymbol].hash = URL(13712).USVString(arg0, { context: "Failed to set the 'hash' property on 'URL': The provided value" });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      }
    ];
    const tmp = _createClass(URL, items);
    obj = { toJSON: { enumerable: true }, href: { enumerable: true }, toString: { enumerable: true }, origin: { enumerable: true }, protocol: { enumerable: true }, username: { enumerable: true }, password: { enumerable: true }, host: { enumerable: true }, hostname: { enumerable: true }, port: { enumerable: true }, pathname: { enumerable: true }, search: { enumerable: true }, searchParams: { enumerable: true }, hash: { enumerable: true } };
    obj[Symbol.toStringTag] = { value: "URL", configurable: true };
    Object.defineProperties(tmp.prototype, obj);
    if (undefined === arg0[URL(undefined, 13704).ctorRegistrySymbol]) {
      let _Object = Object;
      const ctorRegistrySymbol = tmp3(13704).ctorRegistrySymbol;
      class URL {
        constructor(arg0) {
          tmp = outer2_3(this, URL);
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
            tmp13 = closure_2;
            obj2 = closure_0(closure_2[4]);
            arr = items.push(obj2.USVString(arguments[0], { context: "Failed to construct 'URL': parameter 1" }));
            tmp15 = arguments[1];
            USVStringResult = tmp15;
            if (undefined !== tmp15) {
              tmp12Result = tmp12(tmp13[4]);
              USVStringResult = tmp12Result.USVString(tmp15, { context: "Failed to construct 'URL': parameter 2" });
            }
            arr1 = items.push(USVStringResult);
            tmp4 = closure_5;
            tmp5 = globalThis;
            _Object = Object;
            tmp6 = URL;
            return closure_5.setup(Object.create(this.constructor.prototype), URL, items);
          }
        }
      }
    }
    arg0[URL(undefined, 13704).ctorRegistrySymbol].URL = tmp;
    Object.defineProperty(arg0, "URL", { configurable: true, writable: true, value: tmp });
  }
};

export default obj;