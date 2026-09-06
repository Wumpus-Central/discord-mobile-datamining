// === Module 13446: PremiumReferralIncentivesExperiment ===

// Module 13446 (PremiumReferralIncentivesExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { ORBS: "orbs", DISCOUNT: "discount" };
obj = { name: "2026-07-premium-referral-incentives", kind: "user", defaultConfig: { referralRewardType: null, useAltReferralCardArt: false }, variations: null };
obj = { 0: { referralRewardType: null, useAltReferralCardArt: false }, 1: { referralRewardType: obj.ORBS, useAltReferralCardArt: false }, 2: { referralRewardType: obj.DISCOUNT, useAltReferralCardArt: false }, 3: { referralRewardType: obj.ORBS, useAltReferralCardArt: true }, 4: { referralRewardType: obj.DISCOUNT, useAltReferralCardArt: true } };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/experiments/PremiumReferralIncentivesExperiment.tsx");

export default apexExperiment;
export const ReferralRewardType = obj;
export const usePremiumReferralIncentivesVariant = function usePremiumReferralIncentivesVariant(location) {
  let obj = { location };
  const config = apexExperiment.useConfig(obj);
  obj = { referralRewardType: config.referralRewardType, useAltReferralCardArt: config.useAltReferralCardArt, isInReferralIncentivesTreatment: null != config.referralRewardType };
  return obj;
};