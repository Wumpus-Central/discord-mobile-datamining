// === Module 1282: validate ===

// Module 1282 (validate)
import _modDef1283 from "module_1283" /* 1283 */;

importDefault = arg2;
const dependencyMap = arg6;

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef1283.test(str);
  }
  return isMatch;
};