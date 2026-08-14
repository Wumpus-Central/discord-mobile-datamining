// discord_app/modules/premium/hooks/useAndroidAndLegacyIOSPremiumTrialOfferCandidates.native.tsx
import updateProduct from "updateProduct";
import GuildFeatures from "GuildFeatures";

let c3;
let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: c3, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: c4, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID: c5, PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID: closure_6, PREMIUM_TIER_2_REFERRAL_TRIAL_ID: error, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID: metroImportAll } = GuildFeatures);
const result = require("hasUserTrialOfferExpired").fileFinishedImporting("modules/premium/hooks/useAndroidAndLegacyIOSPremiumTrialOfferCandidates.native.tsx");

export const useAndroidAndLegacyIOSPremiumTrialOfferCandidates = function useAndroidAndLegacyIOSPremiumTrialOfferCandidates(arg0) {
  const items = [updateProduct];
  offerIds = offerIds(647).useStateFromStoresObject(items, () => ({ isFetchingProducts: updateProduct.isFetchingProducts(), offerIds: updateProduct.getOfferIds() })).offerIds;
  const obj = offerIds(647);
  const trialOffer = offerIds(6981).useTrialOffer(closure_6);
  let values = Object.values(offerIds(5923).TrialIdToProductOfferId[closure_6]);
  let tmp4 = null;
  if (values.every((arg0) => offerIds.has(arg0))) {
    tmp4 = trialOffer;
  }
  let tmpResult = tmp(6981);
  const trialOffer1 = tmpResult.useTrialOffer(closure_3);
  values = Object.values(tmp(5923).TrialIdToProductOfferId[closure_3]);
  let tmp6 = null;
  if (values.every((arg0) => offerIds.has(arg0))) {
    tmp6 = trialOffer1;
  }
  tmpResult = tmp(6981);
  const trialOffer2 = tmpResult.useTrialOffer(closure_4);
  const values1 = Object.values(tmp(5923).TrialIdToProductOfferId[closure_4]);
  let tmp8 = null;
  if (values1.every((arg0) => offerIds.has(arg0))) {
    tmp8 = trialOffer2;
  }
  const obj2 = offerIds(6981);
  const trialOffer3 = offerIds(6981).useTrialOffer(closure_5);
  const values2 = Object.values(tmp(5923).TrialIdToProductOfferId[closure_5]);
  let tmp10 = null;
  if (values2.every((arg0) => offerIds.has(arg0))) {
    tmp10 = trialOffer3;
  }
  const tmpResult1 = offerIds(6981);
  const trialOffer4 = offerIds(6981).useTrialOffer(closure_7);
  const values3 = Object.values(tmp(5923).TrialIdToProductOfferId[closure_7]);
  let tmp12 = null;
  if (values3.every((arg0) => offerIds.has(arg0))) {
    tmp12 = trialOffer4;
  }
  const items1 = [tmp12, tmp4, tmp6, tmp8, , ];
  const tmpResult2 = offerIds(6981);
  const trialOffer5 = offerIds(6981).useTrialOffer(closure_8);
  const values4 = Object.values(tmp(5923).TrialIdToProductOfferId[closure_8]);
  let tmp14 = null;
  if (values4.every((arg0) => offerIds.has(arg0))) {
    tmp14 = trialOffer5;
  }
  items1[4] = tmp14;
  items1[5] = tmp10;
  return items1.find((arg0) => null != arg0);
};