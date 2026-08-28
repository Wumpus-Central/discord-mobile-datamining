// === Module 7911: useIsEligibleSenderForReferralProgram ===

// Module 7911 (useIsEligibleSenderForReferralProgram)
import initialize from "initialize" /* 589 */;
import useMaybeFetchReferralsRemaining from "useMaybeFetchReferralsRemaining" /* 7912 */;
import closure_2 from "emitChanges" /* 7144 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx");

export const useIsEligibleSenderForReferralProgram = function useIsEligibleSenderForReferralProgram(result) {
  let flag = result;
  if (result === undefined) {
    flag = false;
  }
  const maybeFetchReferralsRemaining = useMaybeFetchReferralsRemaining.useMaybeFetchReferralsRemaining(flag);
  const obj = useMaybeFetchReferralsRemaining;
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => isEligibleToSendReferrals.getIsEligibleToSendReferrals());
};