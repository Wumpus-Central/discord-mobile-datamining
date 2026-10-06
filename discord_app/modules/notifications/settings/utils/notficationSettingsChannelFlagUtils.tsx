// === Module 9864: notficationSettingsChannelFlagUtils ===

// Module 9864 (notficationSettingsChannelFlagUtils)
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import ReadStateConstants from "ReadStateConstants" /* 5078 */;
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 5080 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6616 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6621 */;
import notifications_NotificationUtils from "notifications/NotificationUtils" /* 9862 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 9865 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const constants = UserSettingsConstants.ChannelNotificationSettingsFlags;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp10;
  let tmp6;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return UserGuildSettingsStore.resolveUnreadSetting(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserGuildSettingsStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function u() {
      return UserGuildSettingsStore.resolvedMessageNotifications(closure_0);
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult3 = require("useStateFromStores");
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp10);
  if (cResult[6] === stateFromStores1) {
    let tmp12;
    if (cResult[7] === stateFromStores) {
      tmp12 = cResult[8];
    }
    if (cResult[9] === stateFromStores1) {
      if (cResult[10] === tmp12) {
        let tmp14;
        if (cResult[11] === stateFromStores) {
          tmp14 = cResult[12];
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
  const tmpResult4 = require("notificationSettingsPresetUtils");
  const presetFromSettingsResult = tmpResult4.presetFromSettings(stateFromStores, stateFromStores1);
  cResult[6] = stateFromStores1;
  cResult[7] = stateFromStores;
  cResult[8] = presetFromSettingsResult;
  tmp12 = presetFromSettingsResult;
}) : ((arg0) => {
  let closure_0;
  let obj4;
  _require = arg0;
  const items = [UserGuildSettingsStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.resolveUnreadSetting(closure_0));
  const items1 = [UserGuildSettingsStore];
  const obj2 = require("useStateFromStores");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => UserGuildSettingsStore.resolvedMessageNotifications(closure_0));
  const obj3 = { unread: stateFromStores, notification: stateFromStores1, preset: obj4.presetFromSettings(stateFromStores, stateFromStores1) };
  obj4 = require("notificationSettingsPresetUtils");
  return obj3;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id) => {
  let first;
  _require = guild_id;
  let obj = require("react");
  const cResult = obj.c(16);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserGuildSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild_id.guild_id) {
    class S {
      constructor() {
        const obj = notifications_NotificationUtils;
        return obj.filterOverrides(UserGuildSettingsStore.getChannelOverrides(guild_id.guild_id), { ignoreMute: true, ignoreUnreadSetting: false, ignoreNotificationSetting: false });
      }
    }
    cResult[1] = guild_id.guild_id;
    cResult[2] = S;
  } else {
    class S {
      constructor() {
        const obj = notifications_NotificationUtils;
        return obj.filterOverrides(UserGuildSettingsStore.getChannelOverrides(guild_id.guild_id), { ignoreMute: true, ignoreUnreadSetting: false, ignoreNotificationSetting: false });
      }
    }
  }
  const tmpResult = tmp(573);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, S);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        const obj = notifications_NotificationUtils;
        return obj.filterOverrides(UserGuildSettingsStore.getChannelOverrides(guild_id.guild_id), { ignoreMute: true, ignoreUnreadSetting: false, ignoreNotificationSetting: false });
      }
    }
    let items1 = [UserGuildSettingsStore, ChannelStore];
    cResult[3] = items1;
  } else {
    class S {
      constructor() {
        const obj = notifications_NotificationUtils;
        return obj.filterOverrides(UserGuildSettingsStore.getChannelOverrides(guild_id.guild_id), { ignoreMute: true, ignoreUnreadSetting: false, ignoreNotificationSetting: false });
      }
    }
  }
  if (cResult[4] === guild_id.guild_id) {
    class S {
      constructor() {
        const obj = notifications_NotificationUtils;
        return obj.filterOverrides(UserGuildSettingsStore.getChannelOverrides(guild_id.guild_id), { ignoreMute: true, ignoreUnreadSetting: false, ignoreNotificationSetting: false });
      }
    }
  }
  const fn = function h() {
    const channel = ChannelStore.getChannel(guild_id.parent_id);
    if (null != channel) {
      let items1;
      if (stateFromStoresArray.includes(channel.id)) {
        const presetName2 = notificationSettingsPresetUtils.presetName;
        notificationSettingsPresetUtils;
        const webPresetFromSettings2 = notificationSettingsPresetUtils.webPresetFromSettings;
        notificationSettingsPresetUtils;
        const unreadSetting = UserGuildSettingsStore.resolveUnreadSetting(channel);
        const items = ["parent", presetName2(webPresetFromSettings2(unreadSetting, UserGuildSettingsStore.resolvedMessageNotifications(channel)))];
        items1 = items;
      }
      return items1;
    }
    const presetName = notificationSettingsPresetUtils.presetName;
    notificationSettingsPresetUtils;
    const webPresetFromSettings = notificationSettingsPresetUtils.webPresetFromSettings;
    notificationSettingsPresetUtils;
    const guildUnreadSetting = UserGuildSettingsStore.getGuildUnreadSetting(guild_id.guild_id);
    items1 = ["guild", presetName(webPresetFromSettings(guildUnreadSetting, UserGuildSettingsStore.getMessageNotifications(guild_id.guild_id)))];
  };
  const items2 = [, , ];
  ({ guild_id: arr3[0], parent_id: arr3[1] } = guild_id);
  items2[2] = stateFromStoresArray;
  cResult[4] = guild_id.guild_id;
  cResult[5] = guild_id.parent_id;
  cResult[6] = stateFromStoresArray;
  cResult[7] = fn;
  cResult[8] = items2;
}) : ((id) => {
  let tmp2;
  let tmp3;
  _require = id;
  let obj = require("useStateFromStores");
  let items = [UserGuildSettingsStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const obj = notifications_NotificationUtils;
    return obj.filterOverrides(UserGuildSettingsStore.getChannelOverrides(id.guild_id), { ignoreMute: true, ignoreUnreadSetting: false, ignoreNotificationSetting: false });
  });
  let items1 = [UserGuildSettingsStore, ChannelStore];
  const items2 = [, , ];
  ({ guild_id: arr3[0], parent_id: arr3[1] } = id);
  items2[2] = stateFromStoresArray;
  const obj3 = require("useStateFromStores");
  const tmp = _slicedToArray(obj3.useStateFromStoresArray(items1, () => {
    const channel = ChannelStore.getChannel(id.parent_id);
    if (null != channel) {
      let items1;
      if (stateFromStoresArray.includes(channel.id)) {
        const presetName2 = notificationSettingsPresetUtils.presetName;
        notificationSettingsPresetUtils;
        const webPresetFromSettings2 = notificationSettingsPresetUtils.webPresetFromSettings;
        notificationSettingsPresetUtils;
        const unreadSetting = UserGuildSettingsStore.resolveUnreadSetting(channel);
        const items = ["parent", presetName2(webPresetFromSettings2(unreadSetting, UserGuildSettingsStore.resolvedMessageNotifications(channel)))];
        items1 = items;
      }
      return items1;
    }
    const presetName = notificationSettingsPresetUtils.presetName;
    notificationSettingsPresetUtils;
    const webPresetFromSettings = notificationSettingsPresetUtils.webPresetFromSettings;
    notificationSettingsPresetUtils;
    const guildUnreadSetting = UserGuildSettingsStore.getGuildUnreadSetting(id.guild_id);
    items1 = ["guild", presetName(webPresetFromSettings(guildUnreadSetting, UserGuildSettingsStore.getMessageNotifications(id.guild_id)))];
  }, items2), 2);
  const obj2 = { inherited: !stateFromStoresArray.includes(id.id), inheritedFrom: tmp2, inheritedPreset: tmp3 };
  [tmp2, tmp3] = tmp;
  return obj2;
});
let result = size.fileFinishedImporting("modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx");

export const useChannelPresetSettings = tmp2;
export const useChannelPresetInheritance = tmp3;
export const updateChannelPreset = function updateChannelPreset(guild_id, id, arg2) {
  let obj3;
  let obj5;
  let obj6;
  let obj8;
  let tmp2Result;
  let tmp2Result4;
  let tmp2Result5;
  let tmp2Result6;
  const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guild_id, id);
  if (arg2 === notificationSettingsPresetUtils.Presets.ALL_MESSAGES) {
    const obj2 = { guildId: guild_id, channelId: id, settings: obj3, label: NotificationSettingsUtils.NotificationLabels.PresetAll };
    obj3 = { message_notifications: UserNotificationSettings.ALL_MESSAGES, flags: tmp2Result.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ALL_MESSAGES) };
    const updateChannelOverrideSettings3 = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
    NotificationSettingsModalActionCreatorsDefault;
    tmp2Result = notificationSettingsFlagUtils;
    const result = updateChannelOverrideSettings3(obj2);
  } else if (arg2 === notificationSettingsPresetUtils.Presets.HYBRID) {
    const obj4 = { guildId: guild_id, channelId: id, settings: obj5, label: NotificationSettingsUtils.NotificationLabels.PresetHybrid };
    obj5 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: tmp2Result4.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ALL_MESSAGES) };
    const updateChannelOverrideSettings2 = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
    NotificationSettingsModalActionCreatorsDefault;
    tmp2Result4 = notificationSettingsFlagUtils;
    const result1 = updateChannelOverrideSettings2(obj4);
  } else if (arg2 === notificationSettingsPresetUtils.Presets.MENTIONS) {
    const obj = { guildId: guild_id, channelId: id, settings: obj6, label: NotificationSettingsUtils.NotificationLabels.PresetMentions };
    obj6 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: tmp2Result5.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS) };
    const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
    NotificationSettingsModalActionCreatorsDefault;
    tmp2Result5 = notificationSettingsFlagUtils;
    const result2 = updateChannelOverrideSettings(obj);
  } else if (arg2 === notificationSettingsPresetUtils.Presets.NOTHING) {
    const obj7 = { guildId: guild_id, channelId: id, settings: obj8, label: NotificationSettingsUtils.NotificationLabels.PresetNothing };
    obj8 = { message_notifications: UserNotificationSettings.NO_MESSAGES, flags: tmp2Result6.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS) };
    const updateChannelOverrideSettings4 = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
    NotificationSettingsModalActionCreatorsDefault;
    tmp2Result6 = notificationSettingsFlagUtils;
    const result3 = updateChannelOverrideSettings4(obj7);
  }
};
export const updateChannelToGuildDefault = function updateChannelToGuildDefault(guild_id, id) {
  let obj2;
  let obj3;
  const obj = { guildId: guild_id, channelId: id, settings: obj2, label: NotificationSettingsUtils.NotificationLabels.PresetDefault };
  obj2 = { message_notifications: UserNotificationSettings.NULL, flags: obj3.resetChannelUnreadFlags(UserGuildSettingsStore.getChannelIdFlags(guild_id, id)) };
  const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
  NotificationSettingsModalActionCreatorsDefault;
  obj3 = notificationSettingsFlagUtils;
  const result = updateChannelOverrideSettings(obj);
};
export const updateChannelUnreadSetting = function updateChannelUnreadSetting(guild_id, id, ALL_MESSAGES) {
  let NotificationLabel;
  let UNREADS_ONLY_MENTIONS;
  let withChannelUnreadFlags;
  const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guild_id, id);
  const obj = { guildId: guild_id, channelId: id, settings: { flags: withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) }, label: NotificationLabel.unreads(ALL_MESSAGES) };
  const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
  NotificationSettingsModalActionCreatorsDefault;
  withChannelUnreadFlags = notificationSettingsFlagUtils.withChannelUnreadFlags;
  notificationSettingsFlagUtils;
  if (ALL_MESSAGES === UnreadSetting.ALL_MESSAGES) {
    UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
  } else {
    UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
  }
  ({ flags: withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) });
  NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  const result = updateChannelOverrideSettings(obj);
};
export const updateChannelNotificationSetting = function updateChannelNotificationSetting(guildId, channelId, message_notifications) {
  let NotificationLabel;
  const obj = { guildId, channelId, settings: { message_notifications }, label: NotificationLabel.notifications(message_notifications) };
  const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
  NotificationSettingsModalActionCreatorsDefault;
  NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  const result = updateChannelOverrideSettings(obj);
};