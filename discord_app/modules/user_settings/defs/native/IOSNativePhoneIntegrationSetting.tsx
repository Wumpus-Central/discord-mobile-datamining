// === Module 15021: toggle ===

// Module 15021 (toggle)
import set from "set" /* 2 */;
import set2 from "set" /* 500 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4135 */;
import MobileUserSettings from "MobileUserSettings" /* 7830 */;
import apexExperimentDefault from "apexExperiment" /* 15022 */;
import createToggle from "createToggle" /* 11006 */;

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
  }
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
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/IOSNativePhoneIntegrationSetting.tsx");

export default toggle;