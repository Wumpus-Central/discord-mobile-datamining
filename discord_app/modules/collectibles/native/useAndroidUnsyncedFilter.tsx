// discord_app/modules/collectibles/native/useAndroidUnsyncedFilter.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import DevSettingsStore from "../../devtools/dev_settings/DevSettingsStore.tsx";
import IAPStore from "../../../stores/native/IAPStore.android.tsx";
import size from "../../../../_runtime/metro/00002__.js";

_mod19.useCallback;
const result = size.fileFinishedImporting("modules/collectibles/native/useAndroidUnsyncedFilter.tsx");

export const useAndroidUnsyncedFilter = function useAndroidUnsyncedFilter() {
  isInImprovedMobileShopLoading = isInImprovedMobileShopLoading(stateFromStores[3]).useIsInImprovedMobileShopLoading();
  const obj = isInImprovedMobileShopLoading(stateFromStores[3]);
  const items = [IAPStore];
  const items1 = [isInImprovedMobileShopLoading];
  stateFromStores = isInImprovedMobileShopLoading(stateFromStores[4]).useStateFromStores(
    items,
    () => {
      let isFetchingGoogleSkusResult = !isInImprovedMobileShopLoading;
      if (!isInImprovedMobileShopLoading) {
        isFetchingGoogleSkusResult = IAPStore.isFetchingGoogleSkus();
      }
      return isFetchingGoogleSkusResult;
    },
    items1,
  );
  const obj2 = isInImprovedMobileShopLoading(stateFromStores[4]);
  const items2 = [IAPStore];
  const items3 = [isInImprovedMobileShopLoading];
  const stateFromStores1 = isInImprovedMobileShopLoading(stateFromStores[4]).useStateFromStores(
    items2,
    () => {
      let products = null;
      if (isInImprovedMobileShopLoading) {
        products = IAPStore.getProducts();
      }
      return products;
    },
    items3,
  );
  const obj3 = isInImprovedMobileShopLoading(stateFromStores[4]);
  const items4 = [DevSettingsStore];
  const stateFromStores2 = isInImprovedMobileShopLoading(stateFromStores[4]).useStateFromStores(items4, () =>
    DevSettingsStore.get("bypass_google_sku_sync"),
  );
  const items5 = [stateFromStores, stateFromStores2, stateFromStores1];
  return stateFromStores2((arr) => {
    let found = arr;
    if (obj.isGooglePlayBillingSupported()) {
      found = arr;
      if (!stateFromStores2) {
        found = arr;
        if (!stateFromStores) {
          found = arr.filter((item) => isInImprovedMobileShopLoading(stateFromStores[6]).isGPlaySynced(item));
        }
      }
    }
    return found;
  }, items5);
};
