// === Module 14368: conjureLiveRelaunch ===

// Module 14368 (conjureLiveRelaunch)
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 8737 */;
import size from "module_2" /* 2 */;

const map = new Map();
let result = size.fileFinishedImporting("modules/conjure/live_reload/conjureLiveRelaunch.tsx");

export const relaunchAppFramesForBuild = function relaunchAppFramesForBuild(applicationId, build) {
  let flag = map.get(applicationId) !== build;
  if (flag) {
    const result = map.set(applicationId, build);
    ConjurePlatformUtilsDefault.reloadAppFrames(applicationId);
    flag = true;
  }
  return flag;
};