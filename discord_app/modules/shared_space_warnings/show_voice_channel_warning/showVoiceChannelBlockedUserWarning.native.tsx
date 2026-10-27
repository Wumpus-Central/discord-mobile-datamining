// === Module 15083: showVoiceChannelBlockedUserWarning ===

// Module 15083 (showVoiceChannelBlockedUserWarning)
import ConstantsIOS from "ConstantsIOS" /* 1104 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1272 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import AppStateStore from "AppStateStore" /* 1998 */;

require = fn;
const SharedSpacesWarningStore = fn(15082);
({ queueBlockWarning: closure_4, dequeueBlockWarning: hasOwnProperty } = SharedSpacesWarningStore);
const constants = fn(15084).VoiceChannelWarningSurfaces;
const size = fn(2);
const result = size.fileFinishedImporting("modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx");

export const showVoiceChannelBlockedUserWarning = function showVoiceChannelBlockedUserWarning(channelId, items1) {
  const state = AppStateStore.getState();
  if (state === ConstantsIOS.AppStates.ACTIVE) {
    hasOwnProperty();
    const obj2 = { channelId, blockedUserId: items1, impressionName: null, impressionProperties: null };
    const obj = ActionSheetActionCreatorsDefault;
    obj2.impressionName = discord_common_AnalyticsUtils.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING;
    const obj3 = { channel_id: channelId, blocked_user_ids: null, warning_surface: null };
    const items = [items1];
    obj3.blocked_user_ids = items;
    obj3.warning_surface = constants.POST_JOIN_SHEET;
    obj2.impressionProperties = obj3;
    obj.openLazy(asyncRequireImpl(15085, dependencyMap.paths), "gdm_blocked_user_action_sheet", obj2);
    const tmp11 = asyncRequireImpl(15085, dependencyMap.paths);
  } else {
    React4();
  }
};