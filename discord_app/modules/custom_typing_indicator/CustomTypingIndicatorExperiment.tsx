// === Module 14023: apexExperiment ===

// Module 14023 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-07-custom-typing-indicator", defaultConfig: { enabled: false, entryPoint: null }, variations: { 0: { enabled: false, entryPoint: null }, 1: { enabled: true, entryPoint: "settings" }, 2: { enabled: true, entryPoint: "profile" } } });
const result = obj132.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorExperiment.tsx");

export const CustomTypingIndicatorExperiment = apexExperiment;
export const useCustomTypingIndicatorConfig = function useCustomTypingIndicatorConfig(TypingIndicatorSetting) {
  return apexExperiment.useConfig({ location: TypingIndicatorSetting });
};
export const getCustomTypingIndicatorConfig = function getCustomTypingIndicatorConfig(location) {
  return apexExperiment.getConfig({ location });
};