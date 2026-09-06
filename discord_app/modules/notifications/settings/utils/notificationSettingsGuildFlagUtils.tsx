// discord_app/modules/notifications/settings/utils/notificationSettingsGuildFlagUtils.tsx
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";

require = fn;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const constants = fn(1084).GuildNotificationSettingsFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsGuildFlagUtils.tsx");

export const updateGuildPreset = function updateGuildPreset(guildId, arg1) {
  const guildFlags = UserGuildSettingsStore.getGuildFlags(guildId);
  if (arg1 === notificationSettingsPresetUtils.Presets.ALL_MESSAGES) {
    let obj = { message_notifications: UserNotificationSettings.ALL_MESSAGES, flags: null };
    let tmp2Result = tmp2(10150);
    obj.flags = tmp2Result.withGuildUnreadFlags(guildFlags, constants.UNREADS_ALL_MESSAGES);
    const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(
      guildId,
      obj,
      tmp2(7114).NotificationLabels.PresetAll,
    );
  } else if (arg1 === tmp2(4744).Presets.MENTIONS) {
    obj = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: null };
    tmp2Result = tmp2(10150);
    obj.flags = tmp2Result.withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result1 = obj.updateGuildNotificationSettings(guildId, obj, tmp2(7114).NotificationLabels.PresetMentions);
  } else if (arg1 === tmp2(4744).Presets.NOTHING) {
    const obj1 = { message_notifications: UserNotificationSettings.NO_MESSAGES, flags: null };
    const obj7 = NotificationSettingsModalActionCreatorsDefault;
    obj1.flags = tmp2(10150).withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result2 = obj7.updateGuildNotificationSettings(guildId, obj1, tmp2(7114).NotificationLabels.PresetNothing);
    const tmp2Result1 = tmp2(10150);
  }
};
export const useGuildPresetSettings = function useGuildPresetSettings(guildId) {
  _require = guildId;
  let obj = require("useStateFromStores");
  const items = [UserGuildSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.getGuildUnreadSetting(closure_0));
  const items1 = [UserGuildSettingsStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () =>
    UserGuildSettingsStore.getMessageNotifications(closure_0),
  );
  obj = { unread: stateFromStores, notification: stateFromStores1, preset: null };
  const obj2 = require("useStateFromStores");
  obj.preset = require("notificationSettingsPresetUtils").presetFromSettings(stateFromStores, stateFromStores1);
  return obj;
};
