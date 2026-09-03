// === Module 4827: IsAccessorDescriptor ===

// Module 4827 (IsAccessorDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 4814 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    const tmp7 = tmp(570)(arg0, "[[Get]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(570)(arg0, "[[Set]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new tmp(538)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};