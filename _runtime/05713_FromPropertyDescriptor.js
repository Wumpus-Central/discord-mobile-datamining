// === Module 5713: FromPropertyDescriptor ===

// Module 5713 (FromPropertyDescriptor)
import _mod1306 from "module_1306" /* 1306 */;
import _mod5707 from "module_5707" /* 5707 */;
import _mod5714 from "module_5714" /* 5714 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5707(arg0)) {
      const tmp5 = new _mod1306("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5714(arg0);
};