// === Module 10201: updateGuildPreset ===

// Module 10201 (updateGuildPreset)
import Presets from "Presets" /* 4672 */;
import _modDef5455 from "module_5455" /* 5455 */;
import closure_3 from "updateUserGuildSettingsInternal" /* 4669 */;
import { UserNotificationSettings } from "ME" /* 676 */;
import { GuildNotificationSettingsFlags as closure_5 } from "MAX_FAVORITES" /* 685 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsGuildFlagUtils.tsx");

export const updateGuildPreset = function updateGuildPreset(guildId, arg1) {
  guildFlags = guildFlags.getGuildFlags(guildId);
  if (arg1 === Presets.Presets.ALL_MESSAGES) {
    let obj = { message_notifications: null, flags: null };
    obj[0] = UserNotificationSettings.ALL_MESSAGES;
    let tmp2Result = tmp2(10194);
    obj[1] = tmp2Result.withGuildUnreadFlags(guildFlags, constants.UNREADS_ALL_MESSAGES);
    const result = _modDef5455.updateGuildNotificationSettings(guildId, obj, tmp2(5450).NotificationLabels.PresetAll);
    const obj4 = _modDef5455;
  } else if (arg1 === tmp2(4672).Presets.MENTIONS) {
    obj = _modDef5455;
    obj = { message_notifications: null, flags: null };
    obj[0] = UserNotificationSettings.ONLY_MENTIONS;
    tmp2Result = tmp2(10194);
    obj[1] = tmp2Result.withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result1 = obj.updateGuildNotificationSettings(guildId, obj, tmp2(5450).NotificationLabels.PresetMentions);
  } else if (arg1 === tmp2(4672).Presets.NOTHING) {
    obj1 = { message_notifications: null, flags: null };
    obj1[0] = UserNotificationSettings.NO_MESSAGES;
    const obj7 = _modDef5455;
    obj1[1] = tmp2(10194).withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result2 = obj7.updateGuildNotificationSettings(guildId, obj1, tmp2(5450).NotificationLabels.PresetNothing);
    const tmp2Result1 = tmp2(10194);
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
  obj[2] = _require(4672).presetFromSettings(stateFromStores, stateFromStores1);
  return obj;
};