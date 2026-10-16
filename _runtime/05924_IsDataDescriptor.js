// === Module 5924: IsDataDescriptor ===

// Module 5924 (IsDataDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import _mod1340 from "module_1340" /* 1340 */;
import _mod5920 from "module_5920" /* 5920 */;


export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5920(arg0)) {
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