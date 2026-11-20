// === Module 10515: transitionToActivity ===

// Module 10515 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4715 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4970 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5420 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5441 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5530 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6510 */;
import ChannelCallStore from "ChannelCallStore" /* 10516 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10517 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 10522 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 10551 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 12077 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4642 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(guild_id, _location) {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    const isModalOpenResult = NavigationRouteUtils.isModalOpen(ChannelCallModalDefault);
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
        const tmp15Result = ChannelRTCActionCreatorsDefault;
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, ChannelRTCParticipants.getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
        const obj2 = { applicationId: null, instanceId: null };
        const tmpResult3 = ChannelRTCParticipants;
        ActionSheetActionCreatorsDefault.hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const tmp15Result2 = ActionSheetActionCreatorsDefault;
      } else {
        const result = EmbeddedActivitiesActionCreators.updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult4 = EmbeddedActivitiesActionCreators;
      }
    }
    const tmpResult = NavigationRouteUtils;
  }
};