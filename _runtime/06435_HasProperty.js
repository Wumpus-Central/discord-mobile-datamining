// === Module 6435: HasProperty ===

// Module 6435 (HasProperty)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6376 from "module_6376" /* 6376 */;
import _mod6423 from "module_6423" /* 6423 */;


export default function HasProperty(arg0, arg1) {
  if (_mod6376(arg0)) {
    if (_mod6423(arg1)) {
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