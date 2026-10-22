// === Module 6433: FromPropertyDescriptor ===

// Module 6433 (FromPropertyDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6427 from "module_6427" /* 6427 */;
import _mod6434 from "module_6434" /* 6434 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6427(arg0)) {
      const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6434(arg0);
};