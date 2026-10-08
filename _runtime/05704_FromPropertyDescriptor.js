// === Module 5704: FromPropertyDescriptor ===

// Module 5704 (FromPropertyDescriptor)
import _mod1305 from "module_1305" /* 1305 */;
import _mod5698 from "module_5698" /* 5698 */;
import _mod5705 from "module_5705" /* 5705 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5698(arg0)) {
      const tmp5 = new _mod1305("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5705(arg0);
};