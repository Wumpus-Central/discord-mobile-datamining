// discord_app/modules/user_settings/defs/native/IOSNativePhoneIntegrationSetting.tsx
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import MobileNotifSettings from "../../notifications/native/codegen/MobileNotifSettings.tsx";
import CallKitMetricCollectionExperimentDefault from "../../../voice_calls/CallKitMetricCollectionExperiment.tsx";
import SettingBuilders_mod from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.V6D0wU);
  },
  useValue: UserSettings.NativePhoneIntegrationEnabled.useSetting,
  onValueChange: UserSettings.NativePhoneIntegrationEnabled.updateSetting,
};
let SettingBuilders = SettingBuilders_mod;
let obj2 = {};
const merged = Object.assign(obj);
obj2.parent = SettingsConstants.MobileUserSettings.NOTIFICATIONS;
obj2.usePredicate = function usePredicate() {
  let enabled = CallKitMetricCollectionExperimentDefault.useConfig({
    location: "IOSNativePhoneIntegrationSetting",
  }).enabled;
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
  let enabled = CallKitMetricCollectionExperimentDefault.useConfig({
    location: "RedesignIOSNativePhoneIntegrationSetting",
  }).enabled;
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
