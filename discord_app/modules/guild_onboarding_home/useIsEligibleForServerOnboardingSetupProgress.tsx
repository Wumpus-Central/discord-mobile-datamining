// === Module 16230: useIsEligibleForServerOnboardingSetupProgress ===

// Module 16230 (useIsEligibleForServerOnboardingSetupProgress)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12185 */;
import ServerOnboardingSetupProgressCompletionStore from "ServerOnboardingSetupProgressCompletionStore" /* 16231 */;
import ServerOnboardingSetupProgressSkipStore from "ServerOnboardingSetupProgressSkipStore" /* 16232 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = ServerOnboardingSetupProgressCompletionStore.useIsServerOnboardingSetupProgressComplete;
let closure_4 = ServerOnboardingSetupProgressSkipStore.useIsServerOnboardingSetupProgressSkipped;
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
const DAY = DurationsDefault.Millis.DAY;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const obj = react;
  const cResult = obj.c(5);
  let tmp4 = arg0;
  const tmp2 = useHasAllocateBoostPermissionDefault(arg0);
  if (arg0 == null) {
    tmp4 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const tmp3Result = closure_4(tmp4);
  let tmp7 = arg0;
  if (arg0 == null) {
    tmp7 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const tmp6Result = closure_3(tmp7);
  if (cResult[0] === true === tmp2) {
    if (cResult[1] === arg0) {
      if (cResult[2] === tmp6Result) {
        let flag;
        if (cResult[3] === tmp3Result) {
          flag = cResult[4];
        }
        return flag;
      }
    }
  }
  cResult[0] = true === tmp2;
  cResult[1] = arg0;
  cResult[2] = tmp6Result;
  cResult[3] = tmp3Result;
  cResult[4] = false;
  flag = false;
}) : ((arg0) => {
  let tmp = arg0;
  useHasAllocateBoostPermissionDefault(arg0);
  let tmp4 = arg0;
  if (arg0 == null) {
    tmp4 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  closure_4(tmp4);
  if (tmp == null) {
    tmp = EMPTY_STRING_SNOWFLAKE_ID;
  }
  closure_3(tmp);
  return false;
});
const result = size.fileFinishedImporting("modules/guild_onboarding_home/useIsEligibleForServerOnboardingSetupProgress.tsx");

export default tmp2;