// === Module 6403: HasProperty ===

// Module 6403 (HasProperty)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6344 from "module_6344" /* 6344 */;
import _mod6391 from "module_6391" /* 6391 */;


export default function HasProperty(arg0, arg1) {
  if (_mod6344(arg0)) {
    if (_mod6391(arg1)) {
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