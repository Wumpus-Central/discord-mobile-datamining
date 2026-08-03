// === Module 7845: useHasActiveTrial ===

// Module 7845 (useHasActiveTrial)
import mergeGuildAvatar from "mergeGuildAvatar";
import reset from "reset";
import emitChanges from "emitChanges";
import GuildFeatures from "GuildFeatures";

let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: c5, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: closure_6, PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID: error, PREMIUM_TIER_2_REFERRAL_TRIAL_ID: metroImportAll, PREMIUM_TRIAL_IDS_ALL: c9 } = GuildFeatures);
const result = require("emitChanges").fileFinishedImporting("modules/premium/PremiumSubscriptionTrialUtil.tsx");

export const useHasActiveTrial = function useHasActiveTrial() {
  const items = [reset];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
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
  const items = [reset];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj = require(589) /* initialize */;
  const items1 = [mergeGuildAvatar];
  const stateFromStores1 = require(589) /* initialize */.useStateFromStores(items1, () => currentUser.getCurrentUser());
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
  const found = mapped.filter((expires_at) => {
    let tmp = null != expires_at;
    if (tmp) {
      tmp = !callback(table[5]).hasUserTrialOfferExpired(expires_at);
      const obj = callback(table[5]);
    }
    return tmp;
  });
  return found.shift();
};