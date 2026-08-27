// === Module 10152: useChannelPresetSettings ===

// Module 10152 (useChannelPresetSettings)
import Presets from "Presets" /* 4657 */;
import UserNotificationSettings2 from "UserNotificationSettings" /* 5434 */;
import _modDef5439 from "module_5439" /* 5439 */;
import resetGuildUnreadFlags from "resetGuildUnreadFlags" /* 10153 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "updateUserGuildSettingsInternal" /* 4654 */;
import { UserNotificationSettings } from "ME" /* 676 */;
import { UnreadSetting } from "ReadStateTypes" /* 4655 */;
import { ChannelNotificationSettingsFlags as closure_8 } from "MAX_FAVORITES" /* 685 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx");

export const useChannelPresetSettings = function useChannelPresetSettings(channel) {
  const _require = channel;
  let obj = _require(647);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.resolveUnreadSetting(closure_0));
  const items1 = [closure_5];
  const stateFromStores1 = _require(647).useStateFromStores(items1, () => closure_1_5.resolvedMessageNotifications(closure_0));
  obj = { unread: stateFromStores, notification: stateFromStores1, preset: null };
  const obj2 = _require(647);
  obj[2] = _require(4657).presetFromSettings(stateFromStores, stateFromStores1);
  return obj;
};
export const useChannelPresetInheritance = function useChannelPresetInheritance(channel) {
  const _require = channel;
  let obj = _require(647);
  let items = [closure_5];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => channel(closure_1_2[8]).filterOverrides(closure_1_5.getChannelOverrides(channel.guild_id), { ignoreMute: true, ignoreUnreadSetting: false, ignoreNotificationSetting: false }));
  let items1 = [closure_5, closure_4];
  const items2 = [, , ];
  ({ guild_id: arr3[0], parent_id: arr3[1] } = channel);
  items2[2] = stateFromStoresArray;
  let obj3 = _require(647);
  obj = { inherited: !stateFromStoresArray.includes(channel.id), inheritedFrom: tmp2, inheritedPreset: tmp3 };
  [tmp2, tmp3] = callback(_require(647).useStateFromStoresArray(items1, () => {
    channel = closure_1_4.getChannel(channel.parent_id);
    if (null != channel) {
      if (stateFromStoresArray.includes(channel.id)) {
        const obj3 = channel(closure_1_2[7]);
        const unreadSetting = closure_1_5.resolveUnreadSetting(channel);
        const items = ["parent", obj3.presetName(channel(closure_1_2[7]).presetFromSettings(unreadSetting, closure_1_5.resolvedMessageNotifications(channel)))];
        let items1 = items;
        const obj4 = channel(closure_1_2[7]);
      }
      return items1;
    }
    const obj = channel(closure_1_2[7]);
    const guildUnreadSetting = closure_1_5.getGuildUnreadSetting(tmp.guild_id);
    items1 = ["guild", obj.presetName(channel(closure_1_2[7]).presetFromSettings(guildUnreadSetting, closure_1_5.getMessageNotifications(channel.guild_id)))];
  }, items2), 2);
  return obj;
};
export const updateChannelPreset = function updateChannelPreset(guild_id, id, arg2) {
  const channelIdFlags = store.getChannelIdFlags(guild_id, id);
  if (arg2 === Presets.Presets.ALL_MESSAGES) {
    const obj4 = _modDef5439;
    let obj = { message_notifications: null, flags: null };
    obj[0] = UserNotificationSettings.ALL_MESSAGES;
    let tmp2Result = tmp2(10153);
    obj[1] = tmp2Result.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ALL_MESSAGES);
    const result = obj4.updateChannelOverrideSettings(guild_id, id, obj, tmp2(5434).NotificationLabels.PresetAll);
  } else if (arg2 === tmp2(4657).Presets.MENTIONS) {
    obj = _modDef5439;
    obj = { message_notifications: null, flags: null };
    obj[0] = UserNotificationSettings.ONLY_MENTIONS;
    tmp2Result = tmp2(10153);
    obj[1] = tmp2Result.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS);
    const result1 = obj.updateChannelOverrideSettings(guild_id, id, obj, tmp2(5434).NotificationLabels.PresetMentions);
  } else if (arg2 === tmp2(4657).Presets.NOTHING) {
    const obj7 = _modDef5439;
    obj1 = { message_notifications: null, flags: null };
    obj1[0] = UserNotificationSettings.NO_MESSAGES;
    obj1[1] = tmp2(10153).withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS);
    const result2 = obj7.updateChannelOverrideSettings(guild_id, id, obj1, tmp2(5434).NotificationLabels.PresetNothing);
    const tmp2Result1 = tmp2(10153);
  }
};
export const updateChannelToGuildDefault = function updateChannelToGuildDefault(guild_id, id) {
  let obj = _modDef5439;
  obj = { message_notifications: UserNotificationSettings.NULL, flags: resetGuildUnreadFlags.resetChannelUnreadFlags(store.getChannelIdFlags(guild_id, id)) };
  const result = obj.updateChannelOverrideSettings(guild_id, id, obj, UserNotificationSettings2.NotificationLabels.PresetDefault);
};
export const updateChannelUnreadSetting = function updateChannelUnreadSetting(guild_id, id, ALL_MESSAGES) {
  const channelIdFlags = store.getChannelIdFlags(guild_id, id);
  let obj = _modDef5439;
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
  let obj = _modDef5439;
  obj = { message_notifications };
  const NotificationLabel = UserNotificationSettings2.NotificationLabel;
  const result = obj.updateChannelOverrideSettings(guildId, id, obj, NotificationLabel.notifications(message_notifications));
};