// === Module 4882: HasProperty ===

// Module 4882 (HasProperty)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4823 from "module_4823" /* 4823 */;
import _mod4870 from "module_4870" /* 4870 */;


export default function HasProperty(arg0, arg1) {
  if (_mod4823(arg0)) {
    if (_mod4870(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new _mod1283("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1283("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};