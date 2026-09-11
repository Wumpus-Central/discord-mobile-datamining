// === Module 4914: HasProperty ===

// Module 4914 (HasProperty)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4855 from "module_4855" /* 4855 */;
import _mod4902 from "module_4902" /* 4902 */;


export default function HasProperty(arg0, arg1) {
  if (_mod4855(arg0)) {
    if (_mod4902(arg1)) {
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