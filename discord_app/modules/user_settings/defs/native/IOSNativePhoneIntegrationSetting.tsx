// discord_app/modules/user_settings/defs/native/IOSNativePhoneIntegrationSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import set2 from "../../../../utils/PlatformUtils.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import apexExperimentDefault from "../../../voice_calls/CallKitMetricCollectionExperiment.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.V6D0wU);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.NativePhoneIntegrationEnabled.useSetting,
  onValueChange: explicitContentFromProto.NativePhoneIntegrationEnabled.updateSetting,
  usePredicate() {
    let enabled = apexExperimentDefault.useConfig({ location: "IOSNativePhoneIntegrationSetting" }).enabled;
    if (enabled) {
      enabled = set2.isIOS();
      const obj2 = set2;
    }
    return enabled;
  },
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.V6D0wU);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.NativePhoneIntegrationEnabled.useSetting,
  onValueChange: explicitContentFromProto.NativePhoneIntegrationEnabled.updateSetting,
  usePredicate() {
    let enabled = apexExperimentDefault.useConfig({ location: "IOSNativePhoneIntegrationSetting" }).enabled;
    if (enabled) {
      enabled = set2.isIOS();
      const obj2 = set2;
    }
    return enabled;
  },
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/IOSNativePhoneIntegrationSetting.tsx");

export default toggle;
