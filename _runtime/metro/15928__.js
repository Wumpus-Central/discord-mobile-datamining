// === Module 15928: ? ===

// Module 15928
import _mod15925 from "module_15925" /* 15925 */;


export default (arg0, arg1) => {
  const tmp = new _mod15925(arg0, arg1);
  return new _mod15925(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};