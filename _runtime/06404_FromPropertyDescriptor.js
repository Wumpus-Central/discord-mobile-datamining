// === Module 6404: FromPropertyDescriptor ===

// Module 6404 (FromPropertyDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6398 from "module_6398" /* 6398 */;
import _mod6405 from "module_6405" /* 6405 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6398(arg0)) {
      const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6405(arg0);
};