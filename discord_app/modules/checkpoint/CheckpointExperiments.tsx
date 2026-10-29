// discord_app/modules/checkpoint/CheckpointExperiments.tsx
import c from "../../../_runtime/00576_c.js";
import ApexExperiment_mod from "../experiments/apex/index.tsx";
import "ReactCompilerGating";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let ApexExperiment = ApexExperiment_mod;
let closure_2 = ApexExperiment.createApexExperiment({
  name: "2026-09-build-a-bear",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
let ApexExperiment = ApexExperiment_mod;
let closure_3 = ApexExperiment.createApexExperiment({
  name: "2026-09-build-a-bear-cards",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const obj = {
  name: "2026-09-build-a-bear",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
};
let obj2 = {
  name: "2026-09-build-a-bear-cards",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsCheckpointEnabled(location) {
      const cResult = c.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return closure_2.useConfig(tmp2).enabled;
    }
  : function useIsCheckpointEnabled(location) {
      return closure_2.useConfig({ location }).enabled;
    };
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointExperiments.tsx");

export const useIsCheckpointEnabled = tmp2;
export function getIsCheckpointEnabled(getCheckpointClickable) {
  return closure_2.getConfig({ location: getCheckpointClickable }).enabled;
}
export const useIsCheckpointCardEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsCheckpointCardEnabled(location) {
      const cResult = c.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return closure_3.useConfig(tmp2).enabled;
    }
  : function useIsCheckpointCardEnabled(location) {
      return closure_3.useConfig({ location }).enabled;
    };
export function getIsCheckpointCardEnabled(transformCheckpoint2026CardComponent) {
  return closure_3.getConfig({ location: transformCheckpoint2026CardComponent }).enabled;
}
