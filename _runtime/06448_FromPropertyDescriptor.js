// === Module 6448: FromPropertyDescriptor ===

// Module 6448 (FromPropertyDescriptor)
import _mod1305 from "module_1305" /* 1305 */;
import _mod6442 from "module_6442" /* 6442 */;
import _mod6449 from "module_6449" /* 6449 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6442(arg0)) {
      const tmp5 = new _mod1305("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6449(arg0);
};