// === Module 11865: useIsActivityFocused ===

// Module 11865 (useIsActivityFocused)
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6906 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6898 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4988 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useIsActivityFocused.tsx");

export default function useIsActivityFocused(arg0) {
  _require = arg0;
  items = [ChannelRTCStore, EmbeddedActivitiesStore];
  return require("initialize").useStateFromStores(items, () => {
    const selectedParticipant = ChannelRTCStore.getSelectedParticipant(closure_0);
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    let tmp3 = null != selectedParticipant && null != currentEmbeddedActivity;
    if (tmp3) {
      const obj2 = { applicationId: currentEmbeddedActivity.applicationId, instanceId: null };
      let compositeInstanceId;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      obj2.instanceId = compositeInstanceId;
      tmp3 = selectedParticipant.id === ChannelRTCParticipants.getEmbeddedActivityParticipantId(obj2);
    }
    return tmp3;
  });
};
export function isActivityFocused(channelId) {
  ({ ChannelRTCStore, EmbeddedActivitiesStore } = channelId);
  const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channelId.channelId);
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  let tmp3 = null != selectedParticipant && null != currentEmbeddedActivity;
  if (tmp3) {
    const obj2 = { applicationId: currentEmbeddedActivity.applicationId, instanceId: null };
    let compositeInstanceId;
    if (currentEmbeddedActivity != null) {
      compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
    }
    obj2.instanceId = compositeInstanceId;
    tmp3 = selectedParticipant.id === ChannelRTCParticipants.getEmbeddedActivityParticipantId(obj2);
  }
  return tmp3;
}