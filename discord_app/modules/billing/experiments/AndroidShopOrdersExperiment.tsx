// === Module 9582: apexExperiment ===

// Module 9582 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-android-shop-orders", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/billing/experiments/AndroidShopOrdersExperiment.tsx");

export default apexExperiment;
export const useAndroidShopOrdersEnabled = function useAndroidShopOrdersEnabled(location) {
  return apexExperiment.useConfig(location).enabled;
};