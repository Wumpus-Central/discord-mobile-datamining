// === Module 17067: AndroidNotificationSoundsSetting ===

// Module 17067 (AndroidNotificationSoundsSetting)
import util from "util" /* 1112 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import _modDef3206 from "module_3206" /* 3206 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import SettingsNotificationUtils from "SettingsNotificationUtils" /* 17047 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17051 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 17045 */;
import SettingBuilders_mod from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

({ useAndroidNotificationSoundsEnabled: c3, setAndroidNotificationSoundsEnabled } = AndroidNotificationSettingsStore);
let obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["1CWknJ"]);
  },
  useValue: function useAndroidNotificationSoundsSettingValue() {
    let flag = React3();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: setAndroidNotificationSoundsEnabled
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
    tmp5 = !tmp2Result2.useIsDeclarativeSettingsUIAvailable("AndroidNotificationSoundsSetting");
  }
  return tmp5;
};
const toggle = SettingBuilders.createToggle(obj2);
let SettingBuilders = SettingBuilders_mod;
const obj3 = {};
const merged1 = Object.assign(obj);
obj3.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(_modDef3206["8klfHo"]);
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
    isDeclarativeSettingsUIAvailable = tmp2Result2.useIsDeclarativeSettingsUIAvailable("RedesignAndroidNotificationSoundsSetting");
  }
  return isDeclarativeSettingsUIAvailable;
};
const toggle1 = SettingBuilders.createToggle(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationSoundsSetting.tsx");

export default toggle;
export const RedesignAndroidNotificationSoundsSetting = toggle1;