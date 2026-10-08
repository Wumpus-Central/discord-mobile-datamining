// === Module 5716: IsGenericDescriptor ===

// Module 5716 (IsGenericDescriptor)
import _mod1305 from "module_1305" /* 1305 */;
import _mod5698 from "module_5698" /* 5698 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5702 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 5711 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5698(arg0)) {
    const tmp7 = IsAccessorDescriptor(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !IsDataDescriptor(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new _mod1305("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};