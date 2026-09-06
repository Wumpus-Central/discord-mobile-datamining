// === Module 4864: IsDataDescriptor ===

// Module 4864 (IsDataDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 4860 */;


export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    const tmp7 = tmp(1315)(arg0, "[[Value]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(1315)(arg0, "[[Writable]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};