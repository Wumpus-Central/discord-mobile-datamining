// === Module 6432: FromPropertyDescriptor ===

// Module 6432 (FromPropertyDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6426 from "module_6426" /* 6426 */;
import _mod6433 from "module_6433" /* 6433 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6426(arg0)) {
      const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6433(arg0);
};