// _runtime/metro/09221__.js
import _mod9219 from "09219__.js";
import _mod9222 from "09222__.js";

const self = this;
function toDotPath(path) {
  const items = [];
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
      let obj = /[^\w$]/;
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
        const obj = {};
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
        fn = function o(message) {
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
          let items1 = fieldErrors[tmp2.path[0]];
          if (!items1) {
            items1 = [];
          }
          fieldErrors[tmp2.path[0]] = items1;
          let arr3 = fieldErrors[tmp2.path[0]];
          let arr = arr3.push(fn(tmp2));
        } else {
          let arr2 = formErrors.push(fn(tmp2));
        }
        continue;
      }
      return { formErrors, fieldErrors };
    };
    exports.formatError = function formatError(arg0, arg1) {
      let fn = arg1;
      if (arg1 === undefined) {
        fn = function o(message) {
          return message.message;
        };
      }
      let obj = { _errors: [] };
      function processError(arg0) {
        const iter = arg0.issues[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          if ("invalid_union" === nextResult.code) {
            if (tmp2.errors.length) {
              let errors = tmp2.errors;
              let mapped = errors.map((issues) => {
                processError({ issues });
              });
              continue;
            }
          }
          if ("invalid_key" === tmp2.code) {
            let obj2 = { issues: null };
            obj2.issues = tmp2.issues;
            let tmp34 = processError(obj2);
          } else if ("invalid_element" === tmp2.code) {
            let obj3 = { issues: null };
            obj3.issues = tmp2.issues;
            let tmp31 = processError(obj3);
          } else if (0 === tmp2.path.length) {
            let _errors = obj._errors;
            let arr = _errors.push(fn(tmp2));
          } else {
            let tmp21 = obj;
            let num = 0;
            if (0 < tmp2.path.length) {
              do {
                let tmp7 = tmp2.path[num];
                if (num === tmp2.path.length - 1) {
                  let tmp13 = tmp21[tmp7];
                  if (!tmp13) {
                    let obj4 = { _errors: [] };
                    tmp13 = obj4;
                  }
                  tmp21[tmp7] = tmp13;
                  let _errors1 = tmp21[tmp7]._errors;
                  let arr2 = _errors1.push(fn(tmp2));
                } else {
                  let tmp10 = tmp21[tmp7];
                  if (!tmp10) {
                    obj = { _errors: [] };
                    tmp10 = obj;
                  }
                  tmp21[tmp7] = tmp10;
                }
                tmp21 = tmp21[tmp7];
                sum = num + 1;
                num = sum;
              } while (sum < tmp2.path.length);
            }
          }
        }
      }
      processError(arg0);
      return obj;
    };
    exports.treeifyError = function treeifyError(arg0) {
      let fn = arg1;
      if (arg1 === undefined) {
        fn = function o(message) {
          return message.message;
        };
      }
      let obj = { errors: [] };
      function processError(arg0) {
        let items = arg1;
        if (arg1 === undefined) {
          items = [];
        }
        let properties;
        items = undefined;
        function _loop(iter) {
          if ("invalid_union" === iter.code) {
            if (iter.errors.length) {
              const errors = iter.errors;
              const mapped = errors.map((issues) => {
                items({ issues }, iter.path);
              });
            }
          }
          if ("invalid_key" === iter.code) {
            const obj2 = { issues: iter.issues };
            processError(obj2, iter.path);
          } else if ("invalid_element" === iter.code) {
            const obj3 = { issues: iter.issues };
            processError(obj3, iter.path);
          } else {
            const items1 = [];
            HermesBuiltin.arraySpread(iter.path, HermesBuiltin.arraySpread(items, 0));
            if (0 === items1.length) {
              const errors1 = obj.errors;
              errors1.push(fn(iter));
              return 1;
            } else {
              let tmp10 = obj;
              let num = 0;
              if (0 < items1.length) {
                do {
                  let tmp = items1[num];
                  let diff = items1.length - 1;
                  if (typeof tmp === "string") {
                    if (tmp10.properties == null) {
                      tmp10.properties = {};
                    }
                    properties = tmp10.properties;
                    if (properties[tmp] == null) {
                      let obj4 = { errors: [] };
                      properties[tmp] = obj4;
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
                    let arr2 = errors2.push(fn(iter));
                  }
                  num = num + 1;
                  tmp10 = tmp6;
                } while (num < items1.length);
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
    exports.toDotPath = toDotPath;
    exports.prettifyError = function prettifyError(issues) {
      const items = [];
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
        let length;
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
    let closure_2 = fn(_mod9222);
    function initializer(_zod, value) {
      const message = _zod;
      _zod.name = "$ZodError";
      Object.defineProperty(_zod, "_zod", { value: _zod._zod, enumerable: false });
      Object.defineProperty(_zod, "issues", { value, enumerable: false });
      _zod.message = JSON.stringify(value, closure_2.jsonStringifyReplacer, 2);
      Object.defineProperty(_zod, "toString", {
        value() {
          return message.message;
        },
        enumerable: false,
      });
    }
    exports.$ZodError = _mod9219.$constructor("$ZodError", initializer);
    let obj = { Parent: null };
    const _Error = Error;
    obj.Parent = Error;
    exports.$ZodRealError = _mod9219.$constructor("$ZodError", initializer, obj);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
