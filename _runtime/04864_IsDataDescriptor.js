// _runtime/04864_IsDataDescriptor.js
import _mod4860 from "metro/04860__.js";

export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4860(arg0)) {
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
}
