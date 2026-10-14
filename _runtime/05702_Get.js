// === Module 5702: Get ===

// Module 5702 (Get)
import _mod1306 from "module_1306" /* 1306 */;
import _mod1340 from "module_1340" /* 1340 */;
import _mod5656 from "module_5656" /* 5656 */;
import _mod5703 from "module_5703" /* 5703 */;


export default function Get(arg0, arg1) {
  if (_mod5656(arg0)) {
    if (_mod5703(arg1)) {
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