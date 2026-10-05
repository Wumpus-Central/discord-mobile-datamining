// discord_app/modules/stage_channels/StageChannelActionCreatorExtras.native.tsx
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import NavigationRouteUtils from "../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import PrivateChannelCallUtils from "../../utils/native/PrivateChannelCallUtils.tsx";
import showUserProfileActionSheetDefault from "../user_profile/native/showUserProfileActionSheet.tsx";
import useIsOnStartStageScreenStore from "useIsOnStartStageScreenStore.tsx";
import useStageBlockedUsersCount from "useStageBlockedUsersCount.tsx";
import VoicePanelStore from "../voice_panel/VoicePanelStore.tsx";
import StageChannelsConstants from "StageChannelsConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const setIsOnStartStageScreen = useIsOnStartStageScreenStore.setIsOnStartStageScreen;
({
  START_STAGE_CHANNEL_EVENT_SHEET_KEY: hasOwnProperty,
  STAGE_BLOCKED_USERS_SHEET_KEY: metroRequire,
  STAGE_SETTINGS_SHEET_KEY: metroImportDefault,
  EXPLICIT_END_STAGE_SHEET_KEY: metroImportAll,
} = StageChannelsConstants);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export const openStageChannelSettings = function openStageChannelSettings(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(8073, dependencyMap.paths), hasOwnProperty, obj2);
};
export function openEndGuildEventConfirmationModal() {}
export const openStageBlockedUsersSheet = function openStageBlockedUsersSheet(channel, onAccept) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, onAccept };
  obj.openLazy(asyncRequire(8275, dependencyMap.paths), metroRequire, obj2);
};
export const openStageSettingsSheet = function openStageSettingsSheet(channelId, onOpenRTCDebugOverlay) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId, onOpenRTCDebugOverlay };
  obj.openLazy(asyncRequire(8278, dependencyMap.paths), metroImportDefault, obj2);
};
export const openEndStageModal = function openEndStageModal(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(12730, dependencyMap.paths), metroImportAll, obj2);
};
export const openStageChannel = function openStageChannel(isGuildStageVoice) {
  if (isGuildStageVoice.isGuildStageVoice()) {
    const state = VoicePanelStore.getState();
    state.closeChannel(isGuildStageVoice.id);
    const obj2 = PrivateChannelCallUtils;
    const voiceChannelKey = obj2.getVoiceChannelKey(isGuildStageVoice.id);
    const obj3 = NavigationRouteUtils;
    if (!obj3.isModalOpen(voiceChannelKey)) {
      const obj = { channel: isGuildStageVoice };
      const obj4 = ModalActionCreatorsDefault;
      obj4.pushLazy(asyncRequire(9056, dependencyMap.paths), obj, voiceChannelKey);
    }
  }
};
export const showPlatformUserProfile = function showPlatformUserProfile(arg0) {
  const obj = { isVoiceContext: true };
  const tmp = showUserProfileActionSheetDefault;
  const merged = Object.assign(arg0);
  tmp(obj);
};
export const shouldShowBlockedUsers = function shouldShowBlockedUsers(id) {
  const obj = useStageBlockedUsersCount;
  const stageBlockedUsersCount = obj.getStageBlockedUsersCount(id);
  const obj2 = useStageBlockedUsersCount;
  const tmp2 = stageBlockedUsersCount > 0 || obj2.getStageIgnoredUsersCount(id) > 0;
  return tmp2;
};
export const navigateToStage = function navigateToStage(id, arg1) {
  if (arg1 !== id.id) {
    setIsOnStartStageScreen(true);
  }
  if (id.isGuildStageVoice()) {
    const state = VoicePanelStore.getState();
    state.closeChannel(id.id);
    const obj2 = PrivateChannelCallUtils;
    const voiceChannelKey = obj2.getVoiceChannelKey(id.id);
    const obj3 = NavigationRouteUtils;
    if (!obj3.isModalOpen(voiceChannelKey)) {
      const obj = { channel: id };
      const obj4 = ModalActionCreatorsDefault;
      obj4.pushLazy(asyncRequire(9056, dependencyMap.paths), obj, voiceChannelKey);
    }
  }
};
export function showChannelChangeConfirmationAlert() {
  return false;
}
