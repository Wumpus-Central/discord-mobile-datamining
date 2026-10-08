// discord_app/modules/premium/experiments/MobileNitroManageSubscriptionsSettingsExperiment.tsx
import c from "../../../../_runtime/00576_c.js";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = { name: "2026-06-macaron", kind: "user", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/premium/experiments/MobileNitroManageSubscriptionsSettingsExperiment.tsx",
);

export default apexExperiment;
export const useMobileNitroManageSubscriptionsSettingsExperiment = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMobileNitroManageSubscriptionsSettingsExperiment(location) {
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
      return apexExperiment.useConfig(tmp2).enabled;
    }
  : function useMobileNitroManageSubscriptionsSettingsExperiment(location) {
      return apexExperiment.useConfig({ location: location.location }).enabled;
    };
export const getMobileNitroManageSubscriptionsSettingsExperiment =
  function getMobileNitroManageSubscriptionsSettingsExperiment(location) {
    return apexExperiment.getConfig({ location: location.location }).enabled;
  };
