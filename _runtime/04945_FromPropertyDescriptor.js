// === Module 4945: FromPropertyDescriptor ===

// Module 4945 (FromPropertyDescriptor)
import _mod1282 from "module_1282" /* 1282 */;
import _mod4939 from "module_4939" /* 4939 */;
import _mod4946 from "module_4946" /* 4946 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod4939(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod4946(arg0);
};