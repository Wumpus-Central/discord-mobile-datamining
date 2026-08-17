// discord_app/modules/notifications/settings/utils/notificationSettingsGuildFlagUtils.tsx
import Presets from "Presets" /* 5046 */;
import _modDef6798 from "module_6798" /* 6798 */;
import closure_3 from "updateUserGuildSettingsInternal" /* 5043 */;
import { UserNotificationSettings } from "ME" /* 676 */;
import { GuildNotificationSettingsFlags as closure_5 } from "MAX_FAVORITES" /* 685 */;
import { defaultAreStatesEqual } from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { Presets } from "notificationSettingsPresetUtils.tsx";

require = arg1;
let result = require("set").fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsGuildFlagUtils.tsx");

export const updateGuildPreset = function updateGuildPreset(guildId, arg1) {
  guildFlags = guildFlags.getGuildFlags(guildId);
  if (arg1 === Presets.Presets.ALL_MESSAGES) {
    let obj = { message_notifications: null, flags: null };
    obj[0] = UserNotificationSettings.ALL_MESSAGES;
    let tmp2Result = tmp2(10091);
    obj[1] = tmp2Result.withGuildUnreadFlags(guildFlags, constants.UNREADS_ALL_MESSAGES);
    const result = _modDef6798.updateGuildNotificationSettings(guildId, obj, tmp2(6795).NotificationLabels.PresetAll);
    const obj4 = _modDef6798;
  } else if (arg1 === tmp2(5046).Presets.MENTIONS) {
    obj = _modDef6798;
    obj = { message_notifications: null, flags: null };
    obj[0] = UserNotificationSettings.ONLY_MENTIONS;
    tmp2Result = tmp2(10091);
    obj[1] = tmp2Result.withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result1 = obj.updateGuildNotificationSettings(guildId, obj, tmp2(6795).NotificationLabels.PresetMentions);
  } else if (arg1 === tmp2(5046).Presets.NOTHING) {
    obj1 = { message_notifications: null, flags: null };
    obj1[0] = UserNotificationSettings.NO_MESSAGES;
    const obj7 = _modDef6798;
    obj1[1] = tmp2(10091).withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result2 = obj7.updateGuildNotificationSettings(guildId, obj1, tmp2(6795).NotificationLabels.PresetNothing);
    const tmp2Result1 = tmp2(10091);
  }
};
export const useGuildPresetSettings = function useGuildPresetSettings(guildId) {
  const _require = guildId;
  let obj = _defaultAreStatesEqual;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_3.getGuildUnreadSetting(closure_0));
  const items1 = [closure_3];
  const stateFromStores1 = _defaultAreStatesEqual.useStateFromStores(items1, () => closure_1_3.getMessageNotifications(closure_0));
  obj = { unread: stateFromStores, notification: stateFromStores1, preset: null };
  const obj2 = _defaultAreStatesEqual;
  obj[2] = _Presets.presetFromSettings(stateFromStores, stateFromStores1);
  return obj;
};