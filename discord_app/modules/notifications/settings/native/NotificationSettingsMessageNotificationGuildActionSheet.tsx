// === Module 10142: NotificationSettingsMessageNotificationGuildActionSheet ===

// Module 10142 (NotificationSettingsMessageNotificationGuildActionSheet)
import noopAll from "noop" /* 19 */;
import closure_3 from "updateUserGuildSettingsInternal" /* 5048 */;
import { UserNotificationSettings } from "ME" /* 676 */;
import { UnreadSetting } from "ReadStateTypes" /* 5049 */;
import { GuildNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES" /* 685 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationGuildActionSheet.tsx");

export default function NotificationSettingsMessageNotificationGuildActionSheet(guildId) {
  const _require = guildId;
  let obj = _require(10137);
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
  return jsx(unread(10143), { context: "guild", value: notification, allMessagesSubLabel: null, onChange: null });
};