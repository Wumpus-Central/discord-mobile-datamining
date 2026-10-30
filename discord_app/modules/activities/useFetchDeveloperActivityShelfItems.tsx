// === Module 12269: useFetchDeveloperActivityShelfItems ===

// Module 12269 (useFetchDeveloperActivityShelfItems)
import fetchDeveloperApplications from "fetchDeveloperApplications" /* 10916 */;
import noop from "module_19" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 5669 */;

require = fn;
const DevShelfFetchState = fn(5669).DevShelfFetchState;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useFetchDeveloperActivityShelfItems.tsx");

export function useFetchDeveloperActivityShelfItems() {
  isActivitiesEnabledForCurrentPlatform = isActivitiesEnabledForCurrentPlatform(setting[2]).useIsActivitiesEnabledForCurrentPlatform();
  const DeveloperMode = isActivitiesEnabledForCurrentPlatform(setting[3]).DeveloperMode;
  setting = DeveloperMode.getSetting();
  let obj = isActivitiesEnabledForCurrentPlatform(setting[2]);
  const items = [DeveloperActivityShelfStore];
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
      const developerApplications = fetchDeveloperApplications.fetchDeveloperApplications();
    }
  }, items1);
  return null;
}