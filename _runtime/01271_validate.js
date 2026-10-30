// === Module 1271: validate ===

// Module 1271 (validate)
import _modDef1272 from "module_1272" /* 1272 */;

importDefault = arg2;
const dependencyMap = arg6;

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef1272.test(str);
  }
  return isMatch;
};