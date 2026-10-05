// discord_app/modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import useMaybeFetchReferralsRemaining from "useMaybeFetchReferralsRemaining.tsx";
import ReferralTrialStore from "../../ReferralTrialStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let isEligibleToSendReferrals;
      let tmp6;
      let tmp7;
      const obj = react;
      const cResult = obj.c(2);
      const tmp4 = undefined !== arg0 && arg0;
      const tmpResult = useMaybeFetchReferralsRemaining;
      const maybeFetchReferralsRemaining = tmpResult.useMaybeFetchReferralsRemaining(tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReferralTrialStore];
        const fn = function l() {
          return isEligibleToSendReferrals.getIsEligibleToSendReferrals();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const tmpResult2 = get_initialized;
      return tmpResult2.useStateFromStores(tmp6, tmp7);
    }
  : () => {
      let isEligibleToSendReferrals;
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      const obj = useMaybeFetchReferralsRemaining;
      const maybeFetchReferralsRemaining = obj.useMaybeFetchReferralsRemaining(flag);
      const items = [ReferralTrialStore];
      const obj2 = get_initialized;
      return obj2.useStateFromStores(items, () => isEligibleToSendReferrals.getIsEligibleToSendReferrals());
    };
const result = size.fileFinishedImporting(
  "modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx",
);

export const useIsEligibleSenderForReferralProgram = tmp2;
