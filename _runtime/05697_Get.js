// === Module 5697: Get ===

// Module 5697 (Get)
import _mod1306 from "module_1306" /* 1306 */;
import _mod1340 from "module_1340" /* 1340 */;
import _mod5651 from "module_5651" /* 5651 */;
import _mod5698 from "module_5698" /* 5698 */;


export default function Get(arg0, arg1) {
  if (_mod5651(arg0)) {
    if (_mod5698(arg1)) {
      return arg0[arg1];
    } else {
      const tmpResult1 = new _mod1306("Assertion failed: P is not a Property Key, got " + _mod1340(arg1));
      throw tmpResult1;
    }
  } else {
    const tmp5 = new _mod1306("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};