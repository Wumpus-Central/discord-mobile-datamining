// === Module 4946: FromPropertyDescriptor ===

// Module 4946 (FromPropertyDescriptor)
import _mod1282 from "module_1282" /* 1282 */;
import _mod4940 from "module_4940" /* 4940 */;
import _mod4947 from "module_4947" /* 4947 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod4940(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod4947(arg0);
};