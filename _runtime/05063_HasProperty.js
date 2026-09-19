// === Module 5063: HasProperty ===

// Module 5063 (HasProperty)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5004 from "module_5004" /* 5004 */;
import _mod5051 from "module_5051" /* 5051 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5004(arg0)) {
    if (_mod5051(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new _mod1282("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1282("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};