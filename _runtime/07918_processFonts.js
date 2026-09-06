// === Module 7918: processFonts ===

// Module 7918 (processFonts)
import _modDef26 from "module_26" /* 26 */;

importDefault = arg2;
const dependencyMap = arg6;

export const processFonts = function processFonts(items3) {
  const fontFamily = _modDef26.fontFamily;
  let _process;
  if (fontFamily != null) {
    _process = fontFamily.process;
  }
  let mapped = items3;
  if (typeof _process === "function") {
    mapped = items3.map(_process);
  }
  return mapped;
};