// discord_app/modules/game_mode/GameModeExperiment.tsx
import c from "../../../_runtime/00576_c.js";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = { name: "2026-08-game-mode", kind: "user", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/game_mode/GameModeExperiment.tsx");

export const getGameModeExperimentConfig = function getGameModeExperimentConfig(location) {
  return closure_2.getConfig({ location: location.location });
};
export const useGameModeExperimentConfig = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGameModeExperimentConfig(location) {
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
    }
  : function useGameModeExperimentConfig(location) {
      return closure_2.useConfig({ location: location.location });
    };
