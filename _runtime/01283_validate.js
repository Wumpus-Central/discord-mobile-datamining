// === Module 1283: validate ===

// Module 1283 (validate)
import _modDef1284 from "module_1284" /* 1284 */;

importDefault = arg2;
const dependencyMap = arg6;

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef1284.test(str);
  }
  return isMatch;
};