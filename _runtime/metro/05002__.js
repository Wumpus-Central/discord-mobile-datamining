// === Module 5002: ? ===

// Module 5002
import identity from "identity" /* 549 */;
import getNative from "getNative" /* 680 */;
import constant from "constant" /* 5003 */;

let fn;
if (getNative) {
  fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: constant(arg1), writable: true };
    const tmp = getNative;
    return tmp(arg0, "toString", obj);
  };
} else {
  fn = identity;
}

export default fn;