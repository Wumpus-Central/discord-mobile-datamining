// === Module 5928: HasProperty ===

// Module 5928 (HasProperty)
import _mod1308 from "module_1308" /* 1308 */;
import _mod5869 from "module_5869" /* 5869 */;
import _mod5916 from "module_5916" /* 5916 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5869(arg0)) {
    if (_mod5916(arg1)) {
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