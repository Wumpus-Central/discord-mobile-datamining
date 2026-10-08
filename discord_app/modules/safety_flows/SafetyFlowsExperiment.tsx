// discord_app/modules/safety_flows/SafetyFlowsExperiment.tsx
import c from "../../../_runtime/00576_c.js";
import apex_ApexExperimentDefault from "../experiments/apex/ApexExperiment.tsx";

require = fn;
let tmp2 = apex_ApexExperimentDefault({
  name: "2026-04-safety-flows",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
let closure_2 = tmp2;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/SafetyFlowsExperiment.tsx");

export default tmp2;
export const isEligibleForSafetyFlowsExperiment = function isEligibleForSafetyFlowsExperiment(location) {
  return closure_2.getConfig({ location: location.location }).enabled;
};
export const useIsEligibleForSafetyFlowsExperiment = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsEligibleForSafetyFlowsExperiment(location) {
      const cResult = c.c(2);
      const _location = location.location;
      if (cResult[0] !== _location) {
        const obj2 = { location: _location };
        cResult[0] = _location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return closure_2.useConfig(tmp2).enabled;
    }
  : function useIsEligibleForSafetyFlowsExperiment(location) {
      return closure_2.useConfig({ location: location.location }).enabled;
    };
