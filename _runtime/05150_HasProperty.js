// === Module 5150: HasProperty ===

// Module 5150 (HasProperty)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5091 from "module_5091" /* 5091 */;
import _mod5138 from "module_5138" /* 5138 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5091(arg0)) {
    if (_mod5138(arg1)) {
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