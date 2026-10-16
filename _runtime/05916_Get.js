// === Module 5916: Get ===

// Module 5916 (Get)
import _mod1308 from "module_1308" /* 1308 */;
import _mod1342 from "module_1342" /* 1342 */;
import _mod5870 from "module_5870" /* 5870 */;
import _mod5917 from "module_5917" /* 5917 */;


export default function Get(arg0, arg1) {
  if (_mod5870(arg0)) {
    if (_mod5917(arg1)) {
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