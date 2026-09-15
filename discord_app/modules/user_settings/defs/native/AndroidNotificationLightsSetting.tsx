// === Module 15590: AndroidNotificationLightsSetting ===

// Module 15590 (AndroidNotificationLightsSetting)
import util from "util" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import SettingsConstants from "SettingsConstants" /* 8082 */;
import SettingsNotificationUtils from "SettingsNotificationUtils" /* 15579 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15583 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 15577 */;
import SettingBuilders_mod from "SettingBuilders" /* 11606 */;
import size from "module_2" /* 2 */;

({ useAndroidNotificationLightsEnabled: c2, setAndroidNotificationLightsEnabled } = AndroidNotificationSettingsStore);
let obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.E3xHUp);
  },
  useValue: function useAndroidNotificationLightsSettingValue() {
    let flag = React2();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: setAndroidNotificationLightsEnabled
};
let SettingBuilders = SettingBuilders_mod;
const obj2 = {};
const merged = Object.assign(obj);
obj2.parent = SettingsConstants.MobileUserSettings.NOTIFICATIONS;
obj2.usePredicate = function usePredicate() {
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
  if (tmp5) {
    tmp5 = !tmp2Result2.useIsDeclarativeSettingsUIAvailable("AndroidNotificationLightsSetting");
  }
  return tmp5;
};
const toggle = SettingBuilders.createToggle(obj2);
let SettingBuilders = SettingBuilders_mod;
const obj3 = {};
const merged1 = Object.assign(obj);
obj3.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj3.usePredicate = function usePredicate() {
  const tmp = React2();
  const isIOSResult = PlatformUtils.isIOS();
  let isDeclarativeSettingsUIAvailable = !isIOSResult;
  if (!isIOSResult) {
    isDeclarativeSettingsUIAvailable = !SettingsNotificationUtils.hasAndroidNotificationChannels();
    const tmp2Result = SettingsNotificationUtils;
  }
  if (isDeclarativeSettingsUIAvailable) {
    isDeclarativeSettingsUIAvailable = null != tmp;
  }
  if (isDeclarativeSettingsUIAvailable) {
    isDeclarativeSettingsUIAvailable = tmp2Result2.useIsDeclarativeSettingsUIAvailable("RedesignAndroidNotificationLightsSetting");
  }
  return isDeclarativeSettingsUIAvailable;
};
const toggle1 = SettingBuilders.createToggle(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationLightsSetting.tsx");

export default toggle;
export const RedesignAndroidNotificationLightsSetting = toggle1;