// === Module 12517: notificationSettingsGuildFlagUtils ===

// Module 12517 (notificationSettingsGuildFlagUtils)
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 5080 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6616 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6621 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 9865 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;

const require = globalThis.__r;

require = fn;
const UserNotificationSettings = fn(1085).UserNotificationSettings;
const constants = fn(1095).GuildNotificationSettingsFlags;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsGuildFlagUtils.tsx");

export const updateGuildPreset = function updateGuildPreset(guildId, arg1) {
  const guildFlags = UserGuildSettingsStore.getGuildFlags(guildId);
  if (arg1 === notificationSettingsPresetUtils.Presets.ALL_MESSAGES) {
    const obj2 = { message_notifications: UserNotificationSettings.ALL_MESSAGES, flags: null };
    const obj7 = NotificationSettingsModalActionCreatorsDefault;
    obj2.flags = notificationSettingsFlagUtils.withGuildUnreadFlags(guildFlags, constants.UNREADS_ALL_MESSAGES);
    const result = obj7.updateGuildNotificationSettings(guildId, obj2, NotificationSettingsUtils.NotificationLabels.PresetAll);
    const tmp2Result = notificationSettingsFlagUtils;
  } else if (arg1 === notificationSettingsPresetUtils.Presets.HYBRID) {
    const obj3 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: null };
    const obj4 = NotificationSettingsModalActionCreatorsDefault;
    obj3.flags = notificationSettingsFlagUtils.withGuildUnreadFlags(guildFlags, constants.UNREADS_ALL_MESSAGES);
    const result1 = obj4.updateGuildNotificationSettings(guildId, obj3, NotificationSettingsUtils.NotificationLabels.PresetHybrid);
    const tmp2Result4 = notificationSettingsFlagUtils;
  } else if (arg1 === notificationSettingsPresetUtils.Presets.MENTIONS) {
    const obj5 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: null };
    const obj = NotificationSettingsModalActionCreatorsDefault;
    obj5.flags = notificationSettingsFlagUtils.withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result2 = obj.updateGuildNotificationSettings(guildId, obj5, NotificationSettingsUtils.NotificationLabels.PresetMentions);
    const tmp2Result5 = notificationSettingsFlagUtils;
  } else if (arg1 === notificationSettingsPresetUtils.Presets.NOTHING) {
    const obj6 = { message_notifications: UserNotificationSettings.NO_MESSAGES, flags: null };
    const obj10 = NotificationSettingsModalActionCreatorsDefault;
    obj6.flags = notificationSettingsFlagUtils.withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result3 = obj10.updateGuildNotificationSettings(guildId, obj6, NotificationSettingsUtils.NotificationLabels.PresetNothing);
    const tmp2Result6 = notificationSettingsFlagUtils;
  }
};
export const useGuildPresetSettings = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
    const fn = function o() {
      return UserGuildSettingsStore.getGuildUnreadSetting(closure_0);
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
      return UserGuildSettingsStore.getMessageNotifications(closure_0);
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
  const presetFromSettingsResult = require("notificationSettingsPresetUtils").presetFromSettings(stateFromStores, stateFromStores1);
  cResult[6] = stateFromStores1;
  cResult[7] = stateFromStores;
  cResult[8] = presetFromSettingsResult;
  tmp12 = presetFromSettingsResult;
  const tmpResult4 = require("notificationSettingsPresetUtils");
}) : ((arg0) => {
  _require = arg0;
  const items = [UserGuildSettingsStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => UserGuildSettingsStore.getGuildUnreadSetting(closure_0));
  const obj = require("useStateFromStores");
  const items1 = [UserGuildSettingsStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => UserGuildSettingsStore.getMessageNotifications(closure_0));
  const obj3 = { unread: stateFromStores, notification: stateFromStores1, preset: null };
  const obj2 = require("useStateFromStores");
  obj3.preset = require("notificationSettingsPresetUtils").presetFromSettings(stateFromStores, stateFromStores1);
  return obj3;
});