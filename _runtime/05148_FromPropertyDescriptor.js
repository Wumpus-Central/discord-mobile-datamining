// === Module 5148: FromPropertyDescriptor ===

// Module 5148 (FromPropertyDescriptor)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5142 from "module_5142" /* 5142 */;
import _mod5149 from "module_5149" /* 5149 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5142(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5149(arg0);
};