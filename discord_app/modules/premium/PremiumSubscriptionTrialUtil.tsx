// === Module 8070: PremiumSubscriptionTrialUtil ===

// Module 8070 (PremiumSubscriptionTrialUtil)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import UserStore from "UserStore" /* 1390 */;
import SubscriptionStore from "SubscriptionStore" /* 4734 */;
import UserOfferStore from "UserOfferStore" /* 7166 */;

require = fn;
const PremiumConstants = fn(1392);
({ PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: hasOwnProperty, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: metroRequire, PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID: closure_7, PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_8, PREMIUM_TRIAL_IDS_ALL: closure_9 } = PremiumConstants);
fn(558);
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasActiveTrial() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    const fn = function l() {
      return premiumTypeSubscription.getPremiumTypeSubscription();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  let hasActiveTrial;
  if (stateFromStores != null) {
    hasActiveTrial = stateFromStores.hasActiveTrial;
  }
  return hasActiveTrial;
}) : (function useHasActiveTrial() {
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let hasActiveTrial;
  if (stateFromStores != null) {
    hasActiveTrial = stateFromStores.hasActiveTrial;
  }
  return hasActiveTrial;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/PremiumSubscriptionTrialUtil.tsx");

export const useHasActiveTrial = tmp3;
export const hasActiveTrial = function hasActiveTrial() {
  const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription();
  let trialId;
  if (premiumTypeSubscription != null) {
    trialId = premiumTypeSubscription.trialId;
  }
  return null != trialId;
};
export const isEligibleTrialSub = function isEligibleTrialSub(trialId) {
  trialId = undefined;
  if (trialId != null) {
    trialId = trialId.trialId;
  }
  let tmp2 = null != trialId;
  if (tmp2) {
    let tmp4 = trialId.trialId === hasOwnProperty;
    if (!tmp4) {
      tmp4 = trialId.trialId === timestampProducer;
    }
    if (!tmp4) {
      tmp4 = trialId.trialId === React5;
    }
    if (!tmp4) {
      tmp4 = trialId.trialId === closure_1_8;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};
export const useCurrentPremiumTrialTier = ReactCompilerGating.isReactCompilerEnabled() ? (function useCurrentPremiumTrialTier() {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    const fn = function s() {
      return premiumTypeSubscription.getPremiumTypeSubscription();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    class T {
      constructor() {
        return closure_1_2.getCurrentUser();
      }
    }
    cResult[2] = items1;
    cResult[3] = T;
    let tmp9 = T;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = initialize;
  const stateFromStores1 = initialize.useStateFromStores(tmp8, tmp9);
  let hasActiveTrial;
  if (stateFromStores != null) {
    hasActiveTrial = stateFromStores.hasActiveTrial;
  }
  let tmp13 = null;
  if (hasActiveTrial) {
    let premiumType;
    if (stateFromStores1 != null) {
      premiumType = stateFromStores1.premiumType;
    }
    tmp13 = premiumType;
  }
  return tmp13;
}) : (function useCurrentPremiumTrialTier() {
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const items1 = [UserStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let hasActiveTrial;
  if (stateFromStores != null) {
    hasActiveTrial = stateFromStores.hasActiveTrial;
  }
  let tmp4 = null;
  if (hasActiveTrial) {
    let premiumType;
    if (stateFromStores1 != null) {
      premiumType = stateFromStores1.premiumType;
    }
    tmp4 = premiumType;
  }
  return tmp4;
});
export const getPremiumTrialOffer = function getPremiumTrialOffer() {
  const mapped = options.map((item) => userTrialOffer.getUserTrialOffer(item));
  const found = mapped.filter((hasExpired) => null != hasExpired && !hasExpired.hasExpired);
  return found.shift();
};