// === Module 6450: HasProperty ===

// Module 6450 (HasProperty)
import _mod1305 from "module_1305" /* 1305 */;
import _mod6391 from "module_6391" /* 6391 */;
import _mod6438 from "module_6438" /* 6438 */;


export default function HasProperty(arg0, arg1) {
  if (_mod6391(arg0)) {
    if (_mod6438(arg1)) {
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