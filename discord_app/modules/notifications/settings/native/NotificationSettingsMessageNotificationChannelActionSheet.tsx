// === Module 10402: NotificationSettingsMessageNotificationChannelActionSheet ===

// Module 10402 (NotificationSettingsMessageNotificationChannelActionSheet)
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7310 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7315 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10390 */;
import noop from "module_19" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4903 */;

const require = globalThis.__r;

require = fn;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const UnreadSetting = fn(4904).UnreadSetting;
let closure_6 = fn(1084).ChannelNotificationSettingsFlags;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationChannelActionSheet.tsx");

export default function NotificationSettingsMessageNotificationChannelActionSheet(channel) {
  _require = channel;
  const channelPresetSettings = require("notficationSettingsChannelFlagUtils").useChannelPresetSettings(channel.channel);
  const unread = channelPresetSettings.unread;
  const notification = channelPresetSettings.notification;
  let obj2 = { context: "channel", value: notification, allMessagesSubLabel: null, onChange: null };
  let stringResult;
  let obj = require("notficationSettingsChannelFlagUtils");
  if (notification !== UserNotificationSettings.ALL_MESSAGES) {
    if (unread !== UnreadSetting.ALL_MESSAGES) {
      const intl = tmp(1115).intl;
      stringResult = intl.string(tmp(1115).t.eP8yWU);
    }
  }
  obj2.allMessagesSubLabel = stringResult;
  obj2.onChange = function onChange(message_notifications) {
    const obj = { message_notifications };
    let tmp = message_notifications === UserNotificationSettings.ALL_MESSAGES;
    if (tmp) {
      tmp = unread !== UnreadSetting.ALL_MESSAGES;
    }
    if (tmp) {
      obj.flags = notificationSettingsFlagUtils.withChannelUnreadFlags(UserGuildSettingsStore.getChannelIdFlags(channel.channel.guild_id, channel.channel.id), constants.UNREADS_ALL_MESSAGES);
    }
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(channel.channel.guild_id, channel.channel.id, obj, NotificationLabel.notifications(message_notifications));
  };
  return jsx(unread(10401), { context: "channel", value: notification, allMessagesSubLabel: null, onChange: null });
};