// _runtime/metro/08934__.js
import ar from "../08945_ar.js";
import _mod8954 from "08954__.js";
import _mod9001 from "09001__.js";
import lt from "../09002_lt.js";
import _mod9004 from "09004__.js";
import _mod9005 from "09005__.js";
import _mod9006 from "09006__.js";
import _mod9008 from "09008__.js";

const self = this;
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
    let fn2 = self;
    if (self) {
      fn2 = self.__exportStar;
    }
    if (!fn2) {
      fn2 = (obj, exports) => {
        for (const key10007 in arg0) {
          let tmp6 = "default" === key10007;
          if (tmp6) {
            if (tmp6) {
              continue;
            } else {
              let tmp4 = self2(arg1, arg0, key10007);
              continue;
            }
            continue;
          } else {
            let _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            let call = hasOwnProperty.call;
            if (typeof call === "unknown") {
              let hasOwnPropertyResult = hasOwnProperty(key10007);
            } else {
              hasOwnPropertyResult = call(arg1, key10007);
            }
          }
        }
      };
    }
    let fn3 = self;
    if (self) {
      fn3 = self.__importDefault;
    }
    if (!fn3) {
      fn3 = (__esModule) => {
        if (!__esModule) {
          const obj = { default: __esModule };
          let tmp = obj;
        } else {
          tmp = __esModule;
        }
        return tmp;
      };
    }
    const _Object3 = Object;
    exports.core = undefined;
    exports.globalRegistry = undefined;
    exports.registry = undefined;
    exports.config = undefined;
    exports.$output = undefined;
    exports.$input = undefined;
    exports.$brand = undefined;
    exports.clone = undefined;
    exports.regexes = undefined;
    exports.treeifyError = undefined;
    exports.prettifyError = undefined;
    exports.formatError = undefined;
    exports.flattenError = undefined;
    exports.TimePrecision = undefined;
    exports.util = undefined;
    exports.NEVER = undefined;
    exports.toJSONSchema = undefined;
    exports.fromJSONSchema = undefined;
    exports.locales = undefined;
    exports.ZodISODateTime = undefined;
    exports.ZodISODate = undefined;
    exports.ZodISOTime = undefined;
    exports.ZodISODuration = undefined;
    exports.iso = undefined;
    exports.coerce = undefined;
    exports.core = fn(require("08935__.js"));
    fn2(_mod9001, exports);
    fn2(lt, exports);
    fn2(_mod9005, exports);
    fn2(_mod9004, exports);
    fn2(_mod9006, exports);
    require("08935__.js").config(fn3(_mod8954).default());
    const _Object4 = Object;
    let obj = {
      enumerable: true,
      get() {
        return require("08935__.js").globalRegistry;
      },
    };
    Object.defineProperty(exports, "globalRegistry", obj);
    const _Object5 = Object;
    obj = {
      enumerable: true,
      get() {
        return require("08935__.js").registry;
      },
    };
    Object.defineProperty(exports, "registry", obj);
    const _Object6 = Object;
    const obj1 = {
      enumerable: true,
      get() {
        return require("08935__.js").config;
      },
    };
    Object.defineProperty(exports, "config", obj1);
    const _Object7 = Object;
    const obj2 = {
      enumerable: true,
      get() {
        return require("08935__.js").$output;
      },
    };
    Object.defineProperty(exports, "$output", obj2);
    const _Object8 = Object;
    const obj3 = {
      enumerable: true,
      get() {
        return require("08935__.js").$input;
      },
    };
    Object.defineProperty(exports, "$input", obj3);
    const _Object9 = Object;
    const obj4 = {
      enumerable: true,
      get() {
        return require("08935__.js").$brand;
      },
    };
    Object.defineProperty(exports, "$brand", obj4);
    const _Object10 = Object;
    const obj5 = {
      enumerable: true,
      get() {
        return require("08935__.js").clone;
      },
    };
    Object.defineProperty(exports, "clone", obj5);
    const _Object11 = Object;
    const obj6 = {
      enumerable: true,
      get() {
        return require("08935__.js").regexes;
      },
    };
    Object.defineProperty(exports, "regexes", obj6);
    const _Object12 = Object;
    const obj7 = {
      enumerable: true,
      get() {
        return require("08935__.js").treeifyError;
      },
    };
    Object.defineProperty(exports, "treeifyError", obj7);
    const _Object13 = Object;
    const obj8 = {
      enumerable: true,
      get() {
        return require("08935__.js").prettifyError;
      },
    };
    Object.defineProperty(exports, "prettifyError", obj8);
    const _Object14 = Object;
    const obj9 = {
      enumerable: true,
      get() {
        return require("08935__.js").formatError;
      },
    };
    Object.defineProperty(exports, "formatError", obj9);
    const _Object15 = Object;
    const obj10 = {
      enumerable: true,
      get() {
        return require("08935__.js").flattenError;
      },
    };
    Object.defineProperty(exports, "flattenError", obj10);
    const _Object16 = Object;
    const obj11 = {
      enumerable: true,
      get() {
        return require("08935__.js").TimePrecision;
      },
    };
    Object.defineProperty(exports, "TimePrecision", obj11);
    const _Object17 = Object;
    const obj12 = {
      enumerable: true,
      get() {
        return require("08935__.js").util;
      },
    };
    Object.defineProperty(exports, "util", obj12);
    const _Object18 = Object;
    const obj13 = {
      enumerable: true,
      get() {
        return require("08935__.js").NEVER;
      },
    };
    Object.defineProperty(exports, "NEVER", obj13);
    const _Object19 = Object;
    const obj14 = {
      enumerable: true,
      get() {
        return require("stringProcessor").toJSONSchema;
      },
    };
    Object.defineProperty(exports, "toJSONSchema", obj14);
    const _Object20 = Object;
    const obj15 = {
      enumerable: true,
      get() {
        return require("convertBaseSchema").fromJSONSchema;
      },
    };
    Object.defineProperty(exports, "fromJSONSchema", obj15);
    exports.locales = fn(ar);
    const _Object21 = Object;
    const obj16 = {
      enumerable: true,
      get() {
        return require("09003__.js").ZodISODateTime;
      },
    };
    Object.defineProperty(exports, "ZodISODateTime", obj16);
    const _Object22 = Object;
    const obj17 = {
      enumerable: true,
      get() {
        return require("09003__.js").ZodISODate;
      },
    };
    Object.defineProperty(exports, "ZodISODate", obj17);
    const _Object23 = Object;
    const obj18 = {
      enumerable: true,
      get() {
        return require("09003__.js").ZodISOTime;
      },
    };
    Object.defineProperty(exports, "ZodISOTime", obj18);
    const _Object24 = Object;
    const obj19 = {
      enumerable: true,
      get() {
        return require("09003__.js").ZodISODuration;
      },
    };
    Object.defineProperty(exports, "ZodISODuration", obj19);
    exports.iso = fn(require("09003__.js"));
    exports.coerce = fn(_mod9008);
    const fn3Result = fn3(_mod8954);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
