// === Module 12042: useDeveloperActivityShelfItems ===

// Module 12042 (useDeveloperActivityShelfItems)
import noop from "module_19" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 8855 */;

const require = fn;
let closure_4 = fn(1920).DEFAULT_EMBEDDED_ACTIVITY_CONFIG;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useDeveloperActivityShelfItems.tsx");

export const useDeveloperActivityShelfItems = function useDeveloperActivityShelfItems() {
  const items = [DeveloperActivityShelfStore];
  const stateFromStoresObject = isEnabled(lastUsedObject[3]).useStateFromStoresObject(items, () => ({ isEnabled: DeveloperActivityShelfStore.getIsEnabled(), lastUsedObject: DeveloperActivityShelfStore.getLastUsedObject() }), []);
  isEnabled = stateFromStoresObject.isEnabled;
  lastUsedObject = stateFromStoresObject.lastUsedObject;
  let obj = isEnabled(lastUsedObject[3]);
  const items1 = [DeveloperActivityShelfStore];
  const stateFromStoresArray = isEnabled(lastUsedObject[3]).useStateFromStoresArray(items1, () => DeveloperActivityShelfStore.getDeveloperShelfItems(), []);
  const items2 = [stateFromStoresArray, isEnabled, lastUsedObject];
  return stateFromStoresArray.useMemo(() => {
    if (isEnabled) {
      const mapped = stateFromStoresArray.map((application) => {
        let obj = { application, activity: null };
        obj = {};
        const merged = Object.assign(closure_1_4);
        const merged1 = Object.assign(application.embeddedActivityConfig);
        obj.application_id = application.id;
        obj.activity = obj;
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