// === Module 8131: useIsEligibleSenderForReferralProgram ===

// Module 8131 (useIsEligibleSenderForReferralProgram)
import initialize from "initialize" /* 504 */;
import useMaybeFetchReferralsRemaining from "useMaybeFetchReferralsRemaining" /* 8132 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7525 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx");

export const useIsEligibleSenderForReferralProgram = function useIsEligibleSenderForReferralProgram() {
  if (flag === undefined) {
    flag = false;
  }
  const maybeFetchReferralsRemaining = useMaybeFetchReferralsRemaining.useMaybeFetchReferralsRemaining(flag);
  const items = [ReferralTrialStore];
  return initialize.useStateFromStores(items, () => isEligibleToSendReferrals.getIsEligibleToSendReferrals());
};