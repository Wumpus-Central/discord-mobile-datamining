// === Module 15292: ? ===

// Module 15292
import _mod15289 from "module_15289" /* 15289 */;


export default (arg0, arg1) => {
  const tmp = new _mod15289(arg0, arg1);
  return new _mod15289(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};