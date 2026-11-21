// === Module 15342: ? ===

// Module 15342
import _mod15339 from "module_15339" /* 15339 */;


export default (arg0, arg1) => {
  const tmp = new _mod15339(arg0, arg1);
  return new _mod15339(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};