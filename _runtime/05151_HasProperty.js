// === Module 5151: HasProperty ===

// Module 5151 (HasProperty)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5092 from "module_5092" /* 5092 */;
import _mod5139 from "module_5139" /* 5139 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5092(arg0)) {
    if (_mod5139(arg1)) {
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