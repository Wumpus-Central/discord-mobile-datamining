// === Module 5707: HasProperty ===

// Module 5707 (HasProperty)
import _mod1306 from "module_1306" /* 1306 */;
import _mod5648 from "module_5648" /* 5648 */;
import _mod5695 from "module_5695" /* 5695 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5648(arg0)) {
    if (_mod5695(arg1)) {
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