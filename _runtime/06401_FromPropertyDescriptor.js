// === Module 6401: FromPropertyDescriptor ===

// Module 6401 (FromPropertyDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6395 from "module_6395" /* 6395 */;
import _mod6402 from "module_6402" /* 6402 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6395(arg0)) {
      const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6402(arg0);
};