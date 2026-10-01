// === Module 16112: useIsEligibleForServerOnboardingSetupProgress ===

// Module 16112 (useIsEligibleForServerOnboardingSetupProgress)
import Constants from "Constants" /* 1074 */;
import DurationsDefault from "Durations" /* 1091 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12220 */;
import ServerOnboardingSetupProgressCompletionStore from "ServerOnboardingSetupProgressCompletionStore" /* 16113 */;
import ServerOnboardingSetupProgressSkipStore from "ServerOnboardingSetupProgressSkipStore" /* 16114 */;
import size from "module_2" /* 2 */;

let closure_2 = ServerOnboardingSetupProgressCompletionStore.useIsServerOnboardingSetupProgressComplete;
let closure_3 = ServerOnboardingSetupProgressSkipStore.useIsServerOnboardingSetupProgressSkipped;
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
const DAY = DurationsDefault.Millis.DAY;
const result = size.fileFinishedImporting("modules/guild_onboarding_home/useIsEligibleForServerOnboardingSetupProgress.tsx");

export default function useIsEligibleForServerOnboardingSetupProgress(arg0) {
  let tmp = arg0;
  useHasAllocateBoostPermissionDefault(arg0);
  let tmp4 = arg0;
  if (arg0 == null) {
    tmp4 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  closure_3(tmp4);
  if (tmp == null) {
    tmp = EMPTY_STRING_SNOWFLAKE_ID;
  }
  closure_2(tmp);
  return false;
};