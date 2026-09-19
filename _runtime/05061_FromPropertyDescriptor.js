// === Module 5061: FromPropertyDescriptor ===

// Module 5061 (FromPropertyDescriptor)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5055 from "module_5055" /* 5055 */;
import _mod5062 from "module_5062" /* 5062 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5055(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5062(arg0);
};