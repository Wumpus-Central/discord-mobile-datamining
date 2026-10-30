// discord_app/modules/conjure/experiments/ConjureMobileExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let obj = { name: "2026-10-conjure-mobile", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null, 2: { enabled: false }, 3: { enabled: true, entryPoint: "you_bar" } };
obj2[3] = { enabled: true, entryPoint: "profile" };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/conjure/experiments/ConjureMobileExperiment.tsx");

export default apexExperiment;
export function useIsConjureMobileEnabled(canConjureCustomWidget, ConjureAppChannelSheet) {
  _require = canConjureCustomWidget;
  dependencyMap = ConjureAppChannelSheet;
  const items = [require("ApexExperiment").ApexExperimentStore];
  const items1 = [canConjureCustomWidget, ConjureAppChannelSheet];
  return require("initialize").useStateFromStores(
    items,
    () => {
      let enabled = closure_0;
      if (closure_0) {
        const obj = { location: _location };
        enabled = apexExperiment.getConfig(obj).enabled;
      }
      return enabled;
    },
    items1,
  );
}
export function isConjureMobileEnabled(openConjureHomeScreen) {
  return apexExperiment.getConfig({ location: openConjureHomeScreen }).enabled;
}
