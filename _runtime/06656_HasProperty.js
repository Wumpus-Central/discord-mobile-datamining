// === Module 6656: HasProperty ===

// Module 6656 (HasProperty)
import _mod1293 from "module_1293" /* 1293 */;
import _mod6597 from "module_6597" /* 6597 */;
import _mod6644 from "module_6644" /* 6644 */;


export default function HasProperty(arg0, arg1) {
  if (_mod6597(arg0)) {
    if (_mod6644(arg1)) {
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