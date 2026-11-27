// === Module 17123: AndroidNotificationLightsSetting ===

// Module 17123 (AndroidNotificationLightsSetting)
import util from "util" /* 1112 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import _modDef3207 from "module_3207" /* 3207 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import SettingsNotificationUtils from "SettingsNotificationUtils" /* 17105 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17109 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 17103 */;
import SettingBuilders_mod from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

({ useAndroidNotificationLightsEnabled: c3, setAndroidNotificationLightsEnabled } = AndroidNotificationSettingsStore);
let obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.E3xHUp);
  },
  useValue: function useAndroidNotificationLightsSettingValue() {
    let flag = React3();
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
  const tmp = React3();
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
obj3.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(_modDef3207.ndEta2);
};
obj3.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj3.usePredicate = function usePredicate() {
  const tmp = React3();
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