// === Module 4866: FromPropertyDescriptor ===

// Module 4866 (FromPropertyDescriptor)
import _mod4860 from "module_4860" /* 4860 */;
import _mod4867 from "module_4867" /* 4867 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod4860(arg0)) {
      const tmp5 = new tmp(1283)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return _mod4867(arg0);
};