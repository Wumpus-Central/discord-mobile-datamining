// === Module 5030: HasProperty ===

// Module 5030 (HasProperty)
import _mod1282 from "module_1282" /* 1282 */;
import _mod4971 from "module_4971" /* 4971 */;
import _mod5018 from "module_5018" /* 5018 */;


export default function HasProperty(arg0, arg1) {
  if (_mod4971(arg0)) {
    if (_mod5018(arg1)) {
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