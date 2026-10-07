// === Module 14894: useAndroidUnsyncedFilter ===

// Module 14894 (useAndroidUnsyncedFilter)
import _mod19 from "module_19" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 4895 */;
import IAPStore from "IAPStore" /* 6931 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

_mod19.useCallback;
const result = size.fileFinishedImporting("modules/collectibles/native/useAndroidUnsyncedFilter.tsx");

export const useAndroidUnsyncedFilter = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = stateFromStores(stateFromStores1[4]).c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [IAPStore];
    const fn = function l() {
      return fetchingGoogleSkus.isFetchingGoogleSkus();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = stateFromStores(stateFromStores1[4]);
  stateFromStores = stateFromStores(stateFromStores1[5]).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [DevSettingsStore];
    const fn2 = function u() {
      return DevSettingsStore.get("bypass_google_sku_sync");
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = stateFromStores(stateFromStores1[5]);
  stateFromStores1 = stateFromStores(stateFromStores1[5]).useStateFromStores(tmp8, tmp9);
  if (cResult[4] === stateFromStores1) {
    if (cResult[5] === stateFromStores) {
      let tmp12 = cResult[6];
    }
    return tmp12;
  }
  const fn3 = function y(arr) {
    let found = arr;
    if (obj.isGooglePlayBillingSupported()) {
      found = arr;
      if (!stateFromStores1) {
        found = arr;
        if (!stateFromStores) {
          found = arr.filter((item) => stateFromStores(stateFromStores1[7]).isGPlaySynced(item));
        }
      }
    }
    return found;
  };
  cResult[4] = stateFromStores1;
  cResult[5] = stateFromStores;
  cResult[6] = fn3;
  tmp12 = fn3;
  const tmpResult2 = stateFromStores(stateFromStores1[5]);
}) : (() => {
  const items = [IAPStore];
  stateFromStores = stateFromStores(stateFromStores1[5]).useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  const obj = stateFromStores(stateFromStores1[5]);
  const items1 = [DevSettingsStore];
  stateFromStores1 = stateFromStores(stateFromStores1[5]).useStateFromStores(items1, () => DevSettingsStore.get("bypass_google_sku_sync"));
  const items2 = [stateFromStores, stateFromStores1];
  return useCallback((arr) => {
    let found = arr;
    if (obj.isGooglePlayBillingSupported()) {
      found = arr;
      if (!stateFromStores1) {
        found = arr;
        if (!stateFromStores) {
          found = arr.filter((item) => stateFromStores(stateFromStores1[7]).isGPlaySynced(item));
        }
      }
    }
    return found;
  }, items2);
});