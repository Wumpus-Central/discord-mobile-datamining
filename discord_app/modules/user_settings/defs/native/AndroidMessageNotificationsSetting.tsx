// === Module 15578: AndroidMessageNotificationsSetting ===

// Module 15578 (AndroidMessageNotificationsSetting)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1150 */;
import _modDef2722 from "module_2722" /* 2722 */;
import SettingsConstants from "SettingsConstants" /* 8079 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15572 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 15566 */;
import SettingBuilders from "SettingBuilders" /* 11601 */;
import size from "module_2" /* 2 */;

function useAndroidMessageNotificationsSettingValue() {
  let flag = React3();
  if (flag == null) {
    flag = false;
  }
  return flag;
}
({ useAndroidMessageNotificationsEnabled: c3, setAndroidMessageNotificationsEnabled } = AndroidNotificationSettingsStore);
let obj = { useValue: useAndroidMessageNotificationsSettingValue, onValueChange: setAndroidMessageNotificationsEnabled };
obj = {};
const merged = Object.assign(obj);
obj.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(util.t["zViLy+"]);
};
obj.parent = SettingsConstants.MobileUserSettings.NOTIFICATIONS;
obj.usePredicate = function usePredicate() {
  const tmp = React3();
  let isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != tmp;
  }
  if (isAndroidResult) {
    isAndroidResult = !tmp2Result.useIsDeclarativeSettingsUIAvailable("AndroidMessageNotificationsSetting");
  }
  return isAndroidResult;
};
const toggle = SettingBuilders.createToggle(obj);
obj = {};
const merged1 = Object.assign(obj);
obj.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(_modDef2722.odJXYJ);
};
obj.useDescription = function useDescription() {
  const intl = util.intl;
  return intl.string(_modDef2722["+jwUmI"]);
};
obj.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj.usePredicate = function usePredicate() {
  const tmp = React3();
  let isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != tmp;
  }
  if (isAndroidResult) {
    isAndroidResult = tmp2Result.useIsDeclarativeSettingsUIAvailable("RedesignAndroidMessageNotificationsSetting");
  }
  return isAndroidResult;
};
const toggle1 = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidMessageNotificationsSetting.tsx");

export default toggle;
export { useAndroidMessageNotificationsSettingValue };
export const useHasAndroidMessageNotificationsSetting = function useHasAndroidMessageNotificationsSetting() {
  const tmp = React3();
  let isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != tmp;
  }
  return isAndroidResult;
};
export const RedesignAndroidMessageNotificationsSetting = toggle1;