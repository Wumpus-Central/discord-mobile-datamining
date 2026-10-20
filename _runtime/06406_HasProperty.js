// === Module 6406: HasProperty ===

// Module 6406 (HasProperty)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6347 from "module_6347" /* 6347 */;
import _mod6394 from "module_6394" /* 6394 */;


export default function HasProperty(arg0, arg1) {
  if (_mod6347(arg0)) {
    if (_mod6394(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new _mod1308("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1308("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};