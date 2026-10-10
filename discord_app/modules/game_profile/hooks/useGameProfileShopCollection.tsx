// === Module 9087: useGameProfileShopCollection ===

// Module 9087 (useGameProfileShopCollection)
import c from "c" /* 576 */;
import GameProfileHttpUtils from "GameProfileHttpUtils" /* 8963 */;
import useCollectiblesShopProducts from "useCollectiblesShopProducts" /* 9088 */;
import noop from "module_19" /* 19 */;
import GameProfileStore from "GameProfileStore" /* 8886 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ useEffect: c2, useMemo: c3 } = noop);
let closure_5 = [];
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfileShopCollectionState(arg0) {
  const _require = arg0;
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameProfileStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      let result = null != closure_0;
      if (result) {
        result = GameProfileStore.hasShopCollectionBeenFetched(closure_0);
      }
      const obj = { hasFetched: result, isFetching: null, skuIds: null };
      let result1 = null != closure_0;
      if (result1) {
        result1 = GameProfileStore.isShopCollectionFetching(closure_0);
      }
      obj.isFetching = result1;
      let shopCollectionSkuIds;
      if (null != closure_0) {
        shopCollectionSkuIds = GameProfileStore.getShopCollectionSkuIds(closure_0);
      }
      obj.skuIds = shopCollectionSkuIds;
      return obj;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = require("c");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(first, tmp6);
  hasFetched = stateFromStoresObject.hasFetched;
  ({ isFetching, skuIds } = stateFromStoresObject);
  if (cResult[3] === arg0) {
    if (cResult[4] === hasFetched) {
      let tmp8 = cResult[5];
      let tmp9 = cResult[6];
    }
    closure_2(tmp8, tmp9);
    if (skuIds == null) {
      skuIds = closure_5;
    }
    if (cResult[7] === hasFetched) {
      if (cResult[8] === isFetching) {
        if (cResult[9] === skuIds) {
          let tmp13 = cResult[10];
        }
        return tmp13;
      }
    }
    const obj2 = { skuIds, hasFetched, isFetching };
    cResult[7] = hasFetched;
    cResult[8] = isFetching;
    cResult[9] = skuIds;
    cResult[10] = obj2;
    tmp13 = obj2;
  }
  const fn2 = function h() {
    let result = null == closure_0 || hasFetched;
    if (!result) {
      result = GameProfileStore.isShopCollectionFetching(closure_0);
    }
    if (!result) {
      const shopCollection = GameProfileHttpUtils.getShopCollection(closure_0);
    }
  };
  const items1 = [arg0, hasFetched];
  cResult[3] = arg0;
  cResult[4] = hasFetched;
  cResult[5] = fn2;
  cResult[6] = items1;
  tmp9 = items1;
  tmp8 = fn2;
  const tmpResult = require("initialize");
}) : (function useGameProfileShopCollectionState(arg0) {
  const _require = arg0;
  const items = [GameProfileStore];
  const isFetching = require("initialize").useStateFromStoresObject(items, () => {
    let result = null != closure_0;
    if (result) {
      result = GameProfileStore.hasShopCollectionBeenFetched(closure_0);
    }
    const obj = { hasFetched: result, isFetching: null, skuIds: null };
    let result1 = null != closure_0;
    if (result1) {
      result1 = GameProfileStore.isShopCollectionFetching(closure_0);
    }
    obj.isFetching = result1;
    let shopCollectionSkuIds;
    if (null != closure_0) {
      shopCollectionSkuIds = GameProfileStore.getShopCollectionSkuIds(closure_0);
    }
    obj.skuIds = shopCollectionSkuIds;
    return obj;
  });
  hasFetched = isFetching.hasFetched;
  let skuIds = isFetching.skuIds;
  const items1 = [arg0, hasFetched];
  closure_2(() => {
    let result = null == closure_0 || hasFetched;
    if (!result) {
      result = GameProfileStore.isShopCollectionFetching(closure_0);
    }
    if (!result) {
      const shopCollection = GameProfileHttpUtils.getShopCollection(closure_0);
    }
  }, items1);
  if (skuIds == null) {
    skuIds = closure_5;
  }
  return { skuIds, hasFetched, isFetching: isFetching.isFetching };
});
let closure_6 = tmp3;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
function useGameProfileShopCollection(arg0) {
  return closure_6(arg0).skuIds;
}
let result1 = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileShopCollection.tsx");

export const useGameProfileShopCollectionState = tmp3;
export { useGameProfileShopCollection };
export const useGameProfileShopCollectionProducts = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfileShopCollectionProducts(arg0) {
  const cResult = c.c(15);
  const tmp4 = closure_6(arg0);
  ({ skuIds, hasFetched } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { flattenVariants: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const collectiblesShopProducts = useCollectiblesShopProducts.useCollectiblesShopProducts(skuIds, first);
  if (cResult[1] === collectiblesShopProducts) {
    if (cResult[2] === skuIds) {
      if (cResult[7] === collectiblesShopProducts) {
        if (cResult[8] === skuIds) {
          let tmp16 = null != arg0;
          if (tmp16) {
            let isFetching = !hasFetched;
            if (hasFetched) {
              isFetching = tmp4.isFetching;
            }
            if (!isFetching) {
              isFetching = skuIds.length > 0 && tmp11;
              const tmp17 = skuIds.length > 0 && tmp11;
            }
            tmp16 = isFetching;
          }
          if (cResult[12] === tmp7) {
            if (cResult[13] === tmp16) {
              let tmp18 = cResult[14];
            }
            return tmp18;
          }
          const obj3 = { products: tmp7, isLoading: tmp16 };
          cResult[12] = tmp7;
          cResult[13] = tmp16;
          cResult[14] = obj3;
          tmp18 = obj3;
        }
      }
      if (cResult[10] !== collectiblesShopProducts) {
        class P {
          constructor(arg0) {
            tmp = closure_0[arg0];
            state = undefined;
            if (tmp != null) {
              state = tmp.state;
            }
            return "loading" === state;
          }
        }
        cResult[10] = collectiblesShopProducts;
        cResult[11] = P;
      } else {
        class P {
          constructor(arg0) {
            tmp = closure_0[arg0];
            state = undefined;
            if (tmp != null) {
              state = tmp.state;
            }
            return "loading" === state;
          }
        }
      }
      const someResult = skuIds.some(P);
      cResult[7] = collectiblesShopProducts;
      cResult[8] = skuIds;
      cResult[9] = someResult;
    }
  }
  if (cResult[4] !== collectiblesShopProducts) {
    class P {
      constructor(arg0) {
        tmp = closure_0[arg0];
        state = undefined;
        if (tmp != null) {
          state = tmp.state;
        }
        return "loading" === state;
      }
    }
    cResult[4] = collectiblesShopProducts;
    cResult[5] = S;
    let mapped = S;
  } else {
    class P {
      constructor(arg0) {
        tmp = closure_0[arg0];
        state = undefined;
        if (tmp != null) {
          state = tmp.state;
        }
        return "loading" === state;
      }
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor(arg0) {
        tmp = closure_0[arg0];
        state = undefined;
        if (tmp != null) {
          state = tmp.state;
        }
        return "loading" === state;
      }
    }
    cResult[6] = tmp9;
  } else {
    class P {
      constructor(arg0) {
        tmp = closure_0[arg0];
        state = undefined;
        if (tmp != null) {
          state = tmp.state;
        }
        return "loading" === state;
      }
    }
  }
  mapped = skuIds.map(mapped);
  const found = mapped.filter(tmp9);
  cResult[1] = collectiblesShopProducts;
  cResult[2] = skuIds;
  cResult[3] = found;
  const tmpResult = useCollectiblesShopProducts;
}) : (function useGameProfileShopCollectionProducts(arg0) {
  const tmp = closure_6(arg0);
  const skuIds = tmp.skuIds;
  const hasFetched = tmp.hasFetched;
  const collectiblesShopProducts = useCollectiblesShopProducts.useCollectiblesShopProducts(skuIds, { flattenVariants: true });
  const items = [skuIds, collectiblesShopProducts];
  const obj2 = {
    products: React3(() => {
      const mapped = skuIds.map((item) => {
        let product;
        if (collectiblesShopProducts[item] != null) {
          product = tmp.product;
        }
        return product;
      });
      return mapped.filter((item) => null != item);
    }, items),
    isLoading: null
  };
  let tmp5 = null != arg0;
  if (tmp5) {
    let isFetching = !hasFetched;
    if (hasFetched) {
      isFetching = tmp.isFetching;
    }
    if (!isFetching) {
      isFetching = skuIds.length > 0 && tmp4;
      const tmp6 = skuIds.length > 0 && tmp4;
    }
    tmp5 = isFetching;
  }
  obj2.isLoading = tmp5;
  return obj2;
});