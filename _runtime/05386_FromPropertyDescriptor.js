// === Module 5386: FromPropertyDescriptor ===

// Module 5386 (FromPropertyDescriptor)
import _mod1293 from "module_1293" /* 1293 */;
import _mod5380 from "module_5380" /* 5380 */;
import _mod5387 from "module_5387" /* 5387 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5380(arg0)) {
      const tmp5 = new _mod1293("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5387(arg0);
};