// discord_app/modules/premium/powerups/experiments/ExpiringPowerupCoachmarkExperiment.tsx
import c from "../../../../../_runtime/00576_c.js";
import apex_ApexExperimentDefault from "../../../experiments/apex/ApexExperiment.tsx";

require = fn;
let tmp2 = apex_ApexExperimentDefault({
  name: "2026-02-expiring-powerup-coachmark",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
let closure_2 = tmp2;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/powerups/experiments/ExpiringPowerupCoachmarkExperiment.tsx",
);

export default tmp2;
export const useExpiringPowerupCoachmarkEnabled = ReactCompilerGating.isReactCompilerEnabled()
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
