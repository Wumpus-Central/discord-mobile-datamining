// === Module 6516: DefineOwnProperty ===

// Module 6516 (DefineOwnProperty)
import flag2 from "flag" /* 1316 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import _mod6501 from "module_6501" /* 6501 */;
import flag_mod from "module_1470" /* 1470 */;

let flag = flag_mod;
flag = flag.hasArrayLengthDefineBug();
if (flag) {
  flag = _mod6501;
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
};