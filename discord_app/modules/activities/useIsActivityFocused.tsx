// === Module 10709: useIsActivityFocused ===

// Module 10709 (useIsActivityFocused)
import getParticipants from "getParticipants";
import participantFromServer from "participantFromServer";

const require = arg1;
const result = require("sortKey").fileFinishedImporting("modules/activities/useIsActivityFocused.tsx");

export default function useIsActivityFocused(arg0) {
  const _require = arg0;
  const items = [getParticipants, participantFromServer];
  return _require(589).useStateFromStores(items, () => {
    const selectedParticipant = outer1_2.getSelectedParticipant(callback);
    const currentEmbeddedActivity = outer1_3.getCurrentEmbeddedActivity();
    let tmp3 = null != selectedParticipant && null != currentEmbeddedActivity;
    if (tmp3) {
      let obj = callback(outer1_1[2]);
      obj = { applicationId: null, instanceId: null };
      obj[0] = currentEmbeddedActivity.applicationId;
      let compositeInstanceId;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      obj[1] = compositeInstanceId;
      tmp3 = selectedParticipant.id === obj.getEmbeddedActivityParticipantId(obj);
    }
    return tmp3;
  });
};
export const isActivityFocused = function isActivityFocused(channelId) {
  let ChannelRTCStore;
  let EmbeddedActivitiesStore;
  ({ ChannelRTCStore, EmbeddedActivitiesStore } = channelId);
  const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channelId.channelId);
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  let tmp3 = null != selectedParticipant && null != currentEmbeddedActivity;
  if (tmp3) {
    let obj = require(10710) /* sortKey */;
    obj = { applicationId: null, instanceId: null };
    obj[0] = currentEmbeddedActivity.applicationId;
    let compositeInstanceId;
    if (currentEmbeddedActivity != null) {
      compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
    }
    obj[1] = compositeInstanceId;
    tmp3 = selectedParticipant.id === obj.getEmbeddedActivityParticipantId(obj);
  }
  return tmp3;
};