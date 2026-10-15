// === Module 5926: HasProperty ===

// Module 5926 (HasProperty)
import _mod1306 from "module_1306" /* 1306 */;
import _mod5867 from "module_5867" /* 5867 */;
import _mod5914 from "module_5914" /* 5914 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5867(arg0)) {
    if (_mod5914(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new _mod1306("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1306("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};