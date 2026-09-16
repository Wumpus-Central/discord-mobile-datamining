// === Module 4944: FromPropertyDescriptor ===

// Module 4944 (FromPropertyDescriptor)
import _mod1282 from "module_1282" /* 1282 */;
import _mod4938 from "module_4938" /* 4938 */;
import _mod4945 from "module_4945" /* 4945 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod4938(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod4945(arg0);
};