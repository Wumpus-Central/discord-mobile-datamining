// === Module 13414: supportsHistory ===

// Module 13414 (supportsHistory)
import _mod13293 from "module_13293" /* 13293 */;

require = arg1;
const dependencyMap = arg6;

export function supportsHistory() {
  const chrome = _mod13293.GLOBAL_OBJ.chrome;
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