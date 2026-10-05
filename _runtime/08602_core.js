// === Module 8602: core ===

// Module 8602 (core)
import ar from "ar" /* 8613 */;
import default_12 from "default_1" /* 8622 */;
import ZodType from "ZodType" /* 8669 */;
import lt from "lt" /* 8670 */;
import _mod8672 from "module_8672" /* 8672 */;
import ZodError from "ZodError" /* 8673 */;
import ZodIssueCode from "ZodIssueCode" /* 8674 */;
import string from "string" /* 8676 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  let tmp2 = globalThis;
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    let closure_0 = __esModule;
    let closure_1 = arg2;
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
let closure_2 = tmp;
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
let closure_3 = tmp3;
const tmp5 = self && self.__importStar || ((__esModule) => {
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
        let tmp6 = closure_2(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_3(obj, __esModule);
  return obj;
});
let tmp6 = self && self.__exportStar || ((obj, arg1) => {
  for (const key10007 in obj) {
    let callResult = "default" === key10007;
    if (!callResult) {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(arg1, key10007);
    }
    if (callResult) {
      continue;
    } else {
      let tmp3 = closure_2(arg1, obj, key10007);
      continue;
    }
    continue;
  }
});
const fn = self && self.__importDefault || ((__esModule) => {
  let tmp2;
  const tmp = __esModule;
  if (!tmp) {
    tmp2 = { default: __esModule };
    const obj = { default: __esModule };
  } else {
    tmp2 = __esModule;
  }
  return tmp2;
});
tmp6(ZodType, exports);
tmp6(lt, exports);
tmp6(ZodError, exports);
tmp6(_mod8672, exports);
tmp6(ZodIssueCode, exports);
const default_1 = fn(default_12);
require("util").config(default_1.default());

export const core = tmp5(require("util"));
export const globalRegistry = require("util").globalRegistry;
export const registry = require("util").registry;
export const config = require("util").config;
export const $output = require("util").$output;
export const $input = require("util").$input;
export const $brand = require("util").$brand;
export const clone = require("util").clone;
export const regexes = require("util").regexes;
export const treeifyError = require("util").treeifyError;
export const prettifyError = require("util").prettifyError;
export const formatError = require("util").formatError;
export const flattenError = require("util").flattenError;
export const TimePrecision = require("util").TimePrecision;
export const util = require("util").util;
export const NEVER = require("util").NEVER;
export const toJSONSchema = require("stringProcessor").toJSONSchema;
export const fromJSONSchema = require("module_8675").fromJSONSchema;
export const locales = tmp5(ar);
export const ZodISODateTime = require("ZodISODateTime").ZodISODateTime;
export const ZodISODate = require("ZodISODateTime").ZodISODate;
export const ZodISOTime = require("ZodISODateTime").ZodISOTime;
export const ZodISODuration = require("ZodISODateTime").ZodISODuration;
export const iso = tmp5(require("ZodISODateTime"));
export const coerce = tmp5(string);