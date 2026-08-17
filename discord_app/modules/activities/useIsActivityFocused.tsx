// discord_app/modules/activities/useIsActivityFocused.tsx
import sortKey from "sortKey" /* 4777 */;
import closure_2 from "getParticipants" /* 4773 */;
import closure_3 from "participantFromServer" /* 1390 */;
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/useIsActivityFocused.tsx");

export default function useIsActivityFocused(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3];
  return _initialize.useStateFromStores(items, () => {
    const selectedParticipant = closure_1_2.getSelectedParticipant(callback);
    const currentEmbeddedActivity = closure_1_3.getCurrentEmbeddedActivity();
    let tmp3 = null != selectedParticipant && null != currentEmbeddedActivity;
    if (tmp3) {
      let obj = callback(closure_1_1[2]);
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
  ({ ChannelRTCStore, EmbeddedActivitiesStore } = channelId);
  const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channelId.channelId);
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  let tmp3 = null != selectedParticipant && null != currentEmbeddedActivity;
  if (tmp3) {
    let obj = sortKey;
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