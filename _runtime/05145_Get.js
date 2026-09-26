// === Module 5145: Get ===

// Module 5145 (Get)
import _mod1282 from "module_1282" /* 1282 */;
import _mod1316 from "module_1316" /* 1316 */;
import _mod5099 from "module_5099" /* 5099 */;
import _mod5146 from "module_5146" /* 5146 */;


export default function Get(arg0, arg1) {
  if (_mod5099(arg0)) {
    if (_mod5146(arg1)) {
      return arg0[arg1];
    } else {
      const tmpResult1 = new _mod1282("Assertion failed: P is not a Property Key, got " + _mod1316(arg1));
      throw tmpResult1;
    }
  } else {
    const tmp5 = new _mod1282("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};