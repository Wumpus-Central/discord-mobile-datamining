// === Module 5148: HasProperty ===

// Module 5148 (HasProperty)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5089 from "module_5089" /* 5089 */;
import _mod5136 from "module_5136" /* 5136 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5089(arg0)) {
    if (_mod5136(arg1)) {
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