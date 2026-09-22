// === Module 14323: ? ===

// Module 14323
import _mod14320 from "module_14320" /* 14320 */;


export default (arg0, arg1) => {
  const tmp = new _mod14320(arg0, arg1);
  return new _mod14320(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};