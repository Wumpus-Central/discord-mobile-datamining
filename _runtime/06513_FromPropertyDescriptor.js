// === Module 6513: FromPropertyDescriptor ===

// Module 6513 (FromPropertyDescriptor)
import _mod1294 from "module_1294" /* 1294 */;
import _mod6507 from "module_6507" /* 6507 */;
import _mod6514 from "module_6514" /* 6514 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6507(arg0)) {
      const tmp5 = new _mod1294("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6514(arg0);
};