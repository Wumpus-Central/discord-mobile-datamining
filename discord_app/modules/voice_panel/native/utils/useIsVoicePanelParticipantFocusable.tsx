// discord_app/modules/voice_panel/native/utils/useIsVoicePanelParticipantFocusable.tsx
import closure_2 from "../../../activities/EmbeddedActivitiesStore.tsx";
import closure_3 from "../../../calls/ChannelRTCStore.tsx";
import closure_4 from "../../../../stores/ApplicationStreamingStore.tsx";
import closure_5 from "../../../../stores/MediaEngineStore.tsx";
import ParticipantTypes from "../../../calls/CallConstants.tsx";

const require = arg1;
function isVoicePanelParticipantFocusable(sharedValue1, closure_1, id2, arg3, closure_1_4) {
  let obj = arg3;
  if (arg3 === undefined) {
    obj = closure_3;
  }
  let tmp = closure_1_4;
  if (closure_1_4 === undefined) {
    tmp = closure_5;
  }
  let obj2 = arg5;
  if (arg5 === undefined) {
    obj2 = closure_2;
  }
  let obj3 = arg6;
  if (arg6 === undefined) {
    obj3 = closure_4;
  }
  if (null == id2) {
    return false;
  } else {
    const participant = obj.getParticipant(closure_1, id2);
    if (null == participant) {
      return false;
    } else if (callback(participant)) {
      const currentEmbeddedActivity = obj2.getCurrentEmbeddedActivity();
      let applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      return null != applicationId && participant.applicationId === currentEmbeddedActivity.applicationId;
    } else {
      if (callback2(participant)) {
        let result = null != obj3.getActiveStreamForUser(participant.user.id, sharedValue1);
      } else if (callback3(participant)) {
        let tmp4Result = tmp4(11493);
        result = tmp4Result.canRenderParticipantVideo(participant, tmp);
      } else {
        tmp4Result = tmp4(1370);
        tmp4Result.assertNever(participant);
      }
      return result;
    }
  }
}
({ isActivityParticipant: closure_6, isStreamParticipant: error, isUserParticipant: closure_8 } = ParticipantTypes);
let result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/useIsVoicePanelParticipantFocusable.tsx");

export default function useIsVoicePanelParticipantFocusable(arg0, arg1, arg2) {
  const _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  const items = [closure_3, closure_5, closure_2, closure_4];
  return require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_9(closure_0, closure_1, closure_2, closure_1_3, closure_1_5, closure_2, closure_1_4));
};
export { isVoicePanelParticipantFocusable };