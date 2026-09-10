// === Module 4913: HasProperty ===

// Module 4913 (HasProperty)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4854 from "module_4854" /* 4854 */;
import _mod4901 from "module_4901" /* 4901 */;


export default function HasProperty(arg0, arg1) {
  if (_mod4854(arg0)) {
    if (_mod4901(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new _mod1283("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1283("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};