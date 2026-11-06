// === Module 16186: ? ===

// Module 16186
import _mod16183 from "module_16183" /* 16183 */;


export default (arg0, arg1) => {
  const tmp = new _mod16183(arg0, arg1);
  return new _mod16183(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};