// === Module 15044: IOSNativePhoneIntegrationSetting ===

// Module 15044 (IOSNativePhoneIntegrationSetting)
import util from "util" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import UserSettings from "UserSettings" /* 2021 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15040 */;
import CallKitMetricCollectionExperimentDefault from "CallKitMetricCollectionExperiment" /* 15045 */;
import SettingBuilders_mod from "SettingBuilders" /* 11006 */;
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