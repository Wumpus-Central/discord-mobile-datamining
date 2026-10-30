// === Module 6511: IsDataDescriptor ===

// Module 6511 (IsDataDescriptor)
import _mod1294 from "module_1294" /* 1294 */;
import _mod1326 from "module_1326" /* 1326 */;
import _mod6507 from "module_6507" /* 6507 */;


export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod6507(arg0)) {
    const tmp7 = _mod1326(arg0, "[[Value]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !_mod1326(arg0, "[[Writable]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new _mod1294("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};