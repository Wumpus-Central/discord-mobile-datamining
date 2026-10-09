// === Module 10818: useIsActivityFocused ===

// Module 10818 (useIsActivityFocused)
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6045 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6043 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2063 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
function isActivityFocused(channelId) {
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useIsActivityFocused.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsActivityFocused(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore, EmbeddedActivitiesStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
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
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7);
}) : (function useIsActivityFocused(arg0) {
  _require = arg0;
  const items = [ChannelRTCStore, EmbeddedActivitiesStore];
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
});
export { isActivityFocused };