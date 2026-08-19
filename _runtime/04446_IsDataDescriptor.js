// === Module 4446: IsDataDescriptor ===

// Module 4446 (IsDataDescriptor)
import _mod541 from "module_541" /* 541 */;
import bind from "bind" /* 573 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 4442 */;


export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    const tmp7 = bind(arg0, "[[Value]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !bind(arg0, "[[Writable]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new _mod541("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};