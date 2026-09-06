// === Module 9535: transitionToActivity ===

// Module 9535 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4189 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4417 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4761 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9466 */;
import ChannelCallStore from "ChannelCallStore" /* 9467 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9468 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 9476 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9504 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9505 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 9526 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 9536 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(guild_id, _location) {
  let obj = embeddedActivityLocationUtils;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let tmpResult = NavigationRouteUtils;
    const isModalOpenResult = tmpResult.isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      openChannelCallModalForChannelIdDefault(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId)) {
        let tmp15Result = ChannelRTCActionCreatorsDefault;
        tmpResult = ChannelRTCParticipants;
        obj = { applicationId: null, instanceId: null };
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmpResult.getEmbeddedActivityParticipantId(obj));
        tmp15Result = ActionSheetActionCreatorsDefault;
        tmp15Result.hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
      } else {
        const result = EmbeddedActivitiesActionCreators.updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult1 = EmbeddedActivitiesActionCreators;
      }
    }
  }
};