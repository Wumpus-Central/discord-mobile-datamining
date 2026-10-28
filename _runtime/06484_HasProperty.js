// === Module 6484: HasProperty ===

// Module 6484 (HasProperty)
import _mod1305 from "module_1305" /* 1305 */;
import _mod6425 from "module_6425" /* 6425 */;
import _mod6472 from "module_6472" /* 6472 */;


export default function HasProperty(arg0, arg1) {
  if (_mod6425(arg0)) {
    if (_mod6472(arg1)) {
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