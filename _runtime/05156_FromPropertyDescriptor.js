// === Module 5156: FromPropertyDescriptor ===

// Module 5156 (FromPropertyDescriptor)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5150 from "module_5150" /* 5150 */;
import _mod5157 from "module_5157" /* 5157 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5150(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5157(arg0);
};