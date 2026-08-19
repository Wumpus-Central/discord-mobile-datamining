// === Module 4437: Get ===

// Module 4437 (Get)
import _mod541 from "module_541" /* 541 */;
import addNumericSeparator from "addNumericSeparator" /* 575 */;
import isObject from "isObject" /* 4391 */;
import isPropertyKey from "isPropertyKey" /* 4438 */;


export default function Get(arg0, arg1) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      return arg0[arg1];
    } else {
      let tmpResult = _mod541;
      tmpResult = new tmpResult("Assertion failed: P is not a Property Key, got " + addNumericSeparator(arg1));
      throw tmpResult;
    }
  } else {
    const tmp5 = new _mod541("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};