// === Module 14048: ? ===

// Module 14048
import _mod14045 from "module_14045" /* 14045 */;


export default (arg0, arg1) => {
  const tmp = new _mod14045(arg0, arg1);
  return new _mod14045(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};