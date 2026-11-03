// === Module 9049: ICYMIExperiment ===

// Module 9049 (ICYMIExperiment)
import useLabFeatureDefault from "useLabFeature" /* 8688 */;
import ICYMILabFeature from "ICYMILabFeature" /* 9050 */;
import WaterwheelsDiscoverExperiment from "WaterwheelsDiscoverExperiment" /* 9051 */;
import LabFeatureStore from "LabFeatureStore" /* 8686 */;

require = fn;
let ApexExperiment = fn(1449);
let obj2 = { name: "2026-04-icymi-staff-only", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj3 = { 1: null };
obj3[1] = { enabled: true };
obj2.variations = obj3;
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
ApexExperiment = fn(1449);
const obj5 = { name: "2026-03-icymi-staff-debugging-utility", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj6 = { 1: null };
obj6[1] = { enabled: true };
obj5.variations = obj6;
const apexExperiment1 = ApexExperiment.createApexExperiment(obj5);
ApexExperiment = fn(1449);
const obj8 = { name: "2026-03-icymi-desktop", kind: "user", defaultConfig: { icymiDesktopEnabled: false }, variations: null };
const obj9 = { 1: null };
obj9[1] = { icymiDesktopEnabled: true };
obj8.variations = obj9;
const apexExperiment2 = ApexExperiment.createApexExperiment(obj8);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/ICYMIExperiment.tsx");

export const ICYMI_LAB_FEATURE = fn(9050).ICYMI_LAB_FEATURE;
export const ICYMIStaffOnlyExperiment = apexExperiment;
export function useICYMIEnabled(TabsNavigator) {
  const tmpResult = useLabFeatureDefault(ICYMILabFeature.ICYMI_LAB_FEATURE);
  let enabled = apexExperiment.useConfig({ location: TabsNavigator }).enabled;
  const config = apexExperiment2.useConfig({ location: TabsNavigator });
  const obj = { location: TabsNavigator };
  const obj2 = { location: TabsNavigator };
  let tmp4 = !tmpResult;
  if (!tmpResult) {
    if (!enabled) {
      enabled = obj3.useWaterwheelsDiscoverEnabled(TabsNavigator);
    }
    tmp4 = enabled;
  }
  return tmp4;
}
export function getICYMIEnabled(ICYMIManager) {
  value = LabFeatureStore.get(ICYMILabFeature.ICYMI_LAB_FEATURE);
  let enabled = apexExperiment.getConfig({ location: ICYMIManager }).enabled;
  let tmp4 = !value;
  if (!value) {
    if (!enabled) {
      enabled = WaterwheelsDiscoverExperiment.getWaterwheelsDiscoverEnabled(ICYMIManager);
      const tmpResult = WaterwheelsDiscoverExperiment;
    }
    tmp4 = enabled;
  }
  return tmp4;
}
export function icymiEnabled(customScores) {
  value = LabFeatureStore.get(ICYMILabFeature.ICYMI_LAB_FEATURE);
  let enabled = apexExperiment.getConfig({ location: customScores }).enabled;
  let tmp4 = !value;
  if (!value) {
    if (!enabled) {
      enabled = WaterwheelsDiscoverExperiment.getWaterwheelsDiscoverEnabled(customScores);
      const tmpResult = WaterwheelsDiscoverExperiment;
    }
    tmp4 = enabled;
  }
  return tmp4;
}
export const ICYMIStaffDebuggingUtilityExperiment = apexExperiment1;
export const ICYMIDesktopExperiment = apexExperiment2;