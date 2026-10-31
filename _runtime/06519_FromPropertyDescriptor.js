// === Module 6519: FromPropertyDescriptor ===

// Module 6519 (FromPropertyDescriptor)
import _mod1293 from "module_1293" /* 1293 */;
import _mod6513 from "module_6513" /* 6513 */;
import _mod6520 from "module_6520" /* 6520 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6513(arg0)) {
      const tmp5 = new _mod1293("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6520(arg0);
};