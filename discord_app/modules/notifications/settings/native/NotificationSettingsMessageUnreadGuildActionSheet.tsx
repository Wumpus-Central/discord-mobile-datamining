// === Module 10109: NotificationSettingsMessageUnreadGuildActionSheet ===

// Module 10109 (NotificationSettingsMessageUnreadGuildActionSheet)
import noopAll from "noop" /* 19 */;
import _modDef6798 from "module_6798" /* 6798 */;
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet" /* 10110 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import { UserNotificationSettings } from "ME" /* 676 */;
import { UnreadSetting } from "ReadStateTypes" /* 5044 */;
import { GuildNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES" /* 685 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
noopAll;
let result = require("obj132").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx");

export default function NotificationSettingsMessageUnreadGuildActionSheet(guildId) {
  const _require = guildId;
  let obj = _require(10098);
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
    onChange(toggleExpandedHistory) {
      const guildFlags = closure_1_3.getGuildFlags(guildId.guildId);
      let obj = _modDef6798;
      if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
        let UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ONLY_MENTIONS;
      }
      obj = { flags: guildId(dependencyMap[10]).withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
      const NotificationLabel = guildId(dependencyMap[11]).NotificationLabel;
      const result = obj.updateGuildNotificationSettings(guildId.guildId, obj, NotificationLabel.unreads(toggleExpandedHistory));
      const obj2 = guildId(dependencyMap[10]);
    }
  };
  return jsx(NotificationSettingsMessageUnreadActionSheetDefault, {
    disabledMentionOnlyWithReason: stringResult,
    value: unread,
    onChange(toggleExpandedHistory) {
      const guildFlags = closure_1_3.getGuildFlags(guildId.guildId);
      let obj = _modDef6798;
      if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
        let UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ONLY_MENTIONS;
      }
      obj = { flags: guildId(dependencyMap[10]).withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
      const NotificationLabel = guildId(dependencyMap[11]).NotificationLabel;
      const result = obj.updateGuildNotificationSettings(guildId.guildId, obj, NotificationLabel.unreads(toggleExpandedHistory));
      const obj2 = guildId(dependencyMap[10]);
    }
  });
};