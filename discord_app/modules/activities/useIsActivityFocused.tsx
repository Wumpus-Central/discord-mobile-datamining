// === Module 9475: useIsActivityFocused ===

// Module 9475 (useIsActivityFocused)
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 9476 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useIsActivityFocused.tsx");

export default function useIsActivityFocused(arg0) {
  _require = arg0;
  const items = [ChannelRTCStore, EmbeddedActivitiesStore];
  return require("initialize").useStateFromStores(items, () => {
    const selectedParticipant = ChannelRTCStore.getSelectedParticipant(closure_0);
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    let tmp3 = null != selectedParticipant && null != currentEmbeddedActivity;
    if (tmp3) {
      const obj = { applicationId: currentEmbeddedActivity.applicationId, instanceId: null };
      let compositeInstanceId;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      obj.instanceId = compositeInstanceId;
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
    const obj = { applicationId: currentEmbeddedActivity.applicationId, instanceId: null };
    let compositeInstanceId;
    if (currentEmbeddedActivity != null) {
      compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
    }
    obj.instanceId = compositeInstanceId;
    tmp3 = selectedParticipant.id === obj.getEmbeddedActivityParticipantId(obj);
  }
  return tmp3;
};