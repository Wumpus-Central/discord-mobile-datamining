// === Module 1272: validate ===

// Module 1272 (validate)
import _modDef1273 from "module_1273" /* 1273 */;

importDefault = arg2;
const dependencyMap = arg6;

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef1273.test(str);
  }
  return isMatch;
};