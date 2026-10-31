// === Module 5018: GameModeExperiment ===

// Module 5018 (GameModeExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-08-game-mode", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/game_mode/GameModeExperiment.tsx");

export function getGameModeExperimentConfig(location) {
  return closure_0.getConfig({ location: location.location });
}
export function useGameModeExperimentConfig(location) {
  return closure_0.useConfig({ location: location.location });
}