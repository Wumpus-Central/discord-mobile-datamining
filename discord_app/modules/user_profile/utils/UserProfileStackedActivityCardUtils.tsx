// === Module 14893: UserProfileStackedActivityCardUtils ===

// Module 14893 (UserProfileStackedActivityCardUtils)
import _mod12 from "module_12" /* 12 */;
import ActivityTypes from "ActivityTypes" /* 5762 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/UserProfileStackedActivityCardUtils.tsx");

export function getUserProfileLiveActivities(stateFromStores1) {
  return _mod12.uniqWith(stateFromStores1.filter((type) => {
    type = type.type;
    return type !== ActivityTypes.ActivityTypes.CUSTOM_STATUS && type !== ActivityTypes.ActivityTypes.HANG_STATUS;
  }), (application_id, application_id2) => {
    let tmp = null != application_id.application_id && null != application_id2.application_id && application_id.application_id === application_id2.application_id;
    if (!tmp) {
      tmp = null != application_id.name && null != application_id2.name && application_id.name === application_id2.name;
      const tmp2 = null != application_id.name && null != application_id2.name && application_id.name === application_id2.name;
    }
    return tmp;
  });
}
export function getUserProfileStackedActivityCards(arg0) {
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
    const obj = { type: "stream", stream };
    items.push(obj);
  }
  for (const item10015 of live) {
    let obj2 = { type: "live", activity: item10015 };
    let arr4 = items.push(obj2);
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
    const obj3 = { type: "voice", voiceChannel };
    items.push(obj3);
  }
  return items;
}