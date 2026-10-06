// _runtime/12702_supportsHistory.js
import _mod12581 from "metro/12581__.js";

export const supportsHistory = function supportsHistory() {
  const chrome = _mod12581.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 =
    !tmp3 &&
    "history" in _mod12581.GLOBAL_OBJ && _mod12581.GLOBAL_OBJ.history.pushState &&
    _mod12581.GLOBAL_OBJ.history.replaceState;
  return tmp5;
};
