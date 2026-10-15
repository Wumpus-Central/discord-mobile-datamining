// === Module 15013: ? ===

// Module 15013
import _mod15010 from "module_15010" /* 15010 */;


export default (arg0, arg1) => {
  const tmp = new _mod15010(arg0, arg1);
  return new _mod15010(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};