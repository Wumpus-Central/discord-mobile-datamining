// === Module 16177: ? ===

// Module 16177
import _mod16174 from "module_16174" /* 16174 */;


export default (arg0, arg1) => {
  const tmp = new _mod16174(arg0, arg1);
  return new _mod16174(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};