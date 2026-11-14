// === Module 10215: WaterwheelsDiscoverExperiment ===

// Module 10215 (WaterwheelsDiscoverExperiment)
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1388 */;

const require = globalThis.__r;

const require = fn;
const ApexExperiment = fn(1452);
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-11-waterwheels-discover", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/WaterwheelsDiscoverExperiment.tsx");

export const WaterwheelsDiscoverExperiment = apexExperiment;
export function getWaterwheelsDiscoverEnabled(fetchDehydrated) {
  const currentUser = UserStore.getCurrentUser();
  let flag;
  if (currentUser != null) {
    flag = currentUser.isStaff();
  }
  if (flag == null) {
    flag = false;
  }
  let enabled = flag;
  if (enabled) {
    const obj = { location: fetchDehydrated };
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
}
export function useWaterwheelsDiscoverEnabled(WaterwheelsDiscoverPanel) {
  _require = WaterwheelsDiscoverPanel;
  items = [ApexExperimentStore, AuthenticationStore, UserStore];
  const items1 = [WaterwheelsDiscoverPanel];
  return require("initialize").useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.isStaff();
    }
    if (flag == null) {
      flag = false;
    }
    let enabled = flag;
    if (enabled) {
      const obj = { location: _location };
      enabled = apexExperiment.getConfig(obj).enabled;
    }
    return enabled;
  }, items1);
}