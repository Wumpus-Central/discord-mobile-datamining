// === Module 4880: FromPropertyDescriptor ===

// Module 4880 (FromPropertyDescriptor)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4874 from "module_4874" /* 4874 */;
import _mod4881 from "module_4881" /* 4881 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod4874(arg0)) {
      const tmp5 = new _mod1283("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod4881(arg0);
};