// === Module 15255: ? ===

// Module 15255
import _mod15252 from "module_15252" /* 15252 */;


export default (arg0, arg1) => {
  const tmp = new _mod15252(arg0, arg1);
  return new _mod15252(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};