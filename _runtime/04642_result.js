// _runtime/04642_result.js
import hasPropertyDescriptors from "hasPropertyDescriptors";
import { flag } from "00564_flag.js";

hasPropertyDescriptors = hasPropertyDescriptors.hasArrayLengthDefineBug();
if (hasPropertyDescriptors) {
  hasPropertyDescriptors = require("getEvalledConstructor");
}
let closure_4 = require("callBoundIntrinsic")("Object.prototype.propertyIsEnumerable");

export default function DefineOwnProperty(arg0, arg1, arg2, arg3, arg4, __Value__) {
  if (flag) {
    if (hasPropertyDescriptors) {
      if ("length" === arg4) {
        if ("[[Value]]" in __Value__) {
          if (hasPropertyDescriptors(arg3)) {
            if (arg3.length !== __Value__["[[Value]]"]) {
              arg3.length = __Value__["[[Value]]"];
              let flag4 = arg3.length === __Value__["[[Value]]"];
            }
            return flag4;
          }
        }
      }
    }
    flag(arg3, arg4, arg2(__Value__));
    flag4 = true;
    const tmpResult = flag;
  } else if (arg0(__Value__)) {
    if (__Value__["[[Configurable]]"]) {
      if (__Value__["[[Writable]]"]) {
        if (arg4 in arg3) {
          if (callback(arg3, arg4) !== __Value__["[[Enumerable]]"]) {
            return false;
          }
        }
        __Value__ = __Value__["[[Value]]"];
        arg3[arg4] = __Value__;
        return arg1(arg3[arg4], __Value__);
      }
    }
    return false;
  } else {
    return false;
  }
};