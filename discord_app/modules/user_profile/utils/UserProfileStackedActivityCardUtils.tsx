// discord_app/modules/user_profile/utils/UserProfileStackedActivityCardUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import apply from "../../../../_runtime/00012_apply.js";
import ME from "../../../Constants.tsx";

const ActivityTypes = ME.ActivityTypes;
const result = set.fileFinishedImporting("modules/user_profile/utils/UserProfileStackedActivityCardUtils.tsx");

export const getUserProfileLiveActivities = function getUserProfileLiveActivities(stateFromStores1) {
  return apply.uniqWith(
    stateFromStores1.filter((type) => {
      type = type.type;
      return type !== constants.CUSTOM_STATUS && type !== constants.HANG_STATUS;
    }),
    (application_id, application_id2) => {
      let tmp =
        null != application_id.application_id &&
        null != application_id2.application_id &&
        application_id.application_id === application_id2.application_id;
      if (!tmp) {
        tmp =
          null != application_id.name && null != application_id2.name && application_id.name === application_id2.name;
        const tmp2 =
          null != application_id.name && null != application_id2.name && application_id.name === application_id2.name;
      }
      return tmp;
    },
  );
};
export const getUserProfileStackedActivityCards = function getUserProfileStackedActivityCards(arg0) {
  ({ stream, live } = arg0);
  if (live === undefined) {
    live = [];
  }
  ({ voiceChannel, isPrivate, voiceActivity } = arg0);
  if (isPrivate === undefined) {
    isPrivate = false;
  }
  const items = [];
  if (null != stream) {
    let obj = { type: "stream", stream: null };
    obj[1] = stream;
    items.push(obj);
  }
  for (const item10015 of live) {
    obj = { type: "live", activity: null };
    obj[1] = item10015;
    let arr = items.push(obj);
    continue;
  }
  if (!isPrivate) {
    isPrivate = null != stream;
  }
  if (!isPrivate) {
    isPrivate = null != voiceActivity;
  }
  if (!isPrivate) {
    isPrivate = null == voiceChannel;
  }
  if (!isPrivate) {
    obj = { type: "voice", voiceChannel: null };
    obj[1] = voiceChannel;
    items.push(obj);
  }
  return items;
};
