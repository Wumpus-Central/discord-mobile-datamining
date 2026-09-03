// === Module 11843: useDeveloperActivityShelfItems ===

// Module 11843 (useDeveloperActivityShelfItems)
import closure_2 from "noop" /* 19 */;
import closure_3 from "initialize" /* 8515 */;
import { DEFAULT_EMBEDDED_ACTIVITY_CONFIG as closure_4 } from "items3" /* 4506 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/useDeveloperActivityShelfItems.tsx");

export const useDeveloperActivityShelfItems = function useDeveloperActivityShelfItems() {
  const items = [closure_3];
  const stateFromStoresObject = isEnabled(lastUsedObject[3]).useStateFromStoresObject(items, () => ({ isEnabled: store.getIsEnabled(), lastUsedObject: store.getLastUsedObject() }), []);
  isEnabled = stateFromStoresObject.isEnabled;
  lastUsedObject = stateFromStoresObject.lastUsedObject;
  let obj = isEnabled(lastUsedObject[3]);
  const items1 = [closure_3];
  const stateFromStoresArray = isEnabled(lastUsedObject[3]).useStateFromStoresArray(items1, () => store.getDeveloperShelfItems(), []);
  const items2 = [stateFromStoresArray, isEnabled, lastUsedObject];
  return stateFromStoresArray.useMemo(() => {
    if (isEnabled) {
      const mapped = stateFromStoresArray.map((application) => {
        let obj = { application, activity: null };
        obj = {};
        const merged = Object.assign(closure_4);
        const merged1 = Object.assign(application.embeddedActivityConfig);
        obj.application_id = application.id;
        obj[1] = obj;
        return obj;
      });
      let sorted = mapped.sort((arg0, arg1) => {
        let num = 1;
        if (null != dependencyMap[arg0.application.id]) {
          let num2 = -1;
          if (null != tmp2) {
            num2 = tmp2 - tmp;
          }
          num = num2;
        }
        return num;
      });
    } else {
      sorted = [];
    }
    return sorted;
  }, items2);
};