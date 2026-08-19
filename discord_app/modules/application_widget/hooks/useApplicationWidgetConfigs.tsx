// discord_app/modules/application_widget/hooks/useApplicationWidgetConfigs.tsx
import noop from "../../../../_runtime/00019_noop.js";
import updateApplicationConfigs from "../ApplicationWidgetConfigStore.tsx";
import { FetchState } from "../ApplicationWidgetConfigStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/application_widget/hooks/useApplicationWidgetConfigs.tsx");

export default function useApplicationWidgetConfigs(arg0) {
  const _require = arg0;
  const DeveloperMode = _require(setting[2]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items = [stateFromStores1];
  const stateFromStores = _require(setting[3]).useStateFromStores(items, () => stateFromStores1.getFeaturedFetchState());
  let obj = _require(setting[3]);
  const items1 = [stateFromStores1];
  stateFromStores1 = _require(setting[3]).useStateFromStores(items1, () => stateFromStores1.getDeveloperFetchState());
  const obj2 = _require(setting[3]);
  const items2 = [stateFromStores1];
  const stateFromStoresArray = _require(setting[3]).useStateFromStoresArray(items2, () => lib.filter((item, index) => fetchState.getFetchState(item) === constants.NOT_FETCHED));
  const obj3 = _require(setting[3]);
  const items3 = [stateFromStores1];
  const stateFromStoresArray1 = _require(setting[3]).useStateFromStoresArray(items3, () => {
    const mapped = lib.map((item, index) => config.getConfig(item));
    return mapped.filter(lib(setting[4]).isNotNullish);
  });
  const effect = stateFromStores.useEffect(() => {
    const featuredWidgetConfigs = lib(setting[5]).fetchFeaturedWidgetConfigs();
    featuredWidgetConfigs.catch((error) => {

    });
  }, []);
  const items4 = [setting];
  const effect1 = stateFromStores.useEffect(() => {
    if (setting) {
      const developerWidgetConfigs = lib(setting[5]).fetchDeveloperWidgetConfigs();
      developerWidgetConfigs.catch((error) => {

      });
      const obj = lib(setting[5]);
    }
  }, items4);
  const items5 = [stateFromStores1, stateFromStores, stateFromStoresArray, setting];
  const effect2 = stateFromStores.useEffect(() => {
    if (stateFromStores !== stateFromStoresArray.NOT_FETCHED) {
      if (tmp !== stateFromStoresArray.FETCHING) {
        if (!setting) {
          for (const item10012 of stateFromStoresArray) {
            let obj = lib(setting[5]);
            let widgetConfigs = obj.fetchWidgetConfigs(item10012);
            let catchPromise = widgetConfigs.catch((error) => {

            });
            continue;
          }
        }
      }
    }
  }, items5);
  return stateFromStoresArray1;
};