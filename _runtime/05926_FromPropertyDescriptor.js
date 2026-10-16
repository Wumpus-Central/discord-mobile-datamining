// === Module 5926: FromPropertyDescriptor ===

// Module 5926 (FromPropertyDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import _mod5920 from "module_5920" /* 5920 */;
import _mod5927 from "module_5927" /* 5927 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5920(arg0)) {
      const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5927(arg0);
};