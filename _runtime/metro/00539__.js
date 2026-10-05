// === Module 539: ? ===

// Module 539
import _mod525 from "module_525" /* 525 */;

let tmp = typeof exports === "object";
if (typeof exports === "object") {
  tmp = exports;
}
if (tmp) {
  tmp = !exports.nodeType;
}
if (tmp) {
  tmp = exports;
}
const tmp2 = tmp && typeof module === "object" && module && !module.nodeType && module;
let closure_0 = tmp2;
const _process = tmp2 && tmp2.exports === tmp && _mod525.process;

export default (() => {
  try {
    let types = closure_0 && closure_0.require && closure_0.require("util").types;
    if (!types) {
      const binding = _process && _process.binding && _process.binding("util");
      types = binding;
    }
    return types;
  } catch (err) {
  }
})();