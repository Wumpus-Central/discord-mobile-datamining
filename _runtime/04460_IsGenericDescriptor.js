// === Module 4460: IsGenericDescriptor ===

// Module 4460 (IsGenericDescriptor)
import _mod541 from "module_541" /* 541 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 4442 */;
import IsDataDescriptor from "IsDataDescriptor" /* 4446 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 4455 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    const tmp7 = IsAccessorDescriptor(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !IsDataDescriptor(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new _mod541("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};