// === Module 1270: validate ===

// Module 1270 (validate)
import _modDef1271 from "module_1271" /* 1271 */;

importDefault = arg2;
const dependencyMap = arg6;

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef1271.test(str);
  }
  return isMatch;
};