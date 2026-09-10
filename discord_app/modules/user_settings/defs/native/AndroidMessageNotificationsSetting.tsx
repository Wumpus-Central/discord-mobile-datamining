// === Module 15573: AndroidMessageNotificationsSetting ===

// Module 15573 (AndroidMessageNotificationsSetting)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 8027 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 15562 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
import size from "module_2" /* 2 */;

function useAndroidMessageNotificationsSettingValue() {
  let flag = React2();
  if (flag == null) {
    flag = false;
  }
  return flag;
}
function useHasAndroidMessageNotificationsSetting() {
  const tmp = React2();
  let isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != tmp;
  }
  return isAndroidResult;
}
({ useAndroidMessageNotificationsEnabled: c2, setAndroidMessageNotificationsEnabled } = AndroidNotificationSettingsStore);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["zViLy+"]);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: useAndroidMessageNotificationsSettingValue,
  onValueChange: setAndroidMessageNotificationsEnabled,
  usePredicate: useHasAndroidMessageNotificationsSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidMessageNotificationsSetting.tsx");

export default toggle;
export { useAndroidMessageNotificationsSettingValue };
export { useHasAndroidMessageNotificationsSetting };