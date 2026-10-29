// === Module 11452: getSupportsRemoteJoin ===

// Module 11452 (getSupportsRemoteJoin)
import Constants from "Constants" /* 1084 */;
import hasFlagDefault from "hasFlag" /* 7469 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export function getSupportsRemoteJoin(applicationActivity) {
  let tmp = null != applicationActivity;
  if (tmp) {
    tmp = hasFlagDefault(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  }
  return tmp;
}