// === Module 7202: useAndroidAndLegacyIOSPremiumTrialOfferCandidates ===

// Module 7202 (useAndroidAndLegacyIOSPremiumTrialOfferCandidates)
import closure_2 from "updateProduct" /* 6092 */;
import GuildFeatures from "GuildFeatures" /* 1923 */;

const require = arg1;
({ PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: c3, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: c4, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID: c5, PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID: closure_6, PREMIUM_TIER_2_REFERRAL_TRIAL_ID: error, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID: closure_8 } = GuildFeatures);
const result = require("set").fileFinishedImporting("modules/premium/hooks/useAndroidAndLegacyIOSPremiumTrialOfferCandidates.native.tsx");

export const useAndroidAndLegacyIOSPremiumTrialOfferCandidates = function useAndroidAndLegacyIOSPremiumTrialOfferCandidates(arg0) {
  const items = [closure_2];
  offerIds = offerIds(644).useStateFromStoresObject(items, () => ({ isFetchingProducts: closure_2.isFetchingProducts(), offerIds: closure_2.getOfferIds() })).offerIds;
  const obj = offerIds(644);
  const trialOffer = offerIds(7203).useTrialOffer(closure_6);
  let values = Object.values(offerIds(6095).TrialIdToProductOfferId[closure_6]);
  let tmp4 = null;
  if (values.every((arg0) => offerIds.has(arg0))) {
    tmp4 = trialOffer;
  }
  let tmpResult = tmp(7203);
  const trialOffer1 = tmpResult.useTrialOffer(closure_3);
  values = Object.values(tmp(6095).TrialIdToProductOfferId[closure_3]);
  let tmp6 = null;
  if (values.every((arg0) => offerIds.has(arg0))) {
    tmp6 = trialOffer1;
  }
  tmpResult = tmp(7203);
  const trialOffer2 = tmpResult.useTrialOffer(closure_4);
  const values1 = Object.values(tmp(6095).TrialIdToProductOfferId[closure_4]);
  let tmp8 = null;
  if (values1.every((arg0) => offerIds.has(arg0))) {
    tmp8 = trialOffer2;
  }
  const obj2 = offerIds(7203);
  const trialOffer3 = offerIds(7203).useTrialOffer(closure_5);
  const values2 = Object.values(tmp(6095).TrialIdToProductOfferId[closure_5]);
  let tmp10 = null;
  if (values2.every((arg0) => offerIds.has(arg0))) {
    tmp10 = trialOffer3;
  }
  const tmpResult1 = offerIds(7203);
  const trialOffer4 = offerIds(7203).useTrialOffer(closure_7);
  const values3 = Object.values(tmp(6095).TrialIdToProductOfferId[closure_7]);
  let tmp12 = null;
  if (values3.every((arg0) => offerIds.has(arg0))) {
    tmp12 = trialOffer4;
  }
  const items1 = [tmp12, tmp4, tmp6, tmp8, , ];
  const tmpResult2 = offerIds(7203);
  const trialOffer5 = offerIds(7203).useTrialOffer(closure_8);
  const values4 = Object.values(tmp(6095).TrialIdToProductOfferId[closure_8]);
  let tmp14 = null;
  if (values4.every((arg0) => offerIds.has(arg0))) {
    tmp14 = trialOffer5;
  }
  items1[4] = tmp14;
  items1[5] = tmp10;
  return items1.find((arg0) => null != arg0);
};