// === Module 6657: FromPropertyDescriptor ===

// Module 6657 (FromPropertyDescriptor)
import _mod1293 from "module_1293" /* 1293 */;
import _mod6651 from "module_6651" /* 6651 */;
import _mod6658 from "module_6658" /* 6658 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6651(arg0)) {
      const tmp5 = new _mod1293("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6658(arg0);
};