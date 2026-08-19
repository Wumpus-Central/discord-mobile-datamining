// discord_app/modules/stage_channels/StageChannelActionCreatorExtras.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef5260 from "../../actions/ModalActionCreators.tsx";
import setIsOnStartStageScreen2 from "useIsOnStartStageScreenStore.tsx";
import useStageBlockedUsersCount from "useStageBlockedUsersCount.tsx";
import openChannelCallModal from "../../utils/native/PrivateChannelCallUtils.tsx";
import useIsStageVoicePanelEnabled from "StageVoicePanelExperiment.tsx";
import showUserProfileActionSheetDefault from "../user_profile/native/showUserProfileActionSheet.tsx";
import MAX_STAGE_TOPIC_LENGTH from "StageChannelsConstants.tsx";

const setIsOnStartStageScreen = setIsOnStartStageScreen2.setIsOnStartStageScreen;
({ STAGE_AUDIENCE_NOTICE_SHEET_KEY: c4, START_STAGE_CHANNEL_EVENT_SHEET_KEY: c5, STAGE_BLOCKED_USERS_SHEET_KEY: closure_6, STAGE_SETTINGS_SHEET_KEY: error, EXPLICIT_END_STAGE_SHEET_KEY: closure_8 } = MAX_STAGE_TOPIC_LENGTH);
const result = obj132.fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export const openStageChannelSettings = function openStageChannelSettings(closure_0) {
  const obj = { channel: closure_0 };
  obj.openLazy(asyncRequireImpl(8061, dependencyMap.paths), closure_5, obj);
};
export function openEndGuildEventConfirmationModal() {

}
export const openStageChannelAudienceNoticeModal = function openStageChannelAudienceNoticeModal(channelId) {
  const obj = { channelId };
  obj.openLazy(asyncRequireImpl(8080, dependencyMap.paths), closure_4, obj);
};
export const openStageBlockedUsersSheet = function openStageBlockedUsersSheet(channel, onAccept) {
  const obj = { channel, onAccept };
  obj.openLazy(asyncRequireImpl(8121, dependencyMap.paths), closure_6, obj);
};
export const openStageSettingsSheet = function openStageSettingsSheet(closure_0, closure_1) {
  const obj = { channelId: closure_0, onOpenRTCDebugOverlay: closure_1 };
  obj.openLazy(asyncRequireImpl(8128, dependencyMap.paths), closure_7, obj);
};
export const openEndStageModal = function openEndStageModal(channel) {
  const obj = { channel };
  obj.openLazy(asyncRequireImpl(12823, dependencyMap.paths), closure_8, obj);
};
export const openStageChannel = function openStageChannel(closure_0) {
  if (_require.isGuildStageVoice()) {
    let obj = useIsStageVoicePanelEnabled;
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      let tmpResult = openChannelCallModal;
      tmpResult.openGuildVoiceModal(_require);
    } else {
      obj = { channel: null };
      obj[0] = _require;
      const obj2 = _modDef5260;
      tmpResult = openChannelCallModal;
      obj2.pushLazy(asyncRequireImpl(8668, dependencyMap.paths), obj, tmpResult.getVoiceChannelKey(_require.id));
      const tmp4 = asyncRequireImpl(8668, dependencyMap.paths);
    }
  }
};
export const showPlatformUserProfile = function showPlatformUserProfile(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.isVoiceContext = true;
  showUserProfileActionSheetDefault(obj);
};
export const shouldShowBlockedUsers = function shouldShowBlockedUsers(id) {
  const stageBlockedUsersCount = useStageBlockedUsersCount.getStageBlockedUsersCount(id);
  return stageBlockedUsersCount > 0 || useStageBlockedUsersCount.getStageIgnoredUsersCount(id) > 0;
};
export const navigateToStage = function navigateToStage(id) {
  if (arg1 !== id.id) {
    setIsOnStartStageScreen(true);
  }
  if (id.isGuildStageVoice()) {
    let obj = useIsStageVoicePanelEnabled;
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      let tmp3Result = openChannelCallModal;
      tmp3Result.openGuildVoiceModal(id);
    } else {
      obj = { channel: null };
      obj[0] = id;
      const obj2 = _modDef5260;
      tmp3Result = openChannelCallModal;
      obj2.pushLazy(asyncRequireImpl(8668, dependencyMap.paths), obj, tmp3Result.getVoiceChannelKey(id.id));
      const tmp6 = asyncRequireImpl(8668, dependencyMap.paths);
    }
  }
};
export function showChannelChangeConfirmationAlert(channel, arg1) {
  return false;
}