// === Module 17719: IOSNativePhoneIntegrationSetting ===

// Module 17719 (IOSNativePhoneIntegrationSetting)
import util from "util" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import UserSettings from "UserSettings" /* 4966 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17715 */;
import CallKitMetricCollectionExperimentDefault from "CallKitMetricCollectionExperiment" /* 17720 */;
import SettingBuilders_mod from "SettingBuilders" /* 11728 */;
import size from "module_2" /* 2 */;

let obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.V6D0wU);
  },
  useValue: UserSettings.NativePhoneIntegrationEnabled.useSetting,
  onValueChange: UserSettings.NativePhoneIntegrationEnabled.updateSetting
};
let SettingBuilders = SettingBuilders_mod;
let obj2 = {};
const merged = Object.assign(obj);
obj2.parent = SettingsConstants.MobileUserSettings.NOTIFICATIONS;
obj2.usePredicate = function usePredicate() {
  let enabled = CallKitMetricCollectionExperimentDefault.useConfig({ location: "IOSNativePhoneIntegrationSetting" }).enabled;
  if (enabled) {
    enabled = PlatformUtils.isIOS();
  }
  if (enabled) {
    enabled = !obj3.useIsDeclarativeSettingsUIAvailable("IOSNativePhoneIntegrationSetting");
  }
  return enabled;
};
const toggle = SettingBuilders.createToggle(obj2);
let SettingBuilders = SettingBuilders_mod;
const obj3 = {};
const merged1 = Object.assign(obj);
obj3.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj3.usePredicate = function usePredicate() {
  let enabled = CallKitMetricCollectionExperimentDefault.useConfig({ location: "RedesignIOSNativePhoneIntegrationSetting" }).enabled;
  if (enabled) {
    enabled = PlatformUtils.isIOS();
  }
  if (enabled) {
    enabled = obj3.useIsDeclarativeSettingsUIAvailable("RedesignIOSNativePhoneIntegrationSetting");
  }
  return enabled;
};
const toggle1 = SettingBuilders.createToggle(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/IOSNativePhoneIntegrationSetting.tsx");

export default toggle;
export const RedesignIOSNativePhoneIntegrationSetting = toggle1;