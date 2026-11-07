// === Module 9002: ICYMIExperiment ===

// Module 9002 (ICYMIExperiment)
import WaterwheelsDiscoverExperiment from "WaterwheelsDiscoverExperiment" /* 9000 */;
import ICYMILabFeature from "ICYMILabFeature" /* 9001 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import LabFeatureStore from "LabFeatureStore" /* 8633 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1385 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/ICYMIExperiment.tsx");

export const ICYMI_LAB_FEATURE = fn(9001).ICYMI_LAB_FEATURE;
export function useICYMIEnabled(TabsNavigator) {
  _require = TabsNavigator;
  items = [ApexExperimentStore, AuthenticationStore, LabFeatureStore, UserStore];
  const items1 = [TabsNavigator];
  return require("initialize").useStateFromStores(items, () => {
    value = LabFeatureStore.get(ICYMILabFeature.ICYMI_LAB_FEATURE);
    let waterwheelsDiscoverEnabled = !value;
    if (!value) {
      waterwheelsDiscoverEnabled = WaterwheelsDiscoverExperiment.getWaterwheelsDiscoverEnabled(closure_0);
      const tmp2Result = WaterwheelsDiscoverExperiment;
    }
    return waterwheelsDiscoverEnabled;
  }, items1);
}
export function getICYMIEnabled(ICYMIManager) {
  value = LabFeatureStore.get(ICYMILabFeature.ICYMI_LAB_FEATURE);
  let waterwheelsDiscoverEnabled = !value;
  if (!value) {
    waterwheelsDiscoverEnabled = WaterwheelsDiscoverExperiment.getWaterwheelsDiscoverEnabled(ICYMIManager);
    const tmpResult = WaterwheelsDiscoverExperiment;
  }
  return waterwheelsDiscoverEnabled;
}
export function icymiEnabled(customScores) {
  value = LabFeatureStore.get(ICYMILabFeature.ICYMI_LAB_FEATURE);
  let waterwheelsDiscoverEnabled = !value;
  if (!value) {
    waterwheelsDiscoverEnabled = WaterwheelsDiscoverExperiment.getWaterwheelsDiscoverEnabled(customScores);
    const tmpResult = WaterwheelsDiscoverExperiment;
  }
  return waterwheelsDiscoverEnabled;
}