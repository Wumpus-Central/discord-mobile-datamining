// === Module 10465: useChannelPresetSettings ===

// Module 10465 (useChannelPresetSettings)
import _slicedToArray from "_slicedToArray";
import ensureGuildLoaded from "ensureGuildLoaded";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { UserNotificationSettings } from "ME";
import { UnreadSetting } from "ReadStateTypes";
import { ChannelNotificationSettingsFlags as closure_8 } from "MAX_FAVORITES";

const require = arg1;
let result = require("updateUserGuildSettingsInternal").fileFinishedImporting("modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx");

export const useChannelPresetSettings = function useChannelPresetSettings(channel) {
  const _require = channel;
  let obj = _require(647);
  const items = [updateUserGuildSettingsInternal];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.resolveUnreadSetting(closure_0));
  const items1 = [updateUserGuildSettingsInternal];
  const stateFromStores1 = _require(647).useStateFromStores(items1, () => outer1_5.resolvedMessageNotifications(closure_0));
  obj = { unread: stateFromStores, notification: stateFromStores1, preset: null };
  const obj2 = _require(647);
  obj[2] = _require(4454).presetFromSettings(stateFromStores, stateFromStores1);
  return obj;
};
export const useChannelPresetInheritance = function useChannelPresetInheritance(channel) {
  let tmp2;
  let tmp3;
  const _require = channel;
  let obj = _require(647);
  let items = [updateUserGuildSettingsInternal];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => channel(outer1_2[8]).filterOverrides(outer1_5.getChannelOverrides(channel.guild_id), { ignoreMute: true, ignoreUnreadSetting: false, ignoreNotificationSetting: false }));
  let items1 = [updateUserGuildSettingsInternal, ensureGuildLoaded];
  const items2 = [, , ];
  ({ guild_id: arr3[0], parent_id: arr3[1] } = channel);
  items2[2] = stateFromStoresArray;
  let obj3 = _require(647);
  obj = { inherited: !stateFromStoresArray.includes(channel.id), inheritedFrom: tmp2, inheritedPreset: tmp3 };
  [tmp2, tmp3] = callback(_require(647).useStateFromStoresArray(items1, () => {
    channel = outer1_4.getChannel(channel.parent_id);
    if (null != channel) {
      if (stateFromStoresArray.includes(channel.id)) {
        const obj3 = channel(outer1_2[7]);
        const unreadSetting = outer1_5.resolveUnreadSetting(channel);
        const items = ["parent", obj3.presetName(channel(outer1_2[7]).presetFromSettings(unreadSetting, outer1_5.resolvedMessageNotifications(channel)))];
        let items1 = items;
        const obj4 = channel(outer1_2[7]);
      }
      return items1;
    }
    const obj = channel(outer1_2[7]);
    const guildUnreadSetting = outer1_5.getGuildUnreadSetting(tmp.guild_id);
    items1 = ["guild", obj.presetName(channel(outer1_2[7]).presetFromSettings(guildUnreadSetting, outer1_5.getMessageNotifications(channel.guild_id)))];
  }, items2), 2);
  return obj;
};
export const updateChannelPreset = function updateChannelPreset(guild_id, id, arg2) {
  const channelIdFlags = store.getChannelIdFlags(guild_id, id);
  if (arg2 === require(4454) /* Presets */.Presets.ALL_MESSAGES) {
    const obj4 = importDefault(5201);
    let obj = { message_notifications: null, flags: null };
    obj[0] = UserNotificationSettings.ALL_MESSAGES;
    let tmp2Result = tmp2(10466);
    obj[1] = tmp2Result.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ALL_MESSAGES);
    const result = obj4.updateChannelOverrideSettings(guild_id, id, obj, tmp2(5196).NotificationLabels.PresetAll);
  } else if (arg2 === tmp2(4454).Presets.MENTIONS) {
    obj = importDefault(5201);
    obj = { message_notifications: null, flags: null };
    obj[0] = UserNotificationSettings.ONLY_MENTIONS;
    tmp2Result = tmp2(10466);
    obj[1] = tmp2Result.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS);
    const result1 = obj.updateChannelOverrideSettings(guild_id, id, obj, tmp2(5196).NotificationLabels.PresetMentions);
  } else if (arg2 === tmp2(4454).Presets.NOTHING) {
    const obj7 = importDefault(5201);
    const obj1 = { message_notifications: null, flags: null };
    obj1[0] = UserNotificationSettings.NO_MESSAGES;
    obj1[1] = tmp2(10466).withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS);
    const result2 = obj7.updateChannelOverrideSettings(guild_id, id, obj1, tmp2(5196).NotificationLabels.PresetNothing);
    const tmp2Result1 = tmp2(10466);
  }
};
export const updateChannelToGuildDefault = function updateChannelToGuildDefault(guild_id, id) {
  let obj = importDefault(5201);
  obj = { message_notifications: UserNotificationSettings.NULL, flags: null };
  obj[1] = require(10466) /* resetGuildUnreadFlags */.resetChannelUnreadFlags(store.getChannelIdFlags(guild_id, id));
  const result = obj.updateChannelOverrideSettings(guild_id, id, obj, require(5196) /* UserNotificationSettings */.NotificationLabels.PresetDefault);
};
export const updateChannelUnreadSetting = function updateChannelUnreadSetting(guild_id, id, ALL_MESSAGES) {
  const channelIdFlags = store.getChannelIdFlags(guild_id, id);
  let obj = importDefault(5201);
  if (ALL_MESSAGES === UnreadSetting.ALL_MESSAGES) {
    let UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
  } else {
    UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
  }
  obj = { flags: require(10466) /* resetGuildUnreadFlags */.withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) };
  const NotificationLabel = require(5196) /* UserNotificationSettings */.NotificationLabel;
  const result = obj.updateChannelOverrideSettings(guild_id, id, obj, NotificationLabel.unreads(ALL_MESSAGES));
};
export const updateChannelNotificationSetting = function updateChannelNotificationSetting(guildId, id, message_notifications) {
  let obj = importDefault(5201);
  obj = { message_notifications };
  const NotificationLabel = require(5196) /* UserNotificationSettings */.NotificationLabel;
  const result = obj.updateChannelOverrideSettings(guildId, id, obj, NotificationLabel.notifications(message_notifications));
};