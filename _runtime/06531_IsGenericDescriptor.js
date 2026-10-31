// === Module 6531: IsGenericDescriptor ===

// Module 6531 (IsGenericDescriptor)
import _mod1293 from "module_1293" /* 1293 */;
import _mod6513 from "module_6513" /* 6513 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6517 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 6526 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod6513(arg0)) {
    const tmp7 = IsAccessorDescriptor(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !IsDataDescriptor(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new _mod1293("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};