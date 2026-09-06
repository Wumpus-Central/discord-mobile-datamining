// === Module 11967: CustomTypingIndicatorExperiment ===

// Module 11967 (CustomTypingIndicatorExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-07-custom-typing-indicator", defaultConfig: { canSet: false, canView: false, entryPoint: null }, variations: { 0: { canSet: false, canView: false, entryPoint: null }, 1: { canSet: true, canView: true, entryPoint: "settings" }, 2: { canSet: true, canView: true, entryPoint: "profile" }, 3: { canSet: false, canView: true, entryPoint: null } } });
const result = size.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorExperiment.tsx");

export const CustomTypingIndicatorExperiment = apexExperiment;
export const useCustomTypingIndicatorConfig = function useCustomTypingIndicatorConfig(TypingIndicatorInner) {
  return apexExperiment.useConfig({ location: TypingIndicatorInner });
};
export const getCustomTypingIndicatorConfig = function getCustomTypingIndicatorConfig(location) {
  return apexExperiment.getConfig({ location });
};