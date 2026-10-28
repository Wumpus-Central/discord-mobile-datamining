// === Module 6482: FromPropertyDescriptor ===

// Module 6482 (FromPropertyDescriptor)
import _mod1305 from "module_1305" /* 1305 */;
import _mod6476 from "module_6476" /* 6476 */;
import _mod6483 from "module_6483" /* 6483 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6476(arg0)) {
      const tmp5 = new _mod1305("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6483(arg0);
};