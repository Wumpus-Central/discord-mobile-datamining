// === Module 11050: notificationSettingsFlagUtils ===

// Module 11050 (notificationSettingsFlagUtils)
import FlagUtilsAll from "FlagUtils" /* 1397 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import size from "module_2" /* 2 */;

({ GuildNotificationSettingsFlags: c2, ChannelNotificationSettingsFlags: c3 } = UserSettingsConstants);
const result = size.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsFlagUtils.tsx");

export function resetGuildUnreadFlags(setting) {
  return FlagUtilsAll.removeFlags(setting, constants.UNREADS_ALL_MESSAGES, constants.UNREADS_ONLY_MENTIONS);
}
export function withGuildUnreadFlags(guildFlags, UNREADS_ALL_MESSAGES) {
  const obj = FlagUtilsAll;
  return obj.addFlag(FlagUtilsAll.removeFlags(guildFlags, constants.UNREADS_ALL_MESSAGES, constants.UNREADS_ONLY_MENTIONS), UNREADS_ALL_MESSAGES);
}
export function resetChannelUnreadFlags(channelIdFlags) {
  return FlagUtilsAll.removeFlags(channelIdFlags, constants2.UNREADS_ALL_MESSAGES, constants2.UNREADS_ONLY_MENTIONS);
}
export function withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) {
  const obj = FlagUtilsAll;
  return obj.addFlag(FlagUtilsAll.removeFlags(channelIdFlags, constants2.UNREADS_ALL_MESSAGES, constants2.UNREADS_ONLY_MENTIONS), UNREADS_ONLY_MENTIONS);
}