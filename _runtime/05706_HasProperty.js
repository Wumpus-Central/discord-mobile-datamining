// === Module 5706: HasProperty ===

// Module 5706 (HasProperty)
import _mod1305 from "module_1305" /* 1305 */;
import _mod5647 from "module_5647" /* 5647 */;
import _mod5694 from "module_5694" /* 5694 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5647(arg0)) {
    if (_mod5694(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new _mod1305("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1305("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};