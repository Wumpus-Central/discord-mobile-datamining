// === Module 15125: ? ===

// Module 15125
import _mod15122 from "module_15122" /* 15122 */;


export default (arg0, arg1) => {
  const tmp = new _mod15122(arg0, arg1);
  return new _mod15122(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};