// _runtime/13126_supportsHistory.js
import _mod13005 from "metro/13005__.js";

require = arg1;
const dependencyMap = arg6;

export function supportsHistory() {
  const chrome = _mod13005.GLOBAL_OBJ.chrome;
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
