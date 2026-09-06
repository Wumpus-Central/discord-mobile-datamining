// === Module 11762: getSupportsRemoteJoin ===

// Module 11762 (getSupportsRemoteJoin)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import hasFlagDefault from "hasFlag" /* 7313 */;

const ActivityFlags = ME.ActivityFlags;
const result = set.fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export const getSupportsRemoteJoin = function getSupportsRemoteJoin(applicationActivity) {
  let tmp = null != applicationActivity;
  if (tmp) {
    tmp = hasFlagDefault(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  }
  return tmp;
};