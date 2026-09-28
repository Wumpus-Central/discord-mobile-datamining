// === Module 13591: ? ===

// Module 13591
import _mod13588 from "module_13588" /* 13588 */;


export default (arg0, arg1) => {
  const tmp = new _mod13588(arg0, arg1);
  return new _mod13588(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};