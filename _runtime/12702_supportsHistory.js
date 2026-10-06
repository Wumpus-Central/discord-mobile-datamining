// === Module 12702: supportsHistory ===

// Module 12702 (supportsHistory)
import _mod12581 from "module_12581" /* 12581 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12581.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12581.GLOBAL_OBJ && _mod12581.GLOBAL_OBJ.history.pushState && _mod12581.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};