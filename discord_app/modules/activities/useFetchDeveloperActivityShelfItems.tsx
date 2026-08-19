// === Module 11295: useFetchDeveloperActivityShelfItems ===

// Module 11295 (useFetchDeveloperActivityShelfItems)
import noop from "noop" /* 19 */;
import initialize from "initialize" /* 7872 */;
import { DevShelfFetchState } from "initialize" /* 7872 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/activities/useFetchDeveloperActivityShelfItems.tsx");

export const useFetchDeveloperActivityShelfItems = function useFetchDeveloperActivityShelfItems() {
  isActivitiesEnabledForCurrentPlatform = isActivitiesEnabledForCurrentPlatform(setting[2]).useIsActivitiesEnabledForCurrentPlatform();
  const DeveloperMode = isActivitiesEnabledForCurrentPlatform(setting[3]).DeveloperMode;
  setting = DeveloperMode.getSetting();
  let obj = isActivitiesEnabledForCurrentPlatform(setting[2]);
  const items = [closure_3];
  const stateFromStores = isActivitiesEnabledForCurrentPlatform(setting[4]).useStateFromStores(items, () => fetchState.getFetchState(), []);
  const items1 = [isActivitiesEnabledForCurrentPlatform, stateFromStores, setting];
  const effect = stateFromStores.useEffect(() => {
    let tmp = isActivitiesEnabledForCurrentPlatform;
    if (isActivitiesEnabledForCurrentPlatform) {
      tmp = setting;
    }
    if (tmp) {
      tmp = stateFromStores === DevShelfFetchState.INITIALIZED;
    }
    if (tmp) {
      const developerApplications = isActivitiesEnabledForCurrentPlatform(setting[5]).fetchDeveloperApplications();
      const obj = isActivitiesEnabledForCurrentPlatform(setting[5]);
    }
  }, items1);
  return null;
};