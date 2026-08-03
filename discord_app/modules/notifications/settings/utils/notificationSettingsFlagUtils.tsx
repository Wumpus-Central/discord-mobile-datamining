import MAX_FAVORITES from "MAX_FAVORITES";

let c3;
let obj1;
({ GuildNotificationSettingsFlags: obj1, ChannelNotificationSettingsFlags: c3 } = MAX_FAVORITES);
const result = require("set").fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsFlagUtils.tsx");

export const resetGuildUnreadFlags = function resetGuildUnreadFlags(setting) {
  return importAll(1384).removeFlags(setting, constants.UNREADS_ALL_MESSAGES, constants.UNREADS_ONLY_MENTIONS);
};
export const withGuildUnreadFlags = function withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) {
  const obj = importAll(1384);
  return obj.addFlag(importAll(1384).removeFlags(guildFlags, constants.UNREADS_ALL_MESSAGES, constants.UNREADS_ONLY_MENTIONS), UNREADS_ONLY_MENTIONS);
};
export const resetChannelUnreadFlags = function resetChannelUnreadFlags(channelIdFlags) {
  return importAll(1384).removeFlags(channelIdFlags, constants2.UNREADS_ALL_MESSAGES, constants2.UNREADS_ONLY_MENTIONS);
};
export const withChannelUnreadFlags = function withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) {
  const obj = importAll(1384);
  return obj.addFlag(importAll(1384).removeFlags(channelIdFlags, constants2.UNREADS_ALL_MESSAGES, constants2.UNREADS_ONLY_MENTIONS), UNREADS_ONLY_MENTIONS);
};