// discord_app/modules/notifications/settings/native/NotificationSettingsMessageNotificationChannelActionSheet.tsx
import NotificationSettingsUtils from "../../../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import notificationSettingsFlagUtils from "../utils/notificationSettingsFlagUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";

require = fn;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const UnreadSetting = fn(4742).UnreadSetting;
let closure_6 = fn(1084).ChannelNotificationSettingsFlags;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/notifications/settings/native/NotificationSettingsMessageNotificationChannelActionSheet.tsx",
);

export default function NotificationSettingsMessageNotificationChannelActionSheet(channel) {
  _require = channel;
  let obj = require("notficationSettingsChannelFlagUtils");
  const channelPresetSettings = obj.useChannelPresetSettings(channel.channel);
  const unread = channelPresetSettings.unread;
  const notification = channelPresetSettings.notification;
  obj = { context: "channel", value: notification, allMessagesSubLabel: null, onChange: null };
  let stringResult;
  if (notification !== UserNotificationSettings.ALL_MESSAGES) {
    if (unread !== UnreadSetting.ALL_MESSAGES) {
      const intl = tmp(1114).intl;
      stringResult = intl.string(tmp(1114).t.eP8yWU);
    }
  }
  obj.allMessagesSubLabel = stringResult;
  obj.onChange = function onChange(message_notifications) {
    const obj = { message_notifications };
    let tmp = message_notifications === UserNotificationSettings.ALL_MESSAGES;
    if (tmp) {
      tmp = unread !== UnreadSetting.ALL_MESSAGES;
    }
    if (tmp) {
      obj.flags = notificationSettingsFlagUtils.withChannelUnreadFlags(
        UserGuildSettingsStore.getChannelIdFlags(channel.channel.guild_id, channel.channel.id),
        constants.UNREADS_ALL_MESSAGES,
      );
    }
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(
      channel.channel.guild_id,
      channel.channel.id,
      obj,
      NotificationLabel.notifications(message_notifications),
    );
  };
  return jsx(unread(10161), { context: "channel", value: notification, allMessagesSubLabel: null, onChange: null });
}
