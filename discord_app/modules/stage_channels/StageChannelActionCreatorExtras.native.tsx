// discord_app/modules/stage_channels/StageChannelActionCreatorExtras.native.tsx
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
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
  const obj = { channel };
  obj.openLazy(asyncRequireImpl(8397, dependencyMap.paths), hasOwnProperty, obj);
};
export function openEndGuildEventConfirmationModal() {}
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
      let tmpResult = PrivateChannelCallUtils;
      tmpResult.openGuildVoiceModal(isGuildStageVoice);
    } else {
      obj = { channel: isGuildStageVoice };
      const obj2 = ModalActionCreatorsDefault;
      tmpResult = PrivateChannelCallUtils;
      obj2.pushLazy(
        asyncRequireImpl(9466, dependencyMap.paths),
        obj,
        tmpResult.getVoiceChannelKey(isGuildStageVoice.id),
      );
      const tmp4 = asyncRequireImpl(9466, dependencyMap.paths);
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
      obj2.pushLazy(asyncRequireImpl(9466, dependencyMap.paths), obj, tmp3Result.getVoiceChannelKey(id.id));
      const tmp6 = asyncRequireImpl(9466, dependencyMap.paths);
    }
  }
};
export function showChannelChangeConfirmationAlert() {
  return false;
}
