// _runtime/04863_DefineOwnProperty.js
import flag2 from "01306_flag.js";
import callBoundIntrinsic from "01316_callBoundIntrinsic.js";
import _mod4848 from "metro/04848__.js";
import flag from "metro/01456__.js";

flag = flag.hasArrayLengthDefineBug();
if (flag) {
  flag = _mod4848;
}
let closure_4 = callBoundIntrinsic("Object.prototype.propertyIsEnumerable");

export default function DefineOwnProperty(fn, fn2, fn3, arg3, arg4, __Value__) {
  if (flag2) {
    if (flag) {
      if ("length" === arg4) {
        if ("[[Value]]" in __Value__) {
          if (flag(arg3)) {
            if (arg3.length !== __Value__["[[Value]]"]) {
              arg3.length = __Value__["[[Value]]"];
              let flag4 = arg3.length === __Value__["[[Value]]"];
            }
            return flag4;
          }
        }
      }
    }
    flag2(arg3, arg4, fn3(__Value__));
    flag4 = true;
    const tmpResult = flag2;
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
