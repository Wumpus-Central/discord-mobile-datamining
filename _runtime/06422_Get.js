// === Module 6422: Get ===

// Module 6422 (Get)
import _mod1308 from "module_1308" /* 1308 */;
import _mod1342 from "module_1342" /* 1342 */;
import _mod6376 from "module_6376" /* 6376 */;
import _mod6423 from "module_6423" /* 6423 */;


export default function Get(arg0, arg1) {
  if (_mod6376(arg0)) {
    if (_mod6423(arg1)) {
      return arg0[arg1];
    } else {
      const tmpResult1 = new _mod1308("Assertion failed: P is not a Property Key, got " + _mod1342(arg1));
      throw tmpResult1;
    }
  } else {
    const tmp5 = new _mod1308("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};