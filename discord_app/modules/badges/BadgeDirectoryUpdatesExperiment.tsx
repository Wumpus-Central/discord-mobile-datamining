// === Module 10549: BadgeDirectoryUpdatesExperiment ===

// Module 10549 (BadgeDirectoryUpdatesExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import "ReactCompilerGating";
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-10-badge-directory-updates", kind: "user", defaultConfig: { enabled: false, swipeBetweenBadges: false }, variations: { 0: { enabled: false, swipeBetweenBadges: false }, 1: { enabled: true, swipeBetweenBadges: false }, 2: { enabled: true, swipeBetweenBadges: true } } });
const obj = { name: "2026-10-badge-directory-updates", kind: "user", defaultConfig: { enabled: false, swipeBetweenBadges: false }, variations: { 0: { enabled: false, swipeBetweenBadges: false }, 1: { enabled: true, swipeBetweenBadges: false }, 2: { enabled: true, swipeBetweenBadges: true } } };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsBadgeDirectoryUpdatesEnabled(location) {
  const cResult = c.c(2);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).enabled;
}) : (function useIsBadgeDirectoryUpdatesEnabled(location) {
  return closure_2.useConfig({ location: location.location }).enabled;
});
const result = size.fileFinishedImporting("modules/badges/BadgeDirectoryUpdatesExperiment.tsx");

export const useIsBadgeDirectoryUpdatesEnabled = tmp2;
export const useIsBadgeDetailsSwipeEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsBadgeDetailsSwipeEnabled(location) {
  const cResult = c.c(2);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  const config = closure_2.useConfig(tmp2);
  return config.enabled && config.swipeBetweenBadges;
}) : (function useIsBadgeDetailsSwipeEnabled(location) {
  const config = closure_2.useConfig({ location: location.location });
  return config.enabled && config.swipeBetweenBadges;
});