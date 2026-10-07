// === Module 5382: Get ===

// Module 5382 (Get)
import _mod1293 from "module_1293" /* 1293 */;
import _mod1327 from "module_1327" /* 1327 */;
import _mod5336 from "module_5336" /* 5336 */;
import _mod5383 from "module_5383" /* 5383 */;


export default function Get(arg0, arg1) {
  if (_mod5336(arg0)) {
    if (_mod5383(arg1)) {
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