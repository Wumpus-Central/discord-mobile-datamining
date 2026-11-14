// === Module 10220: ICYMIExperiment ===

// Module 10220 (ICYMIExperiment)
import WaterwheelsDiscoverExperiment from "WaterwheelsDiscoverExperiment" /* 10215 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1388 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/ICYMIExperiment.tsx");

export function useICYMIEnabled(TabsNavigator) {
  _require = TabsNavigator;
  items = [ApexExperimentStore, AuthenticationStore, UserStore];
  const items1 = [TabsNavigator];
  return require("initialize").useStateFromStores(items, () => WaterwheelsDiscoverExperiment.getWaterwheelsDiscoverEnabled(closure_0), items1);
}
export function getICYMIEnabled(ICYMIManager) {
  return WaterwheelsDiscoverExperiment.getWaterwheelsDiscoverEnabled(ICYMIManager);
}
export function icymiEnabled(customScores) {
  return WaterwheelsDiscoverExperiment.getWaterwheelsDiscoverEnabled(customScores);
}