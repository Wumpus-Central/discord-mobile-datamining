// === Module 4868: HasProperty ===

// Module 4868 (HasProperty)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4809 from "module_4809" /* 4809 */;
import _mod4856 from "module_4856" /* 4856 */;


export default function HasProperty(arg0, arg1) {
  if (_mod4809(arg0)) {
    if (_mod4856(arg1)) {
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