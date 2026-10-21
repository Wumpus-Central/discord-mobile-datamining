// === Module 15248: ? ===

// Module 15248
import _mod15245 from "module_15245" /* 15245 */;


export default (arg0, arg1) => {
  const tmp = new _mod15245(arg0, arg1);
  return new _mod15245(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};