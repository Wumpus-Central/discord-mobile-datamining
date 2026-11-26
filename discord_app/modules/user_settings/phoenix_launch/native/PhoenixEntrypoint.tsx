// === Module 17379: PhoenixEntrypoint ===

// Module 17379 (PhoenixEntrypoint)
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16349 */;
import PhoenixLaunchState from "PhoenixLaunchState" /* 17380 */;
import PhoenixRolloutExperimentDefault from "PhoenixRolloutExperiment" /* 17383 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/phoenix_launch/native/PhoenixEntrypoint.tsx");

export function useIsPhoenixEntrypointVisible(PhoenixSetting, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let enabled = useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  const isPhoenixInstalled = PhoenixLaunchState.useIsPhoenixInstalled();
  const tmp2 = null != PhoenixRolloutExperimentDefault.useConfig({ location: PhoenixSetting }, { autoTrackExposure: false }).forcedClient;
  const obj4 = { location: PhoenixSetting };
  if (flag) {
    flag = !enabled;
  }
  if (flag) {
    flag = isPhoenixInstalled;
  }
  if (flag) {
    flag = !tmp2;
  }
  let tmp3 = !tmp2;
  if (!tmp2) {
    tmp3 = isPhoenixInstalled;
  }
  if (tmp3) {
    if (!enabled) {
      enabled = obj5.useConfig(obj6, { autoTrackExposure: flag }).enabled;
    }
    tmp3 = enabled;
  }
  return tmp3;
}