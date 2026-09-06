// discord_app/modules/custom_typing_indicator/CustomTypingIndicatorExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-07-custom-typing-indicator",
  defaultConfig: { canSet: false, canView: false, entryPoint: null },
  variations: {
    0: { canSet: false, canView: false, entryPoint: null },
    1: { canSet: true, canView: true, entryPoint: "settings" },
    2: { canSet: true, canView: true, entryPoint: "profile" },
    3: { canSet: false, canView: true, entryPoint: null },
  },
});
const result = size.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorExperiment.tsx");

export const CustomTypingIndicatorExperiment = apexExperiment;
export const useCustomTypingIndicatorConfig = function useCustomTypingIndicatorConfig(TypingIndicatorInner) {
  return apexExperiment.useConfig({ location: TypingIndicatorInner });
};
export const getCustomTypingIndicatorConfig = function getCustomTypingIndicatorConfig(location) {
  return apexExperiment.getConfig({ location });
};
