// === Module 5340: FromPropertyDescriptor ===

// Module 5340 (FromPropertyDescriptor)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5334 from "module_5334" /* 5334 */;
import _mod5341 from "module_5341" /* 5341 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5334(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5341(arg0);
};