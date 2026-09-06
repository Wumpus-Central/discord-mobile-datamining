// _runtime/metro/14378__.js
import _mod14372 from "14372__.js";
import URLSearchParamsImpl from "../14379_URLSearchParamsImpl.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _slicedToArray from "00032__.js";

let exports = {
  next: {
    value: function next() {
      const tmp3 = this[_mod14372.iterInternalSymbol];
      ({ kind, index } = tmp3);
      const arr = Array.from(tmp3.target[_mod14372.implSymbol]);
      if (index >= arr.length) {
        return { value: "HermesInternal", done: null };
      } else {
        tmp3.index = index + 1;
        [tmp7, tmp8] = _slicedToArray(arr[index].map(_mod14372.tryWrapperForImpl), 2);
        if ("key" === kind) {
          let tmp4 = tmp7;
        } else if ("value" === kind) {
          tmp4 = tmp8;
        } else if ("key+value" === kind) {
          const items = [tmp7, tmp8];
          tmp4 = items;
        }
        obj = { value: tmp4, done: false };
        return obj;
      }
    },
    writable: true,
    enumerable: true,
    configurable: true,
  },
};
exports[Symbol.toStringTag] = { value: "URLSearchParams Iterator", configurable: true };
let closure_6 = Object.create(_mod14372.IteratorPrototype, exports);
exports = {
  _mixedIntoPredicates: [],
  is(arg0) {
    if (arg0) {
      if (obj.hasOwn(arg0, _mod14372.implSymbol)) {
        if (arg0[tmp(undefined, 14372).implSymbol] instanceof tmp(14379).implementation) {
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
      if (arg0 instanceof URLSearchParamsImpl.implementation) {
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
    obj = arg1;
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
      const typeError = new TypeError("" + str + " is not of type 'URLSearchParams'.");
      throw typeError;
    }
  },
  createDefaultIterator(self, key) {
    Object.create(closure_6);
    value = { value: null, configurable: true };
    value = { target: self, kind: key, index: 0 };
    value.value = value;
    Object.defineProperty(value, _mod14372.iterInternalSymbol, value);
    return value;
  },
  create(arg0, arg1, arg2) {
    if (undefined === arg0[_mod14372.ctorRegistrySymbol]) {
      const _Error2 = Error;
      const error = new Error("Internal error: invalid global object");
      throw error;
    } else {
      const _URLSearchParams = arg0[_mod14372.ctorRegistrySymbol].URLSearchParams;
      if (undefined === _URLSearchParams) {
        const _Error = Error;
        const error1 = new Error(
          "Internal error: constructor URLSearchParams is not installed on the passed global object",
        );
        throw error1;
      } else {
        const _Object = Object;
        return obj.setup(Object.create(_URLSearchParams.prototype), arg0, arg1, arg2);
      }
    }
  },
  createImpl(arg0, arg1, arg2) {
    obj.create(arg0, arg1, arg2);
    obj = _mod14372;
    return obj.implForWrapper(obj);
  },
  _internalSetup(arg0) {},
  setup(wrapper, arg1) {
    let items = arg2;
    if (arg2 === undefined) {
      items = [];
    }
    obj = arg3;
    if (arg3 === undefined) {
      obj = {};
    }
    obj.wrapper = wrapper;
    obj._internalSetup(wrapper);
    obj = { value: null, configurable: true };
    const implementation = new URLSearchParamsImpl.implementation(arg1, items, obj);
    obj.value = implementation;
    Object.defineProperty(wrapper, _mod14372.implSymbol, obj);
    wrapper[_mod14372.implSymbol][_mod14372.wrapperSymbol] = wrapper;
    if (URLSearchParamsImpl.init) {
      tmp2(14379).init(wrapper[tmp2(undefined, 14372).implSymbol], obj);
      const tmp2Result = tmp2(14379);
    }
    return wrapper;
  },
  install(arg0) {
    const URLSearchParams = arg0;
    class URLSearchParams {
      constructor() {
        tmp = closure_3(this, URLSearchParams);
        first = arguments[0];
        str = "";
        if (undefined !== first) {
          tmp54 = closure_0;
          tmp55 = closure_0;
          tmp56 = c2;
          tmp57 = c2;
          obj7 = closure_0(c2[3]);
          if (obj7.isObject(first)) {
            tmp5 = globalThis;
            _Symbol = Symbol;
            if (undefined !== first[Symbol.iterator]) {
              tmp25 = tmp54;
              tmp26 = tmp56;
              tmp55Result = tmp55(tmp57[3]);
              if (tmp55Result.isObject(first)) {
                items = [];
                tmp31 = first;
                tmp32 = first;
                str = items;
                for (const item10081 of first) {
                  tmp34 = closure_0;
                  tmp35 = closure_0;
                  tmp36 = c2;
                  tmp37 = c2;
                  tmp33 = item10081;
                  obj5 = closure_0(c2[3]);
                  if (obj5.isObject(item10081)) {
                    items1 = [];
                    tmp42 = tmp33;
                    tmp43 = item10081;
                    for (const item10103 of item10081) {
                      tmp44 = closure_0;
                      tmp45 = closure_0;
                      tmp46 = c2;
                      tmp47 = c2;
                      obj6 = closure_0(c2[5]);
                      tmp48 = items1;
                      arr = items1.push(
                        obj6.USVString(item10103, {
                          context: "Failed to construct 'URLSearchParams': parameter 1 sequence's element's element",
                        }),
                      );
                      continue;
                    }
                    tmp50 = items1;
                    tmp51 = items1;
                    arr1 = items.push(items1);
                    continue;
                  } else {
                    _TypeError3 = TypeError;
                    tmp38 = new.target;
                    str4 =
                      "Failed to construct 'URLSearchParams': parameter 1 sequence's element is not an iterable object.";
                    tmp39 = new.target;
                    typeError = new TypeError(
                      "Failed to construct 'URLSearchParams': parameter 1 sequence's element is not an iterable object.",
                    );
                    tmp41 = typeError;
                    throw typeError;
                  }
                }
              } else {
                _TypeError2 = TypeError;
                tmp27 = new.target;
                str3 = "Failed to construct 'URLSearchParams': parameter 1 sequence is not an iterable object.";
                tmp28 = new.target;
                typeError1 = new TypeError(
                  "Failed to construct 'URLSearchParams': parameter 1 sequence is not an iterable object.",
                );
                tmp30 = typeError1;
                throw typeError1;
              }
            } else {
              tmp58 = tmp54;
              tmp59 = tmp56;
              tmp55Result1 = tmp55(tmp57[3]);
              if (tmp55Result1.isObject(first)) {
                _Object = Object;
                tmp10 = null;
                obj = Object.create(null);
                _Reflect = Reflect;
                ownKeysResult = Reflect.ownKeys(first);
                tmp13 = ownKeysResult;
                tmp14 = ownKeysResult;
                str = obj;
                for (const item10039 of ownKeysResult) {
                  tmp15 = item10039;
                  _Object2 = Object;
                  ownPropertyDescriptor = Object.getOwnPropertyDescriptor(first, item10039);
                  if (!ownPropertyDescriptor) {
                  } else {
                    tmp18 = ownPropertyDescriptor;
                    if (!tmp17.enumerable) {
                    } else {
                      tmp19 = item10039;
                      tmp20 = closure_0;
                      tmp21 = closure_0;
                      tmp22 = c2;
                      tmp23 = c2;
                      obj2 = closure_0(c2[5]);
                      USVStringResult = obj2.USVString(tmp15, {
                        context: "Failed to construct 'URLSearchParams': parameter 1 record's key",
                      });
                      obj3 = closure_0(c2[5]);
                      obj[USVStringResult] = obj3.USVString(first[tmp15], {
                        context: "Failed to construct 'URLSearchParams': parameter 1 record's value",
                      });
                    }
                  }
                  continue;
                }
              } else {
                _TypeError = TypeError;
                tmp6 = new.target;
                str2 = "Failed to construct 'URLSearchParams': parameter 1 record is not an object.";
                tmp7 = new.target;
                typeError2 = new TypeError(
                  "Failed to construct 'URLSearchParams': parameter 1 record is not an object.",
                );
                tmp9 = typeError2;
                throw typeError2;
              }
            }
          } else {
            tmp3 = tmp54;
            tmp4 = tmp56;
            tmp55Result2 = tmp55(tmp57[5]);
            str = tmp55Result2.USVString(first, { context: "Failed to construct 'URLSearchParams': parameter 1" });
          }
        }
        items2 = [];
        arr2 = items2.push(str);
        return closure_7.setup(Object.create(this.constructor.prototype), closure_0, items2);
      }
    }
    const entry = {
      key: "append",
      value: function append(arg0, arg1) {
        const self = this;
        if (this) {
          const _exports = module.exports;
          if (_exports.is(self)) {
            if (arguments.length < 2) {
              const _TypeError = TypeError;
              const typeError = new TypeError(
                "Failed to execute 'append' on 'URLSearchParams': 2 arguments required, but only " +
                  arguments.length +
                  " present.",
              );
              throw typeError;
            } else {
              const items = [];
              items.push(
                URLSearchParams(14380).USVString(arguments[0], {
                  context: "Failed to execute 'append' on 'URLSearchParams': parameter 1",
                }),
              );
              obj = URLSearchParams(14380);
              items.push(
                URLSearchParams(14380).USVString(arguments[1], {
                  context: "Failed to execute 'append' on 'URLSearchParams': parameter 2",
                }),
              );
              const tmp12 = self[URLSearchParams(undefined, 14372).implSymbol];
              const append = tmp12.append;
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              return HermesBuiltin.apply(items1, tmp12);
            }
          }
        }
        const typeError1 = new TypeError("Illegal invocation");
        throw typeError1;
      },
    };
    let items = [
      entry,
      {
        key: "delete",
        value: function _delete(arg0) {
          const self = this;
          if (this) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              if (arguments.length < 1) {
                const _TypeError = TypeError;
                const typeError = new TypeError(
                  "Failed to execute 'delete' on 'URLSearchParams': 1 argument required, but only " +
                    arguments.length +
                    " present.",
                );
                throw typeError;
              } else {
                const items = [];
                items.push(
                  URLSearchParams(14380).USVString(arguments[0], {
                    context: "Failed to execute 'delete' on 'URLSearchParams': parameter 1",
                  }),
                );
                const tmp6 = self[URLSearchParams(undefined, 14372).implSymbol];
                const _delete = tmp6.delete;
                const items1 = [];
                HermesBuiltin.arraySpread(items, 0);
                return HermesBuiltin.apply(items1, tmp6);
              }
            }
          }
          const typeError1 = new TypeError("Illegal invocation");
          throw typeError1;
        },
      },
      {
        key: "get",
        value: function get(arg0) {
          const self = this;
          if (this) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              if (arguments.length < 1) {
                const _TypeError = TypeError;
                const typeError = new TypeError(
                  "Failed to execute 'get' on 'URLSearchParams': 1 argument required, but only " +
                    arguments.length +
                    " present.",
                );
                throw typeError;
              } else {
                const items = [];
                items.push(
                  URLSearchParams(14380).USVString(arguments[0], {
                    context: "Failed to execute 'get' on 'URLSearchParams': parameter 1",
                  }),
                );
                const tmp6 = self[URLSearchParams(undefined, 14372).implSymbol];
                const get = tmp6.get;
                const items1 = [];
                HermesBuiltin.arraySpread(items, 0);
                return HermesBuiltin.apply(items1, tmp6);
              }
            }
          }
          const typeError1 = new TypeError("Illegal invocation");
          throw typeError1;
        },
      },
      {
        key: "getAll",
        value: function getAll(arg0) {
          const self = this;
          if (this) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              if (arguments.length < 1) {
                const _TypeError = TypeError;
                const typeError = new TypeError(
                  "Failed to execute 'getAll' on 'URLSearchParams': 1 argument required, but only " +
                    arguments.length +
                    " present.",
                );
                throw typeError;
              } else {
                const items = [];
                items.push(
                  URLSearchParams(14380).USVString(arguments[0], {
                    context: "Failed to execute 'getAll' on 'URLSearchParams': parameter 1",
                  }),
                );
                obj = URLSearchParams(14380);
                const tmp11 = self[URLSearchParams(undefined, 14372).implSymbol];
                const getAll = tmp11.getAll;
                const items1 = [];
                HermesBuiltin.arraySpread(items, 0);
                return URLSearchParams(14372).tryWrapperForImpl(HermesBuiltin.apply(items1, tmp11));
              }
            }
          }
          const typeError1 = new TypeError("Illegal invocation");
          throw typeError1;
        },
      },
      {
        key: "has",
        value: function has(arg0) {
          const self = this;
          if (this) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              if (arguments.length < 1) {
                const _TypeError = TypeError;
                const typeError = new TypeError(
                  "Failed to execute 'has' on 'URLSearchParams': 1 argument required, but only " +
                    arguments.length +
                    " present.",
                );
                throw typeError;
              } else {
                const items = [];
                items.push(
                  URLSearchParams(14380).USVString(arguments[0], {
                    context: "Failed to execute 'has' on 'URLSearchParams': parameter 1",
                  }),
                );
                const tmp6 = self[URLSearchParams(undefined, 14372).implSymbol];
                const has = tmp6.has;
                const items1 = [];
                HermesBuiltin.arraySpread(items, 0);
                return HermesBuiltin.apply(items1, tmp6);
              }
            }
          }
          const typeError1 = new TypeError("Illegal invocation");
          throw typeError1;
        },
      },
      {
        key: "set",
        value: function set(arg0, arg1) {
          const self = this;
          if (this) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              if (arguments.length < 2) {
                const _TypeError = TypeError;
                const typeError = new TypeError(
                  "Failed to execute 'set' on 'URLSearchParams': 2 arguments required, but only " +
                    arguments.length +
                    " present.",
                );
                throw typeError;
              } else {
                const items = [];
                items.push(
                  URLSearchParams(14380).USVString(arguments[0], {
                    context: "Failed to execute 'set' on 'URLSearchParams': parameter 1",
                  }),
                );
                obj = URLSearchParams(14380);
                items.push(
                  URLSearchParams(14380).USVString(arguments[1], {
                    context: "Failed to execute 'set' on 'URLSearchParams': parameter 2",
                  }),
                );
                const tmp12 = self[URLSearchParams(undefined, 14372).implSymbol];
                const items1 = [];
                HermesBuiltin.arraySpread(items, 0);
                return HermesBuiltin.apply(items1, tmp12);
              }
            }
          }
          const typeError1 = new TypeError("Illegal invocation");
          throw typeError1;
        },
      },
      {
        key: "sort",
        value: function sort() {
          const self = this;
          if (this) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              return self[URLSearchParams(undefined, 14372).implSymbol].sort();
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
          if (this) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              return self[URLSearchParams(undefined, 14372).implSymbol].toString();
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
      },
      {
        key: "keys",
        value: function keys() {
          const self = this;
          if (this) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              const _exports2 = tmp.exports;
              return _exports2.createDefaultIterator(self, "key");
            }
            tmp = module;
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
      },
      {
        key: "values",
        value: function values() {
          const self = this;
          if (this) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              const _exports2 = tmp.exports;
              return _exports2.createDefaultIterator(self, "value");
            }
            tmp = module;
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
      },
      {
        key: "entries",
        value: function entries() {
          const self = this;
          if (this) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              const _exports2 = tmp.exports;
              return _exports2.createDefaultIterator(self, "key+value");
            }
            tmp = module;
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
      },
      {
        key: "forEach",
        value: function forEach(call) {
          const self = this;
          if (this) {
            const _exports = module.exports;
            if (_exports.is(self)) {
              if (arguments.length < 1) {
                const _TypeError2 = TypeError;
                const typeError = new TypeError(
                  "Failed to execute 'forEach' on 'iterable': 1 argument required, but only 0 present.",
                );
                throw typeError;
              } else if (typeof call !== "function") {
                const _TypeError = TypeError;
                const typeError1 = new TypeError(
                  "Failed to execute 'forEach' on 'iterable': The callback provided as parameter 1 is not a function.",
                );
                throw typeError1;
              } else {
                const tmp23 = arguments[1];
                const _Array2 = Array;
                let arr = Array.from(self[URLSearchParams(undefined, 14372).implSymbol]);
                let num2 = 0;
                let tmp11 = arr;
                if (0 < arr.length) {
                  do {
                    arr = tmp11[num2];
                    let tmp3 = URLSearchParams;
                    let tmp6 = _slicedToArray(arr.map(URLSearchParams(14372).tryWrapperForImpl), 2);
                    [tmp7, tmp8] = tmp6;
                    call = call.call;
                    if (typeof call === "unknown") {
                      let tmp10 = call(tmp8, tmp7, self);
                    } else {
                      let callResult = call(tmp23, tmp8, tmp7, self);
                    }
                    let _Array = Array;
                    arr = Array.from(self[tmp3(undefined, 14372).implSymbol]);
                    num2 = num2 + 1;
                    tmp11 = arr;
                  } while (num2 < arr.length);
                }
              }
            }
          }
          const typeError2 = new TypeError("Illegal invocation");
          throw typeError2;
        },
      },
    ];
    let tmp = _createClass(URLSearchParams, items);
    obj = {
      append: { enumerable: true },
      delete: { enumerable: true },
      get: { enumerable: true },
      getAll: { enumerable: true },
      has: { enumerable: true },
      set: { enumerable: true },
      sort: { enumerable: true },
      toString: { enumerable: true },
      keys: { enumerable: true },
      values: { enumerable: true },
      entries: { enumerable: true },
      forEach: { enumerable: true },
    };
    obj[Symbol.toStringTag] = { value: "URLSearchParams", configurable: true };
    obj[Symbol.iterator] = { value: tmp.prototype.entries, configurable: true, writable: true };
    Object.defineProperties(tmp.prototype, obj);
    if (undefined === arg0[URLSearchParams(undefined, 14372).ctorRegistrySymbol]) {
      let _Object = Object;
      const ctorRegistrySymbol = tmp3(14372).ctorRegistrySymbol;
      class URLSearchParams {
        constructor() {
          tmp = closure_3(this, URLSearchParams);
          first = arguments[0];
          str = "";
          if (undefined !== first) {
            tmp54 = closure_0;
            tmp55 = closure_0;
            tmp56 = c2;
            tmp57 = c2;
            obj7 = closure_0(c2[3]);
            if (obj7.isObject(first)) {
              tmp5 = globalThis;
              _Symbol = Symbol;
              if (undefined !== first[Symbol.iterator]) {
                tmp25 = tmp54;
                tmp26 = tmp56;
                tmp55Result = tmp55(tmp57[3]);
                if (tmp55Result.isObject(first)) {
                  items = [];
                  tmp31 = first;
                  tmp32 = first;
                  str = items;
                  for (const item10081 of first) {
                    tmp34 = closure_0;
                    tmp35 = closure_0;
                    tmp36 = c2;
                    tmp37 = c2;
                    tmp33 = item10081;
                    obj5 = closure_0(c2[3]);
                    if (obj5.isObject(item10081)) {
                      items1 = [];
                      tmp42 = tmp33;
                      tmp43 = item10081;
                      for (const item10103 of item10081) {
                        tmp44 = closure_0;
                        tmp45 = closure_0;
                        tmp46 = c2;
                        tmp47 = c2;
                        obj6 = closure_0(c2[5]);
                        tmp48 = items1;
                        arr = items1.push(
                          obj6.USVString(item10103, {
                            context: "Failed to construct 'URLSearchParams': parameter 1 sequence's element's element",
                          }),
                        );
                        continue;
                      }
                      tmp50 = items1;
                      tmp51 = items1;
                      arr1 = items.push(items1);
                      continue;
                    } else {
                      _TypeError3 = TypeError;
                      tmp38 = new.target;
                      str4 =
                        "Failed to construct 'URLSearchParams': parameter 1 sequence's element is not an iterable object.";
                      tmp39 = new.target;
                      typeError = new TypeError(
                        "Failed to construct 'URLSearchParams': parameter 1 sequence's element is not an iterable object.",
                      );
                      tmp41 = typeError;
                      throw typeError;
                    }
                  }
                } else {
                  _TypeError2 = TypeError;
                  tmp27 = new.target;
                  str3 = "Failed to construct 'URLSearchParams': parameter 1 sequence is not an iterable object.";
                  tmp28 = new.target;
                  typeError1 = new TypeError(
                    "Failed to construct 'URLSearchParams': parameter 1 sequence is not an iterable object.",
                  );
                  tmp30 = typeError1;
                  throw typeError1;
                }
              } else {
                tmp58 = tmp54;
                tmp59 = tmp56;
                tmp55Result1 = tmp55(tmp57[3]);
                if (tmp55Result1.isObject(first)) {
                  _Object = Object;
                  tmp10 = null;
                  obj = Object.create(null);
                  _Reflect = Reflect;
                  ownKeysResult = Reflect.ownKeys(first);
                  tmp13 = ownKeysResult;
                  tmp14 = ownKeysResult;
                  str = obj;
                  for (const item10039 of ownKeysResult) {
                    tmp15 = item10039;
                    _Object2 = Object;
                    ownPropertyDescriptor = Object.getOwnPropertyDescriptor(first, item10039);
                    if (!ownPropertyDescriptor) {
                    } else {
                      tmp18 = ownPropertyDescriptor;
                      if (!tmp17.enumerable) {
                      } else {
                        tmp19 = item10039;
                        tmp20 = closure_0;
                        tmp21 = closure_0;
                        tmp22 = c2;
                        tmp23 = c2;
                        obj2 = closure_0(c2[5]);
                        USVStringResult = obj2.USVString(tmp15, {
                          context: "Failed to construct 'URLSearchParams': parameter 1 record's key",
                        });
                        obj3 = closure_0(c2[5]);
                        obj[USVStringResult] = obj3.USVString(first[tmp15], {
                          context: "Failed to construct 'URLSearchParams': parameter 1 record's value",
                        });
                      }
                    }
                    continue;
                  }
                } else {
                  _TypeError = TypeError;
                  tmp6 = new.target;
                  str2 = "Failed to construct 'URLSearchParams': parameter 1 record is not an object.";
                  tmp7 = new.target;
                  typeError2 = new TypeError(
                    "Failed to construct 'URLSearchParams': parameter 1 record is not an object.",
                  );
                  tmp9 = typeError2;
                  throw typeError2;
                }
              }
            } else {
              tmp3 = tmp54;
              tmp4 = tmp56;
              tmp55Result2 = tmp55(tmp57[5]);
              str = tmp55Result2.USVString(first, { context: "Failed to construct 'URLSearchParams': parameter 1" });
            }
          }
          items2 = [];
          arr2 = items2.push(str);
          return closure_7.setup(Object.create(this.constructor.prototype), closure_0, items2);
        }
      }
    }
    arg0[URLSearchParams(undefined, 14372).ctorRegistrySymbol].URLSearchParams = tmp;
    Object.defineProperty(arg0, "URLSearchParams", { configurable: true, writable: true, value: tmp });
  },
};

export default exports;
