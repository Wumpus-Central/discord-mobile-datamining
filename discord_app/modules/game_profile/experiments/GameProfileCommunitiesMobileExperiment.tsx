// === Module 14680: GameProfileCommunitiesMobileExperiment ===

// Module 14680 (GameProfileCommunitiesMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

const obj = { enabled: false };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-10-game-profiles-v3-communities-tab-mobile", kind: "user", defaultConfig: obj, variations: { 0: obj, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/game_profile/experiments/GameProfileCommunitiesMobileExperiment.tsx");

export function useIsGameProfileCommunitiesMobileEnabled(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
}