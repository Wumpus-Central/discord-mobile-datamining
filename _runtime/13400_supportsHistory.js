// _runtime/13400_supportsHistory.js
import _mod13279 from "metro/13279__.js";

require = arg1;
const dependencyMap = arg6;

export function supportsHistory() {
  const chrome = _mod13279.GLOBAL_OBJ.chrome;
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
