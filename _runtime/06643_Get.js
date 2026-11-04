// === Module 6643: Get ===

// Module 6643 (Get)
import _mod1293 from "module_1293" /* 1293 */;
import _mod1327 from "module_1327" /* 1327 */;
import _mod6597 from "module_6597" /* 6597 */;
import _mod6644 from "module_6644" /* 6644 */;


export default function Get(arg0, arg1) {
  if (_mod6597(arg0)) {
    if (_mod6644(arg1)) {
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