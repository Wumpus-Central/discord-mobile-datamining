// === Module 6659: HasProperty ===

// Module 6659 (HasProperty)
import _mod1293 from "module_1293" /* 1293 */;
import _mod6600 from "module_6600" /* 6600 */;
import _mod6647 from "module_6647" /* 6647 */;


export default function HasProperty(arg0, arg1) {
  if (_mod6600(arg0)) {
    if (_mod6647(arg1)) {
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