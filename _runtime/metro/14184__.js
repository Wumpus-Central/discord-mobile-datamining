// === Module 14184: ? ===

// Module 14184
import _mod14181 from "module_14181" /* 14181 */;


export default (arg0, arg1) => {
  const tmp = new _mod14181(arg0, arg1);
  return new _mod14181(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};