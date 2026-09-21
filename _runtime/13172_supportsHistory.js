// _runtime/13172_supportsHistory.js
import _mod13051 from "metro/13051__.js";

require = arg1;
const dependencyMap = arg6;

export const supportsHistory = function supportsHistory() {
  const chrome = _mod13051.GLOBAL_OBJ.chrome;
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
