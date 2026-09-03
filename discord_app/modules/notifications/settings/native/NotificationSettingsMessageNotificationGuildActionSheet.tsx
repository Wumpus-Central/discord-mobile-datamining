// === Module 10271: NotificationSettingsMessageNotificationGuildActionSheet ===

// Module 10271 (NotificationSettingsMessageNotificationGuildActionSheet)
import noopAll from "noop" /* 19 */;
import closure_3 from "updateUserGuildSettingsInternal" /* 4702 */;
import { UserNotificationSettings } from "ME" /* 673 */;
import { UnreadSetting } from "ReadStateTypes" /* 4703 */;
import { GuildNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES" /* 682 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationGuildActionSheet.tsx");

export default function NotificationSettingsMessageNotificationGuildActionSheet(guildId) {
  const _require = guildId;
  let obj = _require(10266);
  const guildPresetSettings = obj.useGuildPresetSettings(guildId.guildId);
  const unread = guildPresetSettings.unread;
  const notification = guildPresetSettings.notification;
  obj = { context: "guild", value: notification, allMessagesSubLabel: null, onChange: null };
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
      obj.flags = guildId(closure_1_2[9]).withGuildUnreadFlags(closure_1_3.getGuildFlags(guildId.guildId), closure_1_6.UNREADS_ALL_MESSAGES);
      const obj2 = guildId(closure_1_2[9]);
    }
    const NotificationLabel = guildId(closure_1_2[11]).NotificationLabel;
    const result = unread(closure_1_2[10]).updateGuildNotificationSettings(guildId.guildId, obj, NotificationLabel.notifications(message_notifications));
  };
  return jsx(unread(10272), { context: "guild", value: notification, allMessagesSubLabel: null, onChange: null });
};