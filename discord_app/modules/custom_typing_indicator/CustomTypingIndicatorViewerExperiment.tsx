// === Module 11193: apexExperiment ===

// Module 11193 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-08-custom-typing-indicator-viewer", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = set.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorViewerExperiment.tsx");

export const CustomTypingIndicatorViewerExperiment = apexExperiment;
export const useIsCustomTypingIndicatorViewerEnabled = function useIsCustomTypingIndicatorViewerEnabled(TypingIndicatorInner) {
  return apexExperiment.useConfig({ location: TypingIndicatorInner }).enabled;
};
export const getIsCustomTypingIndicatorViewerEnabled = function getIsCustomTypingIndicatorViewerEnabled(location) {
  return apexExperiment.getConfig({ location }).enabled;
};