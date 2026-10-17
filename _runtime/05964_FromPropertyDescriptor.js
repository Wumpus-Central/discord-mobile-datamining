// === Module 5964: FromPropertyDescriptor ===

// Module 5964 (FromPropertyDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import _mod5958 from "module_5958" /* 5958 */;
import _mod5965 from "module_5965" /* 5965 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5958(arg0)) {
      const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5965(arg0);
};