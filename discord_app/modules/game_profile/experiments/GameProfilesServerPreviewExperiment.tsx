// === Module 16425: GameProfilesServerPreviewExperiment ===

// Module 16425 (GameProfilesServerPreviewExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { enabled: false };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-10-game-profiles-server-preview", kind: "user", defaultConfig: obj, variations: { 0: obj, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/game_profile/experiments/GameProfilesServerPreviewExperiment.tsx");

export function useIsGameProfilesServerPreviewEnabled(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
}