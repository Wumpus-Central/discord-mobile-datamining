// discord_app/modules/activities/useIsActivityFocused.tsx
import ChannelRTCParticipants from "../calls/ChannelRTCParticipants.tsx";
import ChannelRTCStore from "../calls/ChannelRTCStore.tsx";
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
    }
  : (arg0) => {
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
    };
const result = size.fileFinishedImporting("modules/activities/useIsActivityFocused.tsx");

export default tmp2;
export { isActivityFocused };
