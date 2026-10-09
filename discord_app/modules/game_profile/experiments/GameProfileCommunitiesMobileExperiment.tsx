// === Module 12960: GameProfileCommunitiesMobileExperiment ===

// Module 12960 (GameProfileCommunitiesMobileExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { enabled: false };
let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-10-game-profiles-v3-communities-tab-mobile", kind: "user", defaultConfig: obj, variations: { 0: obj, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/game_profile/experiments/GameProfileCommunitiesMobileExperiment.tsx");

export const useIsGameProfileCommunitiesMobileEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsGameProfileCommunitiesMobileEnabled(location) {
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
}) : (function useIsGameProfileCommunitiesMobileEnabled(location) {
  return closure_2.useConfig({ location: location.location }).enabled;
});