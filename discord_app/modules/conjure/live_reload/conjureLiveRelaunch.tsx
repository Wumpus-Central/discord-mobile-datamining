// discord_app/modules/conjure/live_reload/conjureLiveRelaunch.tsx
import ConjurePlatformUtilsDefault from "../shared/ConjurePlatformUtils.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const map = new Map();
let result = size.fileFinishedImporting("modules/conjure/live_reload/conjureLiveRelaunch.tsx");

export const relaunchAppFramesForBuild = function relaunchAppFramesForBuild(applicationId, build) {
  let flag = map.get(applicationId) !== build;
  if (flag) {
    const result = map.set(applicationId, build);
    const obj2 = ConjurePlatformUtilsDefault;
    obj2.reloadAppFrames(applicationId);
    flag = true;
  }
  return flag;
};
