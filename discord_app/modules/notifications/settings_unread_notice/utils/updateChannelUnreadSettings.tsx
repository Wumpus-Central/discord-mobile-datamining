// === Module 11491: updateChannelUnreadSettings ===

// Module 11491 (updateChannelUnreadSettings)
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7166 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7171 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10220 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4786 */;

require = fn;
const AnalyticsObjects = fn(1074).AnalyticsObjects;
const UnreadSetting = fn(4787).UnreadSetting;
const constants = fn(1084).ChannelNotificationSettingsFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx");

export default function updateChannelUnreadSettings(guild_id, id, UNREADS_ONLY_MENTIONS) {
  let obj = { flags: notificationSettingsFlagUtils.withChannelUnreadFlags(UserGuildSettingsStore.getChannelIdFlags(guild_id, id), UNREADS_ONLY_MENTIONS) };
  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  if (UNREADS_ONLY_MENTIONS === constants.UNREADS_ALL_MESSAGES) {
    let ONLY_MENTIONS = UnreadSetting.ALL_MESSAGES;
  } else {
    ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
  }
  obj = { object: AnalyticsObjects.NOTIFICATION_SETTING_UNREAD_NOTICE };
  const result = obj.updateChannelOverrideSettings(guild_id, id, obj, NotificationLabel.unreads(ONLY_MENTIONS), obj);
};