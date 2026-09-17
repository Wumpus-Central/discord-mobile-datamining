// discord_app/modules/stage_channels/StageChannelActionCreatorExtras.native.tsx
import asyncRequireImpl from "../../../_runtime/01897_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import PrivateChannelCallUtils from "../../utils/native/PrivateChannelCallUtils.tsx";
import StageVoicePanelExperiment from "StageVoicePanelExperiment.tsx";
import showUserProfileActionSheetDefault from "../user_profile/native/showUserProfileActionSheet.tsx";
import useIsOnStartStageScreenStore from "useIsOnStartStageScreenStore.tsx";
import useStageBlockedUsersCount from "useStageBlockedUsersCount.tsx";
import StageChannelsConstants from "StageChannelsConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const setIsOnStartStageScreen = useIsOnStartStageScreenStore.setIsOnStartStageScreen;
({
  STAGE_AUDIENCE_NOTICE_SHEET_KEY: closure_4,
  START_STAGE_CHANNEL_EVENT_SHEET_KEY: hasOwnProperty,
  STAGE_BLOCKED_USERS_SHEET_KEY: metroRequire,
  STAGE_SETTINGS_SHEET_KEY: closure_7,
  EXPLICIT_END_STAGE_SHEET_KEY: closure_8,
} = StageChannelsConstants);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export const openStageChannelSettings = function openStageChannelSettings(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8546, dependencyMap.paths), hasOwnProperty, { channel });
};
export function openEndGuildEventConfirmationModal() {}
export const openStageChannelAudienceNoticeModal = function openStageChannelAudienceNoticeModal(channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8745, dependencyMap.paths), React4, { channelId });
};
export const openStageBlockedUsersSheet = function openStageBlockedUsersSheet(channel, onAccept) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8773, dependencyMap.paths), timestampProducer, {
    channel,
    onAccept,
  });
};
export const openStageSettingsSheet = function openStageSettingsSheet(channelId, onOpenRTCDebugOverlay) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8776, dependencyMap.paths), React5, {
    channelId,
    onOpenRTCDebugOverlay,
  });
};
export const openEndStageModal = function openEndStageModal(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9235, dependencyMap.paths), React6, { channel });
};
export const openStageChannel = function openStageChannel(isGuildStageVoice) {
  if (isGuildStageVoice.isGuildStageVoice()) {
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      PrivateChannelCallUtils.openGuildVoiceModal(isGuildStageVoice);
      const tmpResult = PrivateChannelCallUtils;
    } else {
      const obj3 = { channel: isGuildStageVoice };
      const obj2 = ModalActionCreatorsDefault;
      const tmp4 = asyncRequireImpl(9620, dependencyMap.paths);
      obj2.pushLazy(tmp4, obj3, PrivateChannelCallUtils.getVoiceChannelKey(isGuildStageVoice.id));
      const tmpResult2 = PrivateChannelCallUtils;
    }
    obj = StageVoicePanelExperiment;
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
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      PrivateChannelCallUtils.openGuildVoiceModal(id);
      const tmp3Result = PrivateChannelCallUtils;
    } else {
      const obj3 = { channel: id };
      const obj2 = ModalActionCreatorsDefault;
      const tmp6 = asyncRequireImpl(9620, dependencyMap.paths);
      obj2.pushLazy(tmp6, obj3, PrivateChannelCallUtils.getVoiceChannelKey(id.id));
      const tmp3Result2 = PrivateChannelCallUtils;
    }
    obj = StageVoicePanelExperiment;
  }
};
export function showChannelChangeConfirmationAlert() {
  return false;
}
