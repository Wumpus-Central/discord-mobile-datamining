// === Module 9095: useIsActivityFocused ===

// Module 9095 (useIsActivityFocused)
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 9049 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4912 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function isActivityFocused(channelId) {
  let compositeInstanceId;
  ({ ChannelRTCStore, EmbeddedActivitiesStore } = channelId);
  const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channelId.channelId);
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  let tmp3 = null != selectedParticipant && null != currentEmbeddedActivity;
  if (tmp3) {
    const id = selectedParticipant.id;
    const obj = { applicationId: currentEmbeddedActivity.applicationId, instanceId: compositeInstanceId };
    compositeInstanceId = undefined;
    const getEmbeddedActivityParticipantId = ChannelRTCParticipants.getEmbeddedActivityParticipantId;
    ChannelRTCParticipants;
    if (currentEmbeddedActivity != null) {
      compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
    }
    tmp3 = id === getEmbeddedActivityParticipantId(obj);
  }
  return tmp3;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore, EmbeddedActivitiesStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      let compositeInstanceId;
      const selectedParticipant = ChannelRTCStore.getSelectedParticipant(closure_0);
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let tmp3 = null != selectedParticipant && null != currentEmbeddedActivity;
      if (tmp3) {
        const id = selectedParticipant.id;
        const obj = { applicationId: currentEmbeddedActivity.applicationId, instanceId: compositeInstanceId };
        compositeInstanceId = undefined;
        const getEmbeddedActivityParticipantId = ChannelRTCParticipants.getEmbeddedActivityParticipantId;
        ChannelRTCParticipants;
        if (currentEmbeddedActivity != null) {
          compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
        }
        tmp3 = id === getEmbeddedActivityParticipantId(obj);
      }
      return tmp3;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ChannelRTCStore, EmbeddedActivitiesStore];
  return obj.useStateFromStores(items, () => {
    let compositeInstanceId;
    const selectedParticipant = ChannelRTCStore.getSelectedParticipant(closure_0);
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    let tmp3 = null != selectedParticipant && null != currentEmbeddedActivity;
    if (tmp3) {
      const id = selectedParticipant.id;
      const obj = { applicationId: currentEmbeddedActivity.applicationId, instanceId: compositeInstanceId };
      compositeInstanceId = undefined;
      const getEmbeddedActivityParticipantId = ChannelRTCParticipants.getEmbeddedActivityParticipantId;
      ChannelRTCParticipants;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      tmp3 = id === getEmbeddedActivityParticipantId(obj);
    }
    return tmp3;
  });
});
const result = size.fileFinishedImporting("modules/activities/useIsActivityFocused.tsx");

export default tmp2;
export { isActivityFocused };