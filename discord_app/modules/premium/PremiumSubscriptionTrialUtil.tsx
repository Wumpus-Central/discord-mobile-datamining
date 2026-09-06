// === Module 8059: PremiumSubscriptionTrialUtil ===

// Module 8059 (PremiumSubscriptionTrialUtil)
import initialize from "initialize" /* 504 */;
import UserStore from "UserStore" /* 1371 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;
import UserOfferStore from "UserOfferStore" /* 7450 */;

require = fn;
const PremiumConstants = fn(1373);
({ PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: hasOwnProperty, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: metroRequire, PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID: closure_7, PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_8, PREMIUM_TRIAL_IDS_ALL: closure_9 } = PremiumConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/PremiumSubscriptionTrialUtil.tsx");

export const useHasActiveTrial = function useHasActiveTrial() {
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let hasActiveTrial;
  if (stateFromStores != null) {
    hasActiveTrial = stateFromStores.hasActiveTrial;
  }
  return hasActiveTrial;
};
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
      tmp4 = trialId.trialId === React6;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};
export const useCurrentPremiumTrialTier = function useCurrentPremiumTrialTier() {
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
};
export const getPremiumTrialOffer = function getPremiumTrialOffer() {
  const mapped = React7.map((item) => userTrialOffer.getUserTrialOffer(item));
  const found = mapped.filter((hasExpired) => null != hasExpired && !hasExpired.hasExpired);
  return found.shift();
};