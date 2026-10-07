// === Module 5395: HasProperty ===

// Module 5395 (HasProperty)
import _mod1293 from "module_1293" /* 1293 */;
import _mod5336 from "module_5336" /* 5336 */;
import _mod5383 from "module_5383" /* 5383 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5336(arg0)) {
    if (_mod5383(arg1)) {
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