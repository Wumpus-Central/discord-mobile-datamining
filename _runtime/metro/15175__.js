// === Module 15175: ? ===

// Module 15175
import _mod15172 from "module_15172" /* 15172 */;


export default (arg0, arg1) => {
  const tmp = new _mod15172(arg0, arg1);
  return new _mod15172(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};