// === Module 4869: Get ===

// Module 4869 (Get)
import _mod1283 from "module_1283" /* 1283 */;
import _mod1317 from "module_1317" /* 1317 */;
import _mod4823 from "module_4823" /* 4823 */;
import _mod4870 from "module_4870" /* 4870 */;


export default function Get(arg0, arg1) {
  if (_mod4823(arg0)) {
    if (_mod4870(arg1)) {
      return arg0[arg1];
    } else {
      let tmpResult = _mod1283;
      tmpResult = new tmpResult("Assertion failed: P is not a Property Key, got " + _mod1317(arg1));
      throw tmpResult;
    }
  } else {
    const tmp5 = new _mod1283("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};