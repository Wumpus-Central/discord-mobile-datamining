// discord_app/modules/activities/useFetchDeveloperActivityShelfItems.tsx
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore.tsx";

require = fn;
const DevShelfFetchState = fn(8855).DevShelfFetchState;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useFetchDeveloperActivityShelfItems.tsx");

export const useFetchDeveloperActivityShelfItems = function useFetchDeveloperActivityShelfItems() {
  isActivitiesEnabledForCurrentPlatform = isActivitiesEnabledForCurrentPlatform(
    setting[2],
  ).useIsActivitiesEnabledForCurrentPlatform();
  const DeveloperMode = isActivitiesEnabledForCurrentPlatform(setting[3]).DeveloperMode;
  setting = DeveloperMode.getSetting();
  let obj = isActivitiesEnabledForCurrentPlatform(setting[2]);
  const items = [DeveloperActivityShelfStore];
  const stateFromStores = isActivitiesEnabledForCurrentPlatform(setting[4]).useStateFromStores(
    items,
    () => fetchState.getFetchState(),
    [],
  );
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
      const developerApplications = EmbeddedActivitiesActionCreators.fetchDeveloperApplications();
    }
  }, items1);
  return null;
};
