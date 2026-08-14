// discord_app/modules/notifications/settings/utils/notificationSettingsGuildFlagUtils.tsx
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { UserNotificationSettings } from "ME";
import { GuildNotificationSettingsFlags as closure_5 } from "MAX_FAVORITES";
import { defaultAreStatesEqual } from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { NotificationSettingsModalActionCreators } from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import { Presets } from "notificationSettingsPresetUtils.tsx";

const require = arg1;
let result = require("MAX_FAVORITES").fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsGuildFlagUtils.tsx");

export const updateGuildPreset = function updateGuildPreset(guildId, arg1) {
  guildFlags = guildFlags.getGuildFlags(guildId);
  if (arg1 === Presets.Presets.ALL_MESSAGES) {
    let obj = { message_notifications: null, flags: null };
    obj[0] = UserNotificationSettings.ALL_MESSAGES;
    let tmp2Result = tmp2(9887);
    obj[1] = tmp2Result.withGuildUnreadFlags(guildFlags, constants.UNREADS_ALL_MESSAGES);
    const result = NotificationSettingsModalActionCreators.updateGuildNotificationSettings(guildId, obj, tmp2(5318).NotificationLabels.PresetAll);
    const obj4 = NotificationSettingsModalActionCreators;
  } else if (arg1 === tmp2(4553).Presets.MENTIONS) {
    obj = NotificationSettingsModalActionCreators;
    obj = { message_notifications: null, flags: null };
    obj[0] = UserNotificationSettings.ONLY_MENTIONS;
    tmp2Result = tmp2(9887);
    obj[1] = tmp2Result.withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result1 = obj.updateGuildNotificationSettings(guildId, obj, tmp2(5318).NotificationLabels.PresetMentions);
  } else if (arg1 === tmp2(4553).Presets.NOTHING) {
    const obj1 = { message_notifications: null, flags: null };
    obj1[0] = UserNotificationSettings.NO_MESSAGES;
    const obj7 = NotificationSettingsModalActionCreators;
    obj1[1] = tmp2(9887).withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result2 = obj7.updateGuildNotificationSettings(guildId, obj1, tmp2(5318).NotificationLabels.PresetNothing);
    const tmp2Result1 = tmp2(9887);
  }
};
export const useGuildPresetSettings = function useGuildPresetSettings(guildId) {
  const _require = guildId;
  let obj = _defaultAreStatesEqual;
  const items = [updateUserGuildSettingsInternal];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getGuildUnreadSetting(closure_0));
  const items1 = [updateUserGuildSettingsInternal];
  const stateFromStores1 = _defaultAreStatesEqual.useStateFromStores(items1, () => outer1_3.getMessageNotifications(closure_0));
  obj = { unread: stateFromStores, notification: stateFromStores1, preset: null };
  const obj2 = _defaultAreStatesEqual;
  obj[2] = _Presets.presetFromSettings(stateFromStores, stateFromStores1);
  return obj;
};