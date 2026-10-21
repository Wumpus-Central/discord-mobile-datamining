// === Module 6428: HasProperty ===

// Module 6428 (HasProperty)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6369 from "module_6369" /* 6369 */;
import _mod6416 from "module_6416" /* 6416 */;


export default function HasProperty(arg0, arg1) {
  if (_mod6369(arg0)) {
    if (_mod6416(arg1)) {
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