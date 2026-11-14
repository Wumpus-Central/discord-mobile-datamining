// === Module 17978: CustomTypingIndicatorNewPresetsExperiment ===

// Module 17978 (CustomTypingIndicatorNewPresetsExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-11-cti-new-presets", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorNewPresetsExperiment.tsx");

export const CustomTypingIndicatorNewPresetsExperiment = apexExperiment;
export function useCustomTypingIndicatorNewPresetsConfig(TypingIndicatorSetting) {
  return apexExperiment.useConfig({ location: TypingIndicatorSetting });
}