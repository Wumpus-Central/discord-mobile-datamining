// === Module 6508: HasProperty ===

// Module 6508 (HasProperty)
import _mod1305 from "module_1305" /* 1305 */;
import _mod6449 from "module_6449" /* 6449 */;
import _mod6496 from "module_6496" /* 6496 */;


export default function HasProperty(arg0, arg1) {
  if (_mod6449(arg0)) {
    if (_mod6496(arg1)) {
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