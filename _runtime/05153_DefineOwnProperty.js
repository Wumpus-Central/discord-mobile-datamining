// _runtime/05153_DefineOwnProperty.js
import flag2 from "01305_flag.js";
import callBoundIntrinsic from "01315_callBoundIntrinsic.js";
import _mod5138 from "metro/05138__.js";
import flag_mod from "metro/01458__.js";

let flag = flag_mod;
flag = flag.hasArrayLengthDefineBug();
if (flag) {
  flag = _mod5138;
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
