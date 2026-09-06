// discord_app/modules/user_settings/defs/native/IOSNativePhoneIntegrationSetting.tsx
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import CallKitMetricCollectionExperimentDefault from "../../../voice_calls/CallKitMetricCollectionExperiment.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.V6D0wU);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.NativePhoneIntegrationEnabled.useSetting,
  onValueChange: UserSettings.NativePhoneIntegrationEnabled.updateSetting,
  usePredicate() {
    let enabled = CallKitMetricCollectionExperimentDefault.useConfig({
      location: "IOSNativePhoneIntegrationSetting",
    }).enabled;
    if (enabled) {
      enabled = PlatformUtils.isIOS();
    }
    return enabled;
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/IOSNativePhoneIntegrationSetting.tsx");

export default toggle;
