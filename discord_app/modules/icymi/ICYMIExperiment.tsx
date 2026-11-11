// discord_app/modules/icymi/ICYMIExperiment.tsx
import WaterwheelsDiscoverExperiment from "../waterwheels/WaterwheelsDiscoverExperiment.tsx";
import ICYMILabFeature from "ICYMILabFeature.tsx";
import ApexExperimentStore from "../experiments/apex/ApexExperimentStore.tsx";
import LabFeatureStore from "../labs/LabFeatureStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/ICYMIExperiment.tsx");

export const ICYMI_LAB_FEATURE = fn(10148).ICYMI_LAB_FEATURE;
export function useICYMIEnabled(TabsNavigator) {
  _require = TabsNavigator;
  items = [ApexExperimentStore, AuthenticationStore, LabFeatureStore, UserStore];
  const items1 = [TabsNavigator];
  return require("initialize").useStateFromStores(
    items,
    () => {
      value = LabFeatureStore.get(ICYMILabFeature.ICYMI_LAB_FEATURE);
      let waterwheelsDiscoverEnabled = !value;
      if (!value) {
        waterwheelsDiscoverEnabled = WaterwheelsDiscoverExperiment.getWaterwheelsDiscoverEnabled(closure_0);
        const tmp2Result = WaterwheelsDiscoverExperiment;
      }
      return waterwheelsDiscoverEnabled;
    },
    items1,
  );
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
