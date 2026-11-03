// === Module 6639: FromPropertyDescriptor ===

// Module 6639 (FromPropertyDescriptor)
import _mod1293 from "module_1293" /* 1293 */;
import _mod6633 from "module_6633" /* 6633 */;
import _mod6640 from "module_6640" /* 6640 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6633(arg0)) {
      const tmp5 = new _mod1293("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6640(arg0);
};