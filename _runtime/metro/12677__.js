// _runtime/metro/12677__.js
import _mod12678 from "12678__.js";
import _mod12688 from "12688__.js";
import mergeDefs from "../12697_mergeDefs.js";
import stringProcessor from "../12741_stringProcessor.js";
import _mod12744 from "12744__.js";
import _mod12745 from "12745__.js";
import _mod12746 from "12746__.js";
import _mod12747 from "12747__.js";
import _mod12748 from "12748__.js";
import _mod12749 from "12749__.js";
import convertBaseSchema from "../12750_convertBaseSchema.js";
import _mod12751 from "12751__.js";

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
    let fn2 = self;
    if (self) {
      fn2 = self.__exportStar;
    }
    if (!fn2) {
      fn2 = (obj, exports) => {
        for (const key10007 in arg0) {
          let tmp5 = key10007;
          let tmp6 = "default" === key10007;
          if (tmp6) {
            if (tmp6) {
              continue;
            } else {
              let tmp3 = self2;
              let tmp4 = self2(arg1, arg0, key10007);
              continue;
            }
            continue;
          } else {
            let _Object = Object;
            let call = hasOwnProperty.call;
            if (typeof call === "unknown") {
              let hasOwnPropertyResult = hasOwnProperty(key10007);
            } else {
              hasOwnPropertyResult = call(arg1, key10007);
            }
            let tmp2 = hasOwnPropertyResult;
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
          const obj = { default: null };
          obj[0] = __esModule;
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
    exports.core = fn(_mod12678);
    fn2(_mod12744, exports);
    fn2(_mod12745, exports);
    fn2(_mod12748, exports);
    fn2(_mod12747, exports);
    fn2(_mod12749, exports);
    _mod12678.config(fn3(mergeDefs).default());
    const _Object4 = Object;
    let obj = { enumerable: true, get: null };
    obj[1] = function get() {
      return _mod12678.globalRegistry;
    };
    Object.defineProperty(exports, "globalRegistry", obj);
    const _Object5 = Object;
    obj = { enumerable: true, get: null };
    obj[1] = function get() {
      return _mod12678.registry;
    };
    Object.defineProperty(exports, "registry", obj);
    const _Object6 = Object;
    const obj1 = { enumerable: true, get: null };
    obj1[1] = function get() {
      return _mod12678.config;
    };
    Object.defineProperty(exports, "config", obj1);
    const _Object7 = Object;
    const obj2 = { enumerable: true, get: null };
    obj2[1] = function get() {
      return _mod12678.$output;
    };
    Object.defineProperty(exports, "$output", obj2);
    const _Object8 = Object;
    const obj3 = { enumerable: true, get: null };
    obj3[1] = function get() {
      return _mod12678.$input;
    };
    Object.defineProperty(exports, "$input", obj3);
    const _Object9 = Object;
    const obj4 = { enumerable: true, get: null };
    obj4[1] = function get() {
      return _mod12678.$brand;
    };
    Object.defineProperty(exports, "$brand", obj4);
    const _Object10 = Object;
    const obj5 = { enumerable: true, get: null };
    obj5[1] = function get() {
      return _mod12678.clone;
    };
    Object.defineProperty(exports, "clone", obj5);
    const _Object11 = Object;
    const obj6 = { enumerable: true, get: null };
    obj6[1] = function get() {
      return _mod12678.regexes;
    };
    Object.defineProperty(exports, "regexes", obj6);
    const _Object12 = Object;
    const obj7 = { enumerable: true, get: null };
    obj7[1] = function get() {
      return _mod12678.treeifyError;
    };
    Object.defineProperty(exports, "treeifyError", obj7);
    const _Object13 = Object;
    const obj8 = { enumerable: true, get: null };
    obj8[1] = function get() {
      return _mod12678.prettifyError;
    };
    Object.defineProperty(exports, "prettifyError", obj8);
    const _Object14 = Object;
    const obj9 = { enumerable: true, get: null };
    obj9[1] = function get() {
      return _mod12678.formatError;
    };
    Object.defineProperty(exports, "formatError", obj9);
    const _Object15 = Object;
    const obj10 = { enumerable: true, get: null };
    obj10[1] = function get() {
      return _mod12678.flattenError;
    };
    Object.defineProperty(exports, "flattenError", obj10);
    const _Object16 = Object;
    const obj11 = { enumerable: true, get: null };
    obj11[1] = function get() {
      return _mod12678.TimePrecision;
    };
    Object.defineProperty(exports, "TimePrecision", obj11);
    const _Object17 = Object;
    const obj12 = { enumerable: true, get: null };
    obj12[1] = function get() {
      return _mod12678.util;
    };
    Object.defineProperty(exports, "util", obj12);
    const _Object18 = Object;
    const obj13 = { enumerable: true, get: null };
    obj13[1] = function get() {
      return _mod12678.NEVER;
    };
    Object.defineProperty(exports, "NEVER", obj13);
    const _Object19 = Object;
    const obj14 = { enumerable: true, get: null };
    obj14[1] = function get() {
      return stringProcessor.toJSONSchema;
    };
    Object.defineProperty(exports, "toJSONSchema", obj14);
    const _Object20 = Object;
    const obj15 = { enumerable: true, get: null };
    obj15[1] = function get() {
      return convertBaseSchema.fromJSONSchema;
    };
    Object.defineProperty(exports, "fromJSONSchema", obj15);
    exports.locales = fn(_mod12688);
    const _Object21 = Object;
    const obj16 = { enumerable: true, get: null };
    obj16[1] = function get() {
      return _mod12746.ZodISODateTime;
    };
    Object.defineProperty(exports, "ZodISODateTime", obj16);
    const _Object22 = Object;
    const obj17 = { enumerable: true, get: null };
    obj17[1] = function get() {
      return _mod12746.ZodISODate;
    };
    Object.defineProperty(exports, "ZodISODate", obj17);
    const _Object23 = Object;
    const obj18 = { enumerable: true, get: null };
    obj18[1] = function get() {
      return _mod12746.ZodISOTime;
    };
    Object.defineProperty(exports, "ZodISOTime", obj18);
    const _Object24 = Object;
    const obj19 = { enumerable: true, get: null };
    obj19[1] = function get() {
      return _mod12746.ZodISODuration;
    };
    Object.defineProperty(exports, "ZodISODuration", obj19);
    exports.iso = fn(_mod12746);
    exports.coerce = fn(_mod12751);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}