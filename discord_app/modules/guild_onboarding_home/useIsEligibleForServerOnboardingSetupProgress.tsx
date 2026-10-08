// discord_app/modules/guild_onboarding_home/useIsEligibleForServerOnboardingSetupProgress.tsx
import c from "../../../_runtime/00576_c.js";
import Constants from "../../Constants.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import useHasAllocateBoostPermissionDefault from "../premium/powerups/hooks/useHasAllocateBoostPermission.tsx";
import ServerOnboardingSetupProgressCompletionStore from "ServerOnboardingSetupProgressCompletionStore.tsx";
import ServerOnboardingSetupProgressSkipStore from "ServerOnboardingSetupProgressSkipStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_3 = ServerOnboardingSetupProgressCompletionStore.useIsServerOnboardingSetupProgressComplete;
let closure_4 = ServerOnboardingSetupProgressSkipStore.useIsServerOnboardingSetupProgressSkipped;
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
const DAY = DurationsDefault.Millis.DAY;
const result = size.fileFinishedImporting(
  "modules/guild_onboarding_home/useIsEligibleForServerOnboardingSetupProgress.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsEligibleForServerOnboardingSetupProgress(arg0) {
      const cResult = c.c(5);
      let tmp4 = arg0;
      if (arg0 == null) {
        tmp4 = EMPTY_STRING_SNOWFLAKE_ID;
      }
      const tmp3Result = closure_4(tmp4);
      let tmp7 = arg0;
      if (arg0 == null) {
        tmp7 = EMPTY_STRING_SNOWFLAKE_ID;
      }
      const tmp8 = true === useHasAllocateBoostPermissionDefault(arg0);
      const tmp6Result = closure_3(tmp7);
      if (cResult[0] === tmp8) {
        if (cResult[1] === arg0) {
          if (cResult[2] === tmp6Result) {
            if (cResult[3] === tmp3Result) {
              let flag = cResult[4];
            }
            return flag;
          }
        }
      }
      cResult[0] = tmp8;
      cResult[1] = arg0;
      cResult[2] = tmp6Result;
      cResult[3] = tmp3Result;
      cResult[4] = false;
      flag = false;
      const tmp2 = useHasAllocateBoostPermissionDefault(arg0);
    }
  : function useIsEligibleForServerOnboardingSetupProgress(arg0) {
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
    };
