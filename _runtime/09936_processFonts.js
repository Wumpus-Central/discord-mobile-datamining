// === Module 9936: processFonts ===

// Module 9936 (processFonts)
import resultDefault from "result" /* 26 */;

importDefault = arg2;
const dependencyMap = arg6;
arg5.processFonts = function processFonts(items3) {
  const fontFamily = resultDefault.fontFamily;
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