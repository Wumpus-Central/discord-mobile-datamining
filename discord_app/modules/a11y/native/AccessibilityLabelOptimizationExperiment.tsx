// discord_app/modules/a11y/native/AccessibilityLabelOptimizationExperiment.tsx
import ApexExperiment from "ApexExperiment";

let obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-mobile-accessibility-label-optimization", defaultConfig: { enabled: false }, variations: obj });
const config = apexExperiment.getConfig({ location: "default" });
const result = require("set").fileFinishedImporting("modules/a11y/native/AccessibilityLabelOptimizationExperiment.tsx");

export default apexExperiment;
export const shouldSkipAccessibilityLabels = function shouldSkipAccessibilityLabels() {
  enabled = enabled.enabled;
  if (enabled) {
    enabled = !require(4590) /* SCREEN_READER_ENABLED_GETTER */.getIsScreenReaderEnabled();
    const obj = require(4590) /* SCREEN_READER_ENABLED_GETTER */;
  }
  return enabled;
};