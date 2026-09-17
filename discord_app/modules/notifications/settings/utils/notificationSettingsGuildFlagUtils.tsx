// === Module 10301: notificationSettingsGuildFlagUtils ===

// Module 10301 (notificationSettingsGuildFlagUtils)
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 4824 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7228 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7233 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10296 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4821 */;

const require = globalThis.__r;

require = fn;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const constants = fn(1084).GuildNotificationSettingsFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsGuildFlagUtils.tsx");

export const updateGuildPreset = function updateGuildPreset(guildId, arg1) {
  const guildFlags = UserGuildSettingsStore.getGuildFlags(guildId);
  if (arg1 === notificationSettingsPresetUtils.Presets.ALL_MESSAGES) {
    const obj2 = { message_notifications: UserNotificationSettings.ALL_MESSAGES, flags: null };
    const obj4 = NotificationSettingsModalActionCreatorsDefault;
    obj2.flags = notificationSettingsFlagUtils.withGuildUnreadFlags(guildFlags, constants.UNREADS_ALL_MESSAGES);
    const result = obj4.updateGuildNotificationSettings(guildId, obj2, NotificationSettingsUtils.NotificationLabels.PresetAll);
    const tmp2Result = notificationSettingsFlagUtils;
  } else if (arg1 === notificationSettingsPresetUtils.Presets.MENTIONS) {
    const obj3 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: null };
    const obj = NotificationSettingsModalActionCreatorsDefault;
    obj3.flags = notificationSettingsFlagUtils.withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result1 = obj.updateGuildNotificationSettings(guildId, obj3, NotificationSettingsUtils.NotificationLabels.PresetMentions);
    const tmp2Result3 = notificationSettingsFlagUtils;
  } else if (arg1 === notificationSettingsPresetUtils.Presets.NOTHING) {
    const obj5 = { message_notifications: UserNotificationSettings.NO_MESSAGES, flags: null };
    const obj7 = NotificationSettingsModalActionCreatorsDefault;
    obj5.flags = notificationSettingsFlagUtils.withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result2 = obj7.updateGuildNotificationSettings(guildId, obj5, NotificationSettingsUtils.NotificationLabels.PresetNothing);
    const tmp2Result4 = notificationSettingsFlagUtils;
  }
};
export const useGuildPresetSettings = function useGuildPresetSettings(guildId) {
  _require = guildId;
  const items = [UserGuildSettingsStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => UserGuildSettingsStore.getGuildUnreadSetting(closure_0));
  const obj = require("useStateFromStores");
  const items1 = [UserGuildSettingsStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => UserGuildSettingsStore.getMessageNotifications(closure_0));
  const obj3 = { unread: stateFromStores, notification: stateFromStores1, preset: null };
  const obj2 = require("useStateFromStores");
  obj3.preset = require("notificationSettingsPresetUtils").presetFromSettings(stateFromStores, stateFromStores1);
  return obj3;
};