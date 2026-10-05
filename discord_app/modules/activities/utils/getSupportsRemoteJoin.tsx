// discord_app/modules/activities/utils/getSupportsRemoteJoin.tsx
import Constants from "../../../Constants.tsx";
import hasFlagDefault from "hasFlag.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export const getSupportsRemoteJoin = function getSupportsRemoteJoin(applicationActivity) {
  const tmp =
    null != applicationActivity &&
    hasFlagDefault(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  return tmp;
};
