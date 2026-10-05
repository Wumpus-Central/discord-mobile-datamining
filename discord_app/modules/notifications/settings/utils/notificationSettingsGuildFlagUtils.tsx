// === Module 12502: notificationSettingsGuildFlagUtils ===

// Module 12502 (notificationSettingsGuildFlagUtils)
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 5074 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6609 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6614 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 9852 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const UserNotificationSettings = Constants.UserNotificationSettings;
const constants = UserSettingsConstants.GuildNotificationSettingsFlags;
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
    const fn = function o() {
      return UserGuildSettingsStore.getGuildUnreadSetting(closure_0);
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
      return UserGuildSettingsStore.getMessageNotifications(closure_0);
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
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.getGuildUnreadSetting(closure_0));
  const items1 = [UserGuildSettingsStore];
  const obj2 = require("useStateFromStores");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => UserGuildSettingsStore.getMessageNotifications(closure_0));
  const obj3 = { unread: stateFromStores, notification: stateFromStores1, preset: obj4.presetFromSettings(stateFromStores, stateFromStores1) };
  obj4 = require("notificationSettingsPresetUtils");
  return obj3;
});
let result = size.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsGuildFlagUtils.tsx");

export const updateGuildPreset = function updateGuildPreset(guildId, arg1) {
  let tmp2Result;
  let tmp2Result4;
  let tmp2Result5;
  let tmp2Result6;
  const guildFlags = UserGuildSettingsStore.getGuildFlags(guildId);
  if (arg1 === notificationSettingsPresetUtils.Presets.ALL_MESSAGES) {
    const obj2 = { message_notifications: UserNotificationSettings.ALL_MESSAGES, flags: tmp2Result.withGuildUnreadFlags(guildFlags, constants.UNREADS_ALL_MESSAGES) };
    const updateGuildNotificationSettings3 = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
    NotificationSettingsModalActionCreatorsDefault;
    tmp2Result = notificationSettingsFlagUtils;
    const result = updateGuildNotificationSettings3(guildId, obj2, NotificationSettingsUtils.NotificationLabels.PresetAll);
  } else if (arg1 === notificationSettingsPresetUtils.Presets.HYBRID) {
    const obj3 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: tmp2Result4.withGuildUnreadFlags(guildFlags, constants.UNREADS_ALL_MESSAGES) };
    const updateGuildNotificationSettings2 = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
    NotificationSettingsModalActionCreatorsDefault;
    tmp2Result4 = notificationSettingsFlagUtils;
    const result1 = updateGuildNotificationSettings2(guildId, obj3, NotificationSettingsUtils.NotificationLabels.PresetHybrid);
  } else if (arg1 === notificationSettingsPresetUtils.Presets.MENTIONS) {
    const obj = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: tmp2Result5.withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS) };
    const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
    NotificationSettingsModalActionCreatorsDefault;
    tmp2Result5 = notificationSettingsFlagUtils;
    const result2 = updateGuildNotificationSettings(guildId, obj, NotificationSettingsUtils.NotificationLabels.PresetMentions);
  } else if (arg1 === notificationSettingsPresetUtils.Presets.NOTHING) {
    const obj4 = { message_notifications: UserNotificationSettings.NO_MESSAGES, flags: tmp2Result6.withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS) };
    const updateGuildNotificationSettings4 = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
    NotificationSettingsModalActionCreatorsDefault;
    tmp2Result6 = notificationSettingsFlagUtils;
    const result3 = updateGuildNotificationSettings4(guildId, obj4, NotificationSettingsUtils.NotificationLabels.PresetNothing);
  }
};
export const useGuildPresetSettings = tmp2;