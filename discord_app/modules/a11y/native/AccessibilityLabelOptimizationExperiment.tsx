// === Module 8177: apexExperiment ===

// Module 8177 (apexExperiment)
import set from "set" /* 2 */;
import SCREEN_READER_ENABLED_GETTER from "SCREEN_READER_ENABLED_GETTER" /* 4721 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-mobile-accessibility-label-optimization", defaultConfig: { enabled: false }, variations: obj });
const config = apexExperiment.getConfig({ location: "default" });
const result = set.fileFinishedImporting("modules/a11y/native/AccessibilityLabelOptimizationExperiment.tsx");

export default apexExperiment;
export const shouldSkipAccessibilityLabels = function shouldSkipAccessibilityLabels() {
  enabled = enabled.enabled;
  if (enabled) {
    enabled = !SCREEN_READER_ENABLED_GETTER.getIsScreenReaderEnabled();
    const obj = SCREEN_READER_ENABLED_GETTER;
  }
  return enabled;
};