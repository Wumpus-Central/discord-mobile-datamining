// === Module 15157: ? ===

// Module 15157
import _mod15154 from "module_15154" /* 15154 */;


export default (arg0, arg1) => {
  const tmp = new _mod15154(arg0, arg1);
  return new _mod15154(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};