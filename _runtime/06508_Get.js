// === Module 6508: Get ===

// Module 6508 (Get)
import _mod1293 from "module_1293" /* 1293 */;
import _mod1327 from "module_1327" /* 1327 */;
import _mod6462 from "module_6462" /* 6462 */;
import _mod6509 from "module_6509" /* 6509 */;


export default function Get(arg0, arg1) {
  if (_mod6462(arg0)) {
    if (_mod6509(arg1)) {
      return arg0[arg1];
    } else {
      const tmpResult1 = new _mod1293("Assertion failed: P is not a Property Key, got " + _mod1327(arg1));
      throw tmpResult1;
    }
  } else {
    const tmp5 = new _mod1293("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};