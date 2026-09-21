// === Module 11459: BadgeDirectoryUpdatesExperiment ===

// Module 11459 (BadgeDirectoryUpdatesExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-10-badge-directory-updates", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/badges/BadgeDirectoryUpdatesExperiment.tsx");

export const useIsBadgeDirectoryUpdatesEnabled = function useIsBadgeDirectoryUpdatesEnabled(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};