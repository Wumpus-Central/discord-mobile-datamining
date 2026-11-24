// === Module 15363: ? ===

// Module 15363
import _mod15360 from "module_15360" /* 15360 */;


export default (arg0, arg1) => {
  const tmp = new _mod15360(arg0, arg1);
  return new _mod15360(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};