// === Module 13403: supportsHistory ===

// Module 13403 (supportsHistory)
import _mod13282 from "module_13282" /* 13282 */;

require = arg1;
const dependencyMap = arg6;

export function supportsHistory() {
  const chrome = _mod13282.GLOBAL_OBJ.chrome;
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
}