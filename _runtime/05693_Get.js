// === Module 5693: Get ===

// Module 5693 (Get)
import _mod1305 from "module_1305" /* 1305 */;
import _mod1339 from "module_1339" /* 1339 */;
import _mod5647 from "module_5647" /* 5647 */;
import _mod5694 from "module_5694" /* 5694 */;


export default function Get(arg0, arg1) {
  if (_mod5647(arg0)) {
    if (_mod5694(arg1)) {
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