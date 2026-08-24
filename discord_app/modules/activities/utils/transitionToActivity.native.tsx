// === Module 8733: transitionToActivity ===

// Module 8733 (transitionToActivity)
import set from "set" /* 2 */;
import getEmbeddedActivityLocationChannelId from "getEmbeddedActivityLocationChannelId" /* 4011 */;
import ChannelCallCameraPreviewDefault from "ChannelCallCameraPreview" /* 8668 */;
import VoiceChatDrawerState2 from "VoiceChatDrawerState" /* 8669 */;
import BOX_MODE_ACTIONSHEET_WIDTH from "BOX_MODE_ACTIONSHEET_WIDTH" /* 8670 */;
import ActivityPanelModes2 from "ActivityPanelModes" /* 8703 */;
import closure_4 from "participantFromServer" /* 1390 */;

const setVoiceChatDrawerState = VoiceChatDrawerState2.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelModes2.ActivityPanelModes;
const VoiceChatDrawerState = BOX_MODE_ACTIONSHEET_WIDTH.VoiceChatDrawerState;
let result = set.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  let obj = getEmbeddedActivityLocationChannelId;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let tmpResult = tmp(4229);
    const isModalOpenResult = tmpResult.isModalOpen(ChannelCallCameraPreviewDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(8724)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(8734)(embeddedActivityLocationChannelId);
    }
    selfEmbeddedActivityForLocation = selfEmbeddedActivityForLocation.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(8724)(embeddedActivityLocationChannelId)) {
        let tmp15Result = tmp15(8666);
        tmpResult = tmp(4777);
        obj = { applicationId: null, instanceId: null };
        ({ applicationId: obj5[0], compositeInstanceId: obj5[1] } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmpResult.getEmbeddedActivityParticipantId(obj));
        tmp15Result = tmp15(4342);
        tmp15Result.hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
      } else {
        const result = tmp(8701).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult1 = tmp(8701);
      }
    }
  }
};