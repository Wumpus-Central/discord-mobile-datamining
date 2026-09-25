// === Module 5161: IsGenericDescriptor ===

// Module 5161 (IsGenericDescriptor)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5143 from "module_5143" /* 5143 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5147 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 5156 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5143(arg0)) {
    const tmp7 = IsAccessorDescriptor(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !IsDataDescriptor(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};