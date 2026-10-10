// === Module 5720: IsGenericDescriptor ===

// Module 5720 (IsGenericDescriptor)
import _mod1306 from "module_1306" /* 1306 */;
import _mod5702 from "module_5702" /* 5702 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5706 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 5715 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5702(arg0)) {
    const tmp7 = IsAccessorDescriptor(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !IsDataDescriptor(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new _mod1306("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};