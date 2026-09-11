// === Module 4924: IsGenericDescriptor ===

// Module 4924 (IsGenericDescriptor)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4906 from "module_4906" /* 4906 */;
import IsDataDescriptor from "IsDataDescriptor" /* 4910 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 4919 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4906(arg0)) {
    const tmp7 = IsAccessorDescriptor(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !IsDataDescriptor(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new _mod1283("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};