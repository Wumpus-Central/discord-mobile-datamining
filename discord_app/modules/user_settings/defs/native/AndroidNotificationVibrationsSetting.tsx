// === Module 15596: AndroidNotificationVibrationsSetting ===

// Module 15596 (AndroidNotificationVibrationsSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import SettingsNotificationUtils from "SettingsNotificationUtils" /* 15584 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15588 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 15582 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders_mod from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

({ useAndroidNotificationVibrationsEnabled: c2, setAndroidNotificationVibrationsEnabled } = AndroidNotificationSettingsStore);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasAndroidNotificationVibrationsSetting() {
  const cResult = c.c(2);
  const tmp4 = React2();
  if (cResult[0] !== tmp4) {
    const isIOSResult = PlatformUtils.isIOS();
    let tmp7 = !isIOSResult;
    if (!isIOSResult) {
      tmp7 = !SettingsNotificationUtils.hasAndroidNotificationChannels();
      const tmpResult2 = SettingsNotificationUtils;
    }
    if (tmp7) {
      tmp7 = null != tmp4;
    }
    cResult[0] = tmp4;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
    const tmpResult = PlatformUtils;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function useHasAndroidNotificationVibrationsSetting() {
  const tmp = React2();
  const isIOSResult = PlatformUtils.isIOS();
  let tmp5 = !isIOSResult;
  if (!isIOSResult) {
    tmp5 = !SettingsNotificationUtils.hasAndroidNotificationChannels();
    const tmp2Result = SettingsNotificationUtils;
  }
  if (tmp5) {
    tmp5 = null != tmp;
  }
  return tmp5;
});
const obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["lFg/O1"]);
  },
  useValue: null,
  onValueChange: null
};
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
obj.useValue = function useAndroidNotificationVibrationsSettingValue() {
  let flag = React2();
  if (flag == null) {
    flag = false;
  }
  return flag;
};
obj.onValueChange = setAndroidNotificationVibrationsEnabled;
let SettingBuilders = SettingBuilders_mod;
const obj2 = {};
const merged = Object.assign(obj);
obj2.parent = SettingsConstants.MobileUserSettings.NOTIFICATIONS;
obj2.usePredicate = function usePredicate() {
  let tmp = closure_3();
  if (tmp) {
    tmp = !obj.useIsDeclarativeSettingsUIAvailable("AndroidNotificationVibrationsSetting");
  }
  return tmp;
};
const toggle = SettingBuilders.createToggle(obj2);
let SettingBuilders = SettingBuilders_mod;
const obj3 = {};
const merged1 = Object.assign(obj);
obj3.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj3.usePredicate = function usePredicate() {
  let isDeclarativeSettingsUIAvailable = closure_3();
  if (isDeclarativeSettingsUIAvailable) {
    isDeclarativeSettingsUIAvailable = obj.useIsDeclarativeSettingsUIAvailable("RedesignAndroidNotificationVibrationsSetting");
  }
  return isDeclarativeSettingsUIAvailable;
};
const toggle1 = SettingBuilders.createToggle(obj3);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationVibrationsSetting.tsx");

export default toggle;
export const RedesignAndroidNotificationVibrationsSetting = toggle1;