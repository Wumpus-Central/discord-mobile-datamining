// === Module 16427: ? ===

// Module 16427
import _mod16424 from "module_16424" /* 16424 */;


export default (arg0, arg1) => {
  const tmp = new _mod16424(arg0, arg1);
  return new _mod16424(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};