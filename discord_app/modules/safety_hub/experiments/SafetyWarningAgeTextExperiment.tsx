// discord_app/modules/safety_hub/experiments/SafetyWarningAgeTextExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_0 = ApexExperiment.createApexExperiment({
  name: "2026-09-safety-warning-age-text",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/safety_hub/experiments/SafetyWarningAgeTextExperiment.tsx");

export function useIsSafetyWarningAgeTextEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
}
export function getIsSafetyWarningAgeTextEnabled(safety_warning_system_message) {
  return closure_0.getConfig({ location: safety_warning_system_message }).enabled;
}
