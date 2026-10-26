// === Module 15351: ? ===

// Module 15351
import _mod15348 from "module_15348" /* 15348 */;


export default (arg0, arg1) => {
  const tmp = new _mod15348(arg0, arg1);
  return new _mod15348(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};