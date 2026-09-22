// discord_app/modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils.tsx";
import NotificationSettingsUtils from "../../../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import notifications_NotificationUtils from "../../NotificationUtils.tsx";
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const UnreadSetting = fn(4939).UnreadSetting;
const constants = fn(1084).ChannelNotificationSettingsFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx");

export const useChannelPresetSettings = function useChannelPresetSettings(channel) {
  _require = channel;
  const items = [UserGuildSettingsStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
    UserGuildSettingsStore.resolveUnreadSetting(closure_0),
  );
  const obj = require("useStateFromStores");
  const items1 = [UserGuildSettingsStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () =>
    UserGuildSettingsStore.resolvedMessageNotifications(closure_0),
  );
  const obj3 = { unread: stateFromStores, notification: stateFromStores1, preset: null };
  const obj2 = require("useStateFromStores");
  obj3.preset = require("notificationSettingsPresetUtils").presetFromSettings(stateFromStores, stateFromStores1);
  return obj3;
};
export const useChannelPresetInheritance = function useChannelPresetInheritance(channel) {
  _require = channel;
  let items = [UserGuildSettingsStore];
  const stateFromStoresArray = require("useStateFromStores").useStateFromStoresArray(items, () =>
    notifications_NotificationUtils.filterOverrides(UserGuildSettingsStore.getChannelOverrides(channel.guild_id), {
      ignoreMute: true,
      ignoreUnreadSetting: false,
      ignoreNotificationSetting: false,
    }),
  );
  let obj = require("useStateFromStores");
  let items1 = [UserGuildSettingsStore, ChannelStore];
  const items2 = [, ,];
  ({ guild_id: arr3[0], parent_id: arr3[1] } = channel);
  items2[2] = stateFromStoresArray;
  let obj3 = require("useStateFromStores");
  const tmp = _slicedToArray(
    require("useStateFromStores").useStateFromStoresArray(
      items1,
      () => {
        channel = ChannelStore.getChannel(channel.parent_id);
        if (null != channel) {
          if (stateFromStoresArray.includes(channel.id)) {
            const obj3 = notificationSettingsPresetUtils;
            const unreadSetting = UserGuildSettingsStore.resolveUnreadSetting(channel);
            const items = [
              "parent",
              obj3.presetName(
                notificationSettingsPresetUtils.webPresetFromSettings(
                  unreadSetting,
                  UserGuildSettingsStore.resolvedMessageNotifications(channel),
                ),
              ),
            ];
            let items1 = items;
          }
          return items1;
        }
        const obj = notificationSettingsPresetUtils;
        const guildUnreadSetting = UserGuildSettingsStore.getGuildUnreadSetting(tmp.guild_id);
        items1 = [
          "guild",
          obj.presetName(
            notificationSettingsPresetUtils.webPresetFromSettings(
              guildUnreadSetting,
              UserGuildSettingsStore.getMessageNotifications(channel.guild_id),
            ),
          ),
        ];
      },
      items2,
    ),
    2,
  );
  [tmp2, tmp3] = tmp;
  return { inherited: !stateFromStoresArray.includes(channel.id), inheritedFrom: tmp2, inheritedPreset: tmp3 };
};
export const updateChannelPreset = function updateChannelPreset(guild_id, id, arg2) {
  const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guild_id, id);
  if (arg2 === notificationSettingsPresetUtils.Presets.ALL_MESSAGES) {
    const obj7 = NotificationSettingsModalActionCreatorsDefault;
    const obj2 = {
      message_notifications: UserNotificationSettings.ALL_MESSAGES,
      flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ALL_MESSAGES),
    };
    const result = obj7.updateChannelOverrideSettings(
      guild_id,
      id,
      obj2,
      NotificationSettingsUtils.NotificationLabels.PresetAll,
    );
    const tmp2Result = notificationSettingsFlagUtils;
  } else if (arg2 === notificationSettingsPresetUtils.Presets.HYBRID) {
    const obj4 = NotificationSettingsModalActionCreatorsDefault;
    const obj3 = {
      message_notifications: UserNotificationSettings.ONLY_MENTIONS,
      flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ALL_MESSAGES),
    };
    const result1 = obj4.updateChannelOverrideSettings(
      guild_id,
      id,
      obj3,
      NotificationSettingsUtils.NotificationLabels.PresetHybrid,
    );
    const tmp2Result4 = notificationSettingsFlagUtils;
  } else if (arg2 === notificationSettingsPresetUtils.Presets.MENTIONS) {
    const obj = NotificationSettingsModalActionCreatorsDefault;
    const obj5 = {
      message_notifications: UserNotificationSettings.ONLY_MENTIONS,
      flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS),
    };
    const result2 = obj.updateChannelOverrideSettings(
      guild_id,
      id,
      obj5,
      NotificationSettingsUtils.NotificationLabels.PresetMentions,
    );
    const tmp2Result5 = notificationSettingsFlagUtils;
  } else if (arg2 === notificationSettingsPresetUtils.Presets.NOTHING) {
    const obj10 = NotificationSettingsModalActionCreatorsDefault;
    const obj6 = {
      message_notifications: UserNotificationSettings.NO_MESSAGES,
      flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS),
    };
    const result3 = obj10.updateChannelOverrideSettings(
      guild_id,
      id,
      obj6,
      NotificationSettingsUtils.NotificationLabels.PresetNothing,
    );
    const tmp2Result6 = notificationSettingsFlagUtils;
  }
};
export const updateChannelToGuildDefault = function updateChannelToGuildDefault(guild_id, id) {
  const obj2 = { message_notifications: UserNotificationSettings.NULL, flags: null };
  const obj = NotificationSettingsModalActionCreatorsDefault;
  obj2.flags = notificationSettingsFlagUtils.resetChannelUnreadFlags(
    UserGuildSettingsStore.getChannelIdFlags(guild_id, id),
  );
  const result = obj.updateChannelOverrideSettings(
    guild_id,
    id,
    obj2,
    NotificationSettingsUtils.NotificationLabels.PresetDefault,
  );
};
export const updateChannelUnreadSetting = function updateChannelUnreadSetting(guild_id, id, ALL_MESSAGES) {
  const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guild_id, id);
  const obj = NotificationSettingsModalActionCreatorsDefault;
  if (ALL_MESSAGES === UnreadSetting.ALL_MESSAGES) {
    let UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
  } else {
    UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
  }
  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  const result = obj.updateChannelOverrideSettings(
    guild_id,
    id,
    { flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) },
    NotificationLabel.unreads(ALL_MESSAGES),
  );
  const obj3 = { flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) };
};
export const updateChannelNotificationSetting = function updateChannelNotificationSetting(
  guildId,
  id,
  message_notifications,
) {
  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(
    guildId,
    id,
    { message_notifications },
    NotificationLabel.notifications(message_notifications),
  );
};
