// === Module 11835: transitionToActivity ===

// Module 11835 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 5062 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5321 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5777 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5798 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5879 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6971 */;
import ChannelCallStore from "ChannelCallStore" /* 11133 */;
import ChannelCallConstants from "ChannelCallConstants" /* 11134 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 11836 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 11863 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 13320 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4989 */;
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