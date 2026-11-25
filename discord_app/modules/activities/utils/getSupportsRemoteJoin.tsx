// === Module 12238: getSupportsRemoteJoin ===

// Module 12238 (getSupportsRemoteJoin)
import Constants from "Constants" /* 1071 */;
import hasFlagDefault from "hasFlag" /* 8359 */;
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