// === Module 6445: FromPropertyDescriptor ===

// Module 6445 (FromPropertyDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6439 from "module_6439" /* 6439 */;
import _mod6446 from "module_6446" /* 6446 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6439(arg0)) {
      const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6446(arg0);
};