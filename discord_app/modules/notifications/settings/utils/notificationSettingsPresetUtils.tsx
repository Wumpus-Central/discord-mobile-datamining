// === Module 4592: Presets ===

// Module 4592 (Presets)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import ReadStateTypes from "ReadStateTypes" /* 4590 */;
import t from "t" /* 4593 */;

const UserNotificationSettings = ME.UserNotificationSettings;
const UnreadSetting = ReadStateTypes.UnreadSetting;
const obj = { ALL_MESSAGES: "all_messages", MENTIONS: "mentions", NOTHING: "nothing", CUSTOM: "custom" };
const result = set.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsPresetUtils.tsx");

export const Presets = obj;
export const presetFromSettings = function presetFromSettings(unreadSetting, messageNotifications) {
  const items = [messageNotifications, unreadSetting];
  const match = t.match(items);
  const items1 = [UserNotificationSettings.ALL_MESSAGES, UnreadSetting.ALL_MESSAGES];
  const str = t;
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
  const match = t.match(tmp4Result);
  const str = t;
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