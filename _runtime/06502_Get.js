// === Module 6502: Get ===

// Module 6502 (Get)
import _mod1294 from "module_1294" /* 1294 */;
import _mod1328 from "module_1328" /* 1328 */;
import _mod6456 from "module_6456" /* 6456 */;
import _mod6503 from "module_6503" /* 6503 */;


export default function Get(arg0, arg1) {
  if (_mod6456(arg0)) {
    if (_mod6503(arg1)) {
      return arg0[arg1];
    } else {
      const tmpResult1 = new _mod1294("Assertion failed: P is not a Property Key, got " + _mod1328(arg1));
      throw tmpResult1;
    }
  } else {
    const tmp5 = new _mod1294("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};