// discord_app/modules/game_mode/GameModeExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
