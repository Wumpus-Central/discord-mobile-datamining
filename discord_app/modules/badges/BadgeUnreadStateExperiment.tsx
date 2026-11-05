// === Module 11652: BadgeUnreadStateExperiment ===

// Module 11652 (BadgeUnreadStateExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-10-badges-unread-state", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/badges/BadgeUnreadStateExperiment.tsx");

export function useIsBadgeUnreadStateEnabled(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
}