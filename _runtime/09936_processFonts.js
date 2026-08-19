// _runtime/09936_processFonts.js
import resultDefault from "00026_result.js";

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