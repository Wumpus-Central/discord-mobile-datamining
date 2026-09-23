// === Module 5146: FromPropertyDescriptor ===

// Module 5146 (FromPropertyDescriptor)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5140 from "module_5140" /* 5140 */;
import _mod5147 from "module_5147" /* 5147 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5140(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5147(arg0);
};