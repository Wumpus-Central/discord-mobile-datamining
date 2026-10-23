// === Module 15326: ? ===

// Module 15326
import _mod15323 from "module_15323" /* 15323 */;


export default (arg0, arg1) => {
  const tmp = new _mod15323(arg0, arg1);
  return new _mod15323(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};