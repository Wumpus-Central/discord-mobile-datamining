// === Module 10397: notificationSettingsPresetOptionUtils ===

// Module 10397 (notificationSettingsPresetOptionUtils)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import ReadStateConstants from "ReadStateConstants" /* 4904 */;
import size from "module_2" /* 2 */;

const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const result = size.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsPresetOptionUtils.tsx");

export const getPushNotificationSelectOptions = function getPushNotificationSelectOptions() {
  const obj = { label: null, value: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["HVah/3"]);
  obj.value = UserNotificationSettings.ALL_MESSAGES;
  const items = [obj, , ];
  const obj2 = { label: null, value: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t["tu+ZWJ"]);
  obj2.value = UserNotificationSettings.ONLY_MENTIONS;
  items[1] = obj2;
  const obj3 = { label: null, value: null };
  const intl3 = util.intl;
  obj3.label = intl3.string(util.t.X4wWUi);
  obj3.value = UserNotificationSettings.NO_MESSAGES;
  items[2] = obj3;
  return items;
};
export const getUnreadSelectOptions = function getUnreadSelectOptions(notificationSetting) {
  const obj = { label: null, value: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["HVah/3"]);
  obj.value = UnreadSetting.ALL_MESSAGES;
  const items = [obj, ];
  const obj2 = { value: UnreadSetting.ONLY_MENTIONS, label: null, disabled: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t["tu+ZWJ"]);
  notificationSetting = undefined;
  if (notificationSetting != null) {
    notificationSetting = notificationSetting.notificationSetting;
  }
  obj2.disabled = notificationSetting === UserNotificationSettings.ALL_MESSAGES;
  items[1] = obj2;
  return items;
};