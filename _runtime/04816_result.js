// === Module 4816: result ===

// Module 4816 (result)
import flag from "flag" /* 561 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 571 */;
import getEvalledConstructor from "getEvalledConstructor" /* 4801 */;
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1419 */;

hasPropertyDescriptors = hasPropertyDescriptors.hasArrayLengthDefineBug();
if (hasPropertyDescriptors) {
  hasPropertyDescriptors = getEvalledConstructor;
}
let closure_4 = callBoundIntrinsic("Object.prototype.propertyIsEnumerable");

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