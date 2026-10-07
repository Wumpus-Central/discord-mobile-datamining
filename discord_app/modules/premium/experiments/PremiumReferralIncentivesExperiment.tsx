// === Module 13262: PremiumReferralIncentivesExperiment ===

// Module 13262 (PremiumReferralIncentivesExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1440 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { ORBS: "orbs", DISCOUNT: "discount" };
let obj2 = { name: "2026-07-premium-referral-incentives", kind: "user", defaultConfig: { referralRewardType: null, useAltReferralCardArt: false }, variations: { 0: { referralRewardType: null, useAltReferralCardArt: false }, 1: { referralRewardType: obj.ORBS, useAltReferralCardArt: false }, 2: { referralRewardType: obj.DISCOUNT, useAltReferralCardArt: false }, 3: { referralRewardType: obj.ORBS, useAltReferralCardArt: true }, 4: { referralRewardType: obj.DISCOUNT, useAltReferralCardArt: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/premium/experiments/PremiumReferralIncentivesExperiment.tsx");

export default apexExperiment;
export const ReferralRewardType = obj;
export const usePremiumReferralIncentivesVariant = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(6);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  const config = apexExperiment.useConfig(tmp2);
  if (cResult[2] === config.referralRewardType) {
    if (cResult[3] === config.useAltReferralCardArt) {
      if (cResult[4] === tmp4) {
        let tmp5 = cResult[5];
      }
      return tmp5;
    }
  }
  const obj3 = { referralRewardType: config.referralRewardType, useAltReferralCardArt: config.useAltReferralCardArt, isInReferralIncentivesTreatment: null != config.referralRewardType };
  cResult[2] = config.referralRewardType;
  cResult[3] = config.useAltReferralCardArt;
  cResult[4] = null != config.referralRewardType;
  cResult[5] = obj3;
  tmp5 = obj3;
}) : ((location) => {
  const config = apexExperiment.useConfig({ location });
  return { referralRewardType: config.referralRewardType, useAltReferralCardArt: config.useAltReferralCardArt, isInReferralIncentivesTreatment: null != config.referralRewardType };
});