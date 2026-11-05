// === Module 6646: Get ===

// Module 6646 (Get)
import _mod1293 from "module_1293" /* 1293 */;
import _mod1327 from "module_1327" /* 1327 */;
import _mod6600 from "module_6600" /* 6600 */;
import _mod6647 from "module_6647" /* 6647 */;


export default function Get(arg0, arg1) {
  if (_mod6600(arg0)) {
    if (_mod6647(arg1)) {
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