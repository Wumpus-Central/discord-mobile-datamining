// === Module 16271: ? ===

// Module 16271
import _mod16268 from "module_16268" /* 16268 */;


export default (arg0, arg1) => {
  const tmp = new _mod16268(arg0, arg1);
  return new _mod16268(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};