// === Module 4948: HasProperty ===

// Module 4948 (HasProperty)
import _mod1282 from "module_1282" /* 1282 */;
import _mod4889 from "module_4889" /* 4889 */;
import _mod4936 from "module_4936" /* 4936 */;


export default function HasProperty(arg0, arg1) {
  if (_mod4889(arg0)) {
    if (_mod4936(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new _mod1282("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1282("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};