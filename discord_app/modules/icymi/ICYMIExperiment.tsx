// === Module 8352: ICYMIExperiment ===

// Module 8352 (ICYMIExperiment)
import useLabFeatureDefault from "useLabFeature" /* 8355 */;
import LabFeatureStore from "LabFeatureStore" /* 8353 */;

const hide_icymi_tab = "hide_icymi_tab";
fn(1433);
let ApexExperiment = { name: "2026-04-icymi-staff-only", kind: "user", defaultConfig: { enabled: false }, variations: null };
ApexExperiment = { 1: null };
ApexExperiment[1] = { enabled: true };
ApexExperiment.variations = ApexExperiment;
ApexExperiment.createApexExperiment(ApexExperiment);
ApexExperiment = fn(1433);
const obj1 = { name: "2026-03-icymi-staff-debugging-utility", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj1.variations = obj2;
const apexExperiment1 = ApexExperiment.createApexExperiment(obj1);
fn(1433);
ApexExperiment = { name: "2026-03-icymi-desktop", kind: "user", defaultConfig: { icymiDesktopEnabled: false }, variations: null };
const obj4 = { 1: null };
obj4[1] = { icymiDesktopEnabled: true };
ApexExperiment.variations = obj4;
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/ICYMIExperiment.tsx");

export const ICYMI_LAB_FEATURE = "hide_icymi_tab";
export const ICYMIStaffOnlyExperiment = ApexExperiment;
export const useICYMIEnabled = function useICYMIEnabled(TabsNavigator) {
  const tmp = useLabFeatureDefault(hide_icymi_tab);
  let obj = { location: TabsNavigator };
  obj = { location: TabsNavigator };
  const config = ApexExperiment.useConfig(obj);
  let enabled = !tmp;
  if (!tmp) {
    enabled = ApexExperiment.useConfig(obj).enabled;
  }
  return enabled;
};
export const getICYMIEnabled = function getICYMIEnabled(ICYMIManager) {
  value = LabFeatureStore.get(hide_icymi_tab);
  let enabled = !value;
  if (!value) {
    enabled = ApexExperiment.getConfig(obj).enabled;
  }
  return enabled;
};
export const ICYMIStaffDebuggingUtilityExperiment = apexExperiment1;
export const ICYMIDesktopExperiment = ApexExperiment;