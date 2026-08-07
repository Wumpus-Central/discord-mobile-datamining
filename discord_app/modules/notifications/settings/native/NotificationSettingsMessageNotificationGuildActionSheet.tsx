// discord_app/modules/notifications/settings/native/NotificationSettingsMessageNotificationGuildActionSheet.tsx
import "noop";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { UserNotificationSettings } from "ME";
import { UnreadSetting } from "ReadStateTypes";
import { GuildNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES";
import { jsx } from "jsxProd";
import { updateGuildPreset } from "../utils/notificationSettingsGuildFlagUtils.tsx";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationGuildActionSheet.tsx");

export default function NotificationSettingsMessageNotificationGuildActionSheet(guildId) {
  const _require = guildId;
  let obj = _updateGuildPreset;
  const guildPresetSettings = obj.useGuildPresetSettings(guildId.guildId);
  const unread = guildPresetSettings.unread;
  const notification = guildPresetSettings.notification;
  obj = { context: "guild", value: notification, allMessagesSubLabel: null, onChange: null };
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
    let tmp = message_notifications === outer1_4.ALL_MESSAGES;
    if (tmp) {
      tmp = unread !== outer1_5.ALL_MESSAGES;
    }
    if (tmp) {
      obj.flags = guildId(outer1_2[9]).withGuildUnreadFlags(outer1_3.getGuildFlags(guildId.guildId), outer1_6.UNREADS_ALL_MESSAGES);
      const obj2 = guildId(outer1_2[9]);
    }
    const NotificationLabel = guildId(outer1_2[11]).NotificationLabel;
    const result = unread(outer1_2[10]).updateGuildNotificationSettings(guildId.guildId, obj, NotificationLabel.notifications(message_notifications));
  };
  return jsx(unread(9771), { context: "guild", value: notification, allMessagesSubLabel: null, onChange: null });
};