// discord_app/modules/notifications/settings/utils/notificationSettingsPresetUtils.tsx
import { UserNotificationSettings } from "ME";
import { UnreadSetting } from "ReadStateTypes";
import { t } from "../../../../../_runtime/04484_t.js";

const obj = { ALL_MESSAGES: "all_messages", MENTIONS: "mentions", NOTHING: "nothing", CUSTOM: "custom" };
const result = require("t").fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsPresetUtils.tsx");

export const Presets = obj;
export const presetFromSettings = function presetFromSettings(unreadSetting, messageNotifications) {
  const items = [messageNotifications, unreadSetting];
  const match = t /* t */.match(items);
  const items1 = [UserNotificationSettings.ALL_MESSAGES, UnreadSetting.ALL_MESSAGES];
  const str = t /* t */;
  const items2 = [UserNotificationSettings.ONLY_MENTIONS, UnreadSetting.UNSET];
  const withResult = match.with(items1, () => constants.ALL_MESSAGES);
  const items3 = [UserNotificationSettings.ONLY_MENTIONS, UnreadSetting.ONLY_MENTIONS];
  const withResult1 = match.with(items1, () => constants.ALL_MESSAGES).with(items2, () => constants.MENTIONS);
  const items4 = [UserNotificationSettings.NO_MESSAGES, UnreadSetting.UNSET];
  const withResult2 = match.with(items1, () => constants.ALL_MESSAGES).with(items2, () => constants.MENTIONS).with(items3, () => constants.MENTIONS);
  const items5 = [UserNotificationSettings.NO_MESSAGES, UnreadSetting.ONLY_MENTIONS];
  const withResult3 = match.with(items1, () => constants.ALL_MESSAGES).with(items2, () => constants.MENTIONS).with(items3, () => constants.MENTIONS).with(items4, () => constants.NOTHING);
  return match.with(items1, () => constants.ALL_MESSAGES).with(items2, () => constants.MENTIONS).with(items3, () => constants.MENTIONS).with(items4, () => constants.NOTHING).with(items5, () => constants.NOTHING).otherwise(() => constants.CUSTOM);
};
export const presetName = function presetName(tmp4Result) {
  const match = t /* t */.match(tmp4Result);
  const str = t /* t */;
  const withResult = match.with(obj.ALL_MESSAGES, () => {
    const intl = callback(1236).intl;
    return intl.string(callback(1236).t.hZrr6k);
  });
  const withResult1 = match.with(obj.ALL_MESSAGES, () => {
    const intl = callback(1236).intl;
    return intl.string(callback(1236).t.hZrr6k);
  }).with(obj.MENTIONS, () => {
    const intl = callback(1236).intl;
    return intl.string(callback(1236).t.y59NJm);
  });
  const withResult2 = match.with(obj.ALL_MESSAGES, () => {
    const intl = callback(1236).intl;
    return intl.string(callback(1236).t.hZrr6k);
  }).with(obj.MENTIONS, () => {
    const intl = callback(1236).intl;
    return intl.string(callback(1236).t.y59NJm);
  }).with(obj.NOTHING, () => {
    const intl = callback(1236).intl;
    return intl.string(callback(1236).t["pGn/bJ"]);
  });
  return match.with(obj.ALL_MESSAGES, () => {
    const intl = callback(1236).intl;
    return intl.string(callback(1236).t.hZrr6k);
  }).with(obj.MENTIONS, () => {
    const intl = callback(1236).intl;
    return intl.string(callback(1236).t.y59NJm);
  }).with(obj.NOTHING, () => {
    const intl = callback(1236).intl;
    return intl.string(callback(1236).t["pGn/bJ"]);
  }).with(obj.CUSTOM, () => {
    const intl = callback(1236).intl;
    return intl.string(callback(1236).t["32yow9"]);
  }).exhaustive();
};
export const arePresetSettingsUnset = function arePresetSettingsUnset(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 !== UnreadSetting.UNSET;
  }
  if (!tmp) {
    let tmp4 = null != arg1;
    if (tmp4) {
      tmp4 = arg1 !== UserNotificationSettings.NULL;
    }
    tmp = tmp4;
  }
  return !tmp;
};