// === Module 13948: showVoiceChannelBlockedUserWarning ===

// Module 13948 (showVoiceChannelBlockedUserWarning)
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import AppStateStore from "AppStateStore" /* 1896 */;

require = fn;
const SharedSpacesWarningStore = fn(13943);
({ queueBlockWarning: closure_4, dequeueBlockWarning: hasOwnProperty } = SharedSpacesWarningStore);
const constants = fn(13946).VoiceChannelWarningSurfaces;
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
    obj.openLazy(asyncRequireImpl(13949, dependencyMap.paths), "gdm_blocked_user_action_sheet", obj2);
    const tmp11 = asyncRequireImpl(13949, dependencyMap.paths);
  } else {
    React4();
  }
};