// === Module 13446: apexExperiment ===

// Module 13446 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

let obj = { ORBS: "orbs", DISCOUNT: "discount" };
obj = { referralRewardType: obj.ORBS, useAltReferralCardArt: false };
obj = { referralRewardType: obj.DISCOUNT, useAltReferralCardArt: false };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-premium-referral-incentives", kind: "user", defaultConfig: { referralRewardType: null, useAltReferralCardArt: false }, variations: { 0: { referralRewardType: null, useAltReferralCardArt: false }, 1: obj, 2: obj, 3: { referralRewardType: obj.ORBS, useAltReferralCardArt: true }, 4: { referralRewardType: obj.DISCOUNT, useAltReferralCardArt: true } } });
const result = set.fileFinishedImporting("modules/premium/experiments/PremiumReferralIncentivesExperiment.tsx");

export default apexExperiment;
export const ReferralRewardType = obj;
export const usePremiumReferralIncentivesVariant = function usePremiumReferralIncentivesVariant(location) {
  let obj = { location };
  const config = apexExperiment.useConfig(obj);
  obj = { referralRewardType: config.referralRewardType, useAltReferralCardArt: config.useAltReferralCardArt, isInReferralIncentivesTreatment: null != config.referralRewardType };
  return obj;
};