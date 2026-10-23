// === Module 6421: Get ===

// Module 6421 (Get)
import _mod1308 from "module_1308" /* 1308 */;
import _mod1342 from "module_1342" /* 1342 */;
import _mod6375 from "module_6375" /* 6375 */;
import _mod6422 from "module_6422" /* 6422 */;


export default function Get(arg0, arg1) {
  if (_mod6375(arg0)) {
    if (_mod6422(arg1)) {
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