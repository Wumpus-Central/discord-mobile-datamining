// === Module 11557: updateChannelUnreadSettings ===

// Module 11557 (updateChannelUnreadSettings)
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7221 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7226 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10280 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4820 */;

require = fn;
const AnalyticsObjects = fn(1074).AnalyticsObjects;
const UnreadSetting = fn(4821).UnreadSetting;
const constants = fn(1084).ChannelNotificationSettingsFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx");

export default function updateChannelUnreadSettings(guild_id, id, UNREADS_ONLY_MENTIONS) {
  const obj2 = { flags: null };
  const obj = NotificationSettingsModalActionCreatorsDefault;
  obj2.flags = notificationSettingsFlagUtils.withChannelUnreadFlags(UserGuildSettingsStore.getChannelIdFlags(guild_id, id), UNREADS_ONLY_MENTIONS);
  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  if (UNREADS_ONLY_MENTIONS === constants.UNREADS_ALL_MESSAGES) {
    let ONLY_MENTIONS = UnreadSetting.ALL_MESSAGES;
  } else {
    ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
  }
  const result = obj.updateChannelOverrideSettings(guild_id, id, obj2, NotificationLabel.unreads(ONLY_MENTIONS), { object: AnalyticsObjects.NOTIFICATION_SETTING_UNREAD_NOTICE });
  const obj4 = { object: AnalyticsObjects.NOTIFICATION_SETTING_UNREAD_NOTICE };
};