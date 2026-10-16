// === Module 5927: FromPropertyDescriptor ===

// Module 5927 (FromPropertyDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import _mod5921 from "module_5921" /* 5921 */;
import _mod5928 from "module_5928" /* 5928 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5921(arg0)) {
      const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5928(arg0);
};