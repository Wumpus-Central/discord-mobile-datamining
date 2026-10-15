// === Module 5924: FromPropertyDescriptor ===

// Module 5924 (FromPropertyDescriptor)
import _mod1306 from "module_1306" /* 1306 */;
import _mod5918 from "module_5918" /* 5918 */;
import _mod5925 from "module_5925" /* 5925 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5918(arg0)) {
      const tmp5 = new _mod1306("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5925(arg0);
};