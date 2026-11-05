// === Module 15568: useReferralIncentiveEligibility ===

// Module 15568 (useReferralIncentiveEligibility)
import initialize from "initialize" /* 504 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 8670 */;
import PremiumReferralIncentivesExperiment from "PremiumReferralIncentivesExperiment" /* 15565 */;
import SubscriptionStore from "SubscriptionStore" /* 2181 */;

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
  items = [SubscriptionStore];
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