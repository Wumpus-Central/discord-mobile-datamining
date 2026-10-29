// === Module 6506: FromPropertyDescriptor ===

// Module 6506 (FromPropertyDescriptor)
import _mod1305 from "module_1305" /* 1305 */;
import _mod6500 from "module_6500" /* 6500 */;
import _mod6507 from "module_6507" /* 6507 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6500(arg0)) {
      const tmp5 = new _mod1305("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6507(arg0);
};