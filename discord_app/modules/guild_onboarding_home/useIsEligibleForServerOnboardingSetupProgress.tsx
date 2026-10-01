// discord_app/modules/guild_onboarding_home/useIsEligibleForServerOnboardingSetupProgress.tsx
import Constants from "../../Constants.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import useHasAllocateBoostPermissionDefault from "../premium/powerups/hooks/useHasAllocateBoostPermission.tsx";
import ServerOnboardingSetupProgressCompletionStore from "ServerOnboardingSetupProgressCompletionStore.tsx";
import ServerOnboardingSetupProgressSkipStore from "ServerOnboardingSetupProgressSkipStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_2 = ServerOnboardingSetupProgressCompletionStore.useIsServerOnboardingSetupProgressComplete;
let closure_3 = ServerOnboardingSetupProgressSkipStore.useIsServerOnboardingSetupProgressSkipped;
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
const DAY = DurationsDefault.Millis.DAY;
const result = size.fileFinishedImporting(
  "modules/guild_onboarding_home/useIsEligibleForServerOnboardingSetupProgress.tsx",
);

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
}
