// discord_app/modules/custom_typing_indicator/CustomTypingIndicatorViewerExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-08-custom-typing-indicator-viewer", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = set.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorViewerExperiment.tsx");

export const CustomTypingIndicatorViewerExperiment = apexExperiment;
export const useIsCustomTypingIndicatorViewerEnabled = function useIsCustomTypingIndicatorViewerEnabled(TypingIndicatorInner) {
  return apexExperiment.useConfig({ location: TypingIndicatorInner }).enabled;
};
export const getIsCustomTypingIndicatorViewerEnabled = function getIsCustomTypingIndicatorViewerEnabled(location) {
  return apexExperiment.getConfig({ location }).enabled;
};