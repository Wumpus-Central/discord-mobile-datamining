// === Module 6408: IsAccessorDescriptor ===

// Module 6408 (IsAccessorDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import _mod1340 from "module_1340" /* 1340 */;
import _mod6395 from "module_6395" /* 6395 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod6395(arg0)) {
    const tmp7 = _mod1340(arg0, "[[Get]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !_mod1340(arg0, "[[Set]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};