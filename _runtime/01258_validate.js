// === Module 1258: validate ===

// Module 1258 (validate)
import _modDef1259 from "module_1259" /* 1259 */;

importDefault = arg2;
const dependencyMap = arg6;

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef1259.test(str);
  }
  return isMatch;
};