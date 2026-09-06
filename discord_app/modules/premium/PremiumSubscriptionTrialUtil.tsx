// === Module 8059: useHasActiveTrial ===

// Module 8059 (useHasActiveTrial)
import initialize from "initialize" /* 504 */;
import closure_2 from "mergeGuildAvatar" /* 1371 */;
import closure_3 from "reset" /* 4224 */;
import closure_4 from "emitChanges" /* 7450 */;
import GuildFeatures from "GuildFeatures" /* 1373 */;

require = arg1;
({ PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: c5, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: closure_6, PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID: error, PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_8, PREMIUM_TRIAL_IDS_ALL: c9 } = GuildFeatures);
const result = require("set").fileFinishedImporting("modules/premium/PremiumSubscriptionTrialUtil.tsx");

export const useHasActiveTrial = function useHasActiveTrial() {
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let hasActiveTrial;
  if (stateFromStores != null) {
    hasActiveTrial = stateFromStores.hasActiveTrial;
  }
  return hasActiveTrial;
};
export const hasActiveTrial = function hasActiveTrial() {
  premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
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
    let tmp4 = trialId.trialId === closure_5;
    if (!tmp4) {
      tmp4 = trialId.trialId === closure_6;
    }
    if (!tmp4) {
      tmp4 = trialId.trialId === closure_7;
    }
    if (!tmp4) {
      tmp4 = trialId.trialId === closure_8;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};
export const useCurrentPremiumTrialTier = function useCurrentPremiumTrialTier() {
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj = initialize;
  const items1 = [closure_2];
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
  const mapped = closure_9.map((closure_9) => userTrialOffer.getUserTrialOffer(closure_9));
  const found = mapped.filter((hasExpired) => null != hasExpired && !hasExpired.hasExpired);
  return found.shift();
};