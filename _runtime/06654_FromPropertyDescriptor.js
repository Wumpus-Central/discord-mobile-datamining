// === Module 6654: FromPropertyDescriptor ===

// Module 6654 (FromPropertyDescriptor)
import _mod1293 from "module_1293" /* 1293 */;
import _mod6648 from "module_6648" /* 6648 */;
import _mod6655 from "module_6655" /* 6655 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6648(arg0)) {
      const tmp5 = new _mod1293("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6655(arg0);
};