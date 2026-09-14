// === Module 4949: IsAccessorDescriptor ===

// Module 4949 (IsAccessorDescriptor)
import _mod1281 from "module_1281" /* 1281 */;
import _mod1313 from "module_1313" /* 1313 */;
import _mod4936 from "module_4936" /* 4936 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4936(arg0)) {
    const tmp7 = _mod1313(arg0, "[[Get]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !_mod1313(arg0, "[[Set]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new _mod1281("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};