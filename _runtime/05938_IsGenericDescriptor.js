// === Module 5938: IsGenericDescriptor ===

// Module 5938 (IsGenericDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import _mod5920 from "module_5920" /* 5920 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5924 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 5933 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5920(arg0)) {
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