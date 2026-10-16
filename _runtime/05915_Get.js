// === Module 5915: Get ===

// Module 5915 (Get)
import _mod1308 from "module_1308" /* 1308 */;
import _mod1342 from "module_1342" /* 1342 */;
import _mod5869 from "module_5869" /* 5869 */;
import _mod5916 from "module_5916" /* 5916 */;


export default function Get(arg0, arg1) {
  if (_mod5869(arg0)) {
    if (_mod5916(arg1)) {
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