// === Module 15149: SafetyWarningAgeTextExperiment ===

// Module 15149 (SafetyWarningAgeTextExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-09-safety-warning-age-text", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/safety_hub/experiments/SafetyWarningAgeTextExperiment.tsx");

export function useIsSafetyWarningAgeTextEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
}
export function getIsSafetyWarningAgeTextEnabled(safety_warning_system_message) {
  return closure_0.getConfig({ location: safety_warning_system_message }).enabled;
}