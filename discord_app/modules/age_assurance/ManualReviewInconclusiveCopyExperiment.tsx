// discord_app/modules/age_assurance/ManualReviewInconclusiveCopyExperiment.tsx
import react from "../../../_runtime/00576_react.js";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
let obj = {
  kind: "user",
  name: "2026-09-manual-review-inconclusive-copy",
  defaultConfig: { enabled: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { enabled: true };
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
const result = size.fileFinishedImporting("modules/age_assurance/ManualReviewInconclusiveCopyExperiment.tsx");

export const useIsManualReviewInconclusiveCopyEnabled = tmp2;
