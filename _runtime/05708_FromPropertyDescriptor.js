// === Module 5708: FromPropertyDescriptor ===

// Module 5708 (FromPropertyDescriptor)
import _mod1306 from "module_1306" /* 1306 */;
import _mod5702 from "module_5702" /* 5702 */;
import _mod5709 from "module_5709" /* 5709 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5702(arg0)) {
      const tmp5 = new _mod1306("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5709(arg0);
};