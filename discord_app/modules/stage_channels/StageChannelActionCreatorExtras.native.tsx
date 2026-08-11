// discord_app/modules/stage_channels/StageChannelActionCreatorExtras.native.tsx
import { setIsOnStartStageScreen } from "setIsOnStartStageScreen";
import MAX_STAGE_TOPIC_LENGTH from "MAX_STAGE_TOPIC_LENGTH";
import { asyncRequireImpl } from "../../../_runtime/02007_asyncRequireImpl.js";
import { ModalActionCreators } from "../../actions/ModalActionCreators.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../action_sheet/native/ActionSheetActionCreators.tsx";
import { showUserProfileActionSheet } from "../user_profile/native/showUserProfileActionSheet.tsx";
import { useIsStageVoicePanelEnabled } from "StageVoicePanelExperiment.tsx";
import { useStageBlockedUsersCount } from "useStageBlockedUsersCount.tsx";

let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
({ STAGE_AUDIENCE_NOTICE_SHEET_KEY: c4, START_STAGE_CHANNEL_EVENT_SHEET_KEY: c5, STAGE_BLOCKED_USERS_SHEET_KEY: closure_6, STAGE_SETTINGS_SHEET_KEY: error, EXPLICIT_END_STAGE_SHEET_KEY: metroImportAll } = MAX_STAGE_TOPIC_LENGTH);
const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export const openStageChannelSettings = function openStageChannelSettings(closure_0) {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { channel: closure_0 };
  obj.openLazy(asyncRequireImpl(7779, dependencyMap.paths), closure_5, obj);
};
export function openEndGuildEventConfirmationModal() {

}
export const openStageChannelAudienceNoticeModal = function openStageChannelAudienceNoticeModal(channelId) {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { channelId };
  obj.openLazy(asyncRequireImpl(7966, dependencyMap.paths), closure_4, obj);
};
export const openStageBlockedUsersSheet = function openStageBlockedUsersSheet(channel, onAccept) {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { channel, onAccept };
  obj.openLazy(asyncRequireImpl(8007, dependencyMap.paths), closure_6, obj);
};
export const openStageSettingsSheet = function openStageSettingsSheet(closure_0, closure_1) {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { channelId: closure_0, onOpenRTCDebugOverlay: closure_1 };
  obj.openLazy(asyncRequireImpl(8014, dependencyMap.paths), closure_7, obj);
};
export const openEndStageModal = function openEndStageModal(closure_0) {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { channel: closure_0 };
  obj.openLazy(asyncRequireImpl(12667, dependencyMap.paths), closure_8, obj);
};
export const openStageChannel = function openStageChannel(outer1_0) {
  if (outer1_0.isGuildStageVoice()) {
    let obj = useIsStageVoicePanelEnabled;
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      let tmpResult = tmp(4513);
      tmpResult.openGuildVoiceModal(outer1_0);
    } else {
      obj = { channel: null };
      obj[0] = outer1_0;
      const obj2 = ModalActionCreators;
      tmpResult = tmp(4513);
      obj2.pushLazy(tmp(2007)(10657, tmp2.paths), obj, tmpResult.getVoiceChannelKey(outer1_0.id));
      const tmp4 = tmp(2007)(10657, tmp2.paths);
    }
    tmp2 = dependencyMap;
  }
};
export const showPlatformUserProfile = function showPlatformUserProfile(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.isVoiceContext = true;
  showUserProfileActionSheet(obj);
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
      let tmp3Result = tmp3(4513);
      tmp3Result.openGuildVoiceModal(id);
    } else {
      obj = { channel: null };
      obj[0] = id;
      const obj2 = ModalActionCreators;
      tmp3Result = tmp3(4513);
      obj2.pushLazy(tmp3(2007)(10657, tmp4.paths), obj, tmp3Result.getVoiceChannelKey(id.id));
      const tmp6 = tmp3(2007)(10657, tmp4.paths);
    }
    tmp4 = dependencyMap;
  }
};
export function showChannelChangeConfirmationAlert(channel, arg1) {
  return false;
}