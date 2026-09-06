// discord_app/modules/collectibles/hooks/useFetchCollectiblesCategoriesAndPurchases.tsx
import CollectiblesActionCreators from "../CollectiblesActionCreators.tsx";
import useMaybeFetchCollectiblesCategoriesDefault from "useMaybeFetchCollectiblesCategories.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import ExperimentStore from "../../experiments/ExperimentStore.tsx";
import CollectiblesPurchaseStore from "../CollectiblesPurchaseStore.tsx";

require = fn;
function useFetchPurchases(flag) {
  if (flag === undefined) {
    flag = false;
  }
  let isFetching;
  let fetchPurchasesError;
  let ref;
  let ref2;
  CollectiblesPurchaseStore = undefined;
  let items = [ref2];
  const stateFromStores = flag(isFetching[4]).useStateFromStores(items, () => ref2.hasLoadedExperiments);
  let obj = flag(isFetching[4]);
  const items1 = [CollectiblesPurchaseStore];
  const isClaiming = fetchPurchasesError(
    flag(isFetching[4]).useStateFromStoresArray(items1, () => {
      const items = [, , , , ,];
      ({
        isFetching: arr[0],
        isClaiming: arr[1],
        fetchError: arr[2],
        claimError: arr[3],
        purchases: arr[4],
        hasPreviouslyFetched: arr[5],
      } = closure_7);
      return items;
    }),
    6,
  );
  isFetching = isClaiming[0];
  fetchPurchasesError = isClaiming[2];
  const hasPreviouslyFetched = isClaiming[5];
  ref = ref(CollectiblesPurchaseStore.hasPreviouslyFetched);
  const items2 = [hasPreviouslyFetched];
  hasPreviouslyFetched(() => {
    closure_5.current = hasPreviouslyFetched;
  }, items2);
  ref2 = ref(CollectiblesPurchaseStore.fetchError);
  const items3 = [fetchPurchasesError];
  hasPreviouslyFetched(() => {
    closure_6.current = fetchPurchasesError;
  }, items3);
  CollectiblesPurchaseStore = ref(CollectiblesPurchaseStore.isFetching);
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
      const collectiblesPurchases = CollectiblesActionCreators.fetchCollectiblesPurchases();
    }
  }, items5);
  return {
    isClaiming: isClaiming[1],
    fetchPurchasesError,
    claimError: isClaiming[3],
    isFetching,
    purchases: isClaiming[4],
    hasPreviouslyFetched,
  };
}
function useFetchCollectiblesCategoriesAndPurchases(paymentGateway, arg1) {
  paymentGateway = undefined;
  if (paymentGateway != null) {
    paymentGateway = paymentGateway.paymentGateway;
  }
  let obj = { paymentGateway, noOp: null, logPerf: null, countryCode: null, skipFetch: null };
  let noOp;
  if (paymentGateway != null) {
    noOp = paymentGateway.noOp;
  }
  obj.noOp = noOp;
  let logPerf;
  if (paymentGateway != null) {
    logPerf = paymentGateway.logPerf;
  }
  obj.logPerf = logPerf;
  let countryCode;
  if (paymentGateway != null) {
    countryCode = paymentGateway.countryCode;
  }
  obj.countryCode = countryCode;
  let skipFetch;
  if (paymentGateway != null) {
    skipFetch = paymentGateway.skipFetch;
  }
  obj.skipFetch = skipFetch;
  const tmp2Result = useMaybeFetchCollectiblesCategoriesDefault(obj, arg1);
  const isFetching = tmp2Result.isFetching;
  let stalePurchasesOK;
  ({ categories, fetchCategoriesError, refreshCategories } = tmp2Result);
  if (paymentGateway != null) {
    stalePurchasesOK = paymentGateway.stalePurchasesOK;
  }
  const tmp8Result = useFetchPurchases(stalePurchasesOK);
  const isFetching2 = tmp8Result.isFetching;
  let tmp11 = isFetching;
  ({ isClaiming, fetchPurchasesError, claimError } = tmp8Result);
  if (!isFetching) {
    tmp11 = isFetching2;
  }
  obj = {
    isFetching: tmp11,
    isFetchingCategories: isFetching,
    isFetchingPurchases: isFetching2,
    isClaiming,
    categories,
    purchases: tmp8Result.purchases,
    fetchCategoriesError,
    fetchPurchasesError,
    claimError,
    refreshCategories,
    hasPreviouslyFetched: tmp8Result.hasPreviouslyFetched,
  };
  return obj;
}
const noop = fn(19);
({ useEffect: closure_4, useRef: hasOwnProperty } = noop);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesCategoriesAndPurchases.tsx");

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
  value = undefined;
  if (null != selectedGiftingPromotionReward) {
    value = purchases.get(selectedGiftingPromotionReward);
  }
  return value;
};
export const useGetOrFetchCollectiblesCategoriesAndPurchases = function useGetOrFetchCollectiblesCategoriesAndPurchases(
  arg0,
) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  obj = {};
  const merged = Object.assign(obj);
  obj.stalePurchasesOK = true;
  return useFetchCollectiblesCategoriesAndPurchases(obj);
};
