// === Module 6521: HasProperty ===

// Module 6521 (HasProperty)
import _mod1293 from "module_1293" /* 1293 */;
import _mod6462 from "module_6462" /* 6462 */;
import _mod6509 from "module_6509" /* 6509 */;


export default function HasProperty(arg0, arg1) {
  if (_mod6462(arg0)) {
    if (_mod6509(arg1)) {
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