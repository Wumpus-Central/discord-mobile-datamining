// _runtime/05390_DefineOwnProperty.js
import flag from "01316_flag.js";
import callBoundIntrinsic from "01326_callBoundIntrinsic.js";
import GetIntrinsic from "05375_GetIntrinsic.js";
import hasPropertyDescriptors_mod from "01463_hasPropertyDescriptors.js";

let hasPropertyDescriptors = hasPropertyDescriptors_mod;
hasPropertyDescriptors = hasPropertyDescriptors.hasArrayLengthDefineBug();
let closure_3 = hasPropertyDescriptors && GetIntrinsic;
hasPropertyDescriptors && GetIntrinsic;
let closure_4 = callBoundIntrinsic("Object.prototype.propertyIsEnumerable");

export default function DefineOwnProperty(fn, fn2, fn3, arg3, arg4, __Value__) {
  if (flag) {
    if (hasPropertyDescriptors) {
      if ("length" === arg4) {
        if ("[[Value]]" in __Value__) {
          if (closure_3(arg3)) {
            let flag4;
            if (arg3.length !== __Value__["[[Value]]"]) {
              arg3.length = __Value__["[[Value]]"];
              flag4 = arg3.length === __Value__["[[Value]]"];
            }
            return flag4;
          }
        }
      }
    }
    const tmpResult = flag;
    tmpResult(arg3, arg4, fn3(__Value__));
    flag4 = true;
  } else if (fn(__Value__)) {
    if (__Value__["[[Configurable]]"]) {
      if (__Value__["[[Writable]]"]) {
        if (arg4 in arg3) {
          if (closure_4(arg3, arg4) !== __Value__["[[Enumerable]]"]) {
            return false;
          }
        }
        const prop = __Value__["[[Value]]"];
        arg3[arg4] = prop;
        return fn2(arg3[arg4], prop);
      }
    }
    return false;
  } else {
    return false;
  }
}
