// === Module 15283: useReferralIncentiveEligibility ===

// Module 15283 (useReferralIncentiveEligibility)
import initialize from "initialize" /* 504 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 8516 */;
import PremiumReferralIncentivesExperiment from "PremiumReferralIncentivesExperiment" /* 15280 */;
import SubscriptionStore from "SubscriptionStore" /* 2053 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useReferralIncentiveEligibility.tsx");

export function useReferralIncentiveEligibility(preventFetch) {
  let flag = preventFetch.preventFetch;
  if (flag === undefined) {
    flag = true;
  }
  const isEligibleSenderForReferralProgram = useIsEligibleSenderForReferralProgram.useIsEligibleSenderForReferralProgram(flag);
  const premiumReferralIncentivesVariant = PremiumReferralIncentivesExperiment.usePremiumReferralIncentivesVariant(preventFetch.location);
  ({ referralRewardType, useAltReferralCardArt } = premiumReferralIncentivesVariant);
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let tmp8 = true === isEligibleSenderForReferralProgram;
  let isEligibleForIncentive = tmp8;
  if (tmp8) {
    isEligibleForIncentive = referralRewardType === PremiumReferralIncentivesExperiment.ReferralRewardType.ORBS;
  }
  if (tmp8) {
    tmp8 = referralRewardType === PremiumReferralIncentivesExperiment.ReferralRewardType.DISCOUNT;
  }
  if (tmp8) {
    tmp8 = tmp6;
  }
  if (tmp8) {
    tmp8 = tmp7;
  }
  if (!isEligibleForIncentive) {
    isEligibleForIncentive = tmp8;
  }
  return { isEligibleForIncentive, referralRewardType, useAltReferralCardArt };
}