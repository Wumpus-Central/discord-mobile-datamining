// === Module 9926: ICYMIExperiment ===

// Module 9926 (ICYMIExperiment)
import WaterwheelsDiscoverExperiment from "WaterwheelsDiscoverExperiment" /* 9921 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1245 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1386 */;

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