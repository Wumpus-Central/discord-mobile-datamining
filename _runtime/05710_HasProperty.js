// === Module 5710: HasProperty ===

// Module 5710 (HasProperty)
import _mod1306 from "module_1306" /* 1306 */;
import _mod5651 from "module_5651" /* 5651 */;
import _mod5698 from "module_5698" /* 5698 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5651(arg0)) {
    if (_mod5698(arg1)) {
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