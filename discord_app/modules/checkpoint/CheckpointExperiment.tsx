// discord_app/modules/checkpoint/CheckpointExperiment.tsx
import react from "../../../_runtime/00576_react.js";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-09-build-a-bear",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
};
let closure_2 = ApexExperiment.createApexExperiment(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      let tmp2;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return closure_2.useConfig(tmp2).enabled;
    }
  : (location) => {
      const obj = { location };
      return closure_2.useConfig(obj).enabled;
    };
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointExperiment.tsx");

export const useIsCheckpointEnabled = tmp2;
export const getIsCheckpointEnabled = function getIsCheckpointEnabled(transformCheckpoint2026CardComponent) {
  const obj = { location: transformCheckpoint2026CardComponent };
  return closure_2.getConfig(obj).enabled;
};
