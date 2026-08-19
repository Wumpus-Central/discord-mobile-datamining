// === Module 8679: useIsActivityFocused ===

// Module 8679 (useIsActivityFocused)
import sortKey from "sortKey" /* 4777 */;
import getParticipants from "getParticipants" /* 4773 */;
import participantFromServer from "participantFromServer" /* 1390 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/activities/useIsActivityFocused.tsx");

export default function useIsActivityFocused(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3];
  return _require(589).useStateFromStores(items, () => {
    const selectedParticipant = closure_1_2.getSelectedParticipant(callback);
    const currentEmbeddedActivity = closure_1_3.getCurrentEmbeddedActivity();
    let tmp3 = null != selectedParticipant && null != currentEmbeddedActivity;
    if (tmp3) {
      callback(dependencyMap[2]);
      const obj = { applicationId: null, instanceId: null };
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
  ({ ChannelRTCStore, EmbeddedActivitiesStore } = channelId);
  const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channelId.channelId);
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  let tmp3 = null != selectedParticipant && null != currentEmbeddedActivity;
  if (tmp3) {
    const obj = { applicationId: null, instanceId: null };
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