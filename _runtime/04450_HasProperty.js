// === Module 4450: HasProperty ===

// Module 4450 (HasProperty)
import _mod541 from "module_541" /* 541 */;
import isObject from "isObject" /* 4391 */;
import isPropertyKey from "isPropertyKey" /* 4438 */;


export default function HasProperty(arg0, arg1) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new _mod541("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod541("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};