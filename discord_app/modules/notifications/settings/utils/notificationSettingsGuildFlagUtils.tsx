// discord_app/modules/notifications/settings/utils/notificationSettingsGuildFlagUtils.tsx
import Presets from "notificationSettingsPresetUtils.tsx";
import UserNotificationSettings2 from "../../../../utils/NotificationSettingsUtils.tsx";
import _modDef6798 from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import resetGuildUnreadFlags from "notificationSettingsFlagUtils.tsx";
import updateUserGuildSettingsInternal from "../../../../stores/UserGuildSettingsStore.tsx";
import { UserNotificationSettings } from "../../../../Constants.tsx";
import { GuildNotificationSettingsFlags as closure_5 } from "../../../user_settings/UserSettingsConstants.tsx";
import { defaultAreStatesEqual } from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";

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
  let obj = defaultAreStatesEqual;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_3.getGuildUnreadSetting(closure_0));
  const items1 = [closure_3];
  const stateFromStores1 = require("../../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items1, () => closure_1_3.getMessageNotifications(closure_0));
  obj = { unread: stateFromStores, notification: stateFromStores1, preset: null };
  const obj2 = defaultAreStatesEqual;
  obj[2] = require("notificationSettingsPresetUtils.tsx").presetFromSettings(stateFromStores, stateFromStores1);
  return obj;
};