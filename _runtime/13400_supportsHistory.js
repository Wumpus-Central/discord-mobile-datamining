// === Module 13400: supportsHistory ===

// Module 13400 (supportsHistory)
import _mod13279 from "module_13279" /* 13279 */;

require = arg1;
const dependencyMap = arg6;

export function supportsHistory() {
  const chrome = _mod13279.GLOBAL_OBJ.chrome;
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