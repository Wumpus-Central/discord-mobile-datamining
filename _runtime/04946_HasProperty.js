// === Module 4946: HasProperty ===

// Module 4946 (HasProperty)
import _mod1282 from "module_1282" /* 1282 */;
import _mod4887 from "module_4887" /* 4887 */;
import _mod4934 from "module_4934" /* 4934 */;


export default function HasProperty(arg0, arg1) {
  if (_mod4887(arg0)) {
    if (_mod4934(arg1)) {
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