// === Module 14142: ? ===

// Module 14142
import _mod14136 from "module_14136" /* 14136 */;
import _mod14143 from "module_14143" /* 14143 */;
import any from "any" /* 14144 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

const require = globalThis.__r;
let _require;

let obj = {
  next: {
    value: function next() {
      let index;
      let kind;
      let tmp7;
      let tmp8;
      const tmp3 = this[_mod14136.iterInternalSymbol];
      ({ kind, index } = tmp3);
      const arr = Array.from(tmp3.target[_mod14136.implSymbol]);
      if (index >= arr.length) {
        return { value: "IconComponent", done: null };
      } else {
        let tmp4;
        tmp3.index = index + 1;
        [tmp7, tmp8] = arr[index].map(_mod14136.tryWrapperForImpl);
        _slicedToArray(arr[index].map(_mod14136.tryWrapperForImpl), 2);
        if ("key" === kind) {
          tmp4 = tmp7;
        } else if ("value" === kind) {
          tmp4 = tmp8;
        } else if ("key+value" === kind) {
          const items = [tmp7, tmp8];
          tmp4 = items;
        }
        return { value: tmp4, done: false };
      }
    },
    writable: true,
    enumerable: true,
    configurable: true
  }
};
obj[Symbol.toStringTag] = { value: "URLSearchParams Iterator", configurable: true };
let closure_6 = Object.create(_mod14136.IteratorPrototype, obj);
let obj2 = {
  _mixedIntoPredicates: [],
  is(arg0) {
    const tmp = arg0;
    if (tmp) {
      const obj = _mod14136;
      if (obj.hasOwn(arg0, _mod14136.implSymbol)) {
        if (arg0[_mod14136.implSymbol] instanceof _mod14143.implementation) {
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
      if (arg0 instanceof _mod14143.implementation) {
        return true;
      } else {
        const _mixedIntoPredicates = module.exports._mixedIntoPredicates;
        const tmp2Result = _mod14136;
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
    const _exports = module.exports;
    if (_exports.is(arg0)) {
      obj2 = _mod14136;
      return obj2.implForWrapper(arg0);
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("" + str + " is not of type 'URLSearchParams'.");
      throw typeError;
    }
  },
  createDefaultIterator(self, key) {
    let obj4;
    obj2 = Object.create(closure_6);
    const obj = { value: obj4, configurable: true };
    obj4 = { target: self, kind: key, index: 0 };
    Object.defineProperty(obj2, _mod14136.iterInternalSymbol, obj);
    return obj2;
  },
  create(arg0, arg1, arg2) {
    if (undefined === arg0[_mod14136.ctorRegistrySymbol]) {
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      const error = new Error("Internal error: invalid global object");
      throw error;
    } else {
      const _URLSearchParams = arg0[_mod14136.ctorRegistrySymbol].URLSearchParams;
      if (undefined === _URLSearchParams) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error1 = new Error("Internal error: constructor URLSearchParams is not installed on the passed global object");
        throw error1;
      } else {
        const _Object = Object;
        return obj2.setup(Object.create(_URLSearchParams.prototype), arg0, arg1, arg2);
      }
    }
  },
  createImpl(arg0, arg1, arg2) {
    obj2 = obj2.create(arg0, arg1, arg2);
    const obj = _mod14136;
    return obj.implForWrapper(obj2);
  },
  _internalSetup(arg0) {

  },
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
    obj2._internalSetup(wrapper);
    obj2 = { value: implementation, configurable: true };
    const implSymbol = _mod14136.implSymbol;
    implementation = new _mod14143.implementation(arg1, items, obj);
    defineProperty(wrapper, implSymbol, obj2);
    wrapper[_mod14136.implSymbol][_mod14136.wrapperSymbol] = wrapper;
    if (_mod14143.init) {
      const tmp2Result = _mod14143;
      tmp2Result.init(wrapper[_mod14136.implSymbol], obj);
    }
    return wrapper;
  },
  install(arg0) {
    let closure_0;
    _require = arg0;
    class URLSearchParams {
      constructor() {
        _classCallCheck(this, URLSearchParams);
        const first = arguments[0];
        let str = "";
        if (undefined !== first) {
          const obj7 = _mod14136;
          if (obj7.isObject(first)) {
            const _Symbol = Symbol;
            if (undefined !== first[Symbol.iterator]) {
              const tmp50Result = _mod14136;
              if (tmp50Result.isObject(first)) {
                const items = [];
                str = items;
                for (const item10081 of first) {
                  let obj5 = _mod14136;
                  if (obj5.isObject(item10081)) {
                    let items1 = [];
                    for (const item10103 of item10081) {
                      let obj6 = any;
                      let arr = items1.push(obj6.USVString(item10103, { context: "Failed to construct 'URLSearchParams': parameter 1 sequence's element's element" }));
                      continue;
                    }
                    let arr2 = items.push(items1);
                    continue;
                  } else {
                    let _TypeError3 = TypeError;
                    let self5 = this;
                    let str4 = "Failed to construct 'URLSearchParams': parameter 1 sequence's element is not an iterable object.";
                    let self6 = this;
                    let typeError = new TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence's element is not an iterable object.");
                    throw typeError;
                  }
                }
              } else {
                const _TypeError2 = TypeError;
                const self3 = this;
                const self4 = this;
                const typeError1 = new TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence is not an iterable object.");
                throw typeError1;
              }
            } else {
              const tmp50Result3 = _mod14136;
              if (tmp50Result3.isObject(first)) {
                const _Object = Object;
                const obj = Object.create(null);
                const _Reflect = Reflect;
                str = obj;
                const ownKeysResult = Reflect.ownKeys(first);
                for (const item10039 of ownKeysResult) {
                  let _Object2 = Object;
                  let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(first, item10039);
                  if (ownPropertyDescriptor) {
                    if (tmp15.enumerable) {
                      obj2 = any;
                      let USVStringResult = obj2.USVString(item10039, { context: "Failed to construct 'URLSearchParams': parameter 1 record's key" });
                      let tmp23 = first[item10039];
                      let obj3 = any;
                      obj[USVStringResult] = obj3.USVString(tmp23, { context: "Failed to construct 'URLSearchParams': parameter 1 record's value" });
                    }
                  }
                  continue;
                }
              } else {
                const _TypeError = TypeError;
                const self = this;
                const self2 = this;
                const typeError2 = new TypeError("Failed to construct 'URLSearchParams': parameter 1 record is not an object.");
                throw typeError2;
              }
            }
          } else {
            const tmp50Result4 = any;
            str = tmp50Result4.USVString(first, { context: "Failed to construct 'URLSearchParams': parameter 1" });
          }
        }
        const items2 = [];
        items2.push(str);
        return obj2.setup(Object.create(this.constructor.prototype), closure_0, items2);
      }
    }
    const entry = {
      key: "append",
      value: function append(arg0, arg1) {
        const self = this;
        if (self) {
          const _exports = module.exports;
          if (_exports.is(self)) {
            if (arguments.length < 2) {
              const _TypeError = TypeError;
              const self2 = this;
              const self3 = this;
              const typeError = new TypeError("Failed to execute 'append' on 'URLSearchParams': 2 arguments required, but only " + arguments.length + " present.");
              throw typeError;
            } else {
              const items = [];
              const first = arguments[0];
              const obj = closure_0(dependencyMap[5]);
              items.push(obj.USVString(first, { context: "Failed to execute 'append' on 'URLSearchParams': parameter 1" }));
              const tmp11 = arguments[1];
              obj2 = closure_0(dependencyMap[5]);
              items.push(obj2.USVString(tmp11, { context: "Failed to execute 'append' on 'URLSearchParams': parameter 2" }));
              const tmp13 = self[closure_0(undefined, dependencyMap[3]).implSymbol];
              const append = tmp13.append;
              const items1 = [];
              HermesBuiltin.arraySpread(items1, items, 0);
              return HermesBuiltin.apply(append, items1, tmp13);
            }
          }
        }
        const typeError1 = new TypeError("Illegal invocation");
        throw typeError1;
      }
    };
    let items = [
      entry,
      {
        key: "delete",
        value: function _delete(arg0) {
          const self = this;
          if (self) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              if (arguments.length < 1) {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("Failed to execute 'delete' on 'URLSearchParams': 1 argument required, but only " + arguments.length + " present.");
                throw typeError;
              } else {
                const items = [];
                const first = arguments[0];
                const obj = closure_0(dependencyMap[5]);
                items.push(obj.USVString(first, { context: "Failed to execute 'delete' on 'URLSearchParams': parameter 1" }));
                const tmp8 = self[closure_0(undefined, dependencyMap[3]).implSymbol];
                const _delete = tmp8.delete;
                const items1 = [];
                HermesBuiltin.arraySpread(items1, items, 0);
                return HermesBuiltin.apply(_delete, items1, tmp8);
              }
            }
          }
          const typeError1 = new TypeError("Illegal invocation");
          throw typeError1;
        }
      },
      {
        key: "get",
        value: function get(arg0) {
          const self = this;
          if (self) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              if (arguments.length < 1) {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("Failed to execute 'get' on 'URLSearchParams': 1 argument required, but only " + arguments.length + " present.");
                throw typeError;
              } else {
                const items = [];
                const first = arguments[0];
                const obj = closure_0(dependencyMap[5]);
                items.push(obj.USVString(first, { context: "Failed to execute 'get' on 'URLSearchParams': parameter 1" }));
                const tmp8 = self[closure_0(undefined, dependencyMap[3]).implSymbol];
                const get = tmp8.get;
                const items1 = [];
                HermesBuiltin.arraySpread(items1, items, 0);
                return HermesBuiltin.apply(get, items1, tmp8);
              }
            }
          }
          const typeError1 = new TypeError("Illegal invocation");
          throw typeError1;
        }
      },
      {
        key: "getAll",
        value: function getAll(arg0) {
          const self = this;
          if (self) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              if (arguments.length < 1) {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("Failed to execute 'getAll' on 'URLSearchParams': 1 argument required, but only " + arguments.length + " present.");
                throw typeError;
              } else {
                const items = [];
                const first = arguments[0];
                const obj = closure_0(dependencyMap[5]);
                items.push(obj.USVString(first, { context: "Failed to execute 'getAll' on 'URLSearchParams': parameter 1" }));
                const tryWrapperForImpl = closure_0(dependencyMap[3]).tryWrapperForImpl;
                const tmp12 = self[closure_0(undefined, dependencyMap[3]).implSymbol];
                const getAll = tmp12.getAll;
                const items1 = [];
                HermesBuiltin.arraySpread(items1, items, 0);
                return tryWrapperForImpl(HermesBuiltin.apply(getAll, items1, tmp12));
              }
            }
          }
          const typeError1 = new TypeError("Illegal invocation");
          throw typeError1;
        }
      },
      {
        key: "has",
        value: function has(arg0) {
          const self = this;
          if (self) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              if (arguments.length < 1) {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("Failed to execute 'has' on 'URLSearchParams': 1 argument required, but only " + arguments.length + " present.");
                throw typeError;
              } else {
                const items = [];
                const first = arguments[0];
                const obj = closure_0(dependencyMap[5]);
                items.push(obj.USVString(first, { context: "Failed to execute 'has' on 'URLSearchParams': parameter 1" }));
                const tmp8 = self[closure_0(undefined, dependencyMap[3]).implSymbol];
                const has = tmp8.has;
                const items1 = [];
                HermesBuiltin.arraySpread(items1, items, 0);
                return HermesBuiltin.apply(has, items1, tmp8);
              }
            }
          }
          const typeError1 = new TypeError("Illegal invocation");
          throw typeError1;
        }
      },
      {
        key: "set",
        value: function set(arg0, arg1) {
          const self = this;
          if (self) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              if (arguments.length < 2) {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError = new TypeError("Failed to execute 'set' on 'URLSearchParams': 2 arguments required, but only " + arguments.length + " present.");
                throw typeError;
              } else {
                const items = [];
                const first = arguments[0];
                const obj = closure_0(dependencyMap[5]);
                items.push(obj.USVString(first, { context: "Failed to execute 'set' on 'URLSearchParams': parameter 1" }));
                const tmp11 = arguments[1];
                obj2 = closure_0(dependencyMap[5]);
                items.push(obj2.USVString(tmp11, { context: "Failed to execute 'set' on 'URLSearchParams': parameter 2" }));
                const tmp13 = self[closure_0(undefined, dependencyMap[3]).implSymbol];
                const items1 = [];
                HermesBuiltin.arraySpread(items1, items, 0);
                return HermesBuiltin.apply(tmp13.set, items1, tmp13);
              }
            }
          }
          const typeError1 = new TypeError("Illegal invocation");
          throw typeError1;
        }
      },
      {
        key: "sort",
        value: function sort() {
          const self = this;
          if (self) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              const obj = self[closure_0(undefined, dependencyMap[3]).implSymbol];
              return obj.sort();
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
          if (self) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              const str = self[closure_0(undefined, dependencyMap[3]).implSymbol];
              return str.toString();
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      },
      {
        key: "keys",
        value: function keys() {
          const self = this;
          if (self) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              const _exports2 = module.exports;
              return _exports2.createDefaultIterator(self, "key");
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      },
      {
        key: "values",
        value: function values() {
          const self = this;
          if (self) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              const _exports2 = module.exports;
              return _exports2.createDefaultIterator(self, "value");
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      },
      {
        key: "entries",
        value: function entries() {
          const self = this;
          if (self) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              const _exports2 = module.exports;
              return _exports2.createDefaultIterator(self, "key+value");
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      },
      {
        key: "forEach",
        value: function forEach(call) {
          let arr3;
          let tmp7;
          let tmp8;
          const self = this;
          if (self) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              if (arguments.length < 1) {
                const _TypeError2 = TypeError;
                const self4 = this;
                const self5 = this;
                const typeError = new TypeError("Failed to execute 'forEach' on 'iterable': 1 argument required, but only 0 present.");
                throw typeError;
              } else if (typeof call !== "function") {
                const _TypeError = TypeError;
                const self2 = this;
                const self3 = this;
                const typeError1 = new TypeError("Failed to execute 'forEach' on 'iterable': The callback provided as parameter 1 is not a function.");
                throw typeError1;
              } else {
                const tmp18 = arguments[1];
                const _Array2 = Array;
                const arr2 = Array.from(self[closure_0(undefined, dependencyMap[3]).implSymbol]);
                let num2 = 0;
                let tmp10 = arr2;
                if (0 < arr2.length) {
                  do {
                    let arr = tmp10[num2];
                    let tmp6 = _slicedToArray(arr.map(closure_0(dependencyMap[3]).tryWrapperForImpl), 2);
                    [tmp7, tmp8] = tmp6;
                    let callResult = call.call(tmp18, tmp8, tmp7, self);
                    let _Array = Array;
                    arr3 = Array.from(self[closure_0(undefined, dependencyMap[3]).implSymbol]);
                    num2 = num2 + 1;
                    tmp10 = arr3;
                  } while (num2 < arr3.length);
                }
              }
            }
          }
          const typeError2 = new TypeError("Illegal invocation");
          throw typeError2;
        }
      }
    ];
    const tmp = _createClass(URLSearchParams, items);
    let obj = { append: { enumerable: true }, delete: { enumerable: true }, get: { enumerable: true }, getAll: { enumerable: true }, has: { enumerable: true }, set: { enumerable: true }, sort: { enumerable: true }, toString: { enumerable: true }, keys: { enumerable: true }, values: { enumerable: true }, entries: { enumerable: true }, forEach: { enumerable: true } };
    obj[Symbol.toStringTag] = { value: "URLSearchParams", configurable: true };
    obj[Symbol.iterator] = { value: tmp.prototype.entries, configurable: true, writable: true };
    Object.defineProperties(tmp.prototype, obj);
    if (undefined === arg0[require("module_14136").ctorRegistrySymbol]) {
      let _Object = Object;
      const ctorRegistrySymbol = tmp3(14136).ctorRegistrySymbol;
      class URLSearchParams {
        constructor() {
          _classCallCheck(this, URLSearchParams);
          const first = arguments[0];
          let str = "";
          if (undefined !== first) {
            const obj7 = _mod14136;
            if (obj7.isObject(first)) {
              const _Symbol = Symbol;
              if (undefined !== first[Symbol.iterator]) {
                const tmp50Result = _mod14136;
                if (tmp50Result.isObject(first)) {
                  const items = [];
                  str = items;
                  for (const item10081 of first) {
                    let obj5 = _mod14136;
                    if (obj5.isObject(item10081)) {
                      let items1 = [];
                      for (const item10103 of item10081) {
                        let obj6 = any;
                        let arr = items1.push(obj6.USVString(item10103, { context: "Failed to construct 'URLSearchParams': parameter 1 sequence's element's element" }));
                        continue;
                      }
                      let arr2 = items.push(items1);
                      continue;
                    } else {
                      let _TypeError3 = TypeError;
                      let self5 = this;
                      let str4 = "Failed to construct 'URLSearchParams': parameter 1 sequence's element is not an iterable object.";
                      let self6 = this;
                      let typeError = new TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence's element is not an iterable object.");
                      throw typeError;
                    }
                  }
                } else {
                  const _TypeError2 = TypeError;
                  const self3 = this;
                  const self4 = this;
                  const typeError1 = new TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence is not an iterable object.");
                  throw typeError1;
                }
              } else {
                const tmp50Result3 = _mod14136;
                if (tmp50Result3.isObject(first)) {
                  const _Object = Object;
                  const obj = Object.create(null);
                  const _Reflect = Reflect;
                  str = obj;
                  const ownKeysResult = Reflect.ownKeys(first);
                  for (const item10039 of ownKeysResult) {
                    let _Object2 = Object;
                    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(first, item10039);
                    if (ownPropertyDescriptor) {
                      if (tmp15.enumerable) {
                        obj2 = any;
                        let USVStringResult = obj2.USVString(item10039, { context: "Failed to construct 'URLSearchParams': parameter 1 record's key" });
                        let tmp23 = first[item10039];
                        let obj3 = any;
                        obj[USVStringResult] = obj3.USVString(tmp23, { context: "Failed to construct 'URLSearchParams': parameter 1 record's value" });
                      }
                    }
                    continue;
                  }
                } else {
                  const _TypeError = TypeError;
                  const self = this;
                  const self2 = this;
                  const typeError2 = new TypeError("Failed to construct 'URLSearchParams': parameter 1 record is not an object.");
                  throw typeError2;
                }
              }
            } else {
              const tmp50Result4 = any;
              str = tmp50Result4.USVString(first, { context: "Failed to construct 'URLSearchParams': parameter 1" });
            }
          }
          const items2 = [];
          items2.push(str);
          return obj2.setup(Object.create(this.constructor.prototype), closure_0, items2);
        }
      }
    }
    arg0[require("module_14136").ctorRegistrySymbol].URLSearchParams = tmp;
    Object.defineProperty(arg0, "URLSearchParams", { configurable: true, writable: true, value: tmp });
  }
};

export default obj2;