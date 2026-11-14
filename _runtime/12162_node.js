// === Module 12162: node ===

// Module 12162 (node)
import _mod12159 from "module_12159" /* 12159 */;
import _mod12160 from "module_12160" /* 12160 */;

let self = this;
function node(arg0, key10009, fn) {
  hasOwnProperty = Object.prototype.hasOwnProperty;
  const call = hasOwnProperty.call;
  if (!(typeof call === "unknown" ? hasOwnProperty(key10009) : call(arg0, key10009))) {
    if ("__proto__" === key10009) {
      const _Object = Object;
      obj = { value: fn(), writable: true, enumerable: true, configurable: true };
      Object.defineProperty(arg0, key10009, obj);
    } else {
      arg0[key10009] = fn();
    }
  }
  return arg0[key10009];
}
function toDotPath(path) {
  items = [];
  const mapped = path.map((key) => {
    if (typeof key === "object") {
      key = key.key;
    }
    return key;
  });
  const iter = mapped[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (typeof nextResult === "number") {
      let _HermesInternal3 = HermesInternal;
      let arr = items.push("[" + tmp3 + "]");
    } else if (typeof tmp3 === "symbol") {
      let _JSON2 = JSON;
      let _String = String;
      let _HermesInternal2 = HermesInternal;
      let arr6 = items.push("[" + JSON.stringify(String(tmp3)) + "]");
    } else {
      obj = /[^\w$]/;
      if (obj.test(tmp3)) {
        let _JSON = JSON;
        let _HermesInternal = HermesInternal;
        let arr7 = items.push("[" + JSON.stringify(tmp3) + "]");
      } else {
        if (items.length) {
          let arr8 = items.push(".");
        }
        let arr9 = items.push(tmp3);
      }
    }
    continue;
  }
  return items.join("");
}
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    exports.$ZodError = undefined;
    exports.$ZodRealError = undefined;
    exports.flattenError = function flattenError(arg0, arg1) {
      let fn = arg1;
      if (arg1 === undefined) {
        fn = function t(message) {
          return message.message;
        };
      }
      const fieldErrors = {};
      const formErrors = [];
      const iter = arg0.issues[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        if (nextResult.path.length > 0) {
          let arr2 = node(fieldErrors, tmp2.path[0], () => []);
          let arr = arr2.push(fn(tmp2));
        } else {
          let arr4 = formErrors.push(fn(tmp2));
        }
        continue;
      }
      return { formErrors, fieldErrors };
    };
    exports.formatError = function formatError(arg0, arg1) {
      let fn = arg1;
      if (arg1 === undefined) {
        fn = function t(message) {
          return message.message;
        };
      }
      obj = { _errors: [] };
      function processError(arg0) {
        items = arg1;
        if (arg1 === undefined) {
          items = [];
        }
        function _loop(iter) {
          let sum;
          if ("invalid_union" === iter.code) {
            if (iter.errors.length) {
              const errors = iter.errors;
              const mapped = errors.map((issues) => {
                items = [...closure_0.path];
                processError({ issues }, items);
              });
            }
          }
          if ("invalid_key" === iter.code) {
            const obj2 = { issues: iter.issues };
            items = [];
            HermesBuiltin.arraySpread(iter.path, HermesBuiltin.arraySpread(iter, 0));
            processError(obj2, items);
          } else if ("invalid_element" === iter.code) {
            const obj3 = { issues: iter.issues };
            const items1 = [];
            HermesBuiltin.arraySpread(iter.path, HermesBuiltin.arraySpread(iter, 0));
            processError(obj3, items1);
          } else {
            const items2 = [];
            HermesBuiltin.arraySpread(iter.path, HermesBuiltin.arraySpread(iter, 0));
            if (0 === items2.length) {
              _errors = _errors._errors;
              _errors.push(items(iter));
            } else {
              let tmp13 = _errors;
              let num = 0;
              if (0 < items2.length) {
                do {
                  let tmp = items2[num];
                  let diff = items2.length - 1;
                  if ("_errors" !== tmp) {
                    let _Object = Object;
                    hasOwnProperty = Object.prototype.hasOwnProperty;
                    let call = hasOwnProperty.call;
                    if (!(typeof call === "unknown" ? hasOwnProperty(tmp) : call(tmp13, tmp))) {
                      let _Object2 = Object;
                      obj = { value: null, enumerable: true, writable: true, configurable: true };
                      let obj4 = { _errors: [] };
                      obj.value = obj4;
                      let definePropertyResult = Object.defineProperty(tmp13, tmp, obj);
                    }
                    let tmp10 = tmp13[tmp];
                    if (num === diff) {
                      let _errors1 = tmp10._errors;
                      let arr2 = _errors1.push(items(iter));
                    }
                    sum = num + 1;
                    let tmp8 = tmp10;
                  } else {
                    if (num === diff) {
                      let _errors2 = tmp13._errors;
                      let arr3 = _errors2.push(items(iter));
                    }
                    sum = num + 1;
                    tmp8 = tmp13;
                  }
                  num = sum;
                  tmp13 = tmp8;
                } while (sum < items2.length);
              }
            }
          }
        }
        const iter = arg0.issues[Symbol.iterator]();
        while (iter !== undefined) {
          let _loopResult = _loop(iter.next());
          continue;
        }
      }
      processError(arg0);
      return obj;
    };
    exports.treeifyError = function treeifyError(arg0) {
      let fn = arg1;
      if (arg1 === undefined) {
        fn = function t(message) {
          return message.message;
        };
      }
      obj = { errors: [] };
      function processError(arg0) {
        items = arg1;
        if (arg1 === undefined) {
          items = [];
        }
        c1 = undefined;
        function _loop2(iter) {
          if ("invalid_union" === iter.code) {
            if (iter.errors.length) {
              const errors = iter.errors;
              const mapped = errors.map((issues) => {
                items = [...closure_0.path];
                processError({ issues }, items);
              });
            }
          }
          if ("invalid_key" === iter.code) {
            const obj2 = { issues: iter.issues };
            const items1 = [];
            HermesBuiltin.arraySpread(iter.path, HermesBuiltin.arraySpread(iter, 0));
            processError(obj2, items1);
          } else if ("invalid_element" === iter.code) {
            const obj3 = { issues: iter.issues };
            const items2 = [];
            HermesBuiltin.arraySpread(iter.path, HermesBuiltin.arraySpread(iter, 0));
            processError(obj3, items2);
          } else {
            const items3 = [];
            HermesBuiltin.arraySpread(iter.path, HermesBuiltin.arraySpread(iter, 0));
            if (0 === items3.length) {
              const errors1 = _undefined.errors;
              errors1.push(items(iter));
              return 1;
            } else {
              let tmp10 = _undefined;
              let num = 0;
              if (0 < items3.length) {
                do {
                  let tmp = items3[num];
                  let diff = items3.length - 1;
                  if (typeof tmp === "string") {
                    if (tmp10.properties == null) {
                      tmp10.properties = {};
                    }
                    let _Object = Object;
                    hasOwnProperty = Object.prototype.hasOwnProperty;
                    let call = hasOwnProperty.call;
                    let properties = tmp10.properties;
                    if (!(typeof call === "unknown" ? hasOwnProperty(tmp) : call(properties, tmp))) {
                      let _Object2 = Object;
                      let obj4 = { value: null, enumerable: true, writable: true, configurable: true };
                      let obj5 = { errors: [] };
                      obj4.value = obj5;
                      let definePropertyResult = Object.defineProperty(tmp10.properties, tmp, obj4);
                    }
                    let tmp6 = tmp10.properties[tmp];
                  } else {
                    if (tmp10.items == null) {
                      tmp10.items = [];
                    }
                    items = tmp10.items;
                    if (items[tmp] == null) {
                      obj = { errors: [] };
                      items[tmp] = obj;
                    }
                    tmp6 = tmp10.items[tmp];
                  }
                  if (num === diff) {
                    let errors2 = tmp6.errors;
                    let arr2 = errors2.push(items(iter));
                  }
                  num = num + 1;
                  tmp10 = tmp6;
                } while (num < items3.length);
              }
            }
          }
        }
        const iter = arg0.issues[Symbol.iterator]();
        while (iter !== undefined) {
          let _loop2Result = _loop2(iter.next());
          continue;
        }
      }
      processError(arg0);
      return obj;
    };
    exports.toDotPath = toDotPath;
    exports.prettifyError = function prettifyError(issues) {
      items = [];
      const items1 = [...issues.issues];
      const sorted = items1.sort((path, path2) => {
        path = path.path;
        if (path == null) {
          path = [];
        }
        let path1 = path2.path;
        if (path1 == null) {
          path1 = [];
        }
        return path.length - path1.length;
      });
      const iter = sorted[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let _HermesInternal = HermesInternal;
        let tmp3 = nextResult;
        let arr = items.push("\u2716 " + nextResult.message);
        let path = nextResult.path;
        length = undefined;
        if (path != null) {
          length = path.length;
        }
        if (length) {
          let _HermesInternal2 = HermesInternal;
          let arr2 = items.push("  \u2192 at " + toDotPath(tmp3.path));
        }
        continue;
      }
      return items.join("\n");
    };
    let closure_3 = fn(_mod12160);
    let obj = {
      get: function _getMessage() {
            const _zod = this._zod;
            if (_zod.message == null) {
              const _JSON = JSON;
              _zod.message = JSON.stringify(_zod.def, closure_3.jsonStringifyReplacer, 2);
            }
            return _zod.message;
          },
      set: function _setMessage(message) {
            this._zod.message = message;
          },
      enumerable: true,
      configurable: true
    };
    let closure_5 = { value: "Path", enumerable: true };
    const _WeakSet = WeakSet;
    const _Object4 = Object;
    let items = [Object.prototype, ];
    const _Error = Error;
    items[1] = Error.prototype;
    const weakSet = new WeakSet(items);
    function initializer(arg0, value) {
      arg0.name = "$ZodError";
      closure_5.value = value;
      Object.defineProperty(arg0, "issues", closure_5);
      closure_5.value = undefined;
      Object.defineProperty(arg0, "message", weakSet);
      const prototypeOf = Object.getPrototypeOf(arg0);
      if (!weakSet.has(prototypeOf)) {
        weakSet.add(prototypeOf);
        const _Object = Object;
        const obj2 = {
          configurable: true,
          enumerable: false,
          get() {
              const self = this;
              value = function value() {
                return self.message;
              };
              Object.defineProperty(this, "toString", { value, configurable: true, writable: true });
              return value;
            },
          set(value) {
              Object.defineProperty(this, "toString", { value, configurable: true, writable: true });
            }
        };
        Object.defineProperty(prototypeOf, "toString", obj2);
      }
    }
    exports.$ZodError = _mod12159.$constructor("$ZodError", initializer);
    let obj2 = { Parent: null };
    const _Error2 = Error;
    obj2.Parent = Error;
    exports.$ZodRealError = _mod12159.$constructor("$ZodError", initializer, undefined, obj2);
    (() => {
      let tmp = exports;
      const ownPropertyNames = Object.getOwnPropertyNames(exports);
      let num = 0;
      if (0 < ownPropertyNames.length) {
        const _Object = Object;
        const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(exports, ownPropertyNames[num]);
        if (ownPropertyDescriptor) {
          if (ownPropertyDescriptor.get) {
            if (ownPropertyDescriptor.configurable) {
              try {
                value = ownPropertyDescriptor.get();
                if (undefined !== value) {
                  const _Object2 = Object;
                  obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
                  Object.defineProperty(exports, ownPropertyNames[num], obj);
                }
              } catch (err) {
              }
            }
          }
        }
        num = num + 1;
        tmp = exports;
      }
      const frozen = Object.freeze(tmp);
    })();
  } else {
    let _Object2 = Object;
  }
} else {
  let _Object = Object;
}