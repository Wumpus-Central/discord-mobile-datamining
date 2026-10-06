// _runtime/metro/14153__.js
import _mod14154 from "14154__.js";
import implementation2 from "../14155_implementation.js";
import any from "../14162_any.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

const require = globalThis.__r;
let _exports, _require;

exports = {
  _mixedIntoPredicates: [],
  is(arg0) {
    const tmp = arg0;
    if (tmp) {
      const obj = _mod14154;
      if (obj.hasOwn(arg0, _mod14154.implSymbol)) {
        if (arg0[_mod14154.implSymbol] instanceof implementation2.implementation) {
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
    }
    return false;
  },
  isImpl(arg0) {
    const tmp = arg0;
    if (tmp) {
      if (arg0 instanceof implementation2.implementation) {
        return true;
      } else {
        const _mixedIntoPredicates = module.exports._mixedIntoPredicates;
        const tmp2Result = _mod14154;
        for (const item10018 of _mixedIntoPredicates) {
          if (item10018(tmp2Result.wrapperForImpl(arg0))) {
            obj2.return();
            let flag = true;
            return true;
          }
        }
      }
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
    _exports = module.exports;
    if (_exports.is(arg0)) {
      const obj2 = _mod14154;
      return obj2.implForWrapper(arg0);
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("" + str + " is not of type 'URL'.");
      throw typeError;
    }
  },
  create(arg0, arg1, arg2) {
    if (undefined === arg0[_mod14154.ctorRegistrySymbol]) {
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      const error = new Error("Internal error: invalid global object");
      throw error;
    } else {
      const _URL = arg0[_mod14154.ctorRegistrySymbol].URL;
      if (undefined === _URL) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error1 = new Error("Internal error: constructor URL is not installed on the passed global object");
        throw error1;
      } else {
        const _Object = Object;
        return obj.setup(Object.create(_URL.prototype), arg0, arg1, arg2);
      }
    }
  },
  createImpl(arg0, arg1, arg2) {
    let obj;
    const obj2 = obj.create(arg0, arg1, arg2);
    obj = _mod14154;
    return obj.implForWrapper(obj2);
  },
  _internalSetup(arg0) {},
  setup(wrapper, arg1) {
    let implementation;
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
    const obj2 = { value: implementation, configurable: true };
    const implSymbol = _mod14154.implSymbol;
    implementation = new implementation2.implementation(arg1, items, obj);
    defineProperty(wrapper, implSymbol, obj2);
    wrapper[_mod14154.implSymbol][_mod14154.wrapperSymbol] = wrapper;
    if (implementation2.init) {
      const tmp2Result = implementation2;
      tmp2Result.init(wrapper[_mod14154.implSymbol], obj);
    }
    return wrapper;
  },
  install(arg0) {
    let closure_0;
    _require = arg0;
    class URL {
      constructor(arg0) {
        _classCallCheck(this, URL);
        if (arguments.length < 1) {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError(
            "Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.",
          );
          throw typeError;
        } else {
          const items = [];
          const first = arguments[0];
          const obj2 = any;
          items.push(obj2.USVString(first, { context: "Failed to construct 'URL': parameter 1" }));
          const tmp14 = arguments[1];
          let USVStringResult = tmp14;
          if (undefined !== tmp14) {
            const tmp11Result = any;
            USVStringResult = tmp11Result.USVString(tmp14, { context: "Failed to construct 'URL': parameter 2" });
          }
          items.push(USVStringResult);
          const _Object = Object;
          return obj.setup(Object.create(this.constructor.prototype), closure_0, items);
        }
      }
    }
    const entry = {
      key: "toJSON",
      value: function toJSON() {
        const self = this;
        if (self) {
          _exports = module.exports;
          if (_exports.is(self)) {
            const obj = self[closure_0(undefined, dependencyMap[2]).implSymbol];
            return obj.toJSON();
          }
        }
        const typeError = new TypeError("Illegal invocation");
        throw typeError;
      },
    };
    let items = [
      entry,
      {
        key: "href",
        get() {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, dependencyMap[2]).implSymbol].href;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(item10103) {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              const obj = closure_0(dependencyMap[4]);
              self[closure_0(undefined, dependencyMap[2]).implSymbol].href = obj.USVString(item10103, {
                context: "Failed to set the 'href' property on 'URL': The provided value",
              });
              obj.USVString(item10103, { context: "Failed to set the 'href' property on 'URL': The provided value" });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
      },
      {
        key: "toString",
        value: function toString() {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, dependencyMap[2]).implSymbol].href;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
      },
      {
        key: "origin",
        get() {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, dependencyMap[2]).implSymbol].origin;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
      },
      {
        key: "protocol",
        get() {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, dependencyMap[2]).implSymbol].protocol;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(item10103) {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              const obj = closure_0(dependencyMap[4]);
              self[closure_0(undefined, dependencyMap[2]).implSymbol].protocol = obj.USVString(item10103, {
                context: "Failed to set the 'protocol' property on 'URL': The provided value",
              });
              obj.USVString(item10103, {
                context: "Failed to set the 'protocol' property on 'URL': The provided value",
              });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
      },
      {
        key: "username",
        get() {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, dependencyMap[2]).implSymbol].username;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(item10103) {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              const obj = closure_0(dependencyMap[4]);
              self[closure_0(undefined, dependencyMap[2]).implSymbol].username = obj.USVString(item10103, {
                context: "Failed to set the 'username' property on 'URL': The provided value",
              });
              obj.USVString(item10103, {
                context: "Failed to set the 'username' property on 'URL': The provided value",
              });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
      },
      {
        key: "password",
        get() {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, dependencyMap[2]).implSymbol].password;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(item10103) {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              const obj = closure_0(dependencyMap[4]);
              self[closure_0(undefined, dependencyMap[2]).implSymbol].password = obj.USVString(item10103, {
                context: "Failed to set the 'password' property on 'URL': The provided value",
              });
              obj.USVString(item10103, {
                context: "Failed to set the 'password' property on 'URL': The provided value",
              });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
      },
      {
        key: "host",
        get() {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, dependencyMap[2]).implSymbol].host;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(item10103) {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              const obj = closure_0(dependencyMap[4]);
              self[closure_0(undefined, dependencyMap[2]).implSymbol].host = obj.USVString(item10103, {
                context: "Failed to set the 'host' property on 'URL': The provided value",
              });
              obj.USVString(item10103, { context: "Failed to set the 'host' property on 'URL': The provided value" });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
      },
      {
        key: "hostname",
        get() {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, dependencyMap[2]).implSymbol].hostname;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(item10103) {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              const obj = closure_0(dependencyMap[4]);
              self[closure_0(undefined, dependencyMap[2]).implSymbol].hostname = obj.USVString(item10103, {
                context: "Failed to set the 'hostname' property on 'URL': The provided value",
              });
              obj.USVString(item10103, {
                context: "Failed to set the 'hostname' property on 'URL': The provided value",
              });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
      },
      {
        key: "port",
        get() {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, dependencyMap[2]).implSymbol].port;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(item10103) {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              const obj = closure_0(dependencyMap[4]);
              self[closure_0(undefined, dependencyMap[2]).implSymbol].port = obj.USVString(item10103, {
                context: "Failed to set the 'port' property on 'URL': The provided value",
              });
              obj.USVString(item10103, { context: "Failed to set the 'port' property on 'URL': The provided value" });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
      },
      {
        key: "pathname",
        get() {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, dependencyMap[2]).implSymbol].pathname;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(item10103) {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              const obj = closure_0(dependencyMap[4]);
              self[closure_0(undefined, dependencyMap[2]).implSymbol].pathname = obj.USVString(item10103, {
                context: "Failed to set the 'pathname' property on 'URL': The provided value",
              });
              obj.USVString(item10103, {
                context: "Failed to set the 'pathname' property on 'URL': The provided value",
              });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
      },
      {
        key: "search",
        get() {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, dependencyMap[2]).implSymbol].search;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(item10103) {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              const obj = closure_0(dependencyMap[4]);
              self[closure_0(undefined, dependencyMap[2]).implSymbol].search = obj.USVString(item10103, {
                context: "Failed to set the 'search' property on 'URL': The provided value",
              });
              obj.USVString(item10103, { context: "Failed to set the 'search' property on 'URL': The provided value" });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
      },
      {
        key: "searchParams",
        get() {
          let _self;
          const self = this;
          if (self) {
            _exports = _exports.exports;
            if (_exports.is(self)) {
              let obj = self(closure_2[2]);
              return obj.getSameObject(self, "searchParams", () => {
                const obj = _self(dependencyMap[2]);
                return obj.tryWrapperForImpl(self[_self(undefined, dependencyMap[2]).implSymbol].searchParams);
              });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
      },
      {
        key: "hash",
        get() {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, dependencyMap[2]).implSymbol].hash;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(item10103) {
          const self = this;
          if (self) {
            _exports = module.exports;
            if (_exports.is(self)) {
              const obj = closure_0(dependencyMap[4]);
              self[closure_0(undefined, dependencyMap[2]).implSymbol].hash = obj.USVString(item10103, {
                context: "Failed to set the 'hash' property on 'URL': The provided value",
              });
              obj.USVString(item10103, { context: "Failed to set the 'hash' property on 'URL': The provided value" });
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
      },
    ];
    const tmp = _createClass(URL, items);
    const user = {
      toJSON: { enumerable: true },
      href: { enumerable: true },
      toString: { enumerable: true },
      origin: { enumerable: true },
      protocol: { enumerable: true },
      username: { enumerable: true },
      password: { enumerable: true },
      host: { enumerable: true },
      hostname: { enumerable: true },
      port: { enumerable: true },
      pathname: { enumerable: true },
      search: { enumerable: true },
      searchParams: { enumerable: true },
      hash: { enumerable: true },
    };
    user[Symbol.toStringTag] = { value: "URL", configurable: true };
    Object.defineProperties(tmp.prototype, user);
    if (undefined === arg0[require("14154__.js").ctorRegistrySymbol]) {
      let _Object = Object;
      const ctorRegistrySymbol = tmp3(14154).ctorRegistrySymbol;
      class URL {
        constructor(arg0) {
          _classCallCheck(this, URL);
          if (arguments.length < 1) {
            const _TypeError = TypeError;
            const self = this;
            const self2 = this;
            const typeError = new TypeError(
              "Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.",
            );
            throw typeError;
          } else {
            const items = [];
            const first = arguments[0];
            const obj2 = any;
            items.push(obj2.USVString(first, { context: "Failed to construct 'URL': parameter 1" }));
            const tmp14 = arguments[1];
            let USVStringResult = tmp14;
            if (undefined !== tmp14) {
              const tmp11Result = any;
              USVStringResult = tmp11Result.USVString(tmp14, { context: "Failed to construct 'URL': parameter 2" });
            }
            items.push(USVStringResult);
            const _Object = Object;
            return obj.setup(Object.create(this.constructor.prototype), closure_0, items);
          }
        }
      }
    }
    arg0[require("14154__.js").ctorRegistrySymbol].URL = tmp;
    Object.defineProperty(arg0, "URL", { configurable: true, writable: true, value: tmp });
  },
};

export default exports;
