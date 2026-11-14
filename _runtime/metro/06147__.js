// === Module 6147: ? ===

// Module 6147
import identity from "identity" /* 549 */;
import _mod668 from "module_668" /* 668 */;
import constant from "constant" /* 6148 */;

if (_mod668) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: constant(arg1), writable: true };
    return _mod668(arg0, "toString", obj);
  };
} else {
  fn = identity;
}

export default fn;