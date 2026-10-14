// === Module 5715: HasProperty ===

// Module 5715 (HasProperty)
import _mod1306 from "module_1306" /* 1306 */;
import _mod5656 from "module_5656" /* 5656 */;
import _mod5703 from "module_5703" /* 5703 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5656(arg0)) {
    if (_mod5703(arg1)) {
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