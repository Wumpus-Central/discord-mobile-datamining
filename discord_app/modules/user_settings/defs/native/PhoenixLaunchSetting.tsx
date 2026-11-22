// === Module 17176: PhoenixLaunchSetting ===

// Module 17176 (PhoenixLaunchSetting)
import util from "util" /* 1112 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 7388 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16142 */;
import PhoenixSwitchEntrypointExperimentDefault from "PhoenixSwitchEntrypointExperiment" /* 17177 */;
import PhoenixRolloutExperimentDefault from "PhoenixRolloutExperiment" /* 17178 */;
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
    const tmp = null != PhoenixRolloutExperimentDefault.useConfig({ location: "PhoenixLaunchSetting" }, { autoTrackExposure: false }).forcedClient;
    let tmp3 = !tmp;
    const isPhoenixInstalled = PhoenixLaunchState.useIsPhoenixInstalled();
    if (!tmp) {
      if (!enabled) {
        enabled = obj2.useConfig({ location: "PhoenixLaunchSetting" }, { autoTrackExposure: false }).enabled;
      }
      tmp3 = enabled;
    }
    if (tmp3) {
      tmp3 = isPhoenixInstalled;
    }
    return tmp3;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PhoenixLaunchSetting.tsx");

export default toggle;