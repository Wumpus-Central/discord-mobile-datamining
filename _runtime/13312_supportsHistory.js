// === Module 13312: supportsHistory ===

// Module 13312 (supportsHistory)
import _mod13191 from "module_13191" /* 13191 */;

require = arg1;
const dependencyMap = arg6;

export function supportsHistory() {
  const chrome = _mod13191.GLOBAL_OBJ.chrome;
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