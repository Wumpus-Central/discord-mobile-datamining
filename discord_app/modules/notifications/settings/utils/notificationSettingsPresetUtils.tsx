// === Module 4744: notificationSettingsPresetUtils ===

// Module 4744 (notificationSettingsPresetUtils)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import ReadStateConstants from "ReadStateConstants" /* 4742 */;
import _mod4745 from "module_4745" /* 4745 */;
import size from "module_2" /* 2 */;

const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const Presets = { ALL_MESSAGES: "all_messages", MENTIONS: "mentions", NOTHING: "nothing", CUSTOM: "custom" };
const result = size.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsPresetUtils.tsx");

export { Presets };
export const presetFromSettings = function presetFromSettings(unreadSetting, UserGuildSettingsStore) {
  const items = [UserGuildSettingsStore, unreadSetting];
  const match = _mod4745.match(items);
  const items1 = [UserNotificationSettings.ALL_MESSAGES, UnreadSetting.ALL_MESSAGES];
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
  const match = _mod4745.match(tmp4Result);
  const withResult = match.with(obj.ALL_MESSAGES, () => {
    const intl = util.intl;
    return intl.string(util.t.hZrr6k);
  });
  const withResult1 = match.with(obj.ALL_MESSAGES, () => {
    const intl = util.intl;
    return intl.string(util.t.hZrr6k);
  }).with(obj.MENTIONS, () => {
    const intl = util.intl;
    return intl.string(util.t.y59NJm);
  });
  const withResult2 = match.with(obj.ALL_MESSAGES, () => {
    const intl = util.intl;
    return intl.string(util.t.hZrr6k);
  }).with(obj.MENTIONS, () => {
    const intl = util.intl;
    return intl.string(util.t.y59NJm);
  }).with(obj.NOTHING, () => {
    const intl = util.intl;
    return intl.string(util.t["pGn/bJ"]);
  });
  return match.with(obj.ALL_MESSAGES, () => {
    const intl = util.intl;
    return intl.string(util.t.hZrr6k);
  }).with(obj.MENTIONS, () => {
    const intl = util.intl;
    return intl.string(util.t.y59NJm);
  }).with(obj.NOTHING, () => {
    const intl = util.intl;
    return intl.string(util.t["pGn/bJ"]);
  }).with(obj.CUSTOM, () => {
    const intl = util.intl;
    return intl.string(util.t["32yow9"]);
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