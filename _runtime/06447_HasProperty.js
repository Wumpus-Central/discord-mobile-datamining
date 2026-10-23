// === Module 6447: HasProperty ===

// Module 6447 (HasProperty)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6388 from "module_6388" /* 6388 */;
import _mod6435 from "module_6435" /* 6435 */;


export default function HasProperty(arg0, arg1) {
  if (_mod6388(arg0)) {
    if (_mod6435(arg1)) {
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