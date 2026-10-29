// === Module 6504: IsDataDescriptor ===

// Module 6504 (IsDataDescriptor)
import _mod1305 from "module_1305" /* 1305 */;
import _mod1337 from "module_1337" /* 1337 */;
import _mod6500 from "module_6500" /* 6500 */;


export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod6500(arg0)) {
    const tmp7 = _mod1337(arg0, "[[Value]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !_mod1337(arg0, "[[Writable]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new _mod1305("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};