// === Module 5322: FromPropertyDescriptor ===

// Module 5322 (FromPropertyDescriptor)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5316 from "module_5316" /* 5316 */;
import _mod5323 from "module_5323" /* 5323 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5316(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5323(arg0);
};