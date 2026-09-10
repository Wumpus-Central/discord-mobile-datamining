// === Module 4900: Get ===

// Module 4900 (Get)
import _mod1283 from "module_1283" /* 1283 */;
import _mod1317 from "module_1317" /* 1317 */;
import _mod4854 from "module_4854" /* 4854 */;
import _mod4901 from "module_4901" /* 4901 */;


export default function Get(arg0, arg1) {
  if (_mod4854(arg0)) {
    if (_mod4901(arg1)) {
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