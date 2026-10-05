// discord_app/modules/ads/AdTopicOptOutClientExperiment.tsx
import react from "../../../_runtime/00576_react.js";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
let obj = {
  kind: "user",
  name: "2026-08-ad-topic-opt-out-client",
  defaultConfig: { enabled: false },
  variations: obj2,
};
obj2 = { 1: null, 2: { enabled: false }, 3: { enabled: true }, 4: { enabled: true }, 5: { enabled: true } };
obj2[5] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "useIsAdTopicOptOutClientEnabled" };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      return apexExperiment.useConfig(first).enabled;
    }
  : () => apexExperiment.useConfig({ location: "useIsAdTopicOptOutClientEnabled" }).enabled;
const result = size.fileFinishedImporting("modules/ads/AdTopicOptOutClientExperiment.tsx");

export const AdTopicOptOutClientExperiment = apexExperiment;
export const useIsAdTopicOptOutClientEnabled = tmp3;
export const isAdTopicOptOutClientEnabled = function isAdTopicOptOutClientEnabled() {
  return apexExperiment.getConfig({ location: "isAdTopicOptOutClientEnabled" }).enabled;
};
