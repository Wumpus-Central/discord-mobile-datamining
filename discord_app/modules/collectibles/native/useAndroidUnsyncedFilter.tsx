// discord_app/modules/collectibles/native/useAndroidUnsyncedFilter.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import noop from "../../../../_runtime/00019_noop.js";
import getUserAgnosticState from "../../devtools/dev_settings/DevSettingsStore.tsx";
import updateProduct from "../../../stores/native/IAPStore.android.tsx";

noop.useCallback;
const result = obj132.fileFinishedImporting("modules/collectibles/native/useAndroidUnsyncedFilter.tsx");

export const useAndroidUnsyncedFilter = function useAndroidUnsyncedFilter() {
  const items = [closure_4];
  stateFromStores = stateFromStores(stateFromStores1[3]).useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  const obj = stateFromStores(stateFromStores1[3]);
  const items1 = [closure_3];
  stateFromStores1 = stateFromStores(stateFromStores1[3]).useStateFromStores(items1, () => closure_3.get("bypass_google_sku_sync"));
  const items2 = [stateFromStores, stateFromStores1];
  return useCallback((arr) => {
    let found = arr;
    if (obj.isGooglePlayBillingSupported()) {
      found = arr;
      if (!stateFromStores1) {
        found = arr;
        if (!stateFromStores) {
          found = arr.filter((item, index) => callback(table[5]).isGPlaySynced(item));
        }
      }
    }
    return found;
  }, items2);
};