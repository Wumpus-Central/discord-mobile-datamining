// === Module 11874: notficationSettingsChannelFlagUtils ===

// Module 11874 (notficationSettingsChannelFlagUtils)
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7471 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7476 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10668 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6167 */;

require = fn;
const UnreadSetting = fn(6168).UnreadSetting;
const constants = fn(1081).ChannelNotificationSettingsFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx");

export function updateChannelUnreadSetting(guild_id, id, ALL_MESSAGES) {
  const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guild_id, id);
  const obj2 = { guildId: guild_id, channelId: id, settings: null, label: null };
  const obj = NotificationSettingsModalActionCreatorsDefault;
  if (ALL_MESSAGES === UnreadSetting.ALL_MESSAGES) {
    let UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
  } else {
    UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
  }
  obj2.settings = { flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) };
  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  obj2.label = NotificationLabel.unreads(ALL_MESSAGES);
  const result = obj.updateChannelOverrideSettings(obj2);
  const obj4 = { flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) };
}