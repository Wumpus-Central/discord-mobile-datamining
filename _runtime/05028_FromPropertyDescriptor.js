// === Module 5028: FromPropertyDescriptor ===

// Module 5028 (FromPropertyDescriptor)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5022 from "module_5022" /* 5022 */;
import _mod5029 from "module_5029" /* 5029 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5022(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5029(arg0);
};