// discord_app/modules/icymi/ICYMIExperiment.tsx
import WaterwheelsDiscoverExperiment from "../waterwheels/WaterwheelsDiscoverExperiment.tsx";
import ApexExperimentStore from "../experiments/apex/ApexExperimentStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/ICYMIExperiment.tsx");

export function useICYMIEnabled(TabsNavigator) {
  _require = TabsNavigator;
  items = [ApexExperimentStore, AuthenticationStore, UserStore];
  const items1 = [TabsNavigator];
  return require("initialize").useStateFromStores(
    items,
    () => WaterwheelsDiscoverExperiment.getWaterwheelsDiscoverEnabled(closure_0),
    items1,
  );
}
export function getICYMIEnabled(ICYMIManager) {
  return WaterwheelsDiscoverExperiment.getWaterwheelsDiscoverEnabled(ICYMIManager);
}
export function icymiEnabled(customScores) {
  return WaterwheelsDiscoverExperiment.getWaterwheelsDiscoverEnabled(customScores);
}
