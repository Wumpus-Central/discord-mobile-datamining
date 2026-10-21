// === Module 6415: Get ===

// Module 6415 (Get)
import _mod1308 from "module_1308" /* 1308 */;
import _mod1342 from "module_1342" /* 1342 */;
import _mod6369 from "module_6369" /* 6369 */;
import _mod6416 from "module_6416" /* 6416 */;


export default function Get(arg0, arg1) {
  if (_mod6369(arg0)) {
    if (_mod6416(arg1)) {
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