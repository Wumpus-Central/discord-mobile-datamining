// === Module 6402: IsDataDescriptor ===

// Module 6402 (IsDataDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import _mod1340 from "module_1340" /* 1340 */;
import _mod6398 from "module_6398" /* 6398 */;


export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod6398(arg0)) {
    const tmp7 = _mod1340(arg0, "[[Value]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !_mod1340(arg0, "[[Writable]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};