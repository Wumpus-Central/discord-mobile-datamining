// === Module 5084: GameModeExperiment ===

// Module 5084 (GameModeExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-08-game-mode", kind: "user", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/game_mode/GameModeExperiment.tsx");

export const getGameModeExperimentConfig = function getGameModeExperimentConfig(location) {
  return closure_2.getConfig({ location: location.location });
};
export const useGameModeExperimentConfig = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameModeExperimentConfig(location) {
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
  return closure_2.useConfig(tmp2);
}) : (function useGameModeExperimentConfig(location) {
  return closure_2.useConfig({ location: location.location });
});