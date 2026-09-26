// === Module 5158: HasProperty ===

// Module 5158 (HasProperty)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5099 from "module_5099" /* 5099 */;
import _mod5146 from "module_5146" /* 5146 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5099(arg0)) {
    if (_mod5146(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new _mod1282("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1282("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};