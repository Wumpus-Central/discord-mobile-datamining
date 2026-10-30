// === Module 6525: IsGenericDescriptor ===

// Module 6525 (IsGenericDescriptor)
import _mod1294 from "module_1294" /* 1294 */;
import _mod6507 from "module_6507" /* 6507 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6511 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 6520 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod6507(arg0)) {
    const tmp7 = IsAccessorDescriptor(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !IsDataDescriptor(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new _mod1294("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};