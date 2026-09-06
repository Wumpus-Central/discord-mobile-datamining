// discord_app/modules/activities/utils/transitionToActivity.native.tsx
import set from "../../../../_runtime/00002_set.js";
import getEmbeddedActivityLocationChannelId from "embeddedActivityLocationUtils.tsx";
import ChannelCallCameraPreviewDefault from "../../video_calls/native/components/ChannelCallModal.tsx";
import VoiceChatDrawerState2 from "../../video_calls/native/ChannelCallStore.tsx";
import BOX_MODE_ACTIONSHEET_WIDTH from "../../video_calls/native/ChannelCallConstants.tsx";
import ActivityPanelModes2 from "../panel/ActivityPanelConstants.tsx";
import closure_4 from "../EmbeddedActivitiesStore.tsx";

const setVoiceChatDrawerState = VoiceChatDrawerState2.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelModes2.ActivityPanelModes;
const VoiceChatDrawerState = BOX_MODE_ACTIONSHEET_WIDTH.VoiceChatDrawerState;
let result = set.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  let obj = getEmbeddedActivityLocationChannelId;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let tmpResult = tmp(4417);
    const isModalOpenResult = tmpResult.isModalOpen(ChannelCallCameraPreviewDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(9526)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(9536)(embeddedActivityLocationChannelId);
    }
    selfEmbeddedActivityForLocation = selfEmbeddedActivityForLocation.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(9526)(embeddedActivityLocationChannelId)) {
        let tmp15Result = tmp15(4761);
        tmpResult = tmp(9476);
        obj = { applicationId: null, instanceId: null };
        ({ applicationId: obj5[0], compositeInstanceId: obj5[1] } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(
          embeddedActivityLocationChannelId,
          tmpResult.getEmbeddedActivityParticipantId(obj),
        );
        tmp15Result = tmp15(4527);
        tmp15Result.hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
      } else {
        const result = tmp(9504).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult1 = tmp(9504);
      }
    }
  }
}
