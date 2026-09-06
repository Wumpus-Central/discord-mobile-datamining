// === Module 7294: SensitiveContentSelfHarmExperiment ===

// Module 7294 (SensitiveContentSelfHarmExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2025-09-sensitive-content-self-harm", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/explicit_media_redaction/SensitiveContentSelfHarmExperiment.tsx");

export const SensitiveContentSelfHarmExperiment = apexExperiment;
export const useIsSensitiveContentSelfHarmEnabled = function useIsSensitiveContentSelfHarmEnabled(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export const isSensitiveContentSelfHarmEnabled = function isSensitiveContentSelfHarmEnabled(location) {
  return apexExperiment.getConfig({ location }).enabled;
};