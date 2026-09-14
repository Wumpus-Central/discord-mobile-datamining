// === Module 4942: FromPropertyDescriptor ===

// Module 4942 (FromPropertyDescriptor)
import _mod1281 from "module_1281" /* 1281 */;
import _mod4936 from "module_4936" /* 4936 */;
import _mod4943 from "module_4943" /* 4943 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod4936(arg0)) {
      const tmp5 = new _mod1281("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod4943(arg0);
};