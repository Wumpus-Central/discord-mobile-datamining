// === Module 4954: IsGenericDescriptor ===

// Module 4954 (IsGenericDescriptor)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4936 from "module_4936" /* 4936 */;
import IsDataDescriptor from "IsDataDescriptor" /* 4940 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 4949 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4936(arg0)) {
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