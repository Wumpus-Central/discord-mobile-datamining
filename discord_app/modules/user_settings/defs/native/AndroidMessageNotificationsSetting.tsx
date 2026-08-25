// === Module 14893: useAndroidMessageNotificationsSettingValue ===

// Module 14893 (useAndroidMessageNotificationsSettingValue)
import set from "set" /* 2 */;
import set2 from "set" /* 500 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 8235 */;
import _initializeAndroidNotificationSettingsStore from "_initializeAndroidNotificationSettingsStore" /* 14882 */;
import createToggle from "createToggle" /* 10516 */;

function useAndroidMessageNotificationsSettingValue() {
  let flag = callback();
  if (flag == null) {
    flag = false;
  }
  return flag;
}
function useHasAndroidMessageNotificationsSetting() {
  const tmp = callback();
  let isAndroidResult = set2.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != tmp;
  }
  return isAndroidResult;
}
({ useAndroidMessageNotificationsEnabled: obj1, setAndroidMessageNotificationsEnabled } = _initializeAndroidNotificationSettingsStore);
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["zViLy+"]);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: useAndroidMessageNotificationsSettingValue,
  onValueChange: setAndroidMessageNotificationsEnabled,
  usePredicate: useHasAndroidMessageNotificationsSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["zViLy+"]);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: useAndroidMessageNotificationsSettingValue,
  onValueChange: setAndroidMessageNotificationsEnabled,
  usePredicate: useHasAndroidMessageNotificationsSetting
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AndroidMessageNotificationsSetting.tsx");

export default toggle;
export { useAndroidMessageNotificationsSettingValue };
export { useHasAndroidMessageNotificationsSetting };