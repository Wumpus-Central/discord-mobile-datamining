// === Module 9535: transitionToActivity ===

// Module 9535 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4189 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9466 */;
import ChannelCallStore from "ChannelCallStore" /* 9467 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9468 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9505 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  let obj = embeddedActivityLocationUtils;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let tmpResult = tmp(4417);
    const isModalOpenResult = tmpResult.isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(9526)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(9536)(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(9526)(embeddedActivityLocationChannelId)) {
        let tmp15Result = tmp15(4761);
        tmpResult = tmp(9476);
        obj = { applicationId: null, instanceId: null };
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmpResult.getEmbeddedActivityParticipantId(obj));
        tmp15Result = tmp15(4527);
        tmp15Result.hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
      } else {
        const result = tmp(9504).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult1 = tmp(9504);
      }
    }
  }
};