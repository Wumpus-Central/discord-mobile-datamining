// === Module 7379: apexExperiment ===

// Module 7379 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-mobile-boosting-optimizations", kind: "user", defaultConfig: { enabled: false, removeYearlyUpsell: false, recommendedBoostCount: null }, variations: { 0: { enabled: false, removeYearlyUpsell: false, recommendedBoostCount: null }, 1: { enabled: true, removeYearlyUpsell: false, recommendedBoostCount: 2 }, 2: { enabled: true, removeYearlyUpsell: true, recommendedBoostCount: 2 }, 3: { enabled: true, removeYearlyUpsell: false, recommendedBoostCount: 3 }, 4: { enabled: true, removeYearlyUpsell: true, recommendedBoostCount: 3 } } });
const result = obj132.fileFinishedImporting("modules/premium/powerups/experiments/MobileBoostingExperiment.tsx");

export default apexExperiment;
export const getShouldRemoveYearlyUpsell = function getShouldRemoveYearlyUpsell(PremiumPlanSelect) {
  return apexExperiment.getConfig({ location: PremiumPlanSelect }).removeYearlyUpsell;
};
export const getMobileBoostingEnabled = function getMobileBoostingEnabled(PremiumPlanSelect) {
  return apexExperiment.getConfig({ location: PremiumPlanSelect }).enabled;
};
export const getRecommendedBoostCount = function getRecommendedBoostCount(PremiumPlanSelect) {
  return apexExperiment.getConfig({ location: PremiumPlanSelect }).recommendedBoostCount;
};