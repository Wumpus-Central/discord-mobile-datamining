// === Module 518: validate ===

// Module 518 (validate)
import _modDef519 from "module_519" /* 519 */;

importDefault = arg2;
const dependencyMap = arg6;
arg5.default = function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef519.test(str);
  }
  return isMatch;
};