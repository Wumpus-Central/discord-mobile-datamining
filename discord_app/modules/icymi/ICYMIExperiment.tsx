// === Module 8473: ICYMIExperiment ===

// Module 8473 (ICYMIExperiment)
import useLabFeatureDefault from "useLabFeature" /* 8476 */;
import LabFeatureStore from "LabFeatureStore" /* 8474 */;

const hide_icymi_tab = "hide_icymi_tab";
let ApexExperiment = fn(1434);
const obj2 = { name: "2026-04-icymi-staff-only", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj3 = { 1: null };
obj3[1] = { enabled: true };
obj2.variations = obj3;
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
ApexExperiment = fn(1434);
const obj5 = { name: "2026-03-icymi-staff-debugging-utility", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj6 = { 1: null };
obj6[1] = { enabled: true };
obj5.variations = obj6;
const apexExperiment1 = ApexExperiment.createApexExperiment(obj5);
ApexExperiment = fn(1434);
const obj8 = { name: "2026-03-icymi-desktop", kind: "user", defaultConfig: { icymiDesktopEnabled: false }, variations: null };
const obj9 = { 1: null };
obj9[1] = { icymiDesktopEnabled: true };
obj8.variations = obj9;
const apexExperiment2 = ApexExperiment.createApexExperiment(obj8);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/ICYMIExperiment.tsx");

export const ICYMI_LAB_FEATURE = "hide_icymi_tab";
export const ICYMIStaffOnlyExperiment = apexExperiment;
export const useICYMIEnabled = function useICYMIEnabled(TabsNavigator) {
  const tmp = useLabFeatureDefault(hide_icymi_tab);
  const config = apexExperiment2.useConfig({ location: TabsNavigator });
  let enabled = !tmp;
  if (!tmp) {
    enabled = apexExperiment.useConfig(obj).enabled;
  }
  return enabled;
};
export const getICYMIEnabled = function getICYMIEnabled(ICYMIManager) {
  value = LabFeatureStore.get(hide_icymi_tab);
  let enabled = !value;
  if (!value) {
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
};
export const ICYMIStaffDebuggingUtilityExperiment = apexExperiment1;
export const ICYMIDesktopExperiment = apexExperiment2;