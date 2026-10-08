// discord_app/modules/icymi/ICYMIExperiment.tsx
import c from "../../../_runtime/00576_c.js";
import useLabFeatureDefault from "../labs/useLabFeature.tsx";
import LabFeatureStore from "../labs/LabFeatureStore.tsx";

require = fn;
const hide_icymi_tab = "hide_icymi_tab";
let ApexExperiment = fn(1452);
let obj2 = { name: "2026-04-icymi-staff-only", kind: "user", defaultConfig: { enabled: false }, variations: null };
let obj3 = { 1: null };
obj3[1] = { enabled: true };
obj2.variations = obj3;
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const ReactCompilerGating = fn(558);
function getICYMIEnabled(ICYMIManager) {
  value = LabFeatureStore.get(hide_icymi_tab);
  let enabled = !value;
  if (!value) {
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
}
ApexExperiment = fn(1452);
const obj6 = {
  name: "2026-03-icymi-staff-debugging-utility",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj7 = { 1: null };
obj7[1] = { enabled: true };
obj6.variations = obj7;
const apexExperiment1 = ApexExperiment.createApexExperiment(obj6);
ApexExperiment = fn(1452);
const obj9 = {
  name: "2026-03-icymi-desktop",
  kind: "user",
  defaultConfig: { icymiDesktopEnabled: false },
  variations: null,
};
const obj10 = { 1: null };
obj10[1] = { icymiDesktopEnabled: true };
obj9.variations = obj10;
const apexExperiment2 = ApexExperiment.createApexExperiment(obj9);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/ICYMIExperiment.tsx");

export const ICYMI_LAB_FEATURE = "hide_icymi_tab";
export const ICYMIStaffOnlyExperiment = apexExperiment;
export const useICYMIEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useICYMIEnabled(location) {
      const cResult = c.c(4);
      const tmp2 = useLabFeatureDefault(hide_icymi_tab);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp3 = obj2;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] !== location) {
        const obj3 = { location };
        cResult[2] = location;
        cResult[3] = obj3;
        let tmp4 = obj3;
      } else {
        tmp4 = cResult[3];
      }
      const config = apexExperiment2.useConfig(tmp4);
      let enabled = !tmp2;
      if (!tmp2) {
        enabled = apexExperiment.useConfig(tmp3).enabled;
      }
      return enabled;
    }
  : function useICYMIEnabled(location) {
      const tmp = useLabFeatureDefault(hide_icymi_tab);
      const config = apexExperiment2.useConfig({ location });
      let enabled = !tmp;
      if (!tmp) {
        enabled = apexExperiment.useConfig(obj).enabled;
      }
      return enabled;
    };
export { getICYMIEnabled };
export const icymiEnabled = function icymiEnabled(customScores) {
  value = LabFeatureStore.get(hide_icymi_tab);
  let enabled = !value;
  if (!value) {
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
};
export const ICYMIStaffDebuggingUtilityExperiment = apexExperiment1;
export const ICYMIDesktopExperiment = apexExperiment2;
