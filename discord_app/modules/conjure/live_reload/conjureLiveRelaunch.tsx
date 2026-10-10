// === Module 11430: conjureLiveRelaunch ===

// Module 11430 (conjureLiveRelaunch)
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 11413 */;
import size from "module_2" /* 2 */;

const map = new Map();
const map1 = new Map();
let result = size.fileFinishedImporting("modules/conjure/live_reload/conjureLiveRelaunch.tsx");

export const relaunchAppFramesForBuild = function relaunchAppFramesForBuild(applicationId, build) {
  let flag = map.get(applicationId) !== build;
  if (flag) {
    const result = map.set(applicationId, build);
    value = map1.get(applicationId);
    if (null != value) {
      if (value.source !== "frame") {
        const _Date = Date;
        if (Date.now() - value.at < 30000) {
          map1.delete(applicationId);
          flag = true;
        }
      }
    }
    const obj3 = { source: "frame", at: null };
    const _Date2 = Date;
    obj3.at = Date.now();
    const result1 = map1.set(applicationId, obj3);
    ConjurePlatformUtilsDefault.reloadAppFrames(applicationId);
    flag = true;
  }
  return flag;
};
export const reloadAppFramesAfterDeploy = function reloadAppFramesAfterDeploy(application_id) {
  value = map1.get(application_id);
  if (null != value) {
    if (value.source !== "deploy") {
      const _Date = Date;
      if (Date.now() - value.at < 30000) {
        map1.delete(application_id);
      }
    }
  }
  const result = map1.set(application_id, { source: "deploy", at: Date.now() });
  const obj2 = { source: "deploy", at: Date.now() };
  ConjurePlatformUtilsDefault.reloadAppFrames(application_id);
};