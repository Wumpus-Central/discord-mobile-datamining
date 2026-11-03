// === Module 5960: ? ===

// Module 5960
import identity from "identity" /* 549 */;
import _mod668 from "module_668" /* 668 */;
import constant from "constant" /* 5961 */;

if (_mod668) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: constant(arg1), writable: true };
    return _mod668(arg0, "toString", obj);
  };
} else {
  fn = identity;
}

export default fn;