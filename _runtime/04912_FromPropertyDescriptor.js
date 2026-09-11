// === Module 4912: FromPropertyDescriptor ===

// Module 4912 (FromPropertyDescriptor)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4906 from "module_4906" /* 4906 */;
import _mod4913 from "module_4913" /* 4913 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod4906(arg0)) {
      const tmp5 = new _mod1283("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod4913(arg0);
};