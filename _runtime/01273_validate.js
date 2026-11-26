// === Module 1273: validate ===

// Module 1273 (validate)
import _modDef1274 from "module_1274" /* 1274 */;

importDefault = arg2;
const dependencyMap = arg6;

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef1274.test(str);
  }
  return isMatch;
};