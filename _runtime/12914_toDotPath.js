// _runtime/12914_toDotPath.js
import _isNativeReflectConstruct from "12912__isNativeReflectConstruct.js";
import mergeDefs from "12915_mergeDefs.js";

const self = this;
function toDotPath(path) {
  const items = [];
  const mapped = path.map((obj) => {
    let key = obj;
    if (typeof obj === "object") {
      key = obj.key;
    }
    return key;
  });
  const iter = mapped[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (typeof nextResult === "number") {
      let tmp11 = nextResult;
      let _HermesInternal3 = HermesInternal;
      let arr = items.push("[" + tmp3 + "]");
    } else {
      let tmp13 = nextResult;
      if (typeof tmp3 === "symbol") {
        let _JSON2 = JSON;
        let _String = String;
        let tmp9 = nextResult;
        let _HermesInternal2 = HermesInternal;
        arr = items.push("[" + JSON.stringify(String(tmp3)) + "]");
      } else {
        let obj = /[^\w$]/;
        let tmp14 = nextResult;
        if (obj.test(tmp3)) {
          let _JSON = JSON;
          let tmp7 = nextResult;
          let _HermesInternal = HermesInternal;
          let arr1 = items.push("[" + JSON.stringify(tmp3) + "]");
        } else {
          if (items.length) {
            let arr2 = items.push(".");
          }
          let tmp5 = nextResult;
          let arr3 = items.push(tmp3);
        }
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
            let tmp8 = key10009;
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp5 = self2;
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
              let tmp4 = hasOwnPropertyResult;
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
    exports.flattenError = function flattenError(closure_0, arg1) {
      let fn = arg1;
      if (arg1 === undefined) {
        fn = function o(message) {
          return message.message;
        };
      }
      const fieldErrors = {};
      const formErrors = [];
      const iter = closure_0.issues[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        if (nextResult.path.length > 0) {
          let tmp5 = nextResult;
          let items1 = fieldErrors[tmp2.path[0]];
          if (!items1) {
            items1 = [];
          }
          fieldErrors[tmp2.path[0]] = items1;
          let tmp6 = nextResult;
          let arr3 = fieldErrors[tmp2.path[0]];
          let arr = arr3.push(fn(tmp2));
        } else {
          let tmp3 = nextResult;
          arr = formErrors.push(fn(tmp2));
        }
        continue;
      }
      return { formErrors, fieldErrors };
    };
    exports.formatError = function formatError(closure_0, arg1) {
      let fn = arg1;
      if (arg1 === undefined) {
        fn = function o(message) {
          return message.message;
        };
      }
      let obj = { _errors: [] };
      function processError(closure_0) {
        const iter = closure_0.issues[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          if ("invalid_union" === nextResult.code) {
            let tmp3 = nextResult;
            if (tmp2.errors.length) {
              let tmp35 = nextResult;
              let errors = tmp2.errors;
              let mapped = errors.map((issues) => {
                callback({ issues });
              });
              continue;
            }
          }
          let tmp4 = nextResult;
          if ("invalid_key" === tmp2.code) {
            let tmp32 = processError;
            obj = { issues: null };
            let tmp33 = nextResult;
            obj[0] = tmp2.issues;
            let tmp34 = processError(obj);
          } else {
            let tmp37 = nextResult;
            if ("invalid_element" === tmp2.code) {
              let tmp29 = processError;
              obj = { issues: null };
              let tmp30 = nextResult;
              obj[0] = tmp2.issues;
              let tmp31 = processError(obj);
            } else {
              let tmp38 = nextResult;
              if (0 === tmp2.path.length) {
                let tmp25 = obj;
                let _errors = obj._errors;
                let tmp26 = fn;
                let tmp27 = nextResult;
                let arr = _errors.push(fn(tmp2));
              } else {
                let tmp21 = obj;
                let num = 0;
                let tmp39 = nextResult;
                if (0 < tmp2.path.length) {
                  do {
                    let tmp5 = nextResult;
                    let tmp6 = num;
                    let tmp7 = tmp2.path[num];
                    if (num === tmp2.path.length - 1) {
                      let tmp11 = tmp21;
                      let tmp12 = tmp7;
                      let tmp13 = tmp21[tmp7];
                      if (!tmp13) {
                        obj1 = { _errors: null };
                        obj1[0] = [];
                        tmp13 = obj1;
                      }
                      tmp21[tmp7] = tmp13;
                      let tmp14 = tmp21;
                      let tmp15 = tmp7;
                      let _errors1 = tmp21[tmp7]._errors;
                      let tmp16 = fn;
                      let tmp17 = nextResult;
                      arr = _errors1.push(fn(tmp2));
                    } else {
                      let tmp8 = tmp21;
                      let tmp9 = tmp7;
                      let tmp10 = tmp21[tmp7];
                      if (!tmp10) {
                        obj = { _errors: null };
                        obj[0] = [];
                        tmp10 = obj;
                      }
                      tmp21[tmp7] = tmp10;
                    }
                    let tmp19 = tmp21;
                    let tmp20 = tmp7;
                    tmp21 = tmp21[tmp7];
                    let tmp22 = num;
                    sum = num + 1;
                    num = sum;
                    let tmp24 = nextResult;
                  } while (sum < tmp2.path.length);
                }
              }
            }
          }
        }
      }
      processError(closure_0);
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
        c1 = undefined;
        c2 = undefined;
        function _loop(iter) {
          closure_0 = iter;
          if ("invalid_union" === iter.code) {
            if (iter.errors.length) {
              const errors = iter.errors;
              const mapped = errors.map((issues) => {
                items({ issues }, iter.path);
              });
            }
          }
          if ("invalid_key" === iter.code) {
            obj = { issues: null };
            obj[0] = iter.issues;
            _undefined2(obj, iter.path);
          } else if ("invalid_element" === iter.code) {
            obj = { issues: null };
            obj[0] = iter.issues;
            _undefined2(obj, iter.path);
          } else {
            items = [];
            HermesBuiltin.arraySpread(iter.path, HermesBuiltin.arraySpread(closure_0, 0));
            if (0 === items.length) {
              const errors1 = _undefined.errors;
              errors1.push(items(iter));
              return 1;
            } else {
              let tmp10 = _undefined;
              let num = 0;
              if (0 < items.length) {
                do {
                  let tmp = items[num];
                  let tmp3 = num;
                  let tmp4 = tmp10;
                  let diff = items.length - 1;
                  if (typeof tmp === "string") {
                    if (tmp10.properties == null) {
                      tmp10.properties = {};
                    }
                    let properties = tmp10.properties;
                    if (properties[tmp] == null) {
                      let tmp7 = properties;
                      obj1 = { errors: null };
                      obj1[0] = [];
                      properties[tmp] = obj1;
                    }
                    let tmp6 = tmp10.properties[tmp];
                  } else {
                    if (tmp10.items == null) {
                      tmp10.items = [];
                    }
                    items = tmp10.items;
                    if (items[tmp] == null) {
                      let tmp5 = items;
                      obj = { errors: null };
                      obj[0] = [];
                      items[tmp] = obj;
                    }
                    tmp6 = tmp10.items[tmp];
                  }
                  if (num === diff) {
                    let errors2 = tmp6.errors;
                    let tmp8 = items;
                    let arr = errors2.push(items(iter));
                  }
                  num = num + 1;
                  tmp10 = tmp6;
                } while (num < items.length);
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
          let tmp6 = toDotPath;
          let tmp7 = nextResult;
          let _HermesInternal2 = HermesInternal;
          arr = items.push("  \u2192 at " + toDotPath(tmp3.path));
        }
        continue;
      }
      return items.join("\n");
    };
    let closure_2 = fn(mergeDefs);
    function initializer(_zod, value) {
      closure_0 = _zod;
      _zod.name = "$ZodError";
      let obj = { value: _zod._zod, enumerable: false };
      Object.defineProperty(_zod, "_zod", obj);
      obj = { value, enumerable: false };
      Object.defineProperty(_zod, "issues", obj);
      _zod.message = JSON.stringify(value, obj.jsonStringifyReplacer, 2);
      obj = {
        value() {
          return message.message;
        },
        enumerable: false,
      };
      Object.defineProperty(_zod, "toString", obj);
    }
    exports.$ZodError = _isNativeReflectConstruct.$constructor("$ZodError", initializer);
    let obj = { Parent: null };
    const _Error = Error;
    obj[0] = Error;
    exports.$ZodRealError = _isNativeReflectConstruct.$constructor("$ZodError", initializer, obj);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
