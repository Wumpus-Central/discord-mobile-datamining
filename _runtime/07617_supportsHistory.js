// _runtime/07617_supportsHistory.js
import { getGlobalSingleton } from "07496_getGlobalSingleton.js";
const require = arg1;
const dependencyMap = arg6;
arg5.supportsHistory = function supportsHistory() {
  const chrome = getGlobalSingleton.GLOBAL_OBJ.chrome;
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