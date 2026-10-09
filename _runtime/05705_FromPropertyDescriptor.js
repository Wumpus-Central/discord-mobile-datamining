// === Module 5705: FromPropertyDescriptor ===

// Module 5705 (FromPropertyDescriptor)
import _mod1306 from "module_1306" /* 1306 */;
import _mod5699 from "module_5699" /* 5699 */;
import _mod5706 from "module_5706" /* 5706 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5699(arg0)) {
      const tmp5 = new _mod1306("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5706(arg0);
};