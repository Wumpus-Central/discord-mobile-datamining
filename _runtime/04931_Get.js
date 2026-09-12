// === Module 4931: Get ===

// Module 4931 (Get)
import _mod1283 from "module_1283" /* 1283 */;
import _mod1317 from "module_1317" /* 1317 */;
import _mod4885 from "module_4885" /* 4885 */;
import _mod4932 from "module_4932" /* 4932 */;


export default function Get(arg0, arg1) {
  if (_mod4885(arg0)) {
    if (_mod4932(arg1)) {
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