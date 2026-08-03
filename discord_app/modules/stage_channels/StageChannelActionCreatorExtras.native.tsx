import { setIsOnStartStageScreen } from "setIsOnStartStageScreen";
import MAX_STAGE_TOPIC_LENGTH from "MAX_STAGE_TOPIC_LENGTH";

let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
({ STAGE_AUDIENCE_NOTICE_SHEET_KEY: c4, START_STAGE_CHANNEL_EVENT_SHEET_KEY: c5, STAGE_BLOCKED_USERS_SHEET_KEY: closure_6, STAGE_SETTINGS_SHEET_KEY: error, EXPLICIT_END_STAGE_SHEET_KEY: metroImportAll } = MAX_STAGE_TOPIC_LENGTH);
const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export const openStageChannelSettings = function openStageChannelSettings(closure_0) {
  let obj = importDefault(4223);
  obj = { channel: closure_0 };
  obj.openLazy(require(1959) /* asyncRequireImpl */(7688, dependencyMap.paths), closure_5, obj);
};
export function openEndGuildEventConfirmationModal() {

}
export const openStageChannelAudienceNoticeModal = function openStageChannelAudienceNoticeModal(channelId) {
  let obj = importDefault(4223);
  obj = { channelId };
  obj.openLazy(require(1959) /* asyncRequireImpl */(7762, dependencyMap.paths), closure_4, obj);
};
export const openStageBlockedUsersSheet = function openStageBlockedUsersSheet(channel, onAccept) {
  let obj = importDefault(4223);
  obj = { channel, onAccept };
  obj.openLazy(require(1959) /* asyncRequireImpl */(7803, dependencyMap.paths), closure_6, obj);
};
export const openStageSettingsSheet = function openStageSettingsSheet(closure_0, closure_1) {
  let obj = importDefault(4223);
  obj = { channelId: closure_0, onOpenRTCDebugOverlay: closure_1 };
  obj.openLazy(require(1959) /* asyncRequireImpl */(7810, dependencyMap.paths), closure_7, obj);
};
export const openEndStageModal = function openEndStageModal(closure_0) {
  let obj = importDefault(4223);
  obj = { channel: closure_0 };
  obj.openLazy(require(1959) /* asyncRequireImpl */(12534, dependencyMap.paths), closure_8, obj);
};
export const openStageChannel = function openStageChannel(outer1_0) {
  if (outer1_0.isGuildStageVoice()) {
    let obj = require(4467) /* useIsStageVoicePanelEnabled */;
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      let tmpResult = tmp(4465);
      tmpResult.openGuildVoiceModal(outer1_0);
    } else {
      obj = { channel: null };
      obj[0] = outer1_0;
      const obj2 = importDefault(4461);
      tmpResult = tmp(4465);
      obj2.pushLazy(tmp(1959)(10706, tmp2.paths), obj, tmpResult.getVoiceChannelKey(outer1_0.id));
      const tmp4 = tmp(1959)(10706, tmp2.paths);
    }
    tmp2 = dependencyMap;
  }
};
export const showPlatformUserProfile = function showPlatformUserProfile(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.isVoiceContext = true;
  importDefault(8668)(obj);
};
export const shouldShowBlockedUsers = function shouldShowBlockedUsers(id) {
  const stageBlockedUsersCount = require(7805) /* useStageBlockedUsersCount */.getStageBlockedUsersCount(id);
  const obj = require(7805) /* useStageBlockedUsersCount */;
  const obj2 = require(7805) /* useStageBlockedUsersCount */;
  return stageBlockedUsersCount > 0 || require(7805) /* useStageBlockedUsersCount */.getStageIgnoredUsersCount(id) > 0;
};
export const navigateToStage = function navigateToStage(id) {
  if (arg1 !== id.id) {
    setIsOnStartStageScreen(true);
  }
  if (id.isGuildStageVoice()) {
    let obj = require(4467) /* useIsStageVoicePanelEnabled */;
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      let tmp3Result = tmp3(4465);
      tmp3Result.openGuildVoiceModal(id);
    } else {
      obj = { channel: null };
      obj[0] = id;
      const obj2 = importDefault(4461);
      tmp3Result = tmp3(4465);
      obj2.pushLazy(tmp3(1959)(10706, tmp4.paths), obj, tmp3Result.getVoiceChannelKey(id.id));
      const tmp6 = tmp3(1959)(10706, tmp4.paths);
    }
    tmp4 = dependencyMap;
  }
};
export function showChannelChangeConfirmationAlert(channel, arg1) {
  return false;
}