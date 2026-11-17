// === Module 16834: ? ===

// Module 16834
import _mod16807 from "module_16807" /* 16807 */;


export default (arg0) => {
  if (_mod16807(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};