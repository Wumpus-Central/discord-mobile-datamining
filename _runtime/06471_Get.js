// === Module 6471: Get ===

// Module 6471 (Get)
import _mod1305 from "module_1305" /* 1305 */;
import _mod1339 from "module_1339" /* 1339 */;
import _mod6425 from "module_6425" /* 6425 */;
import _mod6472 from "module_6472" /* 6472 */;


export default function Get(arg0, arg1) {
  if (_mod6425(arg0)) {
    if (_mod6472(arg1)) {
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