// === Module 12687: supportsHistory ===

// Module 12687 (supportsHistory)
import _mod12566 from "module_12566" /* 12566 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12566.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12566.GLOBAL_OBJ && _mod12566.GLOBAL_OBJ.history.pushState && _mod12566.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};