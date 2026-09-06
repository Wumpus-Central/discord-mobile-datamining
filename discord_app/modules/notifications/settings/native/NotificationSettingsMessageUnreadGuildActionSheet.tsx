// === Module 10166: NotificationSettingsMessageUnreadGuildActionSheet ===

// Module 10166 (NotificationSettingsMessageUnreadGuildActionSheet)
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7114 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7119 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10150 */;
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet" /* 10167 */;
import noop from "module_19" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;

require = fn;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const UnreadSetting = fn(4742).UnreadSetting;
let closure_6 = fn(1084).GuildNotificationSettingsFlags;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx");

export default function NotificationSettingsMessageUnreadGuildActionSheet(guildId) {
  _require = guildId;
  let obj = require("notificationSettingsGuildFlagUtils");
  const guildPresetSettings = obj.useGuildPresetSettings(guildId.guildId);
  ({ unread, notification } = guildPresetSettings);
  let stringResult;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1114).intl;
    stringResult = intl.string(tmp(1114).t.eP8yWU);
  }
  obj = {
    disabledMentionOnlyWithReason: stringResult,
    value: unread,
    onChange(toggleExpandedHistory) {
      const guildFlags = UserGuildSettingsStore.getGuildFlags(guildId.guildId);
      let obj = NotificationSettingsModalActionCreatorsDefault;
      if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
        let UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
      }
      obj = { flags: notificationSettingsFlagUtils.withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = obj.updateGuildNotificationSettings(guildId.guildId, obj, NotificationLabel.unreads(toggleExpandedHistory));
    }
  };
  return jsx(NotificationSettingsMessageUnreadActionSheetDefault, {
    disabledMentionOnlyWithReason: stringResult,
    value: unread,
    onChange(toggleExpandedHistory) {
      const guildFlags = UserGuildSettingsStore.getGuildFlags(guildId.guildId);
      let obj = NotificationSettingsModalActionCreatorsDefault;
      if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
        let UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
      }
      obj = { flags: notificationSettingsFlagUtils.withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = obj.updateGuildNotificationSettings(guildId.guildId, obj, NotificationLabel.unreads(toggleExpandedHistory));
    }
  });
};