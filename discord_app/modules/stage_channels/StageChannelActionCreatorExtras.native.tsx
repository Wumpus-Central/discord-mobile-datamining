// === Module 8058: openStageChannelSettings ===

// Module 8058 (openStageChannelSettings)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import _modDef5260 from "module_5260" /* 5260 */;
import setIsOnStartStageScreen2 from "setIsOnStartStageScreen" /* 8059 */;
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 8123 */;
import useIsStageVoicePanelEnabled from "useIsStageVoicePanelEnabled" /* 8665 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8929 */;
import MAX_STAGE_TOPIC_LENGTH from "MAX_STAGE_TOPIC_LENGTH" /* 4978 */;

const setIsOnStartStageScreen = setIsOnStartStageScreen2.setIsOnStartStageScreen;
({ STAGE_AUDIENCE_NOTICE_SHEET_KEY: c4, START_STAGE_CHANNEL_EVENT_SHEET_KEY: c5, STAGE_BLOCKED_USERS_SHEET_KEY: closure_6, STAGE_SETTINGS_SHEET_KEY: error, EXPLICIT_END_STAGE_SHEET_KEY: closure_8 } = MAX_STAGE_TOPIC_LENGTH);
const result = set.fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export const openStageChannelSettings = function openStageChannelSettings(closure_0) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channel: closure_0 };
  obj.openLazy(asyncRequireImpl(8061, dependencyMap.paths), closure_5, obj);
};
export function openEndGuildEventConfirmationModal() {

}
export const openStageChannelAudienceNoticeModal = function openStageChannelAudienceNoticeModal(channelId) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channelId };
  obj.openLazy(asyncRequireImpl(8080, dependencyMap.paths), closure_4, obj);
};
export const openStageBlockedUsersSheet = function openStageBlockedUsersSheet(channel, onAccept) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channel, onAccept };
  obj.openLazy(asyncRequireImpl(8121, dependencyMap.paths), closure_6, obj);
};
export const openStageSettingsSheet = function openStageSettingsSheet(closure_0, closure_1) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channelId: closure_0, onOpenRTCDebugOverlay: closure_1 };
  obj.openLazy(asyncRequireImpl(8128, dependencyMap.paths), closure_7, obj);
};
export const openEndStageModal = function openEndStageModal(closure_0) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channel: closure_0 };
  obj.openLazy(asyncRequireImpl(12823, dependencyMap.paths), closure_8, obj);
};
export const openStageChannel = function openStageChannel(closure_0) {
  if (closure_0.isGuildStageVoice()) {
    let obj = useIsStageVoicePanelEnabled;
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      let tmpResult = tmp(8663);
      tmpResult.openGuildVoiceModal(closure_0);
    } else {
      obj = { channel: null };
      obj[0] = closure_0;
      const obj2 = _modDef5260;
      tmpResult = tmp(8663);
      obj2.pushLazy(tmp(2007)(8668, tmp2.paths), obj, tmpResult.getVoiceChannelKey(closure_0.id));
      const tmp4 = tmp(2007)(8668, tmp2.paths);
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
  const obj = useStageBlockedUsersCount;
  const obj2 = useStageBlockedUsersCount;
  return stageBlockedUsersCount > 0 || useStageBlockedUsersCount.getStageIgnoredUsersCount(id) > 0;
};
export const navigateToStage = function navigateToStage(id) {
  if (arg1 !== id.id) {
    setIsOnStartStageScreen(true);
  }
  if (id.isGuildStageVoice()) {
    let obj = useIsStageVoicePanelEnabled;
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      let tmp3Result = tmp3(8663);
      tmp3Result.openGuildVoiceModal(id);
    } else {
      obj = { channel: null };
      obj[0] = id;
      const obj2 = _modDef5260;
      tmp3Result = tmp3(8663);
      obj2.pushLazy(tmp3(2007)(8668, tmp4.paths), obj, tmp3Result.getVoiceChannelKey(id.id));
      const tmp6 = tmp3(2007)(8668, tmp4.paths);
    }
    tmp4 = dependencyMap;
  }
};
export function showChannelChangeConfirmationAlert(channel, arg1) {
  return false;
}