// discord_app/modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import useMaybeFetchReferralsRemaining from "useMaybeFetchReferralsRemaining.tsx";
import ReferralTrialStore from "../../ReferralTrialStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx",
);

export const useIsEligibleSenderForReferralProgram = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(2);
      const tmp4 = undefined !== arg0 && arg0;
      const maybeFetchReferralsRemaining = useMaybeFetchReferralsRemaining.useMaybeFetchReferralsRemaining(tmp4);
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
      const tmpResult = useMaybeFetchReferralsRemaining;
      return initialize.useStateFromStores(tmp6, tmp7);
    }
  : () => {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      const maybeFetchReferralsRemaining = useMaybeFetchReferralsRemaining.useMaybeFetchReferralsRemaining(flag);
      const items = [ReferralTrialStore];
      return initialize.useStateFromStores(items, () => isEligibleToSendReferrals.getIsEligibleToSendReferrals());
    };
