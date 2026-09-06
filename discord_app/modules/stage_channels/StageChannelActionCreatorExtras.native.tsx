// === Module 8394: StageChannelActionCreatorExtras ===

// Module 8394 (StageChannelActionCreatorExtras)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import StageVoicePanelExperiment from "StageVoicePanelExperiment" /* 4769 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import useIsOnStartStageScreenStore from "useIsOnStartStageScreenStore" /* 8395 */;
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 8620 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5414 */;
import size from "module_2" /* 2 */;

const setIsOnStartStageScreen = useIsOnStartStageScreenStore.setIsOnStartStageScreen;
({ STAGE_AUDIENCE_NOTICE_SHEET_KEY: closure_4, START_STAGE_CHANNEL_EVENT_SHEET_KEY: hasOwnProperty, STAGE_BLOCKED_USERS_SHEET_KEY: metroRequire, STAGE_SETTINGS_SHEET_KEY: closure_7, EXPLICIT_END_STAGE_SHEET_KEY: closure_8 } = StageChannelsConstants);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export const openStageChannelSettings = function openStageChannelSettings(channel) {
  const obj = { channel };
  obj.openLazy(asyncRequireImpl(8397, dependencyMap.paths), hasOwnProperty, obj);
};
export function openEndGuildEventConfirmationModal() {

}
export const openStageChannelAudienceNoticeModal = function openStageChannelAudienceNoticeModal(channelId) {
  const obj = { channelId };
  obj.openLazy(asyncRequireImpl(8590, dependencyMap.paths), React4, obj);
};
export const openStageBlockedUsersSheet = function openStageBlockedUsersSheet(channel, onAccept) {
  const obj = { channel, onAccept };
  obj.openLazy(asyncRequireImpl(8618, dependencyMap.paths), timestampProducer, obj);
};
export const openStageSettingsSheet = function openStageSettingsSheet(channelId, onOpenRTCDebugOverlay) {
  const obj = { channelId, onOpenRTCDebugOverlay };
  obj.openLazy(asyncRequireImpl(8621, dependencyMap.paths), React5, obj);
};
export const openEndStageModal = function openEndStageModal(channel) {
  const obj = { channel };
  obj.openLazy(asyncRequireImpl(9081, dependencyMap.paths), React6, obj);
};
export const openStageChannel = function openStageChannel(isGuildStageVoice) {
  if (isGuildStageVoice.isGuildStageVoice()) {
    let obj = StageVoicePanelExperiment;
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      let tmpResult = tmp(4767);
      tmpResult.openGuildVoiceModal(isGuildStageVoice);
    } else {
      obj = { channel: isGuildStageVoice };
      const obj2 = ModalActionCreatorsDefault;
      tmpResult = tmp(4767);
      obj2.pushLazy(tmp(1896)(9466, tmp2.paths), obj, tmpResult.getVoiceChannelKey(isGuildStageVoice.id));
      const tmp4 = tmp(1896)(9466, tmp2.paths);
    }
    tmp2 = dependencyMap;
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
      let tmp3Result = tmp3(4767);
      tmp3Result.openGuildVoiceModal(id);
    } else {
      obj = { channel: id };
      const obj2 = ModalActionCreatorsDefault;
      tmp3Result = tmp3(4767);
      obj2.pushLazy(tmp3(1896)(9466, tmp4.paths), obj, tmp3Result.getVoiceChannelKey(id.id));
      const tmp6 = tmp3(1896)(9466, tmp4.paths);
    }
    tmp4 = dependencyMap;
  }
};
export function showChannelChangeConfirmationAlert() {
  return false;
}