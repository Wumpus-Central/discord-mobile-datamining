// === Module 13243: useReferralIncentiveEligibility ===

// Module 13243 (useReferralIncentiveEligibility)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 7727 */;
import PremiumReferralIncentivesExperiment from "PremiumReferralIncentivesExperiment" /* 13241 */;
import SubscriptionStore from "SubscriptionStore" /* 4534 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useReferralIncentiveEligibility.tsx");

export const useReferralIncentiveEligibility = ReactCompilerGating.isReactCompilerEnabled() ? ((preventFetch) => {
  const cResult = c.c(6);
  preventFetch = preventFetch.preventFetch;
  let tmp4 = undefined === preventFetch;
  if (!tmp4) {
    tmp4 = preventFetch;
  }
  const isEligibleSenderForReferralProgram = useIsEligibleSenderForReferralProgram.useIsEligibleSenderForReferralProgram(tmp4);
  const tmpResult = useIsEligibleSenderForReferralProgram;
  const premiumReferralIncentivesVariant = PremiumReferralIncentivesExperiment.usePremiumReferralIncentivesVariant(preventFetch.location);
  ({ referralRewardType, useAltReferralCardArt } = premiumReferralIncentivesVariant);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    const fn = function s() {
      return premiumTypeSubscription.getPremiumTypeSubscription();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult3 = PremiumReferralIncentivesExperiment;
  const stateFromStores = initialize.useStateFromStores(tmp7, tmp8);
  let tmp13 = true === isEligibleSenderForReferralProgram;
  let tmp14 = tmp13;
  if (tmp13) {
    tmp14 = referralRewardType === PremiumReferralIncentivesExperiment.ReferralRewardType.ORBS;
  }
  if (tmp13) {
    tmp13 = referralRewardType === PremiumReferralIncentivesExperiment.ReferralRewardType.DISCOUNT;
  }
  if (tmp13) {
    tmp13 = tmp11;
  }
  if (tmp13) {
    tmp13 = tmp12;
  }
  if (!tmp14) {
    tmp14 = tmp13;
  }
  if (cResult[2] === referralRewardType) {
    if (cResult[3] === tmp14) {
      if (cResult[4] === useAltReferralCardArt) {
        let tmp15 = cResult[5];
      }
      return tmp15;
    }
  }
  const obj2 = { isEligibleForIncentive: tmp14, referralRewardType, useAltReferralCardArt };
  cResult[2] = referralRewardType;
  cResult[3] = tmp14;
  cResult[4] = useAltReferralCardArt;
  cResult[5] = obj2;
  tmp15 = obj2;
  tmp11 = null != stateFromStores && !stateFromStores.isPurchasedExternally;
  tmp12 = null != stateFromStores && stateFromStores.hasPremiumNitroMonthly;
  const tmpResult4 = initialize;
}) : ((preventFetch) => {
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
});