// === Module 9966: MobileEmojiPickerUpsellRestyleExperiment ===

// Module 9966 (MobileEmojiPickerUpsellRestyleExperiment)
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7853 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-mobile-emoji-picker-upsell-restyle", kind: "user", defaultConfig: false, variations: { 0: false, 1: true } });
const items = [EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE, EntitlementFeatureNames.EntitlementFeatureNames.ANIMATED_EMOJIS];
const result = size.fileFinishedImporting("modules/premium/experiments/MobileEmojiPickerUpsellRestyleExperiment.tsx");

export const MobileEmojiPickerUpsellRestyleExperiment = apexExperiment;
export const useMobileEmojiPickerUpsellRestyleEnabled = function useMobileEmojiPickerUpsellRestyleEnabled(location) {
  return apexExperiment.useConfig({ location });
};
export const getMobileEmojiPickerUpsellRestyleEnabledForFeature = function getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, location) {
  let config = items.includes(featureName);
  if (config) {
    const obj = { location };
    config = apexExperiment.getConfig(obj);
  }
  return config;
};