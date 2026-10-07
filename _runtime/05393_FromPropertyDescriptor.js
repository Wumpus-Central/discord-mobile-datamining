// === Module 5393: FromPropertyDescriptor ===

// Module 5393 (FromPropertyDescriptor)
import _mod1293 from "module_1293" /* 1293 */;
import _mod5387 from "module_5387" /* 5387 */;
import _mod5394 from "module_5394" /* 5394 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5387(arg0)) {
      const tmp5 = new _mod1293("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5394(arg0);
};