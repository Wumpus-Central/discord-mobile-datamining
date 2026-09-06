// === Module 15076: useAndroidUnsyncedFilter ===

// Module 15076 (useAndroidUnsyncedFilter)
import _mod19 from "module_19" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 4559 */;
import IAPStore from "IAPStore" /* 7237 */;
import size from "module_2" /* 2 */;

_mod19.useCallback;
const result = size.fileFinishedImporting("modules/collectibles/native/useAndroidUnsyncedFilter.tsx");

export const useAndroidUnsyncedFilter = function useAndroidUnsyncedFilter() {
  const items = [IAPStore];
  stateFromStores = stateFromStores(stateFromStores1[3]).useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  const obj = stateFromStores(stateFromStores1[3]);
  const items1 = [DevSettingsStore];
  stateFromStores1 = stateFromStores(stateFromStores1[3]).useStateFromStores(items1, () => DevSettingsStore.get("bypass_google_sku_sync"));
  const items2 = [stateFromStores, stateFromStores1];
  return useCallback((arr) => {
    let found = arr;
    if (obj.isGooglePlayBillingSupported()) {
      found = arr;
      if (!stateFromStores1) {
        found = arr;
        if (!stateFromStores) {
          found = arr.filter((item) => stateFromStores(stateFromStores1[5]).isGPlaySynced(item));
        }
      }
    }
    return found;
  }, items2);
};