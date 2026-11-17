// === Module 16586: ? ===

// Module 16586
import _mod16583 from "module_16583" /* 16583 */;


export default (arg0, arg1) => {
  const tmp = new _mod16583(arg0, arg1);
  return new _mod16583(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};