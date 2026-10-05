// === Module 7730: PremiumSubscriptionTrialUtil ===

// Module 7730 (PremiumSubscriptionTrialUtil)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import UserStore from "UserStore" /* 1377 */;
import SubscriptionStore from "SubscriptionStore" /* 4534 */;
import UserOfferStore from "UserOfferStore" /* 6959 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: hasOwnProperty, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: metroRequire, PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID: metroImportDefault, PREMIUM_TIER_2_REFERRAL_TRIAL_ID: metroImportAll, PREMIUM_TRIAL_IDS_ALL: c9 } = PremiumConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let premiumTypeSubscription;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let hasActiveTrial;
  if (stateFromStores != null) {
    hasActiveTrial = stateFromStores.hasActiveTrial;
  }
  return hasActiveTrial;
}) : (() => {
  let premiumTypeSubscription;
  const items = [SubscriptionStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let hasActiveTrial;
  if (stateFromStores != null) {
    hasActiveTrial = stateFromStores.hasActiveTrial;
  }
  return hasActiveTrial;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let currentUser;
  let premiumTypeSubscription;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    const fn = function n() {
      return premiumTypeSubscription.getPremiumTypeSubscription();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    const fn2 = function c() {
      return currentUser.getCurrentUser();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult2 = get_initialized;
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
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
}) : (() => {
  let currentUser;
  let premiumTypeSubscription;
  const items = [SubscriptionStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const items1 = [UserStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
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
const result = size.fileFinishedImporting("modules/premium/PremiumSubscriptionTrialUtil.tsx");
const hasActiveTrial_export = function hasActiveTrial() {
  const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription();
  let trialId;
  if (premiumTypeSubscription != null) {
    trialId = premiumTypeSubscription.trialId;
  }
  return null != trialId;
};

export const useHasActiveTrial = tmp3;
export { hasActiveTrial_export as hasActiveTrial };
export const isEligibleTrialSub = function isEligibleTrialSub(trialId) {
  trialId = undefined;
  if (trialId != null) {
    trialId = trialId.trialId;
  }
  let tmp2 = null != trialId;
  if (tmp2) {
    tmp2 = trialId.trialId === hasOwnProperty || trialId.trialId === metroRequire || trialId.trialId === metroImportDefault || trialId.trialId === metroImportAll;
    const tmp4 = trialId.trialId === hasOwnProperty || trialId.trialId === metroRequire || trialId.trialId === metroImportDefault || trialId.trialId === metroImportAll;
  }
  return tmp2;
};
export const useCurrentPremiumTrialTier = tmp4;
export const getPremiumTrialOffer = function getPremiumTrialOffer() {
  let userTrialOffer;
  const mapped = React4.map((item) => userTrialOffer.getUserTrialOffer(item));
  const found = mapped.filter((hasExpired) => null != hasExpired && !hasExpired.hasExpired);
  return found.shift();
};