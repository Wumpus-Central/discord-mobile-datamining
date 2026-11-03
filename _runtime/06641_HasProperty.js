// === Module 6641: HasProperty ===

// Module 6641 (HasProperty)
import _mod1293 from "module_1293" /* 1293 */;
import _mod6582 from "module_6582" /* 6582 */;
import _mod6629 from "module_6629" /* 6629 */;


export default function HasProperty(arg0, arg1) {
  if (_mod6582(arg0)) {
    if (_mod6629(arg1)) {
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