// === Module 14280: ? ===

// Module 14280
import _mod14277 from "module_14277" /* 14277 */;


export default (arg0, arg1) => {
  const tmp = new _mod14277(arg0, arg1);
  return new _mod14277(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};