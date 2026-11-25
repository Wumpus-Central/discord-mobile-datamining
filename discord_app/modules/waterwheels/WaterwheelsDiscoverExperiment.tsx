// === Module 8879: WaterwheelsDiscoverExperiment ===

// Module 8879 (WaterwheelsDiscoverExperiment)
import ApexExperimentStore from "ApexExperimentStore" /* 1245 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1386 */;

const require = globalThis.__r;

const require = fn;
const ApexExperiment = fn(1450);
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-11-waterwheels-discover", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/WaterwheelsDiscoverExperiment.tsx");

export const WaterwheelsDiscoverExperiment = apexExperiment;
export function getWaterwheelsDiscoverEnabled(fetchDehydrated) {
  return apexExperiment.getConfig({ location: fetchDehydrated }).enabled;
}
export function useWaterwheelsDiscoverEnabled(WaterwheelsDiscoverPanel) {
  _require = WaterwheelsDiscoverPanel;
  items = [ApexExperimentStore, AuthenticationStore, UserStore];
  const items1 = [WaterwheelsDiscoverPanel];
  return require("initialize").useStateFromStores(items, () => apexExperiment.getConfig({ location: _location }).enabled, items1);
}