// === Module 10075: useFetchCollectiblesCategoriesAndPurchases ===

// Module 10075 (useFetchCollectiblesCategoriesAndPurchases)
import c from "c" /* 576 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7251 */;
import useMaybeFetchCollectiblesCategoriesDefault from "useMaybeFetchCollectiblesCategories" /* 10076 */;
import _slicedToArray from "module_32" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 4976 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7267 */;

require = fn;
const noop = fn(19);
({ useEffect: closure_4, useRef: hasOwnProperty } = noop);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFetchPurchases(arg0) {
  const cResult = require("c").c(24);
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ExperimentStore];
    const fn = function l() {
      return ref2.hasLoadedExperiments;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CollectiblesPurchaseStore];
    class C {
      constructor() {
        items = [, , , , , ];
        ({ isFetching: arr[0], isClaiming: arr[1], fetchError: arr[2], claimError: arr[3], purchases: arr[4], hasPreviouslyFetched: arr[5] } = closure_7);
        return items;
      }
    }
    cResult[2] = items1;
    cResult[3] = C;
    let tmp10 = C;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = require("useStateFromStores");
  const tmp12 = _slicedToArray(require("useStateFromStores").useStateFromStoresArray(tmp9, tmp10), 6);
  current = tmp12[0];
  _slicedToArray = tmp15;
  let current2 = tmp18;
  ref = ref(CollectiblesPurchaseStore.hasPreviouslyFetched);
  if (cResult[4] !== tmp12[5]) {
    const fn2 = function v() {
      closure_5.current = current2;
    };
    const items2 = [tmp18];
    class C {
      constructor() {
        items = [, , , , , ];
        ({ isFetching: arr[0], isClaiming: arr[1], fetchError: arr[2], claimError: arr[3], purchases: arr[4], hasPreviouslyFetched: arr[5] } = closure_7);
        return items;
      }
    }
    cResult[4] = tmp18;
    cResult[5] = fn2;
    cResult[6] = items2;
    let tmp22 = items2;
    let tmp21 = fn2;
  } else {
    tmp21 = cResult[5];
    tmp22 = cResult[6];
  }
  current2(tmp21, tmp22);
  ExperimentStore = tmp19(tmp20.fetchError);
  if (cResult[7] !== tmp12[2]) {
    const fn3 = function w() {
      closure_6.current = current;
    };
    const items3 = [tmp15];
    class C {
      constructor() {
        items = [, , , , , ];
        ({ isFetching: arr[0], isClaiming: arr[1], fetchError: arr[2], claimError: arr[3], purchases: arr[4], hasPreviouslyFetched: arr[5] } = closure_7);
        return items;
      }
    }
    cResult[7] = tmp15;
    cResult[8] = fn3;
    cResult[9] = items3;
    let tmp26 = items3;
    let tmp25 = fn3;
  } else {
    tmp25 = cResult[8];
    tmp26 = cResult[9];
  }
  current2(tmp25, tmp26);
  CollectiblesPurchaseStore = tmp19(tmp20.isFetching);
  if (cResult[10] !== current) {
    const fn4 = function j() {
      closure_7.current = current;
    };
    const items4 = [current];
    class C {
      constructor() {
        items = [, , , , , ];
        ({ isFetching: arr[0], isClaiming: arr[1], fetchError: arr[2], claimError: arr[3], purchases: arr[4], hasPreviouslyFetched: arr[5] } = closure_7);
        return items;
      }
    }
    cResult[10] = current;
    cResult[11] = items4;
    cResult[12] = fn4;
    let tmp29 = fn4;
    let tmp28 = items4;
  } else {
    tmp28 = cResult[11];
    tmp29 = cResult[12];
  }
  current2(tmp29, tmp28);
  if (cResult[13] === stateFromStores) {
    if (cResult[14] === tmp4) {
      let tmp31 = cResult[15];
      let tmp32 = cResult[16];
    }
    tmp23(tmp31, tmp32);
    if (cResult[17] === tmp16) {
      if (cResult[18] === tmp15) {
        if (cResult[19] === tmp18) {
          if (cResult[20] === tmp14) {
            if (cResult[21] === current) {
              if (cResult[22] === tmp17) {
                let tmp34 = cResult[23];
              }
              return tmp34;
            }
          }
        }
      }
    }
    class C {
      constructor() {
        items = [, , , , , ];
        ({ isFetching: arr[0], isClaiming: arr[1], fetchError: arr[2], claimError: arr[3], purchases: arr[4], hasPreviouslyFetched: arr[5] } = closure_7);
        return items;
      }
    }
    tmp35[0] = tmp14;
    tmp35[1] = tmp15;
    tmp35[2] = tmp16;
    tmp35[3] = current;
    tmp35[4] = tmp17;
    tmp35[5] = tmp18;
    cResult[17] = tmp16;
    cResult[18] = tmp15;
    cResult[19] = tmp18;
    cResult[20] = tmp14;
    cResult[21] = current;
    cResult[22] = tmp17;
    cResult[23] = tmp35;
    tmp34 = tmp35;
  }
  class I {
    constructor() {
      current = !closure_1;
      if (closure_1) {
        tmp = closure_7;
        current = closure_7.current;
      }
      if (!current) {
        tmp2 = closure_0;
        flag = true;
        current2 = true === closure_0;
        if (current2) {
          tmp3 = closure_5;
          current2 = closure_5.current;
        }
        if (current2) {
          tmp4 = closure_6;
          tmp5 = null;
          current2 = null == closure_6.current;
        }
        current = current2;
      }
      if (!current) {
        tmp6 = closure_0;
        tmp7 = closure_2;
        obj = closure_0(closure_2[7]);
        collectiblesPurchases = obj.fetchCollectiblesPurchases();
      }
      return;
    }
  }
  const items5 = [undefined !== arg0 && arg0, stateFromStores];
  cResult[13] = stateFromStores;
  cResult[14] = undefined !== arg0 && arg0;
  cResult[15] = I;
  cResult[16] = items5;
  tmp32 = items5;
  tmp31 = I;
}) : (function useFetchPurchases() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isFetching;
  let fetchPurchasesError;
  ref = undefined;
  let ref2;
  CollectiblesPurchaseStore = undefined;
  let items = [ref2];
  const stateFromStores = flag(isFetching[6]).useStateFromStores(items, () => ref2.hasLoadedExperiments);
  let obj = flag(isFetching[6]);
  const items1 = [CollectiblesPurchaseStore];
  const isClaiming = fetchPurchasesError(flag(isFetching[6]).useStateFromStoresArray(items1, () => {
    const items = [, , , , , ];
    ({ isFetching: arr[0], isClaiming: arr[1], fetchError: arr[2], claimError: arr[3], purchases: arr[4], hasPreviouslyFetched: arr[5] } = closure_7);
    return items;
  }), 6);
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
  return { isClaiming: isClaiming[1], fetchPurchasesError, claimError: isClaiming[3], isFetching, purchases: isClaiming[4], hasPreviouslyFetched };
});
let closure_8 = tmp3;
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
fn(558);
ReactCompilerGating = fn(558);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFetchCollectiblesCategoriesAndPurchases(paymentGateway, arg1) {
  const cResult = c.c(18);
  paymentGateway = undefined;
  if (paymentGateway != null) {
    paymentGateway = paymentGateway.paymentGateway;
  }
  let noOp;
  if (paymentGateway != null) {
    noOp = paymentGateway.noOp;
  }
  let logPerf;
  if (paymentGateway != null) {
    logPerf = paymentGateway.logPerf;
  }
  let countryCode;
  if (paymentGateway != null) {
    countryCode = paymentGateway.countryCode;
  }
  let skipFetch;
  if (paymentGateway != null) {
    skipFetch = paymentGateway.skipFetch;
  }
  if (cResult[0] === paymentGateway) {
    if (cResult[1] === noOp) {
      if (cResult[2] === logPerf) {
        if (cResult[3] === countryCode) {
          if (cResult[4] === skipFetch) {
            let tmp8 = cResult[5];
          }
          ({ isFetching, categories, fetchCategoriesError, refreshCategories } = useMaybeFetchCollectiblesCategoriesDefault(tmp8, arg1));
          let stalePurchasesOK;
          if (paymentGateway != null) {
            stalePurchasesOK = paymentGateway.stalePurchasesOK;
          }
          const tmp11 = useMaybeFetchCollectiblesCategoriesDefault(tmp8, arg1);
          ({ isClaiming, fetchPurchasesError, claimError, isFetching: isFetching2, purchases, hasPreviouslyFetched } = closure_8(stalePurchasesOK));
          let tmp15 = isFetching;
          if (!isFetching) {
            tmp15 = isFetching2;
          }
          if (cResult[6] === categories) {
            if (cResult[7] === claimError) {
              if (cResult[8] === fetchCategoriesError) {
                if (cResult[9] === fetchPurchasesError) {
                  if (cResult[10] === hasPreviouslyFetched) {
                    if (cResult[11] === isClaiming) {
                      if (cResult[12] === tmp15) {
                        if (cResult[13] === isFetching) {
                          if (cResult[14] === isFetching2) {
                            if (cResult[15] === purchases) {
                              if (cResult[16] === refreshCategories) {
                                let tmp16 = cResult[17];
                              }
                              return tmp16;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj2 = { isFetching: tmp15, isFetchingCategories: isFetching, isFetchingPurchases: isFetching2, isClaiming, categories, purchases, fetchCategoriesError, fetchPurchasesError, claimError, refreshCategories, hasPreviouslyFetched };
          cResult[6] = categories;
          cResult[7] = claimError;
          cResult[8] = fetchCategoriesError;
          cResult[9] = fetchPurchasesError;
          cResult[10] = hasPreviouslyFetched;
          cResult[11] = isClaiming;
          cResult[12] = tmp15;
          cResult[13] = isFetching;
          cResult[14] = isFetching2;
          cResult[15] = purchases;
          cResult[16] = refreshCategories;
          cResult[17] = obj2;
          tmp16 = obj2;
          const tmp12Result = closure_8(stalePurchasesOK);
        }
      }
    }
  }
  const obj3 = { paymentGateway, noOp, logPerf, countryCode, skipFetch };
  cResult[0] = paymentGateway;
  cResult[1] = noOp;
  cResult[2] = logPerf;
  cResult[3] = countryCode;
  cResult[4] = skipFetch;
  cResult[5] = obj3;
  tmp8 = obj3;
}) : (function useFetchCollectiblesCategoriesAndPurchases(paymentGateway, arg1) {
  paymentGateway = undefined;
  if (paymentGateway != null) {
    paymentGateway = paymentGateway.paymentGateway;
  }
  const obj = { paymentGateway, noOp: null, logPerf: null, countryCode: null, skipFetch: null };
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
  const tmp8Result = closure_8(stalePurchasesOK);
  const isFetching2 = tmp8Result.isFetching;
  let tmp11 = isFetching;
  ({ isClaiming, fetchPurchasesError, claimError } = tmp8Result);
  if (!isFetching) {
    tmp11 = isFetching2;
  }
  return { isFetching: tmp11, isFetchingCategories: isFetching, isFetchingPurchases: isFetching2, isClaiming, categories, purchases: tmp8Result.purchases, fetchCategoriesError, fetchPurchasesError, claimError, refreshCategories, hasPreviouslyFetched: tmp8Result.hasPreviouslyFetched };
});
let closure_9 = tmp6;
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetOrFetchPurchase(arg0, arg1) {
  const cResult = c.c(3);
  let tmp3 = undefined === arg1;
  if (!tmp3) {
    tmp3 = arg1;
  }
  const purchases = closure_8(tmp3).purchases;
  if (cResult[0] === purchases) {
    if (cResult[1] === arg0) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  value = undefined;
  if (null != arg0) {
    value = purchases.get(arg0);
  }
  cResult[0] = purchases;
  cResult[1] = arg0;
  cResult[2] = value;
  tmp4 = value;
}) : (function useGetOrFetchPurchase(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const purchases = closure_8(flag).purchases;
  value = undefined;
  if (null != arg0) {
    value = purchases.get(arg0);
  }
  return value;
});
function useGetOrFetchPurchases() {
  return closure_8(true);
}
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesCategoriesAndPurchases.tsx");

export default tmp6;
export const useFetchPurchases = tmp3;
export { useGetOrFetchPurchases };
export const useGetOrFetchPurchase = tmp5;
export const useGetOrFetchCollectiblesCategoriesAndPurchases = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetOrFetchCollectiblesCategoriesAndPurchases(arg0) {
  const cResult = c.c(4);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (arg0 == null) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  if (cResult[2] !== tmp2) {
    const obj3 = {};
    const merged = Object.assign(tmp2);
    obj3.stalePurchasesOK = true;
    cResult[2] = tmp2;
    cResult[3] = obj3;
    let tmp4 = obj3;
  } else {
    tmp4 = cResult[3];
  }
  return closure_9(tmp4);
}) : (function useGetOrFetchCollectiblesCategoriesAndPurchases(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  const obj2 = {};
  const merged = Object.assign(obj);
  obj2.stalePurchasesOK = true;
  return closure_9(obj2);
});