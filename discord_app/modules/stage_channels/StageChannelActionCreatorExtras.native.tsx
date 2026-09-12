// === Module 8512: StageChannelActionCreatorExtras ===

// Module 8512 (StageChannelActionCreatorExtras)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4843 */;
import StageVoicePanelExperiment from "StageVoicePanelExperiment" /* 4845 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8296 */;
import useIsOnStartStageScreenStore from "useIsOnStartStageScreenStore" /* 8513 */;
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 8743 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5495 */;
import size from "module_2" /* 2 */;

const setIsOnStartStageScreen = useIsOnStartStageScreenStore.setIsOnStartStageScreen;
({ STAGE_AUDIENCE_NOTICE_SHEET_KEY: closure_4, START_STAGE_CHANNEL_EVENT_SHEET_KEY: hasOwnProperty, STAGE_BLOCKED_USERS_SHEET_KEY: metroRequire, STAGE_SETTINGS_SHEET_KEY: closure_7, EXPLICIT_END_STAGE_SHEET_KEY: closure_8 } = StageChannelsConstants);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export const openStageChannelSettings = function openStageChannelSettings(channel) {
  const obj = { channel };
  obj.openLazy(asyncRequireImpl(8515, dependencyMap.paths), hasOwnProperty, obj);
};
export function openEndGuildEventConfirmationModal() {

}
export const openStageChannelAudienceNoticeModal = function openStageChannelAudienceNoticeModal(channelId) {
  const obj = { channelId };
  obj.openLazy(asyncRequireImpl(8713, dependencyMap.paths), React4, obj);
};
export const openStageBlockedUsersSheet = function openStageBlockedUsersSheet(channel, onAccept) {
  const obj = { channel, onAccept };
  obj.openLazy(asyncRequireImpl(8741, dependencyMap.paths), timestampProducer, obj);
};
export const openStageSettingsSheet = function openStageSettingsSheet(channelId, onOpenRTCDebugOverlay) {
  const obj = { channelId, onOpenRTCDebugOverlay };
  obj.openLazy(asyncRequireImpl(8744, dependencyMap.paths), React5, obj);
};
export const openEndStageModal = function openEndStageModal(channel) {
  const obj = { channel };
  obj.openLazy(asyncRequireImpl(9210, dependencyMap.paths), React6, obj);
};
export const openStageChannel = function openStageChannel(isGuildStageVoice) {
  if (isGuildStageVoice.isGuildStageVoice()) {
    let obj = StageVoicePanelExperiment;
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      let tmpResult = PrivateChannelCallUtils;
      tmpResult.openGuildVoiceModal(isGuildStageVoice);
    } else {
      obj = { channel: isGuildStageVoice };
      const obj2 = ModalActionCreatorsDefault;
      tmpResult = PrivateChannelCallUtils;
      obj2.pushLazy(asyncRequireImpl(9596, dependencyMap.paths), obj, tmpResult.getVoiceChannelKey(isGuildStageVoice.id));
      const tmp4 = asyncRequireImpl(9596, dependencyMap.paths);
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
export const navigateToStage = function navigateToStage(id, arg1) {
  if (arg1 !== id.id) {
    setIsOnStartStageScreen(true);
  }
  if (id.isGuildStageVoice()) {
    let obj = StageVoicePanelExperiment;
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      let tmp3Result = PrivateChannelCallUtils;
      tmp3Result.openGuildVoiceModal(id);
    } else {
      obj = { channel: id };
      const obj2 = ModalActionCreatorsDefault;
      tmp3Result = PrivateChannelCallUtils;
      obj2.pushLazy(asyncRequireImpl(9596, dependencyMap.paths), obj, tmp3Result.getVoiceChannelKey(id.id));
      const tmp6 = asyncRequireImpl(9596, dependencyMap.paths);
    }
  }
};
export function showChannelChangeConfirmationAlert() {
  return false;
}