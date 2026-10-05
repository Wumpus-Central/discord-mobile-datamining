// discord_app/modules/premium/powerups/experiments/ExpiringPowerupCoachmarkExperiment.tsx
import react from "../../../../../_runtime/00576_react.js";
import apex_ApexExperimentDefault from "../../../experiments/apex/ApexExperiment.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-02-expiring-powerup-coachmark",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
};
let tmp2 = apex_ApexExperimentDefault(obj);
let closure_2 = tmp2;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
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
const result = size.fileFinishedImporting(
  "modules/premium/powerups/experiments/ExpiringPowerupCoachmarkExperiment.tsx",
);

export default tmp2;
export const useExpiringPowerupCoachmarkEnabled = tmp3;
