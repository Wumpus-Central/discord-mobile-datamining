// === Module 6449: HasProperty ===

// Module 6449 (HasProperty)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6390 from "module_6390" /* 6390 */;
import _mod6437 from "module_6437" /* 6437 */;


export default function HasProperty(arg0, arg1) {
  if (_mod6390(arg0)) {
    if (_mod6437(arg1)) {
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