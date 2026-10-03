// === Module 7727: useIsEligibleSenderForReferralProgram ===

// Module 7727 (useIsEligibleSenderForReferralProgram)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import useMaybeFetchReferralsRemaining from "useMaybeFetchReferralsRemaining" /* 7728 */;
import ReferralTrialStore from "ReferralTrialStore" /* 6961 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx");

export const useIsEligibleSenderForReferralProgram = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
}) : (() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const maybeFetchReferralsRemaining = useMaybeFetchReferralsRemaining.useMaybeFetchReferralsRemaining(flag);
  const items = [ReferralTrialStore];
  return initialize.useStateFromStores(items, () => isEligibleToSendReferrals.getIsEligibleToSendReferrals());
});