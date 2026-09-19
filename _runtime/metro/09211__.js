// _runtime/metro/09211__.js
import ar from "../09222_ar.js";
import _mod9231 from "09231__.js";
import _mod9278 from "09278__.js";
import lt from "../09279_lt.js";
import _mod9281 from "09281__.js";
import _mod9282 from "09282__.js";
import _mod9283 from "09283__.js";
import _mod9285 from "09285__.js";

const require = globalThis.__r;

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
    exports.core = fn(require("09212__.js"));
    fn2(_mod9278, exports);
    fn2(lt, exports);
    fn2(_mod9282, exports);
    fn2(_mod9281, exports);
    fn2(_mod9283, exports);
    require("09212__.js").config(fn3(_mod9231).default());
    const _Object4 = Object;
    let obj = {
      enumerable: true,
      get() {
        return require("09212__.js").globalRegistry;
      },
    };
    Object.defineProperty(exports, "globalRegistry", obj);
    const _Object5 = Object;
    const obj2 = {
      enumerable: true,
      get() {
        return require("09212__.js").registry;
      },
    };
    Object.defineProperty(exports, "registry", obj2);
    const _Object6 = Object;
    const obj3 = {
      enumerable: true,
      get() {
        return require("09212__.js").config;
      },
    };
    Object.defineProperty(exports, "config", obj3);
    const _Object7 = Object;
    const obj4 = {
      enumerable: true,
      get() {
        return require("09212__.js").$output;
      },
    };
    Object.defineProperty(exports, "$output", obj4);
    const _Object8 = Object;
    const obj5 = {
      enumerable: true,
      get() {
        return require("09212__.js").$input;
      },
    };
    Object.defineProperty(exports, "$input", obj5);
    const _Object9 = Object;
    const obj6 = {
      enumerable: true,
      get() {
        return require("09212__.js").$brand;
      },
    };
    Object.defineProperty(exports, "$brand", obj6);
    const _Object10 = Object;
    const obj7 = {
      enumerable: true,
      get() {
        return require("09212__.js").clone;
      },
    };
    Object.defineProperty(exports, "clone", obj7);
    const _Object11 = Object;
    const obj8 = {
      enumerable: true,
      get() {
        return require("09212__.js").regexes;
      },
    };
    Object.defineProperty(exports, "regexes", obj8);
    const _Object12 = Object;
    const obj9 = {
      enumerable: true,
      get() {
        return require("09212__.js").treeifyError;
      },
    };
    Object.defineProperty(exports, "treeifyError", obj9);
    const _Object13 = Object;
    const obj10 = {
      enumerable: true,
      get() {
        return require("09212__.js").prettifyError;
      },
    };
    Object.defineProperty(exports, "prettifyError", obj10);
    const _Object14 = Object;
    const obj11 = {
      enumerable: true,
      get() {
        return require("09212__.js").formatError;
      },
    };
    Object.defineProperty(exports, "formatError", obj11);
    const _Object15 = Object;
    const obj12 = {
      enumerable: true,
      get() {
        return require("09212__.js").flattenError;
      },
    };
    Object.defineProperty(exports, "flattenError", obj12);
    const _Object16 = Object;
    const obj13 = {
      enumerable: true,
      get() {
        return require("09212__.js").TimePrecision;
      },
    };
    Object.defineProperty(exports, "TimePrecision", obj13);
    const _Object17 = Object;
    const obj14 = {
      enumerable: true,
      get() {
        return require("09212__.js").util;
      },
    };
    Object.defineProperty(exports, "util", obj14);
    const _Object18 = Object;
    const obj15 = {
      enumerable: true,
      get() {
        return require("09212__.js").NEVER;
      },
    };
    Object.defineProperty(exports, "NEVER", obj15);
    const _Object19 = Object;
    const obj16 = {
      enumerable: true,
      get() {
        return require("stringProcessor").toJSONSchema;
      },
    };
    Object.defineProperty(exports, "toJSONSchema", obj16);
    const _Object20 = Object;
    const obj17 = {
      enumerable: true,
      get() {
        return require("convertBaseSchema").fromJSONSchema;
      },
    };
    Object.defineProperty(exports, "fromJSONSchema", obj17);
    exports.locales = fn(ar);
    const _Object21 = Object;
    const obj18 = {
      enumerable: true,
      get() {
        return require("09280__.js").ZodISODateTime;
      },
    };
    Object.defineProperty(exports, "ZodISODateTime", obj18);
    const _Object22 = Object;
    const obj19 = {
      enumerable: true,
      get() {
        return require("09280__.js").ZodISODate;
      },
    };
    Object.defineProperty(exports, "ZodISODate", obj19);
    const _Object23 = Object;
    const obj20 = {
      enumerable: true,
      get() {
        return require("09280__.js").ZodISOTime;
      },
    };
    Object.defineProperty(exports, "ZodISOTime", obj20);
    const _Object24 = Object;
    const obj21 = {
      enumerable: true,
      get() {
        return require("09280__.js").ZodISODuration;
      },
    };
    Object.defineProperty(exports, "ZodISODuration", obj21);
    exports.iso = fn(require("09280__.js"));
    exports.coerce = fn(_mod9285);
    const fn3Result = fn3(_mod9231);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
