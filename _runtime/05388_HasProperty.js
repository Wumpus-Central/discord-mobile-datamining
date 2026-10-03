// === Module 5388: HasProperty ===

// Module 5388 (HasProperty)
import _mod1293 from "module_1293" /* 1293 */;
import _mod5329 from "module_5329" /* 5329 */;
import _mod5376 from "module_5376" /* 5376 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5329(arg0)) {
    if (_mod5376(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new _mod1293("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1293("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};