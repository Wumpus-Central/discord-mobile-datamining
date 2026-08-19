// discord_app/modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx
import Presets from "notificationSettingsPresetUtils.tsx";
import UserNotificationSettings2 from "../../../../utils/NotificationSettingsUtils.tsx";
import _modDef6798 from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import resetGuildUnreadFlags from "notificationSettingsFlagUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import updateUserGuildSettingsInternal from "../../../../stores/UserGuildSettingsStore.tsx";
import { UserNotificationSettings } from "../../../../Constants.tsx";
import { UnreadSetting } from "../../../read_states/ReadStateConstants.tsx";
import { ChannelNotificationSettingsFlags as closure_8 } from "../../../user_settings/UserSettingsConstants.tsx";
import { defaultAreStatesEqual } from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";

require = fn;
let result = require("obj132").fileFinishedImporting("modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx");

export const useChannelPresetSettings = function useChannelPresetSettings(channel) {
  const _require = channel;
  let obj = defaultAreStatesEqual;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.resolveUnreadSetting(closure_0));
  const items1 = [closure_5];
  const stateFromStores1 = require("../../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items1, () => closure_1_5.resolvedMessageNotifications(closure_0));
  obj = { unread: stateFromStores, notification: stateFromStores1, preset: null };
  const obj2 = defaultAreStatesEqual;
  obj[2] = require("notificationSettingsPresetUtils.tsx").presetFromSettings(stateFromStores, stateFromStores1);
  return obj;
};
export const useChannelPresetInheritance = function useChannelPresetInheritance(channel) {
  const _require = channel;
  let obj = defaultAreStatesEqual;
  let items = [closure_5];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => channel(dependencyMap[8]).filterOverrides(closure_1_5.getChannelOverrides(channel.guild_id), { ignoreMute: true, ignoreUnreadSetting: false, ignoreNotificationSetting: false }));
  let items1 = [closure_5, closure_4];
  const items2 = [, , ];
  ({ guild_id: arr3[0], parent_id: arr3[1] } = channel);
  items2[2] = stateFromStoresArray;
  let obj3 = defaultAreStatesEqual;
  obj = { inherited: !stateFromStoresArray.includes(channel.id), inheritedFrom: tmp2, inheritedPreset: tmp3 };
  [tmp2, tmp3] = callback(require("../../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStoresArray(items1, () => {
    channel = closure_1_4.getChannel(channel.parent_id);
    if (null != channel) {
      if (stateFromStoresArray.includes(channel.id)) {
        const obj3 = channel(dependencyMap[7]);
        const unreadSetting = closure_1_5.resolveUnreadSetting(channel);
        const items = ["parent", obj3.presetName(channel(dependencyMap[7]).presetFromSettings(unreadSetting, closure_1_5.resolvedMessageNotifications(channel)))];
        let items1 = items;
        const obj4 = channel(dependencyMap[7]);
      }
      return items1;
    }
    const obj = channel(dependencyMap[7]);
    const guildUnreadSetting = closure_1_5.getGuildUnreadSetting(tmp.guild_id);
    items1 = ["guild", obj.presetName(channel(dependencyMap[7]).presetFromSettings(guildUnreadSetting, closure_1_5.getMessageNotifications(channel.guild_id)))];
    const obj2 = channel(dependencyMap[7]);
  }, items2), 2);
  return obj;
};
export const updateChannelPreset = function updateChannelPreset(guild_id, id, arg2) {
  const channelIdFlags = store.getChannelIdFlags(guild_id, id);
  if (arg2 === Presets.Presets.ALL_MESSAGES) {
    const obj4 = _modDef6798;
    let obj = { message_notifications: null, flags: null };
    obj[0] = UserNotificationSettings.ALL_MESSAGES;
    let tmp2Result = resetGuildUnreadFlags;
    obj[1] = tmp2Result.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ALL_MESSAGES);
    const result = obj4.updateChannelOverrideSettings(guild_id, id, obj, UserNotificationSettings2.NotificationLabels.PresetAll);
  } else if (arg2 === Presets.Presets.MENTIONS) {
    obj = { message_notifications: null, flags: null };
    obj[0] = UserNotificationSettings.ONLY_MENTIONS;
    tmp2Result = resetGuildUnreadFlags;
    obj[1] = tmp2Result.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS);
    const result1 = obj.updateChannelOverrideSettings(guild_id, id, obj, UserNotificationSettings2.NotificationLabels.PresetMentions);
  } else if (arg2 === Presets.Presets.NOTHING) {
    const obj7 = _modDef6798;
    obj1 = { message_notifications: null, flags: null };
    obj1[0] = UserNotificationSettings.NO_MESSAGES;
    obj1[1] = resetGuildUnreadFlags.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS);
    const result2 = obj7.updateChannelOverrideSettings(guild_id, id, obj1, UserNotificationSettings2.NotificationLabels.PresetNothing);
    const tmp2Result1 = resetGuildUnreadFlags;
  }
};
export const updateChannelToGuildDefault = function updateChannelToGuildDefault(guild_id, id) {
  const obj = { message_notifications: UserNotificationSettings.NULL, flags: resetGuildUnreadFlags.resetChannelUnreadFlags(store.getChannelIdFlags(guild_id, id)) };
  const result = obj.updateChannelOverrideSettings(guild_id, id, obj, UserNotificationSettings2.NotificationLabels.PresetDefault);
};
export const updateChannelUnreadSetting = function updateChannelUnreadSetting(guild_id, id, ALL_MESSAGES) {
  const channelIdFlags = store.getChannelIdFlags(guild_id, id);
  let obj = _modDef6798;
  if (ALL_MESSAGES === UnreadSetting.ALL_MESSAGES) {
    let UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
  } else {
    UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
  }
  obj = { flags: resetGuildUnreadFlags.withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) };
  const NotificationLabel = UserNotificationSettings2.NotificationLabel;
  const result = obj.updateChannelOverrideSettings(guild_id, id, obj, NotificationLabel.unreads(ALL_MESSAGES));
};
export const updateChannelNotificationSetting = function updateChannelNotificationSetting(guildId, id, message_notifications) {
  const obj = { message_notifications };
  const NotificationLabel = UserNotificationSettings2.NotificationLabel;
  const result = obj.updateChannelOverrideSettings(guildId, id, obj, NotificationLabel.notifications(message_notifications));
};