// === Module 5342: HasProperty ===

// Module 5342 (HasProperty)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5283 from "module_5283" /* 5283 */;
import _mod5330 from "module_5330" /* 5330 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5283(arg0)) {
    if (_mod5330(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new _mod1282("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1282("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};