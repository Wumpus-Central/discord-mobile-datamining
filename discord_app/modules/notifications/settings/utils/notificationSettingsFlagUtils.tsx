// === Module 10150: notificationSettingsFlagUtils ===

// Module 10150 (notificationSettingsFlagUtils)
import FlagUtilsAll from "FlagUtils" /* 1384 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import size from "module_2" /* 2 */;

({ GuildNotificationSettingsFlags: c2, ChannelNotificationSettingsFlags: c3 } = UserSettingsConstants);
const result = size.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsFlagUtils.tsx");

export const resetGuildUnreadFlags = function resetGuildUnreadFlags(setting) {
  return FlagUtilsAll.removeFlags(setting, constants.UNREADS_ALL_MESSAGES, constants.UNREADS_ONLY_MENTIONS);
};
export const withGuildUnreadFlags = function withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) {
  const obj = FlagUtilsAll;
  return obj.addFlag(FlagUtilsAll.removeFlags(guildFlags, constants.UNREADS_ALL_MESSAGES, constants.UNREADS_ONLY_MENTIONS), UNREADS_ONLY_MENTIONS);
};
export const resetChannelUnreadFlags = function resetChannelUnreadFlags(channelIdFlags) {
  return FlagUtilsAll.removeFlags(channelIdFlags, constants2.UNREADS_ALL_MESSAGES, constants2.UNREADS_ONLY_MENTIONS);
};
export const withChannelUnreadFlags = function withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) {
  const obj = FlagUtilsAll;
  return obj.addFlag(FlagUtilsAll.removeFlags(channelIdFlags, constants2.UNREADS_ALL_MESSAGES, constants2.UNREADS_ONLY_MENTIONS), UNREADS_ONLY_MENTIONS);
};