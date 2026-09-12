// === Module 15580: AndroidNotificationVibrationsSetting ===

// Module 15580 (AndroidNotificationVibrationsSetting)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1150 */;
import SettingsConstants from "SettingsConstants" /* 8079 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14538 */;
import SettingsNotificationUtils from "SettingsNotificationUtils" /* 15568 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15572 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 15566 */;
import SettingBuilders from "SettingBuilders" /* 11601 */;
import size from "module_2" /* 2 */;

({ useAndroidNotificationVibrationsEnabled: c2, setAndroidNotificationVibrationsEnabled } = AndroidNotificationSettingsStore);
let obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["lFg/O1"]);
  },
  useValue: function useAndroidNotificationVibrationsSettingValue() {
    let flag = React2();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: setAndroidNotificationVibrationsEnabled
};
obj = {};
const merged = Object.assign(obj);
obj.parent = SettingsConstants.MobileUserSettings.NOTIFICATIONS;
obj.usePredicate = function usePredicate() {
  const tmp = React2();
  const isIOSResult = PlatformUtils.isIOS();
  let tmp5 = !isIOSResult;
  if (!isIOSResult) {
    let tmp2Result = SettingsNotificationUtils;
    tmp5 = !tmp2Result.hasAndroidNotificationChannels();
  }
  if (tmp5) {
    tmp5 = null != tmp;
  }
  tmp2Result = notifications_NotificationSettingsUtils;
  if (tmp5) {
    tmp5 = !tmp2Result.useIsDeclarativeSettingsUIAvailable("AndroidNotificationVibrationsSetting");
  }
  return tmp5;
};
const toggle = SettingBuilders.createToggle(obj);
obj = {};
const merged1 = Object.assign(obj);
obj.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj.usePredicate = function usePredicate() {
  const tmp = React2();
  const isIOSResult = PlatformUtils.isIOS();
  let isDeclarativeSettingsUIAvailable = !isIOSResult;
  if (!isIOSResult) {
    let tmp2Result = SettingsNotificationUtils;
    isDeclarativeSettingsUIAvailable = !tmp2Result.hasAndroidNotificationChannels();
  }
  if (isDeclarativeSettingsUIAvailable) {
    isDeclarativeSettingsUIAvailable = null != tmp;
  }
  tmp2Result = notifications_NotificationSettingsUtils;
  if (isDeclarativeSettingsUIAvailable) {
    isDeclarativeSettingsUIAvailable = tmp2Result.useIsDeclarativeSettingsUIAvailable("RedesignAndroidNotificationVibrationsSetting");
  }
  return isDeclarativeSettingsUIAvailable;
};
const toggle1 = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationVibrationsSetting.tsx");

export default toggle;
export const RedesignAndroidNotificationVibrationsSetting = toggle1;