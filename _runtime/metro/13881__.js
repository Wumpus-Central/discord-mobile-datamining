// === Module 13881: ? ===

// Module 13881
import _mod13878 from "module_13878" /* 13878 */;


export default (arg0, arg1) => {
  const tmp = new _mod13878(arg0, arg1);
  return new _mod13878(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};