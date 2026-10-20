// === Module 16601: IOSNativePhoneIntegrationSetting ===

// Module 16601 (IOSNativePhoneIntegrationSetting)
import util from "util" /* 1128 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import UserSettings from "UserSettings" /* 4776 */;
import SettingsConstants from "SettingsConstants" /* 8280 */;
import MobileNotifSettings from "MobileNotifSettings" /* 16597 */;
import CallKitMetricCollectionExperimentDefault from "CallKitMetricCollectionExperiment" /* 16602 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders_mod from "SettingBuilders" /* 11111 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
function useHasIOSNativePhoneIntegrationSetting(arg0) {

}
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
  if (typeof useHasIOSNativePhoneIntegrationSetting === "function") {
    let enabled = CallKitMetricCollectionExperimentDefault.useConfig({ location: "IOSNativePhoneIntegrationSetting" }).enabled;
    if (enabled) {
      enabled = PlatformUtils.isIOS();
    }
    if (enabled) {
      enabled = !obj3.useIsDeclarativeSettingsUIAvailable("IOSNativePhoneIntegrationSetting");
    }
    return enabled;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const toggle = SettingBuilders.createToggle(obj2);
let SettingBuilders = SettingBuilders_mod;
const obj3 = {};
const merged1 = Object.assign(obj);
obj3.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj3.usePredicate = function usePredicate() {
  if (typeof useHasIOSNativePhoneIntegrationSetting === "function") {
    let enabled = CallKitMetricCollectionExperimentDefault.useConfig({ location: "RedesignIOSNativePhoneIntegrationSetting" }).enabled;
    if (enabled) {
      enabled = PlatformUtils.isIOS();
    }
    if (enabled) {
      enabled = obj3.useIsDeclarativeSettingsUIAvailable("RedesignIOSNativePhoneIntegrationSetting");
    }
    return enabled;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const toggle1 = SettingBuilders.createToggle(obj3);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/IOSNativePhoneIntegrationSetting.tsx");

export default toggle;
export const RedesignIOSNativePhoneIntegrationSetting = toggle1;