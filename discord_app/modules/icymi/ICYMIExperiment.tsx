// === Module 9095: apexExperiment ===

// Module 9095 (apexExperiment)
import useLabFeatureDefault from "useLabFeature" /* 9098 */;
import closure_2 from "getUserAgnosticState" /* 9096 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const hide_icymi_tab = "hide_icymi_tab";
ApexExperiment = { 1: null };
ApexExperiment[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-icymi-staff-only", kind: "user", defaultConfig: { enabled: false }, variations: ApexExperiment });
ApexExperiment = { 1: null };
ApexExperiment[1] = { enabled: true };
const apexExperiment1 = ApexExperiment.createApexExperiment({ name: "2026-03-icymi-staff-debugging-utility", kind: "user", defaultConfig: { enabled: false }, variations: ApexExperiment });
const obj1 = { 1: null };
obj1[1] = { icymiDesktopEnabled: true };
const apexExperiment2 = ApexExperiment.createApexExperiment({ name: "2026-03-icymi-desktop", kind: "user", defaultConfig: { icymiDesktopEnabled: false }, variations: obj1 });
const result = require("set").fileFinishedImporting("modules/icymi/ICYMIExperiment.tsx");

export const ICYMI_LAB_FEATURE = "hide_icymi_tab";
export const ICYMIStaffOnlyExperiment = apexExperiment;
export const useICYMIEnabled = function useICYMIEnabled(TabsNavigator) {
  const tmp = useLabFeatureDefault(hide_icymi_tab);
  let obj = { location: TabsNavigator };
  obj = { location: TabsNavigator };
  const config = apexExperiment2.useConfig(obj);
  let enabled = !tmp;
  if (!tmp) {
    enabled = apexExperiment.useConfig(obj).enabled;
  }
  return enabled;
};
export const getICYMIEnabled = function getICYMIEnabled(ICYMIManager) {
  const value = closure_2.get(hide_icymi_tab);
  let enabled = !value;
  if (!value) {
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
};
export const ICYMIStaffDebuggingUtilityExperiment = apexExperiment1;
export const ICYMIDesktopExperiment = apexExperiment2;