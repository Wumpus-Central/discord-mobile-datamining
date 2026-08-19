// === Module 8733: transitionToActivity ===

// Module 8733 (transitionToActivity)
import obj132 from "obj132" /* 2 */;
import getEmbeddedActivityLocationChannelId from "getEmbeddedActivityLocationChannelId" /* 4011 */;
import coerceMainRoute from "coerceMainRoute" /* 4229 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import sortKey from "sortKey" /* 4777 */;
import _modDef8666 from "module_8666" /* 8666 */;
import ChannelCallCameraPreviewDefault from "ChannelCallCameraPreview" /* 8668 */;
import VoiceChatDrawerState2 from "VoiceChatDrawerState" /* 8669 */;
import BOX_MODE_ACTIONSHEET_WIDTH from "BOX_MODE_ACTIONSHEET_WIDTH" /* 8670 */;
import _runPrimaryAppCommandOrJoinEmbeddedActivity from "_runPrimaryAppCommandOrJoinEmbeddedActivity" /* 8701 */;
import ActivityPanelModes2 from "ActivityPanelModes" /* 8703 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 8724 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 8734 */;
import participantFromServer from "participantFromServer" /* 1390 */;

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