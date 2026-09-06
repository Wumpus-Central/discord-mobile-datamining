// discord_app/modules/collectibles/native/useAndroidUnsyncedFilter.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import DevSettingsStore from "../../devtools/dev_settings/DevSettingsStore.tsx";
import IAPStore from "../../../stores/native/IAPStore.android.tsx";
import size from "../../../../_runtime/metro/00002__.js";

_mod19.useCallback;
const result = size.fileFinishedImporting("modules/collectibles/native/useAndroidUnsyncedFilter.tsx");

export const useAndroidUnsyncedFilter = function useAndroidUnsyncedFilter() {
  const items = [IAPStore];
  stateFromStores = stateFromStores(stateFromStores1[3]).useStateFromStores(items, () =>
    fetchingGoogleSkus.isFetchingGoogleSkus(),
  );
  const obj = stateFromStores(stateFromStores1[3]);
  const items1 = [DevSettingsStore];
  stateFromStores1 = stateFromStores(stateFromStores1[3]).useStateFromStores(items1, () =>
    DevSettingsStore.get("bypass_google_sku_sync"),
  );
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
