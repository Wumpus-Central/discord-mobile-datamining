// === Module 4919: IsAccessorDescriptor ===

// Module 4919 (IsAccessorDescriptor)
import _mod1283 from "module_1283" /* 1283 */;
import _mod1315 from "module_1315" /* 1315 */;
import _mod4906 from "module_4906" /* 4906 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4906(arg0)) {
    const tmp7 = _mod1315(arg0, "[[Get]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !_mod1315(arg0, "[[Set]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new _mod1283("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};