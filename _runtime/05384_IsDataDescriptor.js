// === Module 5384: IsDataDescriptor ===

// Module 5384 (IsDataDescriptor)
import _mod1293 from "module_1293" /* 1293 */;
import _mod1325 from "module_1325" /* 1325 */;
import _mod5380 from "module_5380" /* 5380 */;


export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5380(arg0)) {
    const tmp7 = _mod1325(arg0, "[[Value]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !_mod1325(arg0, "[[Writable]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new _mod1293("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};