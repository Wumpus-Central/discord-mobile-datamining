// === Module 15489: IOSNativePhoneIntegrationSetting ===

// Module 15489 (IOSNativePhoneIntegrationSetting)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import UserSettings from "UserSettings" /* 1935 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import CallKitMetricCollectionExperimentDefault from "CallKitMetricCollectionExperiment" /* 15490 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.V6D0wU);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.NativePhoneIntegrationEnabled.useSetting,
  onValueChange: UserSettings.NativePhoneIntegrationEnabled.updateSetting,
  usePredicate() {
    let enabled = CallKitMetricCollectionExperimentDefault.useConfig({ location: "IOSNativePhoneIntegrationSetting" }).enabled;
    if (enabled) {
      enabled = PlatformUtils.isIOS();
    }
    return enabled;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/IOSNativePhoneIntegrationSetting.tsx");

export default toggle;