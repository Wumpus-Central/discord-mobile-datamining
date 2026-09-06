// === Module 10157: notificationSettingsPresetOptionUtils ===

// Module 10157 (notificationSettingsPresetOptionUtils)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import ReadStateConstants from "ReadStateConstants" /* 4742 */;
import size from "module_2" /* 2 */;

const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const result = size.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsPresetOptionUtils.tsx");

export const getPushNotificationSelectOptions = function getPushNotificationSelectOptions() {
  let obj = { label: null, value: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["HVah/3"]);
  obj.value = UserNotificationSettings.ALL_MESSAGES;
  const items = [obj, , ];
  obj = { label: null, value: null };
  const intl2 = util.intl;
  obj.label = intl2.string(util.t["tu+ZWJ"]);
  obj.value = UserNotificationSettings.ONLY_MENTIONS;
  items[1] = obj;
  obj = { label: null, value: null };
  const intl3 = util.intl;
  obj.label = intl3.string(util.t.X4wWUi);
  obj.value = UserNotificationSettings.NO_MESSAGES;
  items[2] = obj;
  return items;
};
export const getUnreadSelectOptions = function getUnreadSelectOptions(notificationSetting) {
  let obj = { label: null, value: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["HVah/3"]);
  obj.value = UnreadSetting.ALL_MESSAGES;
  const items = [obj, ];
  obj = { value: UnreadSetting.ONLY_MENTIONS, label: null, disabled: null };
  const intl2 = util.intl;
  obj.label = intl2.string(util.t["tu+ZWJ"]);
  notificationSetting = undefined;
  if (notificationSetting != null) {
    notificationSetting = notificationSetting.notificationSetting;
  }
  obj.disabled = notificationSetting === UserNotificationSettings.ALL_MESSAGES;
  items[1] = obj;
  return items;
};