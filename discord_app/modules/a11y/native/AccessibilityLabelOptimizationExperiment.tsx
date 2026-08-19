// discord_app/modules/a11y/native/AccessibilityLabelOptimizationExperiment.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import SCREEN_READER_ENABLED_GETTER from "useIsScreenReaderEnabled.native.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";

let obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-mobile-accessibility-label-optimization", defaultConfig: { enabled: false }, variations: obj });
const config = apexExperiment.getConfig({ location: "default" });
const result = obj132.fileFinishedImporting("modules/a11y/native/AccessibilityLabelOptimizationExperiment.tsx");

export default apexExperiment;
export const shouldSkipAccessibilityLabels = function shouldSkipAccessibilityLabels() {
  enabled = enabled.enabled;
  if (enabled) {
    enabled = !SCREEN_READER_ENABLED_GETTER.getIsScreenReaderEnabled();
  }
  return enabled;
};