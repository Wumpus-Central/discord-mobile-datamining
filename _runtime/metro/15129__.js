// === Module 15129: ? ===

// Module 15129
import _mod15126 from "module_15126" /* 15126 */;


export default (arg0, arg1) => {
  const tmp = new _mod15126(arg0, arg1);
  return new _mod15126(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};