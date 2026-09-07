// _runtime/12923_supportsHistory.js
import _mod12802 from "metro/12802__.js";

require = arg1;
const dependencyMap = arg6;

export const supportsHistory = function supportsHistory() {
  const chrome = _mod12802.GLOBAL_OBJ.chrome;
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
};
