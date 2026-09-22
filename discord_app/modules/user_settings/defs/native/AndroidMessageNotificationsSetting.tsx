// === Module 15780: AndroidMessageNotificationsSetting ===

// Module 15780 (AndroidMessageNotificationsSetting)
import util from "util" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import _modDef2808 from "module_2808" /* 2808 */;
import SettingsConstants from "SettingsConstants" /* 8237 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15774 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 15768 */;
import SettingBuilders_mod from "SettingBuilders" /* 11729 */;
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
let SettingBuilders = SettingBuilders_mod;
const obj2 = {};
const merged = Object.assign(obj);
obj2.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(util.t["zViLy+"]);
};
obj2.parent = SettingsConstants.MobileUserSettings.NOTIFICATIONS;
obj2.usePredicate = function usePredicate() {
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
const toggle = SettingBuilders.createToggle(obj2);
let SettingBuilders = SettingBuilders_mod;
const obj3 = {};
const merged1 = Object.assign(obj);
obj3.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(_modDef2808.odJXYJ);
};
obj3.useDescription = function useDescription() {
  const intl = util.intl;
  return intl.string(_modDef2808["+jwUmI"]);
};
obj3.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj3.usePredicate = function usePredicate() {
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
const toggle1 = SettingBuilders.createToggle(obj3);
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