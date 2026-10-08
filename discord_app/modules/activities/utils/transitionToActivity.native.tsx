// === Module 10668: transitionToActivity ===

// Module 10668 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4696 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4936 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5104 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6043 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 6072 */;
import ChannelCallStore from "ChannelCallStore" /* 10333 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10334 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 10458 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 10635 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 10669 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 11123 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2062 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(guild_id, connectedActivityLocation) {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
  if (null != embeddedActivityLocationChannelId) {
    const isModalOpenResult = NavigationRouteUtils.isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      openChannelCallModalForChannelIdDefault(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
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