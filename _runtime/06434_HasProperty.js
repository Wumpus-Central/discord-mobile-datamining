// === Module 6434: HasProperty ===

// Module 6434 (HasProperty)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6375 from "module_6375" /* 6375 */;
import _mod6422 from "module_6422" /* 6422 */;


export default function HasProperty(arg0, arg1) {
  if (_mod6375(arg0)) {
    if (_mod6422(arg1)) {
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