// === Module 15848: ? ===

// Module 15848
import _mod15845 from "module_15845" /* 15845 */;


export default (arg0, arg1) => {
  const tmp = new _mod15845(arg0, arg1);
  return new _mod15845(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};