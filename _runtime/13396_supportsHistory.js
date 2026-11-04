// _runtime/13396_supportsHistory.js
import _mod13275 from "metro/13275__.js";

require = arg1;
const dependencyMap = arg6;

export function supportsHistory() {
  const chrome = _mod13275.GLOBAL_OBJ.chrome;
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
