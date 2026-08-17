// discord_app/modules/activities/utils/getSupportsRemoteJoin.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import hasFlagDefault from "hasFlag.tsx";

const ActivityFlags = ME.ActivityFlags;
const result = set.fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export const getSupportsRemoteJoin = function getSupportsRemoteJoin(applicationActivity) {
  let tmp = null != applicationActivity;
  if (tmp) {
    tmp = hasFlagDefault(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  }
  return tmp;
};