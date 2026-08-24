// discord_app/modules/notifications/settings/native/NotificationSettingsMessageNotificationChannelActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import closure_3 from "../../../../stores/UserGuildSettingsStore.tsx";
import { UserNotificationSettings } from "../../../../Constants.tsx";
import { UnreadSetting } from "../../../read_states/ReadStateConstants.tsx";
import { ChannelNotificationSettingsFlags as closure_6 } from "../../../user_settings/UserSettingsConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import { useChannelPresetSettings } from "../utils/notficationSettingsChannelFlagUtils.tsx";

const require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationChannelActionSheet.tsx");

export default function NotificationSettingsMessageNotificationChannelActionSheet(channel) {
  const _require = channel;
  let obj = useChannelPresetSettings;
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
  return jsx(unread(10143), { context: "channel", value: notification, allMessagesSubLabel: null, onChange: null });
};