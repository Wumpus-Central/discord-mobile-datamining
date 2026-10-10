// discord_app/modules/stage_channels/StageChannelActionCreatorExtras.native.tsx
import asyncRequireImpl from "../../../_runtime/02000_asyncRequireImpl.js";
import NavigationRouteUtils from "../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import PrivateChannelCallUtils from "../../utils/native/PrivateChannelCallUtils.tsx";
import useStageBlockedUsersCount from "useStageBlockedUsersCount.tsx";
import showUserProfileActionSheetDefault from "../user_profile/native/showUserProfileActionSheet.tsx";
import VoicePanelStore from "../voice_panel/VoicePanelStore.tsx";

require = fn;
const setIsOnStartStageScreen = fn(7484).setIsOnStartStageScreen;
const StageChannelsConstants = fn(5892);
({
  START_STAGE_CHANNEL_EVENT_SHEET_KEY: hasOwnProperty,
  STAGE_BLOCKED_USERS_SHEET_KEY: metroRequire,
  STAGE_SETTINGS_SHEET_KEY: closure_7,
  EXPLICIT_END_STAGE_SHEET_KEY: closure_8,
} = StageChannelsConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export const openStageChannelSettings = function openStageChannelSettings(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(7486, dependencyMap.paths), hasOwnProperty, { channel });
};
export function openEndGuildEventConfirmationModal() {}
export const openStageBlockedUsersSheet = function openStageBlockedUsersSheet(channel, onAccept) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(7717, dependencyMap.paths), timestampProducer, {
    channel,
    onAccept,
  });
};
export const openStageSettingsSheet = function openStageSettingsSheet(channelId, onOpenRTCDebugOverlay) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(7720, dependencyMap.paths), React5, {
    channelId,
    onOpenRTCDebugOverlay,
  });
};
export const openEndStageModal = function openEndStageModal(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13559, dependencyMap.paths), closure_1_8, { channel });
};
export const openStageChannel = function openStageChannel(isGuildStageVoice) {
  if (isGuildStageVoice.isGuildStageVoice()) {
    const state = VoicePanelStore.getState();
    state.closeChannel(isGuildStageVoice.id);
    const voiceChannelKey = PrivateChannelCallUtils.getVoiceChannelKey(isGuildStageVoice.id);
    if (!obj3.isModalOpen(voiceChannelKey)) {
      const obj = { channel: isGuildStageVoice };
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10825, dependencyMap.paths), obj, voiceChannelKey);
    }
    obj3 = NavigationRouteUtils;
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
    const state = VoicePanelStore.getState();
    state.closeChannel(id.id);
    const voiceChannelKey = PrivateChannelCallUtils.getVoiceChannelKey(id.id);
    if (!obj3.isModalOpen(voiceChannelKey)) {
      const obj = { channel: id };
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10825, dependencyMap.paths), obj, voiceChannelKey);
    }
    obj3 = NavigationRouteUtils;
  }
};
export function showChannelChangeConfirmationAlert() {
  return false;
}
