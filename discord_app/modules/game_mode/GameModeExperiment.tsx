// discord_app/modules/game_mode/GameModeExperiment.tsx
import react from "../../../_runtime/00576_react.js";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
let obj = { name: "2026-08-game-mode", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_2 = ApexExperiment.createApexExperiment(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      let tmp2;
      const obj = react;
      const cResult = obj.c(2);
      const _location = location.location;
      if (cResult[0] !== _location) {
        const obj2 = { location: _location };
        cResult[0] = _location;
        cResult[1] = obj2;
        tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return closure_2.useConfig(tmp2);
    }
  : (location) => {
      const obj = { location: location.location };
      return closure_2.useConfig(obj);
    };
const result = size.fileFinishedImporting("modules/game_mode/GameModeExperiment.tsx");

export const getGameModeExperimentConfig = function getGameModeExperimentConfig(location) {
  const obj = { location: location.location };
  return closure_2.getConfig(obj);
};
export const useGameModeExperimentConfig = tmp2;
