// === Module 1260: validate ===

// Module 1260 (validate)
import _modDef1261 from "module_1261" /* 1261 */;

importDefault = arg2;
const dependencyMap = arg6;

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef1261.test(str);
  }
  return isMatch;
};