// === Module 5929: HasProperty ===

// Module 5929 (HasProperty)
import _mod1308 from "module_1308" /* 1308 */;
import _mod5870 from "module_5870" /* 5870 */;
import _mod5917 from "module_5917" /* 5917 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5870(arg0)) {
    if (_mod5917(arg1)) {
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