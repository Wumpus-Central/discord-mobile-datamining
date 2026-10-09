// === Module 5712: IsAccessorDescriptor ===

// Module 5712 (IsAccessorDescriptor)
import _mod1306 from "module_1306" /* 1306 */;
import _mod1338 from "module_1338" /* 1338 */;
import _mod5699 from "module_5699" /* 5699 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5699(arg0)) {
    const tmp7 = _mod1338(arg0, "[[Get]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !_mod1338(arg0, "[[Set]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new _mod1306("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};