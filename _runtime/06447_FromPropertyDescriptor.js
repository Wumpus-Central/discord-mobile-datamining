// === Module 6447: FromPropertyDescriptor ===

// Module 6447 (FromPropertyDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6441 from "module_6441" /* 6441 */;
import _mod6448 from "module_6448" /* 6448 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6441(arg0)) {
      const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6448(arg0);
};