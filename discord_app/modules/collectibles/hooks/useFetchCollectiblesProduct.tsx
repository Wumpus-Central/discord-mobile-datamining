// === Module 10791: useFetchCollectiblesProduct ===

// Module 10791 (useFetchCollectiblesProduct)
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7065 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import SKUStore_mod from "SKUStore" /* 5702 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7066 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const useEffect = react.useEffect;
let SKUStore = SKUStore_mod;
let SKUProductLines = Constants.SKUProductLines;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, includeBundles) => {
  let closure_0;
  let closure_2;
  let closure_6;
  let first;
  let stateFromStores1;
  let tmp10;
  let tmp12;
  let tmp16;
  let tmp6;
  _require = arg0;
  dependencyMap = includeBundles;
  const tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(28);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SKUStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function f() {
      let value = null;
      if (null != closure_0) {
        value = SKUStore.get(tmp);
      }
      return value;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  _slicedToArray = tmp8;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStores1];
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function b() {
      const items = [CollectiblesCategoryStore.getProduct(closure_0), CollectiblesCategoryStore.getProductFetch(closure_0)];
      return items;
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
  }
  const tmpResult3 = tmp(573);
  const tmp13 = _slicedToArray(tmpResult3.useStateFromStoresArray(tmp10, tmp12), 2);
  const first1 = tmp13[0];
  SKUStore = tmp15;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [stateFromStores1];
    cResult[6] = items2;
    tmp16 = items2;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] !== arg0) {
    class L {
      constructor() {
        return CollectiblesCategoryStore.isProductFetchBackedOff(closure_0);
      }
    }
    cResult[7] = arg0;
    cResult[8] = L;
  } else {
    class L {
      constructor() {
        return CollectiblesCategoryStore.isProductFetchBackedOff(closure_0);
      }
    }
  }
  const tmpResult4 = tmp(573);
  stateFromStores1 = tmpResult4.useStateFromStores(tmp16, L);
  let tmp20 = true === includeBundles;
  if (tmp20) {
    class L {
      constructor() {
        return CollectiblesCategoryStore.isProductFetchBackedOff(closure_0);
      }
    }
    if (first1 != null) {
      class L {
        constructor() {
          return CollectiblesCategoryStore.isProductFetchBackedOff(closure_0);
        }
      }
    }
    tmp20 = tmp21 === tmp(1980).CollectiblesItemType.BUNDLE;
  }
  if (tmp20) {
    class L {
      constructor() {
        return CollectiblesCategoryStore.isProductFetchBackedOff(closure_0);
      }
    }
    tmp20 = 0 === first1.items.length;
  }
  SKUProductLines = tmp20;
  const tmp22 = cResult[9];
  if (tmp13[1] != null) {
    class L {
      constructor() {
        return CollectiblesCategoryStore.isProductFetchBackedOff(closure_0);
      }
    }
  }
  if (tmp22 === undefined) {
    class L {
      constructor() {
        return CollectiblesCategoryStore.isProductFetchBackedOff(closure_0);
      }
    }
  }
  if (tmp13[1] != null) {
    class L {
      constructor() {
        return CollectiblesCategoryStore.isProductFetchBackedOff(closure_0);
      }
    }
  }
  class E {
    constructor() {
      let tmp2 = null == closure_0;
      if (!tmp2) {
        tmp2 = null != first1 && !closure_6;
        const tmp4 = null != first1 && !closure_6;
      }
      if (!tmp2) {
        tmp2 = closure_2;
      }
      if (!tmp2) {
        state = undefined;
        if (state != null) {
          state = state.state;
        }
        tmp2 = "fetching" === state;
      }
      if (!tmp2) {
        tmp2 = stateFromStores1;
      }
      if (!tmp2) {
        const obj2 = { includeBundles };
        const obj = CollectiblesActionCreators;
        const collectiblesProduct = obj.fetchCollectiblesProduct(closure_0, obj2);
      }
    }
  }
  cResult[9] = undefined;
  cResult[10] = includeBundles;
  cResult[11] = stateFromStores1;
  cResult[12] = null != stateFromStores && stateFromStores.productLine !== SKUProductLines.COLLECTIBLES;
  cResult[13] = tmp20;
  cResult[14] = first1;
  cResult[15] = arg0;
  cResult[16] = E;
}) : ((arg0, includeBundles) => {
  let closure_0;
  let closure_2;
  let closure_6;
  let state;
  let stateFromStores1;
  _require = arg0;
  dependencyMap = includeBundles;
  const tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("useStateFromStores");
  let items = [state];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let value = null;
    if (null != closure_0) {
      value = SKUStore.get(tmp);
    }
    return value;
  });
  let tmp4 = null != stateFromStores && stateFromStores.productLine !== SKUProductLines.COLLECTIBLES;
  _slicedToArray = tmp4;
  const items1 = [stateFromStores1];
  const tmpResult = tmp(573);
  const tmp6 = _slicedToArray(tmpResult.useStateFromStoresArray(items1, () => {
    const items = [CollectiblesCategoryStore.getProduct(closure_0), CollectiblesCategoryStore.getProductFetch(closure_0)];
    return items;
  }), 2);
  const product = tmp6[0];
  state = tmp8;
  const items2 = [stateFromStores1];
  const tmpResult2 = tmp(573);
  stateFromStores1 = tmpResult2.useStateFromStores(items2, () => CollectiblesCategoryStore.isProductFetchBackedOff(closure_0));
  let tmp10 = true === includeBundles;
  if (tmp10) {
    let type;
    if (product != null) {
      type = product.type;
    }
    tmp10 = type === tmp(1980).CollectiblesItemType.BUNDLE;
  }
  if (tmp10) {
    tmp10 = 0 === product.items.length;
  }
  SKUProductLines = tmp10;
  const items3 = [arg0, product, tmp4, tmp6[1], includeBundles, tmp10, stateFromStores1];
  product(() => {
    let tmp2 = null == closure_0;
    if (!tmp2) {
      tmp2 = null != first && !closure_6;
      const tmp4 = null != first && !closure_6;
    }
    if (!tmp2) {
      tmp2 = closure_2;
    }
    if (!tmp2) {
      state = undefined;
      if (state != null) {
        state = state.state;
      }
      tmp2 = "fetching" === state;
    }
    if (!tmp2) {
      tmp2 = stateFromStores1;
    }
    if (!tmp2) {
      const obj2 = { includeBundles };
      const obj = CollectiblesActionCreators;
      const collectiblesProduct = obj.fetchCollectiblesProduct(closure_0, obj2);
    }
  }, items3);
  let obj2 = { product, isFetching: "fetching" === state };
  state = undefined;
  if (tmp6[1] != null) {
    state = tmp8.state;
  }
  return obj2;
});
const result = size.fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProduct.tsx");

export const useFetchCollectiblesProduct = tmp2;