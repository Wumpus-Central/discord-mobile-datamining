// === Module 6376: StageChannelActionCreatorExtras ===

// Module 6376 (StageChannelActionCreatorExtras)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4968 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 6373 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7948 */;
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 10786 */;
import StageChannelUnifiedCallExperiment from "StageChannelUnifiedCallExperiment" /* 10793 */;
import VoicePanelStore from "VoicePanelStore" /* 6374 */;

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
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10580, dependencyMap.paths), obj3, voiceChannelKey);
      }
      tmpResult2 = NavigationRouteUtils;
    }
    isStageUnifiedCallResult = StageChannelUnifiedCallExperiment.isStageUnifiedCall(channel, "openStageChannel");
  }
}
const setIsOnStartStageScreen = fn(6377).setIsOnStartStageScreen;
const StageChannelsConstants = fn(6379);
({ START_STAGE_CHANNEL_EVENT_SHEET_KEY: hasOwnProperty, STAGE_BLOCKED_USERS_SHEET_KEY: closure_6, STAGE_SETTINGS_SHEET_KEY: metroImportDefault, EXPLICIT_END_STAGE_SHEET_KEY: closure_8 } = StageChannelsConstants);
const ComponentActions = fn(1072).ComponentActions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export function openStageChannelSettings(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(6380, dependencyMap.paths), hasOwnProperty, { channel });
}
export function openEndGuildEventConfirmationModal() {

}
export function openStageBlockedUsersSheet(channel, onAccept) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14758, dependencyMap.paths), timestampProducer, { channel, onAccept });
}
export function openStageSettingsSheet(channelId, onOpenRTCDebugOverlay) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14759, dependencyMap.paths), metroImportDefault, { channelId, onOpenRTCDebugOverlay });
}
export function openEndStageModal(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14764, dependencyMap.paths), React5, { channel });
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