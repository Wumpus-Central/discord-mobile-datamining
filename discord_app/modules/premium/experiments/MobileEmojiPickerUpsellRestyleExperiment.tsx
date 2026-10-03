// === Module 7487: MobileEmojiPickerUpsellRestyleExperiment ===

// Module 7487 (MobileEmojiPickerUpsellRestyleExperiment)
import c from "c" /* 576 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7483 */;
import ApexExperiment from "ApexExperiment" /* 1440 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-mobile-emoji-picker-upsell-restyle", kind: "user", defaultConfig: false, variations: { 0: false, 1: true } });
const items = [EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE, EntitlementFeatureNames.EntitlementFeatureNames.ANIMATED_EMOJIS];
const result = size.fileFinishedImporting("modules/premium/experiments/MobileEmojiPickerUpsellRestyleExperiment.tsx");

export const MobileEmojiPickerUpsellRestyleExperiment = apexExperiment;
export const useMobileEmojiPickerUpsellRestyleEnabled = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment.useConfig(tmp2);
}) : ((location) => apexExperiment.useConfig({ location }));
export const getMobileEmojiPickerUpsellRestyleEnabledForFeature = function getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, location) {
  let config = items.includes(featureName);
  if (config) {
    const obj = { location };
    config = apexExperiment.getConfig(obj);
  }
  return config;
};