// === Module 12975: supportsHistory ===

// Module 12975 (supportsHistory)
import _mod12854 from "module_12854" /* 12854 */;

require = arg1;
const dependencyMap = arg6;

export function supportsHistory() {
  const chrome = _mod12854.GLOBAL_OBJ.chrome;
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