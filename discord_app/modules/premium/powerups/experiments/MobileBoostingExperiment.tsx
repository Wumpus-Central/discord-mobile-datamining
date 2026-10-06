// === Module 6927: MobileBoostingExperiment ===

// Module 6927 (MobileBoostingExperiment)
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-07-mobile-boosting-optimizations", kind: "user", defaultConfig: { enabled: false, removeYearlyUpsell: false, recommendedBoostCount: null }, variations: { 0: { enabled: false, removeYearlyUpsell: false, recommendedBoostCount: null }, 1: { enabled: true, removeYearlyUpsell: false, recommendedBoostCount: 2 }, 2: { enabled: true, removeYearlyUpsell: true, recommendedBoostCount: 2 }, 3: { enabled: true, removeYearlyUpsell: false, recommendedBoostCount: 3 }, 4: { enabled: true, removeYearlyUpsell: true, recommendedBoostCount: 3 } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/experiments/MobileBoostingExperiment.tsx");

export default apexExperiment;
export const getShouldRemoveYearlyUpsell = function getShouldRemoveYearlyUpsell(PremiumPlanSelect) {
  const obj = { location: PremiumPlanSelect };
  return apexExperiment.getConfig(obj).removeYearlyUpsell;
};
export const getMobileBoostingEnabled = function getMobileBoostingEnabled(PremiumPlanSelect) {
  const obj = { location: PremiumPlanSelect };
  return apexExperiment.getConfig(obj).enabled;
};
export const getRecommendedBoostCount = function getRecommendedBoostCount(PremiumPlanSelect) {
  const obj = { location: PremiumPlanSelect };
  return apexExperiment.getConfig(obj).recommendedBoostCount;
};