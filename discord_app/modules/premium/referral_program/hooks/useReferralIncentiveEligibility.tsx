// discord_app/modules/premium/referral_program/hooks/useReferralIncentiveEligibility.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram.tsx";
import apexExperiment from "../../experiments/PremiumReferralIncentivesExperiment.tsx";
import closure_2 from "../../../../stores/billing/SubscriptionStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/premium/referral_program/hooks/useReferralIncentiveEligibility.tsx",
);

export const useReferralIncentiveEligibility = function useReferralIncentiveEligibility(location) {
  const isEligibleSenderForReferralProgram =
    useIsEligibleSenderForReferralProgram.useIsEligibleSenderForReferralProgram(true);
  const obj = useIsEligibleSenderForReferralProgram;
  const premiumReferralIncentivesVariant = apexExperiment.usePremiumReferralIncentivesVariant(location.location);
  ({ referralRewardType, useAltReferralCardArt } = premiumReferralIncentivesVariant);
  const obj2 = apexExperiment;
  const items = [closure_2];
  const stateFromStores = initialize.useStateFromStores(items, () =>
    premiumTypeSubscription.getPremiumTypeSubscription(),
  );
  let tmp8 = true === isEligibleSenderForReferralProgram;
  let isEligibleForIncentive = tmp8;
  if (tmp8) {
    isEligibleForIncentive = referralRewardType === tmp(13446).ReferralRewardType.ORBS;
  }
  if (tmp8) {
    tmp8 = referralRewardType === tmp(13446).ReferralRewardType.DISCOUNT;
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
