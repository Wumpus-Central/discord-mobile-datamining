// === Module 14894: useAndroidUnsyncedFilter ===

// Module 14894 (useAndroidUnsyncedFilter)
import react from "react" /* 19 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4547 */;
import DevSettingsStore from "DevSettingsStore" /* 4895 */;
import IAPStore from "IAPStore" /* 6931 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useCallback = react.useCallback;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let fetchingGoogleSkus;
  let stateFromStores;
  let stateFromStores1;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let obj = stateFromStores(stateFromStores1[4]);
  const cResult = obj.c(7);
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
  const tmpResult = stateFromStores(stateFromStores1[5]);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [DevSettingsStore];
    const fn2 = function u() {
      return DevSettingsStore.get("bypass_google_sku_sync");
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult2 = stateFromStores(stateFromStores1[5]);
  stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === stateFromStores1) {
    let tmp12;
    if (cResult[5] === stateFromStores) {
      tmp12 = cResult[6];
    }
    return tmp12;
  }
  const fn3 = function y(arr) {
    let obj = BillingPlatformUtils;
    let found = arr;
    if (obj.isGooglePlayBillingSupported()) {
      found = arr;
      if (!stateFromStores1) {
        found = arr;
        if (!stateFromStores) {
          found = arr.filter((item) => {
            const obj = stateFromStores(stateFromStores1[7]);
            return obj.isGPlaySynced(item);
          });
        }
      }
    }
    return found;
  };
  cResult[4] = stateFromStores1;
  cResult[5] = stateFromStores;
  cResult[6] = fn3;
  tmp12 = fn3;
}) : (() => {
  let fetchingGoogleSkus;
  let stateFromStores;
  let stateFromStores1;
  let obj = stateFromStores(stateFromStores1[5]);
  const items = [IAPStore];
  stateFromStores = obj.useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  const items1 = [DevSettingsStore];
  const obj2 = stateFromStores(stateFromStores1[5]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => DevSettingsStore.get("bypass_google_sku_sync"));
  const items2 = [stateFromStores, stateFromStores1];
  return useCallback((arr) => {
    let obj = BillingPlatformUtils;
    let found = arr;
    if (obj.isGooglePlayBillingSupported()) {
      found = arr;
      if (!stateFromStores1) {
        found = arr;
        if (!stateFromStores) {
          found = arr.filter((item) => {
            const obj = stateFromStores(stateFromStores1[7]);
            return obj.isGPlaySynced(item);
          });
        }
      }
    }
    return found;
  }, items2);
});
const result = size.fileFinishedImporting("modules/collectibles/native/useAndroidUnsyncedFilter.tsx");

export const useAndroidUnsyncedFilter = tmp2;