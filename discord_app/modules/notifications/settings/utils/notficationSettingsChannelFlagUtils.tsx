// === Module 9607: notficationSettingsChannelFlagUtils ===

// Module 9607 (notficationSettingsChannelFlagUtils)
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 5020 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6535 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6540 */;
import notifications_NotificationUtils from "notifications/NotificationUtils" /* 9605 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 9608 */;
import _slicedToArray from "module_32" /* 32 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;

const require = globalThis.__r;

require = fn;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const UnreadSetting = fn(5018).UnreadSetting;
const constants = fn(1084).ChannelNotificationSettingsFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx");

export const useChannelPresetSettings = function useChannelPresetSettings(channel) {
  _require = channel;
  const items = [UserGuildSettingsStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => UserGuildSettingsStore.resolveUnreadSetting(closure_0));
  const obj = require("useStateFromStores");
  const items1 = [UserGuildSettingsStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => UserGuildSettingsStore.resolvedMessageNotifications(closure_0));
  const obj3 = { unread: stateFromStores, notification: stateFromStores1, preset: null };
  const obj2 = require("useStateFromStores");
  obj3.preset = require("notificationSettingsPresetUtils").presetFromSettings(stateFromStores, stateFromStores1);
  return obj3;
};
export const useChannelPresetInheritance = function useChannelPresetInheritance(channel) {
  _require = channel;
  let items = [UserGuildSettingsStore];
  const stateFromStoresArray = require("useStateFromStores").useStateFromStoresArray(items, () => notifications_NotificationUtils.filterOverrides(UserGuildSettingsStore.getChannelOverrides(channel.guild_id), { ignoreMute: true, ignoreUnreadSetting: false, ignoreNotificationSetting: false }));
  let obj = require("useStateFromStores");
  let items1 = [UserGuildSettingsStore, ChannelStore];
  const items2 = [, , ];
  ({ guild_id: arr3[0], parent_id: arr3[1] } = channel);
  items2[2] = stateFromStoresArray;
  let obj3 = require("useStateFromStores");
  const tmp = _slicedToArray(require("useStateFromStores").useStateFromStoresArray(items1, () => {
    channel = ChannelStore.getChannel(channel.parent_id);
    if (null != channel) {
      if (stateFromStoresArray.includes(channel.id)) {
        const obj3 = notificationSettingsPresetUtils;
        const unreadSetting = UserGuildSettingsStore.resolveUnreadSetting(channel);
        const items = ["parent", obj3.presetName(notificationSettingsPresetUtils.webPresetFromSettings(unreadSetting, UserGuildSettingsStore.resolvedMessageNotifications(channel)))];
        let items1 = items;
      }
      return items1;
    }
    const obj = notificationSettingsPresetUtils;
    const guildUnreadSetting = UserGuildSettingsStore.getGuildUnreadSetting(tmp.guild_id);
    items1 = ["guild", obj.presetName(notificationSettingsPresetUtils.webPresetFromSettings(guildUnreadSetting, UserGuildSettingsStore.getMessageNotifications(channel.guild_id)))];
  }, items2), 2);
  [tmp2, tmp3] = tmp;
  return { inherited: !stateFromStoresArray.includes(channel.id), inheritedFrom: tmp2, inheritedPreset: tmp3 };
};
export const updateChannelPreset = function updateChannelPreset(guild_id, id, arg2) {
  const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guild_id, id);
  if (arg2 === notificationSettingsPresetUtils.Presets.ALL_MESSAGES) {
    const obj2 = { guildId: guild_id, channelId: id, settings: null, label: null };
    const obj3 = { message_notifications: UserNotificationSettings.ALL_MESSAGES, flags: null };
    const obj9 = NotificationSettingsModalActionCreatorsDefault;
    obj3.flags = notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ALL_MESSAGES);
    obj2.settings = obj3;
    obj2.label = NotificationSettingsUtils.NotificationLabels.PresetAll;
    const result = obj9.updateChannelOverrideSettings(obj2);
    const tmp2Result = notificationSettingsFlagUtils;
  } else if (arg2 === notificationSettingsPresetUtils.Presets.HYBRID) {
    const obj4 = { guildId: guild_id, channelId: id, settings: null, label: null };
    const obj6 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: null };
    const obj5 = NotificationSettingsModalActionCreatorsDefault;
    obj6.flags = notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ALL_MESSAGES);
    obj4.settings = obj6;
    obj4.label = NotificationSettingsUtils.NotificationLabels.PresetHybrid;
    const result1 = obj5.updateChannelOverrideSettings(obj4);
    const tmp2Result4 = notificationSettingsFlagUtils;
  } else if (arg2 === notificationSettingsPresetUtils.Presets.MENTIONS) {
    const obj7 = { guildId: guild_id, channelId: id, settings: null, label: null };
    const obj8 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: null };
    const obj = NotificationSettingsModalActionCreatorsDefault;
    obj8.flags = notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS);
    obj7.settings = obj8;
    obj7.label = NotificationSettingsUtils.NotificationLabels.PresetMentions;
    const result2 = obj.updateChannelOverrideSettings(obj7);
    const tmp2Result5 = notificationSettingsFlagUtils;
  } else if (arg2 === notificationSettingsPresetUtils.Presets.NOTHING) {
    const obj10 = { guildId: guild_id, channelId: id, settings: null, label: null };
    const obj11 = { message_notifications: UserNotificationSettings.NO_MESSAGES, flags: null };
    const obj13 = NotificationSettingsModalActionCreatorsDefault;
    obj11.flags = notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS);
    obj10.settings = obj11;
    obj10.label = NotificationSettingsUtils.NotificationLabels.PresetNothing;
    const result3 = obj13.updateChannelOverrideSettings(obj10);
    const tmp2Result6 = notificationSettingsFlagUtils;
  }
};
export const updateChannelToGuildDefault = function updateChannelToGuildDefault(guild_id, id) {
  const obj2 = { guildId: guild_id, channelId: id, settings: null, label: null };
  const obj3 = { message_notifications: UserNotificationSettings.NULL, flags: null };
  const obj = NotificationSettingsModalActionCreatorsDefault;
  obj3.flags = notificationSettingsFlagUtils.resetChannelUnreadFlags(UserGuildSettingsStore.getChannelIdFlags(guild_id, id));
  obj2.settings = obj3;
  obj2.label = NotificationSettingsUtils.NotificationLabels.PresetDefault;
  const result = obj.updateChannelOverrideSettings(obj2);
};
export const updateChannelUnreadSetting = function updateChannelUnreadSetting(guild_id, id, ALL_MESSAGES) {
  const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guild_id, id);
  const obj2 = { guildId: guild_id, channelId: id, settings: null, label: null };
  const obj = NotificationSettingsModalActionCreatorsDefault;
  if (ALL_MESSAGES === UnreadSetting.ALL_MESSAGES) {
    let UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
  } else {
    UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
  }
  obj2.settings = { flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) };
  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  obj2.label = NotificationLabel.unreads(ALL_MESSAGES);
  const result = obj.updateChannelOverrideSettings(obj2);
  const obj4 = { flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) };
};
export const updateChannelNotificationSetting = function updateChannelNotificationSetting(guildId, channelId, message_notifications) {
  const obj2 = { guildId, channelId, settings: { message_notifications }, label: null };
  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  obj2.label = NotificationLabel.notifications(message_notifications);
  const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(obj2);
};