// === Module 8641: $ZodError ===

// Module 8641 ($ZodError)
import NEVER from "NEVER" /* 8639 */;
import captureStackTrace2 from "captureStackTrace" /* 8642 */;

let hasOwnProperty, key;

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
let tmp = this && self.__createBinding;
if (!tmp) {
  let tmp2 = globalThis;
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    closure_0 = __esModule;
    closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    let tmp3 = ownPropertyDescriptor;
    if (tmp3) {
      let tmp4;
      if ("get" in ownPropertyDescriptor) {
        tmp4 = !__esModule.__esModule;
      } else {
        tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
      }
      tmp3 = !tmp4;
    }
    if (!tmp3) {
      ownPropertyDescriptor = { enumerable: true, get };
      const obj = { enumerable: true, get };
    }
    Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let closure_0 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_1 = tmp3;
let tmp5 = self && self.__importStar || ((__esModule) => {
  const tmp = __esModule;
  if (tmp) {
    if (__esModule.__esModule) {
      return __esModule;
    }
  }
  const obj = {};
  if (null != __esModule) {
    for (const key10009 in __esModule) {
      let callResult = "default" !== key10009;
      if (callResult) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(__esModule, key10009);
      }
      if (!callResult) {
        continue;
      } else {
        let tmp6 = closure_0(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_1(obj, __esModule);
  return obj;
});
const captureStackTrace = tmp5(captureStackTrace2);
function initializer(_zod, value) {
  closure_0 = _zod;
  _zod.name = "$ZodError";
  const obj = { value: _zod._zod, enumerable: false };
  Object.defineProperty(_zod, "_zod", obj);
  const obj2 = { value, enumerable: false };
  Object.defineProperty(_zod, "issues", obj2);
  _zod.message = JSON.stringify(value, captureStackTrace.jsonStringifyReplacer, 2);
  const obj3 = {
    value() {
      return message.message;
    },
    enumerable: false
  };
  Object.defineProperty(_zod, "toString", obj3);
}
let obj = { Parent: Error };

export const flattenError = function flattenError(prototype, arg1) {
  let fn = arg1;
  if (arg1 === undefined) {
    fn = function o(message) {
      return message.message;
    };
  }
  const fieldErrors = {};
  const formErrors = [];
  const iter = prototype.issues[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (nextResult.path.length > 0) {
      let items1 = fieldErrors[tmp2.path[0]];
      let first = tmp2.path[0];
      if (!items1) {
        items1 = [];
      }
      fieldErrors[first] = items1;
      let arr3 = fieldErrors[tmp2.path[0]];
      let arr = arr3.push(fn(tmp2));
    } else {
      let arr2 = formErrors.push(fn(tmp2));
    }
    continue;
  }
  return { formErrors, fieldErrors };
};
export const formatError = function formatError(prototype, arg1) {
  let fn = arg1;
  if (arg1 === undefined) {
    fn = function o(message) {
      return message.message;
    };
  }
  let obj = { _errors: [] };
  function processError(prototype) {
    let sum;
    const iter = prototype.issues[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if ("invalid_union" === nextResult.code) {
        if (tmp2.errors.length) {
          let errors = tmp2.errors;
          let mapped = errors.map((issues) => {
            obj = { issues };
            processError(obj);
          });
          continue;
        }
      }
      if ("invalid_key" === tmp2.code) {
        let obj2 = { issues: tmp2.issues };
        let tmp34 = processError(obj2);
      } else if ("invalid_element" === tmp2.code) {
        let obj3 = { issues: tmp2.issues };
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
  processError(prototype);
  return obj;
};
export const treeifyError = function treeifyError(arg0) {
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
      closure_0 = iter;
      if ("invalid_union" === iter.code) {
        if (iter.errors.length) {
          const errors = iter.errors;
          const mapped = errors.map((issues) => {
            obj = { issues };
            items(obj, path.path);
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
        HermesBuiltin.arraySpread(items1, iter.path, HermesBuiltin.arraySpread(items1, items, 0));
        if (0 === items1.length) {
          const errors1 = obj.errors;
          errors1.push(fn(iter));
          return 1;
        } else {
          let tmp11 = obj;
          let num = 0;
          if (0 < items1.length) {
            do {
              let tmp7;
              let tmp2 = items1[num];
              let diff = items1.length - 1;
              if (typeof tmp2 === "string") {
                if (tmp11.properties == null) {
                  tmp11.properties = {};
                }
                properties = tmp11.properties;
                if (properties[tmp2] == null) {
                  let obj4 = { errors: [] };
                  properties[tmp2] = obj4;
                }
                tmp7 = tmp11.properties[tmp2];
              } else {
                if (tmp11.items == null) {
                  tmp11.items = [];
                }
                items = tmp11.items;
                if (items[tmp2] == null) {
                  obj = { errors: [] };
                  items[tmp2] = obj;
                }
                tmp7 = tmp11.items[tmp2];
              }
              if (num === diff) {
                let errors2 = tmp7.errors;
                let arr2 = errors2.push(fn(iter));
              }
              num = num + 1;
              tmp11 = tmp7;
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
export { toDotPath };
export const prettifyError = function prettifyError(issues) {
  const items = [];
  const items1 = [...issues.issues];
  const sorted = items1.sort((path, path2) => {
    path = path.path;
    if (path == null) {
      path = [];
    }
    let path1 = path2.path;
    const length = path.length;
    if (path1 == null) {
      path1 = [];
    }
    return length - path1.length;
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
export const $ZodError = NEVER.$constructor("$ZodError", initializer);
export const $ZodRealError = NEVER.$constructor("$ZodError", initializer, obj);