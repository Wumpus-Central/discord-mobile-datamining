// === Module 5966: HasProperty ===

// Module 5966 (HasProperty)
import _mod1308 from "module_1308" /* 1308 */;
import _mod5907 from "module_5907" /* 5907 */;
import _mod5954 from "module_5954" /* 5954 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5907(arg0)) {
    if (_mod5954(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new _mod1308("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1308("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};