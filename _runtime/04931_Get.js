// === Module 4931: Get ===

// Module 4931 (Get)
import _mod1281 from "module_1281" /* 1281 */;
import _mod1315 from "module_1315" /* 1315 */;
import _mod4885 from "module_4885" /* 4885 */;
import _mod4932 from "module_4932" /* 4932 */;


export default function Get(arg0, arg1) {
  if (_mod4885(arg0)) {
    if (_mod4932(arg1)) {
      return arg0[arg1];
    } else {
      const tmpResult1 = new _mod1281("Assertion failed: P is not a Property Key, got " + _mod1315(arg1));
      throw tmpResult1;
    }
  } else {
    const tmp5 = new _mod1281("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};