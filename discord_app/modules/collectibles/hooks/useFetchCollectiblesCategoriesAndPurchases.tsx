// === Module 8428: useFetchPurchases ===

// Module 8428 (useFetchPurchases)
import setDefault from "set" /* 8429 */;
import closure_3 from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import closure_6 from "getHash" /* 4292 */;
import closure_7 from "map" /* 5329 */;

const require = arg1;
function useFetchPurchases(flag) {
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  let isFetching;
  let fetchPurchasesError;
  let hasPreviouslyFetched;
  let callback;
  closure_6 = undefined;
  closure_7 = undefined;
  let items = [closure_6];
  stateFromStores = flag(isFetching[4]).useStateFromStores(items, () => ref2.hasLoadedExperiments);
  let obj = flag(isFetching[4]);
  const items1 = [closure_7];
  const isClaiming = fetchPurchasesError(flag(isFetching[4]).useStateFromStoresArray(items1, () => {
    const items = [, , , , , ];
    ({ isFetching: arr[0], isClaiming: arr[1], fetchError: arr[2], claimError: arr[3], purchases: arr[4], hasPreviouslyFetched: arr[5] } = closure_7);
    return items;
  }), 6);
  isFetching = isClaiming[0];
  fetchPurchasesError = isClaiming[2];
  hasPreviouslyFetched = isClaiming[5];
  callback = callback(closure_7.hasPreviouslyFetched);
  const items2 = [hasPreviouslyFetched];
  hasPreviouslyFetched(() => {
    closure_5.current = hasPreviouslyFetched;
  }, items2);
  closure_6 = callback(closure_7.fetchError);
  const items3 = [fetchPurchasesError];
  hasPreviouslyFetched(() => {
    closure_6.current = fetchPurchasesError;
  }, items3);
  closure_7 = callback(closure_7.isFetching);
  const items4 = [isFetching];
  hasPreviouslyFetched(() => {
    closure_7.current = isFetching;
  }, items4);
  const items5 = [flag, stateFromStores];
  hasPreviouslyFetched(() => {
    let current = !stateFromStores;
    if (stateFromStores) {
      current = ref3.current;
    }
    if (!current) {
      let current2 = true === flag;
      if (current2) {
        current2 = ref.current;
      }
      if (current2) {
        current2 = null == ref2.current;
      }
      current = current2;
    }
    if (!current) {
      const collectiblesPurchases = flag(isFetching[5]).fetchCollectiblesPurchases();
      const obj = flag(isFetching[5]);
    }
  }, items5);
  return { isClaiming: isClaiming[1], fetchPurchasesError, claimError: isClaiming[3], isFetching, purchases: isClaiming[4], hasPreviouslyFetched };
}
function useFetchCollectiblesCategoriesAndPurchases(paymentGateway) {
  paymentGateway = undefined;
  if (paymentGateway != null) {
    paymentGateway = paymentGateway.paymentGateway;
  }
  let obj = { paymentGateway, noOp: null, logPerf: null, countryCode: null };
  let noOp;
  if (paymentGateway != null) {
    noOp = paymentGateway.noOp;
  }
  obj[1] = noOp;
  let logPerf;
  if (paymentGateway != null) {
    logPerf = paymentGateway.logPerf;
  }
  obj[2] = logPerf;
  let countryCode;
  if (paymentGateway != null) {
    countryCode = paymentGateway.countryCode;
  }
  obj[3] = countryCode;
  const tmp2Result = setDefault(obj, arg1);
  const isFetching = tmp2Result.isFetching;
  let stalePurchasesOK;
  ({ categories, fetchCategoriesError, refreshCategories } = tmp2Result);
  if (paymentGateway != null) {
    stalePurchasesOK = paymentGateway.stalePurchasesOK;
  }
  const tmp7Result = useFetchPurchases(stalePurchasesOK);
  const isFetching2 = tmp7Result.isFetching;
  let tmp10 = isFetching;
  ({ isClaiming, fetchPurchasesError, claimError } = tmp7Result);
  if (!isFetching) {
    tmp10 = isFetching2;
  }
  obj = { isFetching: tmp10, isFetchingCategories: isFetching, isFetchingPurchases: isFetching2, isClaiming, categories, purchases: tmp7Result.purchases, fetchCategoriesError, fetchPurchasesError, claimError, refreshCategories, hasPreviouslyFetched: tmp7Result.hasPreviouslyFetched };
  return obj;
}
({ useEffect: c4, useRef: c5 } = noop);
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesCategoriesAndPurchases.tsx");

export default useFetchCollectiblesCategoriesAndPurchases;
export { useFetchPurchases };
export const useGetOrFetchPurchases = function useGetOrFetchPurchases() {
  return useFetchPurchases(true);
};
export const useGetOrFetchPurchase = function useGetOrFetchPurchase(selectedGiftingPromotionReward, flag) {
  if (flag === undefined) {
    flag = true;
  }
  const purchases = useFetchPurchases(flag).purchases;
  let value;
  if (null != selectedGiftingPromotionReward) {
    value = purchases.get(selectedGiftingPromotionReward);
  }
  return value;
};
export const useGetOrFetchCollectiblesCategoriesAndPurchases = function useGetOrFetchCollectiblesCategoriesAndPurchases(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  obj = {};
  const merged = Object.assign(obj);
  obj.stalePurchasesOK = true;
  return useFetchCollectiblesCategoriesAndPurchases(obj);
};