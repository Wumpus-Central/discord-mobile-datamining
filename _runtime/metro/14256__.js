// === Module 14256: ? ===

// Module 14256
import _mod14253 from "module_14253" /* 14253 */;


export default (arg0, arg1) => {
  const tmp = new _mod14253(arg0, arg1);
  return new _mod14253(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};