// === Module 13592: ? ===

// Module 13592
import _mod13589 from "module_13589" /* 13589 */;


export default (arg0, arg1) => {
  const tmp = new _mod13589(arg0, arg1);
  return new _mod13589(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};