// discord_app/modules/premium/experiments/MobileEmojiPickerUpsellRestyleExperiment.tsx
import c from "../../../../_runtime/00576_c.js";
import EntitlementFeatureNames from "../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-08-mobile-emoji-picker-upsell-restyle",
  kind: "user",
  defaultConfig: false,
  variations: { 0: false, 1: true },
});
const items = [
  EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE,
  EntitlementFeatureNames.EntitlementFeatureNames.ANIMATED_EMOJIS,
];
const result = size.fileFinishedImporting("modules/premium/experiments/MobileEmojiPickerUpsellRestyleExperiment.tsx");

export const MobileEmojiPickerUpsellRestyleExperiment = apexExperiment;
export const useMobileEmojiPickerUpsellRestyleEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
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
    }
  : (location) => apexExperiment.useConfig({ location });
export const getMobileEmojiPickerUpsellRestyleEnabledForFeature =
  function getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, location) {
    let config = items.includes(featureName);
    if (config) {
      const obj = { location };
      config = apexExperiment.getConfig(obj);
    }
    return config;
  };
