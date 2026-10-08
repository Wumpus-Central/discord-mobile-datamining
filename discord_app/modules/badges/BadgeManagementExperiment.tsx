// discord_app/modules/badges/BadgeManagementExperiment.tsx
import c from "../../../_runtime/00576_c.js";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-08-badge-management",
  kind: "user",
  defaultConfig: { enabled: false, tenureBadgeHideable: false },
  variations: null,
};
let obj2 = { 1: null, 2: { enabled: true, tenureBadgeHideable: true } };
obj2[2] = { enabled: true, tenureBadgeHideable: false };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/badges/BadgeManagementExperiment.tsx");

export default apexExperiment;
export const useIsBadgeManagementEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsBadgeManagementEnabled(location) {
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
  : function useIsBadgeManagementEnabled(location) {
      return apexExperiment.useConfig({ location: location.location }).enabled;
    };
