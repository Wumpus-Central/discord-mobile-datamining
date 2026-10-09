// === Module 10442: updateChannelUnreadSettings ===

// Module 10442 (updateChannelUnreadSettings)
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6800 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6805 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10414 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5973 */;

require = fn;
const AnalyticsObjects = fn(1085).AnalyticsObjects;
const UnreadSetting = fn(5974).UnreadSetting;
const constants = fn(1095).ChannelNotificationSettingsFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx");

export default function updateChannelUnreadSettings(guildId, channelId, UNREADS_ONLY_MENTIONS) {
  const obj2 = { guildId, channelId, settings: null, label: null, location: null };
  const obj3 = { flags: null };
  const obj = NotificationSettingsModalActionCreatorsDefault;
  obj3.flags = notificationSettingsFlagUtils.withChannelUnreadFlags(UserGuildSettingsStore.getChannelIdFlags(guildId, channelId), UNREADS_ONLY_MENTIONS);
  obj2.settings = obj3;
  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  if (UNREADS_ONLY_MENTIONS === constants.UNREADS_ALL_MESSAGES) {
    let ONLY_MENTIONS = UnreadSetting.ALL_MESSAGES;
  } else {
    ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
  }
  obj2.label = NotificationLabel.unreads(ONLY_MENTIONS);
  obj2.location = { object: AnalyticsObjects.NOTIFICATION_SETTING_UNREAD_NOTICE };
  const result = obj.updateChannelOverrideSettings(obj2);
  const obj5 = { object: AnalyticsObjects.NOTIFICATION_SETTING_UNREAD_NOTICE };
};