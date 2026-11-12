// === Module 9852: supportsHistory ===

// Module 9852 (supportsHistory)
import _mod9731 from "module_9731" /* 9731 */;

require = arg1;
const dependencyMap = arg6;

export function supportsHistory() {
  const chrome = _mod9731.GLOBAL_OBJ.chrome;
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