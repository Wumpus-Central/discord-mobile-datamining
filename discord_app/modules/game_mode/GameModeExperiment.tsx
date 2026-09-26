// === Module 4828: GameModeExperiment ===

// Module 4828 (GameModeExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-08-game-mode", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/game_mode/GameModeExperiment.tsx");

export const getGameModeExperimentConfig = function getGameModeExperimentConfig(location) {
  return closure_0.getConfig({ location: location.location });
};
export const useGameModeExperimentConfig = function useGameModeExperimentConfig(location) {
  return closure_0.useConfig({ location: location.location });
};