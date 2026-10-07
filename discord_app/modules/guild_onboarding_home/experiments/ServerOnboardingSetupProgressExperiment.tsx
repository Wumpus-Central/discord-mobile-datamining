// discord_app/modules/guild_onboarding_home/experiments/ServerOnboardingSetupProgressExperiment.tsx
import c from "../../../../_runtime/00576_c.js";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-09-server-onboarding-setup-progress",
  kind: "user",
  defaultConfig: { showSetupProgressRow: false, boostBeforeAddApp: false },
  variations: null,
};
let obj2 = { 1: null, 2: { showSetupProgressRow: true, boostBeforeAddApp: false } };
obj2[2] = { showSetupProgressRow: true, boostBeforeAddApp: true };
obj.variations = obj2;
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/guild_onboarding_home/experiments/ServerOnboardingSetupProgressExperiment.tsx",
);

export const useServerOnboardingSetupProgressExperiment = ReactCompilerGating.isReactCompilerEnabled()
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
      return closure_2.useConfig(tmp2);
    }
  : (location) => closure_2.useConfig({ location });
