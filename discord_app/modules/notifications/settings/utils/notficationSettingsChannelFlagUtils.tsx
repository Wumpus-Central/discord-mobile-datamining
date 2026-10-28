// discord_app/modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx
import NotificationSettingsUtils from "../../../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils.tsx";
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
const UserNotificationSettings = fn(1084).UserNotificationSettings;
const UnreadSetting = fn(6740).UnreadSetting;
const constants = fn(1094).ChannelNotificationSettingsFlags;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx");

export const useChannelPresetSettings = ReactCompilerGating.isReactCompilerEnabled()
  ? function useChannelPresetSettings(arg0) {
      _require = arg0;
      const cResult = require("c").c(13);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserGuildSettingsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          return UserGuildSettingsStore.resolveUnreadSetting(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserGuildSettingsStore];
        cResult[3] = items1;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== arg0) {
        const fn2 = function u() {
          return UserGuildSettingsStore.resolvedMessageNotifications(closure_0);
        };
        cResult[4] = arg0;
        cResult[5] = fn2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[5];
      }
      const tmpResult = require("useStateFromStores");
      const stateFromStores1 = require("useStateFromStores").useStateFromStores(tmp8, tmp10);
      if (cResult[6] === stateFromStores1) {
        if (cResult[7] === stateFromStores) {
          let tmp12 = cResult[8];
        }
        if (cResult[9] === stateFromStores1) {
          if (cResult[10] === tmp12) {
            if (cResult[11] === stateFromStores) {
              let tmp14 = cResult[12];
            }
            return tmp14;
          }
        }
        const obj2 = { unread: stateFromStores, notification: stateFromStores1, preset: tmp12 };
        cResult[9] = stateFromStores1;
        cResult[10] = tmp12;
        cResult[11] = stateFromStores;
        cResult[12] = obj2;
        tmp14 = obj2;
      }
      const tmpResult3 = require("useStateFromStores");
      const presetFromSettingsResult = require("notificationSettingsPresetUtils").presetFromSettings(
        stateFromStores,
        stateFromStores1,
      );
      cResult[6] = stateFromStores1;
      cResult[7] = stateFromStores;
      cResult[8] = presetFromSettingsResult;
      tmp12 = presetFromSettingsResult;
      const tmpResult4 = require("notificationSettingsPresetUtils");
    }
  : function useChannelPresetSettings(arg0) {
      _require = arg0;
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
export const updateChannelPreset = function updateChannelPreset(guildId, channelId, arg2) {
  const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guildId, channelId);
  if (arg2 === notificationSettingsPresetUtils.Presets.ALL_MESSAGES) {
    const obj2 = { guildId, channelId, settings: null, label: null };
    const obj3 = { message_notifications: UserNotificationSettings.ALL_MESSAGES, flags: null };
    const obj9 = NotificationSettingsModalActionCreatorsDefault;
    obj3.flags = notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ALL_MESSAGES);
    obj2.settings = obj3;
    obj2.label = NotificationSettingsUtils.NotificationLabels.PresetAll;
    const result = obj9.updateChannelOverrideSettings(obj2);
    const tmp2Result = notificationSettingsFlagUtils;
  } else if (arg2 === notificationSettingsPresetUtils.Presets.HYBRID) {
    const obj4 = { guildId, channelId, settings: null, label: null };
    const obj6 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: null };
    const obj5 = NotificationSettingsModalActionCreatorsDefault;
    obj6.flags = notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ALL_MESSAGES);
    obj4.settings = obj6;
    obj4.label = NotificationSettingsUtils.NotificationLabels.PresetHybrid;
    const result1 = obj5.updateChannelOverrideSettings(obj4);
    const tmp2Result4 = notificationSettingsFlagUtils;
  } else if (arg2 === notificationSettingsPresetUtils.Presets.MENTIONS) {
    const obj7 = { guildId, channelId, settings: null, label: null };
    const obj8 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: null };
    const obj = NotificationSettingsModalActionCreatorsDefault;
    obj8.flags = notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS);
    obj7.settings = obj8;
    obj7.label = NotificationSettingsUtils.NotificationLabels.PresetMentions;
    const result2 = obj.updateChannelOverrideSettings(obj7);
    const tmp2Result5 = notificationSettingsFlagUtils;
  } else if (arg2 === notificationSettingsPresetUtils.Presets.NOTHING) {
    const obj10 = { guildId, channelId, settings: null, label: null };
    const obj11 = { message_notifications: UserNotificationSettings.NO_MESSAGES, flags: null };
    const obj13 = NotificationSettingsModalActionCreatorsDefault;
    obj11.flags = notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS);
    obj10.settings = obj11;
    obj10.label = NotificationSettingsUtils.NotificationLabels.PresetNothing;
    const result3 = obj13.updateChannelOverrideSettings(obj10);
    const tmp2Result6 = notificationSettingsFlagUtils;
  }
};
export const updateChannelToGuildDefault = function updateChannelToGuildDefault(guildId, channelId) {
  const obj2 = { guildId, channelId, settings: null, label: null };
  const obj3 = { message_notifications: UserNotificationSettings.NULL, flags: null };
  const obj = NotificationSettingsModalActionCreatorsDefault;
  obj3.flags = notificationSettingsFlagUtils.resetChannelUnreadFlags(
    UserGuildSettingsStore.getChannelIdFlags(guildId, channelId),
  );
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
  obj2.settings = {
    flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS),
  };
  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  obj2.label = NotificationLabel.unreads(ALL_MESSAGES);
  const result = obj.updateChannelOverrideSettings(obj2);
  const obj4 = { flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) };
};
export const updateChannelNotificationSetting = function updateChannelNotificationSetting(
  guildId,
  channelId,
  message_notifications,
) {
  const obj2 = { guildId, channelId, settings: { message_notifications }, label: null };
  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  obj2.label = NotificationLabel.notifications(message_notifications);
  const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(obj2);
};
