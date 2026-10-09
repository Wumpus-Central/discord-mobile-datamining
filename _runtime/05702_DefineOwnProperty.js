// === Module 5702: DefineOwnProperty ===

// Module 5702 (DefineOwnProperty)
import flag2 from "flag" /* 1329 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1339 */;
import _mod5687 from "module_5687" /* 5687 */;
import flag_mod from "module_1476" /* 1476 */;

let flag = flag_mod;
flag = flag.hasArrayLengthDefineBug();
if (flag) {
  flag = _mod5687;
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