// === Module 5388: HasProperty ===

// Module 5388 (HasProperty)
import _mod1293 from "module_1293" /* 1293 */;
import isObject from "isObject" /* 5329 */;
import isPropertyKey from "isPropertyKey" /* 5376 */;


export default function HasProperty(arg0, arg1) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      return arg1 in arg0;
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1293("Assertion failed: `P` must be a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1293("Assertion failed: `O` must be an Object");
    throw tmp3;
  }
};