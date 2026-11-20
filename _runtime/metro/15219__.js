// === Module 15219: ? ===

// Module 15219
import _mod15216 from "module_15216" /* 15216 */;


export default (arg0, arg1) => {
  const tmp = new _mod15216(arg0, arg1);
  return new _mod15216(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};