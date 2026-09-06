// discord_app/modules/activities/utils/pendingFrameLaunch.tsx
import size from "../../../../_runtime/metro/00002__.js";

let closure_0 = {};
const result = size.fileFinishedImporting("modules/activities/utils/pendingFrameLaunch.tsx");

export const stashPendingFrameLaunch = function stashPendingFrameLaunch(applicationId, arg1) {
  closure_0[applicationId] = arg1;
};
export const consumePendingFrameLaunch = function consumePendingFrameLaunch(applicationId) {
  if (null != closure_0[applicationId]) {
    delete tmp[tmp2];
    return tmp3;
  }
};
export const discardPendingFrameLaunch = function discardPendingFrameLaunch(applicationId) {
  delete tmp2[tmp];
};
