// === Module 5717: IsGenericDescriptor ===

// Module 5717 (IsGenericDescriptor)
import _mod1306 from "module_1306" /* 1306 */;
import _mod5699 from "module_5699" /* 5699 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5703 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 5712 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5699(arg0)) {
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