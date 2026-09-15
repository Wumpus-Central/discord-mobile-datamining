// === Module 4947: HasProperty ===

// Module 4947 (HasProperty)
import _mod1282 from "module_1282" /* 1282 */;
import _mod4888 from "module_4888" /* 4888 */;
import _mod4935 from "module_4935" /* 4935 */;


export default function HasProperty(arg0, arg1) {
  if (_mod4888(arg0)) {
    if (_mod4935(arg1)) {
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