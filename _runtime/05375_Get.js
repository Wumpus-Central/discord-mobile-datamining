// === Module 5375: Get ===

// Module 5375 (Get)
import _mod1293 from "module_1293" /* 1293 */;
import _mod1327 from "module_1327" /* 1327 */;
import _mod5329 from "module_5329" /* 5329 */;
import _mod5376 from "module_5376" /* 5376 */;


export default function Get(arg0, arg1) {
  if (_mod5329(arg0)) {
    if (_mod5376(arg1)) {
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