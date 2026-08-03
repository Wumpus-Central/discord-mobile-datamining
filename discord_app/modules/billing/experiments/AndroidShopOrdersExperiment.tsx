// === Module 8921: apexExperiment ===

// Module 8921 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-android-shop-orders", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/billing/experiments/AndroidShopOrdersExperiment.tsx");

export default apexExperiment;
export const useAndroidShopOrdersEnabled = function useAndroidShopOrdersEnabled(location) {
  return apexExperiment.useConfig(location).enabled;
};