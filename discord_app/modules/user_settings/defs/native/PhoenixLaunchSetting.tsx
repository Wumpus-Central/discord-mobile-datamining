// === Module 17178: PhoenixLaunchSetting ===

// Module 17178 (PhoenixLaunchSetting)
import util from "util" /* 1112 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 7388 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16144 */;
import PhoenixSwitchEntrypointExperimentDefault from "PhoenixSwitchEntrypointExperiment" /* 17179 */;
import PhoenixLaunchState from "PhoenixLaunchState" /* 17180 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.paDGCW);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.DXxeZL);
  },
  parent: null,
  IconComponent: MobilePhoneIcon.MobilePhoneIcon,
  useValue: PhoenixLaunchState.useShouldLaunchPhoenix,
  onValueChange: PhoenixLaunchState.setShouldLaunchPhoenix,
  usePredicate: function usePhoenixLaunchPredicate() {
    let enabled = useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
    const obj2 = PhoenixSwitchEntrypointExperimentDefault;
    const isPhoenixInstalled = PhoenixLaunchState.useIsPhoenixInstalled();
    if (!enabled) {
      enabled = obj2.useConfig({ location: "PhoenixLaunchSetting" }, { autoTrackExposure: false }).enabled;
    }
    if (enabled) {
      enabled = isPhoenixInstalled;
    }
    return enabled;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PhoenixLaunchSetting.tsx");

export default toggle;