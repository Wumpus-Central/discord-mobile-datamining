// === Module 6515: HasProperty ===

// Module 6515 (HasProperty)
import _mod1294 from "module_1294" /* 1294 */;
import _mod6456 from "module_6456" /* 6456 */;
import _mod6503 from "module_6503" /* 6503 */;


export default function HasProperty(arg0, arg1) {
  if (_mod6456(arg0)) {
    if (_mod6503(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new _mod1294("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1294("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};