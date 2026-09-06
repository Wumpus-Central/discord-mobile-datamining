// discord_app/modules/premium/referral_program/hooks/useReferralIncentiveEligibility.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram.tsx";
import PremiumReferralIncentivesExperiment from "../../experiments/PremiumReferralIncentivesExperiment.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useReferralIncentiveEligibility.tsx");

export const useReferralIncentiveEligibility = function useReferralIncentiveEligibility(location) {
  const isEligibleSenderForReferralProgram =
    useIsEligibleSenderForReferralProgram.useIsEligibleSenderForReferralProgram(true);
  const premiumReferralIncentivesVariant = PremiumReferralIncentivesExperiment.usePremiumReferralIncentivesVariant(
    location.location,
  );
  ({ referralRewardType, useAltReferralCardArt } = premiumReferralIncentivesVariant);
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () =>
    premiumTypeSubscription.getPremiumTypeSubscription(),
  );
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
};
