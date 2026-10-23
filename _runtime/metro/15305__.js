// === Module 15305: ? ===

// Module 15305
import _mod15302 from "module_15302" /* 15302 */;


export default (arg0, arg1) => {
  const tmp = new _mod15302(arg0, arg1);
  return new _mod15302(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};