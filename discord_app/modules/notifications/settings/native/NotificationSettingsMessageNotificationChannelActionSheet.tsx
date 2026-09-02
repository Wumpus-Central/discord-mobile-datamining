// === Module 10269: NotificationSettingsMessageNotificationChannelActionSheet ===

// Module 10269 (NotificationSettingsMessageNotificationChannelActionSheet)
import noopAll from "noop" /* 19 */;
import closure_3 from "updateUserGuildSettingsInternal" /* 4701 */;
import { UserNotificationSettings } from "ME" /* 673 */;
import { UnreadSetting } from "ReadStateTypes" /* 4702 */;
import { ChannelNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES" /* 682 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationChannelActionSheet.tsx");

export default function NotificationSettingsMessageNotificationChannelActionSheet(channel) {
  const _require = channel;
  let obj = _require(10254);
  const channelPresetSettings = obj.useChannelPresetSettings(channel.channel);
  const unread = channelPresetSettings.unread;
  const notification = channelPresetSettings.notification;
  obj = { context: "channel", value: notification, allMessagesSubLabel: null, onChange: null };
  let stringResult;
  if (notification !== UserNotificationSettings.ALL_MESSAGES) {
    if (unread !== UnreadSetting.ALL_MESSAGES) {
      const intl = tmp(1233).intl;
      stringResult = intl.string(tmp(1233).t.eP8yWU);
    }
  }
  obj[2] = stringResult;
  obj[3] = function onChange(message_notifications) {
    const obj = { message_notifications };
    let tmp = message_notifications === closure_1_4.ALL_MESSAGES;
    if (tmp) {
      tmp = unread !== closure_1_5.ALL_MESSAGES;
    }
    if (tmp) {
      obj.flags = channel(closure_1_2[9]).withChannelUnreadFlags(closure_1_3.getChannelIdFlags(channel.channel.guild_id, channel.channel.id), closure_1_6.UNREADS_ALL_MESSAGES);
      const obj2 = channel(closure_1_2[9]);
    }
    const NotificationLabel = channel(closure_1_2[11]).NotificationLabel;
    const result = unread(closure_1_2[10]).updateChannelOverrideSettings(channel.channel.guild_id, channel.channel.id, obj, NotificationLabel.notifications(message_notifications));
  };
  return jsx(unread(10268), { context: "channel", value: notification, allMessagesSubLabel: null, onChange: null });
};