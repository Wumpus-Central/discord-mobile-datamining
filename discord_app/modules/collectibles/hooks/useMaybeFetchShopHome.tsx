// === Module 16116: useMaybeFetchShopHome ===

// Module 16116 (useMaybeFetchShopHome)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7256 */;
import ShopVariantsReturnStyle from "ShopVariantsReturnStyle" /* 7302 */;
import _slicedToArray from "module_32" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 4977 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7257 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 7299 */;

const require = globalThis.__r;

require = fn;
const noop = fn(19);
({ useEffect: c3, useCallback: closure_4, useMemo: hasOwnProperty } = noop);
const CollectiblesShopConstants = fn(1087);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: closure_9, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: c10 } = CollectiblesShopConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchShopHome.tsx");

export const useMaybeFetchCollectiblesShopHome = ReactCompilerGating.isReactCompilerEnabled() ? (function useMaybeFetchCollectiblesShopHome(arg0, arg1, arg2, arg3) {
  _require = arg0;
  dependencyMap = arg2;
  const cResult = require("c").c(35);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ExperimentStore];
    class C {
      constructor() {
        return closure_6.hasLoadedExperiments;
      }
    }
    cResult[0] = items;
    cResult[1] = C;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = require("c");
  const tmp4 = undefined !== arg3 && arg3;
  const stateFromStores = require("initialize").useStateFromStores(tmp5, C);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [skipNumCategories];
    class C {
      constructor() {
        return closure_6.hasLoadedExperiments;
      }
    }
    cResult[2] = items1;
    cResult[3] = tmp12;
    let tmp10 = tmp12;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [closure_8];
    class C {
      constructor() {
        return closure_6.hasLoadedExperiments;
      }
    }
    cResult[4] = items2;
    let tmp14 = items2;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== arg0) {
    const fn = function y() {
      const items = [CollectiblesShopHomeStore.getShopBlocks(closure_0), , , , , , , ];
      let num = CollectiblesShopHomeStore.getLastSuccessfulFetch(closure_0);
      if (num == null) {
        num = 0;
      }
      items[1] = num;
      let num2 = CollectiblesShopHomeStore.getLastErrorTimestamp(closure_0);
      if (num2 == null) {
        num2 = 0;
      }
      items[2] = num2;
      items[3] = CollectiblesShopHomeStore.getLastFetchOptions(closure_0);
      items[4] = CollectiblesShopHomeStore.getFetchShopHomeError(closure_0);
      items[5] = CollectiblesShopHomeStore.getIsFetchingShopHome(closure_0);
      items[6] = CollectiblesShopHomeStore.getHasKnownStaleData(closure_0);
      items[7] = CollectiblesShopHomeStore.getShopHomeConfigOverride();
      return items;
    };
    cResult[5] = arg0;
    class C {
      constructor() {
        return closure_6.hasLoadedExperiments;
      }
    }
    cResult[6] = fn;
    let tmp16 = fn;
  } else {
    tmp16 = cResult[6];
  }
  const tmpResult3 = require("initialize");
  const tmp17 = stateFromStores(require("initialize").useStateFromStoresArray(tmp14, tmp16), 8);
  closure_3 = tmp19;
  closure_4 = tmp21;
  closure_5 = tmp22;
  ExperimentStore = tmp23;
  if (cResult[7] === arg1) {
    if (cResult[8] === tmp24) {
      if (cResult[9] === stateFromStores1) {
        let tmp25 = cResult[10];
      }
      skipNumCategories = tmp25;
      if (cResult[11] === tmp25) {
        if (cResult[12] === tmp20) {
          let tmp27 = cResult[13];
        }
        closure_8 = tmp29;
        class C {
          constructor() {
            return closure_6.hasLoadedExperiments;
          }
        }
        let flag = tmp22;
        if (tmp22 == null) {
          flag = false;
        }
        const hasExpiredShopBlocks = obj6.useHasExpiredShopBlocks(tmp17[0], flag, tmp4);
        let tmp32 = !hasExpiredShopBlocks;
        if (!hasExpiredShopBlocks) {
          let _Date = Date;
          tmp32 = Date.now() - tmp18 < closure_9;
        }
        closure_9 = tmp32;
        if (cResult[14] === stateFromStores) {
          if (cResult[15] === tmp32) {
            if (cResult[16] === tmp25) {
              if (cResult[17] === tmp29) {
                if (cResult[18] === tmp21) {
                  if (cResult[19] === tmp23) {
                    if (cResult[20] === tmp22) {
                      if (cResult[21] === tmp19) {
                        if (cResult[22] === arg2) {
                          if (cResult[23] === arg0) {
                            let tmp34 = cResult[24];
                            let tmp35 = cResult[25];
                          }
                          closure_3(tmp35, tmp34);
                          class C {
                            constructor() {
                              return closure_6.hasLoadedExperiments;
                            }
                          }
                          class G {
                            constructor() {
                              obj = closure_0(closure_1[10]);
                              collectiblesShopHome = obj.fetchCollectiblesShopHome(closure_0, closure_7, closure_1);
                              return;
                            }
                          }
                          cResult[26] = tmp25;
                          cResult[27] = arg2;
                          cResult[28] = arg0;
                          cResult[29] = G;
                          class U {
                            constructor() {
                              if (closure_2) {
                                tmp = closure_5;
                                if (!closure_5) {
                                  tmp2 = globalThis;
                                  _Date = Date;
                                  tmp3 = closure_3;
                                  tmp4 = closure_10;
                                  tmp5 = closure_4;
                                  tmp6 = null;
                                  tmp7 = null != closure_4 && Date.now() - closure_3 < closure_10;
                                  if (!tmp7) {
                                    tmp8 = closure_8;
                                    if (!closure_8) {
                                      tmp9 = closure_9;
                                      tmp8 = !closure_9;
                                    }
                                    if (!tmp8) {
                                      tmp8 = closure_6;
                                    }
                                    if (tmp8) {
                                      tmp10 = closure_0;
                                      tmp11 = closure_1;
                                      obj = closure_0(closure_1[10]);
                                      tmp12 = closure_0;
                                      tmp13 = closure_7;
                                      tmp14 = closure_1;
                                      collectiblesShopHome = obj.fetchCollectiblesShopHome(closure_0, closure_7, closure_1);
                                    }
                                  }
                                }
                              }
                              return;
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
        }
        class U {
          constructor() {
            if (closure_2) {
              tmp = closure_5;
              if (!closure_5) {
                tmp2 = globalThis;
                _Date = Date;
                tmp3 = closure_3;
                tmp4 = closure_10;
                tmp5 = closure_4;
                tmp6 = null;
                tmp7 = null != closure_4 && Date.now() - closure_3 < closure_10;
                if (!tmp7) {
                  tmp8 = closure_8;
                  if (!closure_8) {
                    tmp9 = closure_9;
                    tmp8 = !closure_9;
                  }
                  if (!tmp8) {
                    tmp8 = closure_6;
                  }
                  if (tmp8) {
                    tmp10 = closure_0;
                    tmp11 = closure_1;
                    obj = closure_0(closure_1[10]);
                    tmp12 = closure_0;
                    tmp13 = closure_7;
                    tmp14 = closure_1;
                    collectiblesShopHome = obj.fetchCollectiblesShopHome(closure_0, closure_7, closure_1);
                  }
                }
              }
            }
            return;
          }
        }
        const items3 = [stateFromStores, tmp22, tmp21, tmp19, tmp32, tmp23, !tmp27, tmp25, arg0, arg2];
        cResult[14] = stateFromStores;
        cResult[15] = tmp32;
        cResult[16] = tmp25;
        cResult[17] = !tmp27;
        cResult[18] = tmp21;
        cResult[19] = tmp23;
        cResult[20] = tmp22;
        cResult[21] = tmp19;
        cResult[22] = arg2;
        cResult[23] = arg0;
        cResult[24] = items3;
        cResult[25] = U;
        tmp35 = U;
        tmp34 = items3;
      }
      class C {
        constructor() {
          return closure_6.hasLoadedExperiments;
        }
      }
      cResult[11] = tmp25;
      cResult[12] = tmp20;
      cResult[13] = tmp28;
      tmp27 = tmp28;
    }
  }
  const obj2 = {};
  const merged = Object.assign(arg1);
  obj2.variantsReturnStyle = require("ShopVariantsReturnStyle").ShopVariantsReturnStyle.VARIANTS_GROUP;
  obj2.includeBundles = true;
  obj2.includeDynamicBlocks = true;
  obj2.shopHomeConfig = tmp17[7];
  obj2.skipNumCategories = stateFromStores1;
  cResult[7] = arg1;
  cResult[8] = tmp17[7];
  cResult[9] = stateFromStores1;
  cResult[10] = obj2;
  tmp25 = obj2;
  const tmpResult4 = require("initialize");
}) : (function useMaybeFetchCollectiblesShopHome(arg0, arg1, arg2) {
  _require = arg0;
  dependencyMap = arg1;
  _slicedToArray = arg2;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let hasLoadedExperiments;
  let skipNumCategories;
  closure_8 = undefined;
  let hasExpiredShopBlocks;
  closure_15 = undefined;
  let items = [hasLoadedExperiments];
  const stateFromStores = require("initialize").useStateFromStores(items, () => hasLoadedExperiments.hasLoadedExperiments);
  let obj = require("initialize");
  const items1 = [skipNumCategories];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => skipNumCategories.skipNumCategories);
  const obj2 = require("initialize");
  const items2 = [closure_8];
  const tmp3 = _slicedToArray(require("initialize").useStateFromStoresArray(items2, () => {
    const items = [CollectiblesShopHomeStore.getShopBlocks(closure_0), , , , , , , ];
    let num = CollectiblesShopHomeStore.getLastSuccessfulFetch(closure_0);
    if (num == null) {
      num = 0;
    }
    items[1] = num;
    let num2 = CollectiblesShopHomeStore.getLastErrorTimestamp(closure_0);
    if (num2 == null) {
      num2 = 0;
    }
    items[2] = num2;
    items[3] = CollectiblesShopHomeStore.getLastFetchOptions(closure_0);
    items[4] = CollectiblesShopHomeStore.getFetchShopHomeError(closure_0);
    items[5] = CollectiblesShopHomeStore.getIsFetchingShopHome(closure_0);
    items[6] = CollectiblesShopHomeStore.getHasKnownStaleData(closure_0);
    items[7] = CollectiblesShopHomeStore.getShopHomeConfigOverride();
    return items;
  }), 8);
  [tmp4, tmp5] = tmp3;
  c5 = tmp5;
  hasLoadedExperiments = tmp6;
  skipNumCategories = tmp7;
  closure_8 = tmp8;
  closure_9 = tmp9;
  closure_10 = tmp10;
  const shopHomeConfig = tmp11;
  const items3 = [arg1, tmp3[7], stateFromStores1];
  const tmp13 = c5(() => {
    const obj = {};
    const merged = Object.assign(closure_1);
    obj.variantsReturnStyle = ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP;
    obj.includeBundles = true;
    obj.includeDynamicBlocks = true;
    obj.shopHomeConfig = shopHomeConfig;
    obj.skipNumCategories = stateFromStores1;
    return obj;
  }, items3);
  closure_12 = tmp13;
  const items4 = [tmp3[3], tmp13];
  const tmp14 = c5(() => !CollectiblesActionCreators.areRequestOptionsEqual(closure_7, closure_12), items4);
  closure_13 = tmp14;
  const obj3 = require("initialize");
  const tmp12 = c5;
  let flag2 = tmp9;
  if (tmp3[5] == null) {
    flag2 = false;
  }
  hasExpiredShopBlocks = require("useHasExpiredShopBlocks").useHasExpiredShopBlocks(tmp4, flag2, flag);
  const items5 = [tmp5, hasExpiredShopBlocks];
  const tmp12Result = tmp12(() => {
    let tmp = !hasExpiredShopBlocks;
    if (!hasExpiredShopBlocks) {
      const _Date = Date;
      tmp = Date.now() - c5 < options;
    }
    return tmp;
  }, items5);
  closure_15 = tmp12Result;
  const items6 = [stateFromStores, tmp3[5], tmp3[4], tmp3[2], tmp12Result, tmp3[6], tmp14, tmp13, arg0, arg2];
  stateFromStores(() => {
    if (stateFromStores) {
      if (!closure_9) {
        const _Date = Date;
        if (!tmp7) {
          let tmp8 = closure_13;
          if (!closure_13) {
            tmp8 = !closure_15;
          }
          if (!tmp8) {
            tmp8 = closure_10;
          }
          if (tmp8) {
            const collectiblesShopHome = CollectiblesActionCreators.fetchCollectiblesShopHome(closure_0, closure_12, closure_2);
          }
        }
        tmp7 = null != closure_8 && Date.now() - closure_6 < collapsed;
      }
    }
  }, items6);
  const items7 = [arg0, tmp13, arg2];
  const obj4 = require("useHasExpiredShopBlocks");
  return {
    isFetchingShopHome: tmp3[5],
    fetchShopHomeError: tmp3[4],
    shopBlocks: tmp4,
    refreshShopHome: stateFromStores1(() => {
      const collectiblesShopHome = CollectiblesActionCreators.fetchCollectiblesShopHome(closure_0, closure_12, closure_2);
    }, items7)
  };
});