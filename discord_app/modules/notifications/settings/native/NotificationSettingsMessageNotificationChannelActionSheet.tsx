// === Module 10105: NotificationSettingsMessageNotificationChannelActionSheet ===

// Module 10105 (NotificationSettingsMessageNotificationChannelActionSheet)
import noopAll from "noop" /* 19 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import { UserNotificationSettings } from "ME" /* 676 */;
import { UnreadSetting } from "ReadStateTypes" /* 5044 */;
import { ChannelNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES" /* 685 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
noopAll;
let result = require("obj132").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationChannelActionSheet.tsx");

export default function NotificationSettingsMessageNotificationChannelActionSheet(channel) {
  const _require = channel;
  let obj = _require(10090);
  const channelPresetSettings = obj.useChannelPresetSettings(channel.channel);
  const unread = channelPresetSettings.unread;
  const notification = channelPresetSettings.notification;
  obj = { context: "channel", value: notification, allMessagesSubLabel: null, onChange: null };
  let stringResult;
  if (notification !== UserNotificationSettings.ALL_MESSAGES) {
    if (unread !== UnreadSetting.ALL_MESSAGES) {
      const intl = tmp(1236).intl;
      stringResult = intl.string(tmp(1236).t.eP8yWU);
    }
  }
  obj[2] = stringResult;
  obj[3] = function onChange(message_notifications) {
    const obj = { message_notifications };
    let tmp = message_notifications === UserNotificationSettings.ALL_MESSAGES;
    if (tmp) {
      tmp = unread !== UnreadSetting.ALL_MESSAGES;
    }
    if (tmp) {
      obj.flags = channel(dependencyMap[9]).withChannelUnreadFlags(closure_1_3.getChannelIdFlags(channel.channel.guild_id, channel.channel.id), closure_1_6.UNREADS_ALL_MESSAGES);
      const obj2 = channel(dependencyMap[9]);
    }
    const NotificationLabel = channel(dependencyMap[11]).NotificationLabel;
    const result = unread(dependencyMap[10]).updateChannelOverrideSettings(channel.channel.guild_id, channel.channel.id, obj, NotificationLabel.notifications(message_notifications));
    const obj3 = unread(dependencyMap[10]);
  };
  return jsx(unread(10104), { context: "channel", value: notification, allMessagesSubLabel: null, onChange: null });
};