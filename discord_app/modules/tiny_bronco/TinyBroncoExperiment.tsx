// discord_app/modules/tiny_bronco/TinyBroncoExperiment.tsx
import c from "../../../_runtime/00576_c.js";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_2 = ApexExperiment.createApexExperiment({
  name: "2026-08-tiny-bronco",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/tiny_bronco/TinyBroncoExperiment.tsx");

export const useIsTinyBroncoEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
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
  : (location) => closure_2.useConfig({ location }).enabled;
export const isTinyBroncoEnabled = function isTinyBroncoEnabled(location) {
  return closure_2.getConfig({ location }).enabled;
};
