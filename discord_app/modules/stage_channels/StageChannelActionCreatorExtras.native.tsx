// === Module 6903: StageChannelActionCreatorExtras ===

// Module 6903 (StageChannelActionCreatorExtras)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5492 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 6900 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8476 */;
import StageChannelUnifiedCallExperiment from "StageChannelUnifiedCallExperiment" /* 11951 */;
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 12912 */;
import VoicePanelStore from "VoicePanelStore" /* 6901 */;

require = fn;
function openStageChannel(channel) {
  if (channel.isGuildStageVoice()) {
    state = VoicePanelStore.getState();
    if (isStageUnifiedCallResult) {
      state.openChannel(channel.id);
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      const obj2 = { channelId: channel.id };
      ComponentDispatch.dispatch(ComponentActions.VOICE_PANEL_OPEN, obj2);
    } else {
      state.closeChannel(channel.id);
      const voiceChannelKey = PrivateChannelCallUtils.getVoiceChannelKey(channel.id);
      const tmpResult = PrivateChannelCallUtils;
      if (!tmpResult2.isModalOpen(voiceChannelKey)) {
        const obj3 = { channel };
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12713, dependencyMap.paths), obj3, voiceChannelKey);
      }
      tmpResult2 = NavigationRouteUtils;
    }
    isStageUnifiedCallResult = StageChannelUnifiedCallExperiment.isStageUnifiedCall(channel, "openStageChannel");
  }
}
const setIsOnStartStageScreen = fn(6904).setIsOnStartStageScreen;
const StageChannelsConstants = fn(6906);
({ START_STAGE_CHANNEL_EVENT_SHEET_KEY: hasOwnProperty, STAGE_BLOCKED_USERS_SHEET_KEY: closure_6, STAGE_SETTINGS_SHEET_KEY: metroImportDefault, EXPLICIT_END_STAGE_SHEET_KEY: closure_8 } = StageChannelsConstants);
const ComponentActions = fn(1072).ComponentActions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export function openStageChannelSettings(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(6907, dependencyMap.paths), hasOwnProperty, { channel });
}
export function openEndGuildEventConfirmationModal() {

}
export function openStageBlockedUsersSheet(channel, onAccept) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16068, dependencyMap.paths), timestampProducer, { channel, onAccept });
}
export function openStageSettingsSheet(channelId, onOpenRTCDebugOverlay) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16069, dependencyMap.paths), metroImportDefault, { channelId, onOpenRTCDebugOverlay });
}
export function openEndStageModal(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16074, dependencyMap.paths), React5, { channel });
}
export { openStageChannel };
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
  openStageChannel(id);
}
export function showChannelChangeConfirmationAlert() {
  return false;
}