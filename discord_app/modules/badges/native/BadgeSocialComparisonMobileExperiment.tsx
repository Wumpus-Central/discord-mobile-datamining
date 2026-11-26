// === Module 13859: BadgeSocialComparisonMobileExperiment ===

// Module 13859 (BadgeSocialComparisonMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-11-badge-social-comparison-mobile", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/badges/native/BadgeSocialComparisonMobileExperiment.tsx");

export function useBadgeSocialComparisonMobileEnabled(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
}