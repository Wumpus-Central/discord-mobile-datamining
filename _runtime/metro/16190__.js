// === Module 16190: ? ===

// Module 16190
import _mod16187 from "module_16187" /* 16187 */;


export default (arg0, arg1) => {
  const tmp = new _mod16187(arg0, arg1);
  return new _mod16187(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};