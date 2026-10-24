// === Module 6459: IsGenericDescriptor ===

// Module 6459 (IsGenericDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6441 from "module_6441" /* 6441 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6445 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 6454 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod6441(arg0)) {
    const tmp7 = IsAccessorDescriptor(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !IsDataDescriptor(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};