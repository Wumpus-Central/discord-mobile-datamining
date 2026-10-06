// === Module 13264: useReferralIncentiveEligibility ===

// Module 13264 (useReferralIncentiveEligibility)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 7738 */;
import PremiumReferralIncentivesExperiment from "PremiumReferralIncentivesExperiment" /* 13262 */;
import SubscriptionStore from "SubscriptionStore" /* 4540 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let preventFetch;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((preventFetch) => {
  let premiumTypeSubscription;
  let referralRewardType;
  let tmp7;
  let tmp8;
  let useAltReferralCardArt;
  const obj = react;
  const cResult = obj.c(6);
  preventFetch = preventFetch.preventFetch;
  let tmp4 = undefined === preventFetch;
  const _location = preventFetch.location;
  if (!tmp4) {
    tmp4 = preventFetch;
  }
  const tmpResult = useIsEligibleSenderForReferralProgram;
  const isEligibleSenderForReferralProgram = tmpResult.useIsEligibleSenderForReferralProgram(tmp4);
  const tmpResult3 = PremiumReferralIncentivesExperiment;
  const premiumReferralIncentivesVariant = tmpResult3.usePremiumReferralIncentivesVariant(_location);
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
  const tmpResult4 = get_initialized;
  const stateFromStores = tmpResult4.useStateFromStores(tmp7, tmp8);
  let tmp13 = true === isEligibleSenderForReferralProgram;
  const tmp11 = null != stateFromStores && !stateFromStores.isPurchasedExternally;
  const tmp12 = null != stateFromStores && stateFromStores.hasPremiumNitroMonthly;
  let tmp14 = tmp13 && referralRewardType === PremiumReferralIncentivesExperiment.ReferralRewardType.ORBS;
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
      let tmp15;
      if (cResult[4] === useAltReferralCardArt) {
        tmp15 = cResult[5];
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
}) : ((preventFetch) => {
  let premiumTypeSubscription;
  let referralRewardType;
  let useAltReferralCardArt;
  let flag = preventFetch.preventFetch;
  const _location = preventFetch.location;
  if (flag === undefined) {
    flag = true;
  }
  const obj = useIsEligibleSenderForReferralProgram;
  const isEligibleSenderForReferralProgram = obj.useIsEligibleSenderForReferralProgram(flag);
  const obj2 = PremiumReferralIncentivesExperiment;
  const premiumReferralIncentivesVariant = obj2.usePremiumReferralIncentivesVariant(_location);
  ({ referralRewardType, useAltReferralCardArt } = premiumReferralIncentivesVariant);
  const items = [SubscriptionStore];
  const obj3 = get_initialized;
  const stateFromStores = obj3.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let tmp8 = true === isEligibleSenderForReferralProgram;
  const tmp6 = null != stateFromStores && !stateFromStores.isPurchasedExternally;
  const tmp7 = null != stateFromStores && stateFromStores.hasPremiumNitroMonthly;
  let isEligibleForIncentive = tmp8 && referralRewardType === PremiumReferralIncentivesExperiment.ReferralRewardType.ORBS;
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
const result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useReferralIncentiveEligibility.tsx");

export const useReferralIncentiveEligibility = tmp2;