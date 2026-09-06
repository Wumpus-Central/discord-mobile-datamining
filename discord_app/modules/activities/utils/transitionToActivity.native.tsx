// discord_app/modules/activities/utils/transitionToActivity.native.tsx
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils.tsx";
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ChannelRTCActionCreatorsDefault from "../../../actions/ChannelRTCActionCreators.tsx";
import ChannelCallModalDefault from "../../video_calls/native/components/ChannelCallModal.tsx";
import ChannelCallStore from "../../video_calls/native/ChannelCallStore.tsx";
import ChannelCallConstants from "../../video_calls/native/ChannelCallConstants.tsx";
import ChannelRTCParticipants from "../../calls/ChannelRTCParticipants.tsx";
import EmbeddedActivitiesActionCreators from "../EmbeddedActivitiesActionCreators.tsx";
import ActivityPanelConstants from "../panel/ActivityPanelConstants.tsx";
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity.tsx";
import openChannelCallModalForChannelIdDefault from "../../../utils/native/openChannelCallModalForChannelId.tsx";
import EmbeddedActivitiesStore from "../EmbeddedActivitiesStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
        const participant = tmp15Result.selectParticipant(
          embeddedActivityLocationChannelId,
          tmpResult.getEmbeddedActivityParticipantId(obj),
        );
        tmp15Result = ActionSheetActionCreatorsDefault;
        tmp15Result.hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
      } else {
        const result = EmbeddedActivitiesActionCreators.updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult1 = EmbeddedActivitiesActionCreators;
      }
    }
  }
}
