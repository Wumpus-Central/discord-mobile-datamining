// === Module 4460: IsGenericDescriptor ===

// Module 4460 (IsGenericDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 4442 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    const tmp7 = tmp(4455)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(4446)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};