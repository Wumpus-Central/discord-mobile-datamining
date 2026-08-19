// === Module 10098: updateGuildPreset ===

// Module 10098 (updateGuildPreset)
import Presets from "Presets" /* 5046 */;
import UserNotificationSettings2 from "UserNotificationSettings" /* 6795 */;
import _modDef6798 from "module_6798" /* 6798 */;
import resetGuildUnreadFlags from "resetGuildUnreadFlags" /* 10091 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import { UserNotificationSettings } from "ME" /* 676 */;
import { GuildNotificationSettingsFlags as closure_5 } from "MAX_FAVORITES" /* 685 */;

require = fn;
let result = require("obj132").fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsGuildFlagUtils.tsx");

export const updateGuildPreset = function updateGuildPreset(guildId, arg1) {
  guildFlags = guildFlags.getGuildFlags(guildId);
  if (arg1 === Presets.Presets.ALL_MESSAGES) {
    let obj = { message_notifications: null, flags: null };
    obj[0] = UserNotificationSettings.ALL_MESSAGES;
    let tmp2Result = resetGuildUnreadFlags;
    obj[1] = tmp2Result.withGuildUnreadFlags(guildFlags, constants.UNREADS_ALL_MESSAGES);
    const result = _modDef6798.updateGuildNotificationSettings(guildId, obj, UserNotificationSettings2.NotificationLabels.PresetAll);
  } else if (arg1 === Presets.Presets.MENTIONS) {
    obj = { message_notifications: null, flags: null };
    obj[0] = UserNotificationSettings.ONLY_MENTIONS;
    tmp2Result = resetGuildUnreadFlags;
    obj[1] = tmp2Result.withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result1 = obj.updateGuildNotificationSettings(guildId, obj, UserNotificationSettings2.NotificationLabels.PresetMentions);
  } else if (arg1 === Presets.Presets.NOTHING) {
    obj1 = { message_notifications: null, flags: null };
    obj1[0] = UserNotificationSettings.NO_MESSAGES;
    const obj7 = _modDef6798;
    obj1[1] = resetGuildUnreadFlags.withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result2 = obj7.updateGuildNotificationSettings(guildId, obj1, UserNotificationSettings2.NotificationLabels.PresetNothing);
    const tmp2Result1 = resetGuildUnreadFlags;
  }
};
export const useGuildPresetSettings = function useGuildPresetSettings(guildId) {
  const _require = guildId;
  let obj = _require(647);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_3.getGuildUnreadSetting(closure_0));
  const items1 = [closure_3];
  const stateFromStores1 = _require(647).useStateFromStores(items1, () => closure_1_3.getMessageNotifications(closure_0));
  obj = { unread: stateFromStores, notification: stateFromStores1, preset: null };
  const obj2 = _require(647);
  obj[2] = _require(5046).presetFromSettings(stateFromStores, stateFromStores1);
  return obj;
};