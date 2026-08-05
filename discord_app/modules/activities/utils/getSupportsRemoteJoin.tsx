// discord_app/modules/activities/utils/getSupportsRemoteJoin.tsx
import { ActivityFlags } from "ME";
import { hasFlag } from "hasFlag.tsx";

const result = require("set").fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export const getSupportsRemoteJoin = function getSupportsRemoteJoin(applicationActivity) {
  let tmp = null != applicationActivity;
  if (tmp) {
    tmp = hasFlag(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  }
  return tmp;
};