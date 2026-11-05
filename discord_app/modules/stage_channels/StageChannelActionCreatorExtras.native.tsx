// === Module 8086: StageChannelActionCreatorExtras ===

// Module 8086 (StageChannelActionCreatorExtras)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5324 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 8084 */;
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 8320 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8896 */;
import VoicePanelStore from "VoicePanelStore" /* 7013 */;

require = fn;
const setIsOnStartStageScreen = fn(8087).setIsOnStartStageScreen;
const StageChannelsConstants = fn(6847);
({ START_STAGE_CHANNEL_EVENT_SHEET_KEY: hasOwnProperty, STAGE_BLOCKED_USERS_SHEET_KEY: closure_6, STAGE_SETTINGS_SHEET_KEY: metroImportDefault, EXPLICIT_END_STAGE_SHEET_KEY: closure_8 } = StageChannelsConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export function openStageChannelSettings(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8089, dependencyMap.paths), hasOwnProperty, { channel });
}
export function openEndGuildEventConfirmationModal() {

}
export function openStageBlockedUsersSheet(channel, onAccept) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8318, dependencyMap.paths), timestampProducer, { channel, onAccept });
}
export function openStageSettingsSheet(channelId, onOpenRTCDebugOverlay) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8321, dependencyMap.paths), metroImportDefault, { channelId, onOpenRTCDebugOverlay });
}
export function openEndStageModal(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15421, dependencyMap.paths), React5, { channel });
}
export function openStageChannel(isGuildStageVoice) {
  if (isGuildStageVoice.isGuildStageVoice()) {
    state = VoicePanelStore.getState();
    state.closeChannel(isGuildStageVoice.id);
    const voiceChannelKey = PrivateChannelCallUtils.getVoiceChannelKey(isGuildStageVoice.id);
    if (!obj3.isModalOpen(voiceChannelKey)) {
      const obj = { channel: isGuildStageVoice };
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11905, dependencyMap.paths), obj, voiceChannelKey);
    }
    obj3 = NavigationRouteUtils;
  }
}
export function showPlatformUserProfile(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.isVoiceContext = true;
  showUserProfileActionSheetDefault(obj);
}
export function shouldShowBlockedUsers(id) {
  const stageBlockedUsersCount = useStageBlockedUsersCount.getStageBlockedUsersCount(id);
  return stageBlockedUsersCount > 0 || useStageBlockedUsersCount.getStageIgnoredUsersCount(id) > 0;
}
export function navigateToStage(id, arg1) {
  if (arg1 !== id.id) {
    setIsOnStartStageScreen(true);
  }
  if (id.isGuildStageVoice()) {
    state = VoicePanelStore.getState();
    state.closeChannel(id.id);
    const voiceChannelKey = PrivateChannelCallUtils.getVoiceChannelKey(id.id);
    if (!obj3.isModalOpen(voiceChannelKey)) {
      const obj = { channel: id };
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11905, dependencyMap.paths), obj, voiceChannelKey);
    }
    obj3 = NavigationRouteUtils;
  }
}
export function showChannelChangeConfirmationAlert() {
  return false;
}