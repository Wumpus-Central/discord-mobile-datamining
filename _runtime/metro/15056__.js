// === Module 15056: ? ===

// Module 15056
import _mod15053 from "module_15053" /* 15053 */;


export default (arg0, arg1) => {
  const tmp = new _mod15053(arg0, arg1);
  return new _mod15053(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};