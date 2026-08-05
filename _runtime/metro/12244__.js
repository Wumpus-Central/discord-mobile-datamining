// _runtime/metro/12244__.js
import { stringProcessor } from "../12308_stringProcessor.js";
import { convertBaseSchema } from "../12317_convertBaseSchema.js";
import { 12245__ } from "12245__.js";
import { 12313__ } from "12313__.js";
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
    exports.core = fn(require("module_12245"));
    fn2(require("module_12311"), exports);
    fn2(require("module_12312"), exports);
    fn2(require("module_12315"), exports);
    fn2(require("module_12314"), exports);
    fn2(require("module_12316"), exports);
    require("module_12245").config(fn3(require("mergeDefs")).default());
    const _Object4 = Object;
    let obj = { enumerable: true, get: null };
    obj[1] = function get() {
      return 12245__.globalRegistry;
    };
    Object.defineProperty(exports, "globalRegistry", obj);
    const _Object5 = Object;
    obj = { enumerable: true, get: null };
    obj[1] = function get() {
      return 12245__.registry;
    };
    Object.defineProperty(exports, "registry", obj);
    const _Object6 = Object;
    const obj1 = { enumerable: true, get: null };
    obj1[1] = function get() {
      return 12245__.config;
    };
    Object.defineProperty(exports, "config", obj1);
    const _Object7 = Object;
    const obj2 = { enumerable: true, get: null };
    obj2[1] = function get() {
      return 12245__.$output;
    };
    Object.defineProperty(exports, "$output", obj2);
    const _Object8 = Object;
    const obj3 = { enumerable: true, get: null };
    obj3[1] = function get() {
      return 12245__.$input;
    };
    Object.defineProperty(exports, "$input", obj3);
    const _Object9 = Object;
    const obj4 = { enumerable: true, get: null };
    obj4[1] = function get() {
      return 12245__.$brand;
    };
    Object.defineProperty(exports, "$brand", obj4);
    const _Object10 = Object;
    const obj5 = { enumerable: true, get: null };
    obj5[1] = function get() {
      return 12245__.clone;
    };
    Object.defineProperty(exports, "clone", obj5);
    const _Object11 = Object;
    const obj6 = { enumerable: true, get: null };
    obj6[1] = function get() {
      return 12245__.regexes;
    };
    Object.defineProperty(exports, "regexes", obj6);
    const _Object12 = Object;
    const obj7 = { enumerable: true, get: null };
    obj7[1] = function get() {
      return 12245__.treeifyError;
    };
    Object.defineProperty(exports, "treeifyError", obj7);
    const _Object13 = Object;
    const obj8 = { enumerable: true, get: null };
    obj8[1] = function get() {
      return 12245__.prettifyError;
    };
    Object.defineProperty(exports, "prettifyError", obj8);
    const _Object14 = Object;
    const obj9 = { enumerable: true, get: null };
    obj9[1] = function get() {
      return 12245__.formatError;
    };
    Object.defineProperty(exports, "formatError", obj9);
    const _Object15 = Object;
    const obj10 = { enumerable: true, get: null };
    obj10[1] = function get() {
      return 12245__.flattenError;
    };
    Object.defineProperty(exports, "flattenError", obj10);
    const _Object16 = Object;
    const obj11 = { enumerable: true, get: null };
    obj11[1] = function get() {
      return 12245__.TimePrecision;
    };
    Object.defineProperty(exports, "TimePrecision", obj11);
    const _Object17 = Object;
    const obj12 = { enumerable: true, get: null };
    obj12[1] = function get() {
      return 12245__.util;
    };
    Object.defineProperty(exports, "util", obj12);
    const _Object18 = Object;
    const obj13 = { enumerable: true, get: null };
    obj13[1] = function get() {
      return 12245__.NEVER;
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
    exports.locales = fn(require("module_12255"));
    const _Object21 = Object;
    const obj16 = { enumerable: true, get: null };
    obj16[1] = function get() {
      return 12313__.ZodISODateTime;
    };
    Object.defineProperty(exports, "ZodISODateTime", obj16);
    const _Object22 = Object;
    const obj17 = { enumerable: true, get: null };
    obj17[1] = function get() {
      return 12313__.ZodISODate;
    };
    Object.defineProperty(exports, "ZodISODate", obj17);
    const _Object23 = Object;
    const obj18 = { enumerable: true, get: null };
    obj18[1] = function get() {
      return 12313__.ZodISOTime;
    };
    Object.defineProperty(exports, "ZodISOTime", obj18);
    const _Object24 = Object;
    const obj19 = { enumerable: true, get: null };
    obj19[1] = function get() {
      return 12313__.ZodISODuration;
    };
    Object.defineProperty(exports, "ZodISODuration", obj19);
    exports.iso = fn(require("module_12313"));
    exports.coerce = fn(require("module_12318"));
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}