// === Module 9025: useApplicationWidgetConfigs ===

// Module 9025 (useApplicationWidgetConfigs)
import GlobalUtils from "GlobalUtils" /* 1369 */;
import ApplicationWidgetConfigActions from "ApplicationWidgetConfigActions" /* 9027 */;
import noop from "module_19" /* 19 */;
import ApplicationWidgetConfigStore from "ApplicationWidgetConfigStore" /* 9026 */;

require = fn;
const FetchState = fn(9026).FetchState;
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_widget/hooks/useApplicationWidgetConfigs.tsx");

export default function useApplicationWidgetConfigs(arg0) {
  _require = arg0;
  const DeveloperMode = require("UserSettings").DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items = [stateFromStores1];
  const stateFromStores = require("initialize").useStateFromStores(items, () => stateFromStores1.getFeaturedFetchState());
  let obj = require("initialize");
  const items1 = [stateFromStores1];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () => stateFromStores1.getDeveloperFetchState());
  const obj2 = require("initialize");
  const items2 = [stateFromStores1];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items2, () => closure_0.filter((item) => fetchState.getFetchState(item) === constants.NOT_FETCHED));
  const obj3 = require("initialize");
  const items3 = [stateFromStores1];
  const stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items3, () => {
    const mapped = closure_0.map((item) => config.getConfig(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
  const effect = stateFromStores.useEffect(() => {
    const featuredWidgetConfigs = closure_0(setting[5]).fetchFeaturedWidgetConfigs();
    featuredWidgetConfigs.catch(() => {

    });
  }, []);
  const items4 = [setting];
  const effect1 = stateFromStores.useEffect(() => {
    if (setting) {
      const developerWidgetConfigs = ApplicationWidgetConfigActions.fetchDeveloperWidgetConfigs();
      developerWidgetConfigs.catch(() => {

      });
    }
  }, items4);
  const items5 = [stateFromStores1, stateFromStores, stateFromStoresArray, setting];
  const effect2 = stateFromStores.useEffect(() => {
    if (stateFromStores !== FetchState.NOT_FETCHED) {
      if (tmp !== tmp2.FETCHING) {
        if (!setting) {
          for (const item10012 of stateFromStoresArray) {
            let obj = ApplicationWidgetConfigActions;
            let widgetConfigs = obj.fetchWidgetConfigs(item10012);
            let catchPromise = widgetConfigs.catch(() => {

            });
            continue;
          }
        }
      }
    }
  }, items5);
  return stateFromStoresArray1;
};