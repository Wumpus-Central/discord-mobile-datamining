// === Module 11919: useFetchDeveloperActivityShelfItems ===

// Module 11919 (useFetchDeveloperActivityShelfItems)
import closure_2 from "noop" /* 19 */;
import closure_3 from "initialize" /* 8515 */;
import { DevShelfFetchState } from "initialize" /* 8515 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/useFetchDeveloperActivityShelfItems.tsx");

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
      tmp = stateFromStores === closure_1_4.INITIALIZED;
    }
    if (tmp) {
      const developerApplications = isActivitiesEnabledForCurrentPlatform(setting[5]).fetchDeveloperApplications();
      const obj = isActivitiesEnabledForCurrentPlatform(setting[5]);
    }
  }, items1);
  return null;
};