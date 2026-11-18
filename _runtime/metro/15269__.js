// === Module 15269: ? ===

// Module 15269
import _mod15266 from "module_15266" /* 15266 */;


export default (arg0, arg1) => {
  const tmp = new _mod15266(arg0, arg1);
  return new _mod15266(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};