// === Module 10148: NotificationSettingsMessageUnreadGuildActionSheet ===

// Module 10148 (NotificationSettingsMessageUnreadGuildActionSheet)
import noopAll from "noop" /* 19 */;
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet" /* 10149 */;
import closure_3 from "updateUserGuildSettingsInternal" /* 5048 */;
import { UserNotificationSettings } from "ME" /* 676 */;
import { UnreadSetting } from "ReadStateTypes" /* 5049 */;
import { GuildNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES" /* 685 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx");

export default function NotificationSettingsMessageUnreadGuildActionSheet(guildId) {
  const _require = guildId;
  let obj = _require(10137);
  const guildPresetSettings = obj.useGuildPresetSettings(guildId.guildId);
  ({ unread, notification } = guildPresetSettings);
  let stringResult;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1236).intl;
    stringResult = intl.string(tmp(1236).t.eP8yWU);
  }
  obj = {
    disabledMentionOnlyWithReason: stringResult,
    value: unread,
    onChange(ONLY_MENTIONS) {
      const guildFlags = closure_1_3.getGuildFlags(guildId.guildId);
      let obj = closure_1_1(closure_1_2[9]);
      if (ONLY_MENTIONS === closure_1_5.ALL_MESSAGES) {
        let UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ONLY_MENTIONS;
      }
      obj = { flags: guildId(closure_1_2[10]).withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
      const NotificationLabel = guildId(closure_1_2[11]).NotificationLabel;
      const result = obj.updateGuildNotificationSettings(guildId.guildId, obj, NotificationLabel.unreads(ONLY_MENTIONS));
    }
  };
  return jsx(NotificationSettingsMessageUnreadActionSheetDefault, {
    disabledMentionOnlyWithReason: stringResult,
    value: unread,
    onChange(ONLY_MENTIONS) {
      const guildFlags = closure_1_3.getGuildFlags(guildId.guildId);
      let obj = closure_1_1(closure_1_2[9]);
      if (ONLY_MENTIONS === closure_1_5.ALL_MESSAGES) {
        let UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ONLY_MENTIONS;
      }
      obj = { flags: guildId(closure_1_2[10]).withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
      const NotificationLabel = guildId(closure_1_2[11]).NotificationLabel;
      const result = obj.updateGuildNotificationSettings(guildId.guildId, obj, NotificationLabel.unreads(ONLY_MENTIONS));
    }
  });
};