// === Module 9852: notificationSettingsFlagUtils ===

// Module 9852 (notificationSettingsFlagUtils)
import FlagUtilsAll from "FlagUtils" /* 1390 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ GuildNotificationSettingsFlags: c2, ChannelNotificationSettingsFlags: c3 } = UserSettingsConstants);
const result = size.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsFlagUtils.tsx");

export const resetGuildUnreadFlags = function resetGuildUnreadFlags(setting) {
  const obj = FlagUtilsAll;
  return obj.removeFlags(setting, constants.UNREADS_ALL_MESSAGES, constants.UNREADS_ONLY_MENTIONS);
};
export const withGuildUnreadFlags = function withGuildUnreadFlags(guildFlags, UNREADS_ALL_MESSAGES) {
  const addFlag = FlagUtilsAll.addFlag;
  FlagUtilsAll;
  const obj = FlagUtilsAll;
  return addFlag(obj.removeFlags(guildFlags, constants.UNREADS_ALL_MESSAGES, constants.UNREADS_ONLY_MENTIONS), UNREADS_ALL_MESSAGES);
};
export const resetChannelUnreadFlags = function resetChannelUnreadFlags(channelIdFlags) {
  const obj = FlagUtilsAll;
  return obj.removeFlags(channelIdFlags, constants2.UNREADS_ALL_MESSAGES, constants2.UNREADS_ONLY_MENTIONS);
};
export const withChannelUnreadFlags = function withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) {
  const addFlag = FlagUtilsAll.addFlag;
  FlagUtilsAll;
  const obj = FlagUtilsAll;
  return addFlag(obj.removeFlags(channelIdFlags, constants2.UNREADS_ALL_MESSAGES, constants2.UNREADS_ONLY_MENTIONS), UNREADS_ONLY_MENTIONS);
};