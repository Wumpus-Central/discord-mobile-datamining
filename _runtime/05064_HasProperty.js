// === Module 5064: HasProperty ===

// Module 5064 (HasProperty)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5005 from "module_5005" /* 5005 */;
import _mod5052 from "module_5052" /* 5052 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5005(arg0)) {
    if (_mod5052(arg1)) {
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