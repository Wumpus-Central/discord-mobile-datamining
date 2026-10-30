// === Module 11418: BadgeDirectoryUpdatesExperiment ===

// Module 11418 (BadgeDirectoryUpdatesExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-10-badge-directory-updates", kind: "user", defaultConfig: { enabled: false, swipeBetweenBadges: false }, variations: { 0: { enabled: false, swipeBetweenBadges: false }, 1: { enabled: true, swipeBetweenBadges: false }, 2: { enabled: true, swipeBetweenBadges: true } } });
const result = size.fileFinishedImporting("modules/badges/BadgeDirectoryUpdatesExperiment.tsx");

export function useIsBadgeDirectoryUpdatesEnabled(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
}
export function useIsBadgeDetailsSwipeEnabled(location) {
  const config = closure_0.useConfig({ location: location.location });
  return config.enabled && config.swipeBetweenBadges;
}