// === Module 4923: IsGenericDescriptor ===

// Module 4923 (IsGenericDescriptor)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4905 from "module_4905" /* 4905 */;
import IsDataDescriptor from "IsDataDescriptor" /* 4909 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 4918 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4905(arg0)) {
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