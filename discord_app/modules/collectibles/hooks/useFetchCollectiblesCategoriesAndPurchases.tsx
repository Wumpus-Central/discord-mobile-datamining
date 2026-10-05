// === Module 10465: useFetchCollectiblesCategoriesAndPurchases ===

// Module 10465 (useFetchCollectiblesCategoriesAndPurchases)
import react2 from "react" /* 576 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7052 */;
import useMaybeFetchCollectiblesCategoriesDefault from "useMaybeFetchCollectiblesCategories" /* 10466 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ExperimentStore_mod from "ExperimentStore" /* 4776 */;
import CollectiblesPurchaseStore_mod from "CollectiblesPurchaseStore" /* 7068 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, current, paymentGateway, ref;

let closure_4;
let hasOwnProperty;
({ useEffect: closure_4, useRef: hasOwnProperty } = react);
let ExperimentStore = ExperimentStore_mod;
let CollectiblesPurchaseStore = CollectiblesPurchaseStore_mod;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let items5;
  let ref2;
  let ref3;
  let tmp10;
  let tmp21;
  let tmp22;
  let tmp26;
  let tmp28;
  let tmp29;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = require("react");
  const cResult = obj.c(24);
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
  const tmpResult = require("useStateFromStores");
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CollectiblesPurchaseStore];
    class C {
      constructor() {
        const items = [, , , , , ];
        ({ isFetching: arr[0], isClaiming: arr[1], fetchError: arr[2], claimError: arr[3], purchases: arr[4], hasPreviouslyFetched: arr[5] } = ref3);
        return items;
      }
    }
    cResult[2] = items1;
    cResult[3] = C;
    tmp10 = C;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult2 = require("useStateFromStores");
  const tmp12 = current(tmpResult2.useStateFromStoresArray(tmp9, tmp10), 6);
  current = tmp15;
  let current2 = tmp18;
  ref = ref(CollectiblesPurchaseStore.hasPreviouslyFetched);
  if (cResult[4] !== tmp12[5]) {
    const fn2 = function v() {
      ref.current = current2;
    };
    const items2 = [tmp12[5]];
    class C {
      constructor() {
        const items = [, , , , , ];
        ({ isFetching: arr[0], isClaiming: arr[1], fetchError: arr[2], claimError: arr[3], purchases: arr[4], hasPreviouslyFetched: arr[5] } = ref3);
        return items;
      }
    }
    cResult[4] = tmp12[5];
    cResult[5] = fn2;
    cResult[6] = items2;
    tmp22 = items2;
    tmp21 = fn2;
  } else {
    tmp21 = cResult[5];
    tmp22 = cResult[6];
  }
  current2(tmp21, tmp22);
  ExperimentStore = tmp19(tmp20.fetchError);
  if (cResult[7] !== tmp12[2]) {
    class A {
      constructor() {
        ref2.current = current;
      }
    }
    const items3 = [tmp12[2]];
    class C {
      constructor() {
        const items = [, , , , , ];
        ({ isFetching: arr[0], isClaiming: arr[1], fetchError: arr[2], claimError: arr[3], purchases: arr[4], hasPreviouslyFetched: arr[5] } = ref3);
        return items;
      }
    }
    cResult[7] = tmp12[2];
    cResult[8] = A;
    cResult[9] = items3;
    tmp26 = items3;
  } else {
    class A {
      constructor() {
        ref2.current = current;
      }
    }
    tmp26 = cResult[9];
  }
  current2(A, tmp26);
  CollectiblesPurchaseStore = tmp19(tmp20.isFetching);
  if (cResult[10] !== current) {
    class A {
      constructor() {
        ref2.current = current;
      }
    }
    const items4 = [current];
    class C {
      constructor() {
        const items = [, , , , , ];
        ({ isFetching: arr[0], isClaiming: arr[1], fetchError: arr[2], claimError: arr[3], purchases: arr[4], hasPreviouslyFetched: arr[5] } = ref3);
        return items;
      }
    }
    cResult[10] = current;
    cResult[11] = items4;
    cResult[12] = tmp30;
    tmp29 = tmp30;
    tmp28 = items4;
  } else {
    class A {
      constructor() {
        ref2.current = current;
      }
    }
    tmp29 = cResult[12];
  }
  current2(tmp29, tmp28);
  if (cResult[13] === stateFromStores) {
    class A {
      constructor() {
        ref2.current = current;
      }
    }
    current2(I, items5);
    if (cResult[17] === tmp12[3]) {
      class A {
        constructor() {
          ref2.current = current;
        }
      }
    }
    class C {
      constructor() {
        const items = [, , , , , ];
        ({ isFetching: arr[0], isClaiming: arr[1], fetchError: arr[2], claimError: arr[3], purchases: arr[4], hasPreviouslyFetched: arr[5] } = ref3);
        return items;
      }
    }
    tmp34[0] = tmp12[1];
    tmp34[1] = tmp12[2];
    tmp34[2] = tmp12[3];
    tmp34[3] = current;
    tmp34[4] = tmp12[4];
    tmp34[5] = tmp12[5];
    cResult[17] = tmp12[3];
    cResult[18] = tmp12[2];
    cResult[19] = tmp12[5];
    cResult[20] = tmp12[1];
    cResult[21] = current;
    cResult[22] = tmp12[4];
    cResult[23] = tmp34;
  }
  class I {
    constructor() {
      current = !stateFromStores;
      if (stateFromStores) {
        current = ref3.current;
      }
      if (!current) {
        current2 = true === closure_0 && ref.current && null == ref2.current;
        current = current2;
      }
      if (!current) {
        const obj = CollectiblesActionCreators;
        const collectiblesPurchases = obj.fetchCollectiblesPurchases();
      }
    }
  }
  items5 = [undefined !== arg0 && arg0, stateFromStores];
  cResult[13] = stateFromStores;
  cResult[14] = undefined !== arg0 && arg0;
  cResult[15] = I;
  cResult[16] = items5;
}) : (() => {
  let ref3;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isFetching;
  let fetchPurchasesError;
  ref = undefined;
  let ref2;
  CollectiblesPurchaseStore = undefined;
  let obj = flag(isFetching[6]);
  let items = [ref2];
  const stateFromStores = obj.useStateFromStores(items, () => ref2.hasLoadedExperiments);
  const items1 = [CollectiblesPurchaseStore];
  const obj2 = flag(isFetching[6]);
  const tmp2 = fetchPurchasesError(obj2.useStateFromStoresArray(items1, () => {
    const items = [, , , , , ];
    ({ isFetching: arr[0], isClaiming: arr[1], fetchError: arr[2], claimError: arr[3], purchases: arr[4], hasPreviouslyFetched: arr[5] } = ref3);
    return items;
  }), 6);
  isFetching = tmp2[0];
  fetchPurchasesError = tmp2[2];
  const hasPreviouslyFetched = tmp2[5];
  const isClaiming = tmp2[1];
  const claimError = tmp2[3];
  const purchases = tmp2[4];
  ref = ref(CollectiblesPurchaseStore.hasPreviouslyFetched);
  const items2 = [hasPreviouslyFetched];
  hasPreviouslyFetched(() => {
    ref.current = hasPreviouslyFetched;
  }, items2);
  ref2 = ref(CollectiblesPurchaseStore.fetchError);
  const items3 = [fetchPurchasesError];
  hasPreviouslyFetched(() => {
    ref2.current = fetchPurchasesError;
  }, items3);
  CollectiblesPurchaseStore = ref(CollectiblesPurchaseStore.isFetching);
  const items4 = [isFetching];
  hasPreviouslyFetched(() => {
    ref3.current = isFetching;
  }, items4);
  const items5 = [flag, stateFromStores];
  hasPreviouslyFetched(() => {
    current = !stateFromStores;
    if (stateFromStores) {
      current = ref3.current;
    }
    if (!current) {
      const current2 = true === flag && ref.current && null == ref2.current;
      current = current2;
    }
    if (!current) {
      const obj = CollectiblesActionCreators;
      const collectiblesPurchases = obj.fetchCollectiblesPurchases();
    }
  }, items5);
  return { isClaiming, fetchPurchasesError, claimError, isFetching, purchases, hasPreviouslyFetched };
});
let closure_8 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  const obj = react2;
  const cResult = obj.c(3);
  const tmp3 = undefined === arg1 || arg1;
  const purchases = closure_8(tmp3).purchases;
  if (cResult[0] === purchases) {
    let tmp4;
    if (cResult[1] === arg0) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  let value;
  if (null != arg0) {
    value = purchases.get(arg0);
  }
  cResult[0] = purchases;
  cResult[1] = arg0;
  cResult[2] = value;
  tmp4 = value;
}) : ((arg0) => {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const purchases = closure_8(flag).purchases;
  let value;
  if (null != arg0) {
    value = purchases.get(arg0);
  }
  return value;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((paymentGateway, arg1) => {
  let categories;
  let claimError;
  let fetchCategoriesError;
  let fetchPurchasesError;
  let hasPreviouslyFetched;
  let isClaiming;
  let isFetching;
  let isFetching2;
  let purchases;
  let refreshCategories;
  const obj = react2;
  const cResult = obj.c(18);
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
          let tmp8;
          if (cResult[4] === skipFetch) {
            tmp8 = cResult[5];
          }
          ({ isFetching, categories, fetchCategoriesError, refreshCategories } = useMaybeFetchCollectiblesCategoriesDefault(tmp8, arg1));
          let stalePurchasesOK;
          useMaybeFetchCollectiblesCategoriesDefault(tmp8, arg1);
          if (paymentGateway != null) {
            stalePurchasesOK = paymentGateway.stalePurchasesOK;
          }
          ({ isClaiming, fetchPurchasesError, claimError, isFetching: isFetching2, purchases, hasPreviouslyFetched } = closure_8(stalePurchasesOK));
          closure_8(stalePurchasesOK);
          if (cResult[6] === categories) {
            if (cResult[7] === claimError) {
              if (cResult[8] === fetchCategoriesError) {
                if (cResult[9] === fetchPurchasesError) {
                  if (cResult[10] === hasPreviouslyFetched) {
                    if (cResult[11] === isClaiming) {
                      if (cResult[12] === (isFetching || isFetching2)) {
                        if (cResult[13] === isFetching) {
                          if (cResult[14] === isFetching2) {
                            if (cResult[15] === purchases) {
                              let tmp16;
                              if (cResult[16] === refreshCategories) {
                                tmp16 = cResult[17];
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
          const obj2 = { isFetching: isFetching || isFetching2, isFetchingCategories: isFetching, isFetchingPurchases: isFetching2, isClaiming, categories, purchases, fetchCategoriesError, fetchPurchasesError, claimError, refreshCategories, hasPreviouslyFetched };
          cResult[6] = categories;
          cResult[7] = claimError;
          cResult[8] = fetchCategoriesError;
          cResult[9] = fetchPurchasesError;
          cResult[10] = hasPreviouslyFetched;
          cResult[11] = isClaiming;
          cResult[12] = isFetching || isFetching2;
          cResult[13] = isFetching;
          cResult[14] = isFetching2;
          cResult[15] = purchases;
          cResult[16] = refreshCategories;
          cResult[17] = obj2;
          tmp16 = obj2;
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
}) : ((paymentGateway, arg1) => {
  let categories;
  let claimError;
  let countryCode;
  let fetchCategoriesError;
  let fetchPurchasesError;
  let isClaiming;
  let logPerf;
  let noOp;
  let refreshCategories;
  let skipFetch;
  paymentGateway = undefined;
  if (paymentGateway != null) {
    paymentGateway = paymentGateway.paymentGateway;
  }
  const obj = { paymentGateway, noOp, logPerf, countryCode, skipFetch };
  noOp = undefined;
  const tmp2 = useMaybeFetchCollectiblesCategoriesDefault;
  if (paymentGateway != null) {
    noOp = paymentGateway.noOp;
  }
  logPerf = undefined;
  if (paymentGateway != null) {
    logPerf = paymentGateway.logPerf;
  }
  countryCode = undefined;
  if (paymentGateway != null) {
    countryCode = paymentGateway.countryCode;
  }
  skipFetch = undefined;
  if (paymentGateway != null) {
    skipFetch = paymentGateway.skipFetch;
  }
  const tmp2Result = tmp2(obj, arg1);
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
ReactCompilerGating = ReactCompilerGating_mod;
let fn = () => closure_8(true);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp2;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (arg0 == null) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  if (cResult[2] !== tmp2) {
    const obj3 = { stalePurchasesOK: true };
    const merged = Object.assign(tmp2);
    cResult[2] = tmp2;
    cResult[3] = obj3;
    tmp4 = obj3;
  } else {
    tmp4 = cResult[3];
  }
  return closure_9(tmp4);
}) : ((arg0) => {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  const obj2 = { stalePurchasesOK: true };
  const merged = Object.assign(obj);
  return closure_9(obj2);
});
const result1 = size.fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesCategoriesAndPurchases.tsx");

export default tmp6;
export const useFetchPurchases = tmp3;
export const useGetOrFetchPurchases = fn;
export const useGetOrFetchPurchase = tmp5;
export const useGetOrFetchCollectiblesCategoriesAndPurchases = tmp7;