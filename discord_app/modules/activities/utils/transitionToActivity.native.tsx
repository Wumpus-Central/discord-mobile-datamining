// discord_app/modules/activities/utils/transitionToActivity.native.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import getEmbeddedActivityLocationChannelId from "embeddedActivityLocationUtils.tsx";
import coerceMainRoute from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import sortKey from "../../calls/ChannelRTCParticipants.tsx";
import _modDef8666 from "../../../actions/ChannelRTCActionCreators.tsx";
import ChannelCallCameraPreviewDefault from "../../video_calls/native/components/ChannelCallModal.tsx";
import VoiceChatDrawerState2 from "../../video_calls/native/ChannelCallStore.tsx";
import BOX_MODE_ACTIONSHEET_WIDTH from "../../video_calls/native/ChannelCallConstants.tsx";
import _runPrimaryAppCommandOrJoinEmbeddedActivity from "../EmbeddedActivitiesActionCreators.tsx";
import ActivityPanelModes2 from "../panel/ActivityPanelConstants.tsx";
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity.tsx";
import openChannelCallModalForChannelIdDefault from "../../../utils/native/openChannelCallModalForChannelId.tsx";
import participantFromServer from "../EmbeddedActivitiesStore.tsx";

const setVoiceChatDrawerState = VoiceChatDrawerState2.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelModes2.ActivityPanelModes;
const VoiceChatDrawerState = BOX_MODE_ACTIONSHEET_WIDTH.VoiceChatDrawerState;
let result = obj132.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  let obj = getEmbeddedActivityLocationChannelId;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let tmpResult = coerceMainRoute;
    const isModalOpenResult = tmpResult.isModalOpen(ChannelCallCameraPreviewDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      openChannelCallModalForChannelIdDefault(embeddedActivityLocationChannelId);
    }
    selfEmbeddedActivityForLocation = selfEmbeddedActivityForLocation.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId)) {
        let tmp15Result = _modDef8666;
        tmpResult = sortKey;
        obj = { applicationId: null, instanceId: null };
        ({ applicationId: obj5[0], compositeInstanceId: obj5[1] } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmpResult.getEmbeddedActivityParticipantId(obj));
        tmp15Result = ACTION_SHEET_HEIGHT_HALFDefault;
        tmp15Result.hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
      } else {
        const result = _runPrimaryAppCommandOrJoinEmbeddedActivity.updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult1 = _runPrimaryAppCommandOrJoinEmbeddedActivity;
      }
    }
  }
};