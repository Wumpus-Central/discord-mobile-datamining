// === Module 13126: supportsHistory ===

// Module 13126 (supportsHistory)
import _mod13005 from "module_13005" /* 13005 */;

require = arg1;
const dependencyMap = arg6;

export function supportsHistory() {
  const chrome = _mod13005.GLOBAL_OBJ.chrome;
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