// === Module 6661: IsAccessorDescriptor ===

// Module 6661 (IsAccessorDescriptor)
import _mod1293 from "module_1293" /* 1293 */;
import _mod1325 from "module_1325" /* 1325 */;
import _mod6648 from "module_6648" /* 6648 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod6648(arg0)) {
    const tmp7 = _mod1325(arg0, "[[Get]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !_mod1325(arg0, "[[Set]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new _mod1293("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};