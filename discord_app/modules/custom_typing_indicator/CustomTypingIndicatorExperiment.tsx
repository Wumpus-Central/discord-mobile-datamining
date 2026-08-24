// discord_app/modules/custom_typing_indicator/CustomTypingIndicatorExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-07-custom-typing-indicator", defaultConfig: { enabled: false, entryPoint: null }, variations: { 0: { enabled: false, entryPoint: null }, 1: { enabled: true, entryPoint: "settings" }, 2: { enabled: true, entryPoint: "profile" } } });
const result = set.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorExperiment.tsx");

export const CustomTypingIndicatorExperiment = apexExperiment;
export const useCustomTypingIndicatorConfig = function useCustomTypingIndicatorConfig(TypingIndicatorSetting) {
  return apexExperiment.useConfig({ location: TypingIndicatorSetting });
};
export const getCustomTypingIndicatorConfig = function getCustomTypingIndicatorConfig(location) {
  return apexExperiment.getConfig({ location });
};