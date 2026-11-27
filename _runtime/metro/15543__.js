// === Module 15543: ? ===

// Module 15543
import _mod15540 from "module_15540" /* 15540 */;


export default (arg0, arg1) => {
  const tmp = new _mod15540(arg0, arg1);
  return new _mod15540(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};