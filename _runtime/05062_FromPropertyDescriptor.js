// === Module 5062: FromPropertyDescriptor ===

// Module 5062 (FromPropertyDescriptor)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5056 from "module_5056" /* 5056 */;
import _mod5063 from "module_5063" /* 5063 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5056(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5063(arg0);
};