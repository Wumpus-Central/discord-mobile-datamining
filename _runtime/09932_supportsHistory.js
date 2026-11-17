// _runtime/09932_supportsHistory.js
import _mod9811 from "metro/09811__.js";

require = arg1;
const dependencyMap = arg6;

export function supportsHistory() {
  const chrome = _mod9811.GLOBAL_OBJ.chrome;
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
