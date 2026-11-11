// === Module 9241: useIsEligibleSenderForReferralProgram ===

// Module 9241 (useIsEligibleSenderForReferralProgram)
import initialize from "initialize" /* 504 */;
import useMaybeFetchReferralsRemaining from "useMaybeFetchReferralsRemaining" /* 9242 */;
import ReferralTrialStore from "ReferralTrialStore" /* 9227 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx");

export function useIsEligibleSenderForReferralProgram() {
  if (flag === undefined) {
    flag = false;
  }
  const maybeFetchReferralsRemaining = useMaybeFetchReferralsRemaining.useMaybeFetchReferralsRemaining(flag);
  items = [ReferralTrialStore];
  return initialize.useStateFromStores(items, () => isEligibleToSendReferrals.getIsEligibleToSendReferrals());
}