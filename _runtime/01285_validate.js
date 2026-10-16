// === Module 1285: validate ===

// Module 1285 (validate)
import _modDef1286 from "module_1286" /* 1286 */;

importDefault = arg2;
const dependencyMap = arg6;

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef1286.test(str);
  }
  return isMatch;
};