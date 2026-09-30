// === Module 5352: FromPropertyDescriptor ===

// Module 5352 (FromPropertyDescriptor)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5346 from "module_5346" /* 5346 */;
import _mod5353 from "module_5353" /* 5353 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5346(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5353(arg0);
};