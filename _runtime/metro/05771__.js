// === Module 5771: ? ===

// Module 5771
import identity from "identity" /* 549 */;
import _mod680 from "module_680" /* 680 */;
import constant from "constant" /* 5772 */;

if (_mod680) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: constant(arg1), writable: true };
    return _mod680(arg0, "toString", obj);
  };
} else {
  fn = identity;
}

export default fn;