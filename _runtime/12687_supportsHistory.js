// === Module 12687: supportsHistory ===

// Module 12687 (supportsHistory)
import _mod12566 from "module_12566" /* 12566 */;

require = arg1;
const dependencyMap = arg6;

export const supportsHistory = function supportsHistory() {
  const chrome = _mod12566.GLOBAL_OBJ.chrome;
  let runtime = chrome;
  if (chrome) {
    runtime = chrome.app;
  }
  if (runtime) {
    runtime = chrome.app.runtime;
  }
  let tmp4 = !runtime;
  if (!runtime) {
    tmp4 = tmp3;
  }
  return tmp4;
};