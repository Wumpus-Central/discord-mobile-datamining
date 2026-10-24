// === Module 15346: ? ===

// Module 15346
import _mod15343 from "module_15343" /* 15343 */;


export default (arg0, arg1) => {
  const tmp = new _mod15343(arg0, arg1);
  return new _mod15343(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};