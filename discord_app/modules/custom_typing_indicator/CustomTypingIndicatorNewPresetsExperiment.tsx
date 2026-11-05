// discord_app/modules/custom_typing_indicator/CustomTypingIndicatorNewPresetsExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-11-cti-new-presets",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting(
  "modules/custom_typing_indicator/CustomTypingIndicatorNewPresetsExperiment.tsx",
);

export const CustomTypingIndicatorNewPresetsExperiment = apexExperiment;
export function useCustomTypingIndicatorNewPresetsConfig(CustomTypingIndicatorEditScreen) {
  return apexExperiment.useConfig({ location: CustomTypingIndicatorEditScreen });
}
