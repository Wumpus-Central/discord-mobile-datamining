// === Module 6876: AgeNoticeExperiment ===

// Module 6876 (AgeNoticeExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-08-tiny-bronco", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/AgeNoticeExperiment.tsx");

export function useIsAgeNoticeEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
}
export function isAgeNoticeEnabled(location) {
  return closure_0.getConfig({ location }).enabled;
}