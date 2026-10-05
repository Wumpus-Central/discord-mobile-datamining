// discord_app/modules/guild_onboarding_home/experiments/ServerOnboardingSetupProgressExperiment.tsx
import react from "../../../../_runtime/00576_react.js";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj2;
let obj = {
  name: "2026-09-server-onboarding-setup-progress",
  kind: "user",
  defaultConfig: { showSetupProgressRow: false, boostBeforeAddApp: false },
  variations: obj2,
};
obj2 = { 1: null, 2: { showSetupProgressRow: true, boostBeforeAddApp: false } };
obj2[2] = { showSetupProgressRow: true, boostBeforeAddApp: true };
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
      return closure_2.useConfig(tmp2);
    }
  : (location) => {
      const obj = { location };
      return closure_2.useConfig(obj);
    };
const result = size.fileFinishedImporting(
  "modules/guild_onboarding_home/experiments/ServerOnboardingSetupProgressExperiment.tsx",
);

export const useServerOnboardingSetupProgressExperiment = tmp2;
