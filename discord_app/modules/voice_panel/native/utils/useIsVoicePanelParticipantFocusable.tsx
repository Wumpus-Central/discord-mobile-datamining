// discord_app/modules/voice_panel/native/utils/useIsVoicePanelParticipantFocusable.tsx
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

const require = fn;
function isVoicePanelParticipantFocusable(
  channelId,
  guildId,
  id2,
  ChannelRTCStore,
  MediaEngineStore,
  EmbeddedActivitiesStore,
  ApplicationStreamingStore,
) {
  let obj = ChannelRTCStore;
  if (ChannelRTCStore === undefined) {
    obj = ChannelRTCStore;
  }
  let tmp = MediaEngineStore;
  if (MediaEngineStore === undefined) {
    tmp = MediaEngineStore;
  }
  let obj2 = EmbeddedActivitiesStore;
  if (EmbeddedActivitiesStore === undefined) {
    obj2 = EmbeddedActivitiesStore;
  }
  let obj3 = ApplicationStreamingStore;
  if (ApplicationStreamingStore === undefined) {
    obj3 = ApplicationStreamingStore;
  }
  if (null == id2) {
    return false;
  } else {
    const participant = obj.getParticipant(guildId, id2);
    if (null == participant) {
      return false;
    } else if (timestampProducer(participant)) {
      const currentEmbeddedActivity = obj2.getCurrentEmbeddedActivity();
      let applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      return null != applicationId && participant.applicationId === currentEmbeddedActivity.applicationId;
    } else {
      if (React5(participant)) {
        let result = null != obj3.getActiveStreamForUser(participant.user.id, channelId);
      } else if (React6(participant)) {
        let tmp4Result = tmp4(9622);
        result = tmp4Result.canRenderParticipantVideo(participant, tmp);
      } else {
        tmp4Result = tmp4(1369);
        tmp4Result.assertNever(participant);
      }
      return result;
    }
  }
}
const CallConstants = fn(4581);
({ isActivityParticipant: metroRequire, isStreamParticipant: closure_7, isUserParticipant: closure_8 } = CallConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/useIsVoicePanelParticipantFocusable.tsx");

export default function useIsVoicePanelParticipantFocusable(arg0, arg1, arg2) {
  _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  const items = [ChannelRTCStore, MediaEngineStore, closure_2, ApplicationStreamingStore];
  return require("initialize").useStateFromStores(items, () =>
    isVoicePanelParticipantFocusable(
      closure_0,
      closure_1,
      closure_2,
      ChannelRTCStore,
      MediaEngineStore,
      EmbeddedActivitiesStore,
      ApplicationStreamingStore,
    ),
  );
}
export { isVoicePanelParticipantFocusable };
