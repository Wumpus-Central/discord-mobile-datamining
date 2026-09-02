// === Module 4629: ? ===

// Module 4629
import identity from "identity" /* 631 */;
import getNative from "getNative" /* 802 */;
import constant from "constant" /* 4630 */;

if (getNative) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: constant(arg1), writable: true };
    return getNative(arg0, "toString", obj);
  };
} else {
  fn = identity;
}

export default fn;