// discord_app/modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx
import "noop";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { UserNotificationSettings } from "ME";
import { UnreadSetting } from "ReadStateTypes";
import { GuildNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx");

export default function NotificationSettingsMessageUnreadGuildActionSheet(guildId) {
  let notification;
  let unread;
  const _require = guildId;
  let obj = _require(10332);
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
      const guildFlags = outer1_3.getGuildFlags(guildId.guildId);
      let obj = outer1_1(outer1_2[9]);
      if (ONLY_MENTIONS === outer1_5.ALL_MESSAGES) {
        let UNREADS_ONLY_MENTIONS = outer1_6.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = outer1_6.UNREADS_ONLY_MENTIONS;
      }
      obj = { flags: guildId(outer1_2[10]).withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
      const NotificationLabel = guildId(outer1_2[11]).NotificationLabel;
      const result = obj.updateGuildNotificationSettings(guildId.guildId, obj, NotificationLabel.unreads(ONLY_MENTIONS));
    }
  };
  return jsx(importDefault(10344), {
    disabledMentionOnlyWithReason: stringResult,
    value: unread,
    onChange(ONLY_MENTIONS) {
      const guildFlags = outer1_3.getGuildFlags(guildId.guildId);
      let obj = outer1_1(outer1_2[9]);
      if (ONLY_MENTIONS === outer1_5.ALL_MESSAGES) {
        let UNREADS_ONLY_MENTIONS = outer1_6.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = outer1_6.UNREADS_ONLY_MENTIONS;
      }
      obj = { flags: guildId(outer1_2[10]).withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
      const NotificationLabel = guildId(outer1_2[11]).NotificationLabel;
      const result = obj.updateGuildNotificationSettings(guildId.guildId, obj, NotificationLabel.unreads(ONLY_MENTIONS));
    }
  });
};