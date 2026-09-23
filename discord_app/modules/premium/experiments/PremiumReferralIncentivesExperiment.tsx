// === Module 13798: PremiumReferralIncentivesExperiment ===

// Module 13798 (PremiumReferralIncentivesExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { ORBS: "orbs", DISCOUNT: "discount" };
const obj2 = { name: "2026-07-premium-referral-incentives", kind: "user", defaultConfig: { referralRewardType: null, useAltReferralCardArt: false }, variations: { 0: { referralRewardType: null, useAltReferralCardArt: false }, 1: { referralRewardType: obj.ORBS, useAltReferralCardArt: false }, 2: { referralRewardType: obj.DISCOUNT, useAltReferralCardArt: false }, 3: { referralRewardType: obj.ORBS, useAltReferralCardArt: true }, 4: { referralRewardType: obj.DISCOUNT, useAltReferralCardArt: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/premium/experiments/PremiumReferralIncentivesExperiment.tsx");

export default apexExperiment;
export const ReferralRewardType = obj;
export const usePremiumReferralIncentivesVariant = function usePremiumReferralIncentivesVariant(location) {
  const config = apexExperiment.useConfig({ location });
  return { referralRewardType: config.referralRewardType, useAltReferralCardArt: config.useAltReferralCardArt, isInReferralIncentivesTreatment: null != config.referralRewardType };
};