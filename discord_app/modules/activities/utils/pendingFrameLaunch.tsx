// discord_app/modules/activities/utils/pendingFrameLaunch.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";

let closure_0 = {};
const result = obj132.fileFinishedImporting("modules/activities/utils/pendingFrameLaunch.tsx");

export const stashPendingFrameLaunch = function stashPendingFrameLaunch(applicationId, arg1) {
  closure_0[applicationId] = arg1;
};
export const consumePendingFrameLaunch = function consumePendingFrameLaunch(applicationId) {
  if (null != table[applicationId]) {
    delete tmp[tmp2];
    return tmp3;
  }
};
export const discardPendingFrameLaunch = function discardPendingFrameLaunch(applicationId) {
  delete tmp2[tmp];
};