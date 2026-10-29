// === Module 6495: Get ===

// Module 6495 (Get)
import _mod1305 from "module_1305" /* 1305 */;
import _mod1339 from "module_1339" /* 1339 */;
import _mod6449 from "module_6449" /* 6449 */;
import _mod6496 from "module_6496" /* 6496 */;


export default function Get(arg0, arg1) {
  if (_mod6449(arg0)) {
    if (_mod6496(arg1)) {
      return arg0[arg1];
    } else {
      const tmpResult1 = new _mod1305("Assertion failed: P is not a Property Key, got " + _mod1339(arg1));
      throw tmpResult1;
    }
  } else {
    const tmp5 = new _mod1305("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};