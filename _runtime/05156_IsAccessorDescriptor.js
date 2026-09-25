// === Module 5156: IsAccessorDescriptor ===

// Module 5156 (IsAccessorDescriptor)
import _mod1282 from "module_1282" /* 1282 */;
import _mod1314 from "module_1314" /* 1314 */;
import _mod5143 from "module_5143" /* 5143 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5143(arg0)) {
    const tmp7 = _mod1314(arg0, "[[Get]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !_mod1314(arg0, "[[Set]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};