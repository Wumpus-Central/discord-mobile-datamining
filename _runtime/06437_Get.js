// === Module 6437: Get ===

// Module 6437 (Get)
import _mod1305 from "module_1305" /* 1305 */;
import _mod1339 from "module_1339" /* 1339 */;
import _mod6391 from "module_6391" /* 6391 */;
import _mod6438 from "module_6438" /* 6438 */;


export default function Get(arg0, arg1) {
  if (_mod6391(arg0)) {
    if (_mod6438(arg1)) {
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