// === Module 8065: StageChannelActionCreatorExtras ===

// Module 8065 (StageChannelActionCreatorExtras)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5321 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 8063 */;
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 8299 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8874 */;
import VoicePanelStore from "VoicePanelStore" /* 6995 */;

require = fn;
const setIsOnStartStageScreen = fn(8066).setIsOnStartStageScreen;
const StageChannelsConstants = fn(6829);
({ START_STAGE_CHANNEL_EVENT_SHEET_KEY: hasOwnProperty, STAGE_BLOCKED_USERS_SHEET_KEY: metroRequire, STAGE_SETTINGS_SHEET_KEY: closure_7, EXPLICIT_END_STAGE_SHEET_KEY: closure_8 } = StageChannelsConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export function openStageChannelSettings(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8068, dependencyMap.paths), hasOwnProperty, { channel });
}
export function openEndGuildEventConfirmationModal() {

}
export function openStageBlockedUsersSheet(channel, onAccept) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8297, dependencyMap.paths), timestampProducer, { channel, onAccept });
}
export function openStageSettingsSheet(channelId, onOpenRTCDebugOverlay) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8300, dependencyMap.paths), React5, { channelId, onOpenRTCDebugOverlay });
}
export function openEndStageModal(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15320, dependencyMap.paths), React6, { channel });
}
export function openStageChannel(isGuildStageVoice) {
  if (isGuildStageVoice.isGuildStageVoice()) {
    state = VoicePanelStore.getState();
    state.closeChannel(isGuildStageVoice.id);
    const voiceChannelKey = PrivateChannelCallUtils.getVoiceChannelKey(isGuildStageVoice.id);
    if (!obj3.isModalOpen(voiceChannelKey)) {
      const obj = { channel: isGuildStageVoice };
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11836, dependencyMap.paths), obj, voiceChannelKey);
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
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11836, dependencyMap.paths), obj, voiceChannelKey);
    }
    obj3 = NavigationRouteUtils;
  }
}
export function showChannelChangeConfirmationAlert() {
  return false;
}