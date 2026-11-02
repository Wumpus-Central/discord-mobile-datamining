// === Module 15932: ? ===

// Module 15932
import _mod15929 from "module_15929" /* 15929 */;


export default (arg0, arg1) => {
  const tmp = new _mod15929(arg0, arg1);
  return new _mod15929(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};