// === Module 10103: NotificationSettingsMessageNotificationGuildActionSheet ===

// Module 10103 (NotificationSettingsMessageNotificationGuildActionSheet)
import noopAll from "noop" /* 19 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import { UserNotificationSettings } from "ME" /* 676 */;
import { UnreadSetting } from "ReadStateTypes" /* 5044 */;
import { GuildNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES" /* 685 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
noopAll;
let result = require("obj132").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationGuildActionSheet.tsx");

export default function NotificationSettingsMessageNotificationGuildActionSheet(guildId) {
  const _require = guildId;
  let obj = _require(10098);
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
    let tmp = message_notifications === UserNotificationSettings.ALL_MESSAGES;
    if (tmp) {
      tmp = unread !== UnreadSetting.ALL_MESSAGES;
    }
    if (tmp) {
      obj.flags = guildId(dependencyMap[9]).withGuildUnreadFlags(closure_1_3.getGuildFlags(guildId.guildId), closure_1_6.UNREADS_ALL_MESSAGES);
      const obj2 = guildId(dependencyMap[9]);
    }
    const NotificationLabel = guildId(dependencyMap[11]).NotificationLabel;
    const result = unread(dependencyMap[10]).updateGuildNotificationSettings(guildId.guildId, obj, NotificationLabel.notifications(message_notifications));
    const obj3 = unread(dependencyMap[10]);
  };
  return jsx(unread(10104), { context: "guild", value: notification, allMessagesSubLabel: null, onChange: null });
};