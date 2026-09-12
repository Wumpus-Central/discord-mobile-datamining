// === Module 4944: HasProperty ===

// Module 4944 (HasProperty)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4885 from "module_4885" /* 4885 */;
import _mod4932 from "module_4932" /* 4932 */;


export default function HasProperty(arg0, arg1) {
  if (_mod4885(arg0)) {
    if (_mod4932(arg1)) {
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