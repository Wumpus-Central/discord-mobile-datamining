// === Module 4911: FromPropertyDescriptor ===

// Module 4911 (FromPropertyDescriptor)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4905 from "module_4905" /* 4905 */;
import _mod4912 from "module_4912" /* 4912 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod4905(arg0)) {
      const tmp5 = new _mod1283("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod4912(arg0);
};