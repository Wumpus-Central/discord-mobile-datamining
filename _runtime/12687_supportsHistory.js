// _runtime/12687_supportsHistory.js
import _mod12566 from "metro/12566__.js";

export const supportsHistory = function supportsHistory() {
  const chrome = _mod12566.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 =
    !tmp3 &&
    "history" in _mod12566.GLOBAL_OBJ && _mod12566.GLOBAL_OBJ.history.pushState &&
    _mod12566.GLOBAL_OBJ.history.replaceState;
  return tmp5;
};
